# [Java/Python 3] Sort then 2 pointers.

**Author:** rock
**Votes:** 16
**Link:** [https://leetcode.com/problems/maximize-greatness-of-an-array/solutions/3312233/](https://leetcode.com/problems/maximize-greatness-of-an-array/solutions/3312233/)

---

Sort then start from index `0` to check how many pairs of `nums[ans] < nums[j] (num in the code)` we can have.

```java
    public int maximizeGreatness(int[] nums) {
        Arrays.sort(nums);
        int ans = 0;
        for (int num : nums) {
            if (nums[ans] < num) {
                ++ans;
            }
        }
        return ans;
    }
```

```python
    def maximizeGreatness(self, nums: List[int]) -> int:
        nums.sort()
        ans = 0
        for num in nums:
            if nums[ans] < num:
                ans += 1
        return ans
```

**Analysis:**

Time: `O(nlogn)`, space: `O(sorting space)`, where `n = nums.length`.