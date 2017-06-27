import { TestBed, ComponentFixture} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { VoterComponent } from './voter.component';

describe('VoterComponent', () => {
 let component:VoterComponent;
 let fixture: ComponentFixture<VoterComponent>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations:[VoterComponent]
    });
    fixture=TestBed.createComponent(VoterComponent);
    component= fixture.componentInstance;
    //fixture.nativeElement-- calls html element that is the root dom element for the component's template
    //fixture.debugElement-- wrapper around the nativeElement
  });

  it('should render total votes', () => {
    component.othersVote=20;
    component.myVote=1;
    fixture.detectChanges();
    //since fixture is a wrapper around the component's instance and the dom element we get the data in the span element
    let de= fixture.debugElement.query(By.css('.vote-count'));
    // de i.e. debug element is a wrapper around the native html element 
    let el:HTMLElement= de.nativeElement //type of the property nativeElement is set to any
    expect(el.innerText).toBe("21");


  });

  it('should hightlight the upvote button if I have upvoted',()=>  {
   component.myVote=1;
   fixture.detectChanges();
   let de= fixture.debugElement.query(By.css('.glyphicon-menu-up'));
   //de can have attributes, classes or styles to check them 
   expect(de.classes['highlighted']).toBe(true);
  });

  it('should increase the total votes when I click the upvote button', ()=>{
  let button= fixture.debugElement.query(By.css('.glyphicon-menu-up'));
  button.triggerEventHandler('click', null);
  //since clicking a button does not involve any additional data we give the second parameter of the function as null
  expect(component.totalVotes).toBe(1);

  }
});
