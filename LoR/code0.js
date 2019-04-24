gdjs.menuCode = {};
gdjs.menuCode.GDhunterObjects1= [];
gdjs.menuCode.GDhunterObjects2= [];
gdjs.menuCode.GDscianaObjects1= [];
gdjs.menuCode.GDscianaObjects2= [];
gdjs.menuCode.GDtytulObjects1= [];
gdjs.menuCode.GDtytulObjects2= [];
gdjs.menuCode.GDnickObjects1= [];
gdjs.menuCode.GDnickObjects2= [];
gdjs.menuCode.GDslimeObjects1= [];
gdjs.menuCode.GDslimeObjects2= [];
gdjs.menuCode.GDcosObjects1= [];
gdjs.menuCode.GDcosObjects2= [];
gdjs.menuCode.GDklikObjects1= [];
gdjs.menuCode.GDklikObjects2= [];

gdjs.menuCode.conditionTrue_0 = {val:false};
gdjs.menuCode.condition0IsTrue_0 = {val:false};
gdjs.menuCode.condition1IsTrue_0 = {val:false};


gdjs.menuCode.eventsList0xaff48 = function(runtimeScene) {

{


gdjs.menuCode.condition0IsTrue_0.val = false;
{
gdjs.menuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.menuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "gra", true);
}}

}


{


{
}

}


}; //End of gdjs.menuCode.eventsList0xaff48


gdjs.menuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();
gdjs.menuCode.GDhunterObjects1.length = 0;
gdjs.menuCode.GDhunterObjects2.length = 0;
gdjs.menuCode.GDscianaObjects1.length = 0;
gdjs.menuCode.GDscianaObjects2.length = 0;
gdjs.menuCode.GDtytulObjects1.length = 0;
gdjs.menuCode.GDtytulObjects2.length = 0;
gdjs.menuCode.GDnickObjects1.length = 0;
gdjs.menuCode.GDnickObjects2.length = 0;
gdjs.menuCode.GDslimeObjects1.length = 0;
gdjs.menuCode.GDslimeObjects2.length = 0;
gdjs.menuCode.GDcosObjects1.length = 0;
gdjs.menuCode.GDcosObjects2.length = 0;
gdjs.menuCode.GDklikObjects1.length = 0;
gdjs.menuCode.GDklikObjects2.length = 0;

gdjs.menuCode.eventsList0xaff48(runtimeScene);
return;
}
gdjs['menuCode'] = gdjs.menuCode;
