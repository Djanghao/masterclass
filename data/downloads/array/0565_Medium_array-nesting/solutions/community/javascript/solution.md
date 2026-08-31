# JavaScript DFS with cache Easy to understand

**Author:** ChaoWan_2021
**Votes:** 2
**Link:** [https://leetcode.com/problems/array-nesting/solutions/626837/](https://leetcode.com/problems/array-nesting/solutions/626837/)

---

```
var arrayNesting = function(nums) {
    const visited = new Set();
    const dfs = (num, len) => {
        if(visited.has(num)) return len;
        visited.add(num);
        len++;
        return dfs(nums[num], len);
    }
    return nums.reduce((len, curr) => visited.has(curr) ? len : Math.max(dfs(curr,  0), len), 0);
};
```