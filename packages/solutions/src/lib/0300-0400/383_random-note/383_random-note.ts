/**
 * canConstruct
 *
 * @param ransomNote
 * @param magazine
 * @returns
 *      `true`  if `ransomNote` can be constructed by using the letters from `magazine`
 *      `false` if otherwise
 */
export function canConstruct(ransomNote: string, magazine: string): boolean {
  const magazineCharCountMap: CharCountMap = getCharCountMap(magazine);
  const ransomNoteCharCountMap: CharCountMap = getCharCountMap(ransomNote);

  return !Object.entries(ransomNoteCharCountMap).some(
    ([ch, count]) => count > (magazineCharCountMap[ch] || 0)
  );
}

export function getCharCountMap(str: string): CharCountMap {
  return str.split('').reduce((prev, curr) => {
    prev[curr] = (prev[curr] || 0) + 1;
    return prev;
  }, {} as CharCountMap);
}

export interface CharCountMap {
  [ch: string]: number;
}
