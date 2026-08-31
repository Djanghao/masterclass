# Rust Solution with Prefix Sum, O(n) & O(1)

**Author:** jarodlaw
**Votes:** 0
**Link:** [https://leetcode.com/problems/super-washing-machines/solutions/3532945/](https://leetcode.com/problems/super-washing-machines/solutions/3532945/)

---

# Approach
This solution uses prefix sums to solve the problem. The main idea is to calculate the average dresses for all machines, and then calculate the left and right transfer sum for each machine. We iterate over the machines and keep track of the maximum of these transfer sums as the minimum moves required. If the total number of dresses isn't divisible by the number of machines, it means we can't distribute the dresses evenly, and we return -1.

# Complexity
- Time complexity: $$O(n)$$

- Space complexity: $$O(1)$$

# Code
```
impl Solution {
    
    pub fn find_min_moves(machines: Vec<i32>) -> i32 {
        let total: i32 = machines.iter().sum();
        let machines_size = machines.len() as i32;
        
        if total % machines_size != 0 {
            return -1;
        }

        let avg = total / machines_size;
        let mut cnt = 0;
        let mut max_cnt = 0;

        for i in 0..machines_size {
            cnt += machines[i as usize] - avg;
            max_cnt = max_cnt.max((cnt.abs()).max(machines[i as usize] - avg));
        }

        max_cnt
    }

}
```