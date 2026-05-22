const topicInput = document.getElementById("topic");
const platformSelect = document.getElementById("platform");
const durationSelect = document.getElementById("duration");
const styleSelect = document.getElementById("style");
const generateButton = document.getElementById("generateButton");
const resultBox = document.getElementById("result");

function createPrompt() {
  const topic = topicInput.value.trim();
  const platform = platformSelect.value;
  const duration = durationSelect.value;
  const style = styleSelect.value;

  if (topic === "") {
    resultBox.textContent = "请先输入一个故事主题。";
    return;
  }

  const prompt = `请为${platform}创作一个${duration}的短视频故事脚本。

主题：${topic}
风格：${style}

请包含：
1. 吸引人的开头
2. 清晰的故事发展
3. 一个令人记住的结尾
4. 适合画面生成的分镜提示`;

  resultBox.textContent = prompt;
}

generateButton.addEventListener("click", createPrompt);
