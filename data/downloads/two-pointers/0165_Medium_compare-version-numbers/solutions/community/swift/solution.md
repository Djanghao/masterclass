# Very Easy Solution

**Author:** teenuburi
**Votes:** 3
**Link:** [https://leetcode.com/problems/compare-version-numbers/solutions/3953740/](https://leetcode.com/problems/compare-version-numbers/solutions/3953740/)

---

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n)

# Code
```
class Solution {
    func compareVersion(_ version1: String, _ version2: String) -> Int {
        let version1Array = version1.split(separator: ".")
        let version2Array = version2.split(separator: ".")
        
        var i = 0
        var j = 0
        
        while (i < version1Array.count && j < version2Array.count) {
            let num1 = Int(version1Array[i]) ?? 0
            let num2 = Int(version2Array[j]) ?? 0
            if num1 > num2 {
                return 1
            } else if num1 < num2 {
                return -1
            }
            i += 1
            j += 1
        }
        
        if version1Array.count > version2Array.count {
            while i < version1Array.count {
                let num1 = Int(version1Array[i]) ?? 0
                if num1 > 0 {
                    return 1
                }
                i += 1
            }
        }
        if version1Array.count < version2Array.count {
            while j < version2Array.count {
                let num2 = Int(version2Array[j]) ?? 0
                if num2 > 0 {
                    return -1
                }
                j += 1
            }
        }
    
        return 0
    }
}
```