# simulation

**Author:** user5400vw
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-hours-of-training-to-win-a-competition/solutions/5360237/](https://leetcode.com/problems/minimum-hours-of-training-to-win-a-competition/solutions/5360237/)

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
  pub fn min_number_of_hours(initial_energy: i32, initial_experience: i32, energy: Vec<i32>, experience: Vec<i32>) -> i32 {
    let mut res = 0;
    // energy is just sum
    let sm_energy: i32 = energy.iter().sum();
    res+=(sm_energy + 1) - initial_energy;
    res = res.max(0);

    // experience needed is max debt
    let mut curx = 0;
    let mut mx_diff = 0;
    for e in experience {
      mx_diff = mx_diff.max(e-curx);
      curx += e;
    }
    let mut exp_training = mx_diff + 1 - initial_experience;
    exp_training = exp_training.max(0);
    res+=exp_training;
    res
  }
}
```