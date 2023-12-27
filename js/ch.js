$(document).ready(function () {
  $(".img01").hover(
    function () {
      $(this).attr("src", "images/ch_info_01_on.png");
    },
    function () {
      $(this).attr("src", "images/ch_info_01_off.png");
    }
  );
  $(".img02").hover(
    function () {
      $(this).attr("src", "images/ch_info_02_on.png");
    },
    function () {
      $(this).attr("src", "images/ch_info_02_off.png");
    }
  );
  $(".img03").hover(
    function () {
      $(this).attr("src", "images/ch_info_03_on.png");
    },
    function () {
      $(this).attr("src", "images/ch_info_03_off.png");
    }
  );
  $(".img04").hover(
    function () {
      $(this).attr("src", "images/ch_info_04_on.png");
    },
    function () {
      $(this).attr("src", "images/ch_info_04_off.png");
    }
  );
  $(".img05").hover(
    function () {
      $(this).attr("src", "images/ch_info_05_on.png");
    },
    function () {
      $(this).attr("src", "images/ch_info_05_off.png");
    }
  );
  $(".img06").hover(
    function () {
      $(this).attr("src", "images/ch_info_06_on.png");
    },
    function () {
      $(this).attr("src", "images/ch_info_06_off.png");
    }
  );
});

$(function () {
  $(".img05").click(function () {
    $(".ch05_content").addClass("ch_content_active");
  });
  $(".close2").click(function () {
    $(this).parent().removeClass("ch_content_active");
  });

  $(".img06").click(function () {
    $(this).parent().parent().css("justify-content", "space-between");
    $(this)
      .parent()
      .parent()
      .parent()
      .find(".ch_info_dec03")
      .css("z-index", "-1");
    $(".ch06_content").addClass("ch_content_active");
  });
  $(".close2").click(function () {
    $(this).parent().parent().css("justify-content", "flex-start");
    $(this)
      .parent()
      .parent()
      .parent()
      .parent()
      .find(".ch_info_dec03")
      .css("z-index", "0");
    $(this).parent().removeClass("ch_content_active");
  });
});
