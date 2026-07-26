/* CoreSplit Wiki — i18n: Compatibility */

I18N.compatibility = {
  "zh-CN": {
    pageTitle: "模组兼容性",
    pageDesc: "了解 CoreSplit 与其他 Minecraft 优化模组的交互关系、风险等级与推荐配置。",
    knownInteractions: "已知模组交互",
    compatIntro: "CoreSplit 在启动时会自动扫描已安装的模组列表，检测与主流优化模组的重叠区域。以下表格总结了最常见的兼容性交互。CoreSplit 会自动调整内部模块以避免冲突，但有时手动调整配置能获得更好的效果。",
    compatTableHead1: "模组",
    compatTableHead2: "重叠区域",
    compatTableHead3: "风险等级",
    compatTableHead4: "推荐设置",
    compatC2meName: "C2ME",
    compatC2meOverlap: "区块生成与加载优化",
    compatC2meRisk: "中",
    compatC2meRec: "保持 auto_detect 启用，CoreSplit 会自动禁用区块优化",
    compatLithiumName: "Lithium",
    compatLithiumOverlap: "AI 路径、实体计算、物理引擎",
    compatLithiumRisk: "低",
    compatLithiumRec: "默认配置即可共存，CoreSplit 自动让步",
    compatAsyncName: "Async Locator",
    compatAsyncOverlap: "异步线程池管理",
    compatAsyncRisk: "中",
    compatAsyncRec: "建议将 thread_model 设为 shared 以避免线程竞争",
    compatSodiumName: "Sodium",
    compatSodiumOverlap: "无直接重叠（渲染引擎独立）",
    compatSodiumRisk: "安全",
    compatSodiumRec: "可作为最佳搭档组合使用",
    compatPhosphorName: "Phosphor / Starlight",
    compatPhosphorOverlap: "光照引擎优化",
    compatPhosphorRisk: "低",
    compatPhosphorRec: "CoreSplit 不会触碰光照系统，完全兼容",
    compatFerriteName: "FerriteCore",
    compatFerriteOverlap: "内存管理",
    compatFerriteRisk: "安全",
    compatFerriteRec: "互补关系，建议同时安装以降低内存占用",
    badgeOk: "安全",
    badgeWarn: "中",
    compatModes: "兼容模式详解",
    compatibleLabel: "✅ 兼容模式",
    compatibleDesc: "CoreSplit 检测到某个模组后，会自动禁用自身与之重叠的功能模块。这是最安全的处理方式——你保留了该模组提供的优化，同时 CoreSplit 在其他领域继续工作。日志中会显示类似 <code>[CoreSplit] Compat: C2ME detected — chunk module disabled</code> 的消息。",
    warnLabel: "⚠ 警告模式",
    warnDesc: "当 CoreSplit 检测到潜在冲突但无法自动解决时，会在日志中输出警告信息。此时两项优化可能同时生效，导致性能下降或不可预期行为。建议手动查看日志，根据警告内容在配置文件中调整相关设置，或考虑移除其中一个模组。",
    disabledLabel: "❌ 禁用模式",
    disabledDesc: "如果 CoreSplit 检测到已知不兼容的模组组合，部分功能会被强制禁用。这通常发生在模组版本过旧或使用了不支持的 Fork 版本时。日志中会以红色文字明确指示被禁用的模块名称。升级相关模组到最新版本通常可以解决此问题。",
    startupScan: "理解启动扫描",
    startupScanDesc: "每次启动游戏时，CoreSplit 都会执行一次完整的模组兼容性扫描。扫描结果会在日志中输出，格式如下：",
    startupScanSample: "[CoreSplit] ========================================\n[CoreSplit] Compatibility Scan — 14 mods detected\n[CoreSplit] ✓ Sodium        — No overlap     (render)\n[CoreSplit] ✓ FerriteCore   — No overlap     (memory)\n[CoreSplit] ⚠ C2ME          — Overlap found  (chunk)\n[CoreSplit]   → Disabling CoreSplit chunk optimizer\n[CoreSplit] ✓ Lithium       — Coexisting     (ai)\n[CoreSplit]   → AI rewrite skipped, using Lithium\n[CoreSplit] ========================================\n[CoreSplit] Scan complete. 2 overlaps handled.\n",
    safeCombos: "安全组合",
    safeCombosDesc: "以下模组与 CoreSplit 经测试完全兼容，可以放心同时安装：",
    safe1: "Sodium + Iris Shaders — 渲染管线完全独立",
    safe2: "FerriteCore — 互补的内存优化",
    safe3: "Lithium — 经过深度兼容测试的 AI 优化搭档",
    safe4: "Mod Menu + YACL3 — CoreSplit 的推荐配置界面搭档",
    safe5: "Carpet — 技术性模组，无性能系统重叠",
    safe6: "LazyDFU — 启动优化，与 CoreSplit 运行时无交互",
    reportIssues: "报告兼容性问题",
    reportIntro: "如果你发现了新的兼容性问题，请通过以下渠道报告。提供的信息越详细，我们越能快速定位和修复。",
    report1: "CoreSplit 版本和 MC 版本",
    report2: "完整模组列表（可使用 Mod Menu 导出）",
    report3: "latest.log 日志文件（位于 .minecraft/logs/）",
    report4: "问题描述：具体的卡顿表现、崩溃堆栈或异常行为",
    report5: "复现步骤：如何稳定触发该兼容性问题"
  },
  "zh-TW": {
    pageTitle: "模組相容性",
    pageDesc: "了解 CoreSplit 與其他 Minecraft 最佳化模組的互動關係、風險等級與推薦設定。",
    knownInteractions: "已知模組互動",
    compatIntro: "CoreSplit 在啟動時會自動掃描已安裝的模組列表，偵測與主流最佳化模組的重疊區域。以下表格總結了最常見的相容性互動。CoreSplit 會自動調整內部模組以避免衝突，但有時手動調整設定能獲得更好的效果。",
    compatTableHead1: "模組",
    compatTableHead2: "重疊區域",
    compatTableHead3: "風險等級",
    compatTableHead4: "推薦設定",
    compatC2meName: "C2ME",
    compatC2meOverlap: "區塊生成與載入最佳化",
    compatC2meRisk: "中",
    compatC2meRec: "保持 auto_detect 啟用，CoreSplit 會自動停用區塊最佳化",
    compatLithiumName: "Lithium",
    compatLithiumOverlap: "AI 路徑、實體計算、物理引擎",
    compatLithiumRisk: "低",
    compatLithiumRec: "預設設定即可共存，CoreSplit 自動讓步",
    compatAsyncName: "Async Locator",
    compatAsyncOverlap: "非同步執行緒池管理",
    compatAsyncRisk: "中",
    compatAsyncRec: "建議將 thread_model 設為 shared 以避免執行緒競爭",
    compatSodiumName: "Sodium",
    compatSodiumOverlap: "無直接重疊（繪製引擎獨立）",
    compatSodiumRisk: "安全",
    compatSodiumRec: "可作為最佳搭檔組合使用",
    compatPhosphorName: "Phosphor / Starlight",
    compatPhosphorOverlap: "光照引擎最佳化",
    compatPhosphorRisk: "低",
    compatPhosphorRec: "CoreSplit 不會觸碰光照系統，完全相容",
    compatFerriteName: "FerriteCore",
    compatFerriteOverlap: "記憶體管理",
    compatFerriteRisk: "安全",
    compatFerriteRec: "互補關係，建議同時安裝以降低記憶體占用",
    badgeOk: "安全",
    badgeWarn: "中",
    compatModes: "相容模式詳解",
    compatibleLabel: "✅ 相容模式",
    compatibleDesc: "CoreSplit 偵測到某個模組後，會自動停用自身與之重疊的功能模組。這是最安全的處理方式——你保留了該模組提供的最佳化，同時 CoreSplit 在其他領域繼續工作。記錄中會顯示類似 <code>[CoreSplit] Compat: C2ME detected — chunk module disabled</code> 的訊息。",
    warnLabel: "⚠ 警告模式",
    warnDesc: "當 CoreSplit 偵測到潛在衝突但無法自動解決時，會在記錄中輸出警告資訊。此時兩項最佳化可能同時生效，導致效能下降或不可預期行為。建議手動檢視記錄，根據警告內容在設定檔中調整相關設定，或考慮移除其中一個模組。",
    disabledLabel: "❌ 停用模式",
    disabledDesc: "如果 CoreSplit 偵測到已知不相容的模組組合，部分功能會被強制停用。這通常發生在模組版本過舊或使用了不支援的 Fork 版本時。記錄中會以紅色文字明確指示被停用的模組名稱。升級相關模組到最新版本通常可以解決此問題。",
    startupScan: "理解啟動掃描",
    startupScanDesc: "每次啟動遊戲時，CoreSplit 都會執行一次完整的模組相容性掃描。掃描結果會在記錄中輸出，格式如下：",
    startupScanSample: "[CoreSplit] ========================================\n[CoreSplit] Compatibility Scan — 14 mods detected\n[CoreSplit] ✓ Sodium        — No overlap     (render)\n[CoreSplit] ✓ FerriteCore   — No overlap     (memory)\n[CoreSplit] ⚠ C2ME          — Overlap found  (chunk)\n[CoreSplit]   → Disabling CoreSplit chunk optimizer\n[CoreSplit] ✓ Lithium       — Coexisting     (ai)\n[CoreSplit]   → AI rewrite skipped, using Lithium\n[CoreSplit] ========================================\n[CoreSplit] Scan complete. 2 overlaps handled.\n",
    safeCombos: "安全組合",
    safeCombosDesc: "以下模組與 CoreSplit 經測試完全相容，可以放心同時安裝：",
    safe1: "Sodium + Iris Shaders — 繪製管線完全獨立",
    safe2: "FerriteCore — 互補的記憶體最佳化",
    safe3: "Lithium — 經過深度相容測試的 AI 最佳化搭檔",
    safe4: "Mod Menu + YACL3 — CoreSplit 的推薦設定介面搭檔",
    safe5: "Carpet — 技術性模組，無效能系統重疊",
    safe6: "LazyDFU — 啟動最佳化，與 CoreSplit 執行時無互動",
    reportIssues: "回報相容性問題",
    reportIntro: "如果你發現了新的相容性問題，請透過以下管道回報。提供的資訊越詳細，我們越能快速定位和修復。",
    report1: "CoreSplit 版本和 MC 版本",
    report2: "完整模組列表（可使用 Mod Menu 匯出）",
    report3: "latest.log 記錄檔案（位於 .minecraft/logs/）",
    report4: "問題描述：具體的卡頓表現、崩潰堆疊或異常行為",
    report5: "重現步驟：如何穩定觸發該相容性問題"
  },
  "en": {
    pageTitle: "Mod Compatibility",
    pageDesc: "How CoreSplit interacts with other Minecraft optimization mods — risk levels, overlaps, and recommended settings.",
    knownInteractions: "Known Mod Interactions",
    compatIntro: "CoreSplit automatically scans the installed mod list at startup, detecting overlap areas with popular optimization mods. The table below summarizes the most common compatibility interactions. CoreSplit adjusts its internal modules to avoid conflicts automatically, but manual config tweaks can sometimes yield better results.",
    compatTableHead1: "Mod",
    compatTableHead2: "Overlap Area",
    compatTableHead3: "Risk Level",
    compatTableHead4: "Recommended Setting",
    compatC2meName: "C2ME",
    compatC2meOverlap: "Chunk generation & loading optimization",
    compatC2meRisk: "Medium",
    compatC2meRec: "Keep auto_detect on; CoreSplit auto-disables its chunk optimizer",
    compatLithiumName: "Lithium",
    compatLithiumOverlap: "AI pathfinding, entity calculations, physics engine",
    compatLithiumRisk: "Low",
    compatLithiumRec: "Default config works; CoreSplit auto-defers to Lithium",
    compatAsyncName: "Async Locator",
    compatAsyncOverlap: "Async thread pool management",
    compatAsyncRisk: "Medium",
    compatAsyncRec: "Set thread_model to shared to avoid thread contention",
    compatSodiumName: "Sodium",
    compatSodiumOverlap: "No direct overlap (render engine is separate)",
    compatSodiumRisk: "Safe",
    compatSodiumRec: "Use together as a best-in-class combo",
    compatPhosphorName: "Phosphor / Starlight",
    compatPhosphorOverlap: "Lighting engine optimization",
    compatPhosphorRisk: "Low",
    compatPhosphorRec: "CoreSplit doesn't touch the lighting system; fully compatible",
    compatFerriteName: "FerriteCore",
    compatFerriteOverlap: "Memory management",
    compatFerriteRisk: "Safe",
    compatFerriteRec: "Complementary; install together for lower RAM usage",
    badgeOk: "Safe",
    badgeWarn: "Medium",
    compatModes: "Compatibility Modes Explained",
    compatibleLabel: "✅ Compatible Mode",
    compatibleDesc: "When CoreSplit detects a mod, it automatically disables its own overlapping functional modules. This is the safest approach — you keep that mod's optimizations while CoreSplit continues working in other areas. The log will show messages like <code>[CoreSplit] Compat: C2ME detected — chunk module disabled</code>.",
    warnLabel: "⚠ Warn Mode",
    warnDesc: "When CoreSplit detects a potential conflict it can't automatically resolve, it outputs a warning in the log. In this case both optimizations may run simultaneously, potentially causing performance degradation or unexpected behavior. We recommend checking the log, adjusting relevant config settings based on the warning, or considering removing one of the mods.",
    disabledLabel: "❌ Disabled Mode",
    disabledDesc: "If CoreSplit detects a known-incompatible mod combination, certain features are forcibly disabled. This typically happens with outdated mod versions or unsupported forks. The log will clearly indicate the disabled module name in red text. Upgrading the offending mod to the latest version usually resolves this.",
    startupScan: "Understanding the Startup Scan",
    startupScanDesc: "Every time the game launches, CoreSplit runs a full mod compatibility scan. Results are printed to the log in the following format:",
    startupScanSample: "[CoreSplit] ========================================\n[CoreSplit] Compatibility Scan — 14 mods detected\n[CoreSplit] ✓ Sodium        — No overlap     (render)\n[CoreSplit] ✓ FerriteCore   — No overlap     (memory)\n[CoreSplit] ⚠ C2ME          — Overlap found  (chunk)\n[CoreSplit]   → Disabling CoreSplit chunk optimizer\n[CoreSplit] ✓ Lithium       — Coexisting     (ai)\n[CoreSplit]   → AI rewrite skipped, using Lithium\n[CoreSplit] ========================================\n[CoreSplit] Scan complete. 2 overlaps handled.\n",
    safeCombos: "Safe Combinations",
    safeCombosDesc: "The following mods have been tested and are fully compatible with CoreSplit. You can safely install them together:",
    safe1: "Sodium + Iris Shaders — Render pipeline is fully independent",
    safe2: "FerriteCore — Complementary memory optimization",
    safe3: "Lithium — Extensively tested AI optimization partner",
    safe4: "Mod Menu + YACL3 — CoreSplit's recommended config UI companions",
    safe5: "Carpet — Technical mod, no performance system overlap",
    safe6: "LazyDFU — Startup optimization, no runtime interaction with CoreSplit",
    reportIssues: "Reporting Compatibility Issues",
    reportIntro: "If you discover a new compatibility issue, please report it through the channels below. The more detail you provide, the faster we can pinpoint and fix it.",
    report1: "CoreSplit version and MC version",
    report2: "Full mod list (use Mod Menu to export)",
    report3: "latest.log file (located in .minecraft/logs/)",
    report4: "Issue description: specific lag symptoms, crash stack trace, or unusual behavior",
    report5: "Reproduction steps: how to reliably trigger the compatibility issue"
  }
};

