# rust 2 lines

**Author:** windysora
**Votes:** 4
**Link:** [https://leetcode.com/problems/the-number-of-weak-characters-in-the-game/solutions/2551746/](https://leetcode.com/problems/the-number-of-weak-characters-in-the-game/solutions/2551746/)

---

```
impl Solution {
    pub fn number_of_weak_characters(mut properties: Vec<Vec<i32>>) -> i32 {
        properties.sort_unstable_by_key(|p| (-p[0], p[1]));
        properties.iter().fold((0, -1), |(count, max_def), prop| if max_def > prop[1] { (count + 1, max_def) } else { (count, prop[1]) }).0
    }
}

```