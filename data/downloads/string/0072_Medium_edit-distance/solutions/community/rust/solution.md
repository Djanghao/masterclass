# [Rust] Bottom-up DP with explanations, O(m*n) time, O(n) space. (0 ms, faster than 100%.)

**Author:** marccarre
**Votes:** 5
**Link:** [https://leetcode.com/problems/edit-distance/solutions/662428/](https://leetcode.com/problems/edit-distance/solutions/662428/)

---

#### Solution

```rust
impl Solution {
    pub fn min_distance(word1: String, word2: String) -> i32 {
        // Treat characters as raw bytes, as it allows us to directly access the underlying arrays:
        let (word1, word2) = (word1.as_bytes(), word2.as_bytes());

        // Allocate memory in one-go, as it is typically faster:
        let mut dist = Vec::with_capacity(word2.len() + 1);

        // Base case: we need to delete j characters in word2 in order to match the empty string word1:
        for j in 0..=word2.len() {
            dist.push(j)
        }

        // Use a second vector to store distances for i - 1.
		// This uses less memory than having a matrix of size (m, n), 
		// and we always just use the previous row in the matrix anyway:
        let mut prev_dist = dist.clone();

        for i in 1..=word1.len() {
            for j in 0..=word2.len() {
                if j == 0 {
                    dist[j] += 1; // Base case: we need to insert a character in order to match word1.
                } else if word1[i - 1] == word2[j - 1] {
                    // No difference, don't increment the edit distance:
                    dist[j] = prev_dist[j - 1];
                } else {
                    // Either insert, delete or replace a character: increment the edit distance by one:
                    dist[j] = dist[j].min(dist[j - 1]).min(prev_dist[j - 1]) + 1;
                }
            }
            prev_dist.copy_from_slice(&dist); // Backup the distances for this row using memcpy.
        }
        dist[word2.len()] as i32
    }
}
```

This algorithm gradually calculates the edit distance by iterating over the characters of the two provided words. `dist` and `prev_dist` represent two consecutive rows in the following distances matrix:

<img src="https://assets.leetcode.com/users/marccarre/image_1590915262.png" width="180px" />

#### Performance

> Runtime: 0 ms, faster than 100.00% of Rust online submissions for Edit Distance.
> Memory Usage: 2.1 MB, less than 100.00% of Rust online submissions for Edit Distance.
