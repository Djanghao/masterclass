# Hacky Pattern Matching

**Author:** jsya
**Votes:** 0
**Link:** [https://leetcode.com/problems/prime-number-of-set-bits-in-binary-representation/solutions/4220515/](https://leetcode.com/problems/prime-number-of-set-bits-in-binary-representation/solutions/4220515/)

---

# Intuition
We know the number of primes between 0 and 31.

# Approach
This is kind of hacky: we're relying on the representation being $i32$ and then checking if the $.count\\_ones()$ method matches a pattern.

# Complexity
- Time complexity:
$O(n)$ where $n$ is the length of the $(left..=right)$ range.

- Space complexity:
$O(1)$

# Code
```
impl Solution {
    pub fn count_prime_set_bits(left: i32, right: i32) -> i32 {
        (left..=right).filter(|v| Solution::is_prime(*v)).count() as i32
    }

    pub fn is_prime(n: i32) -> bool {
        match n.count_ones() {
            2 | 3 | 5 | 7 | 11 | 13 | 17 | 19 | 23 | 29 | 31 => true,
            _ => false,
        }
    }
}
```