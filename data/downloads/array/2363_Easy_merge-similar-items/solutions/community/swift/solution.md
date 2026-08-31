# Swift - simple with dictionary. 100% faster

**Author:** evkobak
**Votes:** 2
**Link:** [https://leetcode.com/problems/merge-similar-items/solutions/2406041/](https://leetcode.com/problems/merge-similar-items/solutions/2406041/)

---

```
class Solution {
    func mergeSimilarItems(_ items1: [[Int]], _ items2: [[Int]]) -> [[Int]] {
        
        var answer: [[Int]] = []
        let dict = Dictionary((items1+items2).map { ($0[0], $0[1]) } , uniquingKeysWith: +)

        dict.sorted{ $0.key < $1.key }.forEach {
            answer.append([$0.key, $0.value])
        }

        return answer
    }
}
```