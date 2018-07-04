// ==UserScript==
// @name         Global hidecss plus
// @namespace    https://weibo.com/emcupid
// @version      1.4
// @description  Fcss - Fuck css for monkey
// @author       emCupid
// @run-at       document-start
// @downloadURL  https://raw.githubusercontent.com/emCupid/Admflt_Ruler_Plus/master/Fcss_for_monkey.js
// @updateURL    https://raw.githubusercontent.com/emCupid/Admflt_Ruler_Plus/master/Fcss_for_monkey.js
// @match        *://*/*
// @exclude      *://*.ctfile.com/*
// ==/UserScript==

(function() {
    'use strict';
    /*getMainHost by pon*/
    function getMainHost() {
        let key = `mh_${Math.random()}`;
        let keyR = new RegExp(`(^|;)\\s*${key}=12345`);
        let expiredTime = new Date(0);
        let domain = document.domain;
        let domainList = domain.split('.');
        let urlItems = [];
        urlItems.unshift(domainList.pop());
        while (domainList.length) {
            urlItems.unshift(domainList.pop());
            let mainHost = urlItems.join('.');
            let cookie = `${key}=${12345};domain=.${mainHost}`;
            document.cookie = cookie;
            if (keyR.test(document.cookie)) {
                document.cookie = `${cookie};expires=${expiredTime}`;
                return mainHost;
            }
        }
    }
    function Fuck_css(str) {
            var t = document.createProcessingInstruction("xml-stylesheet", 'type="text/css" href="data:text/css,' + encodeURIComponent(str) + '"');
            return document.insertBefore(t, document.documentElement);
    }
    var WhiteList = getMainHost(),
        //浮动过滤域名白名单
        FloatWhiteDomain = "youku.com|weibo.com|pptv.com|le.com|mgtv.com|iqiyi.com|xianliao.me|bilibili.com|onedns.net".split('|'),
        AdvCss = "",
        FloatCss = "",
        FloatCssList = "";
    var FloatArraw = new Array(
        '[style*="fixed"][style*="bottom"][style*="right"][style*="0;"]:not([id$="Clipper"])',
        '[style*="fixed"][style*="bottom"][style*="left"][style*="0;"]:not([id$="Clipper"])',
        '[style*="fixed"][style*="bottom"][style*="right"][style*="0px"]:not([id$="Clipper"])',
        '[style*="fixed"][style*="bottom"][style*="left"][style*="0px"]:not([id$="Clipper"])'
    );
    for (var x in FloatArraw) {
        FloatCss = FloatCss + FloatArraw[x] + ",";
    }
    FloatWhiteDomain.indexOf(WhiteList) == -1 ? FloatCssList = FloatCss + "emCupid" : FloatCssList = "emCupid";
    var AdvArraw = new Array(
        //'img[alt="ad"],img[alt="adv"],img[alt="ads"]',
        'a[href*="click.aliyun.com"],a[target="_blank"][style*="2147483647"][style*="opacity"],div[id^="_"][style*="2147483647"],div[id^="_"][style="width: 100%;"]>iframe,iframe[src*="pos.baidu.com"],a[href*="i/?cid="],iframe[src*="/ads?"],iframe[src*="v.php?id="],iframe[src*="s.php?id="],[id^="BAIDU_"],iframe[src*="/ad/"],iframe[src*="adurl"][src*="type="],[node-type^="ad"]',
        //下载站
        'a[href*="ads_id="],a[href*="@"][href$="exe"],.wrap-ad,div[class*="xzbox-ad"],div[class*="xzbox-gg"]',
        //论坛
        '.a_t,.a_p,.a_pr,.a_f,.a_h',
        '[class^="gg1"],[class^="gg2"],[class^="gg3"],,[class^="gg4"],[class^="gg5"],[class^="gg6"],[class^="gg7"],[class^="gg8"],[class^="gg9"],.ad1,.ad2,.ad3,.ad4,.ad5,.ad6,.ad7,.ad8,.ad9,#ad1,#ad2,#ad3,#ad4,#ad5,#ad6,#ad7,#ad8,#ad9,.ad-box,.adbox,[id^="ad_"],[class*="_adv_"],[id*="_adv_"],[class*="-adv-"],[id*="-adv-"],[class*="_ad_"],[id*="_ad_"]',
        '[class*="banner_ad"],[class*="banner_ad"],[class*="banner-ad"],[id^="adBox"],[id^="AdBox"],[id^="ADbox"],[id^="ad-box"]',
        '[class*="ad_header"],[class*="ad_footer"],[class*="ad_text"],[id^="ad_header"],[id^="ad_footer"],[id^="ad_text"],[class*="ad-header"],[class*="ad-footer"],[class*="ad-text"],[id^="ad-header"],[id^="ad-footer"],[id^="ad-text"]',
        '[class*="header_ad"],[class*="footer_ad"],[class*="text_ad"],[id^="header_ad"],[id^="footer_ad"],[id^="text_ad"],[class*="header-ad"],[class*="footer-ad"],[class*="text-ad"],[id^="header-ad"],[id^="footer-ad"],[id^="text-ad"]',
        '[class*="ads_header"],[class*="ads_footer"],[class*="ads_text"],[id^="ads_header"],[id^="ads_footer"],[id^="ads_text"],[class*="ads-header"],[class*="ads-footer"],[class*="ads-text"],[id^="ads-header"],[id^="ads-footer"],[id^="ads-text"]',
        '[class*="header_ads"],[class*="footer_ads"],[class*="text_ads"],[id^="header_ads"],[id^="footer_ads"],[id^="text_ads"],[class*="header-ads"],[class*="footer-ads"],[class*="text-ads"],[id^="header-ads"],[id^="footer-ads"],[id^="text-ads"]',
        '[class*="ad_head"],[class*="ad_foot"],[id^="ad_head"],[id^="ad_foot"],[class*="ad-head"],[class*="ad-foot"],[id^="ad-head"],[id^="ad-foot"]',
        '[class*="head_ad"],[class*="foot_ad"],[id^="head_ad"],[id^="foot_ad"],[class*="head-ad"],[class*="foot-ad"],[id^="head-ad"],[id^="foot-ad"]',
        '[class*="adtop"],[class*="adleft"],[class*="adright"],[class*="adbottom"],[id^="adtop"],[id^="adleft"],[id^="adright"],[id^="adbottom"],[class*="topad"],[class*="leftad"],[class*="rightad"],[class*="bottomad"],[id^="topad"],[id^="leftad"],[id^="rightad"],[id^="bottomad"]',
        '[class*="advtop"],[class*="advleft"],[class*="advright"],[class*="advbottom"],[id^="advtop"],[id^="advleft"],[id^="advright"],[id^="advbottom"],[class*="topadv"],[class*="leftadv"],[class*="rightadv"],[class*="bottomadv"],[id^="topadv"],[id^="leftadv"],[id^="rightadv"],[id^="bottomadv"]',
        '[class*="Adtop"],[class*="Adleft"],[class*="Adright"],[class*="Adbottom"],[id^="Adtop"],[id^="Adleft"],[id^="Adright"],[id^="Adbottom"],[class*="topAd"],[class*="leftAd"],[class*="rightAd"],[class*="bottomAd"],[id^="topAd"],[id^="leftAd"],[id^="rightAd"],[id^="bottomAd"]',
        '[class*="Advtop"],[class*="Advleft"],[class*="Advright"],[class*="advbottom"],[id^="Advtop"],[id^="Advleft"],[id^="Advright"],[id^="Advbottom"],[class*="topAdv"],[class*="leftAdv"],[class*="rightAdv"],[class*="bottomAdv"],[id^="topAdv"],[id^="leftAdv"],[id^="rightAdv"],[id^="bottomAdv"]',
        '.ad-top,.ad-left,.ad-right,[id^="ad-top"],[id^="ad-left"],[id^="ad-right"],.ad_top,.ad_left,.ad_right,[id^="ad_top"],[id^="ad_left"],[id^="ad_right"],.adv_top,.adv_left,.adv_right,[id^="adv_top"],[id^="adv_left"],[id^="adv_right"],.adv-top,.adv-left,.adv-right,[id^="adv-top"],[id^="adv-left"],[id^="adv-right"]',
        '.top_ad,.left_ad,.right_ad,.bottom_ad,.top-ad,.left-ad,.right-ad,.bottom-ad,[id^="top_ad"],[id^="left_ad"],[id^="right_ad"],[id^="bottom_ad"],[id^="top-ad"],[id^="left-ad"],[id^="right-ad"],[id^="bottom-ad"]'
    );
    for (x in AdvArraw) {
        AdvCss = AdvCss + AdvArraw[x] + ",";
    }
    var __Has_Plus_Hide = __Has_Plus_Hide || false;
    Fuck_css(AdvCss + FloatCssList + '{display:none!important;max-width:0!important;max-height:0!important;overflow:hidden!important;pointer-events:none!important;position:absolute;left:-102030px}');
})();