# Claude Office

[English](README.md) | **繁體中文**

一個像素風格的虛擬辦公室，即時呈現你的 AI 代理人（agent）正在工作的樣子。看著 Claude Code 的代理人們進場、坐到座位上、喝咖啡休息，並在仿 Slack 的辦公室聊天面板裡交談——全部以等角像素風格呈現。

## 更新 — 1.1：升級版

> 我們還有 12 小時、20x 方案也還有 90% 沒用完 😂，所以我請 Claude 幫 Claude Office 升級（用了 Fable 5.1 <img src="docs/images/claude-crab.gif" height="36" alt="" align="absmiddle"> 和 <img src="docs/images/ultracode.svg" height="20" alt="ultracode" align="absmiddle">）。

**新功能**
- **每個終端機都有自己的 Claude** — 每個 Claude Code session 都有自己的標籤、模型徽章，以及一個坐在座位上的 Claude
- **Claude 會把整個對話演出來** — 老闆把你的提示詞走過去交給 Claude，Claude 打字，做完就打瞌睡
- **✋ 需要你** — 權限提示會讓 Claude 舉手並發出提示音，你可以直接在辦公室裡點擊 **允許**
- **點擊任何人** — 檢視卡會顯示他們在做什麼、呼叫過的每個工具，以及他們說過的話
- **上線掛了（Prod Is Down）** — 部署失敗會讓辦公室變紅；部署成功是 🚀、推送到 main 是 🎉、測試失敗是 ❌
- **白板是真的** — 上面顯示 Claude 真正的任務清單
- **薪資、電力與記憶體儀表** — 每個 session 的花費、每分鐘 token 數與上下文使用量
- **桌面應用程式**，含系統匣徽章與迷你小工具，提供 Mac、Windows、Linux 安裝檔
- 另外還有三次抓蟲、一次安全性檢查，以及 972 個測試 — 完整列表在 [CHANGELOG](CHANGELOG.md)

### Claude 的一個回合，從開始到打瞌睡
![老闆把提示詞交給 Claude，worker 來來去去，Claude 在等一個 worker 時拿著一杯水，完成後就睡著了](docs/images/claudes-turn.gif)

### 點擊一個角色
![檢視卡：任務內容、用過的工具（失敗的呼叫以紅色標示）、tokens 與模型，以及代理人逐字稿的結尾](docs/images/inspector.png)

### ✋ 需要你 — 直接在辦公室裡回應
![Claude 舉著手，session 標籤變成琥珀色，卡片詢問是否要執行 git push origin main，有「允許」「允許並記住」「拒絕」三個選項](docs/images/permission-card.png)

### 上線掛了 — 又恢復正常
![部署失敗後辦公室變紅、警示燈旋轉、顯示事故計時器，修好之後燈恢復正常並附上事故檢討](docs/images/prod-is-down.gif)

### 白板就是你真正的任務清單
![便利貼從「待辦」移到「進行中」再到「完成」，被卡住的任務會別上一個紅色別針](docs/images/task-board.gif)

### 薪資、電力與記憶體
![辦公室儀表：每個 session 的花費、每分鐘 token 數與上下文使用量，附帶 5 小時用量限制的標示](docs/images/meters.png)

## 更新 — 呆根辦公室模式（Dunder Mifflin mode）

在 Slack 聊天面板輸入 `/the-office`，就能把整個辦公室切換成 Scranton 分公司的致敬版本。房間、角色和對話全部換上新裝——Michael Scott 當老闆、Jim 是你的助理、Dwight 守著地下室的甜菜窖。（粉絲創作——詳見 [NOTICE.md](NOTICE.md)。）

### 每天都是脆餅節
<p>
  <img src="docs/images/dunder-mifflin-day.png" alt="Dunder Mifflin — 白天" width="48%">
  <img src="docs/images/dunder-mifflin-night.png" alt="Dunder Mifflin — 夜晚" width="48%">
</p>

**切換後會改變什麼**
- 27 位演員（Michael、Jim、Pam、Dwight、Kevin、Angela、Stanley、Creed、David Wallace、Bob Vance——整間辦公室的人）被分配到各個代理人角色
- 角色對話換成劇中台詞（「熊。甜菜。星際大爭霸。」、「賣紙」、「頒發謝魯特幣」）
- Michael 在回覆完成的工作時，偶爾會說出他的招牌台詞「這就是她說的 😏」
- 角色道具疊圖 — Michael 輪流拿出世界最佳老闆馬克杯／鄧迪獎／金獎券／監獄麥克頭巾／「拜託不要神啊」，Dwight 戴著心肺復甦術假人面罩或拿著謝魯特幣，Jim 留著他的果凍釘書機，Stanley 拿著脆餅，Jan 拿著「寧靜 by Jan」蠟燭，Oscar／Pam／Toby 共享精品俱樂部
- Angela 會有一隻跟隨的貓，還有一隻頭上的貓（從 12 款貓咪角色隨機挑選）
- Kevin 的辣椅、脆餅節和精品俱樂部的彩蛋穿插在茶水間的對話中

