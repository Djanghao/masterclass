# Solution with filtered array of words

**Author:** mavrayev
**Votes:** 0
**Link:** [https://leetcode.com/problems/string-matching-in-an-array/solutions/5960127/](https://leetcode.com/problems/string-matching-in-an-array/solutions/5960127/)

---

# Complexity
- Time complexity:
Beats
96.55%

- Space complexity:
Beats
72.41%

# Code
```typescript []
function stringMatching(words: string[]): string[] {
  let result: string[] = [];

  for (let word of words) {
    let filteredWords = words.filter((item) => item !== word);

    if (filteredWords.some((_word) => _word.includes(word))) {
      result.push(word);
    }
  }

  return result;
}
```