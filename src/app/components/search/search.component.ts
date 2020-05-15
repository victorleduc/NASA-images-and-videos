import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchWord;
  constructor(private form: FormBuilder) { }

  ngOnInit(): void {
    this.searchWord = this.form.group({ search: [] })
  }

  onSubmit() {
    console.log('Mot recherché : ', this.searchWord.value.search)
  }
}
