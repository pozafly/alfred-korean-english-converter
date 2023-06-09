# Korean English Converter Alfred Workflow

잘못 입력한 영타와 한타, 그리고 한타와 영타를 변환해줍니다.

![converter](/converter.gif)

## 설치

[다운로드](https://github.com/pozafly/raw/main/alfred-korean-english-converter/src/Korean-English Converter.alfredworkflow)를 클릭하면 파일을 다운로드 받으실 수 있어요 :)

## 사용법

1. 입력 문자를 드래그 합니다.
2. Command-C 키를 눌러 복사합니다.
3. Command-Spacebar 키를 눌러 알프레드 창을 띄웁니다.
4. `zz` 단축키를 입력 후 Enter
5. 편잡창에 변환된 문자열이 자동으로 들어갑니다.

## 주의사항

첫 글자가 무엇인지에 따라서 변환됩니다. 만약 첫 글자가 영어라면 한글로 변환되고, 첫 글자가 한글이라면 영어로 변환됩니다.

## 개발 환경

- JavaScript로 만들어졌으며 클립보드의 값을 가져오기 위해 AppleScript가 사용되었습니다.
- 내부 로직은 [한영타변환기](https://theyt.net/wiki/%ED%95%9C%EC%98%81%ED%83%80%EB%B3%80%ED%99%98%EA%B8%B0)의 도움을 받았습니다.
