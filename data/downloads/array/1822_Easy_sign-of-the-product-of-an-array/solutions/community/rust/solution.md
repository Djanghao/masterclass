# Check the sign - Explained

**Author:** tr1nity
**Votes:** 12
**Link:** [https://leetcode.com/problems/sign-of-the-product-of-an-array/solutions/3475335/](https://leetcode.com/problems/sign-of-the-product-of-an-array/solutions/3475335/)

---

The first thought probably is just to simulate it by calculating the product of `nums` and check the sign like what problem statement says. However, We don't need to do that since we are not interested in the value but the sign. Therefore, we can just check the sign only. If we meet a zero, we can exit early since the final sign must be 0 anyway.

<iframe src="https://leetcode.com/playground/fZuQh2vv/shared" frameBorder="0" width="100%" height="300"></iframe>

You may notice that when the number is positive, basically it won't change the sign. Hence, we can just focus on negative numbers and flip the sign when we meet one. Zero case remain unchanged.

```cpp
class Solution {
public:
    int arraySign(vector<int>& nums) {
        int ans = 1;
        for (auto x : nums) {
            if (x == 0) return 0;
            if (x < 0) ans = -ans;
        }
        return ans;
    }
};
```