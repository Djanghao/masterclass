# [EASY Solution][Python / Rust]

**Author:** Minminn
**Votes:** 0
**Link:** [https://leetcode.com/problems/merge-operations-to-turn-array-into-a-palindrome/solutions/3750608/](https://leetcode.com/problems/merge-operations-to-turn-array-into-a-palindrome/solutions/3750608/)

---

```
class Solution:
    def minimumOperations(self, nums: List[int]) -> int:
        i, j = 0, len(nums) - 1
        cnt_op = 0
        while i < j:
            if nums[i] != nums[j]:
                left_sum, right_sum = nums[i], nums[j]
                while i < j and left_sum != right_sum:
                    if left_sum > right_sum:
                        j -= 1
                        right_sum += nums[j]
                    else:
                        i += 1
                        left_sum += nums[i]
                    cnt_op += 1
            i += 1
            j -= 1

        return cnt_op
```


```
impl Solution {
    pub fn minimum_operations(nums: Vec<i32>) -> i32 {
        let (mut i, mut j, mut cnt_op) = (0, nums.len() - 1, 0);
        while i < j{
            if nums[i] != nums[j]{
                let (mut left_sum, mut right_sum) = (nums[i], nums[j]);
                while i < j && left_sum != right_sum{
                    if left_sum > right_sum{
                        j -= 1;
                        right_sum += nums[j];
                    } else {
                        i += 1;
                        left_sum += nums[i];
                    }
                    cnt_op += 1;
                }
            }
            i += 1;
            if j == 0 {
                break;
            }
            j -= 1;
        }
        cnt_op
    }
}
```