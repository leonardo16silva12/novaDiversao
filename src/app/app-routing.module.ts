import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'sonic',
    loadChildren: () => import('./filmes/sonic/sonic.module').then( m => m.SonicPageModule)
  },
  {
    path: 'milnove',
    loadChildren: () => import('./filmes/milnove/milnove.module').then( m => m.MilnovePageModule)
  },
  {
    path: 'flash',
    loadChildren: () => import('./series/flash/flash.module').then( m => m.FlashPageModule)
  },
  {
    path: 'lacasadepapel',
    loadChildren: () => import('./series/lacasadepapel/lacasadepapel.module').then( m => m.LacasadepapelPageModule)
  },
  {
    path: 'dbz',
    loadChildren: () => import('./desenhos/dbz/dbz.module').then( m => m.DbzPageModule)
  },
  {
    path: 'nshi',
    loadChildren: () => import('./desenhos/nshi/nshi.module').then( m => m.NshiPageModule)
  },
  {
    path: 'idf',
    loadChildren: () => import('./filmes/idf/idf.module').then( m => m.IdfPageModule)
  },
  {
    path: 'ade',
    loadChildren: () => import('./filmes/ade/ade.module').then( m => m.AdePageModule)
  },
  {
    path: 'legacy',
    loadChildren: () => import('./filmes/legacy/legacy.module').then( m => m.LegacyPageModule)
  },
  {
    path: 'irr',
    loadChildren: () => import('./filmes/irr/irr.module').then( m => m.IrrPageModule)
  },
  {
    path: 'sdl',
    loadChildren: () => import('./filmes/sdl/sdl.module').then( m => m.SdlPageModule)
  },
  {
    path: 'opc',
    loadChildren: () => import('./filmes/opc/opc.module').then( m => m.OpcPageModule)
  },
  {
    path: 'b10',
    loadChildren: () => import('./desenhos/b10/b10.module').then( m => m.B10PageModule)
  },
  {
    path: 'pp',
    loadChildren: () => import('./desenhos/pp/pp.module').then( m => m.PpPageModule)
  },
  {
    path: 'jet',
    loadChildren: () => import('./desenhos/jet/jet.module').then( m => m.JetPageModule)
  },
  {
  path: 'voltar',
  loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
},
{
  path: 'voltar2',
  loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
},
{
  path: 'voltar3',
  loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
},


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
