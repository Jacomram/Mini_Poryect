import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSliderModule } from '@angular/material/slider'; 
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatSliderModule, MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatMenuModule,
    MatTabsModule,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MiniProyect';
}
@NgModule({
  imports: [
      MatSidenavModule, MatToolbarModule, MatIconModule,
      MatButtonModule, MatListModule, MatMenuModule,
      MatTabsModule,
  ],
  exports: [
      MatSidenavModule, MatToolbarModule, MatIconModule,
      MatButtonModule, MatListModule, MatMenuModule,
      MatTabsModule,
  ]
})
export class MaterialModule {}