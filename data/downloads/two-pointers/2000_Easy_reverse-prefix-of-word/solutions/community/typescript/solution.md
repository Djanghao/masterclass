# easy solution | 100.00% beats

**Author:** q0art
**Votes:** 1
**Link:** [https://leetcode.com/problems/reverse-prefix-of-word/solutions/5829792/](https://leetcode.com/problems/reverse-prefix-of-word/solutions/5829792/)

---

![{E3946E6C-8EE4-4003-A0EA-2820A88899A3}.png](./images/0.png)

```typescript []
const reversePrefix = (string: string, char: string) => {
  const index = string.indexOf(char)

  return string.slice(0, index + 1).split("").reverse().join("").concat(string.slice(index + 1))
};
```