# Easy Swift solution

**Author:** olegmetallic
**Votes:** 2
**Link:** [https://leetcode.com/problems/replace-words/solutions/5273349/](https://leetcode.com/problems/replace-words/solutions/5273349/)

---

# Approach
Turn our roots `dictionary` array to `set` (it will give us constant time check whether given root is in the dictionary).
Next define min root length and max root length vars to avoid unneeded computations.
Transform given `sentence` into the `words` array.
Now we loop through all `words`. If current `word` length is less than `minRootLength` move to the next word, since it can't have root from the `dictionary`. Then we run inner loop in range `[minRootLength:maxRootLength]` where we get possible `root` as a prefix in current `word` and check whether it is in the `set`, break inner loop if it has root and replace current word with found `root`.
In the end we should join our `words` into resulted sentence.

# Complexity
- Time complexity:
O(n*m) - where `n` is words count, `m` is a length difference between `maxRootLength` and `minRootLength`.

- Space complexity:
O(n) - store all words and roots.

# Code
```
class Solution {
    func replaceWords(_ dictionary: [String], _ sentence: String) -> String {
        let set = Set(dictionary)
        let minRootLength = set.min(by: { $0.count < $1.count })!.count
        let maxRootLength = set.min(by: { $0.count > $1.count })!.count
        var words = sentence.components(separatedBy: " ")
        for (i, word) in words.enumerated() {
            guard minRootLength < word.count else {
                continue
            }
            for rootLength in minRootLength...maxRootLength {
                let root = String(word.prefix(rootLength))
                if set.contains(root) {
                    words[i] = root
                    break
                }
            }
        }
        return words.joined(separator: " ")
    }
}
```