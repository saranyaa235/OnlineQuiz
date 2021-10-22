import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BuildquizComponent } from './buildquiz/buildquiz.component';
import { TakequizComponent } from './takequiz/takequiz.component';
import { ActivityComponent } from './activity/activity.component';
import {Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { ManageCategoryComponent } from './manage-category/manage-category.component';
import { ManageQuestionsComponent } from './manage-questions/manage-questions.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ViewQuestionsComponent } from './view-questions/view-questions.component';
import { ManageSubcategoryComponent } from './manage-subcategory/manage-subcategory.component';


const appRoutes:Routes =[
  {path:'',component:HomeComponent},
  {path:"buildquiz",component:BuildquizComponent},
  {path:"takequiz",component:TakequizComponent},
  {path:"activity",component:ActivityComponent},
  {path:"manage-category",component:ManageCategoryComponent},
  {path:"manage-questions",component:ManageQuestionsComponent,
    children:[
      {path:"view-questions",component:ViewQuestionsComponent}
    ]
  },
  {path:"manage-subcategory",component:ManageSubcategoryComponent}   

]

@NgModule({
  declarations: [
    AppComponent,
    BuildquizComponent,
    TakequizComponent,
    ActivityComponent,
    ManageCategoryComponent,
    ManageQuestionsComponent,
    ViewQuestionsComponent,
    ManageSubcategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes,{ enableTracing: true }),
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
