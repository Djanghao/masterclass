# [Swift] Simple Solution

**Author:** blackbirdNG
**Votes:** 4
**Link:** [https://leetcode.com/problems/truncate-sentence/solutions/1366040/](https://leetcode.com/problems/truncate-sentence/solutions/1366040/)

---


```
class Solution {
    func truncateSentence(_ s: String, _ k: Int) -> String {
        var wordsArray = s.split(separator: " ")
        wordsArray.removeLast(wordsArray.count-k)
        return wordsArray.joined(separator: " ")
    }
}
```
Please upvote if you found the solution useful.