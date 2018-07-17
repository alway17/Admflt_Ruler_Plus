# 使用说明
* ~~将fcss.min.js拷贝到配置文件夹下的doc文件夹里（如果使用for monkey就不必了或建一个空的fcss.min.js在doc文件夹里）~~
* ~~将block文件夹下载并拷贝到配置文件夹下的doc文件夹里~~
* 下载ADM-DAT.zip不用解压，打开阿呆喵面板导入数据。
* 添加hack_plus.txt订阅（三个选其一）
* https://raw.githubusercontent.com/emCupid/Admflt_Ruler_Plus/master/hack_plus.txt
* https://gitee.com/emCupid/Admflt_Ruler_Plus/raw/master/hack_plus.txt
* https://coding.net/u/emCupid/p/Admflt_Ruler_Plus/git/raw/master/hack_plus.txt
* 添加Baidu_AD_JS.txt订阅（三个选其一）
* https://raw.githubusercontent.com/emCupid/Admflt_Ruler_Plus/master/Baidu_AD_JS.txt
* https://gitee.com/emCupid/Admflt_Ruler_Plus/raw/master/Baidu_AD_JS.txt
* https://coding.net/u/emCupid/p/Admflt_Ruler_Plus/git/raw/master/Baidu_AD_JS.txt

## hack_plus.txt
* 此规则由本人自用规则（ADM）而来，开放给有兴趣同学，其他程序可能会不兼容
* 不介意其他程序可以稍改语法拿去使用，共同学习，请注明来源
* 类似以前的骚规则，只不过从阿呆喵退休后基本自用，更新看时间和心情

## Baidu_AD_JS.txt
* 屏蔽百度推广JS，由于可以自定义域名，而JS的文件也随机，普通方式抓规则量太大，用了特殊手段抓插入的JS，达到屏蔽作用。
* 如有其他更好的方法请告知。

## fcss.min.js
* 全局元素广告屏蔽JS
* 本想用外部样式表来插入，可有些网站实在是鸡贼，会删除style等元素，故采用JS生成xml-stylesheet的方式
* 支持IE，但并未对其进行大量测试，请用现代浏览器。
* 提供两个函数用于白名单，unHackcss.F('css选择器')用于解除浮动元素屏蔽，unHackcss.A('css选择器')用于解除全局元素屏蔽，使用方法例：||xxxx.com$s@&lt;/body&gt;@&lt;script&gt;unHackcss.F('#navbar')&lt;/script&gt;&lt;/body&gt;@

## 其他
GitHub和码云同步，coding备份
* https://github.com/emCupid/Admflt_Ruler_Plus
* https://gitee.com/emCupid/Admflt_Ruler_Plus
* https://coding.net/u/emCupid/p/Admflt_Ruler_Plus/git

> emmm....买包烟咯
> 
> 其实，是订阅的问题，仓库一般是没问题，调用多有可能出错。还有现在最大的问题就是插入调用如fcss.min.js和block文件夹下的文件SSL，虽然本地ADM虚拟地址调用但还是要花一些时间，如果能有一些持续的捐助（上又拍）或赞助服务器就可以把这些文件强制缓存，只要不强制刷新就是memory cache或disk cache，这样可以加快一些速度。

![wechat_code](http://wx2.sinaimg.cn/large/6fd368d6ly1fryey8r91vj207u09qabg.jpg)  ![alipay_code](http://wx1.sinaimg.cn/large/6fd368d6ly1fryey8v2jmj207u09qwfz.jpg)