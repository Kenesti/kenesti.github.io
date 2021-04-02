$.getJSON("commands.json", function(data) {
  var html='';
  $.each(data, function(key, value){
    html+='<tr>';
    html+='<td>'+value.name+'</td>';
    html+='<td><xmp>'+value.usage+'</xmp></td>';
    html+='<td>'+value.description+'</td>';
    html+='</tr>';
  });
  $('#test').html(html);
});
