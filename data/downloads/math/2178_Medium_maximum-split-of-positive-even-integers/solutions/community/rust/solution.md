# Rust | O(n) time | O(1) space

**Author:** mperepelitsyn
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-split-of-positive-even-integers/solutions/3864895/](https://leetcode.com/problems/maximum-split-of-positive-even-integers/solutions/3864895/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
To maximize the number of splits we should minimize the number in each split

# Approach
<!-- Describe your approach to solving the problem. -->
* If the input is odd, there is no split possible
* Keep pushing numbers [2..=input] in 2-step to the output until the prospective current sum is greater than the input
* Add the difference between the input and the current sum to the last split

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
impl Solution {
    pub fn maximum_even_split(final_sum: i64) -> Vec<i64> {
        if final_sum % 2 != 0 { return vec![] }

        let mut ans = Vec::new();
        let mut cur_sum = 0;
        for n in (2..=final_sum).step_by(2) {
            if cur_sum + n > final_sum {
                *ans.last_mut().unwrap() += final_sum - cur_sum;
                break;
            } else {
                ans.push(n);
            }
            cur_sum += n;
        }

        ans
    }
}
```