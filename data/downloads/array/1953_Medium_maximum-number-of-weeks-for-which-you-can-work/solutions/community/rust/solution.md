# Mathematical Rust Solution

**Author:** mrijken
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-weeks-for-which-you-can-work/solutions/4135106/](https://leetcode.com/problems/maximum-number-of-weeks-for-which-you-can-work/solutions/4135106/)

---

# Intuition
Solving the solution by simulating will take too much time. However there is a mathematical sollution.

# Approach
You have to iterate over the projects, so you have to determine the maximum possible number of iterations. For the iterations, the next schema can be used:

M O M O M O M

Because of the constraint of iteration over projects, Project M can have at max 1 more than the sum of milestones of other projects.

# Complexity
- Time complexity:

$$O(n)$$

- Space complexity:

$$O(n)$$

# Code
```
impl Solution {
    pub fn number_of_weeks(milestones: Vec<i32>) -> i64 {
        let max: i64 = milestones.iter().map(|c| *c as i64).max().unwrap();
        let sum: i64 = milestones.iter().map(|c| *c as i64).sum();
        let sum_of_rest: i64 = sum - max;
        if max - sum_of_rest > 1 {
            sum_of_rest * 2 + 1
        } else {
            sum_of_rest + max
        }
    }
}
```