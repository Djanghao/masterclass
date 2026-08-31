# Primitive TypeScript/JavaScript solution

**Author:** DKurilo
**Votes:** 0
**Link:** [https://leetcode.com/problems/short-encoding-of-words/solutions/2174597/](https://leetcode.com/problems/short-encoding-of-words/solutions/2174597/)

---

No fancy data structures, no fancy algorithms. Just reverse, sort, reduce..
```TypeScript
  const minimumLengthEncoding = (words: string[]): number =>
    words
      .map((w) => w.split('').reverse().join(''))
      .sort()
      .reduce((res: string[], w: string): string[] => {
        if (res.length === 0) {
          return [w];
        }
        const lastWord = res[res.length - 1];
        if (w.startsWith(lastWord)) {
          res.pop();
        }
        res.push(w);
        return res;
      }, [])
      .join('#').length + 1;
```
