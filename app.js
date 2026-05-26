const topicInput = document.getElementById("topic");
const platformSelect = document.getElementById("platform");
const durationSelect = document.getElementById("duration");
const styleSelect = document.getElementById("style");
const generateButton = document.getElementById("generateButton");
const resultBox = document.getElementById("result");

function createResultCard(title, content) {
  return `
    <article class="result-card">
      <h3>${title}</h3>
      <p>${content}</p>
    </article>
  `;
}

function createPrompt() {
  const topic = topicInput.value.trim();
  const platform = platformSelect.value;
  const duration = durationSelect.value;
  const style = styleSelect.value;

  if (topic === "") {
    resultBox.classList.remove("result-grid");
    resultBox.textContent = "请先输入一个故事主题。";
    return;
  }

  const script = `为${platform}创作一个${duration}的${style}短视频故事脚本。主题是“${topic}”。开头要快速吸引观众，中间要有清晰冲突，结尾要留下记忆点。`;

  const storyboard = `镜头 1：展示主角和故事环境。镜头 2：出现意外事件或关键冲突。镜头 3：主角做出选择。镜头 4：用一个有情绪的画面收尾。`;

  const imagePrompt = `${style}风格，短视频故事画面，主题为“${topic}”，电影感构图，清晰主体，细节丰富，适合 AI 图像生成。`;

  const videoPrompt = `生成一个${duration}的${platform}短视频，围绕“${topic}”展开，整体风格为${style}，节奏清晰，画面连贯，适合竖屏观看。`;

  resultBox.classList.add("result-grid");
  resultBox.innerHTML =
    createResultCard("Script", script) +
    createResultCard("Storyboard", storyboard) +
    createResultCard("Image Prompt", imagePrompt) +
    createResultCard("Video Prompt", videoPrompt);
}

generateButton.addEventListener("click", createPrompt);
