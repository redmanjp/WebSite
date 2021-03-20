var count = 0;
var donef = 'AA';
$("fire").on("mouseover",function(){

if (donef.indexOf($(this).attr('id'))==-1) {
$(this).fadeOut( 1000 );
$(this).animate({paddingRight:1},{
	//1秒かけてアニメーション
	duration:1000,
	//stepは、アニメーションが進むたびに呼ばれる
	step:function(now){
		//nowに現在のpadding-rightの値が渡してもらえる
		//0から1に向かって変化していくnowを利用してscaleさせてみる
		$(this).css({transform:'scale(' + now  + ')'});
	},
	//終わったら
	complete:function(){
		//次のために、元に戻しておく
		$('#sample20130315').css('paddingRight', 0);
	}
}); 
 
 
donef = $(this).attr('id')+donef;
count++;
 
$("#bg").fadeTo("slow", (1-(count*0.25)));
$("[id=bar]").fadeTo("slow", (1-(count*0.3)));
$("[id=retn]").fadeTo("slow", 1);
 if(count==4){
    // コンソールに県名を表示
setTimeout(function(){
 $("fire").fadeTo(200, (1)); 
$("[id=bar]").fadeTo(1000, (1)); 
$("[id=bg]").fadeTo(1000, (1)); 
},2000);
}
}
});

