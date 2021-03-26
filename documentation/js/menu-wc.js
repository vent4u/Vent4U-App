'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">Vent4U-App documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AdjustTempPageModule.html" data-type="entity-link">AdjustTempPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AdjustTempPageModule-ee46f511d39d88c35ec3da26cf8fbf3d"' : 'data-target="#xs-components-links-module-AdjustTempPageModule-ee46f511d39d88c35ec3da26cf8fbf3d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AdjustTempPageModule-ee46f511d39d88c35ec3da26cf8fbf3d"' :
                                            'id="xs-components-links-module-AdjustTempPageModule-ee46f511d39d88c35ec3da26cf8fbf3d"' }>
                                            <li class="link">
                                                <a href="components/AdjustTempPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AdjustTempPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AdjustTempPageModule.html" data-type="entity-link">AdjustTempPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AdjustTempPageModule-ee46f511d39d88c35ec3da26cf8fbf3d-1"' : 'data-target="#xs-components-links-module-AdjustTempPageModule-ee46f511d39d88c35ec3da26cf8fbf3d-1"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AdjustTempPageModule-ee46f511d39d88c35ec3da26cf8fbf3d-1"' :
                                            'id="xs-components-links-module-AdjustTempPageModule-ee46f511d39d88c35ec3da26cf8fbf3d-1"' }>
                                            <li class="link">
                                                <a href="components/AdjustTempPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AdjustTempPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AdjustTempPageRoutingModule.html" data-type="entity-link">AdjustTempPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AdjustTempPageRoutingModule.html" data-type="entity-link">AdjustTempPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-58e227ae6b098e74d7bcbb5ece6f8946"' : 'data-target="#xs-components-links-module-AppModule-58e227ae6b098e74d7bcbb5ece6f8946"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-58e227ae6b098e74d7bcbb5ece6f8946"' :
                                            'id="xs-components-links-module-AppModule-58e227ae6b098e74d7bcbb5ece6f8946"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ExploreContainerComponentModule.html" data-type="entity-link">ExploreContainerComponentModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ExploreContainerComponentModule-780bcefa957524af940381ac7c704d29"' : 'data-target="#xs-components-links-module-ExploreContainerComponentModule-780bcefa957524af940381ac7c704d29"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ExploreContainerComponentModule-780bcefa957524af940381ac7c704d29"' :
                                            'id="xs-components-links-module-ExploreContainerComponentModule-780bcefa957524af940381ac7c704d29"' }>
                                            <li class="link">
                                                <a href="components/ExploreContainerComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ExploreContainerComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/OpeningScreenPageModule.html" data-type="entity-link">OpeningScreenPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-OpeningScreenPageModule-1816bb363cd5eed9d94975e972c9cbe5"' : 'data-target="#xs-components-links-module-OpeningScreenPageModule-1816bb363cd5eed9d94975e972c9cbe5"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-OpeningScreenPageModule-1816bb363cd5eed9d94975e972c9cbe5"' :
                                            'id="xs-components-links-module-OpeningScreenPageModule-1816bb363cd5eed9d94975e972c9cbe5"' }>
                                            <li class="link">
                                                <a href="components/OpeningScreenPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">OpeningScreenPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/OpeningScreenPageRoutingModule.html" data-type="entity-link">OpeningScreenPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PickZonePageModule.html" data-type="entity-link">PickZonePageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PickZonePageModule-0c4ac6801f31ebd295347e83d99f2b15"' : 'data-target="#xs-components-links-module-PickZonePageModule-0c4ac6801f31ebd295347e83d99f2b15"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PickZonePageModule-0c4ac6801f31ebd295347e83d99f2b15"' :
                                            'id="xs-components-links-module-PickZonePageModule-0c4ac6801f31ebd295347e83d99f2b15"' }>
                                            <li class="link">
                                                <a href="components/PickZonePage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PickZonePage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PickZonePageRoutingModule.html" data-type="entity-link">PickZonePageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SignInPageModule.html" data-type="entity-link">SignInPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SignInPageModule-82d57ed97d3f1b44cd3f5bc719cbe8bf"' : 'data-target="#xs-components-links-module-SignInPageModule-82d57ed97d3f1b44cd3f5bc719cbe8bf"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SignInPageModule-82d57ed97d3f1b44cd3f5bc719cbe8bf"' :
                                            'id="xs-components-links-module-SignInPageModule-82d57ed97d3f1b44cd3f5bc719cbe8bf"' }>
                                            <li class="link">
                                                <a href="components/SignInPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SignInPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SignInPageRoutingModule.html" data-type="entity-link">SignInPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/StartScreenPageModule.html" data-type="entity-link">StartScreenPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-StartScreenPageModule-8a75a9f6f404e128a14a93da4e754e77"' : 'data-target="#xs-components-links-module-StartScreenPageModule-8a75a9f6f404e128a14a93da4e754e77"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-StartScreenPageModule-8a75a9f6f404e128a14a93da4e754e77"' :
                                            'id="xs-components-links-module-StartScreenPageModule-8a75a9f6f404e128a14a93da4e754e77"' }>
                                            <li class="link">
                                                <a href="components/StartScreenPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">StartScreenPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/StartScreenPageRoutingModule.html" data-type="entity-link">StartScreenPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SystemresetedPageModule.html" data-type="entity-link">SystemresetedPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SystemresetedPageModule-0c83d7cdbab59e351d0171c35cad656e"' : 'data-target="#xs-components-links-module-SystemresetedPageModule-0c83d7cdbab59e351d0171c35cad656e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SystemresetedPageModule-0c83d7cdbab59e351d0171c35cad656e"' :
                                            'id="xs-components-links-module-SystemresetedPageModule-0c83d7cdbab59e351d0171c35cad656e"' }>
                                            <li class="link">
                                                <a href="components/SystemresetedPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SystemresetedPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SystemresetedPageRoutingModule.html" data-type="entity-link">SystemresetedPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SystemSolutionPageModule.html" data-type="entity-link">SystemSolutionPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SystemSolutionPageModule-6baa6a81b2822fbd8db70a9c283682d4"' : 'data-target="#xs-components-links-module-SystemSolutionPageModule-6baa6a81b2822fbd8db70a9c283682d4"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SystemSolutionPageModule-6baa6a81b2822fbd8db70a9c283682d4"' :
                                            'id="xs-components-links-module-SystemSolutionPageModule-6baa6a81b2822fbd8db70a9c283682d4"' }>
                                            <li class="link">
                                                <a href="components/SystemSolutionPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SystemSolutionPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SystemSolutionPageRoutingModule.html" data-type="entity-link">SystemSolutionPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/Tab1PageModule.html" data-type="entity-link">Tab1PageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-Tab1PageModule-00cc65bd7dd33e74977b72ad5bca21fe"' : 'data-target="#xs-components-links-module-Tab1PageModule-00cc65bd7dd33e74977b72ad5bca21fe"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-Tab1PageModule-00cc65bd7dd33e74977b72ad5bca21fe"' :
                                            'id="xs-components-links-module-Tab1PageModule-00cc65bd7dd33e74977b72ad5bca21fe"' }>
                                            <li class="link">
                                                <a href="components/Tab1Page.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">Tab1Page</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/Tab1PageRoutingModule.html" data-type="entity-link">Tab1PageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/Tab2PageModule.html" data-type="entity-link">Tab2PageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-Tab2PageModule-334456d54256af9cb9a298290552d0b1"' : 'data-target="#xs-components-links-module-Tab2PageModule-334456d54256af9cb9a298290552d0b1"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-Tab2PageModule-334456d54256af9cb9a298290552d0b1"' :
                                            'id="xs-components-links-module-Tab2PageModule-334456d54256af9cb9a298290552d0b1"' }>
                                            <li class="link">
                                                <a href="components/Tab2Page.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">Tab2Page</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/Tab2PageRoutingModule.html" data-type="entity-link">Tab2PageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/Tab3PageModule.html" data-type="entity-link">Tab3PageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-Tab3PageModule-f063b64dcca5cbdc54a9e037d1bc31af"' : 'data-target="#xs-components-links-module-Tab3PageModule-f063b64dcca5cbdc54a9e037d1bc31af"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-Tab3PageModule-f063b64dcca5cbdc54a9e037d1bc31af"' :
                                            'id="xs-components-links-module-Tab3PageModule-f063b64dcca5cbdc54a9e037d1bc31af"' }>
                                            <li class="link">
                                                <a href="components/Tab3Page.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">Tab3Page</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/Tab3PageRoutingModule.html" data-type="entity-link">Tab3PageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/TabsPageModule.html" data-type="entity-link">TabsPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-TabsPageModule-eb824eb5a0176a523fb06fbb41e0fad1"' : 'data-target="#xs-components-links-module-TabsPageModule-eb824eb5a0176a523fb06fbb41e0fad1"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-TabsPageModule-eb824eb5a0176a523fb06fbb41e0fad1"' :
                                            'id="xs-components-links-module-TabsPageModule-eb824eb5a0176a523fb06fbb41e0fad1"' }>
                                            <li class="link">
                                                <a href="components/TabsPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TabsPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/TabsPageRoutingModule.html" data-type="entity-link">TabsPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/TempSumPageModule.html" data-type="entity-link">TempSumPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-TempSumPageModule-599a139d233d4785f2ff67f63e1e5911"' : 'data-target="#xs-components-links-module-TempSumPageModule-599a139d233d4785f2ff67f63e1e5911"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-TempSumPageModule-599a139d233d4785f2ff67f63e1e5911"' :
                                            'id="xs-components-links-module-TempSumPageModule-599a139d233d4785f2ff67f63e1e5911"' }>
                                            <li class="link">
                                                <a href="components/TempSumPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TempSumPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/TempSumPageRoutingModule.html" data-type="entity-link">TempSumPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/WelcomeScreenPageModule.html" data-type="entity-link">WelcomeScreenPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-WelcomeScreenPageModule-9e65d313457b609c5230acf7c90b100e"' : 'data-target="#xs-components-links-module-WelcomeScreenPageModule-9e65d313457b609c5230acf7c90b100e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-WelcomeScreenPageModule-9e65d313457b609c5230acf7c90b100e"' :
                                            'id="xs-components-links-module-WelcomeScreenPageModule-9e65d313457b609c5230acf7c90b100e"' }>
                                            <li class="link">
                                                <a href="components/WelcomeScreenPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">WelcomeScreenPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/WelcomeScreenPageRoutingModule.html" data-type="entity-link">WelcomeScreenPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ZoneScreenPageModule.html" data-type="entity-link">ZoneScreenPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ZoneScreenPageModule-3149c19b63e5cfe112c6b7fa76f8ae92"' : 'data-target="#xs-components-links-module-ZoneScreenPageModule-3149c19b63e5cfe112c6b7fa76f8ae92"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ZoneScreenPageModule-3149c19b63e5cfe112c6b7fa76f8ae92"' :
                                            'id="xs-components-links-module-ZoneScreenPageModule-3149c19b63e5cfe112c6b7fa76f8ae92"' }>
                                            <li class="link">
                                                <a href="components/ZoneScreenPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ZoneScreenPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ZoneScreenPageRoutingModule.html" data-type="entity-link">ZoneScreenPageRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#components-links"' :
                            'data-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/AdjustTempPage-1.html" data-type="entity-link">AdjustTempPage</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AppPage.html" data-type="entity-link">AppPage</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});