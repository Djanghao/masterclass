# Typescript || DP || Top-Down

**Author:** webdot
**Votes:** 0
**Link:** [https://leetcode.com/problems/restore-the-array/solutions/3448741/](https://leetcode.com/problems/restore-the-array/solutions/3448741/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
For each start index `startIndex`, iterate to the end of `s` string and for each of the indexes, find the substring from `startIndex` to `i`. If this substring is not greater than `k` or equal to 0, we can continue to find the dp from that index i.e add to the array. Once we get our start index to exceed length of `s` we return 1 as that is our base case and we are sure we've created a valid array.

# Complexity
- Time complexity: $$O(m . logk)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(m)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
function numberOfArrays(s: string, k: number): number {
    const MODULO: number = (10 ** 9) + 7;

    const dp = (startIndex: number, memo={}): number => {
        if(startIndex in memo) return memo[startIndex];

        if(startIndex === s.length) return 1;

        let noOfPossArray: number = 0;

        for (let i = startIndex + 1; i <= s.length; i++) {
            let key: string = s.substring(startIndex, i);
            if(Number(key) > k || key === '0') break; 
            noOfPossArray += dp(i, memo);
        }
        
        return memo[startIndex] = noOfPossArray % MODULO;
    }

    return dp(0) % MODULO;
};
```