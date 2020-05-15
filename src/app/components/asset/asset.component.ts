import { Component, OnInit } from '@angular/core';
import { ServiceService } from './../../services/service.service'
import { ActivatedRoute } from '@angular/router/'
import { DetailAssetItem } from '../../model/DetailAsset'

@Component({
  selector: 'app-asset',
  templateUrl: './asset.component.html',
  styleUrls: ['./asset.component.css']
})
export class AssetComponent implements OnInit {
  details: DetailAssetItem[];
  searchWord: string;
  name: string;
  code: string;
  type: string;
  index: number;

  constructor(private serviceService: ServiceService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.searchWord = this.route.snapshot.params.searchWord;
    this.name = this.route.snapshot.params.name;
    this.code = this.route.snapshot.params.code;
    this.type = this.route.snapshot.params.type;
    this.serviceService.getPicture(this.code)
      .subscribe((res) => {
        this.details = res.collection.items;
        this.index = this.findLink();
      });
  }

  findLink() {
    for (var i = 0; i < this.details.length; i++) {
      if (this.details[i].href.indexOf("~orig") > 0) {
        return i;
      }
    }
  }
}
