# Swift Index Removal Approach

**Author:** giorfasolinii
**Votes:** 6
**Link:** [https://leetcode.com/problems/ransom-note/solutions/2462927/](https://leetcode.com/problems/ransom-note/solutions/2462927/)

---

![image](./images/0.png)

```
class Solution {
    
    // Time Complexity: O(N)
    // Space Complexity: O(N)
    
    func canConstruct(_ ransomNote: String, _ magazine: String) -> Bool {
        var copyMagazine = magazine
        
        for ran in ransomNote {
            if let index = copyMagazine.firstIndex(of: ran) {
                copyMagazine.remove(at: index)
            } else {
                return false
            }
        }
        
        return true
    }
}
```