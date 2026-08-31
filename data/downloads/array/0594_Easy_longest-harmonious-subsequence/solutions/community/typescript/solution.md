# [One Pass] - Readable TypeScript/JavaScript

**Author:** dustinkiselbach
**Votes:** 3
**Link:** [https://leetcode.com/problems/longest-harmonious-subsequence/solutions/1049572/](https://leetcode.com/problems/longest-harmonious-subsequence/solutions/1049572/)

---

```
function findLHS(nums: number[]): number {
    const map: Record<string, number> = {}
    let res = 0

    for (let i = 0; i < nums.length; i++) {
        map[nums[i]] ? map[nums[i]]++ : map[nums[i]] = 1

        if (map[nums[i] - 1]) res = Math.max(res, map[nums[i]] + map[nums[i]-1])
        if (map[nums[i] + 1]) res = Math.max(res, map[nums[i]] + map[nums[i]+1])
    }

    return res
};
```