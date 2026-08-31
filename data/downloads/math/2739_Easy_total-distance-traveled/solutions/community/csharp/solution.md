# ✅ RUST ✅ 0ms | SIMPLE SOLUTION | BEATS 100% USERS 🔥

**Author:** drummmy
**Votes:** 1
**Link:** [https://leetcode.com/problems/total-distance-traveled/solutions/4803659/](https://leetcode.com/problems/total-distance-traveled/solutions/4803659/)

---

# Intuition


# Approach


# Complexity
- Time complexity:


- Space complexity:


# Code
```
impl Solution {
    pub fn distance_traveled(mut main_tank: i32, mut additional_tank: i32) -> i32 {
        
        let mut count: i32 = 0;
        let mut distance: i32 = 0;
        let mut count2: i32 = 0;

        while main_tank > 0 {
            count += 1;
            main_tank -= 1;
            if additional_tank >= 1 && count == 5 {
                main_tank += 1;
                additional_tank -= 1;
                count2 += count;
                count = 0;
            }
        }
        distance = (count + count2) * 10;
        distance
    }
}
```