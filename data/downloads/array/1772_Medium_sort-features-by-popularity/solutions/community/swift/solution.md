# Swift || hashmap + sorting

**Author:** vasiliyfedotov
**Votes:** 0
**Link:** [https://leetcode.com/problems/sort-features-by-popularity/solutions/3741254/](https://leetcode.com/problems/sort-features-by-popularity/solutions/3741254/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
Accumulate all features in hashmap. Every value in hashmap has a tuple - (populatity_count, index_in_primary_array).
Sort resulting hashmap by these two parameters.

# Complexity
- Time complexity: **O(F*logF + W)**, where F - count of features, W - sum of all words in responses.
- Space complexity: **O(F + max(W))**, where max(W) - max num of words in response.

# Code
```
class Solution {
    func sortFeatures(_ features: [String], _ responses: [String]) -> [String] {
        var fts = [String: (Int, Int)]()

        for (idx, f) in features.enumerated() {
            fts[f] = (0, idx)
        }

        for r in responses {
            var alreadyIn = Set<String>()
            for word in r.split(separator: " ") {

                let word = String(word)

                guard fts[word] != nil && !alreadyIn.contains(word) else { continue }

                alreadyIn.insert(word)
                let prev = fts[word]!
                fts[word] = (prev.0 + 1, prev.1)
            }
        }

        var res = [String](fts.keys)
        res.sort(by: { 
            let first = fts[$0]!
            let second = fts[$1]!
            return first.0 == second.0 ? first.1 < second.1 : first.0 > second.0
        })

        return res
    }
}
```