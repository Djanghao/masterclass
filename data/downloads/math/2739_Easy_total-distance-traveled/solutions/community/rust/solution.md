# ✅0 MS✅ RUST BEATS 100% OF USERS 🔥🔥

**Author:** underdogo
**Votes:** 1
**Link:** [https://leetcode.com/problems/total-distance-traveled/solutions/4803690/](https://leetcode.com/problems/total-distance-traveled/solutions/4803690/)

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
    pub fn distance_traveled(main_tank: i32, additional_tank: i32) -> i32 {
        let mileage = 10;  //km per liter
        let mut total_distance = 0;
        let mut main_tank = main_tank;
        let mut additional_tank = additional_tank;
        
        while main_tank > 0 {
            let consumed = if main_tank >= 5 { 5 } else { main_tank };
            main_tank -= consumed;
            
            //transfer 1L from the additional tank if possible
            if consumed == 5 && additional_tank > 0 {
                main_tank += 1;
                additional_tank -= 1;
            }
            
            total_distance += consumed * mileage;
        }//end while
        total_distance
    }//end pub
}//end sol
```