//必需
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//非必需
//提供ngModel
import { FormsModule } from '@angular/forms';
//提供路由
import { RouterModule } from "@angular/router";

//引入组件
import { AppComponent } from './components/app.component';
import { WeuiComponent } from './components/weui/weui.component';
import { HeaderComponent } from './components/weui/header.component';

//引入服务
//import { DataService } from './service/data.service';
//使用路由，并在providers中注入
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

//@NgModule装饰器用来为模块定义元数据
@NgModule({ //@NgModule 用来定义模块用的装饰器
	imports: [
		//包含了commonModule和applicationModule模块,封装在浏览器平台运行时的一些工具库
		BrowserModule,
		//表单相关的组件指令等，包含了[(ngModel)]
		FormsModule,
		//RouterModule.forRoot()方法来创建根路由模块
		RouterModule.forRoot([{
			path: 'weui',
			component: WeuiComponent
		}, {
			path: 'header',
			component: HeaderComponent
		}])
		//RouterModule.forRoot(routes,{useHash: false}),
	],
	//导入模块所依赖的组件、指令等,用于指定这个模块的视图类
	declarations: [AppComponent, WeuiComponent, HeaderComponent],
	//全局注入服务
	providers: [{
		provide: LocationStrategy,
		useClass: HashLocationStrategy
	}],
	//标记出引导组件
	//把这个AppComponent标记为引导 (bootstrap) 组件
	//当Angular引导应用时它会在DOM中渲染AppComponent，并把结果放进index.html的元素内部
	bootstrap: [AppComponent]
})
export class AppModule {}