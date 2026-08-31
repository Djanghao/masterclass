# Linear time, use subsum frequency array

**Author:** sdfgrhtsfdhfs
**Votes:** 2
**Link:** [https://leetcode.com/problems/number-of-same-end-substrings/solutions/5676562/](https://leetcode.com/problems/number-of-same-end-substrings/solutions/5676562/)

---

# Intuition
For every substring, count how often each letter shows up. If a letter shows up 6 times, then there are 6+5+4+..+1 possible substrings that start and end in that letter. 

Make it linear by keeping track of a subsum frequency of each letter, up to that index. 


# Complexity
- Time complexity: linear in s.length
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```javascript []
/**
 * @param {string} s
 * @param {number[][]} queries
 * @return {number[]}
 */
var sameEndSubstringCount = function (s, queries) {
    const n = s.length;
    let freq = new Array(n + 1).fill().map(() => ({}));
    let count = [];

    for (let i = 0; i < n; i++) {
        let char = s[i];
        let copy = { ...freq[i] };
        copy[char] = (copy[char] || 0) + 1;
        freq[i + 1] = copy
    }

    for (const [l, r] of queries) {
        let right = freq[r + 1];
        let left = freq[l];
        let num = 0;
        for (const char in right) {
            let val = right[char] - (left[char] || 0);
            num += val * (val + 1) / 2; // 1+2+3....+val
        }
        count.push(num);

    }

    return count;
};
```