# ⚡️Swift DP with explanation

**Author:** ash_asoyan
**Votes:** 4
**Link:** [https://leetcode.com/problems/palindromic-substrings/solutions/2304057/](https://leetcode.com/problems/palindromic-substrings/solutions/2304057/)

---

```
class Solution {
    func countSubstrings(_ s: String) -> Int {
        var s = Array(s)
		
		// Init DP matrix of size word.count * word.count
        var isPal = Array(repeatElement(Array(repeatElement(false, count: s.count)), count: s.count))
        var count = 0
        
		// Set all one letters in the word to true, cause a single letter is a palindrome itself
        for i in 0..<s.count {
            isPal[i][i] = true
            count += 1
        }
        
		// Go through all possible substrings with two loops: first for maximum right bound, second for left bound
        for r in 1..<s.count {
            for l in 0..<r {
                // Here we check if two bound letters are equal + substring inside should be a palindrome too or
				// the length of substring should be less than 3 letters (for example l = 0, r = 2, than we have the difference equal to 2, 
				// one index between 0 and 2, and 3 letters in total for this substring)
				
                if s[r] == s[l] && (isPal[l + 1][r - 1] || r - l <= 2) {
                    isPal[l][r] = true
                    count += 1
                }
            }
        }
        
        return count
    }
}
```

If it was helpfull, dont forget to \u2764\uFE0F