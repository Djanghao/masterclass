# Rust, binary search solution. 0ms.

**Author:** EduartePaiva
**Votes:** 1
**Link:** [https://leetcode.com/problems/special-array-with-x-elements-greater-than-or-equal-x/solutions/5216347/](https://leetcode.com/problems/special-array-with-x-elements-greater-than-or-equal-x/solutions/5216347/)

---

# Intuition
The most bture force way to solve this problem would check every possible number from 1 to 100 if the number is less than or equal it's number of times. Probably would pass because it's not that much. But we can use binary search to make things faster.

# Complexity
- Time complexity:
$$O(n log n)$$ We are checking the length n of nums log(n) times. Without binary search the time would be $$O(n^2)$$

- Space complexity:
$$O(1)$$

# Code
```
impl Solution {
    pub fn special_array(nums: Vec<i32>) -> i32 {
        // binary search between 1 and 100
        let mut right = 1;
        let mut left = nums.len() as i32;

        while right <= left {
            let half = ((left - right) / 2) + right;

            // check half
            let mut count = 0;
            for &n in &nums {
                if n >= half {
                    count += 1;
                }
            }
            if count == half {
                return half;
            } else if count > half {
                right = half + 1;
            } else {
                left = half - 1;
            }
        }

        -1
    }
}
```