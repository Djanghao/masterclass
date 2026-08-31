# 🔥 [LeetCode The Hard Way] 🔥 Explained Line By Line

**Author:** tr1nity
**Votes:** 15
**Link:** [https://leetcode.com/problems/find-the-maximum-divisibility-score/solutions/3422204/](https://leetcode.com/problems/find-the-maximum-divisibility-score/solutions/3422204/)

---

C++

```cpp
class Solution {
public:
    int maxDivScore(vector<int>& nums, vector<int>& divisors) {
        int ans = -1, mx_cnt = -1;
        // for each divisor
        for (auto d : divisors) {
            int cnt = 0;
            // we check each number `x`
            for (auto x : nums) {
                // to see if `x` can be divisible by `d`
                if (x % d == 0) {
                    // if so, increase the counter by 1
                    cnt += 1;
                }
            }
            // if the counter is greater than the current max
            if (cnt > mx_cnt) {
                // then update hte current max
                mx_cnt = cnt;
                // `d` will be the possible answer
                ans = d;
            } else if (cnt == mx_cnt) {
                // however, if the counter is same as the current max
                // then we need to take the min one
                ans = min(ans, d);
            }
        }
        return ans;
    }
};
```

Python

```py
class Solution:
    def maxDivScore(self, nums: List[int], divisors: List[int]) -> int:
        res = -1
        mx_cnt = -1
        # for each divisor
        for d in divisors:
            cnt = 0
            # we check each number `x`
            for x in nums:
                # to see if `x` can be divisible by `d`
                if x % d == 0:
                    # if so, increase the counter by 1
                    cnt += 1
            # if the counter is greater than the current max
            if cnt > mx_cnt:
                # then update hte current max
                mx_cnt = cnt
                # `d` will be the possible answer
                res = d
            elif cnt == mx_cnt:
                # however, if the counter is same as the current max
                # then we need to take the min one
                res = min(res, d)
        return res
```