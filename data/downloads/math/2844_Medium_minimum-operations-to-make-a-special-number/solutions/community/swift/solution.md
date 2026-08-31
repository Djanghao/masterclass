# One iteration (O(n)) solution using Swift

**Author:** barabash
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-operations-to-make-a-special-number/solutions/3998757/](https://leetcode.com/problems/minimum-operations-to-make-a-special-number/solutions/3998757/)

---

# Intuition
The idea the same like in https://leetcode.com/problems/minimum-operations-to-make-a-special-number/solutions/3996361/share-an-intuitive-idea/

# Approach
- Iterate from the end of the list.
- Check:
1. If we have 0 or 5 then return if we already had 0 before. (ex. 12300, 340204, 12540). Otherwise, save found 0 or 5.
2. If we have 2 or 7 and before foundFive then return result. (ex. 235, 476305)

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(1)$$

# Code
```
class Solution {
    func minimumOperations(_ num: String) -> Int {
        var foundZero = false, foundFive = false, res: (Int) -> Int = { i in num.count - i - 2 }
        for (i, ch) in num.enumerated().reversed() {
            switch ch {
                case "0", "5": 
                    if foundZero { return res(i) }
                    else { ch == "0" ? (foundZero = true) : (foundFive = true) }
                case "2", "7": 
                    if foundFive { return res(i) }
                default:
                    break
            }
        }
        if foundZero { return num.count - 1 }
        return num.count
    }
}
```