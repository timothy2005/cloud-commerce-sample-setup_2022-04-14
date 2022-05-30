"use strict";(self.webpackChunkspartacusstore=self.webpackChunkspartacusstore||[]).push([[832],{5832:(le,b,u)=>{u.r(b),u.d(b,{QuickOrderModule:()=>ue});var e=u(7716),d=u(3679),s=u(647),v=u(5319),Q=u(9112),f=u(6215),x=u(8002),_=u(8049),S=u(8939),p=u(8984),g=u(8583),k=u(5987),h=u(7733),L=u(9765),F=u(5257),M=u(3190),E=u(5435),I=u(8307);let O=(()=>{class r{constructor(t,i,n){this.activeCartService=t,this.productAdapter=i,this.eventService=n,this.productAdded$=new L.xQ,this.entries$=new f.X([])}getEntries(){return this.entries$}search(t){return this.productAdapter.load(t)}clearList(){this.entries$.next([])}loadEntries(t=[]){this.entries$.next(t)}updateEntryQuantity(t,i){const n=this.entries$.getValue()||[];n[t].quantity=i,this.entries$.next(n)}removeEntry(t){this.entries$.pipe((0,F.q)(1)).subscribe(i=>{const n=i;n.splice(t,1),this.entries$.next(n)})}addProduct(t){const i=this.generateOrderEntry(t);this.addEntry(i)}getProductAdded(){return this.productAdded$}setProductAdded(t){this.productAdded$.next(t)}addToCart(){let t=[];const i=[],n=this.eventService.get(s.VDw).subscribe(c=>{(0===c.quantityAdded||c.quantityAdded&&c.quantityAdded<c.quantity)&&i.push(this.createQuickOrderResultEvent(c))});return n.add(this.eventService.get(s.K$F).subscribe(c=>{i.push(this.createQuickOrderResultEvent(c))})),this.getEntries().pipe((0,_.P)(),(0,M.w)(c=>(t=c,this.activeCartService.addEntries(c),this.clearList(),this.activeCartService.isStable())),(0,E.h)(c=>c),(0,x.U)(()=>[t,i]),(0,I.b)(()=>n.unsubscribe()))}generateOrderEntry(t){return{basePrice:t.price,product:t,quantity:1,totalPrice:t.price}}addEntry(t){var i,n;const c=this.entries$.getValue()||[];if((null===(i=t.product)||void 0===i?void 0:i.code)&&this.isProductOnTheList(t.product.code)){const a=c.findIndex(m=>{var q,y;return(null===(q=m.product)||void 0===q?void 0:q.code)===(null===(y=t.product)||void 0===y?void 0:y.code)}),l=c[a].quantity;l&&t.quantity&&(c[a].quantity=l+(null==t?void 0:t.quantity)),this.entries$.next([...c])}else this.entries$.next([...c,t]);this.productAdded$.next(null===(n=t.product)||void 0===n?void 0:n.code)}isProductOnTheList(t){return!!(this.entries$.getValue()||[]).find(n=>{var c;return(null===(c=n.product)||void 0===c?void 0:c.code)===t})}createQuickOrderResultEvent(t){var i,n,c;let a={productCode:t.productCode,quantity:t.quantity,entry:t.entry||void 0,quantityAdded:t.quantityAdded,error:t.error||void 0};if(null===(n=null===(i=a.error)||void 0===i?void 0:i.details)||void 0===n?void 0:n.length){let l=null===(c=a.error)||void 0===c?void 0:c.details.some(m=>"InsufficientStockError"===m.type);a.quantityAdded=l?0:a.quantity}return a}}return r.\u0275fac=function(t){return new(t||r)(e.LFG(s.CPo),e.LFG(s.EX),e.LFG(s.POd))},r.\u0275prov=e.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})();const w=[O,{provide:h.be,useExisting:O}];let Z=(()=>{class r{constructor(t,i,n){this.quickOrderService=t,this.siteContextParamsService=i,this.statePersistenceService=n,this.subscription=new v.w,this.key="quick-order"}initSync(){this.subscription.add(this.statePersistenceService.syncWithStorage({key:this.key,state$:this.quickOrderService.getEntries(),context$:this.siteContextParamsService.getValues([s.iEg]),storageType:s.iHd.SESSION_STORAGE,onRead:t=>this.onRead(t)}))}onRead(t){t&&this.quickOrderService.loadEntries(t)}ngOnDestroy(){this.subscription.unsubscribe()}}return r.\u0275fac=function(t){return new(t||r)(e.LFG(h.be),e.LFG(s.Qnj),e.LFG(s.WBb))},r.\u0275prov=e.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})(),$=(()=>{class r{static forRoot(){return{ngModule:r}}}return r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({providers:[...w,Z]}),r})();function J(r,o){if(1&r){const t=e.EpF();e.ynx(0),e.TgZ(1,"div",1),e._uU(2),e.ALo(3,"cxTranslate"),e.qZA(),e.TgZ(4,"div",2),e.TgZ(5,"form",3),e.NdJ("ngSubmit",function(){return e.CHM(t),e.oxw().applyQuickOrder()}),e.TgZ(6,"div",4),e.TgZ(7,"span",5),e.TgZ(8,"label",6),e._uU(9),e.ALo(10,"cxTranslate"),e.qZA(),e._UZ(11,"input",7),e.ALo(12,"cxTranslate"),e.qZA(),e.TgZ(13,"span",8),e.TgZ(14,"label",6),e._uU(15),e.ALo(16,"cxTranslate"),e.qZA(),e._UZ(17,"input",9),e.qZA(),e.TgZ(18,"button",10),e.ALo(19,"async"),e.ALo(20,"async"),e._uU(21),e.ALo(22,"cxTranslate"),e.qZA(),e._UZ(23,"cx-form-errors",11),e._UZ(24,"cx-form-errors",11),e.qZA(),e.qZA(),e.qZA(),e.BQk()}if(2&r){const t=e.oxw();e.xp6(2),e.hij(" ",e.lcZ(3,12,"quickOrderCartForm.title")," "),e.xp6(3),e.Q6J("formGroup",t.quickOrderForm),e.xp6(4),e.hij(" ",e.lcZ(10,14,"quickOrderCartForm.productCodeLabel")," "),e.xp6(2),e.s9C("placeholder",e.lcZ(12,16,"quickOrderCartForm.productCodePlaceholder")),e.xp6(4),e.hij(" ",e.lcZ(16,18,"quickOrderCartForm.quantityLabel")," "),e.xp6(2),e.Q6J("min",t.min),e.xp6(1),e.ekj("disabled",e.lcZ(19,20,t.cartIsLoading$)),e.Q6J("disabled",e.lcZ(20,22,t.cartIsLoading$)),e.xp6(3),e.hij(" ",e.lcZ(22,24,"quickOrderCartForm.addToCart")," "),e.xp6(2),e.Q6J("control",t.quickOrderForm.get("productCode")),e.xp6(1),e.Q6J("control",t.quickOrderForm.get("quantity"))}}function P(r,o){1&r&&(e.TgZ(0,"span",6),e._uU(1),e.ALo(2,"cxTranslate"),e.qZA()),2&r&&(e.xp6(1),e.hij(" ",e.lcZ(2,1,"quickOrderForm.listLimitReached")," "))}const T=function(r){return{disabled:r}},C=function(r){return{cxRoute:"product",params:r}};function U(r,o){if(1&r&&(e.TgZ(0,"div",11),e._UZ(1,"cx-quick-order-item",12),e.qZA()),2&r){const t=o.$implicit,i=o.index,n=e.oxw(2);e.xp6(1),e.Q6J("entry",t)("index",i)("loading",n.loading)}}function D(r,o){if(1&r&&(e.TgZ(0,"div",1),e.TgZ(1,"div",2),e.TgZ(2,"div",3),e._UZ(3,"div",4),e.TgZ(4,"div",5),e.TgZ(5,"div",3),e.TgZ(6,"div",6),e._uU(7),e.ALo(8,"cxTranslate"),e.qZA(),e.TgZ(9,"div",7),e._uU(10),e.ALo(11,"cxTranslate"),e.qZA(),e.TgZ(12,"div",8),e._uU(13),e.ALo(14,"cxTranslate"),e.qZA(),e._UZ(15,"div",9),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.YNc(16,U,2,3,"div",10),e.qZA()),2&r){const t=e.oxw();e.xp6(7),e.hij(" ",e.lcZ(8,4,"quickOrderTable.product")," "),e.xp6(3),e.hij(" ",e.lcZ(11,6,"quickOrderTable.price")," "),e.xp6(3),e.hij(" ",e.lcZ(14,8,"quickOrderTable.quantity")," "),e.xp6(3),e.Q6J("ngForOf",t.entries)}}const A=function(r,o){return{name:r,code:o}};function Y(r,o){if(1&r&&(e.TgZ(0,"li",5),e.TgZ(1,"span"),e._uU(2),e.ALo(3,"cxTranslate"),e.qZA(),e.qZA()),2&r){const t=o.$implicit;e.xp6(2),e.hij(" ",e.xi3(3,1,"quickOrderList.errors.productIsOutOfStock",e.WLB(4,A,t.entry.product.name,t.entry.product.code))," ")}}function N(r,o){if(1&r){const t=e.EpF();e.TgZ(0,"cx-message",2),e.NdJ("closeMessage",function(){return e.CHM(t),e.oxw(2).clearErrors()}),e.ALo(1,"cxTranslate"),e.TgZ(2,"ul",3),e.YNc(3,Y,4,7,"li",4),e.qZA(),e.qZA()}if(2&r){const t=e.oxw().ngIf,i=e.oxw();e.Q6J("text",e.lcZ(1,3,"quickOrderList.errorProceedingToCart"))("type",i.globalMessageType.MSG_TYPE_ERROR),e.xp6(3),e.Q6J("ngForOf",t)}}function R(r,o){if(1&r&&(e.ynx(0),e.YNc(1,N,4,5,"cx-message",1),e.BQk()),2&r){const t=o.ngIf;e.xp6(1),e.Q6J("ngIf",t.length>0)}}const j=function(r,o,t){return{name:r,code:o,quantityAdded:t}};function W(r,o){if(1&r&&(e.TgZ(0,"li",8),e.TgZ(1,"span"),e._uU(2),e.ALo(3,"cxTranslate"),e.qZA(),e.qZA()),2&r){const t=o.$implicit;e.xp6(2),e.hij(" ",e.xi3(3,1,"quickOrderList.warnings.productWasReduced",e.kEZ(4,j,t.entry.product.name,t.entry.product.code,t.quantityAdded))," ")}}function G(r,o){if(1&r){const t=e.EpF();e.TgZ(0,"cx-message",2),e.NdJ("closeMessage",function(){return e.CHM(t),e.oxw(2).clearWarnings()}),e.ALo(1,"cxTranslate"),e.TgZ(2,"ul",6),e.YNc(3,W,4,8,"li",7),e.qZA(),e.qZA()}if(2&r){const t=e.oxw().ngIf,i=e.oxw();e.Q6J("text",e.lcZ(1,3,"quickOrderList.warningProceedingToCart"))("type",i.globalMessageType.MSG_TYPE_WARNING),e.xp6(3),e.Q6J("ngForOf",t)}}function B(r,o){if(1&r&&(e.ynx(0),e.YNc(1,G,4,5,"cx-message",1),e.BQk()),2&r){const t=o.ngIf;e.xp6(1),e.Q6J("ngIf",t.length>0)}}function X(r,o){if(1&r&&(e.TgZ(0,"li",11),e.TgZ(1,"span"),e._uU(2),e.ALo(3,"cxTranslate"),e.qZA(),e.qZA()),2&r){const t=o.$implicit;e.xp6(2),e.Oqu(e.xi3(3,1,"quickOrderList.successes.productAddedToCart",e.WLB(4,A,t.product.name,t.product.code)))}}function V(r,o){if(1&r){const t=e.EpF();e.TgZ(0,"cx-message",2),e.NdJ("closeMessage",function(){return e.CHM(t),e.oxw(2).clearSuccesses()}),e.ALo(1,"cxTranslate"),e.TgZ(2,"ul",9),e.YNc(3,X,4,7,"li",10),e.qZA(),e.qZA()}if(2&r){const t=e.oxw().ngIf,i=e.oxw();e.Q6J("text",e.lcZ(1,3,"quickOrderList.successfullyAddedToCart"))("type",i.globalMessageType.MSG_TYPE_CONFIRMATION),e.xp6(3),e.Q6J("ngForOf",t)}}function z(r,o){if(1&r&&(e.ynx(0),e.YNc(1,V,4,5,"cx-message",1),e.BQk()),2&r){const t=o.ngIf;e.xp6(1),e.Q6J("ngIf",t.length>0)}}function H(r,o){if(1&r){const t=e.EpF();e.TgZ(0,"button",21),e.NdJ("click",function(){return e.CHM(t),e.oxw(3).clear()}),e.ALo(1,"cxTranslate"),e.ALo(2,"async"),e._uU(3),e.ALo(4,"cxTranslate"),e.qZA()}if(2&r){const t=e.oxw(3);e.Q6J("disabled",!e.lcZ(2,5,t.isCartStable$)),e.uIk("aria-label",e.lcZ(1,3,"quickOrderList.emptyList")),e.xp6(3),e.hij(" ",e.lcZ(4,7,"quickOrderList.emptyList")," ")}}const K=function(r){return{limit:r}};function ee(r,o){if(1&r){const t=e.EpF();e.ynx(0),e.TgZ(1,"div",12),e.TgZ(2,"h3"),e._uU(3),e.ALo(4,"cxTranslate"),e.qZA(),e.TgZ(5,"p"),e._uU(6),e.ALo(7,"cxTranslate"),e.qZA(),e.qZA(),e.TgZ(8,"div",13),e._UZ(9,"cx-quick-order-form",14),e.ALo(10,"async"),e.qZA(),e.TgZ(11,"div",15),e._UZ(12,"cx-quick-order-table",16),e.ALo(13,"async"),e.qZA(),e.TgZ(14,"div",17),e.TgZ(15,"div",18),e.YNc(16,H,5,9,"button",19),e.qZA(),e.TgZ(17,"div",18),e.TgZ(18,"cx-progress-button",20),e.NdJ("clikEvent",function(){const c=e.CHM(t).ngIf;return e.oxw(2).addToCart(c)}),e.ALo(19,"cxTranslate"),e.ALo(20,"async"),e._uU(21),e.ALo(22,"cxTranslate"),e.qZA(),e.qZA(),e.qZA(),e.BQk()}if(2&r){const t=o.ngIf,i=e.oxw().ngIf,n=e.oxw();e.xp6(3),e.Oqu(e.lcZ(4,13,"quickOrderList.header")),e.xp6(3),e.hij(" ",e.xi3(7,15,"quickOrderList.subHeader",e.VKq(28,K,i))," "),e.xp6(3),e.Q6J("isDisabled",t.length>=i)("isLoading",!e.lcZ(10,18,n.isCartStable$)),e.xp6(3),e.Q6J("entries",t)("loading",!e.lcZ(13,20,n.isCartStable$)),e.xp6(4),e.Q6J("ngIf",t.length),e.xp6(2),e.Tol("btn-block add-button"),e.Q6J("ariaLabel",e.lcZ(19,22,"quickOrderList.addToCart"))("disabled",!t.length)("loading",!e.lcZ(20,24,n.isCartStable$)),e.xp6(3),e.hij(" ",e.lcZ(22,26,"quickOrderList.addToCart")," ")}}function te(r,o){if(1&r&&(e.ynx(0),e.YNc(1,ee,23,30,"ng-container",0),e.ALo(2,"async"),e.BQk()),2&r){const t=e.oxw();e.xp6(1),e.Q6J("ngIf",e.lcZ(2,1,t.entries$))}}let re=(()=>{class r{constructor(t,i,n,c){this.activeCartService=t,this.eventService=i,this.formBuilder=n,this.globalMessageService=c,this.cartIsLoading$=this.activeCartService.isStable().pipe((0,x.U)(a=>!a)),this.cart$=this.activeCartService.getActive(),this.min=1,this.subscription=new v.w,this.cartEventsSubscription=new v.w,this.minQuantityValue=1}ngOnInit(){this.buildForm(),this.watchQuantityChange()}ngOnDestroy(){var t,i;null===(t=this.subscription)||void 0===t||t.unsubscribe(),null===(i=this.cartEventsSubscription)||void 0===i||i.unsubscribe()}applyQuickOrder(){var t,i;if(this.quickOrderForm.invalid)return void this.quickOrderForm.markAllAsTouched();const n=null===(t=this.quickOrderForm.get("productCode"))||void 0===t?void 0:t.value,c=null===(i=this.quickOrderForm.get("quantity"))||void 0===i?void 0:i.value;this.watchAddEntrySuccessEvent(),this.watchAddEntryFailEvent(),n&&c&&this.activeCartService.addEntry(n,c)}buildForm(){this.quickOrderForm=this.formBuilder.group({productCode:["",[d.kI.required]],quantity:[this.minQuantityValue,[d.kI.required]]})}watchQuantityChange(){var t;this.subscription.add(null===(t=this.quickOrderForm.get("quantity"))||void 0===t?void 0:t.valueChanges.subscribe(i=>{var n;return null===(n=this.quickOrderForm.get("quantity"))||void 0===n?void 0:n.setValue(this.getValidCount(i),{emitEvent:!1})}))}watchAddEntrySuccessEvent(){this.cartEventsSubscription.add(this.eventService.get(s.VDw).pipe((0,_.P)()).subscribe(t=>{var i,n;let a,c="quickOrderCartForm.stockLevelReached",l=s.xUg.MSG_TYPE_WARNING;t.quantityAdded&&(c=t.quantityAdded>1?"quickOrderCartForm.entriesWasAdded":"quickOrderCartForm.entryWasAdded",a=t.quantityAdded>1?"quickOrderCartForm.products":"quickOrderCartForm.product",l=s.xUg.MSG_TYPE_CONFIRMATION),this.globalMessageService.add({key:c,params:{product:(null===(n=null===(i=null==t?void 0:t.entry)||void 0===i?void 0:i.product)||void 0===n?void 0:n.name)||a,quantity:t.quantityAdded}},l),this.resetForm()}))}watchAddEntryFailEvent(){this.cartEventsSubscription.add(this.eventService.get(s.K$F).pipe((0,_.P)()).subscribe(()=>{this.globalMessageService.add({key:"quickOrderCartForm.noResults"},s.xUg.MSG_TYPE_ERROR)}))}getValidCount(t){return(t<this.min||!t)&&(t=this.min),t}resetForm(){this.quickOrderForm.reset()}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(s.CPo),e.Y36(s.POd),e.Y36(d.qu),e.Y36(s.IWp))},r.\u0275cmp=e.Xpm({type:r,selectors:[["cx-cart-quick-order-form"]],decls:2,vars:3,consts:[[4,"ngIf"],[1,"cx-cart-quick-order-form-title"],[1,"form-group"],[3,"formGroup","ngSubmit"],[1,"cx-cart-quick-order-form-container"],[1,"cx-cart-quick-order-form-productID"],[1,"cx-cart-quick-order-form-label"],["formControlName","productCode","type","text",1,"form-control","input-product-code",3,"placeholder"],[1,"cx-cart-quick-order-form-qty"],["formControlName","quantity","type","number",1,"form-control","input-quantity",3,"min"],["type","submit",1,"btn","btn-block","btn-action","apply-quick-order-button",3,"disabled"],[3,"control"]],template:function(t,i){1&t&&(e.YNc(0,J,25,26,"ng-container",0),e.ALo(1,"async")),2&t&&e.Q6J("ngIf",e.lcZ(1,1,i.cart$))},directives:[g.O5,d._Y,d.JL,d.sg,d.Fj,d.JJ,d.u,d.wV,d.qQ,p.Ahv],pipes:[g.Ov,s.X$D],encapsulation:2,changeDetection:0}),r})(),ie=(()=>{class r{}return r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({providers:[(0,s.i51)({cmsComponents:{CartQuickOrderFormComponent:{component:re}}})],imports:[[g.ez,d.UX,s.LUR,p.Fym]]}),r})(),ne=(()=>{class r{constructor(t,i){this.globalMessageService=t,this.quickOrderService=i,this.iconTypes=p.e1G,this.isSearching=!1,this.subscription=new v.w,this._disabled=!1,this._loading=!1}get isDisabled(){return this._disabled}set isDisabled(t){this._disabled=t,this.validateProductControl(t)}get isLoading(){return this._loading}set isLoading(t){this._loading=t,this.validateProductControl(t)}ngOnInit(){this.buildForm(),this.subscription.add(this.watchProductAdd())}search(t){var i;if(this.form.invalid)return;null==t||t.preventDefault();const n=null===(i=this.form.get("product"))||void 0===i?void 0:i.value;this.isSearching=!0,this.subscription.add(this.searchProduct(n))}clear(t){null==t||t.preventDefault(),this.form.reset()}searchProduct(t){return this.quickOrderService.search(t).pipe((0,S.x)(()=>this.isSearching=!1)).subscribe(i=>{this.quickOrderService.addProduct(i)},i=>{this.globalMessageService.add(i.error.errors[0].message,s.xUg.MSG_TYPE_ERROR)})}buildForm(){const t=new d.cw({});t.setControl("product",new d.NI(null)),this.form=t,this.validateProductControl(this.isDisabled)}watchProductAdd(){return this.quickOrderService.getProductAdded().subscribe(()=>this.clear())}validateProductControl(t){var i,n,c,a;t?null===(n=null===(i=this.form)||void 0===i?void 0:i.get("product"))||void 0===n||n.disable():null===(a=null===(c=this.form)||void 0===c?void 0:c.get("product"))||void 0===a||a.enable()}ngOnDestroy(){this.subscription.unsubscribe()}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(s.IWp),e.Y36(h.be))},r.\u0275cmp=e.Xpm({type:r,selectors:[["cx-quick-order-form"]],inputs:{isDisabled:"isDisabled",isLoading:"isLoading"},decls:8,vars:10,consts:[[1,"quick-order-form-container",3,"formGroup","ngSubmit"],[1,"quick-order-form-input"],["formControlName","product","type","text",1,"form-control",3,"placeholder"],["tabindex","-1",1,"search",3,"type"],[3,"control"],["class","list-limit-reached-text",4,"ngIf"],[1,"list-limit-reached-text"]],template:function(t,i){1&t&&(e.TgZ(0,"form",0),e.NdJ("ngSubmit",function(c){return i.search(c)}),e.TgZ(1,"div",1),e._UZ(2,"input",2),e.ALo(3,"cxTranslate"),e.ALo(4,"cxTranslate"),e._UZ(5,"cx-icon",3),e._UZ(6,"cx-form-errors",4),e.YNc(7,P,3,3,"span",5),e.qZA(),e.qZA()),2&t&&(e.Q6J("formGroup",i.form),e.xp6(2),e.s9C("placeholder",e.lcZ(4,8,"quickOrderForm.placeholder")),e.uIk("aria-label",e.lcZ(3,6,"common.search")),e.xp6(3),e.Q6J("type",i.iconTypes.SEARCH),e.xp6(1),e.Q6J("control",i.form.get("product")),e.xp6(1),e.Q6J("ngIf",i.isDisabled))},directives:[d._Y,d.JL,d.sg,d.Fj,d.JJ,d.u,p.oJW,p.Ahv,g.O5],pipes:[s.X$D],encapsulation:2,changeDetection:0}),r})(),oe=(()=>{class r{constructor(t,i){this.cd=t,this.quickOrderService=i,this.loading=!1,this.subscription=new v.w}get entry(){return this._entry}set entry(t){this._entry=t,this.quantityControl=new d.NI(this.entry.quantity)}ngOnInit(){this.subscription.add(this.quantityControl.valueChanges.subscribe(()=>{this.quickOrderService.updateEntryQuantity(this.index,this.quantityControl.value)})),this.subscription.add(this.watchProductAdd())}removeEntry(){this.quickOrderService.removeEntry(this.index)}watchProductAdd(){return this.quickOrderService.getProductAdded().subscribe(t=>{var i;t===(null===(i=this.entry.product)||void 0===i?void 0:i.code)&&(this.quantityControl=new d.NI(this.entry.quantity),this.cd.detectChanges())})}ngOnDestroy(){var t;null===(t=this.subscription)||void 0===t||t.unsubscribe()}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(e.sBO),e.Y36(h.be))},r.\u0275cmp=e.Xpm({type:r,selectors:[["cx-quick-order-item"]],inputs:{entry:"entry",index:"index",loading:"loading"},decls:32,vars:36,consts:[[1,"cx-quick-order-table-item"],[1,"row"],[1,"col-2","col-md-1","cx-quick-order-image-container"],[1,"cx-quick-order-table-item-product-image"],["tabindex","-1",3,"ngClass","routerLink"],["format","cartIcon",3,"container"],[1,"col-10","col-md-11","cx-quick-order-info-container"],[1,"cx-quick-order-table-item-product-information","col-md-4","col-lg-4","col-xl-4"],[1,"cx-name"],[1,"cx-link",3,"ngClass","routerLink"],[1,"cx-code"],[1,"cx-quick-order-table-item-price","col-md-2","col-lg-2","col-xl-2"],[1,"cx-label"],[1,"cx-value"],[1,"cx-quick-order-table-item-quantity","col-md-4","col-lg-4","col-xl-4"],[3,"control","max","readonly"],[1,"cx-quick-order-table-item-action","col-md-2","col-lg-2","col-xl-2"],[1,"link","cx-action-link",3,"disabled","click"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.TgZ(2,"div",2),e.TgZ(3,"div",3),e.TgZ(4,"a",4),e.ALo(5,"cxUrl"),e._UZ(6,"cx-media",5),e.qZA(),e.qZA(),e.qZA(),e.TgZ(7,"div",6),e.TgZ(8,"div",1),e.TgZ(9,"div",7),e.TgZ(10,"div",8),e.TgZ(11,"a",9),e.ALo(12,"cxUrl"),e._uU(13),e.qZA(),e.qZA(),e.TgZ(14,"div",10),e._uU(15),e.ALo(16,"cxTranslate"),e.qZA(),e.qZA(),e.TgZ(17,"div",11),e.TgZ(18,"span",12),e._uU(19),e.ALo(20,"cxTranslate"),e.qZA(),e.TgZ(21,"div",13),e._uU(22),e.qZA(),e.qZA(),e.TgZ(23,"div",14),e.TgZ(24,"span",12),e._uU(25),e.ALo(26,"cxTranslate"),e.qZA(),e._UZ(27,"cx-item-counter",15),e.qZA(),e.TgZ(28,"div",16),e.TgZ(29,"button",17),e.NdJ("click",function(){return i.removeEntry()}),e._uU(30),e.ALo(31,"cxTranslate"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&t&&(e.xp6(4),e.Q6J("ngClass",e.VKq(28,T,i.loading))("routerLink",e.lcZ(5,16,e.VKq(30,C,i.entry.product))),e.xp6(2),e.Q6J("container",null==i.entry||null==i.entry.product||null==i.entry.product.images?null:i.entry.product.images.PRIMARY),e.xp6(5),e.Q6J("ngClass",e.VKq(32,T,i.loading))("routerLink",e.lcZ(12,18,e.VKq(34,C,i.entry.product))),e.xp6(2),e.hij("",(null==i.entry.product?null:i.entry.product.name)||"-"," "),e.xp6(2),e.AsE(" ",e.lcZ(16,20,"quickOrderTable.id")," ",null==i.entry.product?null:i.entry.product.code," "),e.xp6(4),e.hij(" ",e.lcZ(20,22,"quickOrderTable.itemPrice")," "),e.xp6(3),e.hij(" ",(null==i.entry.basePrice?null:i.entry.basePrice.formattedValue)||"-"," "),e.xp6(3),e.hij(" ",e.lcZ(26,24,"quickOrderTable.qty")," "),e.xp6(2),e.Q6J("control",i.quantityControl)("max",null==i.entry.product||null==i.entry.product.stock?null:i.entry.product.stock.stockLevel)("readonly",i.loading),e.xp6(2),e.Q6J("disabled",i.loading),e.xp6(1),e.hij(" ",e.lcZ(31,26,"common.remove")," "))},directives:[k.yS,g.mk,p.R7z,p.odZ],pipes:[s.l2T,s.X$D],encapsulation:2,changeDetection:0}),r})(),ce=(()=>{class r{constructor(){this.entries=[],this.loading=!1}}return r.\u0275fac=function(t){return new(t||r)},r.\u0275cmp=e.Xpm({type:r,selectors:[["cx-quick-order-table"]],inputs:{entries:"entries",loading:"loading"},decls:1,vars:1,consts:[["class","cx-quick-order-table-wrapper",4,"ngIf"],[1,"cx-quick-order-table-wrapper"],[1,"cx-quick-order-table-header"],[1,"row"],[1,"col-2","col-md-1","cx-quick-order-image-header"],[1,"col-10","col-md-11","cx-quick-order-info-header"],[1,"cx-quick-order-table-item-product","col-md-4","col-lg-4","col-xl-4"],[1,"cx-quick-order-table-item-price","col-md-2","col-lg-2","col-xl-2"],[1,"cx-quick-order-table-item-quantity","col-md-4","col-lg-4","col-xl-4"],[1,"cx-quick-order-table-item-action","col-md-2","col-lg-2","col-xl-2"],["class","cx-quick-order-table-row",4,"ngFor","ngForOf"],[1,"cx-quick-order-table-row"],[3,"entry","index","loading"]],template:function(t,i){1&t&&e.YNc(0,D,17,10,"div",0),2&t&&e.Q6J("ngIf",(null==i.entries?null:i.entries.length)>0)},directives:[g.O5,g.sg,oe],pipes:[s.X$D],encapsulation:2,changeDetection:0}),r})(),se=(()=>{class r{constructor(t,i,n,c,a){this.activeCartService=t,this.component=i,this.globalMessageService=n,this.quickOrderService=c,this.quickOrderStatePersistenceService=a,this.quickOrderListLimit$=this.component.data$.pipe((0,x.U)(l=>l.quickOrderListLimit)),this.isCartStable$=(0,Q.aj)([this.activeCartService.getActiveCartId(),this.activeCartService.isStable()]).pipe((0,x.U)(([l,m])=>!l||m)),this.globalMessageType=s.xUg,this.cartErrors$=new f.X([]),this.cartWarnings$=new f.X([]),this.cartSuccesses$=new f.X([])}ngOnInit(){this.cartId$=this.activeCartService.getActiveCartId(),this.entries$=this.quickOrderService.getEntries(),this.quickOrderStatePersistenceService.initSync()}get errors$(){return this.cartErrors$.asObservable()}get warnings$(){return this.cartWarnings$.asObservable()}get successes$(){return this.cartSuccesses$.asObservable()}clear(){this.quickOrderService.clearList(),this.globalMessageService.add({key:"quickOrderTable.listCleared"},s.xUg.MSG_TYPE_INFO)}addToCart(t){this.clearStatuses(),this.quickOrderService.addToCart().pipe((0,_.P)()).subscribe(([i,n])=>{n.forEach(c=>{c.entry||(c.entry=t.find(a=>{var l;return(null===(l=a.product)||void 0===l?void 0:l.code)===c.productCode}))}),this.extractErrors(n),this.extractWarnings(n),n.length?this.extractSuccesses(n,i):this.showAddedToCartSuccessMessage()})}clearErrors(){this.cartErrors$.next([])}clearWarnings(){this.cartWarnings$.next([])}clearSuccesses(){this.cartSuccesses$.next([])}extractErrors(t){const i=t.filter(n=>0===n.quantityAdded);this.setErrors(i)}extractWarnings(t){const i=t.filter(n=>0!==n.quantityAdded);this.setWarnings(i)}extractSuccesses(t,i){const n=[];i.forEach(c=>{t.find(l=>{var m;return l.productCode===(null===(m=c.product)||void 0===m?void 0:m.code)})||n.push(c)}),this.setSuccesses(n)}clearStatuses(){this.clearErrors(),this.clearWarnings(),this.clearSuccesses()}showAddedToCartSuccessMessage(){this.globalMessageService.add({key:"quickOrderTable.addedtoCart"},s.xUg.MSG_TYPE_CONFIRMATION)}setErrors(t){this.cartErrors$.next(t)}setWarnings(t){this.cartWarnings$.next(t)}setSuccesses(t){this.cartSuccesses$.next(t)}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(s.CPo),e.Y36(p.exf),e.Y36(s.IWp),e.Y36(h.be),e.Y36(Z))},r.\u0275cmp=e.Xpm({type:r,selectors:[["cx-quick-order"]],decls:8,vars:12,consts:[[4,"ngIf"],[3,"text","type","closeMessage",4,"ngIf"],[3,"text","type","closeMessage"],[1,"quick-order-errors"],["class","quick-order-error-item",4,"ngFor","ngForOf"],[1,"quick-order-error-item"],[1,"quick-order-warnings"],["class","quick-order-warning-item",4,"ngFor","ngForOf"],[1,"quick-order-warning-item"],[1,"quick-order-successes"],["class","quick-order-success-item",4,"ngFor","ngForOf"],[1,"quick-order-success-item"],[1,"quick-order-header"],[1,"quick-order-form-body"],[3,"isDisabled","isLoading"],[1,"quick-order-table-body"],[3,"entries","loading"],[1,"quick-order-footer","row"],[1,"col-xs-12","col-md-5","col-lg-4"],["class","btn btn-block btn-action clear-button","type","button",3,"disabled","click",4,"ngIf"],[3,"ariaLabel","disabled","loading","clikEvent"],["type","button",1,"btn","btn-block","btn-action","clear-button",3,"disabled","click"]],template:function(t,i){1&t&&(e.YNc(0,R,2,1,"ng-container",0),e.ALo(1,"async"),e.YNc(2,B,2,1,"ng-container",0),e.ALo(3,"async"),e.YNc(4,z,2,1,"ng-container",0),e.ALo(5,"async"),e.YNc(6,te,3,3,"ng-container",0),e.ALo(7,"async")),2&t&&(e.Q6J("ngIf",e.lcZ(1,4,i.errors$)),e.xp6(2),e.Q6J("ngIf",e.lcZ(3,6,i.warnings$)),e.xp6(2),e.Q6J("ngIf",e.lcZ(5,8,i.successes$)),e.xp6(2),e.Q6J("ngIf",e.lcZ(7,10,i.quickOrderListLimit$)))},directives:[g.O5,p.qqZ,g.sg,ne,ce,p.lc1],pipes:[g.Ov,s.X$D],encapsulation:2,changeDetection:0}),r})(),de=(()=>{class r{}return r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({providers:[(0,s.i51)({cmsComponents:{QuickOrderComponent:{component:se,data:{quickOrderListLimit:10}}}})],imports:[[g.ez,d.UX,k.Bz,p.Fym,s.LUR,p.QX1,p.Td$,p.cOq,s.bhT,p.Quc,p.$zX]]}),r})(),ae=(()=>{class r{}return r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[[k.Bz,de,ie]]}),r})(),ue=(()=>{class r{}return r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[[$,ae]]}),r})()}}]);