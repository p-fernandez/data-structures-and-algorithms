const test = require('node:test');
const assert = require('node:assert/strict');

const { kmp } = require('./kmp');

test.describe('knuthMorrisPratt', () => {
  test('should find word position in given text', () => {
    assert.equal(kmp('', ''), 0);
    assert.equal(kmp('a', ''), 0);
    assert.equal(kmp('a', 'a'), 0);
    assert.equal(kmp('abcbcglx', 'abca'), -1);
    assert.equal(kmp('abcbcglx', 'bcgl'), 3);
    assert.equal(kmp('abcxabcdabxabcdabcdabcy', 'abcdabcy'), 15);
    assert.equal(kmp('abcxabcdabxabcdabcdabcy', 'abcdabca'),-1);
    assert.equal(kmp('abcxabcdabxaabcdabcabcdabcdabcy', 'abcdabca'), 12);
    assert.equal(kmp('abcxabcdabxaabaabaaaabcdabcdabcy', 'aabaabaaa'), 11);
  });
});
