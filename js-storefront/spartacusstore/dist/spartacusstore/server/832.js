"use strict";var __defProp=Object.defineProperty,__name=(target,value)=>__defProp(target,"name",{value,configurable:!0});exports.id=832,exports.ids=[832],exports.modules={5832:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{QuickOrderModule:()=>QuickOrderModule});var core=__webpack_require__(7716),fesm2015_forms=__webpack_require__(3679),spartacus_core=__webpack_require__(1018),Subscription=__webpack_require__(5319),combineLatest=__webpack_require__(9112),BehaviorSubject=__webpack_require__(6215),map=__webpack_require__(8002),first=__webpack_require__(8049),finalize=__webpack_require__(8939),spartacus_storefront=__webpack_require__(9667),common=__webpack_require__(8583),router=__webpack_require__(5987),spartacus_cart_quick_order_root=__webpack_require__(7733),Subject=__webpack_require__(9765),take=__webpack_require__(5257),switchMap=__webpack_require__(3190),filter=__webpack_require__(5435),tap=__webpack_require__(8307);class QuickOrderService{constructor(activeCartService,productAdapter,eventService){this.activeCartService=activeCartService,this.productAdapter=productAdapter,this.eventService=eventService,this.productAdded$=new Subject.xQ,this.entries$=new BehaviorSubject.X([])}getEntries(){return this.entries$}search(productCode){return this.productAdapter.load(productCode)}clearList(){this.entries$.next([])}loadEntries(entries=[]){this.entries$.next(entries)}updateEntryQuantity(entryIndex,quantity){const entries=this.entries$.getValue()||[];entries[entryIndex].quantity=quantity,this.entries$.next(entries)}removeEntry(index){this.entries$.pipe((0,take.q)(1)).subscribe(entries=>{const entriesList=entries;entriesList.splice(index,1),this.entries$.next(entriesList)})}addProduct(product){const entry=this.generateOrderEntry(product);this.addEntry(entry)}getProductAdded(){return this.productAdded$}setProductAdded(productCode){this.productAdded$.next(productCode)}addToCart(){let entries=[];const events=[],subscription=this.eventService.get(spartacus_core.VDw).subscribe(cartEvent=>{(0===cartEvent.quantityAdded||cartEvent.quantityAdded&&cartEvent.quantityAdded<cartEvent.quantity)&&events.push(this.createQuickOrderResultEvent(cartEvent))});return subscription.add(this.eventService.get(spartacus_core.K$F).subscribe(cartEvent=>{events.push(this.createQuickOrderResultEvent(cartEvent))})),this.getEntries().pipe((0,first.P)(),(0,switchMap.w)(elements=>(entries=elements,this.activeCartService.addEntries(elements),this.clearList(),this.activeCartService.isStable())),(0,filter.h)(isStable=>isStable),(0,map.U)(()=>[entries,events]),(0,tap.b)(()=>subscription.unsubscribe()))}generateOrderEntry(product){return{basePrice:product.price,product,quantity:1,totalPrice:product.price}}addEntry(entry){var _a,_b;const entries=this.entries$.getValue()||[];if((null===(_a=entry.product)||void 0===_a?void 0:_a.code)&&this.isProductOnTheList(entry.product.code)){const entryIndex=entries.findIndex(item=>{var _a2,_b2;return(null===(_a2=item.product)||void 0===_a2?void 0:_a2.code)===(null===(_b2=entry.product)||void 0===_b2?void 0:_b2.code)}),quantity=entries[entryIndex].quantity;quantity&&entry.quantity&&(entries[entryIndex].quantity=quantity+(null==entry?void 0:entry.quantity)),this.entries$.next([...entries])}else this.entries$.next([...entries,entry]);this.productAdded$.next(null===(_b=entry.product)||void 0===_b?void 0:_b.code)}isProductOnTheList(productCode){return!!(this.entries$.getValue()||[]).find(item=>{var _a;return(null===(_a=item.product)||void 0===_a?void 0:_a.code)===productCode})}createQuickOrderResultEvent(cartEvent){var _a,_b,_c;let evt={productCode:cartEvent.productCode,quantity:cartEvent.quantity,entry:cartEvent.entry||void 0,quantityAdded:cartEvent.quantityAdded,error:cartEvent.error||void 0};if(null===(_b=null===(_a=evt.error)||void 0===_a?void 0:_a.details)||void 0===_b?void 0:_b.length){let isOutOfStock=null===(_c=evt.error)||void 0===_c?void 0:_c.details.some(e=>"InsufficientStockError"===e.type);evt.quantityAdded=isOutOfStock?0:evt.quantity}return evt}}__name(QuickOrderService,"QuickOrderService"),QuickOrderService.\u0275fac=__name(function(t){return new(t||QuickOrderService)(core.LFG(spartacus_core.CPo),core.LFG(spartacus_core.EX),core.LFG(spartacus_core.POd))},"QuickOrderService_Factory"),QuickOrderService.\u0275prov=core.Yz7({token:QuickOrderService,factory:QuickOrderService.\u0275fac,providedIn:"root"});const facadeProviders=[QuickOrderService,{provide:spartacus_cart_quick_order_root.be,useExisting:QuickOrderService}];class QuickOrderStatePersistenceService{constructor(quickOrderService,siteContextParamsService,statePersistenceService){this.quickOrderService=quickOrderService,this.siteContextParamsService=siteContextParamsService,this.statePersistenceService=statePersistenceService,this.subscription=new Subscription.w,this.key="quick-order"}initSync(){this.subscription.add(this.statePersistenceService.syncWithStorage({key:this.key,state$:this.quickOrderService.getEntries(),context$:this.siteContextParamsService.getValues([spartacus_core.iEg]),storageType:spartacus_core.iHd.SESSION_STORAGE,onRead:state=>this.onRead(state)}))}onRead(state){state&&this.quickOrderService.loadEntries(state)}ngOnDestroy(){this.subscription.unsubscribe()}}__name(QuickOrderStatePersistenceService,"QuickOrderStatePersistenceService"),QuickOrderStatePersistenceService.\u0275fac=__name(function(t){return new(t||QuickOrderStatePersistenceService)(core.LFG(spartacus_cart_quick_order_root.be),core.LFG(spartacus_core.Qnj),core.LFG(spartacus_core.WBb))},"QuickOrderStatePersistenceService_Factory"),QuickOrderStatePersistenceService.\u0275prov=core.Yz7({token:QuickOrderStatePersistenceService,factory:QuickOrderStatePersistenceService.\u0275fac,providedIn:"root"});class QuickOrderCoreModule{static forRoot(){return{ngModule:QuickOrderCoreModule}}}function CartQuickOrderFormComponent_ng_container_0_Template(rf,ctx){if(1&rf){const _r3=core.EpF();core.ynx(0),core.TgZ(1,"div",1),core._uU(2),core.ALo(3,"cxTranslate"),core.qZA(),core.TgZ(4,"div",2),core.TgZ(5,"form",3),core.NdJ("ngSubmit",__name(function(){return core.CHM(_r3),core.oxw().applyQuickOrder()},"CartQuickOrderFormComponent_ng_container_0_Template_form_ngSubmit_5_listener")),core.TgZ(6,"div",4),core.TgZ(7,"span",5),core.TgZ(8,"label",6),core._uU(9),core.ALo(10,"cxTranslate"),core.qZA(),core._UZ(11,"input",7),core.ALo(12,"cxTranslate"),core.qZA(),core.TgZ(13,"span",8),core.TgZ(14,"label",6),core._uU(15),core.ALo(16,"cxTranslate"),core.qZA(),core._UZ(17,"input",9),core.qZA(),core.TgZ(18,"button",10),core.ALo(19,"async"),core.ALo(20,"async"),core._uU(21),core.ALo(22,"cxTranslate"),core.qZA(),core._UZ(23,"cx-form-errors",11),core._UZ(24,"cx-form-errors",11),core.qZA(),core.qZA(),core.qZA(),core.BQk()}if(2&rf){const ctx_r0=core.oxw();core.xp6(2),core.hij(" ",core.lcZ(3,12,"quickOrderCartForm.title")," "),core.xp6(3),core.Q6J("formGroup",ctx_r0.quickOrderForm),core.xp6(4),core.hij(" ",core.lcZ(10,14,"quickOrderCartForm.productCodeLabel")," "),core.xp6(2),core.s9C("placeholder",core.lcZ(12,16,"quickOrderCartForm.productCodePlaceholder")),core.xp6(4),core.hij(" ",core.lcZ(16,18,"quickOrderCartForm.quantityLabel")," "),core.xp6(2),core.Q6J("min",ctx_r0.min),core.xp6(1),core.ekj("disabled",core.lcZ(19,20,ctx_r0.cartIsLoading$)),core.Q6J("disabled",core.lcZ(20,22,ctx_r0.cartIsLoading$)),core.xp6(3),core.hij(" ",core.lcZ(22,24,"quickOrderCartForm.addToCart")," "),core.xp6(2),core.Q6J("control",ctx_r0.quickOrderForm.get("productCode")),core.xp6(1),core.Q6J("control",ctx_r0.quickOrderForm.get("quantity"))}}function QuickOrderFormComponent_span_7_Template(rf,ctx){1&rf&&(core.TgZ(0,"span",6),core._uU(1),core.ALo(2,"cxTranslate"),core.qZA()),2&rf&&(core.xp6(1),core.hij(" ",core.lcZ(2,1,"quickOrderForm.listLimitReached")," "))}__name(QuickOrderCoreModule,"QuickOrderCoreModule"),QuickOrderCoreModule.\u0275fac=__name(function(t){return new(t||QuickOrderCoreModule)},"QuickOrderCoreModule_Factory"),QuickOrderCoreModule.\u0275mod=core.oAB({type:QuickOrderCoreModule}),QuickOrderCoreModule.\u0275inj=core.cJS({providers:[...facadeProviders,QuickOrderStatePersistenceService]}),__name(CartQuickOrderFormComponent_ng_container_0_Template,"CartQuickOrderFormComponent_ng_container_0_Template"),__name(QuickOrderFormComponent_span_7_Template,"QuickOrderFormComponent_span_7_Template");const _c0=__name(function(a0){return{disabled:a0}},"_c0"),_c1=__name(function(a1){return{cxRoute:"product",params:a1}},"_c1");function QuickOrderTableComponent_div_0_div_16_Template(rf,ctx){if(1&rf&&(core.TgZ(0,"div",11),core._UZ(1,"cx-quick-order-item",12),core.qZA()),2&rf){const entry_r2=ctx.$implicit,i_r3=ctx.index,ctx_r1=core.oxw(2);core.xp6(1),core.Q6J("entry",entry_r2)("index",i_r3)("loading",ctx_r1.loading)}}function QuickOrderTableComponent_div_0_Template(rf,ctx){if(1&rf&&(core.TgZ(0,"div",1),core.TgZ(1,"div",2),core.TgZ(2,"div",3),core._UZ(3,"div",4),core.TgZ(4,"div",5),core.TgZ(5,"div",3),core.TgZ(6,"div",6),core._uU(7),core.ALo(8,"cxTranslate"),core.qZA(),core.TgZ(9,"div",7),core._uU(10),core.ALo(11,"cxTranslate"),core.qZA(),core.TgZ(12,"div",8),core._uU(13),core.ALo(14,"cxTranslate"),core.qZA(),core._UZ(15,"div",9),core.qZA(),core.qZA(),core.qZA(),core.qZA(),core.YNc(16,QuickOrderTableComponent_div_0_div_16_Template,2,3,"div",10),core.qZA()),2&rf){const ctx_r0=core.oxw();core.xp6(7),core.hij(" ",core.lcZ(8,4,"quickOrderTable.product")," "),core.xp6(3),core.hij(" ",core.lcZ(11,6,"quickOrderTable.price")," "),core.xp6(3),core.hij(" ",core.lcZ(14,8,"quickOrderTable.quantity")," "),core.xp6(3),core.Q6J("ngForOf",ctx_r0.entries)}}__name(QuickOrderTableComponent_div_0_div_16_Template,"QuickOrderTableComponent_div_0_div_16_Template"),__name(QuickOrderTableComponent_div_0_Template,"QuickOrderTableComponent_div_0_Template");const _c2=__name(function(a0,a1){return{name:a0,code:a1}},"_c2");function QuickOrderComponent_ng_container_0_cx_message_1_li_3_Template(rf,ctx){if(1&rf&&(core.TgZ(0,"li",5),core.TgZ(1,"span"),core._uU(2),core.ALo(3,"cxTranslate"),core.qZA(),core.qZA()),2&rf){const error_r7=ctx.$implicit;core.xp6(2),core.hij(" ",core.xi3(3,1,"quickOrderList.errors.productIsOutOfStock",core.WLB(4,_c2,error_r7.entry.product.name,error_r7.entry.product.code))," ")}}function QuickOrderComponent_ng_container_0_cx_message_1_Template(rf,ctx){if(1&rf){const _r9=core.EpF();core.TgZ(0,"cx-message",2),core.NdJ("closeMessage",__name(function(){return core.CHM(_r9),core.oxw(2).clearErrors()},"QuickOrderComponent_ng_container_0_cx_message_1_Template_cx_message_closeMessage_0_listener")),core.ALo(1,"cxTranslate"),core.TgZ(2,"ul",3),core.YNc(3,QuickOrderComponent_ng_container_0_cx_message_1_li_3_Template,4,7,"li",4),core.qZA(),core.qZA()}if(2&rf){const errors_r4=core.oxw().ngIf,ctx_r5=core.oxw();core.Q6J("text",core.lcZ(1,3,"quickOrderList.errorProceedingToCart"))("type",ctx_r5.globalMessageType.MSG_TYPE_ERROR),core.xp6(3),core.Q6J("ngForOf",errors_r4)}}function QuickOrderComponent_ng_container_0_Template(rf,ctx){if(1&rf&&(core.ynx(0),core.YNc(1,QuickOrderComponent_ng_container_0_cx_message_1_Template,4,5,"cx-message",1),core.BQk()),2&rf){const errors_r4=ctx.ngIf;core.xp6(1),core.Q6J("ngIf",errors_r4.length>0)}}__name(QuickOrderComponent_ng_container_0_cx_message_1_li_3_Template,"QuickOrderComponent_ng_container_0_cx_message_1_li_3_Template"),__name(QuickOrderComponent_ng_container_0_cx_message_1_Template,"QuickOrderComponent_ng_container_0_cx_message_1_Template"),__name(QuickOrderComponent_ng_container_0_Template,"QuickOrderComponent_ng_container_0_Template");const _c3=__name(function(a0,a1,a2){return{name:a0,code:a1,quantityAdded:a2}},"_c3");function QuickOrderComponent_ng_container_2_cx_message_1_li_3_Template(rf,ctx){if(1&rf&&(core.TgZ(0,"li",8),core.TgZ(1,"span"),core._uU(2),core.ALo(3,"cxTranslate"),core.qZA(),core.qZA()),2&rf){const warning_r14=ctx.$implicit;core.xp6(2),core.hij(" ",core.xi3(3,1,"quickOrderList.warnings.productWasReduced",core.kEZ(4,_c3,warning_r14.entry.product.name,warning_r14.entry.product.code,warning_r14.quantityAdded))," ")}}function QuickOrderComponent_ng_container_2_cx_message_1_Template(rf,ctx){if(1&rf){const _r16=core.EpF();core.TgZ(0,"cx-message",2),core.NdJ("closeMessage",__name(function(){return core.CHM(_r16),core.oxw(2).clearWarnings()},"QuickOrderComponent_ng_container_2_cx_message_1_Template_cx_message_closeMessage_0_listener")),core.ALo(1,"cxTranslate"),core.TgZ(2,"ul",6),core.YNc(3,QuickOrderComponent_ng_container_2_cx_message_1_li_3_Template,4,8,"li",7),core.qZA(),core.qZA()}if(2&rf){const warnings_r11=core.oxw().ngIf,ctx_r12=core.oxw();core.Q6J("text",core.lcZ(1,3,"quickOrderList.warningProceedingToCart"))("type",ctx_r12.globalMessageType.MSG_TYPE_WARNING),core.xp6(3),core.Q6J("ngForOf",warnings_r11)}}function QuickOrderComponent_ng_container_2_Template(rf,ctx){if(1&rf&&(core.ynx(0),core.YNc(1,QuickOrderComponent_ng_container_2_cx_message_1_Template,4,5,"cx-message",1),core.BQk()),2&rf){const warnings_r11=ctx.ngIf;core.xp6(1),core.Q6J("ngIf",warnings_r11.length>0)}}function QuickOrderComponent_ng_container_4_cx_message_1_li_3_Template(rf,ctx){if(1&rf&&(core.TgZ(0,"li",11),core.TgZ(1,"span"),core._uU(2),core.ALo(3,"cxTranslate"),core.qZA(),core.qZA()),2&rf){const entry_r21=ctx.$implicit;core.xp6(2),core.Oqu(core.xi3(3,1,"quickOrderList.successes.productAddedToCart",core.WLB(4,_c2,entry_r21.product.name,entry_r21.product.code)))}}function QuickOrderComponent_ng_container_4_cx_message_1_Template(rf,ctx){if(1&rf){const _r23=core.EpF();core.TgZ(0,"cx-message",2),core.NdJ("closeMessage",__name(function(){return core.CHM(_r23),core.oxw(2).clearSuccesses()},"QuickOrderComponent_ng_container_4_cx_message_1_Template_cx_message_closeMessage_0_listener")),core.ALo(1,"cxTranslate"),core.TgZ(2,"ul",9),core.YNc(3,QuickOrderComponent_ng_container_4_cx_message_1_li_3_Template,4,7,"li",10),core.qZA(),core.qZA()}if(2&rf){const successes_r18=core.oxw().ngIf,ctx_r19=core.oxw();core.Q6J("text",core.lcZ(1,3,"quickOrderList.successfullyAddedToCart"))("type",ctx_r19.globalMessageType.MSG_TYPE_CONFIRMATION),core.xp6(3),core.Q6J("ngForOf",successes_r18)}}function QuickOrderComponent_ng_container_4_Template(rf,ctx){if(1&rf&&(core.ynx(0),core.YNc(1,QuickOrderComponent_ng_container_4_cx_message_1_Template,4,5,"cx-message",1),core.BQk()),2&rf){const successes_r18=ctx.ngIf;core.xp6(1),core.Q6J("ngIf",successes_r18.length>0)}}function QuickOrderComponent_ng_container_6_ng_container_1_button_16_Template(rf,ctx){if(1&rf){const _r30=core.EpF();core.TgZ(0,"button",21),core.NdJ("click",__name(function(){return core.CHM(_r30),core.oxw(3).clear()},"QuickOrderComponent_ng_container_6_ng_container_1_button_16_Template_button_click_0_listener")),core.ALo(1,"cxTranslate"),core.ALo(2,"async"),core._uU(3),core.ALo(4,"cxTranslate"),core.qZA()}if(2&rf){const ctx_r28=core.oxw(3);core.Q6J("disabled",!core.lcZ(2,5,ctx_r28.isCartStable$)),core.uIk("aria-label",core.lcZ(1,3,"quickOrderList.emptyList")),core.xp6(3),core.hij(" ",core.lcZ(4,7,"quickOrderList.emptyList")," ")}}__name(QuickOrderComponent_ng_container_2_cx_message_1_li_3_Template,"QuickOrderComponent_ng_container_2_cx_message_1_li_3_Template"),__name(QuickOrderComponent_ng_container_2_cx_message_1_Template,"QuickOrderComponent_ng_container_2_cx_message_1_Template"),__name(QuickOrderComponent_ng_container_2_Template,"QuickOrderComponent_ng_container_2_Template"),__name(QuickOrderComponent_ng_container_4_cx_message_1_li_3_Template,"QuickOrderComponent_ng_container_4_cx_message_1_li_3_Template"),__name(QuickOrderComponent_ng_container_4_cx_message_1_Template,"QuickOrderComponent_ng_container_4_cx_message_1_Template"),__name(QuickOrderComponent_ng_container_4_Template,"QuickOrderComponent_ng_container_4_Template"),__name(QuickOrderComponent_ng_container_6_ng_container_1_button_16_Template,"QuickOrderComponent_ng_container_6_ng_container_1_button_16_Template");const _c4=__name(function(a0){return{limit:a0}},"_c4");function QuickOrderComponent_ng_container_6_ng_container_1_Template(rf,ctx){if(1&rf){const _r32=core.EpF();core.ynx(0),core.TgZ(1,"div",12),core.TgZ(2,"h3"),core._uU(3),core.ALo(4,"cxTranslate"),core.qZA(),core.TgZ(5,"p"),core._uU(6),core.ALo(7,"cxTranslate"),core.qZA(),core.qZA(),core.TgZ(8,"div",13),core._UZ(9,"cx-quick-order-form",14),core.ALo(10,"async"),core.qZA(),core.TgZ(11,"div",15),core._UZ(12,"cx-quick-order-table",16),core.ALo(13,"async"),core.qZA(),core.TgZ(14,"div",17),core.TgZ(15,"div",18),core.YNc(16,QuickOrderComponent_ng_container_6_ng_container_1_button_16_Template,5,9,"button",19),core.qZA(),core.TgZ(17,"div",18),core.TgZ(18,"cx-progress-button",20),core.NdJ("clikEvent",__name(function(){const entries_r27=core.CHM(_r32).ngIf;return core.oxw(2).addToCart(entries_r27)},"QuickOrderComponent_ng_container_6_ng_container_1_Template_cx_progress_button_clikEvent_18_listener")),core.ALo(19,"cxTranslate"),core.ALo(20,"async"),core._uU(21),core.ALo(22,"cxTranslate"),core.qZA(),core.qZA(),core.qZA(),core.BQk()}if(2&rf){const entries_r27=ctx.ngIf,quickOrderListLimit_r25=core.oxw().ngIf,ctx_r26=core.oxw();core.xp6(3),core.Oqu(core.lcZ(4,13,"quickOrderList.header")),core.xp6(3),core.hij(" ",core.xi3(7,15,"quickOrderList.subHeader",core.VKq(28,_c4,quickOrderListLimit_r25))," "),core.xp6(3),core.Q6J("isDisabled",entries_r27.length>=quickOrderListLimit_r25)("isLoading",!core.lcZ(10,18,ctx_r26.isCartStable$)),core.xp6(3),core.Q6J("entries",entries_r27)("loading",!core.lcZ(13,20,ctx_r26.isCartStable$)),core.xp6(4),core.Q6J("ngIf",entries_r27.length),core.xp6(2),core.Tol("btn-block add-button"),core.Q6J("ariaLabel",core.lcZ(19,22,"quickOrderList.addToCart"))("disabled",!entries_r27.length)("loading",!core.lcZ(20,24,ctx_r26.isCartStable$)),core.xp6(3),core.hij(" ",core.lcZ(22,26,"quickOrderList.addToCart")," ")}}function QuickOrderComponent_ng_container_6_Template(rf,ctx){if(1&rf&&(core.ynx(0),core.YNc(1,QuickOrderComponent_ng_container_6_ng_container_1_Template,23,30,"ng-container",0),core.ALo(2,"async"),core.BQk()),2&rf){const ctx_r3=core.oxw();core.xp6(1),core.Q6J("ngIf",core.lcZ(2,1,ctx_r3.entries$))}}__name(QuickOrderComponent_ng_container_6_ng_container_1_Template,"QuickOrderComponent_ng_container_6_ng_container_1_Template"),__name(QuickOrderComponent_ng_container_6_Template,"QuickOrderComponent_ng_container_6_Template");class CartQuickOrderFormComponent{constructor(activeCartService,eventService,formBuilder,globalMessageService){this.activeCartService=activeCartService,this.eventService=eventService,this.formBuilder=formBuilder,this.globalMessageService=globalMessageService,this.cartIsLoading$=this.activeCartService.isStable().pipe((0,map.U)(loaded=>!loaded)),this.cart$=this.activeCartService.getActive(),this.min=1,this.subscription=new Subscription.w,this.cartEventsSubscription=new Subscription.w,this.minQuantityValue=1}ngOnInit(){this.buildForm(),this.watchQuantityChange()}ngOnDestroy(){var _a,_b;null===(_a=this.subscription)||void 0===_a||_a.unsubscribe(),null===(_b=this.cartEventsSubscription)||void 0===_b||_b.unsubscribe()}applyQuickOrder(){var _a,_b;if(this.quickOrderForm.invalid)return void this.quickOrderForm.markAllAsTouched();const productCode=null===(_a=this.quickOrderForm.get("productCode"))||void 0===_a?void 0:_a.value,quantity=null===(_b=this.quickOrderForm.get("quantity"))||void 0===_b?void 0:_b.value;this.watchAddEntrySuccessEvent(),this.watchAddEntryFailEvent(),productCode&&quantity&&this.activeCartService.addEntry(productCode,quantity)}buildForm(){this.quickOrderForm=this.formBuilder.group({productCode:["",[fesm2015_forms.kI.required]],quantity:[this.minQuantityValue,[fesm2015_forms.kI.required]]})}watchQuantityChange(){var _a;this.subscription.add(null===(_a=this.quickOrderForm.get("quantity"))||void 0===_a?void 0:_a.valueChanges.subscribe(value=>{var _a2;return null===(_a2=this.quickOrderForm.get("quantity"))||void 0===_a2?void 0:_a2.setValue(this.getValidCount(value),{emitEvent:!1})}))}watchAddEntrySuccessEvent(){this.cartEventsSubscription.add(this.eventService.get(spartacus_core.VDw).pipe((0,first.P)()).subscribe(data=>{var _a,_b;let productTranslation,key="quickOrderCartForm.stockLevelReached",messageType=spartacus_core.xUg.MSG_TYPE_WARNING;data.quantityAdded&&(key=data.quantityAdded>1?"quickOrderCartForm.entriesWasAdded":"quickOrderCartForm.entryWasAdded",productTranslation=data.quantityAdded>1?"quickOrderCartForm.products":"quickOrderCartForm.product",messageType=spartacus_core.xUg.MSG_TYPE_CONFIRMATION),this.globalMessageService.add({key,params:{product:(null===(_b=null===(_a=null==data?void 0:data.entry)||void 0===_a?void 0:_a.product)||void 0===_b?void 0:_b.name)||productTranslation,quantity:data.quantityAdded}},messageType),this.resetForm()}))}watchAddEntryFailEvent(){this.cartEventsSubscription.add(this.eventService.get(spartacus_core.K$F).pipe((0,first.P)()).subscribe(()=>{this.globalMessageService.add({key:"quickOrderCartForm.noResults"},spartacus_core.xUg.MSG_TYPE_ERROR)}))}getValidCount(value){return(value<this.min||!value)&&(value=this.min),value}resetForm(){this.quickOrderForm.reset()}}__name(CartQuickOrderFormComponent,"CartQuickOrderFormComponent"),CartQuickOrderFormComponent.\u0275fac=__name(function(t){return new(t||CartQuickOrderFormComponent)(core.Y36(spartacus_core.CPo),core.Y36(spartacus_core.POd),core.Y36(fesm2015_forms.qu),core.Y36(spartacus_core.IWp))},"CartQuickOrderFormComponent_Factory"),CartQuickOrderFormComponent.\u0275cmp=core.Xpm({type:CartQuickOrderFormComponent,selectors:[["cx-cart-quick-order-form"]],decls:2,vars:3,consts:[[4,"ngIf"],[1,"cx-cart-quick-order-form-title"],[1,"form-group"],[3,"formGroup","ngSubmit"],[1,"cx-cart-quick-order-form-container"],[1,"cx-cart-quick-order-form-productID"],[1,"cx-cart-quick-order-form-label"],["formControlName","productCode","type","text",1,"form-control","input-product-code",3,"placeholder"],[1,"cx-cart-quick-order-form-qty"],["formControlName","quantity","type","number",1,"form-control","input-quantity",3,"min"],["type","submit",1,"btn","btn-block","btn-action","apply-quick-order-button",3,"disabled"],[3,"control"]],template:__name(function(rf,ctx){1&rf&&(core.YNc(0,CartQuickOrderFormComponent_ng_container_0_Template,25,26,"ng-container",0),core.ALo(1,"async")),2&rf&&core.Q6J("ngIf",core.lcZ(1,1,ctx.cart$))},"CartQuickOrderFormComponent_Template"),directives:[common.O5,fesm2015_forms._Y,fesm2015_forms.JL,fesm2015_forms.sg,fesm2015_forms.Fj,fesm2015_forms.JJ,fesm2015_forms.u,fesm2015_forms.wV,fesm2015_forms.qQ,spartacus_storefront.Ahv],pipes:[common.Ov,spartacus_core.X$D],encapsulation:2,changeDetection:0});class CartQuickOrderFormModule{}__name(CartQuickOrderFormModule,"CartQuickOrderFormModule"),CartQuickOrderFormModule.\u0275fac=__name(function(t){return new(t||CartQuickOrderFormModule)},"CartQuickOrderFormModule_Factory"),CartQuickOrderFormModule.\u0275mod=core.oAB({type:CartQuickOrderFormModule}),CartQuickOrderFormModule.\u0275inj=core.cJS({providers:[(0,spartacus_core.i51)({cmsComponents:{CartQuickOrderFormComponent:{component:CartQuickOrderFormComponent}}})],imports:[[common.ez,fesm2015_forms.UX,spartacus_core.LUR,spartacus_storefront.Fym]]});class QuickOrderFormComponent{constructor(globalMessageService,quickOrderService){this.globalMessageService=globalMessageService,this.quickOrderService=quickOrderService,this.iconTypes=spartacus_storefront.e1G,this.isSearching=!1,this.subscription=new Subscription.w,this._disabled=!1,this._loading=!1}get isDisabled(){return this._disabled}set isDisabled(value){this._disabled=value,this.validateProductControl(value)}get isLoading(){return this._loading}set isLoading(value){this._loading=value,this.validateProductControl(value)}ngOnInit(){this.buildForm(),this.subscription.add(this.watchProductAdd())}search(event){var _a;if(this.form.invalid)return;null==event||event.preventDefault();const productCode=null===(_a=this.form.get("product"))||void 0===_a?void 0:_a.value;this.isSearching=!0,this.subscription.add(this.searchProduct(productCode))}clear(event){null==event||event.preventDefault(),this.form.reset()}searchProduct(productCode){return this.quickOrderService.search(productCode).pipe((0,finalize.x)(()=>this.isSearching=!1)).subscribe(product=>{this.quickOrderService.addProduct(product)},error=>{this.globalMessageService.add(error.error.errors[0].message,spartacus_core.xUg.MSG_TYPE_ERROR)})}buildForm(){const form=new fesm2015_forms.cw({});form.setControl("product",new fesm2015_forms.NI(null)),this.form=form,this.validateProductControl(this.isDisabled)}watchProductAdd(){return this.quickOrderService.getProductAdded().subscribe(()=>this.clear())}validateProductControl(isDisabled){var _a,_b,_c,_d;isDisabled?null===(_b=null===(_a=this.form)||void 0===_a?void 0:_a.get("product"))||void 0===_b||_b.disable():null===(_d=null===(_c=this.form)||void 0===_c?void 0:_c.get("product"))||void 0===_d||_d.enable()}ngOnDestroy(){this.subscription.unsubscribe()}}__name(QuickOrderFormComponent,"QuickOrderFormComponent"),QuickOrderFormComponent.\u0275fac=__name(function(t){return new(t||QuickOrderFormComponent)(core.Y36(spartacus_core.IWp),core.Y36(spartacus_cart_quick_order_root.be))},"QuickOrderFormComponent_Factory"),QuickOrderFormComponent.\u0275cmp=core.Xpm({type:QuickOrderFormComponent,selectors:[["cx-quick-order-form"]],inputs:{isDisabled:"isDisabled",isLoading:"isLoading"},decls:8,vars:10,consts:[[1,"quick-order-form-container",3,"formGroup","ngSubmit"],[1,"quick-order-form-input"],["formControlName","product","type","text",1,"form-control",3,"placeholder"],["tabindex","-1",1,"search",3,"type"],[3,"control"],["class","list-limit-reached-text",4,"ngIf"],[1,"list-limit-reached-text"]],template:__name(function(rf,ctx){1&rf&&(core.TgZ(0,"form",0),core.NdJ("ngSubmit",__name(function($event){return ctx.search($event)},"QuickOrderFormComponent_Template_form_ngSubmit_0_listener")),core.TgZ(1,"div",1),core._UZ(2,"input",2),core.ALo(3,"cxTranslate"),core.ALo(4,"cxTranslate"),core._UZ(5,"cx-icon",3),core._UZ(6,"cx-form-errors",4),core.YNc(7,QuickOrderFormComponent_span_7_Template,3,3,"span",5),core.qZA(),core.qZA()),2&rf&&(core.Q6J("formGroup",ctx.form),core.xp6(2),core.s9C("placeholder",core.lcZ(4,8,"quickOrderForm.placeholder")),core.uIk("aria-label",core.lcZ(3,6,"common.search")),core.xp6(3),core.Q6J("type",ctx.iconTypes.SEARCH),core.xp6(1),core.Q6J("control",ctx.form.get("product")),core.xp6(1),core.Q6J("ngIf",ctx.isDisabled))},"QuickOrderFormComponent_Template"),directives:[fesm2015_forms._Y,fesm2015_forms.JL,fesm2015_forms.sg,fesm2015_forms.Fj,fesm2015_forms.JJ,fesm2015_forms.u,spartacus_storefront.oJW,spartacus_storefront.Ahv,common.O5],pipes:[spartacus_core.X$D],encapsulation:2,changeDetection:0});class QuickOrderItemComponent{constructor(cd,quickOrderService){this.cd=cd,this.quickOrderService=quickOrderService,this.loading=!1,this.subscription=new Subscription.w}get entry(){return this._entry}set entry(value){this._entry=value,this.quantityControl=new fesm2015_forms.NI(this.entry.quantity)}ngOnInit(){this.subscription.add(this.quantityControl.valueChanges.subscribe(()=>{this.quickOrderService.updateEntryQuantity(this.index,this.quantityControl.value)})),this.subscription.add(this.watchProductAdd())}removeEntry(){this.quickOrderService.removeEntry(this.index)}watchProductAdd(){return this.quickOrderService.getProductAdded().subscribe(productCode=>{var _a;productCode===(null===(_a=this.entry.product)||void 0===_a?void 0:_a.code)&&(this.quantityControl=new fesm2015_forms.NI(this.entry.quantity),this.cd.detectChanges())})}ngOnDestroy(){var _a;null===(_a=this.subscription)||void 0===_a||_a.unsubscribe()}}__name(QuickOrderItemComponent,"QuickOrderItemComponent"),QuickOrderItemComponent.\u0275fac=__name(function(t){return new(t||QuickOrderItemComponent)(core.Y36(core.sBO),core.Y36(spartacus_cart_quick_order_root.be))},"QuickOrderItemComponent_Factory"),QuickOrderItemComponent.\u0275cmp=core.Xpm({type:QuickOrderItemComponent,selectors:[["cx-quick-order-item"]],inputs:{entry:"entry",index:"index",loading:"loading"},decls:32,vars:36,consts:[[1,"cx-quick-order-table-item"],[1,"row"],[1,"col-2","col-md-1","cx-quick-order-image-container"],[1,"cx-quick-order-table-item-product-image"],["tabindex","-1",3,"ngClass","routerLink"],["format","cartIcon",3,"container"],[1,"col-10","col-md-11","cx-quick-order-info-container"],[1,"cx-quick-order-table-item-product-information","col-md-4","col-lg-4","col-xl-4"],[1,"cx-name"],[1,"cx-link",3,"ngClass","routerLink"],[1,"cx-code"],[1,"cx-quick-order-table-item-price","col-md-2","col-lg-2","col-xl-2"],[1,"cx-label"],[1,"cx-value"],[1,"cx-quick-order-table-item-quantity","col-md-4","col-lg-4","col-xl-4"],[3,"control","max","readonly"],[1,"cx-quick-order-table-item-action","col-md-2","col-lg-2","col-xl-2"],[1,"link","cx-action-link",3,"disabled","click"]],template:__name(function(rf,ctx){1&rf&&(core.TgZ(0,"div",0),core.TgZ(1,"div",1),core.TgZ(2,"div",2),core.TgZ(3,"div",3),core.TgZ(4,"a",4),core.ALo(5,"cxUrl"),core._UZ(6,"cx-media",5),core.qZA(),core.qZA(),core.qZA(),core.TgZ(7,"div",6),core.TgZ(8,"div",1),core.TgZ(9,"div",7),core.TgZ(10,"div",8),core.TgZ(11,"a",9),core.ALo(12,"cxUrl"),core._uU(13),core.qZA(),core.qZA(),core.TgZ(14,"div",10),core._uU(15),core.ALo(16,"cxTranslate"),core.qZA(),core.qZA(),core.TgZ(17,"div",11),core.TgZ(18,"span",12),core._uU(19),core.ALo(20,"cxTranslate"),core.qZA(),core.TgZ(21,"div",13),core._uU(22),core.qZA(),core.qZA(),core.TgZ(23,"div",14),core.TgZ(24,"span",12),core._uU(25),core.ALo(26,"cxTranslate"),core.qZA(),core._UZ(27,"cx-item-counter",15),core.qZA(),core.TgZ(28,"div",16),core.TgZ(29,"button",17),core.NdJ("click",__name(function(){return ctx.removeEntry()},"QuickOrderItemComponent_Template_button_click_29_listener")),core._uU(30),core.ALo(31,"cxTranslate"),core.qZA(),core.qZA(),core.qZA(),core.qZA(),core.qZA(),core.qZA()),2&rf&&(core.xp6(4),core.Q6J("ngClass",core.VKq(28,_c0,ctx.loading))("routerLink",core.lcZ(5,16,core.VKq(30,_c1,ctx.entry.product))),core.xp6(2),core.Q6J("container",null==ctx.entry||null==ctx.entry.product||null==ctx.entry.product.images?null:ctx.entry.product.images.PRIMARY),core.xp6(5),core.Q6J("ngClass",core.VKq(32,_c0,ctx.loading))("routerLink",core.lcZ(12,18,core.VKq(34,_c1,ctx.entry.product))),core.xp6(2),core.hij("",(null==ctx.entry.product?null:ctx.entry.product.name)||"-"," "),core.xp6(2),core.AsE(" ",core.lcZ(16,20,"quickOrderTable.id")," ",null==ctx.entry.product?null:ctx.entry.product.code," "),core.xp6(4),core.hij(" ",core.lcZ(20,22,"quickOrderTable.itemPrice")," "),core.xp6(3),core.hij(" ",(null==ctx.entry.basePrice?null:ctx.entry.basePrice.formattedValue)||"-"," "),core.xp6(3),core.hij(" ",core.lcZ(26,24,"quickOrderTable.qty")," "),core.xp6(2),core.Q6J("control",ctx.quantityControl)("max",null==ctx.entry.product||null==ctx.entry.product.stock?null:ctx.entry.product.stock.stockLevel)("readonly",ctx.loading),core.xp6(2),core.Q6J("disabled",ctx.loading),core.xp6(1),core.hij(" ",core.lcZ(31,26,"common.remove")," "))},"QuickOrderItemComponent_Template"),directives:[router.yS,common.mk,spartacus_storefront.R7z,spartacus_storefront.odZ],pipes:[spartacus_core.l2T,spartacus_core.X$D],encapsulation:2,changeDetection:0});class QuickOrderTableComponent{constructor(){this.entries=[],this.loading=!1}}__name(QuickOrderTableComponent,"QuickOrderTableComponent"),QuickOrderTableComponent.\u0275fac=__name(function(t){return new(t||QuickOrderTableComponent)},"QuickOrderTableComponent_Factory"),QuickOrderTableComponent.\u0275cmp=core.Xpm({type:QuickOrderTableComponent,selectors:[["cx-quick-order-table"]],inputs:{entries:"entries",loading:"loading"},decls:1,vars:1,consts:[["class","cx-quick-order-table-wrapper",4,"ngIf"],[1,"cx-quick-order-table-wrapper"],[1,"cx-quick-order-table-header"],[1,"row"],[1,"col-2","col-md-1","cx-quick-order-image-header"],[1,"col-10","col-md-11","cx-quick-order-info-header"],[1,"cx-quick-order-table-item-product","col-md-4","col-lg-4","col-xl-4"],[1,"cx-quick-order-table-item-price","col-md-2","col-lg-2","col-xl-2"],[1,"cx-quick-order-table-item-quantity","col-md-4","col-lg-4","col-xl-4"],[1,"cx-quick-order-table-item-action","col-md-2","col-lg-2","col-xl-2"],["class","cx-quick-order-table-row",4,"ngFor","ngForOf"],[1,"cx-quick-order-table-row"],[3,"entry","index","loading"]],template:__name(function(rf,ctx){1&rf&&core.YNc(0,QuickOrderTableComponent_div_0_Template,17,10,"div",0),2&rf&&core.Q6J("ngIf",(null==ctx.entries?null:ctx.entries.length)>0)},"QuickOrderTableComponent_Template"),directives:[common.O5,common.sg,QuickOrderItemComponent],pipes:[spartacus_core.X$D],encapsulation:2,changeDetection:0});class QuickOrderComponent{constructor(activeCartService,component,globalMessageService,quickOrderService,quickOrderStatePersistenceService){this.activeCartService=activeCartService,this.component=component,this.globalMessageService=globalMessageService,this.quickOrderService=quickOrderService,this.quickOrderStatePersistenceService=quickOrderStatePersistenceService,this.quickOrderListLimit$=this.component.data$.pipe((0,map.U)(data=>data.quickOrderListLimit)),this.isCartStable$=(0,combineLatest.aj)([this.activeCartService.getActiveCartId(),this.activeCartService.isStable()]).pipe((0,map.U)(([activeCartId,isStable])=>!activeCartId||isStable)),this.globalMessageType=spartacus_core.xUg,this.cartErrors$=new BehaviorSubject.X([]),this.cartWarnings$=new BehaviorSubject.X([]),this.cartSuccesses$=new BehaviorSubject.X([])}ngOnInit(){this.cartId$=this.activeCartService.getActiveCartId(),this.entries$=this.quickOrderService.getEntries(),this.quickOrderStatePersistenceService.initSync()}get errors$(){return this.cartErrors$.asObservable()}get warnings$(){return this.cartWarnings$.asObservable()}get successes$(){return this.cartSuccesses$.asObservable()}clear(){this.quickOrderService.clearList(),this.globalMessageService.add({key:"quickOrderTable.listCleared"},spartacus_core.xUg.MSG_TYPE_INFO)}addToCart(orderEntries){this.clearStatuses(),this.quickOrderService.addToCart().pipe((0,first.P)()).subscribe(([entries,errors])=>{errors.forEach(err=>{err.entry||(err.entry=orderEntries.find(e=>{var _a;return(null===(_a=e.product)||void 0===_a?void 0:_a.code)===err.productCode}))}),this.extractErrors(errors),this.extractWarnings(errors),errors.length?this.extractSuccesses(errors,entries):this.showAddedToCartSuccessMessage()})}clearErrors(){this.cartErrors$.next([])}clearWarnings(){this.cartWarnings$.next([])}clearSuccesses(){this.cartSuccesses$.next([])}extractErrors(errors){const noAddedEntries=errors.filter(error=>0===error.quantityAdded);this.setErrors(noAddedEntries)}extractWarnings(errors){const warnings=errors.filter(error=>0!==error.quantityAdded);this.setWarnings(warnings)}extractSuccesses(errors,entries){const successAddedEntries=[];entries.forEach(entry=>{errors.find(error=>{var _a;return error.productCode===(null===(_a=entry.product)||void 0===_a?void 0:_a.code)})||successAddedEntries.push(entry)}),this.setSuccesses(successAddedEntries)}clearStatuses(){this.clearErrors(),this.clearWarnings(),this.clearSuccesses()}showAddedToCartSuccessMessage(){this.globalMessageService.add({key:"quickOrderTable.addedtoCart"},spartacus_core.xUg.MSG_TYPE_CONFIRMATION)}setErrors(errors){this.cartErrors$.next(errors)}setWarnings(warnings){this.cartWarnings$.next(warnings)}setSuccesses(entries){this.cartSuccesses$.next(entries)}}__name(QuickOrderComponent,"QuickOrderComponent"),QuickOrderComponent.\u0275fac=__name(function(t){return new(t||QuickOrderComponent)(core.Y36(spartacus_core.CPo),core.Y36(spartacus_storefront.exf),core.Y36(spartacus_core.IWp),core.Y36(spartacus_cart_quick_order_root.be),core.Y36(QuickOrderStatePersistenceService))},"QuickOrderComponent_Factory"),QuickOrderComponent.\u0275cmp=core.Xpm({type:QuickOrderComponent,selectors:[["cx-quick-order"]],decls:8,vars:12,consts:[[4,"ngIf"],[3,"text","type","closeMessage",4,"ngIf"],[3,"text","type","closeMessage"],[1,"quick-order-errors"],["class","quick-order-error-item",4,"ngFor","ngForOf"],[1,"quick-order-error-item"],[1,"quick-order-warnings"],["class","quick-order-warning-item",4,"ngFor","ngForOf"],[1,"quick-order-warning-item"],[1,"quick-order-successes"],["class","quick-order-success-item",4,"ngFor","ngForOf"],[1,"quick-order-success-item"],[1,"quick-order-header"],[1,"quick-order-form-body"],[3,"isDisabled","isLoading"],[1,"quick-order-table-body"],[3,"entries","loading"],[1,"quick-order-footer","row"],[1,"col-xs-12","col-md-5","col-lg-4"],["class","btn btn-block btn-action clear-button","type","button",3,"disabled","click",4,"ngIf"],[3,"ariaLabel","disabled","loading","clikEvent"],["type","button",1,"btn","btn-block","btn-action","clear-button",3,"disabled","click"]],template:__name(function(rf,ctx){1&rf&&(core.YNc(0,QuickOrderComponent_ng_container_0_Template,2,1,"ng-container",0),core.ALo(1,"async"),core.YNc(2,QuickOrderComponent_ng_container_2_Template,2,1,"ng-container",0),core.ALo(3,"async"),core.YNc(4,QuickOrderComponent_ng_container_4_Template,2,1,"ng-container",0),core.ALo(5,"async"),core.YNc(6,QuickOrderComponent_ng_container_6_Template,3,3,"ng-container",0),core.ALo(7,"async")),2&rf&&(core.Q6J("ngIf",core.lcZ(1,4,ctx.errors$)),core.xp6(2),core.Q6J("ngIf",core.lcZ(3,6,ctx.warnings$)),core.xp6(2),core.Q6J("ngIf",core.lcZ(5,8,ctx.successes$)),core.xp6(2),core.Q6J("ngIf",core.lcZ(7,10,ctx.quickOrderListLimit$)))},"QuickOrderComponent_Template"),directives:[common.O5,spartacus_storefront.qqZ,common.sg,QuickOrderFormComponent,QuickOrderTableComponent,spartacus_storefront.lc1],pipes:[common.Ov,spartacus_core.X$D],encapsulation:2,changeDetection:0});class QuickOrderListModule{}__name(QuickOrderListModule,"QuickOrderListModule"),QuickOrderListModule.\u0275fac=__name(function(t){return new(t||QuickOrderListModule)},"QuickOrderListModule_Factory"),QuickOrderListModule.\u0275mod=core.oAB({type:QuickOrderListModule}),QuickOrderListModule.\u0275inj=core.cJS({providers:[(0,spartacus_core.i51)({cmsComponents:{QuickOrderComponent:{component:QuickOrderComponent,data:{quickOrderListLimit:10}}}})],imports:[[common.ez,fesm2015_forms.UX,router.Bz,spartacus_storefront.Fym,spartacus_core.LUR,spartacus_storefront.QX1,spartacus_storefront.Td$,spartacus_storefront.cOq,spartacus_core.bhT,spartacus_storefront.Quc,spartacus_storefront.$zX]]});class QuickOrderComponentsModule{}__name(QuickOrderComponentsModule,"QuickOrderComponentsModule"),QuickOrderComponentsModule.\u0275fac=__name(function(t){return new(t||QuickOrderComponentsModule)},"QuickOrderComponentsModule_Factory"),QuickOrderComponentsModule.\u0275mod=core.oAB({type:QuickOrderComponentsModule}),QuickOrderComponentsModule.\u0275inj=core.cJS({imports:[[router.Bz,QuickOrderListModule,CartQuickOrderFormModule]]});class QuickOrderModule{}__name(QuickOrderModule,"QuickOrderModule"),QuickOrderModule.\u0275fac=__name(function(t){return new(t||QuickOrderModule)},"QuickOrderModule_Factory"),QuickOrderModule.\u0275mod=core.oAB({type:QuickOrderModule}),QuickOrderModule.\u0275inj=core.cJS({imports:[[QuickOrderCoreModule,QuickOrderComponentsModule]]})}};