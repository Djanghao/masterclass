# Dead simple Rust solution

**Author:** a_table_saw
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-the-hidden-sequences/solutions/2988990/](https://leetcode.com/problems/count-the-hidden-sequences/solutions/2988990/)

---

# Intuition
This boils down into 'what's the difference between the largest and smallest value in the hidden array'.  So, that's pretty much the only heavy lifting that needs to be done.

Also, I was careful to calculate whether 'relative_val' could overflow an i32.  If you were to add 10^5 to itself 10^5 times, you get 10^10, which does overflow any 32 bit type.

# Approach
The only little optimization present here is to use a branchless inner loop.  std::cmp::max and std::cmp::min are branchless operations, at least on x86_64.

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(1)

# Code
```
impl Solution {
    pub fn number_of_arrays(differences: Vec<i32>, lower: i32, upper: i32) -> i32 {
        let mut max = 0;
        let mut min = 0;
        let mut relative_val = 0 as i64;
        for i in differences.into_iter() {
            relative_val += i as i64;
            max = std::cmp::max(max, relative_val);
            min = std::cmp::min(min, relative_val);
        }
        let difference = max - min;
        let input_diff = upper - lower;
        std::cmp::max(input_diff as i64 - difference + 1, 0) as i32
    }
}

```