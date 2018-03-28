import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { NgSwitcheryComponent } from "./index";
import { FormsModule } from "@angular/forms";

describe("NgSwitcheryComponent", () => {
  let component: NgSwitcheryComponent;
  let fixture: ComponentFixture<NgSwitcheryComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [FormsModule],
        declarations: [NgSwitcheryComponent]
      });
      fixture = TestBed.createComponent(NgSwitcheryComponent);
      component = fixture.componentInstance;
    })
  );

  test("should exist", () => {
    expect(component).toBeDefined();
  });
});
