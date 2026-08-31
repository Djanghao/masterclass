# Rust - Two Pointers

**Author:** idiotleon
**Votes:** 2
**Link:** [https://leetcode.com/problems/sort-array-by-parity-ii/solutions/1492732/](https://leetcode.com/problems/sort-array-by-parity-ii/solutions/1492732/)

---

Solution - [github](https://github.com/An7One/lc_soln_rust_leon/tree/main/src/leetcode/lvl2/lc0922)

<b>Problem List</b>
#TwoPointers - [github](https://github.com/An7One/leetcode-problems-by-tag-an7one/tree/main/txt/by_technique/n_pointers/by_pointer_amount/2_pointers)

```
/// @author: Leon
/// https://leetcode.com/problems/sort-array-by-parity-ii/
/// Time Complexity:    O(`len_n`)
/// Space Complexity:   O(1)
impl Solution {
    pub fn sort_array_by_parity_ii(nums: Vec<i32>) -> Vec<i32> {
        let len_n = nums.len();
        let mut nums = nums;
        let mut idx_even: usize = 0;
        let mut idx_odd: usize = 1;
        while idx_even < len_n && idx_odd < len_n {
            if nums[idx_even] % 2 == 0 {
                idx_even += 2;
            }
            if nums[idx_odd] % 2 == 1 {
                idx_odd += 2;
            }
            if idx_even < len_n && idx_odd < len_n {
                nums.swap(idx_even, idx_odd);
            }
        }
        nums
    }
}
```