# TypeScript / JavaScript + Regex Solution

**Author:** pth_1641
**Votes:** 0
**Link:** [https://leetcode.com/problems/evaluate-the-bracket-pairs-of-a-string/solutions/4264916/](https://leetcode.com/problems/evaluate-the-bracket-pairs-of-a-string/solutions/4264916/)

---

```typescript []
function evaluate(s: string, knowledge: string[][]): string {
    knowledge.forEach(([key, value]) => {
        const regex: RegExp = new RegExp(`\\\\(${key}\\\\)`, 'g');
        s = s.replace(regex, value);
    });
    return s.replace(/\\(\\w+\\)/g ,'?');
};
```
```javascript []
function evaluate(s, knowledge) {
    knowledge.forEach(([key, value]) => {
        const regex = new RegExp(`\\\\(${key}\\\\)`, 'g');
        s = s.replace(regex, value);
    });
    return s.replace(/\\(\\w+\\)/g ,'?');
};
```


