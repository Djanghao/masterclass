# b/c brute force Rust still wins.

**Author:** billybobcoder
**Votes:** 0
**Link:** [https://leetcode.com/problems/beautiful-pairs/solutions/5067935/](https://leetcode.com/problems/beautiful-pairs/solutions/5067935/)

---

# Intuition
Grog hit problem with stick many times till problem break.

# Approach
Grog grab stick

# Complexity
- Time complexity:
Grog use stick for long time. Grog arm tired.

- Space complexity:
Grog hit problem same place with stick. Problem break. Grog win.

# Code
```
impl Solution {
    pub fn beautiful_pair(nums1: Vec<i32>, nums2: Vec<i32>) -> Vec<i32> {
        let mut min_value = std::i32::MAX;
        let (mut min_i, mut min_j) = (0,0);
        let (mut i, mut j) = (0, 1);

        let compute_sum = |x: usize, y: usize| {
            nums1[x].abs_diff(nums1[y]) as i32 + nums2[x].abs_diff(nums2[y]) as i32
        };

        while i < nums1.len() - 1 {
            j = i + 1;
            while j < nums1.len() {
                let computed_value = compute_sum(i, j);
                if computed_value < min_value {
                    min_value = computed_value;
                    if min_value == 0 {
                        return vec![i as i32, j as i32]
                    }
                    (min_i, min_j) = (i, j);
                }
                j += 1
            }
            i += 1
        }
        for i in 0..nums1.len() - 1 {
            for j in 1..nums1.len() {}
        }

        vec![min_i as i32, min_j as i32]
    }
}
```