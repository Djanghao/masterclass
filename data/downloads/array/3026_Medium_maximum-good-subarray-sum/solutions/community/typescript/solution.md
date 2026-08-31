# TypeScript, beats 100%

**Author:** jacobbassett
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-good-subarray-sum/solutions/5081603/](https://leetcode.com/problems/maximum-good-subarray-sum/solutions/5081603/)

---


# Code
```
function maximumSubarraySum(nums: number[], k: number): number {
        let ans: number = -Infinity;
        let prefix: number = 0;
        let seen= new Map<number, number>();

        for (let n of nums) {
            seen.set(n, Math.min(seen.get(n) ?? Infinity, prefix));
            prefix += n;
            ans = Math.max(ans, prefix - (seen.get(k + n) ?? Infinity), prefix - (seen.get(n - k) ?? Infinity));
        }

        return ans !== -Infinity ? ans : 0;
};
```