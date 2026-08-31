# Kotlin - Greedy Linear Scan, with minor adjustments

**Author:** idiotleon
**Votes:** 2
**Link:** [https://leetcode.com/problems/reformat-phone-number/solutions/978654/](https://leetcode.com/problems/reformat-phone-number/solutions/978654/)

---

```
/**
 * @author: Leon
 * to greedily group letters into 3-letter segment, concatenated by '-',
 *  then to adjust a little bit when necessary.
 *
 * Time Complexity: O(lenN)
 * Space Complexity: O(lenN)
 */ 
class Solution {
    fun reformatNumber(number: String): String {
        val builder = StringBuilder()
		// running count for concatenation
        var count = 0
		// to acquire the length of letters(only)
        var len = 0
        
        for(ch in number){
            when(ch){
			    // to do nothing but skip
                ' ' -> {}
				// to do nothing but skip
                '-' -> {}
                else -> {
                    if(count == 3){
                        builder.append('-')
                        count = 1
                    }else{
                        ++count
                    }
                    
                    builder.append(ch)
                    ++len
                }
            }
        }
        
		// sanity check
        if(len <= 3) return builder.toString()
		
		// to swap the letters at the indexes `len - 2` and `len - 3`
        if(len % 3 == 1) {
		    // the cost here is O(`len`)
            val idx = builder.lastIndexOf('-')
            val temp = builder[idx - 1]
            builder.setCharAt(idx - 1, '-')
            builder.setCharAt(idx, temp)
        }
        
        return builder.toString()
    }
}
```