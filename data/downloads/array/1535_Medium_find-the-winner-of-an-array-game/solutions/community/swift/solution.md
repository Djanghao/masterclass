# 1535. Swift Solution

**Author:** azm819
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-the-winner-of-an-array-game/solutions/4251644/](https://leetcode.com/problems/find-the-winner-of-an-array-game/solutions/4251644/)

---

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    func getWinner(_ arr: [Int], _ k: Int) -> Int {
        var curK = k
        var result = arr[0]
        var ind = 1
        while curK > .zero && ind < arr.count {
            if arr[ind] > result {
                result = arr[ind]
                curK = k - 1
            } else {
                curK -= 1
            }
            ind += 1
        }
        return result
    }
}
```