# Solution from the editorial in Rust with comments, late stage capitalism is the worst

**Author:** LGUG2Z
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-health-to-beat-game/solutions/4337366/](https://leetcode.com/problems/minimum-health-to-beat-game/solutions/4337366/)

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
    pub fn minimum_health(damage: Vec<i32>, armor: i32) -> i64 {
        // tally the total amount of damage taken on each level
        let mut total_damage = 0_i64;

        // always replace this with the max damage taken between the current level and whatever is stored here
        let mut max_damage = 0_i64;

        // stupid ass i32s in the function def
        let armor = armor as i64;

        // go through each level
        for level_damage in damage {
            let level_damage = level_damage as i64;
            // add the damage taken on this level to the total damage
            total_damage += level_damage;
            // if the damage taken here is greater than the last known max damage, update it
            if level_damage > max_damage {
                max_damage = level_damage;
            }
        }

        // if the armor points are greater than the max damage recorded, we are going to reduce by the max damage
        let reduced_damage: i64 = if armor >= max_damage {
            max_damage
            // otherwise reduce by the armor points
        } else {
            armor
        };

        // start with 1 because we always want our health above zero
        // then add the total number of damage we need to be able to withstand
        // while substracting the amount of damage we are able to reduce using armor
        let minimum_health = 1 + (total_damage - reduced_damage);

        minimum_health
    }
}
```