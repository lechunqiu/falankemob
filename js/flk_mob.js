$(function() {
	/*
	 * 首页logo设置高度
	 */
	/*var logoWid=$(".top_logo img").width();
	$(".top_logo img").height(logoWid/8);*/
	/*
	 * banner图片设置高度
	 */
	var bannerWid = $(".swiper-slide img").width();
	$(".swiper-slide img").height(bannerWid * 420 / 720);

	/*
	 * 产品详情banner图片设置高度
	 */
	var subBannerWid = $(".cp_banner img").width();
	$(".cp_banner img").height(subBannerWid * 670 / 720);

	/*
	 * 首页套餐图片设置高度
	 */
	var taoimgowid = $(".tc_left img").width();
	$(".tc_left img").height(taoimgowid * 478 / 357);
	var taoimgtwid = $(".tc_right img").width();
	$(".tc_right img").height(taoimgtwid * 236 / 357);

	/*
	 * 首页案例图片设置高度
	 */
	var alimgWid = $(".anlisl img").width();
	$(".anlisl img").height(parseInt(alimgWid * 450 / 357));

	/*
	 * 首页产品图片设置高度
	 */
	var cpimgWid = $(".chanpin img").width();
	$(".chanpin img").height(cpimgWid * 350 / 357);
	/*
	 * 大小变化
	 */
	$(window).resize(function() {
		/*var logoWid=$(".top_logo img").width();
		$(".top_logo img").height(logoWid/8);*/
		var bannerWid = $(".swiper-slide img").width();
		$(".swiper-slide img").height(bannerWid * 420 / 720);
		var subBannerWid = $(".cp_banner img").width();
		$(".cp_banner img").height(subBannerWid * 670 / 720);
		var taoimgowid = $(".tc_left img").width();
		$(".tc_left img").height(taoimgowid * 478 / 357);
		var taoimgtwid = $(".tc_right img").width();
		$(".tc_right img").height(taoimgtwid * 236 / 357);
		var alimgWid = $(".anlisl img").width();
		$(".anlisl img").height(alimgWid * 450 / 357);
		var cpimgWid = $(".chanpin img").width();
		$(".chanpin img").height(cpimgWid * 350 / 357);

	})

})
/*
 * 首页产品排列
 */
$(function() {
	$(".indexcp_zs .chanpin:even").addClass("left");
	$(".indexcp_zs .chanpin:odd").addClass("right");

})
$(function() {
	$(".index_chanpin .chanpin:even").addClass("left");
	$(".index_chanpin .chanpin:odd").addClass("right");

})

/*
 * 标签特效
 */
