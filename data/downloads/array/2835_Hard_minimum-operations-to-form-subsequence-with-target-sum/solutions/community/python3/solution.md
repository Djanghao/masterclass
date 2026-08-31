# Simple [C++/Python3] Solution [Greedy]

**Author:** swo0sh
**Votes:** 9
**Link:** [https://leetcode.com/problems/minimum-operations-to-form-subsequence-with-target-sum/solutions/3965731/](https://leetcode.com/problems/minimum-operations-to-form-subsequence-with-target-sum/solutions/3965731/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The idea behind the problem is greedily selecting the bits which are required for our target number.

# Approach
<!-- Describe your approach to solving the problem. -->
First, let's see when our answer can be -1. It can only be -1 when the sum of all the numbers is less than our target. It wouldn't be -1 otherwise, as we can always reduce the nums array to just 1's and then fulfil our sum. 

Now, as we are dealing with powers of 2 here, let's create a cnt array which will store the counts of the powers of 2. Say, we have 3 1's in our nums array, then `cnt[0] = 3`, and so on. Here, I have used a gcc builtin function for this, this is quite fast. It basically calculated the number of leading zeroes in our answer, and then subtracts it from 31 to get our power, we can do the same thing using log2 but there might be precision errors, also we can achieve the same result using a while loop and just check which power of 2 is equivalent to the number we are considering.

Now, comes the interesting part. How do we go about constructing our sum. The approach is pretty straight forward. We start by looking at the lowest bits of our target number and go up. Say, we see that the target's number $$i^{th}$$ bit is set. This means we definitely need $$2^i$$. 

Now, there might be two scenarios, 

first say we have `cnt[i] > 0` then we can just reduce this `cnt[i]` by 1, and then push the remaining `cnt[i]` forward to `cnt[i+1]`. Now, why do we do this? Suppose, our `target is 3`, and `cnt[0] = 3`. Now, when we see the 0th bit of our target (3) it is set, so cnt[0] will reduce to 2. Now, if we don't forward our remaining cnt[0] to cnt[1] we wouldn't be able to make our sum. So, it's necessary to move it forward.

second, if `cnt[i] == 0` then we have to look into the more significant bits. Now, if the `cnt[j] > 0` and j is the nearest bit to i. Then we can just increase `cnt[i]` by $$2^{j - i}$$. Assume we are breaking down the single $$2^j$$ to the number of $$2^i$$. Now, even when it seems like we are breaking the $$2^j$$ completely to $$2^i$$. We are only actually breaking it such that we only incur `j - i` cost, what I mean by this is:
Say we are trying to break 16 to 2. We basically first break it into two 8's. Then choose a single 8 to break it down to two 4's, and then picking a single 4 to break it to two 2's. Thus, cost of 3, but we can also assume eight 2's after the breakdown, and the move those things forward.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n), We are traversing to calculate the sum, and also for creating the cnt array.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(1), Just the cnt array which is fixed size for this.

# Code
```C++ []
class Solution {
public:
    int minOperations(vector<int>& nums, int target) {
        using ll = long long;
        ll sum = 0;
        const int n = nums.size();
        for (int i = 0; i < n; i++) sum += (ll)nums[i];
        if (sum < target) return -1; // We can always convert every number to 1 and form our sum.
        array<int, 32> cnt = {};
        for (const int &x: nums) cnt[31 - __builtin_clz(x)]++;
        int ans = 0;
        for (int i = 0; i < 31; i++) {
            if ((target >> i) & 1) {
                if (cnt[i] > 0) --cnt[i];
                else {
                    int j = i + 1;
                    while (cnt[j] == 0) j++;
                    --cnt[j];
                    cnt[i] = (1 << (j - i));
                    ans += j - i;
                    --cnt[i];
                }
            }
            cnt[i + 1] += cnt[i] / 2;
        }
        return ans;
    }
};
```
```python []
class Solution:
    def minOperations(self, nums: List[int], target: int) -> int:
        if sum(nums) < target:
            return -1
        cnt = [0] * 32
        for num in nums:
            cnt[int(math.log2(num))] += 1
        
        ans = 0

        for i in range(31):
            if (target // (2**i)) & 1:
                if cnt[i] > 0:
                    cnt[i] -= 1
                else:
                    j = i + 1
                    while cnt[j] == 0:
                        j += 1
                    cnt[i] += 2**(j - i)
                    cnt[j] -= 1
                    cnt[i] -= 1
                    ans += (j - i)
            cnt[i + 1] += cnt[i] // 2
        return ans
```

