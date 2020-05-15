import { Component, OnInit } from '@angular/core';
import { ServiceService } from './../../services/service.service'
import { ActivatedRoute } from '@angular/router/'
import { SearchResultItem } from '../../model/SearchResult';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  results: SearchResultItem[];
  searchWord: string;
  constructor(private serviceService: ServiceService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.searchWord = this.route.snapshot.params.searchWord;
    this.serviceService.getPictures(this.searchWord)
      .subscribe((res) => {
        this.results = res.collection.items;
      });
  }
}
