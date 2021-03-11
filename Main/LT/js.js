var count = 0;
var donef = '';
$("fire").on("mouseover",function(){
$(this).fadeOut( 1000 );

if (donef.indexOf(this)==0) {
donef = this+donef;
count++;
}
 
$('h2').text('こんにちは');
 
if (count == 4) {
 
    // コンソールに県名を表示
$('h2').text('消　え　ろ');
 
　　}

});

