/* CoreSplit Wiki — i18n: Installation */

I18N.installation = {
  "zh-CN": {
    pageTitle: "安装指南",
    pageDesc: "在 5 分钟内将 CoreSplit 部署到你的 Minecraft 26.2 客户端或服务器。",
    prereq: "环境要求",
    prereqWarn: "⚠ 安装 CoreSplit 前必须满足以下所有条件。",
    prereq1: "Minecraft 26.2（Java 版），客户端或服务器均可。",
    prereq2: "Fabric Loader 0.16.0 或更高版本。Quilt 暂不受官方支持，但可通过 Quilted Fabric API 兼容层使用。",
    prereq3: "Java 25 或更高版本。推荐使用 Eclipse Adoptium 25 LTS 发行版。",
    prereq4: "Fabric API（核心版本）。请从 Modrinth 或 CurseForge 下载与你的 MC 版本匹配的 Fabric API。",
    clientInstall: "客户端安装",
    cStep1Title: "1. 安装 Fabric Loader",
    cStep1Desc: "前往 Fabric 官方网站下载对应 Minecraft 26.2 的 Fabric 安装器。运行安装器，选择「客户端」选项，点击安装。完成后启动器中将出现新的 Fabric 配置文件。",
    cStep2Title: "2. 下载 CoreSplit",
    cStep2Desc: "从 Modrinth、CurseForge 或 GitHub Releases 页面下载最新版本的 CoreSplit。文件名格式为 coresplit-&lt;版本&gt;.jar。",
    cStep3Title: "3. 放入 mods 文件夹",
    cStep3Desc: "打开 Minecraft 游戏目录（启动器中点击「安装文件」→「打开文件夹」），将 coresplit-&lt;版本&gt;.jar 复制到 mods 文件夹中。如果该文件夹不存在，请手动创建。",
    cStep4Title: "4. 确保 Fabric API 已安装",
    cStep4Desc: "检查 mods 文件夹中是否已有 fabric-api-&lt;版本&gt;.jar。CoreSplit 依赖 Fabric API 运行，缺少时会在启动时报错。",
    cStep5Title: "5. 启动游戏",
    cStep5Desc: "在启动器中选择 Fabric 配置文件，点击「开始游戏」。CoreSplit 会在首次启动时自动生成配置文件 config/coresplit.toml。",
    successCheck: "如果一切顺利，你将在游戏日志中看到 [CoreSplit] Initialized。按 F6 可在游戏中切换 HUD 覆盖层显示实时性能指标。配置文件会自动生成于 .minecraft/config/coresplit.toml。",
    serverInstall: "服务端安装",
    sStep1Title: "1. 安装 Fabric Server",
    sStep1Desc: "从 Fabric 官网下载服务端安装器。运行安装器，选择「服务端」选项并指定目标文件夹。这将在该文件夹中生成 fabric-server-launch.jar。",
    sStep2Title: "2. 下载 CoreSplit（服务端版本）",
    sStep2Desc: "与客户端使用相同的 JAR 文件——CoreSplit 会自动检测运行环境。从 Modrinth、CurseForge 或 GitHub Releases 下载。",
    sStep3Title: "3. 放入服务器的 mods 文件夹",
    sStep3Desc: "将 coresplit-&lt;版本&gt;.jar 和 fabric-api-&lt;版本&gt;.jar 放入服务器的 mods/ 文件夹。如果该文件夹不存在，请手动创建。",
    sStep4Title: "4. 首次启动",
    sStep4Desc: "使用 java -jar fabric-server-launch.jar 启动服务器。CoreSplit 会自动初始化并生成 config/coresplit.toml。",
    sStep5Title: "5. 验证与配置",
    sStep5Desc: "服务器启动后，查看日志确保出现 [CoreSplit] Initialized 信息。编辑 config/coresplit.toml 以调整引擎模式（建议服务端使用 local 或 online 模式）。",
    optionalMods: "推荐选装模组",
    optTableHead1: "模组",
    optTableHead2: "用途",
    optTableHead3: "是否必需",
    optMod1Name: "Mod Menu",
    optMod1Desc: "提供游戏内模组列表界面，可直观查看 CoreSplit 的版本和状态。",
    optMod1Req: "强烈推荐",
    optMod2Name: "YACL3 (YetAnotherConfigLib)",
    optMod2Desc: "为 CoreSplit 提供图形化配置界面，无需手动编辑 TOML 文件即可调整所有设置。",
    optMod2Req: "强烈推荐",
    optNote: "如果你不安装 YACL3，仍然可以通过直接编辑 config/coresplit.toml 来修改配置。CoreSplit 支持热重载——修改配置文件后保存，游戏会在 3 秒内自动应用更改。",
    verify: "验证安装",
    v1: "启动游戏，打开日志输出窗口。查找 [CoreSplit] 开头的日志行。",
    v2: "按 F6 键，屏幕左上角应出现 TPS / MSPT / FPS 信息覆盖层。再次按 F6 可关闭。",
    v3: "检查 .minecraft/config/coresplit.toml 文件是否已自动生成。",
    v4: "在聊天栏输入 /coresplit status 命令（如安装了命令支持），确认引擎状态显示为 Active。"
  },
  "zh-TW": {
    pageTitle: "安裝指南",
    pageDesc: "在 5 分鐘內將 CoreSplit 部署到你的 Minecraft 26.2 用戶端或伺服器。",
    prereq: "環境需求",
    prereqWarn: "⚠ 安裝 CoreSplit 前必須滿足以下所有條件。",
    prereq1: "Minecraft 26.2（Java 版），用戶端或伺服器均可。",
    prereq2: "Fabric Loader 0.16.0 或更高版本。Quilt 暫不受官方支援，但可透過 Quilted Fabric API 相容層使用。",
    prereq3: "Java 25 或更高版本。推薦使用 Eclipse Adoptium 25 LTS 發行版。",
    prereq4: "Fabric API（核心版本）。請從 Modrinth 或 CurseForge 下載與你的 MC 版本匹配的 Fabric API。",
    clientInstall: "用戶端安裝",
    cStep1Title: "1. 安裝 Fabric Loader",
    cStep1Desc: "前往 Fabric 官方網站下載對應 Minecraft 26.2 的 Fabric 安裝器。執行安裝器，選擇「用戶端」選項，點擊安裝。完成後啟動器中將出現新的 Fabric 設定檔。",
    cStep2Title: "2. 下載 CoreSplit",
    cStep2Desc: "從 Modrinth、CurseForge 或 GitHub Releases 頁面下載最新版本的 CoreSplit。檔案名稱格式為 coresplit-&lt;版本&gt;.jar。",
    cStep3Title: "3. 放入 mods 資料夾",
    cStep3Desc: "開啟 Minecraft 遊戲目錄（啟動器中點擊「安裝檔」→「開啟資料夾」），將 coresplit-&lt;版本&gt;.jar 複製到 mods 資料夾中。如果該資料夾不存在，請手動建立。",
    cStep4Title: "4. 確保 Fabric API 已安裝",
    cStep4Desc: "檢查 mods 資料夾中是否已有 fabric-api-&lt;版本&gt;.jar。CoreSplit 依賴 Fabric API 執行，缺少時會在啟動時報錯。",
    cStep5Title: "5. 啟動遊戲",
    cStep5Desc: "在啟動器中選擇 Fabric 設定檔，點擊「開始遊戲」。CoreSplit 會在首次啟動時自動產生設定檔 config/coresplit.toml。",
    successCheck: "如果一切順利，你將在遊戲記錄中看到 [CoreSplit] Initialized。按 F6 可在遊戲中切換 HUD 覆蓋層顯示即時效能指標。設定檔會自動產生於 .minecraft/config/coresplit.toml。",
    serverInstall: "伺服器端安裝",
    sStep1Title: "1. 安裝 Fabric Server",
    sStep1Desc: "從 Fabric 官網下載伺服器端安裝器。執行安裝器，選擇「伺服器端」選項並指定目標資料夾。這將在該資料夾中產生 fabric-server-launch.jar。",
    sStep2Title: "2. 下載 CoreSplit（伺服器端版本）",
    sStep2Desc: "與用戶端使用相同的 JAR 檔案——CoreSplit 會自動偵測執行環境。從 Modrinth、CurseForge 或 GitHub Releases 下載。",
    sStep3Title: "3. 放入伺服器的 mods 資料夾",
    sStep3Desc: "將 coresplit-&lt;版本&gt;.jar 和 fabric-api-&lt;版本&gt;.jar 放入伺服器的 mods/ 資料夾。如果該資料夾不存在，請手動建立。",
    sStep4Title: "4. 首次啟動",
    sStep4Desc: "使用 java -jar fabric-server-launch.jar 啟動伺服器。CoreSplit 會自動初始化並產生 config/coresplit.toml。",
    sStep5Title: "5. 驗證與設定",
    sStep5Desc: "伺服器啟動後，檢視記錄確保出現 [CoreSplit] Initialized 資訊。編輯 config/coresplit.toml 以調整引擎模式（建議伺服器端使用 local 或 online 模式）。",
    optionalMods: "推薦選裝模組",
    optTableHead1: "模組",
    optTableHead2: "用途",
    optTableHead3: "是否必需",
    optMod1Name: "Mod Menu",
    optMod1Desc: "提供遊戲內模組列表介面，可直觀檢視 CoreSplit 的版本和狀態。",
    optMod1Req: "強烈推薦",
    optMod2Name: "YACL3 (YetAnotherConfigLib)",
    optMod2Desc: "為 CoreSplit 提供圖形化設定介面，無需手動編輯 TOML 檔案即可調整所有設定。",
    optMod2Req: "強烈推薦",
    optNote: "如果你不安裝 YACL3，仍然可以透過直接編輯 config/coresplit.toml 來修改設定。CoreSplit 支援熱重載——修改設定檔後儲存，遊戲會在 3 秒內自動套用變更。",
    verify: "驗證安裝",
    v1: "啟動遊戲，開啟記錄輸出視窗。尋找 [CoreSplit] 開頭的記錄行。",
    v2: "按 F6 鍵，螢幕左上角應出現 TPS / MSPT / FPS 資訊覆蓋層。再次按 F6 可關閉。",
    v3: "檢查 .minecraft/config/coresplit.toml 檔案是否已自動產生。",
    v4: "在聊天欄輸入 /coresplit status 指令（如安裝了指令支援），確認引擎狀態顯示為 Active。"
  },
  "en": {
    pageTitle: "Installation",
    pageDesc: "Get CoreSplit running on your Minecraft 26.2 client or server in under 5 minutes.",
    prereq: "Prerequisites",
    prereqWarn: "⚠ All of the following must be met before installing CoreSplit.",
    prereq1: "Minecraft 26.2 (Java Edition), client or server.",
    prereq2: "Fabric Loader 0.16.0 or later. Quilt is not officially supported but works through the Quilted Fabric API compatibility layer.",
    prereq3: "Java 25 or later. We recommend the Eclipse Adoptium 25 LTS distribution.",
    prereq4: "Fabric API (core version). Download the Fabric API matching your MC version from Modrinth or CurseForge.",
    clientInstall: "Client Installation",
    cStep1Title: "1. Install Fabric Loader",
    cStep1Desc: "Go to the official Fabric website and download the Fabric installer for Minecraft 26.2. Run the installer, select the \"Client\" option, and click Install. A new Fabric profile will appear in your launcher.",
    cStep2Title: "2. Download CoreSplit",
    cStep2Desc: "Download the latest CoreSplit release from Modrinth, CurseForge, or the GitHub Releases page. The file name follows the pattern coresplit-&lt;version&gt;.jar.",
    cStep3Title: "3. Place in the mods Folder",
    cStep3Desc: "Open your Minecraft game directory (in the launcher, click \"Installations\" → \"Open Folder\"). Copy coresplit-&lt;version&gt;.jar into the mods folder. Create the folder if it doesn't exist.",
    cStep4Title: "4. Ensure Fabric API Is Installed",
    cStep4Desc: "Check that fabric-api-&lt;version&gt;.jar is already in your mods folder. CoreSplit depends on Fabric API — the game will error on startup if it is missing.",
    cStep5Title: "5. Launch the Game",
    cStep5Desc: "Select the Fabric profile in your launcher and click \"Play.\" CoreSplit will auto-generate the config file config/coresplit.toml on first launch.",
    successCheck: "If everything went well, you'll see [CoreSplit] Initialized in the game log. Press F6 in-game to toggle the HUD overlay showing real-time performance metrics. The config file is auto-generated at .minecraft/config/coresplit.toml.",
    serverInstall: "Server Installation",
    sStep1Title: "1. Install Fabric Server",
    sStep1Desc: "Download the server installer from the Fabric website. Run the installer, select the \"Server\" option, and specify a target directory. This generates fabric-server-launch.jar in that directory.",
    sStep2Title: "2. Download CoreSplit (Server Version)",
    sStep2Desc: "The same JAR works for both client and server — CoreSplit auto-detects the environment. Download it from Modrinth, CurseForge, or GitHub Releases.",
    sStep3Title: "3. Place in the Server mods Folder",
    sStep3Desc: "Place coresplit-&lt;version&gt;.jar and fabric-api-&lt;version&gt;.jar into the server's mods/ folder. Create the folder if it doesn't exist.",
    sStep4Title: "4. First Launch",
    sStep4Desc: "Start the server with java -jar fabric-server-launch.jar. CoreSplit will auto-initialize and generate config/coresplit.toml.",
    sStep5Title: "5. Verify & Configure",
    sStep5Desc: "After the server starts, check the log for the [CoreSplit] Initialized message. Edit config/coresplit.toml to adjust the engine mode (local or online mode recommended for servers).",
    optionalMods: "Optional Mods (Recommended)",
    optTableHead1: "Mod",
    optTableHead2: "Purpose",
    optTableHead3: "Required?",
    optMod1Name: "Mod Menu",
    optMod1Desc: "Adds an in-game mod list UI so you can see CoreSplit's version and status at a glance.",
    optMod1Req: "Highly Recommended",
    optMod2Name: "YACL3 (YetAnotherConfigLib)",
    optMod2Desc: "Provides a graphical config UI for CoreSplit, so you can tweak every setting without editing the TOML file by hand.",
    optMod2Req: "Highly Recommended",
    optNote: "If you skip YACL3, you can still edit config/coresplit.toml directly. CoreSplit supports hot-reloading — save the config file and changes apply automatically within 3 seconds.",
    verify: "Verifying Installation",
    v1: "Launch the game and open the log output window. Look for lines starting with [CoreSplit].",
    v2: "Press F6. A TPS / MSPT / FPS overlay should appear in the top-left corner. Press F6 again to dismiss it.",
    v3: "Check that .minecraft/config/coresplit.toml has been auto-generated.",
    v4: "Type /coresplit status in chat (if command support is installed) and confirm the engine status reads Active."
  }
};

