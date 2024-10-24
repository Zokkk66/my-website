// 获取音频元素和播放按钮元素
var audio = document.getElementById('myAudio');
var playButton = document.getElementById('playButton');

// 为播放按钮添加点击事件监听器
playButton.addEventListener('click', function () {
    // 播放音频
    audio.play();
});