$(function() {
	$(".biaoqian ul li").eq(0).find(".bq_img").addClass("bq_imgo");
	$(".biaoqian ul li").eq(1).find(".bq_img").addClass("bq_imgt");
	$(".biaoqian ul li").eq(2).find(".bq_img").addClass("bq_imgs");
	$(".biaoqian ul li").eq(3).find(".bq_img").addClass("bq_imgf");
	$(".biaoqian ul li").eq(4).find(".bq_img").addClass("bq_imgfive");
	$(".biaoqian ul li").click(function() {
		$(this).find(".bq_img").addClass("bq_img_ed");

		$(this).siblings().find(".bq_img").removeClass("bq_img_ed");

		if($(this).index() == 0) {
			$(".biaoqian ul li").eq(1).find(".bq_img").removeClass("bq_imgt_ed");
			$(".biaoqian ul li").eq(2).find(".bq_img").removeClass("bq_imgs_ed");
			$(".biaoqian ul li").eq(3).find(".bq_img").removeClass("bq_imgf_ed");
			$(".biaoqian ul li").eq(4).find(".bq_img").removeClass("bq_imgfive_ed");
		}
		if($(this).index() == 1) {

			$(".biaoqian ul li").eq(0).find(".bq_img").removeClass("bq_imgo_ed");
			$(".biaoqian ul li").eq(2).find(".bq_img").removeClass("bq_imgs_ed");
			$(".biaoqian ul li").eq(3).find(".bq_img").removeClass("bq_imgf_ed");
			$(".biaoqian ul li").eq(4).find(".bq_img").removeClass("bq_imgfive_ed");

		}
		if($(this).index() == 2) {

			$(".biaoqian ul li").eq(0).find(".bq_img").removeClass("bq_imgo_ed");
			$(".biaoqian ul li").eq(1).find(".bq_img").removeClass("bq_imgt_ed");
			$(".biaoqian ul li").eq(3).find(".bq_img").removeClass("bq_imgf_ed");
			$(".biaoqian ul li").eq(4).find(".bq_img").removeClass("bq_imgfive_ed");

		}
		if($(this).index() == 3) {

			$(".biaoqian ul li").eq(0).find(".bq_img").removeClass("bq_imgo_ed");
			$(".biaoqian ul li").eq(1).find(".bq_img").removeClass("bq_imgt_ed");
			$(".biaoqian ul li").eq(2).find(".bq_img").removeClass("bq_imgs_ed");
			$(".biaoqian ul li").eq(4).find(".bq_img").removeClass("bq_imgfive_ed");

		}
		if($(this).index() == 4) {

			$(".biaoqian ul li").eq(0).find(".bq_img").removeClass("bq_imgo_ed");
			$(".biaoqian ul li").eq(2).find(".bq_img").removeClass("bq_imgs_ed");
			$(".biaoqian ul li").eq(1).find(".bq_img").removeClass("bq_imgt_ed");
			$(".biaoqian ul li").eq(3).find(".bq_img").removeClass("bq_imgf_ed");

		}
		$(".biaoqian ul li").eq(0).find(".bq_img_ed").addClass("bq_imgo_ed");
		$(".biaoqian ul li").eq(1).find(".bq_img_ed").addClass("bq_imgt_ed");
		$(".biaoqian ul li").eq(2).find(".bq_img_ed").addClass("bq_imgs_ed");
		$(".biaoqian ul li").eq(3).find(".bq_img_ed").addClass("bq_imgf_ed");
		$(".biaoqian ul li").eq(4).find(".bq_img_ed").addClass("bq_imgfive_ed");
	})

	$(".biaoqian ul li").eq(0).find(".bq_img_ed").addClass("bq_imgo_ed");
	$(".biaoqian ul li").eq(1).find(".bq_img_ed").addClass("bq_imgt_ed");
	$(".biaoqian ul li").eq(2).find(".bq_img_ed").addClass("bq_imgs_ed");
	$(".biaoqian ul li").eq(3).find(".bq_img_ed").addClass("bq_imgf_ed");
	$(".biaoqian ul li").eq(4).find(".bq_img_ed").addClass("bq_imgfive_ed");

})

/*
 * 导航菜单点击显示
 */
$(function() {
	jQuery.showMenu = function(menubt, menubox, evt) {

		var menubt = $(menubt);
		var menubox = $(menubox);

		menubt.on(evt, function(e) {

			if(menubox.is(":hidden")) {
				menubox.fadeIn(1000).siblings().hide();
			} else {
				menubox.fadeOut(1000);
			}

			$(document).one(evt, function() {
				menubox.fadeOut(1000);
			});

			e.stopPropagation();

		});

		menubox.on(evt, function(e) {
			e.stopPropagation();
		});

	}

	$.showMenu(".top_icon a.nav_menu", ".nav", "click");
})

/*
 * 滚动触发的特效
 */
