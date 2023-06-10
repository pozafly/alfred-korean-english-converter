# Korean English Converter Alfred Workflow

잘못 입력한 영타를 한글로, 한타를 영문으로 변환해주는 Workflow. 그리고 [개발기](https://pozafly.github.io/tools/alfred-korean-english-converter/).

![converter](/converter.gif)

## 설치

[다운로드](https://github.com/pozafly/alfred-korean-english-converter/raw/main/workflow/Korean-English-Converter.alfredworkflow)를 클릭하면 파일을 다운로드 받으실 수 있어요 :)

다운로드 파일을 실행시켜 Alfred에서 install 하시면 사용하실 수 있습니다.

## 사용법

### Alfred 창에서

1. 입력 문자를 드래그 합니다.
2. Command-Spacebar 키를 눌러 알프레드 창을 띄웁니다.
3. `zz` 단축키를 입력 후 Enter 키를 누릅니다.
4. 편잡창에 변환된 문자열이 들어갑니다.

### 단축키로

1. 입력 문자를 드래그 합니다.
2. `command` + `control` + `/` 키를 누릅니다.

<br />

## 주의사항

첫 글자가 무엇인지에 따라서 변환됩니다. 만약 첫 글자가 영어라면 한글로 변환되고, 첫 글자가 한글이라면 영어로 변환됩니다.

## 업데이트

| 버전  | 종류    | 내용                                                                                                                          |
| ----- | ------- | ----------------------------------------------------------------------------------------------------------------------------- |
| 0.0.5 | Fix     | - Command-C 키를 눌러 복사하는 과정은 이제 제거 되었습니다. <br />- 붙여넣어진 후 커서가 한줄 내려가는 문제가 해결되었습니다. |
| 0.0.6 | Fix     | 첫글자가 대문자일 경우 변환 오류가 해결되었습니다.                                                                            |
| 0.0.7 | Feature | 문자를 드래그로 선택 후 `command` + `control` + `/` 키를 누르면 자동 변환되는 단축키를 할당했습니다.                          |
| 0.0.8 | Fix     | 대문자를 한글로 변경 시 쌍이 변환되지 않는 문제 해결되었습니다.                                                               |

## 개발 환경

- JavaScript로 만들어졌으며 클립보드의 값을 가져오기 위해 AppleScript가 사용되었습니다.
- 내부 로직은 [한영타변환기](https://theyt.net/wiki/%ED%95%9C%EC%98%81%ED%83%80%EB%B3%80%ED%99%98%EA%B8%B0)의 도움을 받았습니다.
