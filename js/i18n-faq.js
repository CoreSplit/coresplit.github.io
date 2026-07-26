/* CoreSplit Wiki — i18n: FAQ */

I18N.faq = {
  "zh-CN": {
    pageTitle: "常见问题",
    pageDesc: "关于 CoreSplit 的安装、性能、故障排除和开发的常见问题与解答。",
    faqGeneral: "通用问题",
    faqPerf: "性能相关",
    faqTrouble: "故障排除",
    faqDev: "开发与贡献",
    faqQ1: "CoreSplit 究竟优化了什么？",
    faqA1: "CoreSplit 专注于 Minecraft 服务器的 tick 循环优化。它通过智能调度区块加载、实体处理和 AI 路径计算来降低每刻的 CPU 时间（MSPT），从而维持稳定的 20 TPS。与 Sodium 等渲染优化模组不同，CoreSplit 优化的是服务端逻辑，对客户端和服务器端均有效。",
    faqQ2: "CoreSplit 会改变原版游戏行为吗？",
    faqA2: "不会。CoreSplit 严格遵循「优化不改变行为」的原则。它只调整执行时序和调度策略，不会修改任何游戏机制、掉落概率、生物 AI 决策逻辑或区块生成算法。如果你发现 CoreSplit 导致了原版行为差异，请作为 bug 报告给我们。",
    faqQ3: "CoreSplit 是客户端模组还是服务端模组？",
    faqA3: "两者都是。同一个 JAR 文件可以同时安装在客户端和服务端。客户端安装后可显示性能 HUD 覆盖层和游戏内配置界面；服务端安装后可执行完整的 tick 优化并推送指标到客户端。你也可以只在服务端安装——客户端无需 CoreSplit 也能接收并显示来自服务器的性能指标。",
    faqQ4: "支持 Paper / Spigot / Bukkit 吗？",
    faqA4: "不支持。CoreSplit 是基于 Fabric Loader 开发的模组，Paper 及其衍生服务端使用不同的 API 和补丁系统。如果你在寻找 Bukkit 系的性能优化方案，建议查看 Paper 自带的性能配置或 Spark 性能分析器。",
    faqQ5: "支持其他 Minecraft 版本吗？",
    faqA5: "目前 CoreSplit 仅支持 Minecraft 26.2。这是因为我们深度依赖了 26.2 中引入的新版 tick 调度 API 和实体批处理接口。如果未来版本保持 API 兼容性，我们会尽快跟进适配。旧版本（26.1 及以下）由于缺乏必要的接口，无法获得支持。",
    faqQ6: "CoreSplit 能带来多大的性能提升？",
    faqA6: "性能提升因硬件、模组组合和世界复杂度而异。在我们的基准测试中（Ryzen 7 9800X3D，32GB RAM，200+ 模组），MSPT 平均降低 25%–40%，TPS 稳定性提升约 60%。对于大型服务器的区块生成密集型场景，效果最为显著。单机游戏通常提升 10%–20%。",
    faqQ7: "我应该使用哪种引擎模式？",
    faqA7: "对于大多数用户，默认的 <strong>auto</strong> 模式就是最佳选择——它会自动评估环境并选择合适的策略。如果你在玩单机游戏且希望最大程度降低后台开销，可以试 <strong>local</strong>。如果你在运营一个长期运行的大型服务器且需要最精确的优化，<strong>online</strong> 模式在预热 30 分钟后效果最好。",
    faqQ8: "CoreSplit 会增加内存占用吗？",
    faqA8: "非常轻微。CoreSplit 自身的运行内存通常不超过 16–32 MB。online 模式下会额外使用 4–8 MB 来存储历史性能数据缓冲区。如果你对内存敏感，建议搭配 FerriteCore 使用——CoreSplit 节省的 CPU 时间可以间接降低 GC 压力，反而有助于内存管理。",
    faqQ9: "CoreSplit 与光影（Shaders）兼容吗？",
    faqA9: "完全兼容。CoreSplit 不涉及任何渲染管线操作，与 Iris Shaders、Sodium 等渲染模组无任何交互。HUD 覆盖层使用 Minecraft 原生的 TextRenderer 绘制，不会与光影后处理产生冲突。",
    faqQ10: "HUD 覆盖层不显示怎么办？",
    faqA10: "首先检查 config/coresplit.toml 中 [overlay] 部分的 enabled 是否为 true。如果已启用但仍不显示：1) 按 F6 切换——确认没有误按关闭；2) 检查 overlay.opacity 是否设置过低（如 0.0）；3) 查看日志中是否有 [CoreSplit] Overlay initialized 消息；4) 如果使用了 UI 缩放模组，尝试调整 overlay.scale。",
    faqQ11: "启动游戏时崩溃了怎么办？",
    faqA11: "最常见的启动崩溃原因是缺少依赖。请确保：1) Fabric Loader 版本 ≥ 0.16.0；2) Fabric API 已安装且版本匹配 MC 26.2；3) Java 版本 ≥ 25。如果确认以上无误，请查看 .minecraft/logs/latest.log，搜索 ERROR 或 Caused by 行，然后将相关堆栈信息提交到我们的 GitHub Issues。",
    faqQ12: "日志中出现 TPS 警告是正常的吗？",
    faqA12: "偶尔出现 TPS 警告是正常的。当世界加载新区块或大量实体同时生成时，TPS 可能会短暂下降。CoreSplit 在一段时间内（默认 5 秒）TPS 持续低于阈值时才会触发警告。如果警告频繁出现且持续不断，说明你的服务器确实存在性能瓶颈，建议调整 chunk_budget 或 entity_budget 参数。",
    faqQ13: "如何卸载 CoreSplit？",
    faqA13: "从 mods 文件夹中删除 coresplit-&lt;版本&gt;.jar 即可。如果你想彻底清除残留：也删除 config/coresplit.toml 配置文件。CoreSplit 不会修改任何世界数据或玩家数据，卸载后你的存档完全不受影响。",
    faqQ14: "我可以参与 CoreSplit 的开发吗？",
    faqA14: "当然可以！CoreSplit 是开源项目，托管在 GitHub 上。你可以通过以下方式参与：1) 提交 bug 报告和功能建议；2) 贡献代码——请先阅读 CONTRIBUTING.md 了解代码风格和提交流程；3) 帮助完善多语言翻译——i18n 文件位于 src/main/resources/assets/coresplit/lang/；4) 编写和分享文档、教程或视频。我们欢迎任何形式的贡献！",
    faqQ15: "可以在整合包中使用 CoreSplit 吗？",
    faqA15: "可以，而且我们鼓励这样做！CoreSplit 使用 MIT 许可证，你可以自由地在任何整合包中分发它。唯一的要求是保留原作者署名（在整合包说明中提及 CoreSplit 即可，不强制）。如果你在整合包中遇到兼容性问题，请优先排查是否是整合包中其他模组导致的冲突，然后向我们报告具体信息。"
  },
  "zh-TW": {
    pageTitle: "常見問題",
    pageDesc: "關於 CoreSplit 的安裝、效能、故障排除和開發的常見問題與解答。",
    faqGeneral: "通用問題",
    faqPerf: "效能相關",
    faqTrouble: "故障排除",
    faqDev: "開發與貢獻",
    faqQ1: "CoreSplit 究竟最佳化了什麼？",
    faqA1: "CoreSplit 專注於 Minecraft 伺服器的 tick 迴圈最佳化。它透過智慧排程區塊載入、實體處理和 AI 路徑計算來降低每刻的 CPU 時間（MSPT），從而維持穩定的 20 TPS。與 Sodium 等繪製最佳化模組不同，CoreSplit 最佳化的是伺服器端邏輯，對用戶端和伺服器端均有效。",
    faqQ2: "CoreSplit 會改變原版遊戲行為嗎？",
    faqA2: "不會。CoreSplit 嚴格遵循「最佳化不改變行為」的原則。它只調整執行時序和排程策略，不會修改任何遊戲機制、掉落機率、生物 AI 決策邏輯或區塊生成演算法。如果你發現 CoreSplit 導致了原版行為差異，請作為 bug 回報給我們。",
    faqQ3: "CoreSplit 是用戶端模組還是伺服器端模組？",
    faqA3: "兩者都是。同一個 JAR 檔案可以同時安裝在用戶端和伺服器端。用戶端安裝後可顯示效能 HUD 覆蓋層和遊戲內設定介面；伺服器端安裝後可執行完整的 tick 最佳化並推送指標到用戶端。你也可以只在伺服器端安裝——用戶端無需 CoreSplit 也能接收並顯示來自伺服器的效能指標。",
    faqQ4: "支援 Paper / Spigot / Bukkit 嗎？",
    faqA4: "不支援。CoreSplit 是基於 Fabric Loader 開發的模組，Paper 及其衍生伺服器端使用不同的 API 和修補系統。如果你在尋找 Bukkit 系的效能最佳化方案，建議檢視 Paper 自帶的效能設定或 Spark 效能分析器。",
    faqQ5: "支援其他 Minecraft 版本嗎？",
    faqA5: "目前 CoreSplit 僅支援 Minecraft 26.2。這是因為我們深度依賴了 26.2 中引入的新版 tick 排程 API 和實體批次處理介面。如果未來版本保持 API 相容性，我們會盡快跟進適配。舊版本（26.1 及以下）由於缺乏必要的介面，無法獲得支援。",
    faqQ6: "CoreSplit 能帶來多大的效能提升？",
    faqA6: "效能提升因硬體、模組組合和世界複雜度而異。在我們的基準測試中（Ryzen 7 9800X3D，32GB RAM，200+ 模組），MSPT 平均降低 25%–40%，TPS 穩定性提升約 60%。對於大型伺服器的區塊生成密集型場景，效果最為顯著。單機遊戲通常提升 10%–20%。",
    faqQ7: "我應該使用哪種引擎模式？",
    faqA7: "對於大多數使用者，預設的 <strong>auto</strong> 模式就是最佳選擇——它會自動評估環境並選擇合適的策略。如果你在玩單機遊戲且希望最大程度降低後台開銷，可以試 <strong>local</strong>。如果你在營運一個長期執行的大型伺服器且需要最精確的最佳化，<strong>online</strong> 模式在預熱 30 分鐘後效果最好。",
    faqQ8: "CoreSplit 會增加記憶體占用嗎？",
    faqA8: "非常輕微。CoreSplit 自身的執行記憶體通常不超過 16–32 MB。online 模式下會額外使用 4–8 MB 來儲存歷史效能資料緩衝區。如果你對記憶體敏感，建議搭配 FerriteCore 使用——CoreSplit 節省的 CPU 時間可以間接降低 GC 壓力，反而有助於記憶體管理。",
    faqQ9: "CoreSplit 與光影（Shaders）相容嗎？",
    faqA9: "完全相容。CoreSplit 不涉及任何繪製管線操作，與 Iris Shaders、Sodium 等繪製模組無任何互動。HUD 覆蓋層使用 Minecraft 原生的 TextRenderer 繪製，不會與光影後處理產生衝突。",
    faqQ10: "HUD 覆蓋層不顯示怎麼辦？",
    faqA10: "首先檢查 config/coresplit.toml 中 [overlay] 部分的 enabled 是否為 true。如果已啟用但仍不顯示：1) 按 F6 切換——確認沒有誤按關閉；2) 檢查 overlay.opacity 是否設定過低（如 0.0）；3) 檢視記錄中是否有 [CoreSplit] Overlay initialized 訊息；4) 如果使用了 UI 縮放模組，嘗試調整 overlay.scale。",
    faqQ11: "啟動遊戲時崩潰了怎麼辦？",
    faqA11: "最常見的啟動崩潰原因是缺少依賴。請確保：1) Fabric Loader 版本 ≥ 0.16.0；2) Fabric API 已安裝且版本匹配 MC 26.2；3) Java 版本 ≥ 25。如果確認以上無誤，請檢視 .minecraft/logs/latest.log，搜尋 ERROR 或 Caused by 行，然後將相關堆疊資訊提交到我們的 GitHub Issues。",
    faqQ12: "記錄中出現 TPS 警告是正常的嗎？",
    faqA12: "偶爾出現 TPS 警告是正常的。當世界載入新區塊或大量實體同時生成時，TPS 可能會短暫下降。CoreSplit 在一段時間內（預設 5 秒）TPS 持續低於閾值時才會觸發警告。如果警告頻繁出現且持續不斷，說明你的伺服器確實存在效能瓶頸，建議調整 chunk_budget 或 entity_budget 參數。",
    faqQ13: "如何解除安裝 CoreSplit？",
    faqA13: "從 mods 資料夾中刪除 coresplit-&lt;版本&gt;.jar 即可。如果你想徹底清除殘留：也刪除 config/coresplit.toml 設定檔。CoreSplit 不會修改任何世界資料或玩家資料，解除安裝後你的存檔完全不受影響。",
    faqQ14: "我可以參與 CoreSplit 的開發嗎？",
    faqA14: "當然可以！CoreSplit 是開源專案，託管在 GitHub 上。你可以透過以下方式參與：1) 提交 bug 回報和功能建議；2) 貢獻程式碼——請先閱讀 CONTRIBUTING.md 了解程式碼風格和提交流程；3) 幫助完善多語言翻譯——i18n 檔案位於 src/main/resources/assets/coresplit/lang/；4) 編寫和分享文件、教學或影片。我們歡迎任何形式的貢獻！",
    faqQ15: "可以在整合包中使用 CoreSplit 嗎？",
    faqA15: "可以，而且我們鼓勵這樣做！CoreSplit 使用 MIT 授權條款，你可以自由地在任何整合包中分發它。唯一的要求是保留原作者署名（在整合包說明中提及 CoreSplit 即可，不強制）。如果你在整合包中遇到相容性問題，請優先排查是否是整合包中其他模組導致的衝突，然後向我們回報具體資訊。"
  },
  "en": {
    pageTitle: "Frequently Asked Questions",
    pageDesc: "Common questions and answers about CoreSplit — installation, performance, troubleshooting, and development.",
    faqGeneral: "General",
    faqPerf: "Performance",
    faqTrouble: "Troubleshooting",
    faqDev: "Development & Contributing",
    faqQ1: "What exactly does CoreSplit optimize?",
    faqA1: "CoreSplit focuses on optimizing Minecraft's server tick loop. It intelligently schedules chunk loading, entity processing, and AI pathfinding to reduce per-tick CPU time (MSPT), helping maintain a stable 20 TPS. Unlike render optimization mods like Sodium, CoreSplit optimizes server-side logic and works on both client and server.",
    faqQ2: "Does CoreSplit change vanilla behavior?",
    faqA2: "No. CoreSplit strictly follows the principle of \"optimize without changing behavior.\" It only adjusts execution timing and scheduling strategies — it never modifies game mechanics, drop rates, mob AI decision logic, or chunk generation algorithms. If you find CoreSplit causing vanilla behavior differences, please report it as a bug.",
    faqQ3: "Is CoreSplit a client mod or a server mod?",
    faqA3: "Both. The same JAR file can be installed on both client and server. On the client side, it displays the performance HUD overlay and in-game config UI. On the server side, it performs full tick optimization and pushes metrics to clients. You can also install it only on the server — clients don't need CoreSplit to receive and display server performance metrics.",
    faqQ4: "Does it support Paper / Spigot / Bukkit?",
    faqA4: "No. CoreSplit is built on Fabric Loader. Paper and its derivatives use a different API and patching system. If you're looking for Bukkit-family performance optimization, check out Paper's built-in performance config or the Spark profiler.",
    faqQ5: "Does it support other Minecraft versions?",
    faqA5: "Currently CoreSplit only supports Minecraft 26.2. This is because we rely heavily on the new tick scheduling API and entity batching interfaces introduced in 26.2. If future versions maintain API compatibility, we'll follow up quickly. Older versions (26.1 and below) cannot be supported due to missing required interfaces.",
    faqQ6: "How much performance improvement can I expect?",
    faqA6: "Improvements vary by hardware, mod combination, and world complexity. In our benchmarks (Ryzen 7 9800X3D, 32GB RAM, 200+ mods), MSPT dropped by 25%–40% on average, with TPS stability improving by roughly 60%. The effect is most pronounced in chunk-generation-heavy scenarios on large servers. Singleplayer typically sees a 10%–20% boost.",
    faqQ7: "Which engine mode should I use?",
    faqA7: "For most users, the default <strong>auto</strong> mode is the best choice — it evaluates the environment and picks the right strategy automatically. If you're playing singleplayer and want minimal background overhead, try <strong>local</strong>. If you run a long-lived large server and need the most precise optimization, <strong>online</strong> mode performs best after a 30-minute warm-up.",
    faqQ8: "Does CoreSplit increase RAM usage?",
    faqA8: "Very slightly. CoreSplit's own runtime memory is typically under 16–32 MB. Online mode uses an additional 4–8 MB for historical performance data buffers. If you're RAM-sensitive, pair CoreSplit with FerriteCore — the CPU time CoreSplit saves indirectly reduces GC pressure, which actually helps memory management.",
    faqQ9: "Is CoreSplit compatible with shaders?",
    faqA9: "Fully compatible. CoreSplit doesn't touch any render pipeline operations and has zero interaction with rendering mods like Iris Shaders or Sodium. The HUD overlay uses Minecraft's native TextRenderer, so it won't conflict with shader post-processing.",
    faqQ10: "The HUD overlay won't appear — what do I do?",
    faqA10: "First check that [overlay] enabled is true in config/coresplit.toml. If it's enabled but still not showing: 1) Press F6 to toggle — make sure you haven't accidentally turned it off; 2) Check if overlay.opacity is set too low (e.g. 0.0); 3) Look for the [CoreSplit] Overlay initialized message in the log; 4) If you're using a UI scale mod, try adjusting overlay.scale.",
    faqQ11: "The game crashes on startup — what now?",
    faqA11: "The most common startup crash cause is missing dependencies. Make sure: 1) Fabric Loader ≥ 0.16.0; 2) Fabric API is installed and matches MC 26.2; 3) Java ≥ 25. If all that checks out, check .minecraft/logs/latest.log, search for ERROR or Caused by lines, and submit the relevant stack trace to our GitHub Issues.",
    faqQ12: "Are TPS warnings in the log normal?",
    faqA12: "Occasional TPS warnings are normal. When the world loads new chunks or many entities spawn at once, TPS may dip briefly. CoreSplit only triggers a warning when TPS stays below the threshold for a sustained period (5 seconds by default). If warnings appear frequently and persistently, your server does have a performance bottleneck — try adjusting chunk_budget or entity_budget.",
    faqQ13: "How do I uninstall CoreSplit?",
    faqA13: "Delete coresplit-&lt;version&gt;.jar from your mods folder. If you want a clean removal, also delete config/coresplit.toml. CoreSplit never modifies world data or player data — your saves are completely unaffected after uninstallation.",
    faqQ14: "Can I contribute to CoreSplit's development?",
    faqA14: "Absolutely! CoreSplit is open source and hosted on GitHub. You can contribute by: 1) Submitting bug reports and feature suggestions; 2) Contributing code — read CONTRIBUTING.md first for code style and PR guidelines; 3) Helping improve translations — i18n files are at src/main/resources/assets/coresplit/lang/; 4) Writing and sharing documentation, tutorials, or videos. We welcome contributions of all kinds!",
    faqQ15: "Can I include CoreSplit in my modpack?",
    faqA15: "Yes, and we encourage it! CoreSplit is MIT-licensed, so you can freely distribute it in any modpack. The only requirement is to retain author attribution (mentioning CoreSplit in your modpack description is enough, not mandatory). If you run into compatibility issues in a modpack, please first check if another mod in the pack is causing the conflict, then report the specifics to us."
  }
};

