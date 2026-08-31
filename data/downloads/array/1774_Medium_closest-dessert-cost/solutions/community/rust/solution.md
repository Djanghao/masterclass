# Rust Backtracking

**Author:** xiaoping3418
**Votes:** 0
**Link:** [https://leetcode.com/problems/closest-dessert-cost/solutions/2607531/](https://leetcode.com/problems/closest-dessert-cost/solutions/2607531/)

---

~~~
impl Solution {
    pub fn closest_cost(base_costs: Vec<i32>, topping_costs: Vec<i32>, target: i32) -> i32 {
        let mut ret = base_costs[0]; 
        
        for b in base_costs {
            Self::back_tracking(&mut ret, &topping_costs, 0, target, b);
        }
        
        ret
    }
    
    fn back_tracking(ret: &mut i32, topping_costs: &Vec<i32>, i: usize, target: i32, sum: i32) {
        if i == topping_costs.len() { return }
        let mut k = 0;
        loop {
            let temp = sum + k * topping_costs[i];
            let delta = i32::abs(*ret - target);
            if i32::abs(target - temp) < delta || (i32::abs(target - temp) == delta && temp < *ret) {
                *ret = temp;
            }
            Self::back_tracking(ret, topping_costs, i + 1, target, temp);
            
            if target <= temp || k == 2 { break }
            k += 1;
        }
    }
}
~~~