### 演員陣容
<p align="center">
  <img src="docs/images/michael-scott.png" alt="Michael Scott" height="140">
  <img src="docs/images/jim-halpert.png" alt="Jim Halpert" height="140">
  <img src="docs/images/pam-beesly.png" alt="Pam Beesly" height="140">
  <img src="docs/images/dwight-schrute.png" alt="Dwight Schrute" height="140">
  <img src="docs/images/angela-martin.png" alt="Angela Martin" height="140">
  <img src="docs/images/kevin-malone.png" alt="Kevin Malone" height="140">
  <img src="docs/images/stanley-hudson.png" alt="Stanley Hudson" height="140">
  <img src="docs/images/andy-bernard.png" alt="Andy Bernard" height="140">
  <img src="docs/images/kelly-kapoor.png" alt="Kelly Kapoor" height="140">
  <img src="docs/images/ryan-howard.png" alt="Ryan Howard" height="140">
  <img src="docs/images/creed-bratton.png" alt="Creed Bratton" height="140">
  <img src="docs/images/robert-california.png" alt="Robert California" height="140">
  <img src="docs/images/david-wallace.png" alt="David Wallace" height="140">
  <img src="docs/images/bob-vance.png" alt="Bob Vance, Vance Refrigeration" height="140">
</p>

### 彩蛋道具
每位演員桌上都會飄著自己的招牌道具，取代原本的咖啡／能量飲料泡泡。

<p align="center">
  <img src="docs/images/prop-worlds-best-boss.png" alt="世界最佳老闆馬克杯（Michael）" height="70">
  &nbsp;&nbsp;
  <img src="docs/images/prop-dundie.png" alt="鄧迪獎（Michael）" height="70">
  &nbsp;&nbsp;
  <img src="docs/images/prop-golden-ticket.png" alt="金獎券（Michael）" height="70">
  &nbsp;&nbsp;
  <img src="docs/images/prop-prison-mike.png" alt="監獄麥克頭巾（Michael）" height="70">
  &nbsp;&nbsp;
  <img src="docs/images/prop-no-god.png" alt="拜託不要神啊（Michael）" height="70">
  &nbsp;&nbsp;
  <img src="docs/images/prop-cpr-mask.png" alt="心肺復甦術假人面罩（Dwight）" height="70">
  &nbsp;&nbsp;
  <img src="docs/images/prop-schrute-buck.png" alt="謝魯特幣（Dwight）" height="70">
  &nbsp;&nbsp;
  <img src="docs/images/prop-jello-stapler.png" alt="果凍釘書機（Jim）" height="70">
  &nbsp;&nbsp;
  <img src="docs/images/prop-pretzel.png" alt="脆餅節（Stanley）" height="70">
  &nbsp;&nbsp;
  <img src="docs/images/prop-serenity-candle.png" alt="寧靜 by Jan（Jan）" height="70">
  &nbsp;&nbsp;
  <img src="docs/images/prop-finer-things.png" alt="精品俱樂部（Oscar／Pam／Toby）" height="70">
  &nbsp;&nbsp;
  <img src="docs/images/prop-paper-box.png" alt="Dunder Mifflin 紙箱" height="70">
  &nbsp;&nbsp;
  <img src="docs/images/prop-dunder-logo.png" alt="Dunder Mifflin 商標" height="70">
  &nbsp;&nbsp;
  <img src="docs/images/prop-angela-cat.png" alt="Angela 的貓" height="70">
</p>

隨時可以再輸入一次 `/the-office` 關閉——狀態會保存在 `localStorage` 裡。

---

### 完整辦公室 — 代理人工作、聊天、喝咖啡休息
![白天模式](docs/images/Day-Mode.png)

## 功能特色

