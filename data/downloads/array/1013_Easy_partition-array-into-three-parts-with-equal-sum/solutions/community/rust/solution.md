# submission for daa ta

**Author:** ayush_paranjale
**Votes:** 0
**Link:** [https://leetcode.com/problems/partition-array-into-three-parts-with-equal-sum/solutions/5032144/](https://leetcode.com/problems/partition-array-into-three-parts-with-equal-sum/solutions/5032144/)

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
    pub fn can_three_parts_equal_sum(arr: Vec<i32>) -> bool {

        let mut total = arr.iter().sum::<i32>();


        if total % 3 != 0{
            return false
        }


        let target = total / 3;

        let mut segs = 3;

        let mut curr = 0;

        for i in 0..arr.len() {

            curr += arr[i];
            total -= arr[i];

            if curr == target {
                segs -= 1;
                curr = 0;
            }

            if segs == 0 {
                return if total == 0 {true} else {false};
            }
        }
        return false;
    }
}
```