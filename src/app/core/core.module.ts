
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// Singletons & global services can be provided here
@NgModule({
  declarations: [],
  imports: [
    HttpClientModule
  ],
  providers: []
})
export class CoreModule {
  // Prevent multiple imports
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import only in AppModule.');
    }
  }
}
