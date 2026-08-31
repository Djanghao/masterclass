# swift O(1) Math solution with explanation

**Author:** jqz3
**Votes:** 4
**Link:** [https://leetcode.com/problems/calculate-money-in-leetcode-bank/solutions/1622750/](https://leetcode.com/problems/calculate-money-in-leetcode-bank/solutions/1622750/)

---

``` swift
class Solution {
    
    /// Let's make this problem easier:
    /// 
    /// week 1:    [1, 2, 3, 4, 5, 6, 7]
    /// week 2:    [1+1, 2+1, 3+1, 4+1, 5+1, 6+1, 7+1] = [1, 2, 3, 4, 5, 6, 7] + 1 * 7
    /// week 3:    [1+2, 2+2, 3+2, 4+2, 5+2, 6+2, 7+2] = [1, 2, 3, 4, 5, 6, 7] + 2 * 7
    /// ......
    /// last week: [x, x + 1,...,x + y]
    ///
    /// so we can get the result by:
    ///
    ///     sum all entire weeks from $1~$7:
    ///         sum of an entire week: (1 + 7) * 7 / 2 = 28
    ///         entire week count: n / 7, as `count`
    ///         we can get:
    ///         28 * count
    ///
    ///     sum $1 in all entire weeks:
    ///         sum `1 * 7` to `(count - 1) * 7`: (1 + count - 1) * (count - 1) / 2 * 7
    ///         we can get:
    ///         (count - 1) * count / 2 * 7
    ///
    ///     sum of the last week not entire:
    ///         the last not entire week start from: count + 1
    ///         the last not entire week day count: n % 7, as `mod`, so ended at: count + mod
    ///         we can get:
    ///         (count + 1 + count + mod) * mod / 2
    ///
    /// finally the result is:
    ///     28 * count +
    ///     (count - 1) * count / 2 * 7 +
    ///     (count + 1 + count + mod) * mod / 2
    ///
    func totalMoney(_ n: Int) -> Int {
        // count of entire week
        let count = n / 7
        // the last not entire week day count
        let mod = n % 7
        // sum of all entire weeks from $1~$7
        return 28 * count +
        // sum of $1 in all entire weeks
               (count - 1) * count / 2 * 7 +
        // sum of the last week not entire
               (count + 1 + count + mod) * mod / 2
    }
}
```