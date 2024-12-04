🕹️ # **틱택토 게임 (Tic-Tac-Toe)**
React를 활용하여 제작한 간단하고 인터랙티브한 틱택토 게임입니다.
useState, useEffect, useMemo와 같은 React 훅을 활용하여 게임 상태를 관리하고 로직을 구현했습니다.

📋 # **주요 기능**
2인용 모드: 플레이어가 번갈아 가며 "X"와 "O"로 게임을 진행합니다.
동적 UI: 현재 활성화된 플레이어 및 승리 여부를 실시간으로 표시합니다.
승리/무승부 판단:
게임에서 승리 조건을 만족하면 승자를 알립니다.
모든 칸이 채워졌으나 승자가 없을 경우 무승부로 처리합니다.
다시 시작 기능: 게임 종료 후 한 번의 클릭으로 새로운 게임을 시작할 수 있습니다.

🛠️ # **사용 기술**
프론트엔드: React
스타일링: CSS

📂 # **프로젝트 구조**
java

````project/
├── src/
│   ├── components/
│   │   ├── Player.jsx
│   │   ├── GameBoard.jsx
│   │   ├── Log.jsx
│   │   ├── GameOver.jsx
│   ├── App.jsx
│   ├── index.js
│   └── winning-combinations.js
├── public/
│   ├── index.html
│   └── bg-pattern-dark.png
├── README.md
└── package.json```

⚡# **설치 및 실행 방법**
저장소 클론

bash
`git clone https://github.com/keonU206/tic-tac-toe.git`


🚀 # **게임 사용 방법**
플레이어 선택
첫 번째 플레이어는 "X"로, 두 번째 플레이어는 "O"로 게임을 시작합니다.

게임 진행
각 플레이어는 차례대로 빈 칸을 클릭하여 자신의 기호를 표시합니다.

게임 종료
승리 조건(가로, 세로, 대각선 중 하나)을 만족하면 승자가 표시됩니다.
승자가 없고 모든 칸이 채워지면 무승부로 표시됩니다.

다시 시작
게임 종료 후 "Rematch" 버튼을 눌러 새 게임을 시작할 수 있습니다.
````
