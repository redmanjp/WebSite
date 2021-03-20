var count = 0;
var donef = 'AA';
$("fire").on("mouseover",function(){
$(this).fadeOut( 1000 );

if (donef.indexOf($(this).attr('id'))==-1) {
donef = $(this).attr('id')+donef;
count++;
 
$("#bg").fadeTo("slow", (1-(count*0.25)));
$("[id=bar]").fadeTo("slow", (1-(count*0.3)));
$("[id=retn]").fadeTo("slow", 1);
 if(count==4){
    // コンソールに県名を表示

$("fire").fadeTo("slow", (1)); 
$("[id=bar]").fadeTo("slow", (1)); 
$("[id=bg]").fadeTo("slow", (1)); 
　　}

}
});

