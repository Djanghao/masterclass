# time: O(2 pow N), space: O(2 pow N)

**Author:** brudnovskyi
**Votes:** 0
**Link:** [https://leetcode.com/problems/generate-binary-strings-without-adjacent-zeros/solutions/5987085/](https://leetcode.com/problems/generate-binary-strings-without-adjacent-zeros/solutions/5987085/)

---

```typescript []
function validStrings(n: number): string[] {
    const result: string[] = [];

    (function decision(str: string) {
        if (str.length >= n) {
            result.push(str);
            return;
        }

        str[str.length - 1] !== "0" && decision(str + "0");
        decision(str + "1");
    })("")

    return result;
};
```