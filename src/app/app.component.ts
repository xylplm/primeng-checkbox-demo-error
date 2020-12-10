import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  selectedCities: string[] = [];

  selectedCategories: any[] = ["Technology", "Sports"];

  categories: any[] = [
    { name: "Accounting", key: "A" },
    { name: "Marketing", key: "M" },
    { name: "Production", key: "P" },
    { name: "Research", key: "R" }
  ];

  checked: boolean = false;

  myFormGroup = this.fb.group({
    cities: [null]
  });
  constructor(private readonly fb: FormBuilder) {}

  ngOnInit() {
    this.selectedCategories = this.categories.slice(1, 3);
  }

  get myFormGroupControl() {
    return this.myFormGroup.controls;
  }
}
