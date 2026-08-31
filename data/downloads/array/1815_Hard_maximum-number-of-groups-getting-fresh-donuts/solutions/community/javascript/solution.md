# Javascript solution with DP and greedy

**Author:** sarfraj2511
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-groups-getting-fresh-donuts/solutions/4989881/](https://leetcode.com/problems/maximum-number-of-groups-getting-fresh-donuts/solutions/4989881/)

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
function maxHappyGroups(bz, groups) {
    const dp = new Map();

    function dfs(cnt, left) {
        const key = cnt.toString();
        if (dp.has(key)) {
            return dp.get(key);
        }

        let res = 0;
        for (let j = 1; j < bz; ++j) {
            if (cnt[j] > 0) {
                --cnt[j];
                res = Math.max(res, (left === 0) + dfs(cnt, (bz + left - j) % bz));
                ++cnt[j];
            }
        }

        dp.set(key, res);
        return res;
    }

    const cnt = new Array(bz).fill(0);
    let res = 0;
    for (const group of groups) {
        if (group % bz === 0) {
            ++res;
        } else if (cnt[bz - group % bz] > 0) {
            --cnt[bz - group % bz];
            ++res;
        } else {
            ++cnt[group % bz];
        }
    }

    return dfs(cnt, 0) + res;
}



```