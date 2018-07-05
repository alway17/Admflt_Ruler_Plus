# 使用说明
* 将fcss.min.js拷贝到配置文件夹下的doc文件夹里（如果使用for monkey就不必了或建一个空的fcss.min.js在doc文件夹里）
* 将block文件夹下载并拷贝到配置文件夹下的doc文件夹里
* 更多帮助见：[阿呆喵使用帮助](http://doc.admflt.com/)

## hack_plus.tx
* 此规则由本人自用规则（ADM）而来，开放给有兴趣同学，其他程序可能会不兼容
* 不介意其他程序可以稍改语法拿去使用，共同学习，请注明来源
* 类似以前的骚规则，只不过从阿呆喵退休后基本自用，更新看时间和心情

## Baidu_AD_JS.txt
* 屏蔽百度推广JS，由于可以自定义域名，而JS的文件也随机，普通方式抓规则量太大，用了特殊手段抓插入的JS，达到屏蔽作用。
* 如有其他更好的方法请告知。

## fcss.min.js
* 全局元素广告屏蔽JS
* 本想用外部样式表来插入，可有些网站实在是鸡贼，会删除style等元素，故采用JS生成xml-stylesheet的方式
* 对IE也做了兼容，虽然这玩意儿可能没多少人用了
* 提供两个函数用于白名单，unHackcss.F('css选择器')用于解除浮动元素屏蔽，unHackcss.A('css选择器')用于解除全局元素屏蔽，使用方法例：||xxxx.com$s@&lt;/body&gt;@&lt;script&gt;unHackcss.F('#navbar')&lt;/script&gt;&lt;/body&gt;@

## Fcss_for_monkey.js
* 全局元素广告屏蔽JS for 油猴
* 排除请自行设置添加“用户排除”

## 其他
GitHub和码云同步
* https://github.com/emCupid/Admflt_Ruler_Plus
* https://gitee.com/emCupid/Admflt_Ruler_Plus

emmm....买包烟咯

![wechat_code](http://wx2.sinaimg.cn/large/6fd368d6ly1fryey8r91vj207u09qabg.jpg)  ![alipay_code](http://wx1.sinaimg.cn/large/6fd368d6ly1fryey8v2jmj207u09qwfz.jpg)