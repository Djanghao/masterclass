# Python/Go O(n) by case discussion [w/ Comment]

**Author:** brianchiang_tw
**Votes:** 3
**Link:** [https://leetcode.com/problems/remove-palindromic-subsequences/solutions/1099476/](https://leetcode.com/problems/remove-palindromic-subsequences/solutions/1099476/)

---

Python O(n) by case disscussion

---

```
class Solution:
    def removePalindromeSub(self, s: str) -> int:
        
        if not s:
            
            # empty string
            # do nothing
            return 0
        
        elif s == s[::-1]:
            
            # s is palindrome itself
            # remove s and get empty string
            
            return 1
        
        else:
            
            # remove all 'a' on first pass
            # then remove all 'b' on second pass
            # finally, s will be empty string
            
            return 2
```

---

Golang O(n) by case disscussion

```

// Helper function to reverse string
func Reverse(s string) string {
    
    runes := []rune(s)
    
    for left, right := 0, len(runes)-1; left < right; left, right = left+1, right-1 {
        
        runes[left], runes[right] = runes[right], runes[left]
        
    }
    
    return string(runes)
}


func removePalindromeSub(s string) int {
    
    
    if len(s) == 0{
        
		// empty string
		// do nothing
        return 0
        
    } else if s == Reverse(s){
	
		// s is palindrome itself
		// remove s and get empty string
        
        return 1
        
    } else{
        
		// remove all 'a' on first pass
		// then remove all 'b' on second pass
		// finally, s will be empty string
		
        return 2
    }
}
```