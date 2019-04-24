gdjs.graCode = {};
gdjs.graCode.GDhunterObjects1= [];
gdjs.graCode.GDhunterObjects2= [];
gdjs.graCode.GDhunterObjects3= [];
gdjs.graCode.GDscianaObjects1= [];
gdjs.graCode.GDscianaObjects2= [];
gdjs.graCode.GDscianaObjects3= [];
gdjs.graCode.GDplayerObjects1= [];
gdjs.graCode.GDplayerObjects2= [];
gdjs.graCode.GDplayerObjects3= [];
gdjs.graCode.GDNewObjectObjects1= [];
gdjs.graCode.GDNewObjectObjects2= [];
gdjs.graCode.GDNewObjectObjects3= [];
gdjs.graCode.GDpunktyObjects1= [];
gdjs.graCode.GDpunktyObjects2= [];
gdjs.graCode.GDpunktyObjects3= [];

gdjs.graCode.conditionTrue_0 = {val:false};
gdjs.graCode.condition0IsTrue_0 = {val:false};
gdjs.graCode.condition1IsTrue_0 = {val:false};
gdjs.graCode.condition2IsTrue_0 = {val:false};


gdjs.graCode.mapOfGDgdjs_46graCode_46GDhunterObjects1Objects = Hashtable.newFrom({"hunter": gdjs.graCode.GDhunterObjects1});gdjs.graCode.mapOfGDgdjs_46graCode_46GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.graCode.GDplayerObjects1});gdjs.graCode.mapOfGDgdjs_46graCode_46GDhunterObjects1Objects = Hashtable.newFrom({"hunter": gdjs.graCode.GDhunterObjects1});gdjs.graCode.eventsList0x66dc18 = function(runtimeScene) {

{

gdjs.graCode.GDhunterObjects2.createFrom(gdjs.graCode.GDhunterObjects1);

gdjs.graCode.GDplayerObjects2.createFrom(gdjs.graCode.GDplayerObjects1);


gdjs.graCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.graCode.GDplayerObjects2.length;i<l;++i) {
    if ( gdjs.graCode.GDplayerObjects2[i].getX() == (( gdjs.graCode.GDhunterObjects2.length === 0 ) ? 0 :gdjs.graCode.GDhunterObjects2[0].getX())+100 ) {
        gdjs.graCode.condition0IsTrue_0.val = true;
        gdjs.graCode.GDplayerObjects2[k] = gdjs.graCode.GDplayerObjects2[i];
        ++k;
    }
}
gdjs.graCode.GDplayerObjects2.length = k;}if (gdjs.graCode.condition0IsTrue_0.val) {
/* Reuse gdjs.graCode.GDhunterObjects2 */
{for(var i = 0, len = gdjs.graCode.GDhunterObjects2.length ;i < len;++i) {
    gdjs.graCode.GDhunterObjects2[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getVariables().get("punkty").add(1);
}}

}


{

gdjs.graCode.GDhunterObjects2.createFrom(gdjs.graCode.GDhunterObjects1);

gdjs.graCode.GDplayerObjects2.createFrom(gdjs.graCode.GDplayerObjects1);


gdjs.graCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.graCode.GDhunterObjects2.length;i<l;++i) {
    if ( gdjs.graCode.GDhunterObjects2[i].getX() == (( gdjs.graCode.GDplayerObjects2.length === 0 ) ? 0 :gdjs.graCode.GDplayerObjects2[0].getX())+100 ) {
        gdjs.graCode.condition0IsTrue_0.val = true;
        gdjs.graCode.GDhunterObjects2[k] = gdjs.graCode.GDhunterObjects2[i];
        ++k;
    }
}
gdjs.graCode.GDhunterObjects2.length = k;}if (gdjs.graCode.condition0IsTrue_0.val) {
/* Reuse gdjs.graCode.GDhunterObjects2 */
{for(var i = 0, len = gdjs.graCode.GDhunterObjects2.length ;i < len;++i) {
    gdjs.graCode.GDhunterObjects2[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getVariables().get("punkty").add(1);
}}

}


{

/* Reuse gdjs.graCode.GDhunterObjects1 */
/* Reuse gdjs.graCode.GDplayerObjects1 */

gdjs.graCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.graCode.GDplayerObjects1.length;i<l;++i) {
    if ( gdjs.graCode.GDplayerObjects1[i].getY() == (( gdjs.graCode.GDhunterObjects1.length === 0 ) ? 0 :gdjs.graCode.GDhunterObjects1[0].getY())+100 ) {
        gdjs.graCode.condition0IsTrue_0.val = true;
        gdjs.graCode.GDplayerObjects1[k] = gdjs.graCode.GDplayerObjects1[i];
        ++k;
    }
}
gdjs.graCode.GDplayerObjects1.length = k;}if (gdjs.graCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "menu", false);
}}

}


}; //End of gdjs.graCode.eventsList0x66dc18
gdjs.graCode.mapOfGDgdjs_46graCode_46GDscianaObjects1Objects = Hashtable.newFrom({"sciana": gdjs.graCode.GDscianaObjects1});gdjs.graCode.eventsList0x66d980 = function(runtimeScene) {

{


gdjs.graCode.condition0IsTrue_0.val = false;
{
gdjs.graCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 2, "Cos_napewno2");
}if (gdjs.graCode.condition0IsTrue_0.val) {
/* Reuse gdjs.graCode.GDscianaObjects1 */
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.graCode.mapOfGDgdjs_46graCode_46GDscianaObjects1Objects, gdjs.random(400), 800, "");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Cos_napewno2");
}}

}


}; //End of gdjs.graCode.eventsList0x66d980
gdjs.graCode.mapOfGDgdjs_46graCode_46GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.graCode.GDplayerObjects1});gdjs.graCode.mapOfGDgdjs_46graCode_46GDscianaObjects1Objects = Hashtable.newFrom({"sciana": gdjs.graCode.GDscianaObjects1});gdjs.graCode.eventsList0x678cc0 = function(runtimeScene) {

{

gdjs.graCode.GDplayerObjects2.createFrom(gdjs.graCode.GDplayerObjects1);

gdjs.graCode.GDscianaObjects2.createFrom(gdjs.graCode.GDscianaObjects1);


gdjs.graCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.graCode.GDplayerObjects2.length;i<l;++i) {
    if ( gdjs.graCode.GDplayerObjects2[i].getX() == (( gdjs.graCode.GDscianaObjects2.length === 0 ) ? 0 :gdjs.graCode.GDscianaObjects2[0].getX())+100 ) {
        gdjs.graCode.condition0IsTrue_0.val = true;
        gdjs.graCode.GDplayerObjects2[k] = gdjs.graCode.GDplayerObjects2[i];
        ++k;
    }
}
gdjs.graCode.GDplayerObjects2.length = k;}if (gdjs.graCode.condition0IsTrue_0.val) {
/* Reuse gdjs.graCode.GDscianaObjects2 */
{for(var i = 0, len = gdjs.graCode.GDscianaObjects2.length ;i < len;++i) {
    gdjs.graCode.GDscianaObjects2[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getVariables().get("punkty").add(1);
}}

}


{

gdjs.graCode.GDplayerObjects2.createFrom(gdjs.graCode.GDplayerObjects1);

gdjs.graCode.GDscianaObjects2.createFrom(gdjs.graCode.GDscianaObjects1);


gdjs.graCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.graCode.GDscianaObjects2.length;i<l;++i) {
    if ( gdjs.graCode.GDscianaObjects2[i].getX() == (( gdjs.graCode.GDplayerObjects2.length === 0 ) ? 0 :gdjs.graCode.GDplayerObjects2[0].getX())+100 ) {
        gdjs.graCode.condition0IsTrue_0.val = true;
        gdjs.graCode.GDscianaObjects2[k] = gdjs.graCode.GDscianaObjects2[i];
        ++k;
    }
}
gdjs.graCode.GDscianaObjects2.length = k;}if (gdjs.graCode.condition0IsTrue_0.val) {
/* Reuse gdjs.graCode.GDscianaObjects2 */
{for(var i = 0, len = gdjs.graCode.GDscianaObjects2.length ;i < len;++i) {
    gdjs.graCode.GDscianaObjects2[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getVariables().get("punkty").add(1);
}}

}


{

/* Reuse gdjs.graCode.GDplayerObjects1 */
/* Reuse gdjs.graCode.GDscianaObjects1 */

gdjs.graCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.graCode.GDplayerObjects1.length;i<l;++i) {
    if ( gdjs.graCode.GDplayerObjects1[i].getY() == (( gdjs.graCode.GDscianaObjects1.length === 0 ) ? 0 :gdjs.graCode.GDscianaObjects1[0].getY())-100 ) {
        gdjs.graCode.condition0IsTrue_0.val = true;
        gdjs.graCode.GDplayerObjects1[k] = gdjs.graCode.GDplayerObjects1[i];
        ++k;
    }
}
gdjs.graCode.GDplayerObjects1.length = k;}if (gdjs.graCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "menu", false);
}}

}


}; //End of gdjs.graCode.eventsList0x678cc0
gdjs.graCode.eventsList0xaff48 = function(runtimeScene) {

{


gdjs.graCode.condition0IsTrue_0.val = false;
{
gdjs.graCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.graCode.condition0IsTrue_0.val) {
gdjs.graCode.GDhunterObjects1.createFrom(runtimeScene.getObjects("hunter"));
gdjs.graCode.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));
gdjs.graCode.GDscianaObjects1.createFrom(runtimeScene.getObjects("sciana"));
{for(var i = 0, len = gdjs.graCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.graCode.GDplayerObjects1[i].setPosition(200,350);
}
}{for(var i = 0, len = gdjs.graCode.GDhunterObjects1.length ;i < len;++i) {
    gdjs.graCode.GDhunterObjects1[i].setPosition(gdjs.random(400),0);
}
}{for(var i = 0, len = gdjs.graCode.GDscianaObjects1.length ;i < len;++i) {
    gdjs.graCode.GDscianaObjects1[i].setPosition(gdjs.random(400),750);
}
}{for(var i = 0, len = gdjs.graCode.GDscianaObjects1.length ;i < len;++i) {
    gdjs.graCode.GDscianaObjects1[i].hide();
}
}}

}