**即時代理人視覺化**
- 代理人以像素風格角色從門口走進辦公室
- 每種代理人類型都有專屬角色外觀與座位分配
- 代理人會顯示打字泡泡、去喝咖啡／喝水休息，完成後就離開
- 每個 Claude Code session 都有自己的標籤，各自搭配一個坐在座位上的 Claude
- 老闆角色（也就是你）拿著能量飲料，Claude 拿著咖啡
- 隨機辦公室事件：披薩外送、消防演習、電力閃爍、印表機卡紙
- 平滑過渡的日夜循環

**AI 驅動的辦公室聊天**
- 透過辦公室聊天面板與 Claude 來回對話
- Claude 有個機智的辦公室經理人格，還會講一些固定的玩笑話
- 多代理人路由 — 提到 bug 就由 Debugger 回應，問到 UI 就由 Frontend 回答
- 打字指示器、表情符號反應、已讀標記
- 斜線指令：`/status`、`/agents`、`/incident`、`/all-clear`、`/help`
- 聊天記錄會在重啟後保留（SQLite）
- 主動訊息 — 代理人在開始與完成工作時會主動宣告
- 重要事件的桌面通知

**具情境感知的 AI**
- Claude 知道你目前的 git 分支與正在執行的代理人
- 對話記憶 — 會記住最近 10 則訊息
- AI 開／關切換，控制 token 用量

### 夜間模式 — 入夜後的辦公室，代理人仍在埋頭苦幹
![夜間模式](docs/images/night-mode.png)

### 等待額度恢復時……辦公室自己找樂子
![等待 token 恢復](docs/images/entertainment-waiting-tokenreset.png)

## 運作原理

Claude Code 的 hooks 與狀態列（status line）會把每一次代理人產生、工具呼叫、提示詞與權限等待都送到本機的 Express + WebSocket 伺服器，再由伺服器廣播給 React 前端。

```
Claude Code ──hooks + status line──> Express 伺服器 ──WebSocket──> React 前端
                                          │
                                    SQLite（聊天記錄）
                                          │
                                  聊天 AI 監聽程式 ──claude -p──> 回覆
```

## 快速開始

```bash
# Clone
git clone https://github.com/W17ant/Claude-Office.git
cd Claude-Office

# 安裝
npm install

# 連接 Claude Code（把 hooks 與 status line 加進 ~/.claude/settings.json，可重複執行）
npm run install-hooks

# 啟動所有服務（伺服器 + 前端 + 聊天監聽程式）並開啟辦公室
bash scripts/start-office.sh

# 停止所有服務
bash scripts/stop-office.sh
```

接著在 Claude Code 裡產生代理人，就能看到它們出現在辦公室裡。

