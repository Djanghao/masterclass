# ✅ [Solution][Swift] Greedy (beats 100%)

**Author:** adanilyak
**Votes:** 1
**Link:** [https://leetcode.com/problems/break-a-palindrome/solutions/2684410/](https://leetcode.com/problems/break-a-palindrome/solutions/2684410/)

---

**TC:** O(n)
**SC:** O(n), becase we need to store the array of characters. if we could change the input it will be O(1).
```
class Solution {
    
    func breakPalindrome(_ palindrome: String) -> String {
		// If palindrome has only one letter we can't break it by changing one letter
        guard palindrome.count > 1 else { return "" }
        
        var arr = Array(palindrome)
        let a = Character("a")
        let b = Character("b")
        
        for i in 0..<arr.count {
			// Looking for first non-a character
            if arr[i] != a {
                
				// Propecting ourselfs from cases like "aabaa"
				// Becase in this scenario we can get palindrome "aaaaa" as a result of replacement
                if arr.count % 2 == 1, i == arr.count / 2 {
                    break
                } 
                
                arr[i] = a
                return String(arr)
            }
        }
        
		// If all letters are "a" or we have palindrome like "aabaa"
		// We need to change last letter to "b"
        arr[arr.count - 1] = b
        return String(arr)
    }
    
}
```