{

gdjs.graCode.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));

gdjs.graCode.condition0IsTrue_0.val = false;
gdjs.graCode.condition1IsTrue_0.val = false;
{
gdjs.graCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if ( gdjs.graCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.graCode.GDplayerObjects1.length;i<l;++i) {
    if ( gdjs.graCode.GDplayerObjects1[i].getX() >= 0 ) {
        gdjs.graCode.condition1IsTrue_0.val = true;
        gdjs.graCode.GDplayerObjects1[k] = gdjs.graCode.GDplayerObjects1[i];
        ++k;
    }
}
gdjs.graCode.GDplayerObjects1.length = k;}}
if (gdjs.graCode.condition1IsTrue_0.val) {
/* Reuse gdjs.graCode.GDplayerObjects1 */
{for(var i = 0, len = gdjs.graCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.graCode.GDplayerObjects1[i].addPolarForce(180, 500, 0);
}
}}

}


{

gdjs.graCode.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));

gdjs.graCode.condition0IsTrue_0.val = false;
gdjs.graCode.condition1IsTrue_0.val = false;
{
gdjs.graCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if ( gdjs.graCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.graCode.GDplayerObjects1.length;i<l;++i) {
    if ( gdjs.graCode.GDplayerObjects1[i].getX() <= 400 ) {
        gdjs.graCode.condition1IsTrue_0.val = true;
        gdjs.graCode.GDplayerObjects1[k] = gdjs.graCode.GDplayerObjects1[i];
        ++k;
    }
}
gdjs.graCode.GDplayerObjects1.length = k;}}
if (gdjs.graCode.condition1IsTrue_0.val) {
/* Reuse gdjs.graCode.GDplayerObjects1 */
{for(var i = 0, len = gdjs.graCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.graCode.GDplayerObjects1[i].addPolarForce(0, 500, 0);
}
}}

}