window.renderPage = function() {
  var p = I18N.compatibility[getLang()] || I18N.compatibility['en'];

  var html = '';

  // Page header
  html += '<div class="page-header"><h1>' + p.pageTitle + '</h1><p>' + p.pageDesc + '</p></div>';
  html += '<div class="page">';

  // Known Mod Interactions
  html += '<h2>' + p.knownInteractions + '</h2>';
  html += '<p>' + p.compatIntro + '</p>';

  html += '<div class="table-wrap"><table>';
  html += '<thead><tr><th>' + p.compatTableHead1 + '</th><th>' + p.compatTableHead2 + '</th><th>' + p.compatTableHead3 + '</th><th>' + p.compatTableHead4 + '</th></tr></thead>';
  html += '<tbody>';

  // C2ME
  html += '<tr><td><strong>' + p.compatC2meName + '</strong></td><td>' + p.compatC2meOverlap + '</td>';
  html += '<td><span class="badge badge-warn">' + p.badgeWarn + '</span></td><td>' + p.compatC2meRec + '</td></tr>';

  // Lithium
  html += '<tr><td><strong>' + p.compatLithiumName + '</strong></td><td>' + p.compatLithiumOverlap + '</td>';
  html += '<td><span class="badge badge-warn">' + p.compatLithiumRisk + '</span></td><td>' + p.compatLithiumRec + '</td></tr>';

  // Async Locator
  html += '<tr><td><strong>' + p.compatAsyncName + '</strong></td><td>' + p.compatAsyncOverlap + '</td>';
  html += '<td><span class="badge badge-warn">' + p.badgeWarn + '</span></td><td>' + p.compatAsyncRec + '</td></tr>';

  // Sodium
  html += '<tr><td><strong>' + p.compatSodiumName + '</strong></td><td>' + p.compatSodiumOverlap + '</td>';
  html += '<td><span class="badge badge-ok">' + p.badgeOk + '</span></td><td>' + p.compatSodiumRec + '</td></tr>';

  // Phosphor
  html += '<tr><td><strong>' + p.compatPhosphorName + '</strong></td><td>' + p.compatPhosphorOverlap + '</td>';
  html += '<td><span class="badge badge-ok">' + p.badgeOk + '</span></td><td>' + p.compatPhosphorRec + '</td></tr>';

  // FerriteCore
  html += '<tr><td><strong>' + p.compatFerriteName + '</strong></td><td>' + p.compatFerriteOverlap + '</td>';
  html += '<td><span class="badge badge-ok">' + p.badgeOk + '</span></td><td>' + p.compatFerriteRec + '</td></tr>';

  html += '</tbody></table></div>';

  // Compatibility Modes Explained
  html += '<h2>' + p.compatModes + '</h2>';

  html += '<h3>' + p.compatibleLabel + '</h3>';
  html += '<blockquote><p>' + p.compatibleDesc + '</p></blockquote>';

  html += '<h3>' + p.warnLabel + '</h3>';
  html += '<blockquote><p>' + p.warnDesc + '</p></blockquote>';

  html += '<h3>' + p.disabledLabel + '</h3>';
  html += '<blockquote><p>' + p.disabledDesc + '</p></blockquote>';

  // Startup Scan
  html += '<h2>' + p.startupScan + '</h2>';
  html += '<p>' + p.startupScanDesc + '</p>';
  html += '<pre><code>' + p.startupScanSample + '</code></pre>';

  // Safe Combinations
  html += '<h2>' + p.safeCombos + '</h2>';
  html += '<p>' + p.safeCombosDesc + '</p>';
  html += '<ul>';
  html += '<li><strong>' + p.safe1 + '</strong></li>';
  html += '<li><strong>' + p.safe2 + '</strong></li>';
  html += '<li><strong>' + p.safe3 + '</strong></li>';
  html += '<li><strong>' + p.safe4 + '</strong></li>';
  html += '<li><strong>' + p.safe5 + '</strong></li>';
  html += '<li><strong>' + p.safe6 + '</strong></li>';
  html += '</ul>';

  // Reporting Issues
  html += '<h2>' + p.reportIssues + '</h2>';
  html += '<p>' + p.reportIntro + '</p>';
  html += '<ol>';
  html += '<li>' + p.report1 + '</li>';
  html += '<li>' + p.report2 + '</li>';
  html += '<li>' + p.report3 + '</li>';
  html += '<li>' + p.report4 + '</li>';
  html += '<li>' + p.report5 + '</li>';
  html += '</ol>';

  html += '</div>'; // .page

  document.getElementById('content-root').innerHTML = html;
};
