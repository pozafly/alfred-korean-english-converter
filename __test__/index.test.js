const convert = require('../src/index.js');

describe('로직 테스트', () => {
  test('"Abcd"를 변환하면 "뮻ㅇ" 값이 반환된다.', () => {
    expect(convert('Abcd')).toBe('뮻ㅇ');
  });

  test('"Commond"를 변환하면 "채ㅡㅡㅐㅜㅇ" 값이 반환된다.', () => {
    expect(convert('Commond')).toBe('채ㅡㅡㅐㅜㅇ');
  });

  test('"황선태"를 변환하면 "ghkdtjsxo" 값이 반환된다.', () => {
    expect(convert('황선태')).toBe('ghkdtjsxo');
  });

  test('"wkfahtdlqfurgks gksxkdhk dudxkfmf qusghksgownqslek."를 변환하면 "잘못입력한 한타와 영타를 변환해줍니다." 값이 반환된다.', () => {
    expect(convert('wkfahtdlqfurgks gksxkdhk dudxkfmf qusghksgownqslek.')).toBe(
      '잘못입력한 한타와 영타를 변환해줍니다.'
    );
  });

  test('"채ㅜㅍㄷㄳㄴ 솓 ㅈ개ㅜㅎ 쇼ㅔㄷ ㅐㄹ ㅏㅐㄱㄷ무 뭉 두히ㅑ노 쇼ㅔㅑㅜㅎ."를 변환하면 "converts the wrong type of korean and english typing." 값이 반환된다.', () => {
    expect(
      convert(
        '채ㅜㅍㄷㄳㄴ 솓 ㅈ개ㅜㅎ 쇼ㅔㄷ ㅐㄹ ㅏㅐㄱㄷ무 뭉 두히ㅑ노 쇼ㅔㅑㅜㅎ.'
      )
    ).toBe('converts the wrong type of korean and english typing.');
  });

  test('"dlfjgrp Tjwlseks akfdlek. dlrp sjan Qkrclseks akfdlek. zzzz..."를 변환하면 "이렇게 써진단 말이다. 이게 너무 빡친단 말이다. ㅋㅋㅋㅋ..." 값이 반환된다.', () => {
    expect(
      convert('dlfjgrp Tjwlseks akfdlek. dlrp sjan Qkrclseks akfdlek. zzzz...')
    ).toBe('이렇게 써진단 말이다. 이게 너무 빡친단 말이다. ㅋㅋㅋㅋ...');
  });
});
