// 取得頁面中嵌入的的 YouTube 影片
var allVideos = $("iframe[src*='//www.youtube.com']")

// 把所有的 iframe 包一個 videoWrapper 容器（父元素）
$(allVideos).each(function() {
	$(this).wrap("<div class='videoWrapper'></div>")
});