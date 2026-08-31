# Very fast solution in Rust

**Author:** tapoafom
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-cost-to-equalize-array/solutions/5809055/](https://leetcode.com/problems/minimum-cost-to-equalize-array/solutions/5809055/)

---

# Intuition
The only intuition was to use TDD to progressively find out how it could be possible to solve this problem !

# Approach
First solve very simple case (eg. nums len equal 2, cost1 only, cost2 only)
Find a solution to solve [1,3,4] :
- Use the largest gap (1 to 4) = 3 to fill the remaining area (3 to 4) = 1 with cost2
- In this example nums become [2,4,4]
- Use cost1 only or increase max to use cost2
- To increase, use largest gap to fill above the surface, in this case nums become [4,5,5] then it remains only one cost1 and it could be more interesting if cost1 superior to cost2
- Identify different pattern : if remaining gap is odd and num len is odd, odd/even, even/odd, even/even imply different usage of cost2 and cost1
- Find tune the model with all test cases : 
- if largest gap inferior to remaining area
- if cost1 is lower than cost2
- ...

# Complexity
- Time complexity:
O(n) 

- Space complexity:
O(n) 

# Code
```rust []

impl Solution {

    pub fn min_cost_to_equalize_array(nums: Vec<i32>, cost1: i32, cost2: i32) -> i32 {

        let len = nums.len() as i64;
        let cost1 = cost1 as i64;
        let cost2 = cost2 as i64;

        if len <= 1 {
            return 0;
        }

        let mut max = match nums.iter().max() {
            Some(max) => *max as i64,
            _ => panic!("impossible to get max value from nums"),
        };

        let mut remaining_area = 0_i64;
        let mut largest_gap_size = 0_i64;

        for e in nums.iter() {
            let gap = max - *e as i64;
            if gap > largest_gap_size {
                largest_gap_size = gap;
            }
            remaining_area += gap;
        }
        remaining_area -= largest_gap_size;

        if len == 2 {
            return (largest_gap_size * cost1 % (10i64.pow(9) + 7)) as i32;
        }

        let mut result = 0;
        let mut largest_gap_remaining = 0;

        if remaining_area <= largest_gap_size {
            result = remaining_area * cost2;
            largest_gap_remaining = largest_gap_size - remaining_area;
        } else {
            let surface = remaining_area + largest_gap_size;
            result = (surface / 2) * cost2;
            if surface & 1 == 1 {
                largest_gap_remaining = 1;
            }            
        }

        let largest_gap_remaining_before_increasing = largest_gap_remaining;
        let mut increase_max_by = 0;
        loop {
            let q = largest_gap_remaining / (len-1);

            if q == 0 {break;}

            increase_max_by += q;
            largest_gap_remaining = q + largest_gap_remaining % (len-1);
        }

        let cost_to_increase = match (largest_gap_remaining & 1, len & 1) {
            (0, 1) => 
                cost2 * (((increase_max_by + 2) * len + largest_gap_remaining_before_increasing) / 2),
            (1, 0) =>
                cost1
                +
                if largest_gap_remaining == 1 {
                    cost2 * (((increase_max_by) * len - 1 + largest_gap_remaining_before_increasing) / 2)
                } else {
                    cost2 * (((increase_max_by + 1) * len - 1 + largest_gap_remaining_before_increasing) / 2)
                },
            (1,1) => {
                std::cmp::min(
                    cost2 * (((increase_max_by + 1) * len + largest_gap_remaining_before_increasing) / 2),            
                    largest_gap_remaining * cost1 + cost2 * (((increase_max_by) * len + largest_gap_remaining_before_increasing) / 2),  
                )},
            _ =>
                cost2 * (((increase_max_by + 1) * len + largest_gap_remaining_before_increasing) / 2),                                
        };

        result += std::cmp::min(cost_to_increase, largest_gap_remaining_before_increasing * cost1);
        

        (std::cmp::min(result, (largest_gap_size + remaining_area) * cost1) % (10i64.pow(9) + 7)) as i32

    }    
}
```