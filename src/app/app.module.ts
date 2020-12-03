import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { TableKeyboardNavigationModule } from './shared-modules/table-keyboard-navigation'

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, TableKeyboardNavigationModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
