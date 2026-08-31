# C++ || loop and check

**Author:** heder
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-subarrays-of-length-three-with-a-condition/solutions/6186939/](https://leetcode.com/problems/count-subarrays-of-length-three-with-a-condition/solutions/6186939/)

---

# Approach 1: loop and check
To check for excatly half we multiply instead of divison and modulo.

```cpp
    int countSubarrays(const vector<int>& nums) {
        int ans = 0;
        for (int i = 2; i < size(nums); ++i)
            ans += (nums[i - 2] + nums[i]) * 2 == nums[i - 1];
        return ans;
    }
```

**Complexity Analysis**
Let $$n$$ be size of ```nums``` then the

* Time complexity is $$O(n)$$, and the

* Space comlexity is $$O(1)$$, because all we need is some loop variables.

_As always: Feedback, questions, and comments are welcome. Leaving an up-vote sparks joy! :)_

**p.s. Join us on the [LeetCode The Hard Way Discord Server](https://discord.gg/hFUyVyWy2E)!**
