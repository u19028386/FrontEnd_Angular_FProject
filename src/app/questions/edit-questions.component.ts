// import { Component, OnInit, ViewChild } from '@angular/core';
// import { FormControl, FormGroup, Validators } from '@angular/forms';
// import { ActivatedRoute, Router } from '@angular/router';
// import { DataService } from '../services/data.service';
// import { Question } from '../shared/question';
// import { NgToastService } from 'ng-angular-popup';
// import { EditConfirmationModalComponent } from '../edit-confirmation-modal/edit-confirmation-modal.component';

// @Component({
//   selector: 'app-edit-questions',
//   templateUrl: './edit-questions.component.html',
//   styleUrls: ['./edit-questions.component.scss']
// })
// export class EditQuestionsComponent implements OnInit {
//   @ViewChild(EditConfirmationModalComponent) editConfirmationModal!: EditConfirmationModalComponent;

//   questionForm = new FormGroup({
//     question1: new FormControl('', Validators.required),
//     answer: new FormControl('', Validators.required),
//     isAnswered: new FormControl(false, Validators.required)
//   });

//   question : Question | null = null;
//   existingQuestions : string[] = [];
//   originalQuestion : string | null = null;
//   originalAnswer : string | null = null;
//   originalIsAnswered : boolean | null = null;
//   changesMade = false;
//   editMessage: string = 'Are you sure you want to update the item?';
//   itemToEdit: string = '';
//   questions: Question[] = [];
//   displayModal: boolean = false;

//   constructor(
//     private dataService: DataService,
//     private router: Router,
//     private route: ActivatedRoute,
//     private toast: NgToastService
//   ) {}

//   ngOnInit(): void {

//     this.dataService.getQuestion(+this.route.snapshot.params['id']).subscribe((result) => {
//         this.question = result as Question;
//         if (this.question) {

//             this.originalAnswer = this.question.answer;
//             this.originalIsAnswered = this.question.isAnswered;
//             this.originalQuestion = this.question.question1;
       

//         this.questionForm.patchValue({
//             answer : this.question.answer || '',
//             question1 : this.question.question1 || '',
//             isAnswered: this.question.isAnswered 
//         });
       
//         }
//       });
//   }

//   cancel() {
//     this.router.navigate(['/question']);
//   }

//   openEditModal(question: Question) {
//     this.itemToEdit = question.question1;
//     this.displayModal = true; 
//   }

//   closeModal() {
//     this.displayModal = false;
//   }

//   editConfirmed() {
//     if (!this.question) {
//       return;
//     }
  
  
//     if (
//         this.questionForm.value.answer === this.originalAnswer &&
//         this.questionForm.value.isAnswered === this.originalIsAnswered && 
//         this.questionForm.value.question1 === this.originalQuestion
//       ) {
//         this.toast.error({ detail: 'Error Message', summary: 'No changes were made to the questions.', duration: 5000 });
//         return;
//       }
  

//       const updatedQuestion: Question = {
//         questionId: this.question.questionId,
//         answer: this.question.answer || '',
//         isAnswered: this.question.isAnswered === true,
//         question1: this.question.question1 || ''
//       };
      
//       console.log(updatedQuestion);
    
//       this.dataService.editQuestion(this.question.questionId, updatedQuestion).subscribe(
//         (result) => {
//           this.toast.success({ detail: 'Success Message', summary: 'Question updated successfully', duration: 5000 });
//           this.itemToEdit = '';
//           this.closeModal();
//           this.router.navigate(['/question']);
//         },
//         (error) => {
//           this.toast.error({ detail: 'Error Message', summary: 'Failed to update question.', duration: 5000 });
        
//         }
//       );
  
   
//   }
// }

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { Question } from '../shared/question';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-edit-questions',
  templateUrl: './edit-questions.component.html',
  styleUrls: ['./edit-questions.component.scss']
})
export class EditQuestionsComponent implements OnInit {
  questionForm: FormGroup;
  question: Question | null = null;
  originalQuestion: Question | null = null;
  changesMade = false;
  editMessage: string = 'Are you sure you want to update the item?';
  itemToEdit: string = '';
  questions: Question[] = [];
  displayModal: boolean = false;

  constructor(
    private dataService: DataService,
    private router: Router,
    private route: ActivatedRoute,
    private toast: NgToastService

  ) {
    this.questionForm = new FormGroup({
      question1: new FormControl('', Validators.required),
      answer: new FormControl('', Validators.required),
      isAnswered: new FormControl(false, Validators.required)
    });
  }

  ngOnInit(): void {
    const questionId = +this.route.snapshot.params['id'];
    this.dataService.getQuestion(questionId).subscribe((result) => {
      this.question = result;
      if (this.question) {
        // Store the original question for comparison
        this.originalQuestion = { ...this.question };

        this.questionForm.patchValue({
          question1: this.question.question1 || '',
          answer: this.question.answer || '',
          isAnswered: this.question.isAnswered || false
        });
      }
    });
  }

  cancel() {
    this.router.navigate(['/question']);
  }

  openEditModal(question: Question) {
    this.itemToEdit = question.question1;
    this.displayModal = true; 
  }

  closeModal() {
    this.displayModal = false;
  }

  editConfirmed() {
    if (!this.question) {
      return;
    }
    
  
    // Update the question with the form values
    this.question.question1 = this.questionForm.value.question1;
    this.question.answer = this.questionForm.value.answer;
    this.question.isAnswered = this.questionForm.value.isAnswered;
  
    // Check if changes were made
    this.changesMade = !this.isEqual(this.question, this.originalQuestion);
  
    if (this.changesMade) {
      // Call your API to update the question
      this.dataService.editQuestion(this.question.questionId, this.question).subscribe(
        (result) => {
          // Handle success
          this.toast.success({ detail: 'Success Message', summary: 'Question updated successfully', duration: 5000 });
        //   this.closeModal();
          this.router.navigate(['/question']);
        },
        (error) => {
          // Handle error
          this.toast.error({ detail: 'Error Message', summary: 'Failed to update question.', duration: 5000 });
          console.error('Error updating question:', error);
        }
      );
    } else {
      // No changes were made, display an error toaster
      this.toast.error({ detail: 'Error Message', summary: 'No changes were made', duration: 5000 });
      console.log('No changes were made to the question.');
    }
  }
  

  isEqual(objA: any, objB: any): boolean {
    // Function to check if two objects are equal
    return JSON.stringify(objA) === JSON.stringify(objB);
  }
}
