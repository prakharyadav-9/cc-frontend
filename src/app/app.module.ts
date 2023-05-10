import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { UpcardComponent } from './upcard/upcard.component';
import { DowcardComponent } from './dowcard/dowcard.component';
import {MatGridListModule} from '@angular/material/grid-list'; 
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import { UpTextComponent } from './up-text/up-text.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { UpFileComponent } from './up-file/up-file.component';
import { NgxDropzoneModule } from 'ngx-dropzone';
// import { NgxDropzoneWrapperModule } from 'ngx-dropzone-wrapper';
import { FormsModule } from '@angular/forms';
import { DowconComponent } from './dowcon/dowcon.component';
import {MatDividerModule} from '@angular/material/divider';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideMessaging,getMessaging } from '@angular/fire/messaging'; 
import {AngularFireModule } from '@angular/fire/compat';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    UpcardComponent,
    DowcardComponent,
    UpTextComponent,
    UpFileComponent,
    DowconComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatGridListModule,
    MatCardModule,
    MatTabsModule,
    MatInputModule,
    MatFormFieldModule,
    NgxDropzoneModule,
    FormsModule,
    MatDividerModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideMessaging(() => getMessaging())
    // NgxDropzoneWrapperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
