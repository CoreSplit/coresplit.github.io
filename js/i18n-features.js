/* CoreSplit Wiki — i18n: Features */

I18N.features = {
  "zh-CN": {
    pageTitle: "功能特性",
    pageDesc: "全面了解 CoreSplit 为 Minecraft 26.2 带来的性能优化与监控能力。",
    feat1Title: "1. 实时性能监控",
    feat1Desc: "CoreSplit 在游戏内提供完整的实时性能仪表板。监控关键指标包括 <strong>TPS</strong>（每秒刻数，正常值为 20.0）、<strong>MSPT</strong>（每刻毫秒数，越低越好）以及每刻执行的<strong>区块更新数</strong>和<strong>实体处理数</strong>。所有指标每秒刷新一次，让你精准了解服务器的健康状态。支持客户端和服务器端独立追踪——客户端 HUD 可同时显示本地 FPS 与来自服务器的远程 TPS/MSPT。",
    feat1Note: "性能指标每 20 个游戏刻（1 秒）刷新一次。在低 TPS 环境下刷新间隔可能延长，但这不会影响指标本身的准确性。",
    feat2Title: "2. 多引擎优化模式",
    feat2Desc: "CoreSplit 提供三种独立的优化引擎模式，适应不同的使用场景。你可以在配置文件中随时切换模式，无需重启游戏。",
    modeAuto: "自动模式 (Auto)",
    modeAutoDesc: "自动检测服务器负载和环境，在 Local 和 Online 模式间动态切换。适合大多数玩家。",
    modeAutoBest: "通用使用",
    modeLocal: "本地模式 (Local)",
    modeLocalDesc: "完全离线运行，使用本地启发式算法进行优化。延迟最低。",
    modeLocalBest: "单机/局域网",
    modeOnline: "在线模式 (Online)",
    modeOnlineDesc: "启用高级预测算法，综合分析历史性能数据给出优化建议。需要预热期，但长期效果最好。",
    modeOnlineBest: "大型服务器",
    modeTableHead1: "模式",
    modeTableHead2: "行为描述",
    modeTableHead3: "最适合",
    feat3Title: "3. 兼容性自动检测",
    feat3Desc: "CoreSplit 在启动时自动扫描已安装的模组列表，检测与 C2ME、Lithium、Starlight 等主流优化模组的潜在重叠。扫描结果以彩色标签形式在日志中显示，并自动调整内部优化路径以避免冲突。",
    compCard1Title: "C2ME 检测",
    compCard1Desc: "检测到 C2ME 时，CoreSplit 自动禁用自己的区块生成优化模块，避免双重处理。",
    compCard2Title: "Lithium 检测",
    compCard2Desc: "与 Lithium 共存时，CoreSplit 跳过 AI 路径优化和实体计算重写，交由 Lithium 处理。",
    compCard3Title: "异步检测",
    compCard3Desc: "自动识别 Async Locator 等异步模组，调整 CoreSplit 的线程池大小以避免线程竞争。",
    feat4Title: "4. 游戏内配置界面",
    feat4Desc: "配合 Mod Menu 和 YACL3，CoreSplit 提供完整的游戏内图形化配置界面。你可以通过「选项」→「模组」→「CoreSplit」进入配置面板。所有设置都带有详细的中英文工具提示（tooltip），实时显示当前值与默认值的差异。修改设置后自动保存，无需手动编辑 TOML 文件。",
    feat5Title: "5. HUD 覆盖层",
    feat5Desc: "按 <kbd>F6</kbd> 键可切换屏幕左上角的半透明性能覆盖层。覆盖层显示 TPS、MSPT、客户端 FPS 和当前优化模式。覆盖层颜色随性能状态动态变化：TPS ≥ 19.5 时为绿色，15–19.5 时为黄色，低于 15 时为红色。支持自定义位置和透明度。",
    feat6Title: "6. 网络指标同步",
    feat6Desc: "在多人游戏中，CoreSplit 服务器端会通过自定义网络包向每个客户端推送实时 TPS 和 MSPT 数据。客户端无需安装任何额外模组即可接收并显示这些指标。网络包使用 UDP 辅助通道传输，不影响游戏主线程的数据包处理。你可以在配置中关闭此功能以减少带宽占用。",
    feat7Title: "7. TOML 配置文件",
    feat7Desc: "CoreSplit 使用 TOML 格式的配置文件 (config/coresplit.toml)，语法清晰、易于编辑。首次启动时自动生成带完整注释的默认配置。修改配置文件后保存，CoreSplit 会在 3 秒内自动热重载所有设置，无需重启游戏。",
    configSample: "# CoreSplit 默认配置示例\n[engine]\nmode = \"auto\"\ntick_target = 20\nchunk_budget = 64\n\n[overlay]\nenabled = true\nposition = \"top-left\"\nopacity = 0.75\n\n[compatibility]\nauto_detect = true\nc2me_sync = true\n"
  },
  "zh-TW": {
    pageTitle: "功能特性",
    pageDesc: "全面了解 CoreSplit 為 Minecraft 26.2 帶來的效能最佳化與監控能力。",
    feat1Title: "1. 即時效能監控",
    feat1Desc: "CoreSplit 在遊戲內提供完整的即時效能儀表板。監控關鍵指標包括 <strong>TPS</strong>（每秒刻數，正常值為 20.0）、<strong>MSPT</strong>（每刻毫秒數，越低越好）以及每刻執行的<strong>區塊更新數</strong>和<strong>實體處理數</strong>。所有指標每秒重新整理一次，讓你精準了解伺服器的健康狀態。支援用戶端和伺服器端獨立追蹤——用戶端 HUD 可同時顯示本地 FPS 與來自伺服器的遠端 TPS/MSPT。",
    feat1Note: "效能指標每 20 個遊戲刻（1 秒）重新整理一次。在低 TPS 環境下重新整理間隔可能延長，但這不會影響指標本身的準確性。",
    feat2Title: "2. 多引擎最佳化模式",
    feat2Desc: "CoreSplit 提供三種獨立的最佳化引擎模式，適應不同的使用場景。你可以在設定檔中隨時切換模式，無需重啟遊戲。",
    modeAuto: "自動模式 (Auto)",
    modeAutoDesc: "自動偵測伺服器負載和環境，在 Local 和 Online 模式間動態切換。適合大多數玩家。",
    modeAutoBest: "通用使用",
    modeLocal: "本地模式 (Local)",
    modeLocalDesc: "完全離線執行，使用本地啟發式演算法進行最佳化。延遲最低。",
    modeLocalBest: "單機/區域網路",
    modeOnline: "線上模式 (Online)",
    modeOnlineDesc: "啟用進階預測演算法，綜合分析歷史效能資料給出最佳化建議。需要預熱期，但長期效果最好。",
    modeOnlineBest: "大型伺服器",
    modeTableHead1: "模式",
    modeTableHead2: "行為描述",
    modeTableHead3: "最適合",
    feat3Title: "3. 相容性自動偵測",
    feat3Desc: "CoreSplit 在啟動時自動掃描已安裝的模組列表，偵測與 C2ME、Lithium、Starlight 等主流最佳化模組的潛在重疊。掃描結果以彩色標籤形式在記錄中顯示，並自動調整內部最佳化路徑以避免衝突。",
    compCard1Title: "C2ME 偵測",
    compCard1Desc: "偵測到 C2ME 時，CoreSplit 自動停用自己的區塊生成最佳化模組，避免雙重處理。",
    compCard2Title: "Lithium 偵測",
    compCard2Desc: "與 Lithium 共存時，CoreSplit 跳過 AI 路徑最佳化和實體計算重寫，交由 Lithium 處理。",
    compCard3Title: "非同步偵測",
    compCard3Desc: "自動識別 Async Locator 等非同步模組，調整 CoreSplit 的執行緒池大小以避免執行緒競爭。",
    feat4Title: "4. 遊戲內設定介面",
    feat4Desc: "配合 Mod Menu 和 YACL3，CoreSplit 提供完整的遊戲內圖形化設定介面。你可以透過「選項」→「模組」→「CoreSplit」進入設定面板。所有設定都帶有詳細的中英文工具提示（tooltip），即時顯示目前值與預設值的差異。修改設定後自動儲存，無需手動編輯 TOML 檔案。",
    feat5Title: "5. HUD 覆蓋層",
    feat5Desc: "按 <kbd>F6</kbd> 鍵可切換螢幕左上角的半透明效能覆蓋層。覆蓋層顯示 TPS、MSPT、用戶端 FPS 和目前最佳化模式。覆蓋層顏色隨效能狀態動態變化：TPS ≥ 19.5 時為綠色，15–19.5 時為黃色，低於 15 時為紅色。支援自訂位置和透明度。",
    feat6Title: "6. 網路指標同步",
    feat6Desc: "在多人遊戲中，CoreSplit 伺服器端會透過自訂網路封包向每個用戶端推送即時 TPS 和 MSPT 資料。用戶端無需安裝任何額外模組即可接收並顯示這些指標。網路封包使用 UDP 輔助通道傳輸，不影響遊戲主執行緒的封包處理。你可以在設定中關閉此功能以減少頻寬占用。",
    feat7Title: "7. TOML 設定檔",
    feat7Desc: "CoreSplit 使用 TOML 格式的設定檔 (config/coresplit.toml)，語法清晰、易於編輯。首次啟動時自動產生帶完整註解的預設設定。修改設定檔後儲存，CoreSplit 會在 3 秒內自動熱重載所有設定，無需重啟遊戲。",
    configSample: "# CoreSplit 預設設定範例\n[engine]\nmode = \"auto\"\ntick_target = 20\nchunk_budget = 64\n\n[overlay]\nenabled = true\nposition = \"top-left\"\nopacity = 0.75\n\n[compatibility]\nauto_detect = true\nc2me_sync = true\n"
  },
  "en": {
    pageTitle: "Features",
    pageDesc: "A complete overview of the performance optimization and monitoring capabilities CoreSplit brings to Minecraft 26.2.",
    feat1Title: "1. Real-Time Performance Monitoring",
    feat1Desc: "CoreSplit provides a full real-time performance dashboard in-game. It tracks key metrics including <strong>TPS</strong> (ticks per second, target is 20.0), <strong>MSPT</strong> (milliseconds per tick, lower is better), and per-tick <strong>chunk updates</strong> and <strong>entity processing</strong> counts. All metrics refresh once per second, giving you pinpoint insight into server health. Both client and server-side tracking are supported independently — the client HUD can display local FPS alongside remote TPS/MSPT from the server.",
    feat1Note: "Performance metrics refresh every 20 game ticks (1 second). In low-TPS environments the refresh interval may stretch, but this does not affect metric accuracy.",
    feat2Title: "2. Multi-Engine Optimization Modes",
    feat2Desc: "CoreSplit offers three distinct optimization engine modes for different use cases. You can switch modes at any time in the config file without restarting the game.",
    modeAuto: "Auto Mode",
    modeAutoDesc: "Auto-detects server load and environment, dynamically switching between Local and Online modes. Best for most players.",
    modeAutoBest: "General Use",
    modeLocal: "Local Mode",
    modeLocalDesc: "Runs fully offline using local heuristic algorithms. Lowest latency.",
    modeLocalBest: "Singleplayer / LAN",
    modeOnline: "Online Mode",
    modeOnlineDesc: "Enables advanced predictive algorithms that analyze historical performance data for optimization recommendations. Requires a warm-up period, but delivers the best long-term results.",
    modeOnlineBest: "Large Servers",
    modeTableHead1: "Mode",
    modeTableHead2: "Behavior",
    modeTableHead3: "Best For",
    feat3Title: "3. Automatic Compatibility Detection",
    feat3Desc: "CoreSplit automatically scans installed mods at startup, detecting potential overlaps with popular optimization mods like C2ME, Lithium, and Starlight. Scan results are displayed in the log as color-coded tags, and internal optimization paths are automatically adjusted to avoid conflicts.",
    compCard1Title: "C2ME Detection",
    compCard1Desc: "When C2ME is detected, CoreSplit automatically disables its own chunk generation optimization module to avoid double-processing.",
    compCard2Title: "Lithium Detection",
    compCard2Desc: "When co-existing with Lithium, CoreSplit skips AI path optimization and entity calculation rewrites, letting Lithium handle them.",
    compCard3Title: "Async Detection",
    compCard3Desc: "Automatically recognizes async mods like Async Locator and adjusts CoreSplit's thread pool size to avoid thread contention.",
    feat4Title: "4. In-Game Configuration UI",
    feat4Desc: "With Mod Menu and YACL3 installed, CoreSplit offers a full in-game graphical configuration interface. Navigate to Options → Mods → CoreSplit to access the config panel. Every setting includes detailed tooltips in English, showing the current value vs. the default. Changes are auto-saved — no need to manually edit the TOML file.",
    feat5Title: "5. HUD Overlay",
    feat5Desc: "Press <kbd>F6</kbd> to toggle a semi-transparent performance overlay in the top-left corner of the screen. The overlay shows TPS, MSPT, client FPS, and the current optimization mode. The overlay color changes dynamically with performance: green when TPS ≥ 19.5, yellow between 15–19.5, and red below 15. Position and opacity are fully customizable.",
    feat6Title: "6. Network Metric Sync",
    feat6Desc: "In multiplayer, the CoreSplit server pushes real-time TPS and MSPT data to every client via custom network packets. Clients do not need any additional mods to receive and display these metrics. Packets are transmitted over a UDP auxiliary channel, so they don't interfere with the main thread's packet processing. You can disable this feature in the config to reduce bandwidth usage.",
    feat7Title: "7. TOML Config File",
    feat7Desc: "CoreSplit uses a TOML-format config file (config/coresplit.toml) with clean syntax that is easy to edit. A fully annotated default config is auto-generated on first launch. Save changes to the config file and CoreSplit hot-reloads all settings within 3 seconds — no restart needed.",
    configSample: "# CoreSplit default config example\n[engine]\nmode = \"auto\"\ntick_target = 20\nchunk_budget = 64\n\n[overlay]\nenabled = true\nposition = \"top-left\"\nopacity = 0.75\n\n[compatibility]\nauto_detect = true\nc2me_sync = true\n"
  }
};

