# Easy Swift Solution

**Author:** debashishdash03
**Votes:** 0
**Link:** [https://leetcode.com/problems/strobogrammatic-number-ii/solutions/5806332/](https://leetcode.com/problems/strobogrammatic-number-ii/solutions/5806332/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(5^{n/2})
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n \	imes 5^{n/2})
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```swift []
class Solution {
    func findStrobogrammatic(_ n: Int) -> [String] {
        backtrack(n, n)
    }
    
    func backtrack(_ n: Int, _ original: Int) -> [String] {
        // Base case: If n == 0, we return an empty string as the only "empty" result
        if n == 0 {
            return [""]
        }
    
        // Base case: If n == 1, return the possible strobogrammatic numbers of length 1
        if n == 1 {
            return ["0", "1", "8"]
        }
    
        // Recursive case: Get the results for n-2 and generate new strobogrammatic numbers
        let prevResults = backtrack(n - 2, original)
        var result = [String]()
    
        for prevResult in prevResults {
            // Only add the pair with "0" when n != original to avoid leading zeros
            if n != original {
                result.append("0\\(prevResult)0")
            }
            // Append all other valid strobogrammatic digit pairs around the previous result
            result.append("1\\(prevResult)1")
            result.append("8\\(prevResult)8")
            result.append("6\\(prevResult)9")
            result.append("9\\(prevResult)6")
        }
    
        return result
    }
}
```