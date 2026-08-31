# Rust, two pointer solution

**Author:** chen17981
**Votes:** 0
**Link:** [https://leetcode.com/problems/put-boxes-into-the-warehouse-ii/solutions/5323847/](https://leetcode.com/problems/put-boxes-into-the-warehouse-ii/solutions/5323847/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
impl Solution {
    pub fn max_boxes_in_warehouse(mut arr1: Vec<i32>, arr: Vec<i32>) -> i32 {
        arr1.sort();
        let (mut left, mut right) = (0, arr.len() - 1);
        let mut res = 0;
        let mut id = (arr1.len() - 1) as i32;

        while id >= 0 && left <= right {
            if arr1[id as usize] <= arr[left as usize] {
                res += 1;
                left += 1;
            } else if arr1[id as usize] <= arr[right as usize] {
                res += 1;
                right -= 1;
            }
            id -= 1;
        }
        res
    }
}
```