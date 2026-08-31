# [TypeScript] Best memory (100%), speed 78% (O(n))

**Author:** denshell
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-unique-characters-of-all-substrings-of-a-given-string/solutions/2327470/](https://leetcode.com/problems/count-unique-characters-of-all-substrings-of-a-given-string/solutions/2327470/)

---

```
function uniqueLetterString(s: string): number {
  const lastIndexes: number[] = new Array(26).fill(-1);
  const contributionsPalette: number[] = new Array(26).fill(0);
  let total = 0;

  for (let i = 0; i < s.length; i++) {
    // 65 is character code of 'A'
    const characterIndex = s.charCodeAt(i) - 65;

    contributionsPalette[characterIndex] = i - lastIndexes[characterIndex];

    for (let j = 0; j < 26; j++) {
      total += contributionsPalette[j];
    }
    
    lastIndexes[characterIndex] = i;
  }

  return total;
};
```