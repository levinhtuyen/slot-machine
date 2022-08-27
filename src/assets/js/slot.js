/*
*
*	jQuery Slot Machine
*
*/
var height_slot_number = '200';

function go(tens,units){
	addSlots($("#slots_units .number-wrapper"));
	addSlots($("#slots_units .number-wrapper"));
	moveSlots($("#slots_units .number-wrapper"),tens);
	addSlots($("#slots_tens .number-wrapper"));
	addSlots($("#slots_tens .number-wrapper"));
  moveSlots($("#slots_tens .number-wrapper"), tens);
  addSlots($("#slots_queue .number-wrapper"));
	addSlots($("#slots_queue .number-wrapper"));
	moveSlots($("#slots_queue .number-wrapper"),tens);
}

$(document).ready(function(){
	addSlots($("#slots_units .number-wrapper"));
  addSlots($("#slots_tens .number-wrapper"));
  addSlots($("#slots_queue .number-wrapper"));
    $('#arm').click(function(e) {
			var arm = $(this).addClass('clicked');
      delay = setTimeout(function() { arm.removeClass('clicked');}, 500);
      e.preventDefault();
      go(Math.floor(Math.random() * 10));
	});
});


function addSlots (jqo) {
  let data = [
    {
      src: 'https://staging-s3.go2joy.vn/350w/luckywheel/171_1660547786_62f9f2cac4f9c.png',
      sn: 1,
      text: '11k'
    },{
      src: 'https://staging-s3.go2joy.vn/350w/luckywheel/171_1660547834_62f9f2fa3da7f.png',
      sn: 2,
      text: '33k'
    },{
      src: 'https://staging-s3.go2joy.vn/350w/luckywheel/171_1660547875_62f9f3232bf9e.png',
      sn: 3,
      text: '44k'
    },{
      src: 'https://staging-s3.go2joy.vn/350w/luckywheel/171_1660547909_62f9f345c66c7.png',
      sn: 4,
      text: '55k'
    },{
      src: 'https://staging-s3.go2joy.vn/350w/luckywheel/171_1660547786_62f9f2cac4f9c.png',
      sn: 5,
      text: '111k'
    },{
      src: 'https://staging-s3.go2joy.vn/350w/luckywheel/171_1660548055_62f9f3d786855.png',
      sn: 6,
      text: 'Có cái nịt'
    }
  ]
	for(var i = 0; i < data.length; i++){
		jqo.append(`<div class='slot'><img src="${data[i].src}" class="el-image__inner" style="object-fit: scale-down;"></div>`);
	}
}

function moveSlots(jqo,num){
	var time	= 6500;
	var number	= num;
	time		+= Math.round(Math.random()*1000);
	jqo.stop(true,true);

	var num_slot    = Math.round((jqo.find('.slot').length)/20);
	var margin_top  = ((num_slot -1) * (height_slot_number * 10)) + (num * height_slot_number);

	jqo.animate(
		{"margin-top":"-"+ margin_top +"px"},
		{'duration' : time, 'easing' : "easeOutElastic"}
	);
}
