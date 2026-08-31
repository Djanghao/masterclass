# Typescript count + merge sort  (Runtime beats 100%)

**Author:** alexgavrilov
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-number-of-keypresses/solutions/4307309/](https://leetcode.com/problems/minimum-number-of-keypresses/solutions/4307309/)

---

# Complexity
- Time complexity:
O(NlogN)

- Space complexity:
O(1)

# Code
```
function minimumKeypresses(s: string): number {
    const countChrs = new Array(26).fill(0);
    let ans = 0;

    for (let i = 0; i < s.length; i++) {
        countChrs[s[i].charCodeAt(0) - 'a'.charCodeAt(0)] += 1; 
    }

    countChrs.sort((a, b) => b - a);
    let i = 0;
    let j = 1;

    while (countChrs[i] > 0) {
        ans += countChrs[i] * j;
        i++;
        if (i % 9 == 0) {
            j += 1;
        }
    }

    return ans;
};
```