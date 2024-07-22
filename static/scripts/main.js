window.addEventListener('scroll', () => {
    document.body.style.setProperty('--scroll',window.scrollY / (document.body.offsetHeight - window.innerHeight));
  }, false);
document.body.style.setProperty('--topoffset',$('.navigation').height())
$('#drop_down').click((e)=>{$(document.querySelectorAll('.navigation .small_box')).slideToggle();})
document.querySelectorAll('.nav_b').forEach((el)=> {
    $(el).click((e)=>{
        if (e.id=='left') {
            Show_left()
        }
        if (e.id=='right') {
            Show_right()
        }
});
});
function Show_left(){}

function type_writter(id){
    let t_c=$(`#${id}`)[0].textContent.trim()
    $(`#${id}`).text('_')
    let current={last:t_c[0],i:0,loop_time:100}
    let i=setInterval(()=>{
        $(`#${id}`).text(`${current.last}_`);
        if(t_c==current.last){clearInterval(i)}
        current.i=current.i+1;
        current.last=current.last+t_c[current.i]
    },current.loop_time)
};
$(window).resize(function () { 
    if($(window).innerWidth()>425){
        $(document.querySelectorAll('.navigation .small_box')).show();
    };
    
    if($(window).innerWidth()<427){
        $(document.querySelectorAll('.navigation .small_box')).hide();
    };
    
});
window.onready=()=>{
}
type_writter('intro')
type_writter('p1')
