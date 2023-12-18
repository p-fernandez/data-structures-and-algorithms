const test = require('node:test');
const assert = require('node:assert/strict');

const { ahoCorasick } = require('./aho-corasick');

const testCases = [{
    keyWords: ['hero', 'heroic'],
    text: 'hero',
    expected: [
            [3, ['hero']]
    ]
},
{
    keyWords: ['hero', 'heroic', 'heroism'],
    text: 'the hero performed a heroic act of heroism',
    expected: [
            // "hero" is a substring of "heroic" and "heroism", so we should find it 3 times
            [7, ['hero']],
            [24, ['hero']],
            [26, ['heroic']],
            [38, ['hero']],
            [41, ['heroism']]
    ]
},
{
    keyWords: ['keyword1', 'keyword2', 'etc'],
    text: 'should find keyword1 at position 19 and keyword2 at position 30.',
    expected: [
            [19, ['keyword1']],
            [47, ['keyword2']]
    ]
}];

test.describe('Aho corasick search', () => {
  for (const testCase of testCases) {
    test(`Words:${testCase.keyWords} in text ${testCase.text}`, () => {
      assert.deepEqual(ahoCorasick(testCase.keyWords, testCase.text), testCase.expected);
    });
  }
});
