import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NbLayoutModule, NbThemeModule } from '@nebular/theme';

import { AppComponent } from './app.component';

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		HttpClientModule,
		RouterModule.forRoot([], { initialNavigation: 'enabled' }),
		BrowserAnimationsModule,
		NbThemeModule.forRoot({ name: 'default' }),
		NbLayoutModule,
		NbEvaIconsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
