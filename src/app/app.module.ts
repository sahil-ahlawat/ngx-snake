import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BestScoreManager } from './app.storage.service';
//import {hammerjs} from '../../node_modules/hammerjs';
import * as Hammer from 'hammerjs';
  import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';

  export class HammerConfig extends HammerGestureConfig {
    overrides = <any>{
      'swipe': { direction: Hammer.DIRECTION_ALL }
    };
  }


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    BestScoreManager,
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: HammerConfig
    }
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
