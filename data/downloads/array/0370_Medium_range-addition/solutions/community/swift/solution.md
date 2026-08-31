# [Swift] Readable Solution

**Author:** Legonaftik
**Votes:** 2
**Link:** [https://leetcode.com/problems/range-addition/solutions/1352104/](https://leetcode.com/problems/range-addition/solutions/1352104/)

---

```
class Solution {
    func getModifiedArray(_ length: Int, _ updates: [[Int]]) -> [Int] {
        var answer = Array(repeating: 0, count: length)
        for update in updates {
            let start = update[0]
            let end = update[1]
            let value = update[2]
            answer[start] += value
            if end < length-1 {
                answer[end+1] -= value
            }
        }
        for index in 1..<length {
            answer[index] += answer[index-1]
        }
        return answer
    }
}
```