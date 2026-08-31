# Two Pointers * 2

**Author:** votrubac
**Votes:** 196
**Link:** [https://leetcode.com/problems/count-the-number-of-fair-pairs/solutions/3174181/](https://leetcode.com/problems/count-the-number-of-fair-pairs/solutions/3174181/)

---

Because `nums[i] + nums[j] == nums[j] + nums[i]` the `i < j` condition degrades to `i != j`.

So, we can sort the array, and use the two-pointer approach to count pairs less than a certain value.

We do it twice for `uppper` and `lower`, and return the difference.

Time complexity: O(sort)

**C++**
```cpp
long long countLess(vector<int>& nums, int val) {
    long long res = 0;
    for (int i = 0, j = nums.size() - 1; i < j; ++i) {
        while(i < j && nums[i] + nums[j] > val)
            --j;
        res += j - i;
    }        
    return res;
}
long long countFairPairs(vector<int>& nums, int lower, int upper) {
    sort(begin(nums), end(nums));
    return countLess(nums, upper) - countLess(nums, lower - 1);
}
```
**Python 3**
```python
class Solution:
    def countFairPairs(self, nums: List[int], lower: int, upper: int) -> int:
        def countLess(val: int) -> int:
            res, j = 0, len(nums) - 1
            for i in range(len(nums)):
                while i < j and nums[i] + nums[j] > val:
                    j -= 1
                res += max(0, j - i)
            return res
        nums.sort()
        return countLess(upper) - countLess(lower - 1)
```
**Java**
```java
long countLess(int[] nums, int val) {
    long res = 0;
    for (int i = 0, j = nums.length - 1; i < j; ++i) {
        while(i < j && nums[i] + nums[j] > val)
            --j;
        res += j - i;
    }        
    return res;        
}
public long countFairPairs(int[] nums, int lower, int upper) {
    Arrays.sort(nums);
    return countLess(nums, upper) - countLess(nums, lower - 1);
}
```