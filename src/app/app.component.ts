import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'rxjs-course2';

  constructor() {
    /* base */

     this.observableAndObserver();
    // this.observabeExamples();
    // this.subjectExamples();
    // this.filteringOperators();
    // this.transformationOperators();
    // this.combinationOperators();
    // this.customOperator();


    /* mechanism */
    // this.hotvscold();
    // this.higherOrder()
  }
  observableAndObserver() {

  }
}
