# Simple Java O(n)

**Author:** Trevor-akshay
**Votes:** 12
**Link:** [https://leetcode.com/problems/longer-contiguous-segments-of-ones-than-zeros/solutions/1231148/](https://leetcode.com/problems/longer-contiguous-segments-of-ones-than-zeros/solutions/1231148/)

---

```
class Solution {
    public boolean checkZeroOnes(String s) {
        int length1 = 0;
        int length0 = 0;
        
        int i = 0;
        while(i < s.length()){
            int temp = 0;
            while(i < s.length() && s.charAt(i) == '1'){ //counting 1s
                temp++;
                i++;
            }
            length1 = Math.max(temp,length1);
            temp = 0;
            while(i < s.length() && s.charAt(i) == '0'){ // counting 0s
                temp++;
                i++;
            }
            length0 = Math.max(temp,length0);
        }
       return length1 > length0;
    }
}