{


{
gdjs.graCode.GDhunterObjects1.createFrom(runtimeScene.getObjects("hunter"));
{for(var i = 0, len = gdjs.graCode.GDhunterObjects1.length ;i < len;++i) {
    gdjs.graCode.GDhunterObjects1[i].addPolarForce(90, 200, 0);
}
}}

}


{


gdjs.graCode.condition0IsTrue_0.val = false;
{
gdjs.graCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 2, "Cos_napewno");
}if (gdjs.graCode.condition0IsTrue_0.val) {
gdjs.graCode.GDhunterObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.graCode.mapOfGDgdjs_46graCode_46GDhunterObjects1Objects, gdjs.random(400), 0, "");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Cos_napewno");
}}

}


{

gdjs.graCode.GDhunterObjects1.createFrom(runtimeScene.getObjects("hunter"));
gdjs.graCode.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));

gdjs.graCode.condition0IsTrue_0.val = false;
{
gdjs.graCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.graCode.mapOfGDgdjs_46graCode_46GDplayerObjects1Objects, gdjs.graCode.mapOfGDgdjs_46graCode_46GDhunterObjects1Objects, false, runtimeScene);
}if (gdjs.graCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.graCode.eventsList0x66dc18(runtimeScene);} //End of subevents
}

}


