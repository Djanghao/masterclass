# Swift

**Author:** ksmirnovnn
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-beautiful-integers-in-the-range/solutions/4928297/](https://leetcode.com/problems/number-of-beautiful-integers-in-the-range/solutions/4928297/)

---



# Swift
```
class Solution {
    func count(_ num: Int) -> Bool {
        var num = num
        var evenCount = 0
        var oddCount = 0
        while num > 0 {
            let digit = num % 10
            if digit % 2 == 0 {
                evenCount += 1
            } else {
                oddCount += 1
            }
            num /= 10
        }
        return evenCount == oddCount
    }

    func numberOfBeautifulIntegers(_ low: Int, _ high: Int, _ k: Int) -> Int {
        var cnt = 0
        var low = low
        let x = low % k
        if x != 0 {
            low += k - x
        }
        var high = high
        if high > Int(1e8) {
            high = Int(1e8)
        }
        while low <= high {
            if count(low) {
                cnt += 1
            }
            low += k
        }
        return cnt
    }
}

```