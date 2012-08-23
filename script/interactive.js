//********************************
// * JavaScript Document
// * interactive.js
// * 渲染&交互&功能 线上版
// * @Panda.Lee 
// *    User Center Develop and Design
// *    Panda@XingYun.CN
// * @date
// * @link 
//
//********************************

//****************************** HTML5新TAG支持 ******************************
if ($.browser.msie && $.browser.version != "9.0") {
	(function(){if(!/*@cc_on!@*/0)return;var e = "abbr,article,aside,audio,canvas,datalist,details,dialog,eventsource,figure,footer,header,hgroup,mark,menu,meter,nav,output,progress,section,time,video".split(','),i=e.length;while(i--){document.createElement(e[i])}})()
}


//****************************** IE png透明修正 ******************************
if ($.browser.msie && $.browser.version < "7.0") {
	var clear="/static/images/n.gif" //path to clear.gif
	pngfix=function(){var els=document.getElementsByTagName('*');var ip=/\.png/i;var i=els.length;while(i-- >0){var el=els[i];var es=el.style;if(el.src&&el.src.match(ip)&&!es.filter){es.height=el.height;es.width=el.width;es.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+el.src+"',sizingMethod='crop')";el.src=clear;}else{var elb=el.currentStyle.backgroundImage;if(elb.match(ip)){var path=elb.split('"');var rep=(el.currentStyle.backgroundRepeat=='no-repeat')?'crop':'scale';es.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+path[1]+"',sizingMethod='"+rep+"')";es.height=el.clientHeight+'px';es.backgroundImage='none';var elkids=el.getElementsByTagName('*');if (elkids){var j=elkids.length;if(el.currentStyle.position!="absolute")es.position='static';while (j-- >0)if(!elkids[j].style.position)elkids[j].style.position="relative";}}}}}
	window.attachEvent('onload',pngfix);
}

function notice(text,type) {
	var $notice = $('<div class="topNotice"><span class="close iconClose2"></span></div>');
	if (type) {
		if (type == 'success') {
			$notice.append('<div class="notice success"><span class="iconBoole2_1"></span><span class="msg">' + text + '</span></div>');
		} else if (type == 'error') {
			$notice.append('<div class="notice error"><span style="font-weight:700;">T T</span><span class="msg">' + text + '</span></div>');
		} else if (type == 'load') {
			$notice.append('<div class="notice"><span class="iconLoading1"></span><span class="msg">' + text + '</span></div>');
		}
	} else {
		$notice.append('<div class="notice"><span class="msg">' + text + '</span></div>');
	}
	if (type != 'load') {
		var timeHolder = setTimeout(function() {console.log('开始执行');$notice.find('.close').click();}, 5000);
		console.log('开始计时');
	}
	$notice.appendTo('body').animate({
		opacity: 1
	},400);
	$notice.find('.close').click(function() {
		$notice.animate({
			top: - $notice.height()
		}, 300, function() {
			$($notice.remove());
		});
	});
}

function floatNotice($obj,text,z) {
	z? z = z : z = 5;
	var top = $obj.offset().top - $('.container .mainBody').offset().top,
		left = $obj.offset().left - $('.container .mainBody').offset().left,
		width = $obj.outerWidth(),
		height =  $obj.outerHeight();

	$notice = $('<div class="floatNotice"><span class="iconLoading2"></span></div>');
	$notice
		.appendTo('.container .mainBody')
		.css({
			top: top,
			left: left,
			paddingTop: height/2,
			width: width,
			height: height/2,
			zIndex: z
		})
		.animate({
			opacity : 0.3
		}, 300);
}
