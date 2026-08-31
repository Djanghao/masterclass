# [Swift] Simple solution

**Author:** evkobak
**Votes:** 1
**Link:** [https://leetcode.com/problems/plates-between-candles/solutions/1618681/](https://leetcode.com/problems/plates-between-candles/solutions/1618681/)

---

```
class Solution {
    func platesBetweenCandles(_ s: String, _ queries: [[Int]]) -> [Int] {

        var answer = [Int]()
        var arrayOfCandels = [Int]()

        for (index, key) in s.enumerated() where key == "|" {
            arrayOfCandels.append(index)
        }

        for each in queries {
            if let firstIndex = arrayOfCandels.firstIndex(where: { $0 >= each[0] && $0 < each[1] }),
               let lastIndex = arrayOfCandels.lastIndex(where: { $0 <= each[1] && $0 > each[0] }),
                firstIndex != lastIndex {
				answer.append(arrayOfCandels[lastIndex]-arrayOfCandels[firstIndex]-(lastIndex-firstIndex))
            } else {
                answer.append(0)
            }
        }

        return answer
    }
}
```