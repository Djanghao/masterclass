# Rabin Karp substring search pattern matching algorithm

**Author:** TimeIsEverything
**Votes:** 0
**Link:** [https://leetcode.com/problems/strings-differ-by-one-character/solutions/4110881/](https://leetcode.com/problems/strings-differ-by-one-character/solutions/4110881/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Using Rabin Karp substring matching algorithm. Takes care of hash collision.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n*m)

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(n*m)

# Code
```
class Solution {
    func differByOne(_ dict: [String]) -> Bool {
        return differByOne(dict.map { Array($0) })
    }

    private func differByOne(_ dict: [[Character]]) -> Bool {
        let n = dict.count
        guard n > 0 else { return false }
        let m = dict[0].count
        guard m > 0 else { return false }

        let mod = 1_000_000_007

        var multiply = [Int](repeating: 1, count: m)
        for j in stride(from: m - 2, through: 0, by: -1) {
            multiply[j] = (multiply[j + 1] * 26) % mod
        }

        var hashes = [Int](repeating: 0, count: n)
        for (i, word) in dict.enumerated() {
            for (j, char) in word.enumerated() {
                guard let asciiValue = char.asciiValue else {
                    continue
                }
                hashes[i] += (multiply[j] * Int(asciiValue - 96)) % mod
            }
        }

        var seen = [Int: [Int]]()
        for j in stride(from: m - 1, through: 0, by: -1) {
            seen = [:]
            for i in 0 ..< n {
                let word = dict[i]
                guard let asciiValue = word[j].asciiValue else {
                    continue
                }

                let newHash = (hashes[i] - multiply[j] * Int(asciiValue - 96)) % mod
                for k in seen[newHash, default: []] where differByOne(word, dict[k], j) {
                    return true
                }
                seen[newHash, default: []].append(i)
            }
        }

        return false
    }

    private func differByOne(_ word1: [Character], _ word2: [Character], _ position: Int) -> Bool {
        for (index, (char1, char2)) in zip(word1, word2).enumerated() where index != position && char1 != char2 {
            return false
        }
        return true
    }
}
```