window.renderPage = function() {
  var p = I18N.installation[getLang()] || I18N.installation['en'];

  var html = '';

  // Page header
  html += '<div class="page-header"><h1>' + p.pageTitle + '</h1><p>' + p.pageDesc + '</p></div>';
  html += '<div class="page">';

  // Prerequisites
  html += '<h2>' + p.prereq + '</h2>';
  html += '<div class="alert alert-warn">' + p.prereqWarn + '</div>';
  html += '<ul>';
  html += '<li>' + p.prereq1 + '</li>';
  html += '<li>' + p.prereq2 + '</li>';
  html += '<li>' + p.prereq3 + '</li>';
  html += '<li>' + p.prereq4 + '</li>';
  html += '</ul>';

  // Client Installation
  html += '<h2>' + p.clientInstall + '</h2>';
  html += '<ol class="steps">';
  html += '<li><strong>' + p.cStep1Title + '</strong><p>' + p.cStep1Desc + '</p></li>';
  html += '<li><strong>' + p.cStep2Title + '</strong><p>' + p.cStep2Desc + '</p></li>';
  html += '<li><strong>' + p.cStep3Title + '</strong><p>' + p.cStep3Desc + '</p></li>';
  html += '<li><strong>' + p.cStep4Title + '</strong><p>' + p.cStep4Desc + '</p></li>';
  html += '<li><strong>' + p.cStep5Title + '</strong><p>' + p.cStep5Desc + '</p></li>';
  html += '</ol>';
  html += '<div class="alert alert-success">' + p.successCheck + '</div>';

  // Server Installation
  html += '<h2>' + p.serverInstall + '</h2>';
  html += '<ol class="steps">';
  html += '<li><strong>' + p.sStep1Title + '</strong><p>' + p.sStep1Desc + '</p></li>';
  html += '<li><strong>' + p.sStep2Title + '</strong><p>' + p.sStep2Desc + '</p></li>';
  html += '<li><strong>' + p.sStep3Title + '</strong><p>' + p.sStep3Desc + '</p></li>';
  html += '<li><strong>' + p.sStep4Title + '</strong><p>' + p.sStep4Desc + '</p></li>';
  html += '<li><strong>' + p.sStep5Title + '</strong><p>' + p.sStep5Desc + '</p></li>';
  html += '</ol>';

  // Optional Mods
  html += '<h2>' + p.optionalMods + '</h2>';
  html += '<div class="table-wrap"><table>';
  html += '<thead><tr><th>' + p.optTableHead1 + '</th><th>' + p.optTableHead2 + '</th><th>' + p.optTableHead3 + '</th></tr></thead>';
  html += '<tbody>';
  html += '<tr><td><strong>' + p.optMod1Name + '</strong></td><td>' + p.optMod1Desc + '</td><td>' + p.optMod1Req + '</td></tr>';
  html += '<tr><td><strong>' + p.optMod2Name + '</strong></td><td>' + p.optMod2Desc + '</td><td>' + p.optMod2Req + '</td></tr>';
  html += '</tbody></table></div>';
  html += '<div class="alert alert-info">' + p.optNote + '</div>';

  // Verification
  html += '<h2>' + p.verify + '</h2>';
  html += '<ol>';
  html += '<li>' + p.v1 + '</li>';
  html += '<li>' + p.v2 + '</li>';
  html += '<li>' + p.v3 + '</li>';
  html += '<li>' + p.v4 + '</li>';
  html += '</ol>';

  html += '</div>'; // .page

  document.getElementById('content-root').innerHTML = html;
};
