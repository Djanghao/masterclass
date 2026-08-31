# [Swift] Topological Sort, beats 100%

**Author:** odnaks
**Votes:** 1
**Link:** [https://leetcode.com/problems/alien-dictionary/solutions/3059159/](https://leetcode.com/problems/alien-dictionary/solutions/3059159/)

---

# Code
```
class Solution {
    func alienOrder(_ words: [String]) -> String {
        let n = words.count
        var wordsAr = [[Character]]()
        var indegrees = [Character: Int]()
        var graph = [Character: [Character]]()
        var sources = [Character]()
        var sortedChs = [Character]()
        for word in words {
            let word = Array(word)
            wordsAr.append(word)
            for ch in word {
                indegrees[ch] = 0
                graph[ch] = []
            }
        }
        for i in 0..<n-1 {
            var word1 = wordsAr[i]
            var word2 = wordsAr[i+1]
            for j in 0..<max(word1.count, word2.count) {
                if j == word1.count {
                    break
                } else if j == word2.count {
                    return ""
                }
                var parentCh: Character = word1[j]
                var childCh: Character = word2[j]
                if parentCh != childCh {
                    indegrees[childCh] = indegrees[childCh]! + 1
                    graph[parentCh] = graph[parentCh]! + [childCh]
                    break
                }
            }
        }
        for (ch, c) in indegrees {
            if c == 0 {
                sources.append(ch)
            }
        }
        while !sources.isEmpty {
            var ch = sources.removeFirst()
            sortedChs.append(ch)
            for child in graph[ch]! {
                indegrees[child] = indegrees[child]! - 1
                if indegrees[child] == 0 {
                    sources.append(child)
                }
            }
        }
        return sortedChs.count == indegrees.count ? String(sortedChs) : ""
    }
}
```