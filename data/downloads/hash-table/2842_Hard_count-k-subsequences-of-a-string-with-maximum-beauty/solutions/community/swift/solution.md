# Swift functional math approach (from one of the most voted solution)

**Author:** barabash
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-k-subsequences-of-a-string-with-maximum-beauty/solutions/3993894/](https://leetcode.com/problems/count-k-subsequences-of-a-string-with-maximum-beauty/solutions/3993894/)

---

# Intuition
Original: https://leetcode.com/problems/count-k-subsequences-of-a-string-with-maximum-beauty/solutions/3992969/java-c-python-math/

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    func countKSubsequencesWithMaxBeauty(_ s: String, _ k: Int) -> Int {
        let n = s.count, mod = Int(1e9) + 7, aAscii = Int("a".first!.asciiValue!),
            count = s.reduce(into: [Int](repeating: 0, count: 26)) { $0[Int($1.asciiValue!) - aAscii] += 1 }.sorted()
        var k = k
        guard k <= 26 else { return 0 }
        let minOccurance = count[26 - k]
        guard minOccurance != 0 else { return 0 }
        var (res, pend) = count.filter({ $0 >= minOccurance }).reduce(into: (1, 0)) { into, freq in
            if freq > minOccurance {
                k -= 1
                into.0 = into.0 * freq % mod
            } else {
                into.1 = into.1 + 1
            }
        }
        let comb = (0..<k).reduce(into: 1) { into, i in
            into = into * (pend - i) / (i + 1)
            res = res * minOccurance % mod
        }
        return Int(res * comb % mod)
    }
}
```