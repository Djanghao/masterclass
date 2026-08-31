# Swift - two pointer solution

**Author:** arrb
**Votes:** 0
**Link:** [https://leetcode.com/problems/shortest-word-distance-iii/solutions/5954946/](https://leetcode.com/problems/shortest-word-distance-iii/solutions/5954946/)

---

# Code
```swift []
class Solution {
    func shortestWordDistance(_ wordsDict: [String], _ word1: String, _ word2: String) -> Int {
        //two pointer solution. word1 index should be the nearest to the last known word2 index
        //prevIndex - one pointer
        //i - another pointer

        var minDist = Int.max
        var prevIndex = -1

        for (i, word) in wordsDict.enumerated() {
            if word == word1 || word == word2 {
                //if the words match word1 or word2 and we have a already encountered some prev index
                //if the word at prev index and current index 'i' are diff or word1 and word 2 are same, then calc min dist
                if prevIndex != -1 && (wordsDict[prevIndex] != wordsDict[i] || word1 == word2) {
                    minDist = min(minDist, i - prevIndex)
                }

                //update the prev index of the word encountered
                prevIndex = i
            }
        }
        return minDist
    }
}
```