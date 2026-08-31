# Improved algorithm with O(N) Runtime

**Author:** urbantumbleweed
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-operations-to-move-all-balls-to-each-box/solutions/5743499/](https://leetcode.com/problems/minimum-number-of-operations-to-move-all-balls-to-each-box/solutions/5743499/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
I got to thinking that I could improve on my $$O(n^2)$$ solution if I could keep track of what I had seen already.

# Approach
<!-- Describe your approach to solving the problem. -->
Use an answers list to keep track of movements for each char in the string. Then keep track of movements needed when going from left to right. increments the movements counter when I encounter a one. Then repeat the process going from right left, adding what I find to the answers list.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(n)$$

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(n)$$

# Code
```rust []
impl Solution {
    pub fn min_operations(boxes: String) -> Vec<i32> {
       let n = boxes.len();
       let mut answer: Vec<i32> = vec![0; n];
       let mut moves: i32 = 0;
       let mut count: i32 = 0;

       for i in 0..n {
            answer[i] += moves;
            if boxes.chars().nth(i) == Some('1') {
                count += 1;
            }
            moves += count;
       }

       moves = 0;
       count = 0;

       for i in (0..n).rev() {
            answer[i] += moves;
            if boxes.chars().nth(i) == Some('1') {
                count += 1;
            }
            moves += count;
       }
       answer
    }
}

```