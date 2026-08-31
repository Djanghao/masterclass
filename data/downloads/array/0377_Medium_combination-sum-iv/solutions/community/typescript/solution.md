# DP - Easy javascript/typescript solution

**Author:** Abidi_Ramzi
**Votes:** 2
**Link:** [https://leetcode.com/problems/combination-sum-iv/solutions/3769715/](https://leetcode.com/problems/combination-sum-iv/solutions/3769715/)

---

# Code
```
var combinationSum4 = function (nums, target) {
    const canSumDP = (target, arr, sum, memo) => {
        if (sum > target) {
            return 0;
        }
        if (sum === target) {
            return 1;
        }
        if (sum in memo) {
            return memo[sum];
        }
        let ans = 0;
        for (let i = 0; i < arr.length; i++) {
            ans += canSumDP(target, arr, sum + arr[i], memo);
        }
        memo[`${sum}`] = ans;
        return ans;
    };
    return canSumDP(target, nums, 0, {});
};

```