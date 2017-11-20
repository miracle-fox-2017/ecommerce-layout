$(document).ready(function(){
  // Show category on click
  var showCategory=false;
  $(this).on("click",".show-category",function(event){
    var duration=800;
    if(!showCategory){
      $("#category-body").slideDown(duration,"easeInOutQuart");
    }else{
      $("#category-body").slideUp(duration,"easeInOutQuart");
    }
    showCategory=!showCategory;
  });
  // Category list
  var category=[
    {title:"Processor",image:"./assets/icon/processor.png"},
    {title:"HDD",image:"./assets/icon/hard-disk.png"},
    {title:"VGA",image:"./assets/icon/video-card.png"},
    {title:"RAM",image:"./assets/icon/ram.png"},
    {title:"Monitor",image:"./assets/icon/monitor.png"},
    {title:"Power Supply",image:"./assets/icon/power-source.png"},
    {title:"Network",image:"./assets/icon/ethernet.png"},
    {title:"Mouse",image:"./assets/icon/mouse.png"},
    {title:"Keyboard",image:"./assets/icon/keyboard.png"}
  ];
  category.forEach(function(data){
    $("#category-body").append(
      `<li class="col-xs-4 col-sm-3 col-lg-2">
        <div class="each-category-container">
          <div class="each-category">
            <div class="wrap">
              <img src="${data.image}" alt="${data.title}">
              <span>${data.title}</span>
            </div>
          </div>
        </div>
      </li>`
    );
  });
  // Item list
  var itemList=[
    {title:"AMD Ryzen 5",image:"./assets/image/amd-ryzen5-proc.png",price:"1000000"},
    {title:"Corsair PSU",image:"./assets/image/corsair-1200-psu.png",price:"1000000"},
    {title:"Corsair RAM DDR4",image:"./assets/image/corsair-ddr4-ram.png",price:"1000000"},
    {title:"Logitech Gaming Mouse",image:"./assets/image/logitech-1-mouse.png",price:"1000000"},
    {title:"Netgear Router",image:"./assets/image/netgear-router.png",price:"1000000"},
    {title:"Nvidia GTX 1080ti",image:"./assets/image/nvidia-gtx1080ti-vga.png",price:"1000000"},
    {title:"Razer Gaming Keyboard",image:"./assets/image/razer-1-keyboard.png",price:"1000000"},
    {title:"Razer Gaming Mouse",image:"./assets/image/razer-1-mouse.png",price:"1000000"},
    {title:"WD 2TB Hardrive",image:"./assets/image/wd-2tb-hdd.png",price:"1000000"}
  ];
  itemList.forEach(function(data){
    $("#item-list-body").append(
      `<li class="col-xs-6 col-sm-4 col-md-3">
        <div class="wrap">
          <img src="${data.image}" alt="${data.title}">
          <div class="desc">
            <span title="${data.title}">${data.title}</span>
            <span class="price">Rp. ${data.price}</span>
          </div>
          <div class="button">
            <button class="btn btn-success">Add to Cart</button>
            <button class="btn btn-warning">Save Favorite</button>
          </div>
        </div>
      </li>`
    );
  });
});
