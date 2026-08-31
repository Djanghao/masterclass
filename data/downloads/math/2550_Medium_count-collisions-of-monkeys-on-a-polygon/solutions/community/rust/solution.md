# Rust Solution

**Author:** xiaoping3418
**Votes:** 2
**Link:** [https://leetcode.com/problems/count-collisions-of-monkeys-on-a-polygon/solutions/3113469/](https://leetcode.com/problems/count-collisions-of-monkeys-on-a-polygon/solutions/3113469/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Each monkey could make two different moves, with n monnkeys, the total number of different moves is 2^n. Among all of them, only two moves ( all to left, or all to right) could avoid collision. Therefore the answer is 2^n - 2. 
# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(N)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(!)
# Code
```
impl Solution {
    pub fn monkey_move(n: i32) -> i32 {
        let (mut n, MOD) = (n, 1_000_000_007);
        let (mut ret, mut base) = (1i64, 2i64);
        
        while n > 0 {
            if n % 2 != 0 { ret = (ret * base) % MOD; }
            base = (base * base) % MOD;
            n /= 2;
        }
        ret -= 2;
        if ret < 0 { ret += MOD; }
        
        ret as _
    }
}
```