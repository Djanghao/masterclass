# Typescript solution

**Author:** josevicente
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-divisibility-array-of-a-string/solutions/3527602/](https://leetcode.com/problems/find-the-divisibility-array-of-a-string/solutions/3527602/)

---

```
function divisibilityArray(word: string, m: number): number[] {

    const result = [];
    let num = 0;
    let val = 0;

    for (let i = 0; i < word.length; i++) {
        num = parseInt(val + word[i]);
        val = num % m;
        result.push(val ? 0 : 1);
    }

    return result;

};
```