- **想要直接用應用程式？** 到 [Releases](https://github.com/W17ant/Claude-Office/releases) 下載 Mac、Windows 或 Linux 的安裝檔。
- **什麼都沒出現？** `npm run doctor` 會檢查整套設定並告訴你缺了什麼。
- **想要移除？** `npm run uninstall-hooks` 會把 hooks 移除。
- 支援 macOS 與 Linux，在 Windows 上可透過 WSL 或 Git Bash 使用。

把它安裝為 Claude Code 外掛、所有 hook 事件、每一項設定與安全性模型，都在[參考文件](docs/reference.md)裡。

## 自訂你的角色

老闆角色（也就是你）可以透過 `office.config.json` 設定：

```json
{
  "boss": {
    "name": "YourName",
    "sprite": "MyChar-1",
    "color": "#ff4444",
    "emoji": "crown"
  }
}
```

改完之後重新整理頁面即可——不需要重新建置。

### 製作自訂角色外觀

可以用 Helper 範本圖作為四方向配置的參考——這是我的範例和範本並排的樣子：

<p>
  <img src="docs/images/Helper.png" alt="角色範本圖" height="250">
  <img src="docs/images/Me-1-front-right.png" alt="自訂老闆角色 — 正面右側" height="250">
  <img src="docs/images/Me-1-rear-left.png" alt="自訂老闆角色 — 背面左側" height="250">
</p>

這是迷你版 Claude — 我讓 Claude 看過我的角色之後，請它描述自己該長什麼樣子，再用這段描述當作生圖提示詞：

<img src="docs/images/mini-claude.png" alt="迷你版 Claude" height="500">

1. 開啟 ChatGPT（使用 DALL-E 圖像生成功能）
2. 上傳 `public/sprites/characters/Helper.png` 作為參考圖
3. 請它用同樣的風格與版面（4 個方向：正面左側、背面右側、正面右側、背面左側）生成一個像素風格角色
4. 儲存結果並擷取角色圖：

```bash
python3 scripts/extract-boss-sprite.py your-character.png MyChar-1
```

## 聊天

| 指令 | 說明 |
|---------|-------------|
| `/status` | 辦公室狀態 — 代理人、連線數 |
| `/agents` | 列出目前活動中的代理人 |
| `/incident` | 手動宣告一次事故 |
| `/all-clear` | 結束事故並發出事故檢討 |
| `/help` | 顯示可用指令 |
| `/the-office` | 切換呆根辦公室模式 |

要清空聊天記錄，請在專案目錄執行 `python3 scripts/chat-post.py /clear`。

### 代理人路由

聊天 AI 會依照關鍵字把你的訊息路由給專門的代理人：

| 主題 | 代理人 |
|-------|-------|
| bug、錯誤、閃退 | Debugger |
| PR、程式碼審查、git | Reviewer |
| UI、CSS、設計 | Frontend |
| 測試、覆蓋率、e2e | Tester |
| 認證、安全性、token | Security |
| 部署、Docker、CI | DevOps |
| 效能、快取 | PerfEng |
| 資料庫、SQL | DBA |
| TypeScript、型別 | TS Pro |
| AI、LLM、提示詞 | AI Eng |
| API、REST、webhook | Fullstack |
| 架構、設計模式 | Architect |

代理人之間也可以互相傳訊息 — 詳見[代理人之間的訊息](docs/reference.md#agent-to-agent-messages)。

### 只有我和 Claude — 在辦公室裡聊天
![我與 Claude](docs/images/Me%20&%20Claude.png)

## 模式

| 網址 | 模式 |
|-----|------|
| `127.0.0.1:3333` | 即時模式 — 透過 WebSocket 連接 Claude Code |
| `127.0.0.1:3333?sim` | 模擬模式 — 使用假代理人的劇本式演示 |
| `127.0.0.1:3333?video` | 錄影模式 — 劇本式錄影模式 |
| `127.0.0.1:3333?helper` | 擺放輔助工具 — 用於調整家具位置的開發工具 |
| `127.0.0.1:3333?variant=incident` | 事故模式 — 固定開啟「上線掛了」狀態 |

## 技術架構

- **前端**：React + TypeScript + Vite
- **伺服器**：Express + WebSocket（ws）
- **儲存**：SQLite（better-sqlite3）
- **聊天 AI**：Claude CLI（`claude -p`）
- **角色圖**：自製像素風格（等角）
- **桌面應用**：Electron（選用）
- **測試**：Vitest，於每個 pull request 在 CI 上執行

## 專案結構

```
Claude-Office/
├── src/                    # React 前端
│   ├── components/         # Character、SlackChat、AgentCard、TaskBoard……
│   ├── officeReducer.ts    # 每個辦公室事件 → 辦公室會做什麼
│   ├── styles/             # office.css、incident.css……
│   └── App.tsx             # 主程式
├── server/                 # Express + WebSocket 伺服器
│   ├── index.js            # HTTP 端點 + WS 廣播
│   └── chat-db.js          # SQLite 包裝層
├── hooks/                  # Claude Code hooks
│   ├── agent-tracker.sh    # 把事件轉送給伺服器
│   ├── status-line.sh      # 餵資料給儀表
│   └── install-hooks.sh    # npm run install-hooks
├── scripts/                # 啟動／停止／診斷／聊天監聽程式
├── electron/               # 桌面應用程式
├── public/sprites/         # 像素風格角色與特效
└── docs/                   # 參考文件與圖片
```

## 安全性

- 伺服器只綁定 `127.0.0.1` — 不會暴露在網路上
- 代理人事件、權限回應與清空聊天記錄都需要 `~/.agent-office/auth-token`（權限 `0600`）裡的驗證 token；但在聊天室打字不需要
- 辦公室頁面是從啟動腳本開啟的連結取得 token；沒有 token 的話辦公室就是唯讀模式
- Hook 的請求都經過簽名，所以 token 永遠不會出現在指令列上

完整的安全性模型在[參考文件](docs/reference.md#security)裡。

## 桌面應用程式（Electron）

到 [Releases](https://github.com/W17ant/Claude-Office/releases) 下載，或自行建置：

```bash
npm run dev:electron    # 開發模式
npm run build:electron  # 建置安裝檔
```

## 貢獻

歡迎提出 Issue 與 Pull Request — 詳見 [CONTRIBUTING.md](CONTRIBUTING.md)。

## 授權

MIT — 但不包含 Dunder Mifflin 的粉絲創作部分，詳見 [NOTICE.md](NOTICE.md)。
