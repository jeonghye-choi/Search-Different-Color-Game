# [Search Different Color Game](https://search-different-color-game.vercel.app/)

Numble Challenge의 '상태관리 라이브러리를 사용하지 않고
다른 색깔 찾기 게임 제작' 작업물입니다.

## How to Develop

1. Webpack 설정

   react와 webpack을 이해하기 위해, CRA(Create-React-App) 프로젝트 생성 방식이 아닌, 수동으로 리액트 환경을 설정했다.

   <br/>

2. 컴포넌트 설계

   위치적인 부분과 기능적인 부분을 고려해 컴포넌트를 분리했다.

   <br/>

3. 상태 관리

   최상위 컴포넌트에서 하위 컴포넌트로 state를 내려줬다.

   <br/>

4. 색상 변경 및 정답 색상 만들기

   게임은 매 stage마다 색상이 다르고, stage가 올라감에 따라 정답인 색과 아닌 색의 차이가 줄어든다.

   - `randomRGB` hook function을 만들어 랜덤 색상을 만들었다.

   - `changeColorByDifference` hook function을 만들어 색상과 차이정도를 input으로 받고 정답색상을 output 한다.

5. Github Issues를 활용해 프로젝트 관리

<br/>

## Getting Started

**Prerequisite**

- node : `v16.13`

**Execute**

```bash
# 1. 설치하기
$ npm install

# 2. 실행하기
$ npm run dev
#또는
$ yarn start
```

<br/>

## Feedback from Numble

<img width="842" alt="스크린샷 2022-05-24 오전 3 18 08" src="https://user-images.githubusercontent.com/54584063/169882219-c3d37489-a4c3-4731-b39e-a04ced43004d.png">
