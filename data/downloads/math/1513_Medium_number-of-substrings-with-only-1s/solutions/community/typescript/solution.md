# TypeScript - Math

**Author:** amal-ps
**Votes:** 2
**Link:** [https://leetcode.com/problems/number-of-substrings-with-only-1s/solutions/3917569/](https://leetcode.com/problems/number-of-substrings-with-only-1s/solutions/3917569/)

---

# Code
```
function numSub(s) {
    let count = 0;
    let permuSum = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] == '1') {
            count = count + 1;
        } else {
            permuSum = (permuSum + permutation(count)) % (10 ** 9 + 7);
            count = 0;
        }
    }
    permuSum = (permuSum + permutation(count)) % (10 ** 9 + 7);
    return permuSum;
}

function permutation(n) {
    return (n * (n + 1) / 2) % (10 ** 9 + 7);
}

```