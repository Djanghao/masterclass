# Rust || Reusing solution to 162. Find Peak Element

**Author:** jedbye
**Votes:** 2
**Link:** [https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/solutions/3561649/](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/solutions/3561649/)

---

# Intuition
We piece together 3 simple facts:
- For a sorted array rotated by ``k`` there will be a tell tale 'peak' present in the rotation which we can use to find k
- Once we have k we can index into the rotated array using the original index ``i`` by using a mapping function ``|i| (i+k)%n``, where ``n`` is the array length. (For index zero this simplifies to ``k%n``)
- For a sorted array the poeak element is at the $$0^{th}$$ position.

# Approach
1. Find ``k``
2. Define the mapping
3. Return the ``map(0)`` position

# Complexity
- Time complexity:
 $$O\\big(log(n)\\big)$$ - binary search for peak

- Space complexity:
$$O(1)$$ binary search is constant space

# Code
```
use std::cmp::Ordering::{Greater, Less, Equal};

impl Solution {
    pub fn find_min(nums: Vec<i32>) -> i32 {
        let n = nums.len();
        let k = Self::find_peak(&nums);
        nums[k%n]
    }

    fn find_peak(nums: &Vec<i32>) -> usize {
        let (mut lbound, mut ubound) = (0, nums.len());
        while lbound < ubound {
            let mid = (lbound+ubound)/2;
            match nums[mid].cmp(&nums[0]) {
                Greater|Equal => {lbound = mid+1;}
                Less => {ubound = mid;}
            }
        }
        ubound
    }
}
```