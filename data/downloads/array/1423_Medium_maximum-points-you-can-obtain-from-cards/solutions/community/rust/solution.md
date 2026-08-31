# Rust | DP | O(n) O(1) | "One-liner" | With Comments

**Author:** wallicent
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-points-you-can-obtain-from-cards/solutions/2200410/](https://leetcode.com/problems/maximum-points-you-can-obtain-from-cards/solutions/2200410/)

---

Challenging myself to write a "one-liner" here, in the sense that there are no semicolons. Clippy doesn't like it that I call closures in the expressions where they are declared, but I had to do it to stay true to my mission. :) Also note the use of iterators, which I prefer strongly over manual indexing (i.e. `- card_points[k as usize - i] + card_points[card_points.len() - i]`)

```
impl Solution {
    pub fn max_score(card_points: Vec<i32>, k: i32) -> i32 {
        // Make a reverse iterator over the first k elements (it1)
        card_points
            .iter()
            .take(k as usize)
            .rev()
            // Zip it with a reverse iterator over card_points (it2).
			// The first iterator will limit the number of zipped pairs.
            .zip(card_points.iter().rev())
            .fold(
                // Initialize the fold with (sum, sum), where sum is the first candidate
                // (the sum over the first k elements)
                (|sum| (sum, sum))(card_points.iter().take(k as usize).sum::<i32>()),
                // Each iteration subtracts the element from it1 and adds the element from it2 to yield the
                // next candidate.
                |(max, sum), (p1, p2)| (|new_sum| (max.max(new_sum), new_sum))(sum - *p1 + *p2),
            )
            .0
    }
}
```