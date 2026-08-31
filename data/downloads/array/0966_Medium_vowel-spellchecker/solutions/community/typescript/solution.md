# Typescript Hash Solution

**Author:** jingdamai
**Votes:** 1
**Link:** [https://leetcode.com/problems/vowel-spellchecker/solutions/1122136/](https://leetcode.com/problems/vowel-spellchecker/solutions/1122136/)

---

```
const spellchecker = (wordList: string[], queries: string[]): string[] => {
  const originalWords = new Set<string>();
  const lowerWords = new Map<string, string>();
  const devowelWords = new Map<string, string>();

  for (const word of wordList) {
    originalWords.add(word);
    const lowerWord = word.toLowerCase();
    const devowelWord = devowel(lowerWord);
    if (!lowerWords.has(lowerWord)) {
      lowerWords.set(lowerWord, word);
    }
    if (!devowelWords.has(devowelWord)) {
      devowelWords.set(devowelWord, word);
    }
  }
  const res = [] as string[];

  for (const query of queries) {
    if (originalWords.has(query)) {
      res.push(query);
      continue;
    }
    const lowerQuery = query.toLowerCase();
    if (lowerWords.has(lowerQuery)) {
      res.push(lowerWords.get(lowerQuery));
      continue;
    }
    const devowelQuery = devowel(lowerQuery);
    if (devowelWords.has(devowelQuery)) {
      res.push(devowelWords.get(devowelQuery));
      continue;
    }
    res.push('');
  }
  return res;
};

const devowel = (word: string): string => {
  const newWordArr = [] as string[];
  for (const c of word) {
    if ('aeiou'.indexOf(c) !== -1) {
      newWordArr.push('_');
    } else {
      newWordArr.push(c.toLowerCase());
    }
  }
  return newWordArr.join('');
};
```