$(function() {
	/*
	 * 显示返回顶端按钮
	 */
	$(".back_top").hide();

	$(window).scroll(function() {
		backTop();
		topHide();

	})

	function backTop() {
		var scrollTop = $(this).scrollTop();
		if(scrollTop > 500) {
			$(".back_top").fadeIn(1000);

		} else {
			$(".back_top").fadeOut(1000);
		}
	}

	function topHide() {
		var scrollTop = $(this).scrollTop();
		if(scrollTop > 10) {
			$(".cpxq_top").fadeOut(500);
		} else {
			$(".cpxq_top").fadeIn(500);
		}
	}

	/*
	 * 返回顶端
	 */

	$(".back_top .back").click(function() {
		$("html,body").animate({
			scrollTop: "0px"
		}, 800)

	})

})
/*
 * 产品详情概述
 */
$(function() {
	var gscsAH = $(".gscs_fenlei ul li a").height();
	var gscsLIh = $(".gscs_fenlei ul li").height();
	var liac = gscsLIh - gscsAH;
	var margtop = liac / 2;
	$(".gscs_fenlei ul li a").css({
		"margin-top": margtop
	})
})
/*
 * 产品详情概述参数切换
 */
$(function() {
	$(".canshu").hide();
	$(".gscs_fenlei ul li").eq(0).click(function() {
		$(this).addClass("gscs_ed").siblings().removeClass("gscs_ed");
		$(".gaishu").show();
		$(".canshu").hide();
	})
	$(".gscs_fenlei ul li").eq(1).click(function() {
		$(this).addClass("gscs_ed").siblings().removeClass("gscs_ed");
		$(".canshu").show();
		$(".gaishu").hide();
	})
})
/*
 * 购物数量加减
 */
$(function() {

	$(".paynum p").css({
		"position": "absolute",
		"top": "-10px",
		"left": "-100%",
		"width": "100%",
		"color": "red",
		"font-size": "14px"
	})
	$(".paynum p").hide();
	$(".paynum span.spjian").click(function() {
		var paynum = $(this).siblings("div").children("input").val();
		if(paynum >= 2) {
			paynum--;
			$(this).siblings("div").children("input").val(paynum);
		} else {
			$(this).siblings("p").show();
		}
	})
	$(".paynum span.spjia").click(function() {
		var paynum = $(this).siblings("div").children("input").val();
		paynum++;
		$(this).siblings("div").children("input").val(paynum);
		$(this).siblings("p").hide();
	})

	$(".paynum div input").bind('input propertychange', function() {
		var paynum = $(this).siblings("div").children("input").val();
		/*		var danjia=$(this).parents(".spfldiv").siblings(".danjia").text();
					danjia=parseInt(danjia);
				$(this).parents(".spfldiv").siblings(".spgwxj").children("p").find("b").text();*/
		if(paynum != 0) {
			$(this).parent("div").siblings("p").hide();
		}

	});
	$(".paynum div input").blur(function() {
		if($(this).val() == "") {
			$(this).val(1)
		}
	})

})
/*
 * 加入购物车款式颜色切换
 */
$(function() {
	$(".kx_list li").eq(0).addClass("kx_list_ed");
	$(".kx_list li").click(function() {
		$(this).addClass("kx_list_ed")
			.siblings().removeClass("kx_list_ed");
	})
	$(".yanse_list li").eq(0).addClass("yanse_ed");
	$(".yanse_list li").click(function() {
		$(this).addClass("yanse_ed")
			.siblings().removeClass("yanse_ed");
	})
})
/*
 * 加入购物车
 */
$(function() {
	$(".black_bg").hide();
	$(".jrgw_position").hide();
	$(".jrgwc").click(function() {
		$(".black_bg").show();
		$(".jrgw_position").show();
	})
	$(".black_bg").click(function() {
		$(".black_bg").hide();
		$(".jrgw_position").hide();
	})
	$(".jrgwc_close").click(function() {
		$(".black_bg").hide();
		$(".jrgw_position").hide();
	})
})
/*
 * 分享
 */
