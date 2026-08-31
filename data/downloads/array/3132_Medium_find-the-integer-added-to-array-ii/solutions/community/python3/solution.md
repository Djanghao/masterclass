# [Python3] Sorting O(NlogN) | Bonus O(N) | Clean & Concise

**Author:** xil899
**Votes:** 19
**Link:** [https://leetcode.com/problems/find-the-integer-added-to-array-ii/solutions/5081927/](https://leetcode.com/problems/find-the-integer-added-to-array-ii/solutions/5081927/)

---

# Intuition
Note: The constraint of the problem can be as large as $$10^5$$.
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
**Step 1:** Sort both arrays.
**Step 2:** Set `nums2` as pivot, then the only possible values of `-x`, where we refer to as `diff`, are `[nums1[0] - nums2[0], nums1[1] - nums2[0], nums1[2] - nums2[0]]`.
**Step 3:** For each possible `diff`, for each value `num2` of `nums2`, add `diff` to it, and check whether there is a corresponding value in `nums1`. Since `nums1` is already sorted, we can optimize this step by using two-pointer or binary search to achieve this.
**Step 4:** If all `num2 + diff` are found in `nums1`, then `diff` is valid, and we compare it as the current value of `ans`.
<!-- Describe your approach to solving the problem. -->

# Explanations
1. `nums1` must have either one of `nums1[0]`, `nums1[1]` or `nums1[2]` remaining after 2 elements are removed. Find the `diff` with the first element of nums2, giving possible diffs.
2. Use this `diff` on each element of `nums2` and perform a two-pointer or binary search to find the corresponding number in `nums1` that would generate this number.
3. If a number doesn't exist in `nums1`, this particular `diff` is not valid. Check the next `diff`.
4. If we manage to find all nums in `nums1`, this is one possible `diff`.
5. Store it as a possible `ans`.
6. If we manage to do so again, find the smallest possible `ans`.

Credit to [@qwerty7325](https://leetcode.com/qwerty7325).

# Complexity
- Time complexity: $$O(N\\log N)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(sort)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

Please upvote if you find this solution helpful.
# Code (Sorting + Two-Pointer)
```
class Solution:
    def minimumAddedInteger(self, nums1: List[int], nums2: List[int]) -> int:
        m = len(nums1)
        ans = float('-inf')
        nums1.sort()
        nums2.sort()

        def check(diff):
            idx = 0
            for num2 in nums2:
                num1 = num2 + diff
                while idx < m and nums1[idx] != num1:
                    idx += 1
                if idx >= m:
                    return False
                idx += 1
            return True

        for diff in [nums1[0] - nums2[0], nums1[1] - nums2[0], nums1[2] - nums2[0]]:
            if check(diff):
                ans = max(ans, diff)
        return -ans
```

# Code (Sorting + Binary Search)
```
class Solution:
    def minimumAddedInteger(self, nums1: List[int], nums2: List[int]) -> int:
        m = len(nums1)
        ans = float('-inf')
        nums1.sort()
        nums2.sort()
        for diff in [nums1[0] - nums2[0], nums1[1] - nums2[0], nums1[2] - nums2[0]]:
            flag = True
            lo = 0
            for num2 in nums2:
                num1 = num2 + diff
                idx = bisect.bisect_left(nums1, num1, lo = lo)
                if idx >= m or nums1[idx] != num1:
                    flag = False
                    break
                lo = idx + 1
            if flag:
                ans = max(ans, diff)
        return -ans
```

# Bonus (O(N) Solution) - Credit to: [@iyerke](https://leetcode.com/iyerke)
Suppose this is an interview question, one may be asked if there is a solution with even better time complexity than $$O(N\\log N)$$, e.g. $$O(N)$$. The answer is **yes**, and here is the approach.

To achieve a solution with $$O(N)$$ time complexity, we need to avoid sorting either of the array `nums1` or `nums2` in the first place. However, same as the approach above, we still need to obtain the 3 possible candidates of `x`. So we will get the minimum value of `nums2` in linear time, and get the 3 smallest values of `nums1` in linear time. This could be done either by a one-pass approach or using the `nsmallest()` method from Python 3's `heapq` library with a time complexity of $$O(N\\log 3) = O(N)$$.

Now we need to check either candidate of `x` is valid. Previously, we used a two-pointer or binary search over the already sorted `nums1` and `nums2` to achieve this. Now that neither `nums1` nor `nums2` is sorted, what we can do here is to compare the two frequency maps (i.e. `Counter` as dictionary objects in Python 3) and see if the frequency map based on `nums2` is **nested** in the frequency map based on `nums1` after applying the operations. This can be implemented by going through each (unique) element in `nums2` and check its count between two frequency maps. In Python 3, we can implemented with a one-liner:
```
dic1 = Counter([2, 1, 3])
dic2 = Counter([1, 1, 2, 3, 4])
dic3 = Counter([2, 3, 3])
print(dic1 <= dic2) # True
print(dic1 <= dic3) # False
```

# Complexity
- Time complexity: $$O(N)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(N)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code (No Sorting)
```
class Solution:
    def minimumAddedInteger(self, nums1: List[int], nums2: List[int]) -> int:
        min2 = min(nums2)
        c, b, a = [min2 - val for val in heapq.nsmallest(3, nums1)]
        nums2 = Counter(nums2)
        for x in (a, b, c):
            if nums2 <= Counter(val + x for val in nums1):
                return x
```
