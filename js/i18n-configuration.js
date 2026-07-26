/* CoreSplit Wiki — i18n: Configuration */

I18N.configuration = {
  "zh-CN": {
    pageTitle: "配置参考",
    pageDesc: "CoreSplit 所有配置选项的详细说明、默认值与推荐设置。",
    configLoc: "配置文件位置",
    configPath: "config/coresplit.toml",
    configAuto: "CoreSplit 会在首次启动时自动生成此文件。如果文件已损坏或被删除，只需重启游戏即可重新生成完整的默认配置文件。",
    configWarn: "⚠ 不建议在游戏运行期间使用外部编辑器修改配置文件。如需修改，请在游戏内通过 Mod Menu 界面操作，或先关闭游戏再编辑。尽管 CoreSplit 支持热重载，外部编辑器可能因编码问题引发解析错误。",
    configRef: "配置参考",
    engineSection: "[engine] — 引擎设置",
    engineModeName: "mode",
    engineModeDesc: "优化引擎模式。可选值：auto（自动）、local（本地）、online（在线）。",
    engineModeDefault: "auto",
    engineTickTargetName: "tick_target",
    engineTickTargetDesc: "目标 TPS。引擎会尽量将 TPS 维持在此值以上。降低此值可减少 CPU 压力。范围：10–20。",
    engineTickTargetDefault: "20",
    engineChunkBudgetName: "chunk_budget",
    engineChunkBudgetDesc: "每刻允许的最大区块处理数。数值越低，单刻耗时越少，但可能导致区块加载延迟。范围：16–256。",
    engineChunkBudgetDefault: "64",
    engineEntityBudgetName: "entity_budget",
    engineEntityBudgetDesc: "每刻允许的最大实体处理数。超出预算的实体会推迟到下一刻处理。范围：32–512。",
    engineEntityBudgetDefault: "128",
    overlaySection: "[overlay] — 覆盖层设置",
    overlayEnabledName: "enabled",
    overlayEnabledDesc: "是否启用 F6 HUD 覆盖层。",
    overlayEnabledDefault: "true",
    overlayPositionName: "position",
    overlayPositionDesc: "覆盖层在屏幕上的位置。可选值：top-left、top-right、bottom-left、bottom-right。",
    overlayPositionDefault: "top-left",
    overlayOpacityName: "opacity",
    overlayOpacityDesc: "覆盖层透明度。0.0 为完全透明，1.0 为完全不透明。",
    overlayOpacityDefault: "0.75",
    overlayScaleName: "scale",
    overlayScaleDesc: "覆盖层文字缩放比例。0.5–2.0。",
    overlayScaleDefault: "1.0",
    compatSection: "[compatibility] — 兼容性设置",
    compatAutoDetectName: "auto_detect",
    compatAutoDetectDesc: "启动时自动扫描模组列表以检测潜在冲突。禁用后需手动配置下方各项。",
    compatAutoDetectDefault: "true",
    compatC2meSyncName: "c2me_sync",
    compatC2meSyncDesc: "检测到 C2ME 时自动同步区块生成设置。仅在 auto_detect 为 true 时生效。",
    compatC2meSyncDefault: "true",
    compatLithiumSyncName: "lithium_sync",
    compatLithiumSyncDesc: "检测到 Lithium 时调整 AI 和实体优化路径。",
    compatLithiumSyncDefault: "true",
    compatThreadModelName: "thread_model",
    compatThreadModelDesc: "线程模型。可选值：shared（共享线程池）、isolated（独立线程）、adaptive（自适应）。adaptive 会根据兼容性自动选择。",
    compatThreadModelDefault: "adaptive",
    networkSection: "[network] — 网络设置",
    networkMetricsSyncName: "metrics_sync",
    networkMetricsSyncDesc: "服务器向客户端推送性能指标。关闭可节省带宽。",
    networkMetricsSyncDefault: "true",
    networkSyncIntervalName: "sync_interval",
    networkSyncIntervalDesc: "性能指标推送间隔（游戏刻）。范围：10–200。",
    networkSyncIntervalDefault: "20",
    networkCompressName: "compress",
    networkCompressDesc: "是否压缩网络包。启用后带宽占用更低但略微增加 CPU 开销。",
    networkCompressDefault: "true",
    configTableHead1: "选项",
    configTableHead2: "说明",
    configTableHead3: "默认值",
    fullConfig: "完整默认配置",
    fullConfigCode: "# CoreSplit 完整默认配置\n# 路径: config/coresplit.toml\n\n[engine]\n# 优化引擎模式: auto, local, online\nmode = \"auto\"\n# 目标 TPS (10-20)\ntick_target = 20\n# 每刻区块处理预算 (16-256)\nchunk_budget = 64\n# 每刻实体处理预算 (32-512)\nentity_budget = 128\n\n[overlay]\n# 启用 HUD 覆盖层\nenabled = true\n# 覆盖层位置: top-left, top-right, bottom-left, bottom-right\nposition = \"top-left\"\n# 透明度 (0.0-1.0)\nopacity = 0.75\n# 缩放比例 (0.5-2.0)\nscale = 1.0\n\n[compatibility]\n# 自动检测模组兼容性\nauto_detect = true\n# 与 C2ME 同步\nc2me_sync = true\n# 与 Lithium 同步\nlithium_sync = true\n# 线程模型: shared, isolated, adaptive\nthread_model = \"adaptive\"\n\n[network]\n# 启用指标同步\nmetrics_sync = true\n# 同步间隔（游戏刻）\nsync_interval = 20\n# 压缩网络包\ncompress = true\n",
    inGameConfig: "游戏内配置",
    igStep1: "确保已安装 Mod Menu 和 YACL3。",
    igStep2: "在游戏主菜单点击「选项」→「模组」。",
    igStep3: "在模组列表中找到 CoreSplit，点击配置图标（齿轮）。",
    igStep4: "在 YACL3 界面中调整各项设置。每个选项都有中文提示说明。修改即时保存。",
    hotReload: "✅ CoreSplit 支持热重载。修改 config/coresplit.toml 并保存后，所有设置会在 3 秒内自动生效，无需重启游戏。",
    resetConfig: "重置配置",
    resetDesc: "如需恢复默认配置，删除 config/coresplit.toml 文件后重启游戏。CoreSplit 会自动生成新的默认配置文件。你也可以在游戏内的 YACL3 界面中点击「重置为默认值」按钮。"
  },
  "zh-TW": {
    pageTitle: "設定參考",
    pageDesc: "CoreSplit 所有設定選項的詳細說明、預設值與推薦設定。",
    configLoc: "設定檔位置",
    configPath: "config/coresplit.toml",
    configAuto: "CoreSplit 會在首次啟動時自動產生此檔案。如果檔案已損壞或被刪除，只需重啟遊戲即可重新產生完整的預設設定檔。",
    configWarn: "⚠ 不建議在遊戲執行期間使用外部編輯器修改設定檔。如需修改，請在遊戲內透過 Mod Menu 介面操作，或先關閉遊戲再編輯。儘管 CoreSplit 支援熱重載，外部編輯器可能因編碼問題引發解析錯誤。",
    configRef: "設定參考",
    engineSection: "[engine] — 引擎設定",
    engineModeName: "mode",
    engineModeDesc: "最佳化引擎模式。可選值：auto（自動）、local（本地）、online（線上）。",
    engineModeDefault: "auto",
    engineTickTargetName: "tick_target",
    engineTickTargetDesc: "目標 TPS。引擎會盡量將 TPS 維持在此值以上。降低此值可減少 CPU 壓力。範圍：10–20。",
    engineTickTargetDefault: "20",
    engineChunkBudgetName: "chunk_budget",
    engineChunkBudgetDesc: "每刻允許的最大區塊處理數。數值越低，單刻耗時越少，但可能導致區塊載入延遲。範圍：16–256。",
    engineChunkBudgetDefault: "64",
    engineEntityBudgetName: "entity_budget",
    engineEntityBudgetDesc: "每刻允許的最大實體處理數。超出預算的實體會推遲到下一刻處理。範圍：32–512。",
    engineEntityBudgetDefault: "128",
    overlaySection: "[overlay] — 覆蓋層設定",
    overlayEnabledName: "enabled",
    overlayEnabledDesc: "是否啟用 F6 HUD 覆蓋層。",
    overlayEnabledDefault: "true",
    overlayPositionName: "position",
    overlayPositionDesc: "覆蓋層在螢幕上的位置。可選值：top-left、top-right、bottom-left、bottom-right。",
    overlayPositionDefault: "top-left",
    overlayOpacityName: "opacity",
    overlayOpacityDesc: "覆蓋層透明度。0.0 為完全透明，1.0 為完全不透明。",
    overlayOpacityDefault: "0.75",
    overlayScaleName: "scale",
    overlayScaleDesc: "覆蓋層文字縮放比例。0.5–2.0。",
    overlayScaleDefault: "1.0",
    compatSection: "[compatibility] — 相容性設定",
    compatAutoDetectName: "auto_detect",
    compatAutoDetectDesc: "啟動時自動掃描模組列表以偵測潛在衝突。停用後需手動設定下方各項。",
    compatAutoDetectDefault: "true",
    compatC2meSyncName: "c2me_sync",
    compatC2meSyncDesc: "偵測到 C2ME 時自動同步區塊生成設定。僅在 auto_detect 為 true 時生效。",
    compatC2meSyncDefault: "true",
    compatLithiumSyncName: "lithium_sync",
    compatLithiumSyncDesc: "偵測到 Lithium 時調整 AI 和實體最佳化路徑。",
    compatLithiumSyncDefault: "true",
    compatThreadModelName: "thread_model",
    compatThreadModelDesc: "執行緒模型。可選值：shared（共享執行緒池）、isolated（獨立執行緒）、adaptive（自適應）。adaptive 會根據相容性自動選擇。",
    compatThreadModelDefault: "adaptive",
    networkSection: "[network] — 網路設定",
    networkMetricsSyncName: "metrics_sync",
    networkMetricsSyncDesc: "伺服器向用戶端推送效能指標。關閉可節省頻寬。",
    networkMetricsSyncDefault: "true",
    networkSyncIntervalName: "sync_interval",
    networkSyncIntervalDesc: "效能指標推送間隔（遊戲刻）。範圍：10–200。",
    networkSyncIntervalDefault: "20",
    networkCompressName: "compress",
    networkCompressDesc: "是否壓縮網路封包。啟用後頻寬占用更低但略微增加 CPU 開銷。",
    networkCompressDefault: "true",
    configTableHead1: "選項",
    configTableHead2: "說明",
    configTableHead3: "預設值",
    fullConfig: "完整預設設定",
    fullConfigCode: "# CoreSplit 完整預設設定\n# 路徑: config/coresplit.toml\n\n[engine]\n# 最佳化引擎模式: auto, local, online\nmode = \"auto\"\n# 目標 TPS (10-20)\ntick_target = 20\n# 每刻區塊處理預算 (16-256)\nchunk_budget = 64\n# 每刻實體處理預算 (32-512)\nentity_budget = 128\n\n[overlay]\n# 啟用 HUD 覆蓋層\nenabled = true\n# 覆蓋層位置: top-left, top-right, bottom-left, bottom-right\nposition = \"top-left\"\n# 透明度 (0.0-1.0)\nopacity = 0.75\n# 縮放比例 (0.5-2.0)\nscale = 1.0\n\n[compatibility]\n# 自動偵測模組相容性\nauto_detect = true\n# 與 C2ME 同步\nc2me_sync = true\n# 與 Lithium 同步\nlithium_sync = true\n# 執行緒模型: shared, isolated, adaptive\nthread_model = \"adaptive\"\n\n[network]\n# 啟用指標同步\nmetrics_sync = true\n# 同步間隔（遊戲刻）\nsync_interval = 20\n# 壓縮網路封包\ncompress = true\n",
    inGameConfig: "遊戲內設定",
    igStep1: "確保已安裝 Mod Menu 和 YACL3。",
    igStep2: "在遊戲主選單點擊「選項」→「模組」。",
    igStep3: "在模組列表中找到 CoreSplit，點擊設定圖示（齒輪）。",
    igStep4: "在 YACL3 介面中調整各項設定。每個選項都有中文提示說明。修改即時儲存。",
    hotReload: "✅ CoreSplit 支援熱重載。修改 config/coresplit.toml 並儲存後，所有設定會在 3 秒內自動生效，無需重啟遊戲。",
    resetConfig: "重設設定",
    resetDesc: "如需恢復預設設定，刪除 config/coresplit.toml 檔案後重啟遊戲。CoreSplit 會自動產生新的預設設定檔。你也可以在遊戲內的 YACL3 介面中點擊「重設為預設值」按鈕。"
  },
  "en": {
    pageTitle: "Configuration Reference",
    pageDesc: "Detailed explanation of every CoreSplit config option, including defaults and recommended values.",
    configLoc: "Config File Location",
    configPath: "config/coresplit.toml",
    configAuto: "CoreSplit auto-generates this file on first launch. If the file becomes corrupted or is deleted, simply restart the game to regenerate a fresh default config.",
    configWarn: "⚠ Editing the config file with an external editor while the game is running is not recommended. Use the in-game Mod Menu UI instead, or close the game first. Although CoreSplit supports hot-reloading, external editors may cause parse errors due to encoding issues.",
    configRef: "Configuration Reference",
    engineSection: "[engine] — Engine Settings",
    engineModeName: "mode",
    engineModeDesc: "Optimization engine mode. Options: auto, local, online.",
    engineModeDefault: "auto",
    engineTickTargetName: "tick_target",
    engineTickTargetDesc: "Target TPS. The engine will try to keep TPS at or above this value. Lowering it reduces CPU pressure. Range: 10–20.",
    engineTickTargetDefault: "20",
    engineChunkBudgetName: "chunk_budget",
    engineChunkBudgetDesc: "Maximum chunk operations per tick. Lower values mean less per-tick time but may cause chunk loading delays. Range: 16–256.",
    engineChunkBudgetDefault: "64",
    engineEntityBudgetName: "entity_budget",
    engineEntityBudgetDesc: "Maximum entity operations per tick. Entities exceeding the budget are deferred to the next tick. Range: 32–512.",
    engineEntityBudgetDefault: "128",
    overlaySection: "[overlay] — Overlay Settings",
    overlayEnabledName: "enabled",
    overlayEnabledDesc: "Whether to enable the F6 HUD overlay.",
    overlayEnabledDefault: "true",
    overlayPositionName: "position",
    overlayPositionDesc: "Overlay position on screen. Options: top-left, top-right, bottom-left, bottom-right.",
    overlayPositionDefault: "top-left",
    overlayOpacityName: "opacity",
    overlayOpacityDesc: "Overlay opacity. 0.0 is fully transparent, 1.0 is fully opaque.",
    overlayOpacityDefault: "0.75",
    overlayScaleName: "scale",
    overlayScaleDesc: "Overlay text scale. 0.5–2.0.",
    overlayScaleDefault: "1.0",
    compatSection: "[compatibility] — Compatibility Settings",
    compatAutoDetectName: "auto_detect",
    compatAutoDetectDesc: "Auto-scan the mod list at startup to detect potential conflicts. If disabled, you must manually configure the options below.",
    compatAutoDetectDefault: "true",
    compatC2meSyncName: "c2me_sync",
    compatC2meSyncDesc: "Automatically sync chunk generation settings when C2ME is detected. Only takes effect when auto_detect is true.",
    compatC2meSyncDefault: "true",
    compatLithiumSyncName: "lithium_sync",
    compatLithiumSyncDesc: "Adjust AI and entity optimization paths when Lithium is detected.",
    compatLithiumSyncDefault: "true",
    compatThreadModelName: "thread_model",
    compatThreadModelDesc: "Thread model. Options: shared (shared thread pool), isolated (dedicated threads), adaptive (auto-select based on compatibility).",
    compatThreadModelDefault: "adaptive",
    networkSection: "[network] — Network Settings",
    networkMetricsSyncName: "metrics_sync",
    networkMetricsSyncDesc: "Push performance metrics from server to clients. Disable to save bandwidth.",
    networkMetricsSyncDefault: "true",
    networkSyncIntervalName: "sync_interval",
    networkSyncIntervalDesc: "Performance metric push interval (game ticks). Range: 10–200.",
    networkSyncIntervalDefault: "20",
    networkCompressName: "compress",
    networkCompressDesc: "Whether to compress network packets. Saves bandwidth at a slight CPU cost.",
    networkCompressDefault: "true",
    configTableHead1: "Option",
    configTableHead2: "Description",
    configTableHead3: "Default",
    fullConfig: "Full Default Config",
    fullConfigCode: "# CoreSplit full default config\n# Path: config/coresplit.toml\n\n[engine]\n# Optimization engine mode: auto, local, online\nmode = \"auto\"\n# Target TPS (10-20)\ntick_target = 20\n# Chunk processing budget per tick (16-256)\nchunk_budget = 64\n# Entity processing budget per tick (32-512)\nentity_budget = 128\n\n[overlay]\n# Enable HUD overlay\nenabled = true\n# Overlay position: top-left, top-right, bottom-left, bottom-right\nposition = \"top-left\"\n# Opacity (0.0-1.0)\nopacity = 0.75\n# Text scale (0.5-2.0)\nscale = 1.0\n\n[compatibility]\n# Auto-detect mod compatibility\nauto_detect = true\n# Sync with C2ME\nc2me_sync = true\n# Sync with Lithium\nlithium_sync = true\n# Thread model: shared, isolated, adaptive\nthread_model = \"adaptive\"\n\n[network]\n# Enable metric sync\nmetrics_sync = true\n# Sync interval (game ticks)\nsync_interval = 20\n# Compress network packets\ncompress = true\n",
    inGameConfig: "In-Game Configuration",
    igStep1: "Make sure Mod Menu and YACL3 are installed.",
    igStep2: "From the main menu, click Options → Mods.",
    igStep3: "Find CoreSplit in the mod list and click the config icon (gear).",
    igStep4: "Adjust settings in the YACL3 UI. Every option has an English tooltip. Changes are saved instantly.",
    hotReload: "✅ CoreSplit supports hot-reloading. After editing and saving config/coresplit.toml, all settings take effect within 3 seconds — no restart needed.",
    resetConfig: "Resetting Configuration",
    resetDesc: "To restore default settings, delete config/coresplit.toml and restart the game. CoreSplit will auto-generate a fresh default config. You can also click the \"Reset to Defaults\" button in the in-game YACL3 UI."
  }
};

