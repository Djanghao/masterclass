# The dumbest possible solution

**Author:** easchner
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-69-number/solutions/3784701/](https://leetcode.com/problems/maximum-69-number/solutions/3784701/)

---

# Complexity
- Time complexity:
O(1)

- Space complexity:
O(1)

# Code
```
class Solution {
    val answers = mapOf(
        0 to 0,
        6 to 9,
        9 to 9,
        66 to 96,
        69 to 99,
        96 to 99,
        99 to 99,
        666 to 966,
        669 to 969,
        696 to 996,
        699 to 999,
        966 to 996,
        969 to 999,
        996 to 999,
        999 to 999,
        6666 to 9666,
        6669 to 9669,
        6696 to 9696,
        6699 to 9699,
        6966 to 9966,
        6969 to 9969,
        6996 to 9996,
        6999 to 9999,
        9666 to 9966,
        9669 to 9969,
        9696 to 9996,
        9699 to 9999,
        9966 to 9996,
        9969 to 9999,
        9996 to 9999,
        9999 to 9999    
    )

    fun maximum69Number (num: Int) = answers[num]
}
```