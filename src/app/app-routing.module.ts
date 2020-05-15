import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './components/search/search.component';
import { ResultComponent } from './components/result/result.component';
import { AssetComponent } from './components/asset/asset.component';


const routes: Routes = [
  { path: '', component: SearchComponent },
  { path: 'results/:searchWord', component: ResultComponent },
  { path: 'results/:searchWord/asset/:name/:code/:type', component: AssetComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
