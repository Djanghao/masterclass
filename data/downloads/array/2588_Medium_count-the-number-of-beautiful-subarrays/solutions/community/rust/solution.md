# Rust solution using sorting and run-length encoding

**Author:** nkoppel
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-the-number-of-beautiful-subarrays/solutions/3527799/](https://leetcode.com/problems/count-the-number-of-beautiful-subarrays/solutions/3527799/)

---

# Intuition
1. A subarray is "beautiful" if it has an xor sum of 0.
2. Therefore, given the xor prefix sum of the list, a beautiful subarray exists for each pair of equivalent values.
    i.e. given [3, 1, 2], which has prefix xor sum [0, 3, 2, 0], there is one beautiful subarray, because there is one pair of equivalent elements, 0 and 0.

# Approach
Compute the xor prefix sum, sort it, find the count of each element, and compute the number of prefix sums using the following formula:
$$\\sum\\frac{count(count-1)}{2}$$

# Complexity
- Time complexity: $$O(nlog(n))$$ (due to sorting)

- Space complexity: $$O(log(n))$$ (due to sorting)

Note: this could be made faster with radix sort.

# Code
```
impl Solution {
    pub fn beautiful_subarrays(mut nums: Vec<i32>) -> i64 {
        let mut xor_sum = 0;

        // compute prefix xor-sum
        for n in &mut nums {
            xor_sum ^= *n;
            *n = xor_sum;
        }
        // start prefix xor-sum with 0
        nums.insert(0, 0);

        // sort and insert sentinel value
        nums.sort_unstable();
        nums.push(-1);
        
        let mut prev = nums[0];
        let mut len = 0;

        nums
            .into_iter()
            // transform iterator into an iterator over
            // the length of each subarray containing
            // exactly one unique value
            .filter_map(|n| {
                if n == prev {
                    len += 1;
                    None
                } else {
                    let out = Some(len);
                    prev = n;
                    len = 1;
                    out
                }
            })
            // compute number of beautiful subarrays
            // given lengths
            .map(|n| n as i64 * (n as i64 - 1) / 2)
            .sum()
    }
}
```