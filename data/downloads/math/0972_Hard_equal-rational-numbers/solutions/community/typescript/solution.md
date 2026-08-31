# TS solution

**Author:** GennadySX
**Votes:** 0
**Link:** [https://leetcode.com/problems/equal-rational-numbers/solutions/4654577/](https://leetcode.com/problems/equal-rational-numbers/solutions/4654577/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
function isRationalEqual(s: string, t: string): boolean {
    let ans = Math.abs(toDouble(s) - toDouble(t));
    return ans < 0.000000002;
}

function toDouble(s: string): number {
    let inStr = "", fnStr = "", rnStr = "";
    let i = 0;
    while (i < s.length && s[i] != '.') {
        inStr += s[i];
        i++;
    }
    i++;
    while (i < s.length && s[i] != '(') {
        fnStr += s[i];
        i++;
    }
    i++;
    while (i < s.length && s[i] != ')') {
        rnStr += s[i];
        i++;
    }
    let a = 0;
    if (inStr.length != 0) a = parseInt(inStr);
    i = 0;
    while (i < fnStr.length) {
        a = a * 10 + parseInt(fnStr[i]);
        i++;
    }
    if (i < 8) {
        if (rnStr.length == 0) {
            while (i <= 8) { a *= 10; i++; }
        }
        else {
            let j = 0;
            while (i <= 8) {
                a = a * 10 + parseInt(rnStr[j % rnStr.length]);
                j++;
                i++;
            }
        }
    }
    return a / 10e8;
}
```