$(function() {
	$(".cp_fengxiang").click(function() {
		$(".black_bg").show();
		$(".fengxiang").show();
	})
	$(".black_bg").click(function() {
		$(".black_bg").hide();
		$(".fengxiang").hide();
	})
	$(".fx_close").click(function() {
		$(".black_bg").hide();
		$(".fengxiang").hide();
	})
})
/*
 * 案例展示
 */
$(function() {
	var albgimgWid = $(".albig_img").width();
	$(".albig_img").height(albgimgWid * 470 / 672);
	$(window).resize(function() {
		var albgimgWid = $(".albig_img").width();
		$(".albig_img").height(albgimgWid * 470 / 672);
	})
})
$(function() {
	var tczsimgWid = $(".tczs_img").width();
	$(".tczs_img").height(tczsimgWid * 21 / 36);
	$(window).resize(function() {
		var tczsimgWid = $(".tczs_img").width();
		$(".tczs_img").height(tczsimgWid * 21 / 36);
	})
})
/*
 * 全屋定制
 */
$(function() {
	var dzimgWid = $(".qwdz_img img").width();
	$(".qwdz_img img").height(dzimgWid * 456 / 672);
	var dzsmallimgW = $(".xgjj a img").width();
	$(".xgjj a img").height(dzsmallimgW);
	$(".xgjbjj").height($(".xgjj a img").height());
	$(".xgjbjj img").height($(".xgjbjj img").width() * 38 / 32);
	var jbjjIconH = $(".xgjbjj img").height();
	var jbjjCha = $(".xgjbjj").height() - jbjjIconH;
	var jbIocnMT = jbjjCha / 2;
	$(".xgjbjj img").css("margin-top", jbIocnMT);
	var jbjjPh = $(".xgjbjj p").height();
	var jbjjPCha = $(".xgjbjj").height() - jbjjPh;
	$(".xgjbjj p").css("margin-top", jbjjPCha / 2);
	$(window).resize(function() {
		var dzimgWid = $(".qwdz_img img").width();
		$(".qwdz_img img").height(dzimgWid * 456 / 672);
		var dzsmallimgW = $(".xgjj a img").width();
		$(".xgjj a img").height(dzsmallimgW);
		$(".xgjbjj").height($(".xgjj a img").height());
		$(".xgjbjj img").height($(".xgjbjj img").width() * 38 / 32);
		var jbjjIconH = $(".xgjbjj img").height();
		var jbjjCha = $(".xgjbjj").height() - jbjjIconH;
		var jbIocnMT = jbjjCha / 2;
		$(".xgjbjj img").css("margin-top", jbIocnMT);
		var jbjjPh = $(".xgjbjj p").height();
		var jbjjPCha = $(".xgjbjj").height() - jbjjPh;
		$(".xgjbjj p").css("margin-top", jbjjPCha / 2);
	})
})
$(function() {
	$(".sppz_list li:even").addClass("sppz_bg");
})
$(function() {
	var czimgWid = $(".caizhi img").width();
	$(".caizhi img").height(czimgWid * 208 / 176);
	$(window).resize(function() {
		var czimgWid = $(".caizhi img").width();
		$(".caizhi img").height(czimgWid * 208 / 176);
	})
	$(".caizhi_box .caizhi:odd").css("float", "right");
})
/*
 * 返回上一页
 */
$(function() {

	$(".top_back a").click(function() {
		history.back(-1);
		return false;
	})

	$(".back_prev").click(function() {
		history.back(-1);
		return false;
	})

})

/*
 * 购物车
 */
