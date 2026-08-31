# [Rust] Optimized iterators, beats 100%

**Author:** tiedyedvortex
**Votes:** 3
**Link:** [https://leetcode.com/problems/stone-game-iii/solutions/3566343/](https://leetcode.com/problems/stone-game-iii/solutions/3566343/)

---

# Intuition
This is a zero-sum game; every point earned by Alice is a point not earned by Bob. This means that we don't care about two separate scores, just the net difference between scores.

If there are k piles left, and the player whose turn it is takes 1 pile, then their opponent can get the optimal net score from k-1 piles. Since it's zero-sum, the value of taking 1 pile is (pile 0 value - future net value of k-1 piles). The same principle applies for k-2 and k-3 piles, provided there are that many piles remaining.

So we can compute the optimal net value of k piles given (k-1, k-2, and k-3) optimal net scores. We know that if there are 0 piles left the optimal net score is 0, so we can use that as our base case. Once we get the value of k piles, we can shift and compute k+1 from (k, k-1, k-2) and so on until we hit n piles. Alice wines if the net score is more than zero, Bob if it's less than zero.

# Approach
Only store the next score to minimize storage costs. 

Use a size-3 array rather than a vector to avoid heap allocations. Initialize as [0; 3].

Don't bother trying to do anything with a running sum; you're iterating over at most 3 elements, it's not going to take that much time (and might get optimized away by the compiler anyway.)

# Complexity
- Time complexity: O(n)

- Space complexity: O(1), we only have to store an array of size 3.

# Code
```
use std::cmp::Ordering;
impl Solution {
    pub fn stone_game_iii(stone_value: Vec<i32>) -> String {
        let n = stone_value.len();

        let alice_minus_bob = (0..n)
        .rev()
        .fold([0; 3], |net_scores, i| {
            let new_net_score = (0..3)
            .map(|j| stone_value[i..].iter().take(j+1).sum::<i32>() - net_scores[j])
            .max()
            .unwrap();

            [new_net_score, net_scores[0], net_scores[1]]
        })[0];

        match alice_minus_bob {
            0 => "Tie",
            x if x > 0 => "Alice",
            _ => "Bob"
        }.into()
    }
}
```