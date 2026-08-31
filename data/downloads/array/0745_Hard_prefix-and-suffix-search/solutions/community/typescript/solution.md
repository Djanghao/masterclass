# [Typescript] One Hash Map Simple Solution

**Author:** jingdamai
**Votes:** 1
**Link:** [https://leetcode.com/problems/prefix-and-suffix-search/solutions/1185162/](https://leetcode.com/problems/prefix-and-suffix-search/solutions/1185162/)

---

```
class WordFilter {
  wordMap: Map<string, number>;
  constructor(words: string[]) {
    this.wordMap = new Map<string, number>();
    words.forEach((word, i) => {
      for (let prefixEnd = 0; prefixEnd < word.length; prefixEnd++) {
        const prefix = word.substring(0, prefixEnd + 1);
        for (let suffixStart = 0; suffixStart < word.length; suffixStart++) {
          const suffix = word.substring(suffixStart);
          this.wordMap.set(`${prefix}#${suffix}`, i);
        }
      }
    });
  }

  f(prefix: string, suffix: string): number {
    const key = `${prefix}#${suffix}`;
    return this.wordMap.has(key) ? this.wordMap.get(key) : -1;
  }
}

/**
 * Your WordFilter object will be instantiated and called as such:
 * var obj = new WordFilter(words)
 * var param_1 = obj.f(prefix,suffix)
 */
```