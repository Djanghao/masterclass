# Less than 100% memory JS two-lines regexp solution

**Author:** Omhet
**Votes:** 5
**Link:** [https://leetcode.com/problems/occurrences-after-bigram/solutions/398709/](https://leetcode.com/problems/occurrences-after-bigram/solutions/398709/)

---

```
const findOcurrences = (text, first, second) => {
    const regex = new RegExp(`(?<=\\\\b${first} ${second}\\\\s)\\\\w+`, 'g');
    return text.match(regex) || [];
};
```