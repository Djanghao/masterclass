# [Java/Python 3] Two methods w/ brief explanation and analysis.

**Author:** rock
**Votes:** 19
**Link:** [https://leetcode.com/problems/append-k-integers-with-minimal-sum/solutions/1823808/](https://leetcode.com/problems/append-k-integers-with-minimal-sum/solutions/1823808/)

---

**Method 1:**
Sort and Track low missing bound and compute the arithmetic sequence.

1. Sort the input;
2. Starting from `1` as the lower bound of the missing range, then based on current `num` and `k`, determine current missing upper bound `hi`; Compute the subtotal in [lo, hi] and add it to `ans`.
```java
    public long minimalKSum(int[] nums, int k) {
        Arrays.sort(nums);
        long ans = 0, lo = 1;
        for (int num : nums) {
            if (num > lo) {
                long hi = Math.min(num - 1, lo + k - 1);
                int cnt = (int)(hi - lo + 1);
                ans += (lo + hi) * cnt / 2;
                k -= cnt;
                if (k == 0) {
                    return ans;
                }
            } 
            lo = num + 1;
        }
        if (k > 0) {
            ans += (lo + lo + k - 1) * k / 2;
        }
        return ans;
    }
```
```python
    def minimalKSum(self, nums: List[int], k: int) -> int:
        ans, lo = 0, 1
        cnt = 0
        for num in sorted(nums):
            if num > lo:
                hi = min(num - 1, k - 1 + lo)
                cnt = hi - lo + 1
                ans += (lo + hi) * cnt // 2 
                k -= cnt
                if k == 0:
                    return ans
            lo = num + 1
        if k > 0:
            ans += (lo + lo + k - 1) * k // 2
        return ans
```

----

**Method 2:**

Start from the sum of `1` to `k`, `ans`, then traverse the sorted distinct numbers of input array, `nums`; whenever find a `num` not greater than `k`, we need to deduct it from `ans` and add `++k`.


```java
    public long minimalKSum(int[] nums, int k) {
        long ans = k * (k + 1L) / 2;
        TreeSet<Integer> unique = new TreeSet<>();
        for (int num : nums) {
            unique.add(num);
        }
        while (!unique.isEmpty()) {
            int first = unique.pollFirst();
            if (k >= first) {
                ans += ++k - first;
            }
        }
        return ans;
    }
```

```python
from sortedcontainers import SortedSet

class class:
    def minimalKSum(self, nums: List[int], k: int) -> int:
        ans = k * (k + 1) // 2
        for num in SortedSet(nums):
            if k >= num:
                k += 1
                ans += k - num
        return ans
```
**Analysis:**

Time: `O(nlogn)`, space: `O(n)` - including sorting space, where `n = nums.length`.