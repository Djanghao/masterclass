# Beats 100% Solutions Swift

**Author:** therahulgoel
**Votes:** 0
**Link:** [https://leetcode.com/problems/neighboring-bitwise-xor/solutions/5527150/](https://leetcode.com/problems/neighboring-bitwise-xor/solutions/5527150/)

---



# Code

```
//@therahulgoel
class Solution {
    func doesValidArrayExist(_ derived: [Int]) -> Bool {
        return derived.reduce(0,^) == 0
    }
}
```