# Chat app for Android ( React-Native)

**[뱃지나 프로젝트에 관한 이미지들이 이 위치에 들어가면 좋습니다]**  
logIn, signUp, profile, makeChannel, channelList, channel

## Getting Started / 어떻게 시작하나요?
cd react-native-chatapp
expo start

### Prerequisites / 선행 조건

아래 사항들이 설치가 되어있어야합니다.

```
@react-navigation/native
react-native-gesture-handler
react-native-reanimated
react-native-screens
react-native-safe-area-context
@react-native-community/masked-view
@react-navigation/stack
@react-navigation/bottom-tabs
styled-components
prop-types
expo-image-picker // 기기의 사진이나 영상을 가져올 수 있도록 시스템 UI에 접근할 수 있는 기능 제공.
moment // 시간을 다양한 형태로 변경하는 등 시간과 관련된 많은 기능을 제공
react-native-keyboard-aware-scroll-view // 키보드가 화면을 가리면서 생기는 불편한 점을 해결
react-native-gifted-chat // 메시지를 주고받는 채팅 화면을 쉽게 구현할 수 있도록 돕는 라이브러리.
firebase // Google Firebase 연동.
```

## 프로젝트 파일 구조

```react-native-simple-chat
├── assets
│   ├── adaptive-icon.png
│   ├── android-icon.png
│   ├── icon.png
│   ├── splash.png
│   └── favicon.png
├── src
│   ├── components
|   │   ├── Button.js
|   │   ├── Image.js
|   │   ├── index.js
|   │   ├── Input.js
|   │   └── Spinner.js
│   ├── contexts
|   │   ├── index.js
|   │   ├── Progress.js
|   │   └── User.js
│   ├── navigations
|   │   ├── AuthStack.js
|   │   ├── index.js
|   │   ├── MainStack.js
|   │   └── MainTab.js
│   ├── App.js
│   ├── theme.js
│   └── utils
└── App.js
``` 
### 테스트는 이런 식으로 동작합니다

왜 이렇게 동작하는지, 설명합니다

```
예시
```
