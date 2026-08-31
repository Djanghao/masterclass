# Java Simple Approach O(n) Time, O(1) Space

**Author:** danielrechey28
**Votes:** 8
**Link:** [https://leetcode.com/problems/consecutive-characters/solutions/635301/](https://leetcode.com/problems/consecutive-characters/solutions/635301/)

---

If next character is same increase the current counter. Else reset the current counter to 1 when a different character is encountered. 
```
class Solution {
    public int maxPower(String s) {
        int len=s.length();
        int count =0;
        int curr=1;
        for(int i=0;i<len;i++){
            if(i<len-1 &&s.charAt(i) == s.charAt(i+1)){
                curr++;
            }
            else{
                if(curr>count){
                    count = curr;
                }
                curr=1;
            }
        }    
        return count;   
    }
```
}