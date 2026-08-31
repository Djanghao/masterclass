# Java 2 pointers, natural, general, easiest to understand code

**Author:** 416486188
**Votes:** 59
**Link:** [https://leetcode.com/problems/long-pressed-name/solutions/238723/](https://leetcode.com/problems/long-pressed-name/solutions/238723/)

---

Don't have much time, but the keys are:
1. 2 pointers `i` and `j` are handling the same characters at the same time(let's say `c`)
2. The count of consecutive `c` in `typed` >= the count of  consecutive  `c` in `name`

```
class Solution {
    public boolean isLongPressedName(String name, String typed) {
        int m = name.length(), n = typed.length();
        int i = 0, j = 0;
        
        while(i < m && j < n){
            char c1 = name.charAt(i), c2 = typed.charAt(j);
            if(c1 != c2) return false; // we are handling different chars, no!
            
			// count of consecutive c1/c2
            int count1 = 0; 
            while(i < m && name.charAt(i) == c1){
                count1++;
                i++;
            }
            
			// count of consecutive c1/c2
            int count2 = 0; 
            while(j < n && typed.charAt(j) == c2){
                count2++;
                j++;
            }
            
            if(count2 < count1) return false;
        }
        
		// they both reach the end
        return i == m && j == n;
    }
}
```

time complexity: `O(m + n)`
space complexity: `O(1)`