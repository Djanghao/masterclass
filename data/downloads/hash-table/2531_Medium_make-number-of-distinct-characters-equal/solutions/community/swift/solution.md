# Swift O(n+m) Time Complexity

**Author:** tmunir
**Votes:** 0
**Link:** [https://leetcode.com/problems/make-number-of-distinct-characters-equal/solutions/4418897/](https://leetcode.com/problems/make-number-of-distinct-characters-equal/solutions/4418897/)

---

# Complexity
- Time complexity: $$O(n+m)$$

Where $$n$$ is $$word1$$ length and $$m$$ is $$word2$$ length

- Space complexity: $$O(1)$$

Since $$word1$$ and $$word2$$ only contains english letter which is 26 length, using 4 dictionary of this letter $$O(4 * 26)$$ = $$O(26)$$ = $$O(1)$$


# Code
```
class Solution {
    func isItPossible(_ word1: String, _ word2: String) -> Bool {
        // O(n+m)
        let dict1 = word1.reduce(into: [Character: Int]()) { $0[$1, default: 0] += 1 }
        let dict2 = word2.reduce(into: [Character: Int]()) { $0[$1, default: 0] += 1 }

        // O(26^2) = O(1)
        for (k1, v1) in dict1 {
            for (k2, v2) in dict2 {
                var dictA = dict1
                var dictB = dict2

                if v1 == 1 { dictA[k1] = nil }
                if v2 == 1 { dictB[k2] = nil }

                dictA[k2, default: 0] += 1
                dictB[k1, default: 0] += 1

                if dictA.count == dictB.count { return true }
            }
        }

        return false
    }
}
```