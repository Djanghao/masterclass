# [Rust] Cantor's diagonalization, 0ms

**Author:** tiedyedvortex
**Votes:** 6
**Link:** [https://leetcode.com/problems/find-unique-binary-string/solutions/4292625/](https://leetcode.com/problems/find-unique-binary-string/solutions/4292625/)

---

# Intuition
If we have `n` strings of `n` characters each, then we can imagine them in an `n x n` grid.

Now, imagine walking the diagonal from top-left to bottom-right squares, going from string 0 char 0, to string 1 char 1.

At each of these diagonal cells, we take the bit and flip it, and combine those results into a single final output string.

This means that our output is different than the 0th string because it is different in position 0; different from the 1st string because it is different in position 1; and so on.

# Approach
Use `String::with_capacity` instead of `String::new` to avoid reallocations.

# Complexity
- Time complexity: O(n), we traverse n strings and construct a string of size n one char at a time.

- Space complexity: O(n) total, O(1) working space. We are allocating a new string of size n, but other than that we don't need anything extra.

# Code
```
impl Solution {
    pub fn find_different_binary_string(nums: Vec<String>) -> String {
        let n = nums[0].as_bytes().len();
        let mut output = String::with_capacity(n);

        for (i, num) in nums.iter().enumerate() {
            match num.as_bytes()[i] {
                b'0' => { output.push('1'); }
                b'1' => { output.push('0'); }
                _ => {}
            }
        }

        output
    }
}
```