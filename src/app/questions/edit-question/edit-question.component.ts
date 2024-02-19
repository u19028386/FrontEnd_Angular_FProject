import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { DataService } from 'src/app/services/data.service';

import { Question } from 'src/app/shared/question';
import { NgToastService } from 'ng-angular-popup';

import { EditConfirmationModalComponent } from 'src/app/edit-confirmation-modal/edit-confirmation-modal.component';

@Component({
  selector: 'app-edit-question',
  templateUrl: './edit-question.component.html',
  styleUrls: ['./edit-question.component.scss']
})
export class EditQuestionComponent implements OnInit{
  @ViewChild(EditConfirmationModalComponent) editConfirmationModal!: EditConfirmationModalComponent;

  questionForm = new FormGroup({
    question1: new FormControl('', Validators.required),
    answer: new FormControl('', Validators.required),
    isAnswered: new FormControl('')
  });

  question : Question | null = null;
  existingQuestions : string[] = [];
  originalQuestion : string | null = null;
  originalAnswer : string | null = null;
  originalIsAnswered : boolean | null = null;
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
  ) {}

  ngOnInit(): void {
    // this.getExistingEmployeeTypeNames();
    // this. getExistingBoth();

    // this.dataService.getQuestion(+this.route.snapshot.params['id']).subscribe((result) => {
    //     this.question = result as Question;
    //     if (this.question) {
          
    //       this.originalAnswer = this.question.answer;
    //       this.originalIsAnswered = this.question.isAnswered;
    //       this.originalQuestion = this.question.question1;

        //   this.originalEmployeeTypeName = this.employeetype.employeeTypeName;
        // this.originalEmployeeTypeDescription = this.employeetype.employeeTypeDescription;

      //     this.employeetypeForm.patchValue({
      //       employeeTypeName: this.employeetype.employeeTypeName || '',
      //       employeeTypeDescription: this.employeetype.employeeTypeDescription || ''
      //     });
      //   }
      // });
  //     this.questionForm.patchValue({
  //       answer : this.question.answer || '',
  //       question1 : this.question.question1 || '',
  //       isAnswered: this.question.isAnswered
  //   });
   
  //   }
  // });
   }


}
