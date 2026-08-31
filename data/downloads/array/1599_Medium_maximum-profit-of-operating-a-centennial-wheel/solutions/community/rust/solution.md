# Simple Rust solution using simulation

**Author:** sh11066
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-profit-of-operating-a-centennial-wheel/solutions/3573104/](https://leetcode.com/problems/maximum-profit-of-operating-a-centennial-wheel/solutions/3573104/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The basic idea is to simulate the rotations of the wheel based on the number of customers. We will also keep track of the maximum profit we encounter across this entire simulation.

# Approach
<!-- Describe your approach to solving the problem. -->
We create variables to keep track of the number of customers waiting `num_waiting`, maximum profit encountered `max_profit`, the rotation count where we encouter this maximum profit `rotations_where_max_profit`, as well as the current total profit `profit` and current rotation count `rotations`.

We then create a while loop which terminates only when we account for all customers, which means we must both have exceeded the length of the customer vector and have the number of customers waiting be 0 to exit the loop.

Within this loop, we simply find the number of customers we can board (upto 4) and calculate the profit based on this number. If the profit exceeds our previously seen maximum profit, we update both the rotation count where this happens as well as the maximum profit number. We return the rotation count where we encoutered the maximum profit (or -1 if we never see a profit).

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(c)$$ where c is the total number of customers (sum of customers vector)

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(1)$$

# Code
```
impl Solution {
    pub fn min_operations_max_profit(customers: Vec<i32>, boarding_cost: i32, running_cost: i32) -> i32 {
        let mut num_waiting: i32 = customers[0];
        let mut max_profit: i32 = 0;
        let mut rotations_where_max_profit: i32 = -1;
        let mut profit: i32 = 0;
        let mut rotations: usize = 1;

        while rotations < customers.len() || num_waiting > 0 {
            
            let num_boarding = std::cmp::min(4, num_waiting);
            num_waiting -= num_boarding;
            profit += boarding_cost * num_boarding - running_cost;
            
            if profit > max_profit {
                rotations_where_max_profit = rotations as i32;
                max_profit = profit;
            }

            if rotations < customers.len() {
                num_waiting += customers[rotations];
            }
            rotations += 1;
        }
        return rotations_where_max_profit;
    }
}
```