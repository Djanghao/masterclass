# Rust using bitwise AND to confirm last bit is zero

**Author:** jusexton
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-bitwise-or-has-trailing-zeros/solutions/6061454/](https://leetcode.com/problems/check-if-bitwise-or-has-trailing-zeros/solutions/6061454/)

---

# Intuition
The array only needs to contain two digits that have a binary representation that ends with a 0. Bitwise OR will only produce a zero when two zeroes are or'd together.

# Approach
Iterate over each number in the array and filter only the digits that have a binary representation that ends with a zero. This can be accomplished by using the bitwise AND operator. `100 & 001 == 0` and `101 & 001 == 1`. We then only take the first 2 that occur. This acheives the same thing as returning early as soon as we have the result we're looking for instead of continuing to iterate over the array.

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(1)

# Code
```rust []
impl Solution {
    pub fn has_trailing_zeros(numbers: Vec<i32>) -> bool {
        numbers.into_iter().filter(|n| n & 1 == 0).take(2).count() == 2
    }
}
```