import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';

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