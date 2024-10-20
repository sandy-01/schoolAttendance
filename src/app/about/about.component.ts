import { BaseService } from './../shared/services/base.service';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'about',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

listItem:any = [];
  UserDetails!: FormGroup;
  constructor(private fb: FormBuilder, private baseService: BaseService ) {

  }

  data: any;

  ngOnInit() {

    this.baseService.getResidencyList().subscribe((item:any) => {
      this.listItem = item;
    })

    this.UserDetails = new FormGroup({
      username: new FormControl(),
      listSelect: new FormControl()

    })

  }
}
