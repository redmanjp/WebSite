var count = 0;
$("fire").on("mouseover",function(){
$(this).fadeOut( 1000 );
count++;
$('h2').text('こんにちは');
 
if (count == 4) {
 
    // コンソールに県名を表示
$('h2').text('こんにちは');
 
　　}

});

