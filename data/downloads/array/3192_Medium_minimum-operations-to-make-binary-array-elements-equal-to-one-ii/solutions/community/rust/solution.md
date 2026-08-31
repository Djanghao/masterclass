# O(n) Soln

**Author:** ozzyozbourne
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-operations-to-make-binary-array-elements-equal-to-one-ii/solutions/5364098/](https://leetcode.com/problems/minimum-operations-to-make-binary-array-elements-equal-to-one-ii/solutions/5364098/)

---

# Complexity
- Time complexity:$$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:$$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```java []
final class Solution {
    public int minOperations(final int[] nums) {
        int times = 0;
        for(final int num: nums)
            if(num == 1 && (times & 1) == 1 || num == 0 && (times & 1) == 0) times += 1;
        return times;
    }
}
```
```python []
class Solution:
    def minOperations(self, nums: List[int]) -> int:
        times = 0
        for num in nums:
            if num == 1 and times & 1 == 1 or num == 0 and times & 1 == 0: times += 1
        return times
```
```rust []
impl Solution {
    pub fn min_operations(nums: Vec<i32>) -> i32 {
        let mut times = 0;
        for num in nums{
            if num == 1 && (times & 1) == 1 || num == 0 && (times & 1) == 0 {
                times += 1;
            }
        }
        times
    }
}
```
``` c []
int minOperations(const int* nums, const int numsSize) {
    int times = 0;
    for(int i = 0; i < numsSize; i++)
        if((nums[i] == 1 && (times & 1) == 1) || (nums[i] == 0 && (times & 1) == 0))times += 1;
    return times;
}
```
