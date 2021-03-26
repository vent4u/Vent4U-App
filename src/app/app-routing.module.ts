import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/the-tabs/tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'start-screen',
    loadChildren: () => import('./pages/start-screen/start-screen.module').then( m => m.StartScreenPageModule)
  },
  {
    path: 'opening-screen',
    loadChildren: () => import('./pages/opening-screen/opening-screen.module').then( m => m.OpeningScreenPageModule)
  },
  {
    path: 'sign-in',
    loadChildren: () => import('./pages/sign-in/sign-in.module').then( m => m.SignInPageModule)
  },
  {
    path: 'welcome-screen',
    loadChildren: () => import('./pages/welcome-screen/welcome-screen.module').then( m => m.WelcomeScreenPageModule)
  },
  {
    path: 'pick-zone',
    loadChildren: () => import('./pages/pick-zone/pick-zone.module').then( m => m.PickZonePageModule)
  },
  {
    path: 'temp-sum',
    loadChildren: () => import('./pages/temp-sum/temp-sum.module').then( m => m.TempSumPageModule)
  },
  {
    path: 'zone-screen',
    loadChildren: () => import('./pages/zone-screen/zone-screen.module').then( m => m.ZoneScreenPageModule)
  },
  {
    path: 'adjust-temp',
    loadChildren: () => import('./pages/adjust-temp/adjust-temp.module').then( m => m.AdjustTempPageModule)
  },
  {
    path: 'system-solution',
    loadChildren: () => import('./pages/system-solution/system-solution.module').then( m => m.SystemSolutionPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
