# Swift

**Author:** ksmirnovnn
**Votes:** 3
**Link:** [https://leetcode.com/problems/find-the-closest-palindrome/solutions/5100629/](https://leetcode.com/problems/find-the-closest-palindrome/solutions/5100629/)

---

We first generate a set of candidate palindromes. Then we iterate through each candidate, calculate the absolute difference between the candidate and the input number, and update the result if the difference is smaller. If there is a tie, we choose the smaller one. This solution runs in O(1) time and uses O(1) space. The reason is that the number of candidates is constant (at most 5), so the time and space complexity are both constant. Note that the input number is not included in the candidates. If the input number is a palindrome, it will not be the closest palindrome. If the input number is not a palindrome, it will not be a candidate. Therefore, we can safely remove it from the candidates.

# Code
```
class Solution {
    func nearestPalindromic(_ n: String) -> String {
        let len = n.count
        var candidates = Set<Int>()
        // biggest, one more digit, all 9's except first and last
        candidates.insert(Int(pow(10, Double(len))) + 1)
        // smallest, one less digit, all 0's except first and last
        candidates.insert(Int(pow(10, Double(len - 1))) - 1)
        
        // the closest must be in middle digit +1, 0, -1, then flip left to right
        let prefix = Int(String(n.prefix((len + 1) / 2)))!
        for i in -1...1 {
            let p = String(prefix + i)
            let pp = p + String(p.prefix(len / 2).reversed())
            candidates.insert(Int(pp)!)
        }
        
        // remove itself
        candidates.remove(Int(n)!)
        
        var minDiff = Int.max
        var minNum = Int.max
        var res = ""
        for cand in candidates {
            let diff = abs(cand - Int(n)!)
            if diff < minDiff {
                minDiff = diff
                minNum = cand
                res = String(cand)
            } else if diff == minDiff {
                if cand < minNum {
                    minNum = cand
                    res = String(cand)
                }
            }
        }
        return res
    }
}

```