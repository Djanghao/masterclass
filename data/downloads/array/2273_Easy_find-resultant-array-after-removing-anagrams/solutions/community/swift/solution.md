# [Swift] Simple and easy to understand solution

**Author:** evkobak
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-resultant-array-after-removing-anagrams/solutions/2085199/](https://leetcode.com/problems/find-resultant-array-after-removing-anagrams/solutions/2085199/)

---

```
lass Solution {
    func removeAnagrams(_ words: [String]) -> [String] {

        var answer = words
        var i = 0

        while i < answer.count - 1 {

            if answer[i].sorted() == answer[i+1].sorted() {
                answer.remove(at: i+1)
            } else {
                i += 1
            }
        }
		
        return answer
    }
}
```