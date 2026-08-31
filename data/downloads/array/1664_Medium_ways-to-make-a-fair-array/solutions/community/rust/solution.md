# Rust balance-based solution

**Author:** vas_art
**Votes:** 0
**Link:** [https://leetcode.com/problems/ways-to-make-a-fair-array/solutions/4284632/](https://leetcode.com/problems/ways-to-make-a-fair-array/solutions/4284632/)

---

# Intuition
We need some cumulative value(s) which we can use to calculate the if the array is fair on each iteration.

# Approach
The **balance** of the array is the sum of the odd-indexed values plus the negative sum of the even-indexed values. An array is **fair** if it's balance is 0.

Given the `n` is even, the formula would look like this:

$$balance = -x_0 + x_1 + ... + x_{n-1} - x_n$$

The algorithm consists of these steps:
1. Calculate initial balance of the array.
2. On iteration 0, the left balance would be 0 (as there are no elements on the left), and right balance would be the array balance itself.
3. On each iteration, calculate the balance of the array, excluding the current index.
    
    The balance of the array without the current element is the **left balance** minus the **right balance** minus the **balance shift**.

    $$balance_i = balance_{0..i-1} - balance_{i+1..n} - shift_i$$

    The right balance is negative because if one element is removed the right balance essentially becomes shifted, and the total right balance becomes negative.

    The **balance shift** is the compensation of the effect that the current element had on the initial balance. In the balance formula, even-indexed values are negative, odd-indexed values are positive. So the balance shift would be positive for even indices and negative for odd indices.

    $$shift_i = value_i$$, where $$i \\bmod 2 = 0$$,
    $$shift_i = -value_i$$, where $$i \\bmod 2 = 1$$.

    Then we left balance and the right balance are prepared for the next step: the balance shift is added to the left balance and subtracted from the right balance.

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(1)$$

# Code
```
impl Solution {
    pub fn ways_to_make_fair(nums: Vec<i32>) -> i32 {
        let balance = {
            let mut balance = 0;

            for i in 0..nums.len() {
                if (i % 2 == 0) {
                    balance -= nums[i];
                } else {
                    balance += nums[i];
                }
            }

            balance
        };

        let mut balanceLeft: i32 = 0;
        let mut balanceRight: i32 = balance;
        let mut count: i32 = 0;

        for index in 0..nums.len() {
            let balanceShift: i32 = {
                if (index % 2 == 0) {
                    nums[index]
                } else {
                    -nums[index]
                }
            };
            
            let balanceCur = balanceLeft - balanceRight - balanceShift;

            balanceRight += balanceShift;
            balanceLeft -= balanceShift;

            if (balanceCur == 0) {
                count += 1;
            }
        }

        return count;
    }
}
```