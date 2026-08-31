# Sliding window, no inner loop, in Rust

**Author:** ustinovas
**Votes:** 5
**Link:** [https://leetcode.com/problems/fruit-into-baskets/solutions/3154626/](https://leetcode.com/problems/fruit-into-baskets/solutions/3154626/)

---

# Approach
As long as we know two fruit types are alternating inside the sliding window, we don't need to keep track of the left side. We simply increase the count. But when we encounter a fruit that doesn't fit, we need to quickly locate the start of the last unbroken sequence of previous fruit type. We can do this efficiently by adjusting the left side of the sliding window each time the fruit type changes.

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(1)$$

# Code
```
impl Solution {
    pub fn total_fruit(fruits: Vec<i32>) -> i32 {
        let (mut curr, mut prev) = (fruits[0], None);
        let (mut total_max, mut curr_max) = (0, 0);
        let mut left = 0;

        for (right, fruit) in fruits.iter().copied().enumerate() {
            if curr != fruit {
                if prev.map_or(false, |prev| prev != fruit) {
                    total_max = total_max.max(curr_max);
                    curr_max = (right - left) as i32;
                }
                prev = Some(curr);
                curr = fruit;
                left = right;
            }
            curr_max += 1;
        }

        total_max.max(curr_max)
    }
}
```