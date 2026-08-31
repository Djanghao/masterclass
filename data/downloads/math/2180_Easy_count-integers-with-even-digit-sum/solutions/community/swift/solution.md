# Beats 100.00%

**Author:** Victor-SMK
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-integers-with-even-digit-sum/solutions/5467818/](https://leetcode.com/problems/count-integers-with-even-digit-sum/solutions/5467818/)

---


```
class Solution {
    func countEven(_ num: Int) -> Int {
        var ans = 0

        for i in 1...num{
            var summ = 0
            var n = i
            while n > 0{
                let ost = n % 10
                n = n / 10
                summ += ost
            }
            if summ % 2 == 0 {
                ans += 1
            }
        }
        return ans
    }
}
```