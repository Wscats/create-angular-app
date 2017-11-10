import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
/*import { enableProdMode } from '@angular/core';
if (process.env.ENV === 'production') {
  enableProdMode();
}*/

//platformBrowserDynamic().bootstrapModule()方法来编译启用AppModule模块
//根据当前的运行环境，如操作系统、浏览器，来初始化一个运行环境，然后从这个环境里面运行AppModule
import { AppModule } from './app/app.module';
platformBrowserDynamic().bootstrapModule(AppModule);