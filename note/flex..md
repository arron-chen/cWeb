###  前端自适应适配布局解决方案
> 使用flexbox解决方案

> 使用百分比加媒体查询

> 使用rem

> 固定一些宽度，使用一个模式。加上媒体查询方案


### 响应式布局和自适应的区别

 自适应是为了解决如何才能在不同大小的设备上呈现相同的网页。手机的屏幕比较小，宽度通常在600像素以下，pc的像素一般在1000像素以上，部分配置高的笔记本在2000像素以上的也有，同样的页面要显示在不同的设备上面，还要呈现出满意的效果，不是一件容易的事情。因此就有人想出了一个办法，能不能"一次设计，普遍适用"，让同一张网页自动适应不同大小的屏幕，根据屏幕的宽度，自动调节网页的内容大小，但是无论怎么样子，他们的主体的内容和布局是没有变化的。

响应式的概念应该是覆盖了自适应，但是包括的东西更多了。响应式布局可以根据屏幕的大小自动的调整页面的展现方式，以及布局

响应式布局的一些技术点纪录：

(1)允许网页的宽度自动的调整

 

(2)尽量少使用绝对的宽度，多点百分比

 

(3)相对大小的字体:字体不要使用px写死，最好使用相对大小的em，或者高清方案rem，这个不限制与字体，别的属性也可以这么设置

 

(4)流式布局，float等float的好处是，如果宽度太小，放不下两个元素，后面的元素会自动滚动到前面元素的下方，不会在水平方向overflow（溢出），避免了水平滚动条的出现。

 

(5)选择加载css，<link rel="stylesheet" type="text/css" media="screen and (max-device-width: 400px)" href="tinyScreen.css" />，这个意思是如果屏幕宽度小于400像素（max-device-width: 400px），就加载tinyScreen.css文件。