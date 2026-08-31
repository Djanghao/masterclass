# Swift one-liner. 0ms, beats 100%

**Author:** azarovalex
**Votes:** 12
**Link:** [https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/solutions/1062163/](https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/solutions/1062163/)

---

```
class Solution {
    func numberOfSteps (_ num: Int) -> Int {
        String(num, radix: 2).reduce(0) { $1 == "1" ? $0 + 2 : $0 + 1 } - 1
    }
}
```