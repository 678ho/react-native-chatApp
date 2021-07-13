# Chat app for Android ( React-Native)

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
│   ├── components (컴포넌트 파일 관리)
|   │   ├── Button.js
|   │   ├── Image.js
|   │   ├── index.js
|   │   ├── Input.js
|   │   └── Spinner.js
│   ├── contexts (Context API파일 관리)
|   │   ├── index.js
|   │   ├── Progress.js
|   │   └── User.js
│   ├── navigations (내비게이션 파일 관리)
|   │   ├── AuthStack.js
|   │   ├── index.js
|   │   ├── MainStack.js
|   │   └── MainTab.js
│   ├── screens (화면 파일관리)
|   │   ├── Channel.js
|   │   ├── ChannelCreation.js
|   │   ├── ChannelList.js
|   │   ├── index.js
|   │   ├── Login.js
|   │   ├── Profile.js 
|   │   └── Signup.js
│   ├── utils (프로젝트에서 이용할 기타 기능 관리)
|   │   ├── common.js 
|   │   ├── firebase.js
|   │   └── images.js
│   ├── theme.js
│   └── App.js
└── App.js
``` 
### 기능 설명

```
로그인/회원가입 : 이메일과 비밀번호를 이용한 로그인과 회원가입

프로필 : 나의 정보확인 및 변경

채널 생성: 채널 생성 기능

채널 목록 : 생성된 채널들의 목록 조회

채널 : 실시간으로 메시지를 송수신하는 독립된 공간
```
