var count = 0;
var donef = 'AA';
$("fire").on("mouseover",function(){
$(this).fadeOut( 1000 );

if (donef.indexOf($(this).attr('id'))==-1) {
donef = $(this).attr('id')+donef;
count++;
}
 
$("h2").addClass("shake-slow shake-constant");
 
if (count == 4) {
 
    // コンソールに県名を表示
$('h2').text('消　\　ろ');
 
　　}

});

