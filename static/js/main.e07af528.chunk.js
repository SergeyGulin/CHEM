(this.webpackJsonpchem=this.webpackJsonpchem||[]).push([[0],{10:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(3),u=a.n(r),m=(a(9),a(1)),o=function(e){return l.a.createElement("div",{className:e.className+" scale1-1"},l.a.createElement("button",{className:"buttonView",onClick:e.handleClick},e.name))},c=function(e){return l.a.createElement(o,{name:e.name,className:e.className,handleClick:function(){return e.handleClick(e.name)}})},i=new(window.AudioContext||window.webkitAudioContext);var s=["/chem/sounds/162485__kastenfrosch__space.mp3","/chem/sounds/135510__chriddof__space-bloop.wav","/chem/sounds/432761__xpoki__lazershot.wav"].map((function(e){return t=e,a=i,new Promise((function(e,n){if(t)if(a){var l=new XMLHttpRequest;l.open("GET",t),l.responseType="arraybuffer",l.onload=function(){var t=l.response;a.decodeAudioData(t,(function(t){e(t)}))},l.onerror=function(){n("An error occurred.")},l.send()}else n("Missing audio context!");else n("Missing url!")}));var t,a})),E=function(e){return s[e].then((function(e){var t=i.createBufferSource();t.buffer=e,t.connect(i.destination),t.start()}))},d={"\u041a\u0438\u0441\u043b\u043e\u0442\u0430":"buttonPosition1","\u0421\u043e\u043b\u044c":"buttonPosition2","\u041e\u0441\u043d\u043e\u0432\u0430\u043d\u0438\u0435":"buttonPosition3","\u041e\u043a\u0441\u0438\u0434":"buttonPosition4"},f=function(e){var t=Object(n.useState)("zero"),a=Object(m.a)(t,2),r=a[0],u=a[1],o=Object(n.useState)(!1),i=Object(m.a)(o,2),s=i[0],f=i[1],b=e.stepNumber;Object(n.useEffect)((function(){var t=setTimeout((function(){u("zero+"),console.log('setState("zero+"); ')}),50),a=setTimeout((function(){e.handleFinishEvent({name:e.formula.name,type:e.formula.type,answer:void 0}),console.log("useEffect finish timeout ")}),e.mainAnimationDuration);return function(){clearTimeout(t),clearTimeout(a),console.log("useEffect clearTimeouts ")}}),[e]);var v,p,y,x,O,h,N,C=Object(n.useCallback)((function(t){if("zero+"===r){u(t);var a=e.formula.type===t,n=a?1:2,l={name:e.formula.name,type:e.formula.type,answer:t};E(n),a||setTimeout((function(){return u("zero+false")}),e.clickAnimationDuration+100),setTimeout((function(){e.handleFinishEvent(l)}),(e.clickAnimationDuration+100)*(a?1:2))}}),[e,r]);switch(r){case"zero":v="startPosition",1===b?(p="endPosition",y="endPosition",x="endPosition",O="endPosition",h="startPosition",N="startPosition"):(p="buttonPosition1 transition-true",y="buttonPosition2 transition-true",x="buttonPosition3 transition-true",O="buttonPosition4 transition-true",h="score transition-true",N="check-number transition-true");break;case"zero+":case"zero+false":v="endPosition endPositionTransition",p="buttonPosition1 transition-true",y="buttonPosition2 transition-true",x="buttonPosition3 transition-true",O="buttonPosition4 transition-true",h="score transition-true",N="check-number transition-true";break;default:v="".concat(d[r]," ").concat(e.formula.type===r?" transition-true":" transition-false"),p="buttonPosition1",y="buttonPosition2",x="buttonPosition3",O="buttonPosition4",h="score transition-true",N="check-number transition-true",console.log("state =  ",r),console.log("formulaPositionClass =  ",v)}return l.a.createElement("div",{className:"main main2-background-size"},l.a.createElement("div",{className:h},e.score),l.a.createElement("div",{className:N,onClick:e.handleStopEvent},"".concat(e.stepNumber," / ").concat(e.checksTotal)),l.a.createElement(c,{name:"\u041a\u0438\u0441\u043b\u043e\u0442\u0430",className:p,handleClick:C}),l.a.createElement(c,{name:"\u0421\u043e\u043b\u044c",className:y,handleClick:C}),l.a.createElement(c,{name:"\u041e\u0441\u043d\u043e\u0432\u0430\u043d\u0438\u0435",className:x,handleClick:C}),l.a.createElement(c,{name:"\u041e\u043a\u0441\u0438\u0434",className:O,handleClick:C}),l.a.createElement("div",{className:v},l.a.createElement("button",{className:"formulaView",onClick:function(){return f(!0)}},l.a.createElement("div",null,e.formula.formula),s&&l.a.createElement("div",{className:"formula-hint"},e.formula.text))))};var b={"":[{name:"\u0430\u0437\u043e\u0442\u043d\u0430\u044f \u043a\u0438\u0441\u043b\u043e\u0442\u0430",text:"",type:"\u041a\u0438\u0441\u043b\u043e\u0442\u0430",formula:l.a.createElement("div",null,"HNO",l.a.createElement("sub",null,"3"))},{name:"\u0430\u0437\u043e\u0442\u0438\u0441\u0442\u0430\u044f \u043a\u0438\u0441\u043b\u043e\u0442\u0430",text:"",type:"\u041a\u0438\u0441\u043b\u043e\u0442\u0430",formula:l.a.createElement("div",null,"\u041dNO",l.a.createElement("sub",null,"2"))},{name:"\u0444\u0442\u043e\u0440\u043e\u0432\u043e\u0434\u043e\u0440\u043e\u0434\u043d\u0430\u044f (\u043f\u043b\u0430\u0432\u0438\u043a\u043e\u0432\u0430\u044f ) \u043a\u0438\u0441\u043b\u043e\u0442\u0430",text:"",type:"\u041a\u0438\u0441\u043b\u043e\u0442\u0430",formula:l.a.createElement("div",null,"HF")},{name:"\u0431\u043e\u0440\u043d\u0430\u044f \u043a\u0438\u0441\u043b\u043e\u0442\u0430",text:"",type:"\u041a\u0438\u0441\u043b\u043e\u0442\u0430",formula:l.a.createElement("div",null,"\u041d",l.a.createElement("sub",null,"3"),"\u0412\u041e",l.a.createElement("sub",null,"3"))},{name:"\u0445\u043b\u043e\u0440\u043e\u0432\u043e\u0434\u043e\u0440\u043e\u0434\u043d\u0430\u044f \u043a\u0438\u0441\u043b\u043e\u0442\u0430",text:"",type:"\u041a\u0438\u0441\u043b\u043e\u0442\u0430",formula:l.a.createElement("div",null,"HCl")},{name:"\u0443\u043a\u0441\u0443\u0441\u043d\u0430\u044f \u043a\u0438\u0441\u043b\u043e\u0442\u0430",text:"",type:"\u041a\u0438\u0441\u043b\u043e\u0442\u0430",formula:l.a.createElement("div",null,"\u0421\u041d",l.a.createElement("sub",null,"3"),"\u0421\u041e\u041e\u041d")},{name:"\u0431\u0440\u043e\u043c\u043e\u0432\u043e\u0434\u043e\u0440\u043e\u0434\u043d\u0430\u044f \u043a\u0438\u0441\u043b\u043e\u0442\u0430",text:"",type:"\u041a\u0438\u0441\u043b\u043e\u0442\u0430",formula:l.a.createElement("div",null,"HBr")},{name:"\u043c\u0443\u0440\u0430\u0432\u044c\u0438\u043d\u0430\u044f \u043a\u0438\u0441\u043b\u043e\u0442\u0430",text:"",type:"\u041a\u0438\u0441\u043b\u043e\u0442\u0430",formula:l.a.createElement("div",null,"\u041d\u0421\u041e\u041e\u041d")},{name:"\u0438\u043e\u0434\u043e\u0432\u043e\u0434\u043e\u0440\u043e\u0434\u043d\u0430\u044f \u043a\u0438\u0441\u043b\u043e\u0442\u0430",text:"",type:"\u041a\u0438\u0441\u043b\u043e\u0442\u0430",formula:l.a.createElement("div",null,"HI")},{name:"\u0441\u0438\u043d\u0438\u043b\u044c\u043d\u0430\u044f \u043a\u0438\u0441\u043b\u043e\u0442\u0430 \u043a\u0438\u0441\u043b\u043e\u0442\u0430",text:"",type:"\u041a\u0438\u0441\u043b\u043e\u0442\u0430",formula:l.a.createElement("div",null,"\u041d\u0421N")},{name:"\u0441\u0435\u0440\u043d\u0430\u044f \u043a\u0438\u0441\u043b\u043e\u0442\u0430",text:"",type:"\u041a\u0438\u0441\u043b\u043e\u0442\u0430",formula:l.a.createElement("div",null,"H",l.a.createElement("sub",null,"2"),"SO",l.a.createElement("sub",null,"4"))},{name:"\u0434\u0438\u0445\u0440\u043e\u043c\u043e\u0432\u0430\u044f \u043a\u0438\u0441\u043b\u043e\u0442\u0430",text:"",type:"\u041a\u0438\u0441\u043b\u043e\u0442\u0430",formula:l.a.createElement("div",null,"\u041d",l.a.createElement("sub",null,"2"),"\u0421r",l.a.createElement("sub",null,"2"),"O",l.a.createElement("sub",null,"7"))},{name:"\u0441\u0435\u0440\u043d\u0438\u0441\u0442\u0430\u044f \u043a\u0438\u0441\u043b\u043e\u0442\u0430",text:"",type:"\u041a\u0438\u0441\u043b\u043e\u0442\u0430",formula:l.a.createElement("div",null,"H",l.a.createElement("sub",null,"2"),"SO",l.a.createElement("sub",null,"3"))},{name:"\u0445\u043b\u043e\u0440\u043d\u043e\u0432\u0430\u0442\u0438\u0441\u0442\u0430\u044f \u043a\u0438\u0441\u043b\u043e\u0442\u0430",text:"",type:"\u041a\u0438\u0441\u043b\u043e\u0442\u0430",formula:l.a.createElement("div",null,"\u041d\u0421lO")},{name:"\u0441\u0435\u0440\u043e\u0432\u043e\u0434\u043e\u0440\u043e\u0434\u043d\u0430\u044f \u043a\u0438\u0441\u043b\u043e\u0442\u0430",text:"",type:"\u041a\u0438\u0441\u043b\u043e\u0442\u0430",formula:l.a.createElement("div",null,"H",l.a.createElement("sub",null,"2"),"S")},{name:"\u0445\u043b\u043e\u0440\u043d\u043e\u0432\u0430\u0442\u0430\u044f \u043a\u0438\u0441\u043b\u043e\u0442\u0430",text:"",type:"\u041a\u0438\u0441\u043b\u043e\u0442\u0430",formula:l.a.createElement("div",null,"HClO",l.a.createElement("sub",null,"3"))},{name:"\u043c\u044b\u0448\u044c\u044f\u043a\u043e\u0432\u0430\u044f \u043a\u0438\u0441\u043b\u043e\u0442\u0430",text:"",type:"\u041a\u0438\u0441\u043b\u043e\u0442\u0430",formula:l.a.createElement("div",null,"H",l.a.createElement("sub",null,"3"),"AsO",l.a.createElement("sub",null,"4"))},{name:"\u0443\u0433\u043e\u043b\u044c\u043d\u0430\u044f \u043a\u0438\u0441\u043b\u043e\u0442\u0430",text:"",type:"\u041a\u0438\u0441\u043b\u043e\u0442\u0430",formula:l.a.createElement("div",null,"H",l.a.createElement("sub",null,"2"),"CO",l.a.createElement("sub",null,"3"))},{name:"\u0441\u0435\u043b\u0435\u043d\u043e\u0432\u0430\u044f \u043a\u0438\u0441\u043b\u043e\u0442\u0430",text:"",type:"\u041a\u0438\u0441\u043b\u043e\u0442\u0430",formula:l.a.createElement("div",null,"H",l.a.createElement("sub",null,"2"),"SO",l.a.createElement("sub",null,"4"))},{name:"\u043a\u0440\u0435\u043c\u043d\u0438\u0435\u0432\u0430\u044f \u043a\u0438\u0441\u043b\u043e\u0442\u0430",text:"",type:"\u041a\u0438\u0441\u043b\u043e\u0442\u0430",formula:l.a.createElement("div",null,"H",l.a.createElement("sub",null,"2"),"SiO",l.a.createElement("sub",null,"3"))},{name:"\u0441\u0435\u043b\u0435\u043d\u043e\u0432\u043e\u0434\u043e\u0440\u043e\u0434\u043d\u0430\u044f \u043a\u0438\u0441\u043b\u043e\u0442\u0430",text:"",type:"\u041a\u0438\u0441\u043b\u043e\u0442\u0430",formula:l.a.createElement("div",null,"H",l.a.createElement("sub",null,"2"),"S\u0435")},{name:"\u0444\u043e\u0441\u0444\u043e\u0440\u043d\u0430\u044f (\u043e\u0440\u0442\u043e\u0444\u043e\u0441\u0444\u043e\u0440\u043d\u0430\u044f) \u043a\u0438\u0441\u043b\u043e\u0442\u0430",text:"",type:"\u041a\u0438\u0441\u043b\u043e\u0442\u0430",formula:l.a.createElement("div",null,"H",l.a.createElement("sub",null,"3"),"PO",l.a.createElement("sub",null,"4"))},{name:"\u0413\u0438\u0434\u0440\u043e\u043a\u0441\u0438\u0434 \u043b\u0438\u0442\u0438\u044f",text:"",type:"\u041e\u0441\u043d\u043e\u0432\u0430\u043d\u0438\u0435",formula:l.a.createElement("div",null,"LiOH")},{name:"\u0413\u0438\u0434\u0440\u043e\u043a\u0441\u0438\u0434 \u043d\u0430\u0442\u0440\u0438\u044f",text:"",type:"\u041e\u0441\u043d\u043e\u0432\u0430\u043d\u0438\u0435",formula:l.a.createElement("div",null,"NaOH")},{name:"\u0413\u0438\u0434\u0440\u043e\u043a\u0441\u0438\u0434 \u043a\u0430\u043b\u0438\u044f",text:"",type:"\u041e\u0441\u043d\u043e\u0432\u0430\u043d\u0438\u0435",formula:l.a.createElement("div",null,"KOH")},{name:"\u0413\u0438\u0434\u0440\u043e\u043a\u0441\u0438\u0434 \u0440\u0443\u0431\u0438\u0434\u0438\u044f",text:"",type:"\u041e\u0441\u043d\u043e\u0432\u0430\u043d\u0438\u0435",formula:l.a.createElement("div",null,"RbOH")},{name:"\u0413\u0438\u0434\u0440\u043e\u043a\u0441\u0438\u0434 \u043b\u0438\u0442\u0438\u044f",text:"",type:"\u041e\u0441\u043d\u043e\u0432\u0430\u043d\u0438\u0435",formula:l.a.createElement("div",null,"LiOH")},{name:"\u0413\u0438\u0434\u0440\u043e\u043a\u0441\u0438\u0434 \u0446\u0435\u0437\u0438\u044f",text:"",type:"\u041e\u0441\u043d\u043e\u0432\u0430\u043d\u0438\u0435",formula:l.a.createElement("div",null,"CsOH")},{name:"\u0413\u0438\u0434\u0440\u043e\u043a\u0441\u0438\u0434 \u043c\u0435\u0434\u0438(I)",text:"",type:"\u041e\u0441\u043d\u043e\u0432\u0430\u043d\u0438\u0435",formula:l.a.createElement("div",null,"CuOH")},{name:"\u0413\u0438\u0434\u0440\u043e\u043a\u0441\u0438\u0434 \u043a\u0430\u043b\u044c\u0446\u0438\u044f",text:"",type:"\u041e\u0441\u043d\u043e\u0432\u0430\u043d\u0438\u0435",formula:l.a.createElement("div",null,"Ca(OH)",l.a.createElement("sub",null,"2"))},{name:"\u0413\u0438\u0434\u0440\u043e\u043a\u0441\u0438\u0434 \u043c\u0435\u0434\u0438(II)",text:"",type:"\u041e\u0441\u043d\u043e\u0432\u0430\u043d\u0438\u0435",formula:l.a.createElement("div",null,"Cu(OH)",l.a.createElement("sub",null,"2"))},{name:"\u0413\u0438\u0434\u0440\u043e\u043a\u0441\u0438\u0434 \u0436\u0435\u043b\u0435\u0437\u0430(II)",text:"",type:"\u041e\u0441\u043d\u043e\u0432\u0430\u043d\u0438\u0435",formula:l.a.createElement("div",null,"Fe(OH)",l.a.createElement("sub",null,"2"))},{name:"\u0413\u0438\u0434\u0440\u043e\u043a\u0441\u0438\u0434 \u0431\u0430\u0440\u0438\u044f",text:"",type:"\u041e\u0441\u043d\u043e\u0432\u0430\u043d\u0438\u0435",formula:l.a.createElement("div",null,"Ba(OH)",l.a.createElement("sub",null,"2"))},{name:"\u0413\u0438\u0434\u0440\u043e\u043a\u0441\u0438\u0434 \u043a\u043e\u0431\u0430\u043b\u044c\u0442\u0430(II)",text:"",type:"\u041e\u0441\u043d\u043e\u0432\u0430\u043d\u0438\u0435",formula:l.a.createElement("div",null,"Co(OH)",l.a.createElement("sub",null,"2"))},{name:"\u0413\u0438\u0434\u0440\u043e\u043a\u0441\u0438\u0434 \u043d\u0438\u043a\u0435\u043b\u044f (II)",text:"",type:"\u041e\u0441\u043d\u043e\u0432\u0430\u043d\u0438\u0435",formula:l.a.createElement("div",null,"Ni(OH)",l.a.createElement("sub",null,"2"))},{name:"\u0413\u0438\u0434\u0440\u043e\u043a\u0441\u0438\u0434 \u0441\u0432\u0438\u043d\u0446\u0430 (II)",text:"",type:"\u041e\u0441\u043d\u043e\u0432\u0430\u043d\u0438\u0435",formula:l.a.createElement("div",null,"Pb(OH)",l.a.createElement("sub",null,"2"))},{name:"\u0433\u0438\u0434\u0440\u043e\u043a\u0441\u0438\u0434 \u0436\u0435\u043b\u0435\u0437\u0430(III)",text:"",type:"\u041e\u0441\u043d\u043e\u0432\u0430\u043d\u0438\u0435",formula:l.a.createElement("div",null,"Fe(OH)",l.a.createElement("sub",null,"3"))},{name:"\u0433\u0438\u0434\u0440\u043e\u043a\u0441\u0438\u0434 \u0430\u043b\u044e\u043c\u0438\u043d\u0438\u044f",text:"",type:"\u041e\u0441\u043d\u043e\u0432\u0430\u043d\u0438\u0435",formula:l.a.createElement("div",null,"Al(OH)",l.a.createElement("sub",null,"3"))},{name:"\u0433\u0438\u0434\u0440\u043e\u043a\u0441\u0438\u0434 \u0446\u0438\u043d\u043a\u0430",text:"",type:"\u041e\u0441\u043d\u043e\u0432\u0430\u043d\u0438\u0435",formula:l.a.createElement("div",null,"Zn(OH)",l.a.createElement("sub",null,"2"))},{name:"\u0433\u0438\u0434\u0440\u043e\u043a\u0441\u0438\u0434 \u0431\u0435\u0440\u0438\u043b\u043b\u0438\u044f",text:"",type:"\u041e\u0441\u043d\u043e\u0432\u0430\u043d\u0438\u0435",formula:l.a.createElement("div",null,"Be(OH)",l.a.createElement("sub",null,"2"))},{name:"\u0433\u0438\u0434\u0440\u043e\u043a\u0441\u0438\u0434 \u0445\u0440\u043e\u043c\u0430(III)",text:"",type:"\u041e\u0441\u043d\u043e\u0432\u0430\u043d\u0438\u0435",formula:l.a.createElement("div",null,"Cr(OH)",l.a.createElement("sub",null,"3"))},{name:"\u0433\u0438\u0434\u0440\u043e\u043a\u0441\u0438\u0434 \u043c\u0430\u0440\u0433\u0430\u043d\u0446\u0430 (IV)",text:"",type:"\u041e\u0441\u043d\u043e\u0432\u0430\u043d\u0438\u0435",formula:l.a.createElement("div",null,"Mn(OH)",l.a.createElement("sub",null,"4"))},{name:"\u0433\u0438\u0434\u0440\u043e\u043a\u0441\u0438\u0434 c\u0432\u0438\u043d\u0446\u0430 (IV)",text:"",type:"\u041e\u0441\u043d\u043e\u0432\u0430\u043d\u0438\u0435",formula:l.a.createElement("div",null,"Pb(OH)",l.a.createElement("sub",null,"4"))},{name:"\u0433\u0438\u0434\u0440\u043e\u043a\u0441\u0438\u0434 \u043c\u0430\u0440\u0433\u0430\u043d\u0446\u0430 (II)",text:"",type:"\u041e\u0441\u043d\u043e\u0432\u0430\u043d\u0438\u0435",formula:l.a.createElement("div",null,"Mn(OH)",l.a.createElement("sub",null,"2"))},{name:"\u0441\u0443\u043b\u044c\u0444\u0430\u0442 \u043d\u0430\u0442\u0440\u0438\u044f",text:"",type:"\u0421\u043e\u043b\u044c",formula:l.a.createElement("div",null,"Na",l.a.createElement("sub",null,"2"),"SO",l.a.createElement("sub",null,"4"))},{name:"\u0445\u043b\u043e\u0440\u0438\u0434 \u043c\u0435\u0434\u0438 (II)",text:"",type:"\u0421\u043e\u043b\u044c",formula:l.a.createElement("div",null,"CuCl",l.a.createElement("sub",null,"2"))},{name:"\u043a\u0430\u0440\u0431\u043e\u043d\u0430\u0442 \u043a\u0430\u043b\u0438\u044f",text:"",type:"\u0421\u043e\u043b\u044c",formula:l.a.createElement("div",null,"\u041a",l.a.createElement("sub",null,"2"),"CO",l.a.createElement("sub",null,"3"))},{name:"\u0441\u0438\u043b\u0438\u043a\u0430\u0442 \u0431\u0430\u0440\u0438\u044f",text:"",type:"\u0421\u043e\u043b\u044c",formula:l.a.createElement("div",null,"\u0412\u0430SiO",l.a.createElement("sub",null,"3"))},{name:"\u041a\u0438\u0441\u043b\u043e\u0442\u043d\u044b\u0439 \u043e\u043a\u0441\u0438\u0434",text:"",type:"\u041e\u043a\u0441\u0438\u0434",formula:l.a.createElement("div",null,"SO",l.a.createElement("sub",null,"3"))},{name:"\u041a\u0438\u0441\u043b\u043e\u0442\u043d\u044b\u0439 \u043e\u043a\u0441\u0438\u0434",text:"",type:"\u041e\u043a\u0441\u0438\u0434",formula:l.a.createElement("div",null,"P",l.a.createElement("sub",null,"2"),"O",l.a.createElement("sub",null,"5"))},{name:"\u041a\u0438\u0441\u043b\u043e\u0442\u043d\u044b\u0439 \u043e\u043a\u0441\u0438\u0434",text:"",type:"\u041e\u043a\u0441\u0438\u0434",formula:l.a.createElement("div",null,"CO",l.a.createElement("sub",null,"2"))},{name:"\u041a\u0438\u0441\u043b\u043e\u0442\u043d\u044b\u0439 \u043e\u043a\u0441\u0438\u0434",text:"",type:"\u041e\u043a\u0441\u0438\u0434",formula:l.a.createElement("div",null,"N",l.a.createElement("sub",null,"2"),"O",l.a.createElement("sub",null,"3"))},{name:"\u041a\u0438\u0441\u043b\u043e\u0442\u043d\u044b\u0439 \u043e\u043a\u0441\u0438\u0434",text:"",type:"\u041e\u043a\u0441\u0438\u0434",formula:l.a.createElement("div",null,"Cl",l.a.createElement("sub",null,"2"),"O",l.a.createElement("sub",null,"7"))},{name:"\u041a\u0438\u0441\u043b\u043e\u0442\u043d\u044b\u0439 \u043e\u043a\u0441\u0438\u0434",text:"",type:"\u041e\u043a\u0441\u0438\u0434",formula:l.a.createElement("div",null,"WO",l.a.createElement("sub",null,"3"))},{name:"\u041a\u0438\u0441\u043b\u043e\u0442\u043d\u044b\u0439 \u043e\u043a\u0441\u0438\u0434",text:"",type:"\u041e\u043a\u0441\u0438\u0434",formula:l.a.createElement("div",null,"SiO",l.a.createElement("sub",null,"2"))},{name:"\u041a\u0438\u0441\u043b\u043e\u0442\u043d\u044b\u0439 \u043e\u043a\u0441\u0438\u0434",text:"",type:"\u041e\u043a\u0441\u0438\u0434",formula:l.a.createElement("div",null,"Mn",l.a.createElement("sub",null,"2"),"O",l.a.createElement("sub",null,"7"))},{name:"\u041e\u0441\u043d\u043e\u0432\u043d\u043e\u0439 \u043e\u043a\u0441\u0438\u0434",text:"",type:"\u041e\u043a\u0441\u0438\u0434",formula:l.a.createElement("div",null,"CuO")},{name:"\u041e\u0441\u043d\u043e\u0432\u043d\u043e\u0439 \u043e\u043a\u0441\u0438\u0434",text:"",type:"\u041e\u043a\u0441\u0438\u0434",formula:l.a.createElement("div",null,"Na",l.a.createElement("sub",null,"2"),"O")},{name:"\u041e\u0441\u043d\u043e\u0432\u043d\u043e\u0439 \u043e\u043a\u0441\u0438\u0434",text:"",type:"\u041e\u043a\u0441\u0438\u0434",formula:l.a.createElement("div",null,"Li",l.a.createElement("sub",null,"2"),"O")},{name:"\u041e\u0441\u043d\u043e\u0432\u043d\u043e\u0439 \u043e\u043a\u0441\u0438\u0434",text:"",type:"\u041e\u043a\u0441\u0438\u0434",formula:l.a.createElement("div",null,"BaO")},{name:"\u041e\u0441\u043d\u043e\u0432\u043d\u043e\u0439 \u043e\u043a\u0441\u0438\u0434",text:"",type:"\u041e\u043a\u0441\u0438\u0434",formula:l.a.createElement("div",null,"CoO")},{name:"\u041e\u0441\u043d\u043e\u0432\u043d\u043e\u0439 \u043e\u043a\u0441\u0438\u0434",text:"",type:"\u041e\u043a\u0441\u0438\u0434",formula:l.a.createElement("div",null,"FeO")},{name:"\u041e\u0441\u043d\u043e\u0432\u043d\u043e\u0439 \u043e\u043a\u0441\u0438\u0434",text:"",type:"\u041e\u043a\u0441\u0438\u0434",formula:l.a.createElement("div",null,"SrO")},{name:"\u041e\u0441\u043d\u043e\u0432\u043d\u043e\u0439 \u043e\u043a\u0441\u0438\u0434",text:"",type:"\u041e\u043a\u0441\u0438\u0434",formula:l.a.createElement("div",null,"Cu",l.a.createElement("sub",null,"2"),"O")},{name:"\u0430\u043c\u0444\u043e\u0442\u0435\u0440\u043d\u044b\u0439 \u043e\u043a\u0441\u0438\u0434",text:"",type:"\u041e\u043a\u0441\u0438\u0434",formula:l.a.createElement("div",null,"ZnO")},{name:"\u0430\u043c\u0444\u043e\u0442\u0435\u0440\u043d\u044b\u0439 \u043e\u043a\u0441\u0438\u0434",text:"",type:"\u041e\u043a\u0441\u0438\u0434",formula:l.a.createElement("div",null,"BeO")},{name:"\u0430\u043c\u0444\u043e\u0442\u0435\u0440\u043d\u044b\u0439 \u043e\u043a\u0441\u0438\u0434",text:"",type:"\u041e\u043a\u0441\u0438\u0434",formula:l.a.createElement("div",null,"Al",l.a.createElement("sub",null,"2"),"O",l.a.createElement("sub",null,"3"))},{name:"\u0430\u043c\u0444\u043e\u0442\u0435\u0440\u043d\u044b\u0439 \u043e\u043a\u0441\u0438\u0434",text:"",type:"\u041e\u043a\u0441\u0438\u0434",formula:l.a.createElement("div",null,"Fe",l.a.createElement("sub",null,"2"),"O",l.a.createElement("sub",null,"3"))},{name:"\u0430\u043c\u0444\u043e\u0442\u0435\u0440\u043d\u044b\u0439 \u043e\u043a\u0441\u0438\u0434",text:"",type:"\u041e\u043a\u0441\u0438\u0434",formula:l.a.createElement("div",null,"PbO",l.a.createElement("sub",null,"2"))},{name:"\u0430\u043c\u0444\u043e\u0442\u0435\u0440\u043d\u044b\u0439 \u043e\u043a\u0441\u0438\u0434",text:"",type:"\u041e\u043a\u0441\u0438\u0434",formula:l.a.createElement("div",null,"MnO",l.a.createElement("sub",null,"2"))},{name:"\u0413\u0438\u0434\u0440\u043e\u043a\u0441\u0438\u0434 \u0430\u043c\u043c\u043e\u043d\u0438\u044f",text:"\u0421\u0443\u043b\u044c\u0444\u0438\u0434 \u0430\u043c\u043c\u043e\u043d\u0438\u044f",type:"\u041e\u0441\u043d\u043e\u0432\u0430\u043d\u0438\u0435",formula:l.a.createElement("div",null,"NH",l.a.createElement("sub",null,"4"),"OH")},{name:"C\u0443\u043b\u044c\u0444\u0438\u0442 \u043d\u0430\u0442\u0440\u0438\u044f",text:"C\u0443\u043b\u044c\u0444\u0438\u0442 \u043d\u0430\u0442\u0440\u0438\u044f",type:"\u0421\u043e\u043b\u044c",formula:l.a.createElement("div",null,"Na",l.a.createElement("sub",null,"2"),"SO",l.a.createElement("sub",null,"3"))},{name:"\u0412\u043e\u0434\u0430 (\u043e\u043a\u0441\u0438\u0434 \u0432\u043e\u0434\u043e\u0440\u043e\u0434\u0430)",text:"\u0412\u043e\u0434\u0430",type:"\u041e\u043a\u0441\u0438\u0434",formula:l.a.createElement("div",null,"H",l.a.createElement("sub",null,"2"),"O")}]},v=Object.keys(b),p=function(e){return JSON.parse(localStorage.getItem(e)||"[]")},y=function(){return l.a.createElement("div",{className:"main main1-background-size"},v.map((function(e,t){return l.a.createElement("div",{key:e},l.a.createElement("div",null,"BestResultsScreen ",e),p(v[t]).map((function(e){return l.a.createElement("div",{className:"display-flex",key:e.date},l.a.createElement("div",{className:"record-score"},e.score),l.a.createElement("div",{className:"record-date"},new Date(e.date).toLocaleDateString()," ",new Date(e.date).toLocaleTimeString()))})))})))},x=function(){return l.a.createElement("div",{key:"\u0421\u0442\u0430\u0440\u0442",className:"main main1-background-size"},l.a.createElement("div",null,"ErrosScreen"))},O=function(){var e=Object(n.useState)({stepNumber:0,score:0,gradeClass:v[0]}),t=Object(m.a)(e,2),a=t[0],r=a.stepNumber,u=a.score,c=a.gradeClass,i=t[1],s=Object(n.useState)(b[c]),d=Object(m.a)(s,2),O=d[0],h=d[1],N=Object(n.useState)(!1),C=Object(m.a)(N,2),k=C[0],P=C[1];Object(n.useEffect)((function(){var e=document.documentElement;e.style.setProperty("--main-animation-duration",10..toFixed(2)+"s"),e.style.setProperty("--click-animation-duration",1..toFixed(2)+"s");var t=setTimeout((function(){return P(!0)}),50);return function(){clearTimeout(t)}}),[]);var g=Object(n.useCallback)((function(e){var t=function(e){var t=e.map((function(e){return[Math.random(),e]}));return t.sort((function(e,t){return e[0]-t[0]})),t.map((function(e){return e[1]}))}(b[e]);h(t),i({stepNumber:1,score:0,gradeClass:e}),E(0)}),[]),H=Object(n.useCallback)((function(e){var t=e.name,a=e.type,n=e.answer;console.log("handleFinishEvent name = ",t),console.log("handleFinishEvent type = ",a),console.log("handleFinishEvent answer = ",n);var l,m="".concat(t,"/").concat(n),o=parseInt(localStorage.getItem(m)||"0",10);void 0===n?(l=u,localStorage.setItem(m,"".concat(o+1))):a===n?l=u+2:(l=u-1,localStorage.setItem(m,"".concat(o+1)));var s=r>=10||r>=O.length;if(i({stepNumber:s?-1:r+1,score:l,gradeClass:c}),s){var E=p(c);E.push({date:Date.now(),score:l}),E.sort((function(e,t){return t.score-e.score})),E=E.slice(0,5),localStorage.setItem(c,JSON.stringify(E))}}),[r,O.length,c,u]);switch(r){case 0:return l.a.createElement("div",{className:"main main1-background-size"},v.map((function(e,t){return l.a.createElement(o,{key:e,name:"\u041d\u0430\u0447\u0430\u0442\u044c \u0438\u0433\u0440\u0443 ".concat(e),className:k?"buttonPositionPlay".concat(t+1," transition-true"):"startPosition",handleClick:function(){return g(e)}})})),l.a.createElement(o,{name:"\u041b\u0443\u0447\u0448\u0438\u0435 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u044b",className:k?"buttonPositionShowRecords transition-true":"startPosition",handleClick:function(){return i({stepNumber:-2,score:0,gradeClass:c})}}),l.a.createElement(o,{name:"\u041d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0435 \u043e\u0442\u0432\u0435\u0442\u044b",className:k?"buttonPositionShowWrongShots transition-true":"startPosition",handleClick:function(){return i({stepNumber:-3,score:0,gradeClass:c})}}));case-1:return l.a.createElement("div",{className:"main main1-background-size"},l.a.createElement("div",{className:k?"buttonPositionPlay result transition-true":"startPosition result"},"\u0418\u0442\u043e\u0433\u043e: ".concat(u)),l.a.createElement(o,{name:"\u0412\u043e\u0437\u0432\u0440\u0430\u0442 \u043d\u0430 \u0433\u043b\u0430\u0432\u043d\u044b\u0439 \u044d\u043a\u0440\u0430\u043d",className:k?"buttonPositionShowRecords  transition-true":"startPosition",handleClick:function(){return i({stepNumber:0,score:0,gradeClass:c})}}));case-2:return l.a.createElement("div",{onClick:function(){return i({stepNumber:0,score:0,gradeClass:c})}},l.a.createElement(y,null));case-3:return l.a.createElement("div",{onClick:function(){return i({stepNumber:0,score:0,gradeClass:c})}},l.a.createElement(x,null));default:return l.a.createElement(f,{key:r,stepNumber:r,checksTotal:10,clickAnimationDuration:1e3,formula:O[r-1],handleFinishEvent:H,handleStopEvent:function(){return i({stepNumber:0,score:0,gradeClass:c})},mainAnimationDuration:1e4,score:u})}};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(l.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},4:function(e,t,a){e.exports=a(10)},9:function(e,t,a){}},[[4,1,2]]]);