$(function() {
	$(".gwxz_icon").addClass("gwxz_ed");
	$(".gwxz_icon a").toggle(function() {
		$(this).parent(".gwxz_icon").removeClass("gwxz_ed");
	}, function() {

		$(this).parent(".gwxz_icon").addClass("gwxz_ed");
	})
})
$(function() {
	$(".xzcon p").addClass("mrdz");
	$(".xzcon a").toggle(function() {
		$(this).siblings("p").removeClass("mrdz");
	}, function() {
		$(this).siblings("p").addClass("mrdz");
	})
})
$(function() {
	$(".zffsxz .zffs:first-child p").addClass("zffs_ed");
	$(".zffs a").click(function() {
		$(this).siblings("p").addClass("zffs_ed");
		$(this).parent(".zffs").siblings().find("p").removeClass("zffs_ed");
	})
})
$(function() {
	$(".zffsxz .zffs").eq(0).show().siblings().hide();
	$(".zfqtfs p").addClass("zffs_xx");
	$(".zfqtfs a").toggle(function() {
			$(this).siblings().removeClass("zffs_xx");
			$(".zffsxz .zffs").show();
		}, function() {
			$(this).siblings().addClass("zffs_xx");
			$(".zffsxz .zffs").eq(0).show().siblings().hide();
		}

	)
})

$(function() {
	$(".psfsxz_top").addClass("psfs_sh");
	$(".psfsxz_bottom").hide();
	/*$(".psfsxz_top").toggle(
		function() {
			$(this).removeClass("psfs_sh");
			$(this).siblings(".psfsxz_bottom").show();
		},
		function() {
			$(this).addClass("psfs_sh");
			$(this).siblings(".psfsxz_bottom").hide();
		}
	)*/
	$(".psfsxz_top").click(function() {
		if($(this).siblings(".psfsxz_bottom").is(":hidden")) {
			$(this).siblings(".psfsxz_bottom").show();
			$(this).removeClass("psfs_sh");
		} else {
			$(this).siblings(".psfsxz_bottom").hide();
			$(this).addClass("psfs_sh");
		}
	})

	$(".shsj_list li:first-child").addClass("shsj_ed");

	$("#shsj li").click(function() {
		$(this).addClass("shsj_ed").siblings().removeClass("shsj_ed");
		$(this).parents(".psfsxz_bottom")
			.siblings(".psfsxz_top")
			.find("span").text($(this).find("a").text());
	})

	$("#fplx li").click(function() {
		$(this).addClass("shsj_ed").siblings().removeClass("shsj_ed");
		$(this).parents(".psfsxz_bottom")
			.siblings(".psfsxz_top")
			.find("p").text($(this).find("a").text());
	})

	$("#srdwmc").hide();
	$("#fptt li").click(function() {
		$(this).addClass("shsj_ed").siblings().removeClass("shsj_ed");
		$(this).parents(".psfsxz_bottom")
			.siblings(".psfsxz_top")
			.find("span").text($(this).find("a").text());
		if($(this).index() == 1) {
			$("#srdwmc").show();
		} else {
			$("#srdwmc").hide();
		}

	})
	$(".fpdwmc input[type='submit']").click(function() {

		$(this).parents(".psfsxz_bottom").hide();

		$(this).parents(".psfsxz_bottom")
			.siblings(".psfsxz_top")
			.addClass("psfs_sh");

	})

})
/*
 * 我的
 */
$(function() {
	var minetopbaWid = $(".mine_top_bg img").width();
	$(".mine_top_bg img").height(minetopbaWid * 5 / 18)
	$(".mine_top_bg").height($(".mine_top_bg img").height());
	$(".mine_top_zg").height($(".mine_top_bg img").height());

	$(window).resize(function() {
		var minetopbaWid = $(".mine_top_bg img").width();
		$(".mine_top_bg img").height(minetopbaWid * 5 / 18)
		$(".mine_top_bg").height($(".mine_top_bg img").height());
		$(".mine_top_zg").height($(".mine_top_bg img").height());
	})

})
$(function() {
	$(".fwlx").show();
	$("#shsqyy li").click(function() {
		$(this).addClass("shsj_ed").siblings().removeClass("shsj_ed");
		$(this).parents(".psfsxz_bottom")
			.siblings(".psfsxz_top")
			.find("span").text($(this).find("a").text());
		$(this).parents(".psfsxz_bottom").hide()
			.siblings(".psfsxz_top").addClass("psfs_sh");
	})

	$("#sqfflx li").click(function() {
		$(this).addClass("shsj_ed").siblings().removeClass("shsj_ed");
	})

	$(".wtms_top").removeClass("psfs_sh");
})

