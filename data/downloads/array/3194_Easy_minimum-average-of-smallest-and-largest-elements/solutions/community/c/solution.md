# C++ || sort and two pointers || fast

**Author:** heder
**Votes:** 7
**Link:** [https://leetcode.com/problems/minimum-average-of-smallest-and-largest-elements/solutions/5356932/](https://leetcode.com/problems/minimum-average-of-smallest-and-largest-elements/solutions/5356932/)

---

# Approach 1: sort and two pointers
After sorting the input we can use two pointers to loop from the front and back.

```cpp
    double minimumAverage(vector<int>& nums) {
        sort(begin(nums), end(nums));
        double ans = numeric_limits<double>::max();
        for (int l = 0, r = ssize(nums) - 1; l < r; ++l, --r)
            ans = min(ans,  0.5 * (nums[l] + nums[r]));
        return ans;
    }
```

**Complexity Analysis**
Let $$n$$ be the length of the input array ```nums``` then the 

* Time complexity is $$O(n \\log n)$$ as we are sorting ```nums```, and the

* Space comlexity is $$O(\\log n)$$ and not $$O(1)$$ because ```std::sort``` is not constant space.

_As always: Feedback, questions, and comments are welcome. Leaving an up-vote sparks joy! :)_

**p.s. Join us on the [LeetCode The Hard Way Discord Server](https://discord.gg/hFUyVyWy2E)!**
