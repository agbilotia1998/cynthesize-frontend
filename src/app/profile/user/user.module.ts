import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserRoutingModule } from './user-routing.module';
import { SharedModule } from '@app/shared';
import { MaterialModule } from '@app/material.module';
import { Cloudinary as CloudinaryCore } from 'cloudinary-core';
import { CloudinaryConfiguration, CloudinaryModule } from '@cloudinary/angular-5.x';
import { IdeaCardComponent } from '@app/shared/idea-card/idea-card.component';
import { UserComponent } from './user.component';
import { SocialDialogComponent, DetailsComponent } from './details/details.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

export const cloudinary = {
  Cloudinary: CloudinaryCore
};
export const config: CloudinaryConfiguration = {
  cloud_name: 'cynthesize',
  upload_preset: 'qdninpjl'
};
@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    MaterialModule,
    UserRoutingModule,
    ReactiveFormsModule,
    CloudinaryModule.forRoot(cloudinary, config)
  ],
  declarations: [SocialDialogComponent, UserComponent, DetailsComponent],
  entryComponents: [IdeaCardComponent, SocialDialogComponent],
  providers: [
    {
      provide: MatDialogRef,
      useValue: {}
    },
    {
      provide: MAT_DIALOG_DATA,
      useValue: {}
    }
  ]
})
export class UserModule {}