/*
 * 服务中心
 */
$(function() {
	$(".fuwu_xsgd").addClass("fuwu_xsgd_sh");
	$(".fuwu_xsgd p").text("显示更多服务");
	var $gdfw = $(".fuwuzx_icon_list li:gt(3)");
	$gdfw.hide();
	$(".fuwu_xsgd").toggle(
		function() {
			$gdfw.show();
			$(".fuwu_xsgd").removeClass("fuwu_xsgd_sh");
			$(".fuwu_xsgd p").text("收回更多");
		},
		function() {
			$gdfw.hide();
			$(".fuwu_xsgd").addClass("fuwu_xsgd_sh");
			$(".fuwu_xsgd p").text("显示更多服务");
		}
	)

})
$(function() {
	$(".bzzx_list li:eq(0)").addClass("bzzx_list_ed");
	$(".bzzwt_fl li").eq(0).show().siblings().hide();
	$(".bzzx_list li").click(function() {
		$(this).addClass("bzzx_list_ed")
			.siblings().removeClass("bzzx_list_ed");
		$(".bzzwt_fl li").eq($(this).index()).show().siblings().hide();
	})
})
/*
 * 体验馆
 */
$(function() {
	var tygimgWid = $(".tyg_img img").width();
	$(".tyg_img img").height(tygimgWid * 166 / 236);
	$(window).resize(function() {
		var tygimgWid = $(".tyg_img img").width();
		$(".tyg_img img").height(tygimgWid * 166 / 236);
	})
})
/*
 * 招商加盟
 */
$(function() {
	var zsjmysWid = $(".zsjm_yousi").width();
	$(".zsjm_yousi").height(zsjmysWid * 10 / 18);
	$(window).resize(function() {
		var zsjmysWid = $(".zsjm_yousi").width();
		$(".zsjm_yousi").height(zsjmysWid * 10 / 18);
	})

})
/*
 * 全屋定制详情流程
 */
$(function() {

	$(".qedzxq_fl ul li a").click(function() {
		$(this).parent("li").addClass("qedzxq_fl_ed").siblings().removeClass("qedzxq_fl_ed");
		var qwxqJump = this.title;
		var qwxqJumpId = "#" + "qedzxq_" + qwxqJump;
		$("html,body").animate({
			scrollTop: $(qwxqJumpId).offset().top - 80
		})

	})
})
/*
 * 专车预约表单
 */
$(function() {
	$(".zcfubdxm ul li a").click(function() {
		$(this).parent("li").addClass("zcfwbd_xb_ed").siblings().removeClass()
	})
})
$(function() {
	$(".zcyy_dqcs p a").click(function() {
		$(this).parent().siblings().show();
	})
	$(".zcyy_dqcs ul li").click(function() {

		$(this).parent().siblings("p").find("span").text($(this).text());
		$(this).parent().hide()

	})

})
/*
 * 隐藏版权
 */
$(function() {
	$(".dl_bottom").hide()
})
/*
 * 我的预约banner
 */
$(function() {
	var myyyImgWid = $(".myyy_img img").width();
	$(".myyy_img img").height(myyyImgWid * 264 / 640);
	$(window).resize(function() {
		var myyyImgWid = $(".myyy_img img").width();
		$(".myyy_img img").height(myyyImgWid * 264 / 640);
	})

})

/*
 * 产品分类
 */
$(function() {
	var gcpflH = $('.gcpfl').height();
	$('.gcpfl_box').height(gcpflH - 120);
	$('.gcpfl ul li').click(function() {
		$(this).addClass('gcpfl_on').siblings().removeClass('gcpfl_on')
	})
})