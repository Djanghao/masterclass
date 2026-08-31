# Concise N*log(N) with GCD | Rust

**Author:** Prog_Jacob
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-deletions-to-make-array-divisible/solutions/4588897/](https://leetcode.com/problems/minimum-deletions-to-make-array-divisible/solutions/4588897/)

---

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
impl Solution {
    pub fn min_operations(nums: Vec<i32>, nums_divide: Vec<i32>) -> i32 {
        // Find the GCD for all elements.
        let divisor = nums_divide.into_iter().fold(0, |a, b| gcd(a, b));

        // If a divides b, and b divides c, then a divides c.
        // Find smallest number that satisfy this relationship.
        match nums.iter().filter(|&&x| divisor % x == 0).min() {
            // Count the elements that are less than our target.
            // These should be deleted to make our target the smallest.
            Some(min) => nums.iter().filter(|&x| x < min).count() as i32,
            None => -1
        }
    }
}

// Euclidean Algorithm
fn gcd(a: i32, b: i32) -> i32 {
    if b == 0 { a } else { gcd(b, a % b) }
}

// Its Idea (Some Math):
    // let a = q * b + r
    // The greatest number to divide both a and b,
    // Must be less than or equal both a and b.
    // Assume a is greater, then the greatest
    //   number gcd can be is b.
    //
    // Of course, b is divisable by b, duh.
    // Now we need a to be divisable by b.
    // a % b = (q * b + r) % b =
    // (q * b) % b + r % b =
    // 0 + r % b
    //
    // In this case, r must be 0 for a to be divisable by b.
    // Else, we need to find the greatest number that
    // Can divide both b and r, a.k.a gcd(b, r).
    // r by definition is a % b, though:
    // a - q * b = r
    // (a - q * b) % b = r % b = r
    // a % b - (q * b) % b = r
    // a % b - 0 = r
    //
    // Needles to say, this is not by any means a formal proof.
    // And many assumptions were made along the way that
    // I omitted not to overwhelm the reader.
```