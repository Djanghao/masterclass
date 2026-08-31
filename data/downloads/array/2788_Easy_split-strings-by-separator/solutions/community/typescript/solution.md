# TypeScript Solution

**Author:** pth_1641
**Votes:** 1
**Link:** [https://leetcode.com/problems/split-strings-by-separator/solutions/3961972/](https://leetcode.com/problems/split-strings-by-separator/solutions/3961972/)

---

```
function splitWordsBySeparator(words: string[], separator: string): string[] {
    const newArr = words.join(separator).split(separator).filter(Boolean);
    return newArr;
};
```