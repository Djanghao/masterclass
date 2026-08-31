# Swift Solution.

**Author:** aayushkumar20
**Votes:** 1
**Link:** [https://leetcode.com/problems/substring-with-largest-variance/solutions/3739415/](https://leetcode.com/problems/substring-with-largest-variance/solutions/3739415/)

---

# Complexity
- Time complexity: O(n^2)
- Space complexity: O(1)

# Code
```
class Solution {
    func largestVariance(_ s: String) -> Int {
        var freq = Array(repeating: 0, count: 26)
        for c in s {
            freq[Int(c.asciiValue! - Character("a").asciiValue!)] += 1
        }
        
        var maxVariance = 0
        for a in 0..<26 {
            for b in 0..<26 {
                var remainingA = freq[a]
                var remainingB = freq[b]
                if a == b || remainingA == 0 || remainingB == 0 { continue }
                
                var currBFreq = 0, currAFreq = 0
                for c in s {
                    let c = Int(c.asciiValue! - Character("a").asciiValue!)
                    
                    if c == b { currBFreq += 1 }
                    if c == a {
                        currAFreq += 1
                        remainingA -= 1
                    }
                    
                    if currAFreq > 0 {
                        maxVariance = max(maxVariance, currBFreq - currAFreq)
                    }
                    
                    if currBFreq < currAFreq && remainingA >= 1 {
                        currBFreq = 0
                        currAFreq = 0
                    }
                }
            }
        }
        
        return maxVariance
    }
}
```