window.renderPage = function() {
  var p = I18N.configuration[getLang()] || I18N.configuration['en'];

  var html = '';

  // Page header
  html += '<div class="page-header"><h1>' + p.pageTitle + '</h1><p>' + p.pageDesc + '</p></div>';
  html += '<div class="page">';

  // Config file location
  html += '<h2>' + p.configLoc + '</h2>';
  html += '<p><code>' + p.configPath + '</code></p>';
  html += '<p>' + p.configAuto + '</p>';
  html += '<div class="alert alert-warn">' + p.configWarn + '</div>';

  // Configuration Reference
  html += '<h2>' + p.configRef + '</h2>';

  // Engine section
  html += '<h3>' + p.engineSection + '</h3>';
  html += '<div class="table-wrap"><table>';
  html += '<thead><tr><th>' + p.configTableHead1 + '</th><th>' + p.configTableHead2 + '</th><th>' + p.configTableHead3 + '</th></tr></thead>';
  html += '<tbody>';
  html += '<tr><td><code>' + p.engineModeName + '</code></td><td>' + p.engineModeDesc + '</td><td><code>' + p.engineModeDefault + '</code></td></tr>';
  html += '<tr><td><code>' + p.engineTickTargetName + '</code></td><td>' + p.engineTickTargetDesc + '</td><td><code>' + p.engineTickTargetDefault + '</code></td></tr>';
  html += '<tr><td><code>' + p.engineChunkBudgetName + '</code></td><td>' + p.engineChunkBudgetDesc + '</td><td><code>' + p.engineChunkBudgetDefault + '</code></td></tr>';
  html += '<tr><td><code>' + p.engineEntityBudgetName + '</code></td><td>' + p.engineEntityBudgetDesc + '</td><td><code>' + p.engineEntityBudgetDefault + '</code></td></tr>';
  html += '</tbody></table></div>';

  // Overlay section
  html += '<h3>' + p.overlaySection + '</h3>';
  html += '<div class="table-wrap"><table>';
  html += '<thead><tr><th>' + p.configTableHead1 + '</th><th>' + p.configTableHead2 + '</th><th>' + p.configTableHead3 + '</th></tr></thead>';
  html += '<tbody>';
  html += '<tr><td><code>' + p.overlayEnabledName + '</code></td><td>' + p.overlayEnabledDesc + '</td><td><code>' + p.overlayEnabledDefault + '</code></td></tr>';
  html += '<tr><td><code>' + p.overlayPositionName + '</code></td><td>' + p.overlayPositionDesc + '</td><td><code>' + p.overlayPositionDefault + '</code></td></tr>';
  html += '<tr><td><code>' + p.overlayOpacityName + '</code></td><td>' + p.overlayOpacityDesc + '</td><td><code>' + p.overlayOpacityDefault + '</code></td></tr>';
  html += '<tr><td><code>' + p.overlayScaleName + '</code></td><td>' + p.overlayScaleDesc + '</td><td><code>' + p.overlayScaleDefault + '</code></td></tr>';
  html += '</tbody></table></div>';

  // Compatibility section
  html += '<h3>' + p.compatSection + '</h3>';
  html += '<div class="table-wrap"><table>';
  html += '<thead><tr><th>' + p.configTableHead1 + '</th><th>' + p.configTableHead2 + '</th><th>' + p.configTableHead3 + '</th></tr></thead>';
  html += '<tbody>';
  html += '<tr><td><code>' + p.compatAutoDetectName + '</code></td><td>' + p.compatAutoDetectDesc + '</td><td><code>' + p.compatAutoDetectDefault + '</code></td></tr>';
  html += '<tr><td><code>' + p.compatC2meSyncName + '</code></td><td>' + p.compatC2meSyncDesc + '</td><td><code>' + p.compatC2meSyncDefault + '</code></td></tr>';
  html += '<tr><td><code>' + p.compatLithiumSyncName + '</code></td><td>' + p.compatLithiumSyncDesc + '</td><td><code>' + p.compatLithiumSyncDefault + '</code></td></tr>';
  html += '<tr><td><code>' + p.compatThreadModelName + '</code></td><td>' + p.compatThreadModelDesc + '</td><td><code>' + p.compatThreadModelDefault + '</code></td></tr>';
  html += '</tbody></table></div>';

  // Network section
  html += '<h3>' + p.networkSection + '</h3>';
  html += '<div class="table-wrap"><table>';
  html += '<thead><tr><th>' + p.configTableHead1 + '</th><th>' + p.configTableHead2 + '</th><th>' + p.configTableHead3 + '</th></tr></thead>';
  html += '<tbody>';
  html += '<tr><td><code>' + p.networkMetricsSyncName + '</code></td><td>' + p.networkMetricsSyncDesc + '</td><td><code>' + p.networkMetricsSyncDefault + '</code></td></tr>';
  html += '<tr><td><code>' + p.networkSyncIntervalName + '</code></td><td>' + p.networkSyncIntervalDesc + '</td><td><code>' + p.networkSyncIntervalDefault + '</code></td></tr>';
  html += '<tr><td><code>' + p.networkCompressName + '</code></td><td>' + p.networkCompressDesc + '</td><td><code>' + p.networkCompressDefault + '</code></td></tr>';
  html += '</tbody></table></div>';

  // Full default config
  html += '<h2>' + p.fullConfig + '</h2>';
  html += '<pre><code>' + p.fullConfigCode + '</code></pre>';

  // In-game configuration
  html += '<h2>' + p.inGameConfig + '</h2>';
  html += '<ol class="steps">';
  html += '<li>' + p.igStep1 + '</li>';
  html += '<li>' + p.igStep2 + '</li>';
  html += '<li>' + p.igStep3 + '</li>';
  html += '<li>' + p.igStep4 + '</li>';
  html += '</ol>';
  html += '<div class="alert alert-success">' + p.hotReload + '</div>';

  // Resetting config
  html += '<h2>' + p.resetConfig + '</h2>';
  html += '<p>' + p.resetDesc + '</p>';

  html += '</div>'; // .page

  document.getElementById('content-root').innerHTML = html;
};
