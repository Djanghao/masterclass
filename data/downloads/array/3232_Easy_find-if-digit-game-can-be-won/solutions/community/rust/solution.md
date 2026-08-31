# Clean Rust implementation

**Author:** casualcow
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-if-digit-game-can-be-won/solutions/5549000/](https://leetcode.com/problems/find-if-digit-game-can-be-won/solutions/5549000/)

---

# Intuition
Alice wins as long as 1-digit-num sum is not equal to 2-digit num sum

# Approach
One pass traversal, sum up  1-digit num one by one, then minus those 2-digit num one by one, if the final result is not zero, i.e., 1-digit-num sum is not equal to 2-digit num sum, Alice can win using either option

# Complexity
- Time complexity: 
O(n)

- Space complexity:
O(1)

# Code
```Rust
impl Solution {
    pub fn can_alice_win(nums: Vec<i32>) -> bool {
        let sum = nums.iter().fold(0, |acc, num| if *num < 10 { acc + num } else { acc - num });
        sum != 0
    }
}
```