# Simple TS Solution

**Author:** vishalramani91
**Votes:** 3
**Link:** [https://leetcode.com/problems/maximum-distance-in-arrays/solutions/3589452/](https://leetcode.com/problems/maximum-distance-in-arrays/solutions/3589452/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
function maxDistance(arrays: number[][]): number {
    let n = arrays.length;
    let min = arrays[0][0];
    let max = arrays[0][arrays[0].length-1];
    let ans = Number.MIN_SAFE_INTEGER;

    for(let i = 1; i < n; i++){
        let m = arrays[i].length;

        ans = Math.max(ans, Math.abs(arrays[i][0] - max));
        ans = Math.max(ans, Math.abs(arrays[i][m-1] - min));

        max = Math.max(max, arrays[i][m-1]);
        min = Math.min(min, arrays[i][0]);
    }

    return ans;
};
```

Feel free to comment in case of any doubts.
Please upvote if you like my solution.