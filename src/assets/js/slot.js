/*
*
*	jQuery Slot Machine
*
*/
var height_slot_number = '100';

function go (one,two,thre) {
	addSlots($("#slots_units .number-wrapper"));
	moveSlots($("#slots_units .number-wrapper"),one);
  addSlots($("#slots_units .number-wrapper"));
  addSlots($("#slots_tens .number-wrapper"));
  moveSlots($("#slots_tens .number-wrapper"), two);
  addSlots($("#slots_tens .number-wrapper"));
  addSlots($("#slots_queue .number-wrapper"));
  moveSlots($("#slots_queue .number-wrapper"), thre);
  addSlots($("#slots_queue .number-wrapper"));
}

$(document).ready(function(){
	addSlots($("#slots_units .number-wrapper"));
  addSlots($("#slots_tens .number-wrapper"));
  addSlots($("#slots_queue .number-wrapper"));
    $('#arm').click(function(e) {
			var arm = $(this).addClass('clicked');
      delay = setTimeout(function() { arm.removeClass('clicked');}, 200);
      e.preventDefault();
      // set gift 
      go(12,12,12);
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
      src: 'https://staging-s3.go2joy.vn/350w/luckywheel/171_1660548020_62f9f3b40b8e2.png',
      sn: 5,
      text: '111k'
    },{
      src: 'https://staging-s3.go2joy.vn/350w/luckywheel/171_1660548055_62f9f3d786855.png',
      sn: 6,
      text: 'Có cái nịt'
    }
  ]
	for(var i = 0; i <= 5; i++){
		jqo.append(`<div class='slot' style="height: 100px !important;"><img src="${data[i].src}" class="el-image__inner" style="object-fit: scale-down;"></div>`);
	}
}

function moveSlots (jqo, num) {
  console.log('num :>> ', num);
	var time	= 6500;
	var number	= num;
	time		+= Math.round(Math.random()*1000);
	jqo.stop(true,true);

	var margin_top  = number*100 + 5
  console.log('margin_top :>> ', margin_top);
	jqo.animate(
		{"margin-top":"-"+ margin_top +"px"},
		{'duration' : time, 'easing' : "easeOutElastic"}
	);
}
