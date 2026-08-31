# C++ O(n) and O(nlogn)

**Author:** jianchao-li
**Votes:** 448
**Link:** [https://leetcode.com/problems/minimum-size-subarray-sum/solutions/59090/](https://leetcode.com/problems/minimum-size-subarray-sum/solutions/59090/)

---

The `O(n)` solution is to use two pointers: `l` and `r`. First we move `r` until we get a `sum  >= s`, then we move `l` to the right until `sum < s`. In this process, store the minimum length between `l` and `r`. Since each element in `nums` will be visited by `l` and `r` for at most once. This algorithm is of `O(n)` time.

```cpp
class Solution {
public:
    int minSubArrayLen(int s, vector<int>& nums) {
        int l = 0, r = 0, n = nums.size(), sum = 0, len = INT_MAX;
        while (r < n) {
            sum += nums[r++];
            while (sum >= s) {
                len = min(len, r - l);
                sum -= nums[l++];
            }
        }
        return len == INT_MAX ? 0 : len;
    }
};
```

Then comes the `O(nlogn)` solution. This less efficient one turns out to be more difficult to come up with.

First, we maintain an array of accumulated sums of elements in `nums` according to the following two equations.

1. `sums[0] = 0`
2. `sums[i] = nums[0] + ... + nums[i - 1]` for `i > 0`

Then, for each `sums[i] >= s`, we search for the first `sums[j] > sums[i] - s (j < i)` using binary search. In this case, we also have `sums[j - 1] <= sums[i] - s`. If we plug in the definition for `sums`, we have

* `nums[0] + ... + nums[j - 1] > nums[0] + ... + nums[j - 1] + nums[j] + ... + nums[i - 1] - s`
* `nums[0] + ... + nums[j - 2] <= nums[0] + ... + nums[j - 2] + nums[j - 1] + ... + nums[i - 1] - s`

If we minus the left-hand side from both inequalities, we have

* `0 > nums[j] + ... + nums[i - 1] - s`
* `0 <= nums[j - 1] + ... + nums[i - 1] - s`

So, we have `nums[j - 1] + ... + nums[i - 1] >= s` but `nums[j] + ... + nums[i - 1] < s`. So `nums[j-1..i-1]` is the shortest subarray with sum not less than `s` **ending at `i - 1`**. After traversing all possible `i`, we will find out the shortest subarray with sum not less than `s`.

By the way, a `0` is added to the head of `sums` to account for cases like `nums = [3], s = 3`.

```cpp
class Solution {
public:
    int minSubArrayLen(int s, vector<int>& nums) {
        int n = nums.size(), len = INT_MAX;
        vector<int> sums(n + 1, 0);
        for (int i = 1; i <= n; i++) {
            sums[i] = sums[i - 1] + nums[i - 1];
        }
        for (int i = n; i >= 0 && sums[i] >= s; i--) {
            int j = upper_bound(sums.begin(), sums.end(), sums[i] - s) - sums.begin();
            len = min(len, i - j + 1);
        }
        return len == INT_MAX ? 0 : len;
    }
};
```