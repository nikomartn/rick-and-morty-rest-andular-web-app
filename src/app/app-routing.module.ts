import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: '', loadChildren: () => import('src/app/people/people.module').then(m => m.PeopleModule)
}, {
  path: 'places', loadChildren: () => import('src/app/places/places.module').then(m => m.PlacesModule)
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
