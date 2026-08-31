# [Java/C++/Python] Just Sum up Increments

**Author:** lee215
**Votes:** 44
**Link:** [https://leetcode.com/problems/minimum-operations-to-make-array-equal-to-target/solutions/5509031/](https://leetcode.com/problems/minimum-operations-to-make-array-equal-to-target/solutions/5509031/)

---

# **Intuition**
One difficulty is that it can increment or decrement.

The prerequisite problem is:
In one operation, you can select any subarray and increment.
What's minimum operation,
from zeros array to `A`.

Summarize the solution is,
Sum the increments of diff:
`res = A[0] + sum(max(A[i] - A[i - 1], 0))`

Practice this problem in [1526. Minimum Number of Increments on Subarrays to Form a Target Array](https://leetcode.com/problems/minimum-number-of-increments-on-subarrays-to-form-a-target-array/discuss/754674/JavaC%2B%2BPython-Comparison-of-Consecutive-Elements)
<br>

# **Explanation**
Exactly the same:
Calculate the diff array `A[i] = nums[i] - target[i]`,
and then sum up the increments.

**No need** to split positive and negative.
Ebbs and flows, increments and decrements.
Just need to calculate the sum of increments
<br>

# **Complexity**
Time `O(n)`
Space `O(1)`
<br>

**Java**
```java
    public long minimumOperations(int[] A, int[] target) {
        long res = 0, pre = 0;
        for (int i = 0; i < A.length; ++i) {
            res += Math.max(target[i] - A[i] - pre, 0);
            pre = target[i] - A[i];
        }
        return res + Math.max(-pre, 0);
    }
```

**C++**
```cpp
    long long minimumOperations(vector<int>& A, vector<int>& target) {
        long res = 0;
        int pre = 0, n = A.size();
        for (int i = 0; i < n; ++i) {
            res += max(target[i] - A[i] - pre, 0);
            pre = target[i] - A[i];
        }
        return res + max(-pre, 0);
    }
```

**Python**
```py
    def minimumOperations(self, nums: List[int], target: List[int]) -> int:
        A = [x - y for x, y in zip(nums, target)]
        return sum(max(y - x, 0) for x, y in pairwise([0] + A + [0]))
```
