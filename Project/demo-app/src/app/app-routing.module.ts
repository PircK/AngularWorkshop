import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ParentComponent } from './components/parent/parent.component';
import { TextComponent } from './components/text/text.component';
import { TimeComponent } from './components/time/time.component';
import { TestComponent } from './components/test/test.component';
import { HttpClientModule } from '@angular/common/http'; 

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'parent', component: ParentComponent },
  { path: 'text', component: TextComponent },
  { path: 'time', component: TimeComponent },
  { path: 'test', component: TestComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), HttpClientModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