{


{
gdjs.graCode.GDpunktyObjects1.createFrom(runtimeScene.getObjects("punkty"));
{for(var i = 0, len = gdjs.graCode.GDpunktyObjects1.length ;i < len;++i) {
    gdjs.graCode.GDpunktyObjects1[i].setString(gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("punkty"))));
}
}}

}


{


gdjs.graCode.condition0IsTrue_0.val = false;
{
gdjs.graCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("punkty")) >= 5;
}if (gdjs.graCode.condition0IsTrue_0.val) {
gdjs.graCode.GDscianaObjects1.createFrom(runtimeScene.getObjects("sciana"));
{for(var i = 0, len = gdjs.graCode.GDscianaObjects1.length ;i < len;++i) {
    gdjs.graCode.GDscianaObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.graCode.GDscianaObjects1.length ;i < len;++i) {
    gdjs.graCode.GDscianaObjects1[i].addPolarForce(270, 200, 0);
}
}
{ //Subevents
gdjs.graCode.eventsList0x66d980(runtimeScene);} //End of subevents
}

}


{

gdjs.graCode.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));
gdjs.graCode.GDscianaObjects1.createFrom(runtimeScene.getObjects("sciana"));

gdjs.graCode.condition0IsTrue_0.val = false;
{
gdjs.graCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.graCode.mapOfGDgdjs_46graCode_46GDplayerObjects1Objects, gdjs.graCode.mapOfGDgdjs_46graCode_46GDscianaObjects1Objects, false, runtimeScene);
}if (gdjs.graCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.graCode.eventsList0x678cc0(runtimeScene);} //End of subevents
}

}


{


{
}

}


}; //End of gdjs.graCode.eventsList0xaff48


gdjs.graCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();
gdjs.graCode.GDhunterObjects1.length = 0;
gdjs.graCode.GDhunterObjects2.length = 0;
gdjs.graCode.GDhunterObjects3.length = 0;
gdjs.graCode.GDscianaObjects1.length = 0;
gdjs.graCode.GDscianaObjects2.length = 0;
gdjs.graCode.GDscianaObjects3.length = 0;
gdjs.graCode.GDplayerObjects1.length = 0;
gdjs.graCode.GDplayerObjects2.length = 0;
gdjs.graCode.GDplayerObjects3.length = 0;
gdjs.graCode.GDNewObjectObjects1.length = 0;
gdjs.graCode.GDNewObjectObjects2.length = 0;
gdjs.graCode.GDNewObjectObjects3.length = 0;
gdjs.graCode.GDpunktyObjects1.length = 0;
gdjs.graCode.GDpunktyObjects2.length = 0;
gdjs.graCode.GDpunktyObjects3.length = 0;

gdjs.graCode.eventsList0xaff48(runtimeScene);
return;
}
gdjs['graCode'] = gdjs.graCode;
