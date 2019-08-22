 
var hubCommon = function ($) {
    var hubCommon = {},
        loaded = !0;
    return $.fn.extend({
        dataTrans: function (a, b) {
            return a = a ? a : "#", b = b ? b : "trans", $(this).data(b).split(a)
        }
    }), hubCommon.init = function () {
        $(function () {
            $(".hub-user-fleximages").flexImages({
                rowHeight: 200,
                container: ".item",
                object: "img"
            })
        }), $(function () {
            localStorage.policyOk ? $(".policy-info").hide() : ($(".policy-info").show(), $(".policy-ok").on("click", function () {
                localStorage.policyOk = 1, $(".policy-info").hide()
            }))
        }), $(function () {
            $(".hub-fleximagesrelated .item").length && $(".hub-fleximagesrelated").flexImages({
                rowHeight: 125,
                container: ".item",
                object: "img",
                maxRows: 1
            })
        }), $(".hub-hotrelated .item img").lazyload({
            effect: "fadeIn",
            threshold: 500
        }), $(function () {
            $(".removetag").on("click", function () {
                var a = $(this).parent();
                bootbox.confirm({
                    size: "small",
                    message: "Are you sure?",
                    callback: function (b) {
                        b && a.remove()
                    }
                })
            })
        }), $(function () {
            $(".downloadOriginal, .downloadfreeitem li a").on("click", function () {
                var a, b, c;
                return hubCommon.checkAndLogin() ? hubCommon.checkEmailVerified() ? (a = $(this).html(), b = /^\d{3,4}x\d{3,4}$/, c = "/get/" + $("#photo_id").val(), b.test(a) || (a = ""), $("#hub-downloadTip").hide(), $("#hub-followTip").show(), window.location.href = c + (a ? "?size=" + a : ""), void 0) : !1 : !1
            })
        }), $(function () {
            $(".closeLayout").on("click", function () {
                $(".hub-backgroundlayout").hide()
            })
        }), $(function () {
            $("#comment-content").on("focus", function () {
                $("#comment-btn").show()
            })
        }), $(function () {
            var a = hubCommon.getQueryString("order"),
                b = hubCommon.getQueryString("direction"),
                c = hubCommon.getQueryString("min_width"),
                d = hubCommon.getQueryString("min_height"),
                e = hubCommon.getQueryString("color");
            (a || b || c || d || e) && $(".clearfilters").show()
        }), $(function () {
            $(document).on("click", ".ajax-follow", function () {
                var c, d, e, f, a = $(this),
                    b = a.data("id");
                return hubCommon.checkAndLogin() && Config.user_id != b ? (c = a.data("status"), d = a.dataTrans(), e = a.data("no-icon") ? "" : '<i class="iconfont follow-icon"></i>', f = a.data("no-text") ? "" : d[c ? 0 : 1], $.ajax({
                    url: Config.routes.follow + "?follow=" + b + (c ? "&action=unfollow" : ""),
                    async: !0,
                    dataType: "json",
                    success: function (b) {
                        200 == b.code ? (c ? a.removeClass("hub-btnwarning") : a.addClass("hub-btnwarning"), a.html(e + f), a.data("status", !c)) : hubCommon.notice(b.msg)
                    }
                }), void 0) : !1
            })
        }), $(function () {
            $("#captcha-float").on("focus", function () {
                var a = $("#captcha-float-delay");
                a.is(":hidden") && (a.attr("src", a.data("src")), a.show())
            }), $("#re-verify-captcha-float").on("focus", function () {
                var a = $("#re-verify-captcha-float-delay");
                a.is(":hidden") && (a.attr("src", a.data("src")), a.show())
            })
        }), $(function () {
            $(document).on("click", ".ajax-like", function () {
                var a, b, c;
                return hubCommon.checkAndLogin() ? (a = Config.routes.like, b = $(this), c = b.data("id"), $.ajax({
                    url: a,
                    method: "post",
                    data: "id=" + c,
                    async: !0,
                    dataType: "json",
                    success: function (a) {
                        200 == a.code ? (b.find("em").html(a.data.likes), b.hasClass("hub-btnwarning") ? b.removeClass("hub-btnwarning") : b.addClass("hub-btnwarning")) : hubCommon.notice(a.msg)
                    }
                }), void 0) : !1
            })
        }), $(function () {
            $(".ajax-comment-good").on("click", function () {
                hubCommon.ajaxComment(1)
            }), $(".ajax-comment-bad").on("click", function () {
                hubCommon.ajaxComment(2)
            })
        }), $(function () {
            $(".ajax-comment-all").on("click", function () {
                var a = $(this).attr("data-href");
                $.getJSON(a, {}, function (a) {
                    a.data && $(".hub-commentlist").html(a.data)
                })
            })
        }), $(function () {
            $(document).on("click", ".translate", function () {
                var b, c, a = "en";
                return Config && Config.lang && (a = Config.lang), "zh" == a && (a = "zh-CN"), b = $(this).parent().parent().find(".discuss-contentmain").text(), c = "https://translate.google.com/#auto|" + a + "|" + encodeURIComponent(b.substring(0, 999)), hubCommon.wopen(c, 800, 500, "translate")
            })
        }), $(function () {
            $(".share-icons span").on("click", function () {
                var a = $(this).data("url"),
                    b = $(this).attr("title");
                hubCommon.wopen(a, 800, 500, b)
            })
        }), $(function () {
            var b, c, d;
            $(window).scrollTop(), "0" != $(window).scrollTop() && $(".backtotop").fadeIn("slow"), b = $(".backtotop"), c = $(".hub-index-header"), d = "hub-index-hover", $(window).scroll(function () {
                "0" == $(window).scrollTop() ? $(b).fadeOut("slow") : $(b).fadeIn("slow"), $(window).scrollTop() > 200 ? c.removeClass(d) : c.addClass(d)
            }), $(".backtotop").click(function () {
                $("html, body").animate({
                    scrollTop: 0
                }, "slow")
            })
        }), $(function () {
            $(".js-show-register-buttons").on("click", function () {
                $(".modal-signin").addClass("hide"), $(".modal-signup").removeClass("hide")
            }), $(".js-show-login-buttons").on("click", function () {
                $(".modal-signin").removeClass("hide"), $(".modal-signup").addClass("hide")
            }), $(".captcha").on("click", function () {
                $(this).attr("src", $(this).attr("src") + "?n=" + Math.random())
            })
        }), $(function () {
            $(".js-show-favoriteform").on("click", function () {
                $(".favorite-content").addClass("hide"), $(".favorite-form").removeClass("hide")
            }), $(".js-show-favoritecofavoriteform").on("click", function () {
                return $(".favorite-content").removeClass("hide"), $(".favorite-form").addClass("hide"), !1
            })
        }), $(function () {
            $(".js-narrow-search").on("click", function () {
                $(this).toggleClass("js-close-box"), $(".hub-topsearch").toggle("slow")
            })
        }), $(function () {
            $(".ajax-editTags").on("click", function () {
                return hubCommon.checkAndLogin() ? ($("#editTagsForm").modal("show"), void 0) : !1
            })
        }), $(function () {
            $(".ajax-translateDescription").on("click", function () {
                return hubCommon.checkAndLogin() ? ($("#translateDescriptionForm").modal("show"), void 0) : !1
            })
        }), $(function () {
            $(document).on("click", ".ajax-collection", function () {
                var a = $(this).data("id");
                $(".favorite-content input[name=image_id]").val(a), hubCommon.ajaxCollection()
            })
        }), $(function () {
            $(document).on("click", ".ajax-collectionEdit", function () {
                if (!hubCommon.checkAndLogin()) return !1;
                $("#favoriteFormEdit").modal("show");
                var a = $(this).data("id");
                $(".favorite-formedit input[name=collection_id]").val(a), $.getJSON(Config.routes.collection, {
                    collection_id: a
                }, function (a) {
                    a && ($(".favorite-formedit input[name=title]").val(a.data.title), $(".favorite-formedit textarea[name=description]").val(a.data.description))
                })
            })
        }), $(function () {
            $(".js-create-collection").on("click", function () {
                $(".favorite-form").ajaxForm({
                    success: function (a) {
                        200 != a.code ? hubCommon.notice(a.msg) : (hubCommon.ajaxCollection(), $(".favorite-content").removeClass("hide"), $(".favorite-form").addClass("hide"), $(".favorite-form input, .favorite-form textarea").val(""))
                    }
                })
            })
        }), $(function () {
            $(".avatareditor-tip").on("click", function () {
                return $(".avatarbtn").click()
            }), $(".avatarbtn").change(function () {
                var a = {
                    success: function (a) {
                        var b = $(".avatareditor img");
                        b.attr("src", a.data), b.attr("srcset", a.data)
                    }, error: function () {
                        hubCommon.notice("error")
                    }
                };
                return $(".avatarform").ajaxSubmit(a)
            })
        }), $(function () {
            var a = function () {
                var a = $(this).data("detail");
                a && $.ajax({
                    method: "get",
                    url: Config.routes.quality_voting + "?id=" + qualityId + "&" + a,
                    dataType: "json",
                    success: function (a) {
                        var b, c, d, e;
                        if (200 == a.code)
                            if (b = a.data, b.new) {
                                c = "";
                                for (t in b.tags) d = b.tags[t], c += '<li><a href="javascript:;" title="' + d + '">' + d + "</a></li>";
                                $(".hub-tags").html(c), e = $(".hub-photomodal img"), e.attr("src", b.url), e.attr("srcset", b.url), e.data("src", b.url), qualityId = b.id, hubCommon.notice(a.msg)
                            } else window.location.reload();
                        else hubCommon.notice(a.msg)
                    }
                })
            };
            $(".quality-rating button").on("click", a), $(".rating-tip a").on("click", a)
        }), $(function () {
            $(document).on("click", ".itemAdmin-action a", function () {
                var a = $(this).data("href"),
                    b = $(this).attr("title");
                bootbox.confirm({
                    message: b + "?",
                    size: "small",
                    callback: function (b) {
                        b && $.getJSON(a, function (a) {
                            return 200 != a.code ? !1 : (hubCommon.notice(a.msg), void 0)
                        })
                    }
                })
            })
        }), $(function () {
            $(document).on("click", ".verify-action a", function () {
                var a = $(this).data("href"),
                    b = $(this).attr("title");
                bootbox.confirm({
                    message: b + "?",
                    size: "small",
                    callback: function (b) {
                        b && $.getJSON(a, function (a) {
                            hubCommon.notice(a.msg)
                        })
                    }
                })
            })
        }), $(function () {
            $(".ajax-deletemessage").on("click", function () {
                var a = $(this);
                $.ajax({
                    url: Config.routes.pmd,
                    method: "post",
                    data: "id=" + a.data("id"),
                    async: !0,
                    dataType: "json",
                    success: function (b) {
                        if (200 == b.code) {
                            var c = a.parent().parent().parent();
                            c.fadeOut("normal", function () {
                                c.remove()
                            })
                        } else hubCommon.notice(b.msg)
                    }
                })
            })
        }), $("[data-toggle=tooltip]").tooltip(), $(function () {
            $(".ajaxFormData").ajaxForm({
                success: function (a) {
                    var b = $(".ajaxFormData").parent().parent().parent().parent();
                    b.modal("hide"), hubCommon.notice(a.msg)
                }
            })
        }), $(function () {
            $(".pm-trigger").on("click", function () {
                var a, b, c, d;
                return hubCommon.checkAndLogin() ? ($("#privateMessage").modal("show"), a = $(this).data("id"), b = $(this).data("rid"), c = $(this).data("to"), d = $("#private-message-to"), $("#private-message-id").val(a), $("#private-message-rid").val(b), d.html(d.data("tpl").replace(/__TO__/, c)), void 0) : !1
            })
        }), $(function () {
            $(".subscribe-btn").on("click", function () {
                return hubCommon.checkAndLogin() ? ($.ajax({
                    url: Config.routes.subscribe,
                    method: "post",
                    async: !0,
                    dataType: "json",
                    success: function (a) {
                        hubCommon.notice(a.msg)
                    }
                }), void 0) : !1
            })
        }), $(function () {
            $(".favorite-form").validate({
                errorElement: "span",
                errorClass: "help-block",
                focusInvalid: !0,
                rules: {
                    title: {
                        required: !0
                    }
                },
                messages: {
                    title: {
                        required: hubCommon.translateLang("favorite.title")
                    }
                },
                invalidHandler: function () {}, highlight: function (a) {
                    $(a).closest(".form-group").addClass("has-error")
                }, success: function (a) {
                    a.closest(".form-group").removeClass("has-error"), a.remove()
                }, errorPlacement: function (a, b) {
                    a.insertAfter(b.closest(".form-control"))
                }
            }), $(".newsletter-form").validate({
                errorElement: "span",
                errorClass: "help-block",
                focusInvalid: !0,
                rules: {
                    email: {
                        required: !0,
                        email: !0
                    }
                },
                messages: {
                    email: {
                        required: hubCommon.translateLang("user.sinupEmail"),
                        email: hubCommon.translateLang("user.loginEmailRequired")
                    }
                },
                invalidHandler: function () {}, highlight: function (a) {
                    $(a).closest(".form-group").addClass("has-error")
                }, success: function (a) {
                    a.closest(".form-group").removeClass("has-error"), a.remove()
                }, errorPlacement: function (a, b) {
                    a.insertAfter(b.closest(".form-control"))
                }
            }), $(".report-form").validate({
                errorElement: "span",
                errorClass: "help-block",
                focusInvalid: !0,
                rules: {
                    email: {
                        required: !0,
                        email: !0
                    },
                    content: {
                        required: !0
                    },
                    captcha: {
                        required: !0
                    }
                },
                messages: {
                    email: {
                        required: hubCommon.translateLang("user.login"),
                        email: hubCommon.translateLang("user.loginEmailRequired")
                    },
                    content: {
                        required: hubCommon.translateLang("user.pmContentRequired")
                    },
                    captcha: {
                        required: hubCommon.translateLang("user.sinupCaptcha")
                    }
                },
                invalidHandler: function () {}, highlight: function (a) {
                    $(a).closest(".form-group").addClass("has-error")
                }, success: function (a) {
                    a.closest(".form-group").removeClass("has-error"), a.remove()
                }, errorPlacement: function (a, b) {
                    a.insertAfter(b.closest(".form-control"))
                }, submitHandler: function (a) {
                    $.ajax({
                        url: Config.routes.report,
                        method: "post",
                        data: "image_id=" + $(a.image_id).val() + "&email=" + $(a.email).val() + "&type=" + $(a.type).val() + "&content=" + encodeURI($(a.content).val()) + "&captcha=" + $("#re-verify-captcha-float").val(),
                        async: !0,
                        dataType: "json",
                        success: function (b) {
                            200 == b.code ? ($("#reportForm").modal("hide"), $(a.email).val(""), $(a.content).val(""), $("#re-verify-captcha-float").val(""), hubCommon.notice(b.msg)) : (hubCommon.notice(b.msg), $("#re-verify-captcha-float-delay").attr("src", Config.routes.captcha + "?" + (new Date).getTime()))
                        }
                    })
                }
            }), $(".signin-form").validate({
                errorElement: "span",
                errorClass: "help-block",
                focusInvalid: !0,
                rules: {
                    email: {
                        required: !0,
                        email: !0
                    },
                    password: {
                        required: !0,
                        minlength: 6,
                        maxlength: 20
                    }
                },
                messages: {
                    email: {
                        required: hubCommon.translateLang("user.login"),
                        email: hubCommon.translateLang("user.loginEmailRequired")
                    },
                    password: {
                        required: hubCommon.translateLang("user.loginPassword"),
                        minlength: hubCommon.translateLang("user.loginPasswordMin"),
                        maxlength: hubCommon.translateLang("user.loginPasswordMax")
                    }
                },
                invalidHandler: function () {}, highlight: function (a) {
                    $(a).closest(".form-group").addClass("has-error")
                }, success: function (a) {
                    a.closest(".form-group").removeClass("has-error"), a.remove()
                }, errorPlacement: function (a, b) {
                    a.insertAfter(b.closest(".form-control"))
                }
            }), $(".signup-form").validate({
                errorElement: "span",
                errorClass: "help-block",
                focusInvalid: !0,
                rules: {
                    username: {
                        required: !0
                    },
                    email: {
                        required: !0,
                        email: !0
                    },
                    password: {
                        required: !0,
                        minlength: 6,
                        maxlength: 20
                    },
                    captcha: {
                        required: !0
                    }
                },
                messages: {
                    username: {
                        required: hubCommon.translateLang("user.sinup")
                    },
                    email: {
                        required: hubCommon.translateLang("user.sinupEmail"),
                        email: hubCommon.translateLang("user.loginEmailRequired")
                    },
                    password: {
                        required: hubCommon.translateLang("user.loginPassword"),
                        minlength: hubCommon.translateLang("user.loginPasswordMin"),
                        maxlength: hubCommon.translateLang("user.loginPasswordMax")
                    },
                    repeatpassword: {
                        required: hubCommon.translateLang("user.loginPassword"),
                        minlength: hubCommon.translateLang("user.loginPasswordMin"),
                        maxlength: hubCommon.translateLang("user.loginPasswordMax")
                    },
                    captcha: {
                        required: hubCommon.translateLang("user.sinupCaptcha")
                    }
                },
                invalidHandler: function () {}, highlight: function (a) {
                    $(a).closest(".form-group").addClass("has-error")
                }, success: function (a) {
                    a.closest(".form-group").removeClass("has-error"), a.remove()
                }, errorPlacement: function (a, b) {
                    a.insertAfter(b.closest(".form-control"))
                }
            }), $(".forget-form").validate({
                errorElement: "span",
                errorClass: "help-block",
                focusInvalid: !0,
                rules: {
                    email: {
                        required: !0,
                        email: !0
                    },
                    newpassword: {
                        required: !0,
                        minlength: 6,
                        maxlength: 20
                    },
                    captcha: {
                        required: !0
                    }
                },
                messages: {
                    email: {
                        required: hubCommon.translateLang("user.login"),
                        email: hubCommon.translateLang("user.loginEmailRequired")
                    },
                    captcha: {
                        required: hubCommon.translateLang("user.sinupCaptcha")
                    }
                },
                invalidHandler: function () {}, highlight: function (a) {
                    $(a).closest(".form-group").addClass("has-error")
                }, success: function (a) {
                    a.closest(".form-group").removeClass("has-error"), a.remove()
                }, errorPlacement: function (a, b) {
                    a.insertAfter(b.closest(".form-control"))
                }, submitHandler: function () {
                    $.ajax({
                        url: Config.routes.forget,
                        method: "post",
                        data: "email=" + $("#email-float").val() + "&captcha=" + $("#captcha-float").val(),
                        async: !0,
                        dataType: "json",
                        success: function (a) {
                            200 == a.code ? ($("#forgetPassword").modal("hide"), $("#email-float").val(""), $("#captcha-float").val(""), hubCommon.notice(a.msg)) : (hubCommon.notice(a.msg), $("#captcha-float-delay").attr("src", Config.routes.captcha + "?" + (new Date).getTime()))
                        }
                    })
                }
            }), $(".re-verify-form").validate({
                errorElement: "span",
                errorClass: "help-block",
                focusInvalid: !0,
                rules: {
                    email: {
                        required: !0,
                        email: !0
                    },
                    newpassword: {
                        required: !0,
                        minlength: 6,
                        maxlength: 20
                    },
                    captcha: {
                        required: !0
                    }
                },
                messages: {
                    email: {
                        required: hubCommon.translateLang("user.login"),
                        email: hubCommon.translateLang("user.loginEmailRequired")
                    },
                    captcha: {
                        required: hubCommon.translateLang("user.sinupCaptcha")
                    }
                },
                invalidHandler: function () {}, highlight: function (a) {
                    $(a).closest(".form-group").addClass("has-error")
                }, success: function (a) {
                    a.closest(".form-group").removeClass("has-error"), a.remove()
                }, errorPlacement: function (a, b) {
                    a.insertAfter(b.closest(".form-control"))
                }, submitHandler: function () {
                    $.ajax({
                        url: Config.routes.re_verify,
                        method: "post",
                        data: "email=" + $("#re-verify-email-float").val() + "&captcha=" + $("#re-verify-captcha-float").val(),
                        async: !0,
                        dataType: "json",
                        success: function (a) {
                            200 == a.code ? ($("#re-verify").modal("hide"), $("#re-verify-email-float").val(""), $("#re-verify-captcha-float").val(""), hubCommon.notice(a.msg)) : hubCommon.notice(a.msg)
                        }
                    })
                }
            }), $(".private-message-form").validate({
                errorElement: "span",
                errorClass: "help-block",
                focusInvalid: !0,
                rules: {
                    content: {
                        required: !0,
                        maxlength: 1e3
                    }
                },
                messages: {
                    content: {
                        required: hubCommon.translateLang("user.pmContentRequired")
                    }
                },
                invalidHandler: function () {}, highlight: function (a) {
                    $(a).closest(".form-group").addClass("has-error")
                }, success: function (a) {
                    a.closest(".form-group").removeClass("has-error"), a.remove()
                }, errorPlacement: function (a, b) {
                    a.insertAfter(b.closest(".form-control"))
                }, submitHandler: function (a) {
                    $.ajax({
                        url: Config.routes.pm,
                        method: "post",
                        data: "id=" + $(a.id).val() + "&content=" + encodeURI($(a.content).val()) + "&rid=" + $(a.rid).val(),
                        async: !0,
                        dataType: "json",
                        success: function (a) {
                            200 == a.code ? ($("#privateMessage").modal("hide"), $("#privateMessage textarea.form-control").val(""), hubCommon.notice(a.msg)) : hubCommon.notice(a.msg)
                        }
                    })
                }
            })
        });
        var a = $(".hub-loadphoto");
        a.length && ($(window).on("scroll", hubCommon.checkIfNearBottom), hubCommon.restoreState()), $(window).on("beforeunload", hubCommon.saveScrollPosition)
    }, hubCommon.hs = {
        make: function (a, b) {
            return {
                url: a,
                title: b
            }
        }, back: function (a, b) {
            w = this.window();
            var c = window.history;
            b ? (w._opened = -9, c.back()) : w._opened = 9, $(".hub").removeClass("has-photo-modal"), a.hide()
        }, window: function () {
            return window.parent ? window.parent : window
        }
    }, $(".js-photomodal").length && navigator.userAgent.indexOf("Chrome") > 0 && "pushState" in history && navigator.userAgent.indexOf("Edge") < 0 && window.addEventListener("popstate", function (a) {
        var d, e, c = (a.state, hubCommon.hs.window());
        switch (c._originHistoryState || c.location.reload(), c._opened) {
        case 1:
            hubCommon.hs.back($(".photo-modal"));
            break;
        case -9:
            c._opened = 9, d = c._originHistoryState.title, e = c._originHistoryState.url, document.title = d, c.history.replaceState(c._newHistoryState, d, e);
            break;
        default:
            hubCommon.photoModalOpen()
        }
    }), $(".js-photomodal").length && self != top && navigator.userAgent.indexOf("Chrome") > 0 && "pushState" in history && navigator.userAgent.indexOf("Edge") < 0 && ($("#edit-tags, #translate-description").on("click", function () {
        $(".photo-modal", parent.document).scrollTop(0)
    }), $(".photo-modal", parent.document).scrollTop(0), $(".hub-tags>li a, .hub-tagcloud a, .userrank li a, .hub-footeritem ul li a, .hub-infowhat .profile-link, .hub-photoinfo a").attr("target", "_parent")), $(function () {
        $(".js-photomodal").length && navigator.userAgent.indexOf("Chrome") > 0 && "pushState" in history && navigator.userAgent.indexOf("Edge") < 0 && ($(".js-photomodal").on("click", hubCommon.photoModalClick), $(".photo-modal").on("click", function () {
            hubCommon.hs.back($(this), 1)
        }))
    }), hubCommon.photoModalClick = function (a) {
        if (!a || !(a.altKey || a.ctrlKey || a.shiftKey || a.metaKey)) {
            a.stopPropagation(), a.preventDefault();
            var b = hubCommon.hs.window(),
                c = $(this),
                d = c.find("img");
            b._newHistoryState = hubCommon.hs.make(c.attr("href"), d.attr("title")), hubCommon.photoModalOpen(1)
        }
    }, hubCommon.photoModalOpen = function (a) {
        var e, f, g, h, b = hubCommon.hs.window(),
            c = b.history,
            d = b._newHistoryState || c.state;
        d && (e = d.url, f = d.title, a && 0 != b._opened && 1 != b._opened ? (b._opened = -1, c.forward()) : (0 == b._opened ? c.pushState(d, f, e) : c.replaceState(d, f, e), b._opened = 1, b.document.title = f, g = b.$(".photoModalIframe"), h = $('<iframe src="' + e + '" onload="hubCommon.onloadIframeHeight()" class="photoModalIframe" name="photoModalIframe" width="100%" frameborder="0" scrolling="no"></iframe>'), (g.length < 1 || g.length > 0 && e != g.attr("src")) && (g.length > 0 && g.remove(), g = h, b.$("#modalIframe").append(g)), b.$(".photo-modal").show(), b.$(".hub").addClass("has-photo-modal"), $(".photo-modal").scrollTop(0)))
    }, hubCommon.onloadIframeHeight = function () {
        var b = $(".photoModalIframe")[0],
            c = b.contentDocument || b.document,
            d = Math.max(c.body.clientHeight, c.documentElement.clientHeight),
            e = Math.max(c.body.scrollHeight, c.documentElement.scrollHeight),
            f = Math.max(d, e);
        $(".photoModalIframe, .modal-iframe").css({
            height: f
        })
    }, hubCommon.translateLang = function (a) {
        return langTranslateJson ? a in langTranslateJson ? langTranslateJson[a] : a : a
    }, hubCommon.checkAndLogin = function () {
        var a = window.location.pathname + window.location.search;
        return 1 != isLogin ? (bootbox.confirm({
            message: hubCommon.translateLang("user.checkAndLogin"),
            size: "small",
            callback: function (b) {
                b && ($(".js-photomodal").length && self != top && navigator.userAgent.indexOf("Chrome") > 0 && "pushState" in history && navigator.userAgent.indexOf("Edge") < 0 ? window.top.location.href = Config.routes.login + "?redirect=" + encodeURIComponent(a) : window.location.href = Config.routes.login + "?redirect=" + encodeURIComponent(a))
            }
        }), $(".js-photomodal").length && self != top && navigator.userAgent.indexOf("Chrome") > 0 && "pushState" in history && navigator.userAgent.indexOf("Edge") < 0 && $(".photo-modal", parent.document).scrollTop(0), 0) : 1
    }, hubCommon.checkEmailVerified = function () {
        return 0 != Config.user.status ? (hubCommon.notice(hubCommon.translateLang("error.emailNotVerified")), 0) : 1
    }, hubCommon.checkIfNearBottom = function () {
        var a = $(".hub-itemmore").data("score");
        return a ? (window.pageYOffset + window.innerHeight > document.body.scrollHeight - 860 && a && ($(".js-loading").removeClass("hide"), hubCommon.loadPhoto(a)), void 0) : ($(".hub-itemmore").html(hubCommon.translateLang("system.noMore")), void 0)
    }, hubCommon.saveScrollPosition = function () {
        if (history.state && history.state.pages) {
            var a = history.state;
            a.pos = window.pageYOffset, a.timePosition = Date.parse(new Date) + 6e5, history.replaceState(a, "")
        }
    }, hubCommon.restoreState = function () {
        var a, b, c, d;
        if (history.state && history.state.pages && history.state.pages.length > 0) {
            if (a = Date.parse(new Date), a > history.state.timePosition || history.state.pages.length > 15) return;
            for (b = [], c = 0; c < history.state.pages.length; c++) d = hubCommon.loadPhoto(history.state.pages[c], !0), b.push(d);
            $.when.apply(null, b).done(function () {
                window.scrollTo(0, history.state.pos), $.ajaxSettings.async = !0
            })
        }
    }, hubCommon.savePageState = function (a) {
        if (void 0 !== history.state) {
            var b = null !== history.state && history.state.pages ? history.state : {
                pages: []
            };
            b.pages.indexOf(a) < 0 && (b.pages.push(a), history.replaceState(b, ""))
        }
    }, hubCommon.loadPhoto = function (a, b) {
        if (loaded || b) {
            loaded = !1;
            var c = $(".hub-itemmore");
            b && ($.ajaxSettings.async = !1), $.getJSON(a, function (b) {
                if (200 != b.code) return !1;
                var d = b.data;
                d ? ($(".hub-itemmore").html(hubCommon.translateLang("system.loading")), c.replaceWith(d).find("img").lazyload({
                    effect: "fadeIn",
                    threshold: 350,
                    failurelimit: 10
                }), $(".hub-fleximages") && $(".hub-fleximages").flexImages({
                    rowHeight: 300,
                    container: ".item",
                    truncate: !1,
                    object: "img"
                }), $(".hub-user-fleximages") && $(".hub-user-fleximages").flexImages({
                    rowHeight: 200,
                    container: ".item",
                    object: "img"
                }), $(".js-photomodal").length && navigator.userAgent.indexOf("Chrome") > 0 && "pushState" in history && navigator.userAgent.indexOf("Edge") < 0 && $(".js-photomodal").on("click", hubCommon.photoModalClick), $(".hub-itemmore").html(hubCommon.translateLang("system.more")), $(".js-loading").addClass("hide"), loaded = !0) : ($(".hub-itemmore").html(hubCommon.translateLang("system.noMore")), loaded = !1), hubCommon.savePageState(a)
            })
        }
    }, hubCommon.ajaxShowDownload = function () {
        $("#hub-downloadTip").show()
    }, hubCommon.ajaxCollection = function () {
        if (!hubCommon.checkAndLogin()) return !1;
        $("#favoriteForm").modal("show");
        var b = $(".favorite-content input[name=image_id]").val();
        $.getJSON(Config.routes.collections, {
            image_id: b
        }, function (a) {
            a.data && $(".favorite-list").html(a.data), $(".favorite-list li").on("click", function () {
                var a = $(this).data("id");
                $(this).toggleClass("active"), $.post(Config.routes.favorite, {
                    collection_id: a,
                    image_id: b
                }, function (a) {
                    if (200 != a.code) hubCommon.notice(a.msg);
                    else {
                        var c = a.data.isIncrease;
                        1 == c && $(".ajax-collection[data-id=" + b + "]").addClass("hub-btnwarning"), 2 == c && $(".ajax-collection[data-id=" + b + "]").removeClass("hub-btnwarning"), $(".ajax-collection[data-id=" + b + "] em").html(a.data.favorites)
                    }
                })
            })
        })
    }, hubCommon.ajaxComment = function (a) {
        var b, c, d;
        return hubCommon.checkAndLogin() ? (b = Config.routes.comment, c = $("input[name=image_id]").val(), d = $("#comment-content").val(), d ? $.ajax({
            url: b,
            method: "post",
            data: "id=" + c + "&content=" + d + "&type=" + a,
            async: !0,
            dataType: "json",
            success: function (a) {
                200 == a.code ? (hubCommon.notice(a.msg), $(".hub-commentlist").prepend(a.data)) : hubCommon.notice(a.msg)
            }
        }) : hubCommon.notice("Please Write Comment"), void 0) : !1
    }, hubCommon.filterParams = function (a, b) {
        b = b || [null, "", void 0, "NaN", "undefined"];
        for (var c in a) $.inArray(a[c], b) >= 0 && delete a[c];
        return a
    }, hubCommon.deleteItem = function (a, b) {
        var c, d, e;
        for (c = 0; c < this.length; c++)
            if (d = this[c], isNaN(b) || (d = c), d == b) {
                for (e = c; e < this.length; e++) this[e] = this[e + 1];
                this.length = this.length - 1
            }
    }, hubCommon.clearNullArr = function (a) {
        for (var b = 0, c = a.length; c > b; b++) a[b] && "" != a[b] && void 0 !== a[b] || (a.splice(b, 1), c--, b--);
        return a
    }, hubCommon.getQueryString = function (a) {
        var b = new RegExp("(^|&)" + a + "=([^&]*)(&|$)", "i"),
            c = window.location.search.substr(1).match(b);
        return null != c ? unescape(c[2]) : null
    }, hubCommon.urlUpdateParams = function (url, name, value) {
        var reg, tmp, r = url;
        return null != r && "undefined" != r && "" != r && (value = encodeURIComponent(value), reg = new RegExp("(^|)" + name + "=([^&]*)(|$)"), tmp = name + "=" + value, r = null != url.match(reg) ? url.replace(eval(reg), tmp) : url.match("[?]") ? url + "&" + tmp : url + "?" + tmp), r
    }, hubCommon.wopen = function (a, b, c, d) {
        var g, h, e = $(window).innerWidth(),
            f = $(window).innerHeight();
        return d = d || "", b = b || 640, c = c || 350, g = (window.screenLeft ? window.screenLeft : window.screenX) + e / 2 - b / 2, h = (window.screenTop ? window.screenTop : window.screenY) + f / 2 - c / 2 - 100, 0 >= h && (h = 20), window.open(a, d, "menubar=no,toolbar=no,resizable=yes,scrollbars=yes,width=" + b + ",height=" + c + ",top=" + h + ",left=" + g), !1
    }, hubCommon.pushQueryString = function (a, b) {
        var c = hubCommon.getQueryString(a),
            d = hubCommon.getUrl(),
            e = d;
        return null != c && (e = d.replace(d + "=" + a, d + "=" + b)), e
    }, hubCommon.getUrl = function () {
        return window.location.href
    }, hubCommon.bootboxNotice = function (a) {
        if ("string" == typeof a) {
            var b = a;
            a = {}, a.msg = b
        }
        a = a || {}, a.timeout = a.timeout || 3e3, bootbox.alert({
            message: a.msg,
            size: "small"
        }), setTimeout(function () {
            bootbox.hideAll()
        }, a.timeout)
    }, hubCommon.notice = function (a) {
        var b, c;
        "string" == typeof a && (b = a, a = {}, a.msg = b), a = a || {}, a.timeout = a.timeout || 3e3, c = '<div class="hub-noticeTip"><div class="hub-noticeTipContent">' + a.msg + '</div><span class="hub-noticeTipClose">×</span></div>', $(".js-photomodal").length && self != top && navigator.userAgent.indexOf("Chrome") > 0 && "pushState" in history && navigator.userAgent.indexOf("Edge") < 0 ? ($(".photo-modal", parent.document).append(c), $(".hub-noticeTip", parent.document).slideDown(500, function () {
            $(".hub-noticeTip", parent.document).show()
        }), $(".hub-noticeTipClose", parent.document).on("click", function () {
            $(".hub-noticeTip", parent.document).slideUp(500, function () {
                $(".hub-noticeTip", parent.document).remove()
            })
        }), setTimeout(function () {
            $(".hub-noticeTip", parent.document).slideUp(500, function () {
                $(".hub-noticeTip", parent.document).remove()
            })
        }, a.timeout)) : ($("body").append(c), $(".hub-noticeTip").slideDown(500, function () {
            $(".hub-noticeTip").show()
        }), $(".hub-noticeTipClose").on("click", function () {
            $(".hub-noticeTip").slideUp(500, function () {
                $(".hub-noticeTip").remove()
            })
        }), setTimeout(function () {
            $(".hub-noticeTip").slideUp(500, function () {
                $(".hub-noticeTip").remove()
            })
        }, a.timeout))
    }, hubCommon
}(jQuery);
$(document).ready(function () {
    hubCommon.init()
});