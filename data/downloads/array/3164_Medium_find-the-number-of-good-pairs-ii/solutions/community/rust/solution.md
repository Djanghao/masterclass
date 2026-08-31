# Rust solution

**Author:** abhineetraj1
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-number-of-good-pairs-ii/solutions/5810535/](https://leetcode.com/problems/find-the-number-of-good-pairs-ii/solutions/5810535/)

---

# Intuition
To solve the problem, we need to count pairs of elements from two arrays (`nums1` and `nums2`) that, when combined under specific conditions, yield a specific relationship defined by the parameter `k`. My initial thought was to use a frequency map to efficiently check for possible pairs that meet the criteria.

# Approach
1. **Frequency Maps**: We'll create two frequency maps:
   - `map1` will store counts of numbers from `nums1` that are divisible by `k`, but adjusted by dividing them by `k`.
   - `map2` will count occurrences of each number in `nums2`.

2. **Counting Pairs**: For each unique number in `map1`, we will iterate through its divisors and check if they exist in `map2`. For every valid divisor found, we calculate the number of valid pairs by multiplying the frequency from `map1` with that of `map2`.

3. **Avoiding Duplicates**: While checking divisors, ensure that when `i` is equal to `x / i`, we only count it once.

This structured approach allows us to efficiently count pairs without needing to check every combination directly.

# Complexity
- **Time complexity**: (O(n sqrt(m))), where \\(n\\) is the length of `nums1` and \\(m\\) is the maximum value of the adjusted numbers from `nums1`. This is because for each entry in `map1`, we may iterate through its divisors up to \\(\\sqrt{m}\\).
  
- **Space complexity**: \\(O(n + m)\\), where \\(n\\) is the number of unique entries in `nums1` and \\(m\\) is the number of unique entries in `nums2`.

# Code
```rust []
use std::collections::HashMap;

impl Solution {
    pub fn number_of_pairs(nums1: Vec<i32>, nums2: Vec<i32>, k: i32) -> i64 {
        let mut map1 = HashMap::new();
        let mut map2 = HashMap::new();
        for &x in &nums1 {
            if x % k == 0 {
                let f = x / k;
                *map1.entry(f).or_insert(0) += 1;
            }
        }
        for &x in &nums2 {
            *map2.entry(x).or_insert(0) += 1;
        }
        let mut res = 0;
        for (&x, &y) in &map1 {
            for i in 1..=((x as f64).sqrt() as i32) {
                if x % i == 0 {
                    let cur = x / i;
                    if let Some(&count) = map2.get(&i) {
                        res += count as i64 * y as i64;
                    }
                    if cur != i {
                        if let Some(&count) = map2.get(&cur) {
                            res += count as i64 * y as i64;
                        }
                    }
                }
            }
        }
        res
    }
}

```