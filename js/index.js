

$(function() {
    //锚点跳转滑动效果
    $("a[href*=#],area[href*=#]").click(function() {
      if (
        location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        var $target = $(this.hash);
        $target =
          ($target.length && $target) || $("[name=" + this.hash.slice(1) + "]");
        if ($target.length) {
          var targetOffset = $target.offset().top;
          $("html,body").animate(
            {
              scrollTop: targetOffset - 150
            },
            1000
          );
          return false;
        }
      }
    });
    $("#messageConLi").on("click", "li", function () {
      //留言选项效果
      var massagetext = document.getElementById("massagetext");
      var mText = $(this).text();
      massagetext.value.remove;
      massagetext.value = mText;
  });
  });
  


