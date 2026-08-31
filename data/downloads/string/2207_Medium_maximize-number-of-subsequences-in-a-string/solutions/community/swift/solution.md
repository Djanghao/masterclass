# Swift Solution

**Author:** jfrsheriff
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximize-number-of-subsequences-in-a-string/solutions/2382838/](https://leetcode.com/problems/maximize-number-of-subsequences-in-a-string/solutions/2382838/)

---

```
class Solution {

    func maximumSubsequenceCount(_ text: String, _ pattern: String) -> Int {
        let txtArray = Array(text)
        let patternArray = Array(pattern)
        
        let p1Str = String(patternArray[0])
        let p2Str = String(patternArray[1])
            
        var count1 = 0, count2 = 0, result = 0 
    
        for character in txtArray{
		
            let curCharStr = String(character)
			
            if curCharStr == p2Str { 
                result += count1
                count2 += 1
            }  
			
            if curCharStr == p1Str {
                count1 += 1
            }          
			
        }
        return result + max(count1,count2)
    }
	
}
```