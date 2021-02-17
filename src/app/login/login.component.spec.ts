import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { AuthService } from '../auth.service';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let authService: AuthService;
  // reference low-level DOM element that represents the component’s view
  let el: DebugElement;

  beforeEach(async () => {
    // refine the test module by declaring the test component
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      providers: [AuthService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    // service = new MockAuthService();
    // component = new LoginComponent(service);
    // create component wrapped with template and test fixture
    fixture = TestBed.createComponent(LoginComponent);
    // get test component from fixture
    component = fixture.componentInstance;
    // AuthService provided to TestBed
    authService = TestBed.inject(AuthService);
    // get the "<a>" element by CSS selector (e.g. by class name) 
    el = fixture.debugElement.query(By.css('a')); //hold reference DOM element
    //fixture.detectChanges();
  });

  afterEach(() => {
    // service = null;
    // component = null;
    //localStorage.removeItem('token');
    });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('login button hidden when the user is authenticated', () =>{
    // initially expect the text inside the <a> tag to be blank.
    expect(el.nativeElement.textContent.trim()).toBe('');
    // Trigger change detection and this lets the template update to the initial value 
    // which is Login since by default we are not authenticated
    fixture.detectChanges();
    expect(el.nativeElement.textContent.trim()).toBe('login');
    // Change the authetication state to true
    spyOn(authService, 'isAuthenticated').and.returnValue(true);
    // The label is still Login! We need changeDetection to run and for angular to update the template.
    expect(el.nativeElement.textContent.trim()).toBe('login');
    // Which we can trigger via fixture.detectChange()
    fixture.detectChanges();
    // Now the label is Logout
    expect(el.nativeElement.textContent.trim()).toBe('logout');
  });

});