window.renderPage = function() {
  var p = I18N.features[getLang()] || I18N.features['en'];

  var html = '';

  // Page header
  html += '<div class="page-header"><h1>' + p.pageTitle + '</h1><p>' + p.pageDesc + '</p></div>';
  html += '<div class="page">';

  // Feature 1: Real-Time Monitoring
  html += '<h2>' + p.feat1Title + '</h2>';
  html += '<p>' + p.feat1Desc + '</p>';
  html += '<div class="alert alert-info">' + p.feat1Note + '</div>';

  // Feature 2: Engine Modes
  html += '<h2>' + p.feat2Title + '</h2>';
  html += '<p>' + p.feat2Desc + '</p>';
  html += '<div class="table-wrap"><table>';
  html += '<thead><tr><th>' + p.modeTableHead1 + '</th><th>' + p.modeTableHead2 + '</th><th>' + p.modeTableHead3 + '</th></tr></thead>';
  html += '<tbody>';
  html += '<tr><td><strong>' + p.modeAuto + '</strong></td><td>' + p.modeAutoDesc + '</td><td>' + p.modeAutoBest + '</td></tr>';
  html += '<tr><td><strong>' + p.modeLocal + '</strong></td><td>' + p.modeLocalDesc + '</td><td>' + p.modeLocalBest + '</td></tr>';
  html += '<tr><td><strong>' + p.modeOnline + '</strong></td><td>' + p.modeOnlineDesc + '</td><td>' + p.modeOnlineBest + '</td></tr>';
  html += '</tbody></table></div>';

  // Feature 3: Compatibility Detection
  html += '<h2>' + p.feat3Title + '</h2>';
  html += '<p>' + p.feat3Desc + '</p>';
  html += '<div class="card-grid">';
  html += '<div class="card"><h3>' + p.compCard1Title + '</h3><p>' + p.compCard1Desc + '</p></div>';
  html += '<div class="card"><h3>' + p.compCard2Title + '</h3><p>' + p.compCard2Desc + '</p></div>';
  html += '<div class="card"><h3>' + p.compCard3Title + '</h3><p>' + p.compCard3Desc + '</p></div>';
  html += '</div>';

  // Feature 4: In-Game Config
  html += '<h2>' + p.feat4Title + '</h2>';
  html += '<p>' + p.feat4Desc + '</p>';

  // Feature 5: HUD
  html += '<h2>' + p.feat5Title + '</h2>';
  html += '<p>' + p.feat5Desc + '</p>';

  // Feature 6: Network Sync
  html += '<h2>' + p.feat6Title + '</h2>';
  html += '<p>' + p.feat6Desc + '</p>';

  // Feature 7: TOML Config
  html += '<h2>' + p.feat7Title + '</h2>';
  html += '<p>' + p.feat7Desc + '</p>';
  html += '<pre><code>' + p.configSample + '</code></pre>';

  html += '</div>'; // .page

  document.getElementById('content-root').innerHTML = html;
};
