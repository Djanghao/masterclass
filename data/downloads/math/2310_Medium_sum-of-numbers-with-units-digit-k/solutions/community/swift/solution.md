# [Swift] simple solution

**Author:** GV1506
**Votes:** 0
**Link:** [https://leetcode.com/problems/sum-of-numbers-with-units-digit-k/solutions/2169153/](https://leetcode.com/problems/sum-of-numbers-with-units-digit-k/solutions/2169153/)

---

```
class Solution {
    func minimumNumbers(_ num: Int, _ k: Int) -> Int {
        if num == 0 { return 0 }
        if k == 0 {
            if num % 10 == 0 { return 1 }
            else { return -1 }
        }
        var ans = 1
        while (k * ans <= num) {
            if (num - k * ans) % 10 == 0 { return ans }
            ans += 1
        }
        return -1
    }
}
```