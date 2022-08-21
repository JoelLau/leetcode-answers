import { canConstruct } from './383_random-note';

/**
 * # 383. Ransom Note
 *
 * https://leetcode.com/problems/ransom-note/
 *
 *
 * Given two strings `ransomNote` and `magazine`, return `true` if `ransomNote` can be constructed by using the letters from `magazine` and `false` otherwise. <br />
 *
 * Each letter in `magazine` can only be used once in `ransomNote`.
 */
describe('383. Ransom Note', () => {
  describe('canConstruct', () => {
    /**
     * Input:  ransomNote = "a", magazine = "b"
     * Output: false
     */
    it('Example 1', () => {
      expect(canConstruct('a', 'b')).toStrictEqual(false);
    });

    /**
     * Input:  ransomNote = "aa", magazine = "ab"
     * Output: false
     */
    it('Example 2', () => {
      expect(canConstruct('aa', 'ab')).toStrictEqual(false);
    });

    /**
     * Input:  ransomNote = "aa", magazine = "ab"
     * Output: false
     */
    it('Example 2', () => {
      expect(canConstruct('aa', 'aab')).toStrictEqual(true);
    });
  });
});