window.renderPage = function() {
  var p = I18N.faq[getLang()] || I18N.faq['en'];

  var html = '';

  // Page header
  html += '<div class="page-header"><h1>' + p.pageTitle + '</h1><p>' + p.pageDesc + '</p></div>';
  html += '<div class="page">';

  // General FAQ
  html += '<h2>' + p.faqGeneral + '</h2>';

  html += '<div class="faq-item"><button class="faq-q">' + p.faqQ1 + '<span class="faq-arrow">▼</span></button><div class="faq-a"><p>' + p.faqA1 + '</p></div></div>';
  html += '<div class="faq-item"><button class="faq-q">' + p.faqQ2 + '<span class="faq-arrow">▼</span></button><div class="faq-a"><p>' + p.faqA2 + '</p></div></div>';
  html += '<div class="faq-item"><button class="faq-q">' + p.faqQ3 + '<span class="faq-arrow">▼</span></button><div class="faq-a"><p>' + p.faqA3 + '</p></div></div>';
  html += '<div class="faq-item"><button class="faq-q">' + p.faqQ4 + '<span class="faq-arrow">▼</span></button><div class="faq-a"><p>' + p.faqA4 + '</p></div></div>';
  html += '<div class="faq-item"><button class="faq-q">' + p.faqQ5 + '<span class="faq-arrow">▼</span></button><div class="faq-a"><p>' + p.faqA5 + '</p></div></div>';

  // Performance FAQ
  html += '<h2>' + p.faqPerf + '</h2>';

  html += '<div class="faq-item"><button class="faq-q">' + p.faqQ6 + '<span class="faq-arrow">▼</span></button><div class="faq-a"><p>' + p.faqA6 + '</p></div></div>';
  html += '<div class="faq-item"><button class="faq-q">' + p.faqQ7 + '<span class="faq-arrow">▼</span></button><div class="faq-a"><p>' + p.faqA7 + '</p></div></div>';
  html += '<div class="faq-item"><button class="faq-q">' + p.faqQ8 + '<span class="faq-arrow">▼</span></button><div class="faq-a"><p>' + p.faqA8 + '</p></div></div>';
  html += '<div class="faq-item"><button class="faq-q">' + p.faqQ9 + '<span class="faq-arrow">▼</span></button><div class="faq-a"><p>' + p.faqA9 + '</p></div></div>';

  // Troubleshooting FAQ
  html += '<h2>' + p.faqTrouble + '</h2>';

  html += '<div class="faq-item"><button class="faq-q">' + p.faqQ10 + '<span class="faq-arrow">▼</span></button><div class="faq-a"><p>' + p.faqA10 + '</p></div></div>';
  html += '<div class="faq-item"><button class="faq-q">' + p.faqQ11 + '<span class="faq-arrow">▼</span></button><div class="faq-a"><p>' + p.faqA11 + '</p></div></div>';
  html += '<div class="faq-item"><button class="faq-q">' + p.faqQ12 + '<span class="faq-arrow">▼</span></button><div class="faq-a"><p>' + p.faqA12 + '</p></div></div>';
  html += '<div class="faq-item"><button class="faq-q">' + p.faqQ13 + '<span class="faq-arrow">▼</span></button><div class="faq-a"><p>' + p.faqA13 + '</p></div></div>';

  // Development FAQ
  html += '<h2>' + p.faqDev + '</h2>';

  html += '<div class="faq-item"><button class="faq-q">' + p.faqQ14 + '<span class="faq-arrow">▼</span></button><div class="faq-a"><p>' + p.faqA14 + '</p></div></div>';
  html += '<div class="faq-item"><button class="faq-q">' + p.faqQ15 + '<span class="faq-arrow">▼</span></button><div class="faq-a"><p>' + p.faqA15 + '</p></div></div>';

  html += '</div>'; // .page

  document.getElementById('content-root').innerHTML = html;

  // Re-attach FAQ click handlers
  var faqButtons = document.querySelectorAll('.faq-q');
  for (var i = 0; i < faqButtons.length; i++) {
    faqButtons[i].addEventListener('click', function() {
      var answer = this.nextElementSibling;
      if (answer.style.display === 'block') {
        answer.style.display = 'none';
        this.querySelector('.faq-arrow').textContent = '▼';
      } else {
        answer.style.display = 'block';
        this.querySelector('.faq-arrow').textContent = '▲';
      }
    });
  }
};
