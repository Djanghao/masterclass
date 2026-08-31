# ✅ Swift easy to understand solution with hashmap

**Author:** protodimbo
**Votes:** 3
**Link:** [https://leetcode.com/problems/naming-a-company/solutions/3164105/](https://leetcode.com/problems/naming-a-company/solutions/3164105/)

---

# Complexity
- Time complexity:
$$O(n)$$

# Code
```
class Solution {
    func distinctNames(_ ideas: [String]) -> Int {
        // first char : rest suffixes
        var wordMap = [Character: Set<String>]()
        for w in ideas {
            var word = Array(w)
            wordMap[word[0], default: []].insert(String(word[1..<word.count]))
        }
        var res = 0
        for char1 in wordMap.keys {
            for char2 in wordMap.keys {
                if char1 == char2 { continue }
                var intersect = 0
                for w in wordMap[char1]! {
                    if wordMap[char2]!.contains(w) { intersect += 1 }
                }
                var distinct1 = wordMap[char1]!.count - intersect
                var distinct2 = wordMap[char2]!.count - intersect
                res += distinct1 * distinct2
            }
        }
        return res
    }
}
```