# Beginner friendly [Java/JavaScript] Solution

**Author:** HimanshuBhoir
**Votes:** 2
**Link:** [https://leetcode.com/problems/time-needed-to-rearrange-a-binary-string/solutions/2456398/](https://leetcode.com/problems/time-needed-to-rearrange-a-binary-string/solutions/2456398/)

---

**Java**
```
class Solution {
    int count = -1;
    public int secondsToRemoveOccurrences(String s) {
        count++;
        StringBuilder str = new StringBuilder();
        boolean isvalid = true;
        for(int i=0; i<s.length(); i++){
            if(i < s.length()-1 && s.charAt(i) < s.charAt(i+1)){
                isvalid = false;
                str.append(s.charAt(i+1));
                str.append(s.charAt(i));
                i++;
            }else if(i < s.length()){
                str.append(s.charAt(i));
            }
        }
        return isvalid == true ? count : secondsToRemoveOccurrences(str.toString());
    }
}
```
**JavaScript**
```
var secondsToRemoveOccurrences = function(s) {
    let cnt = -1
    
    function count(s){
        cnt++
        str = ""
        let isvalid = true
        for(let i=0; i<s.length; i++){
            if(i < s.length-1 && s[i] < s[i+1]){
                isvalid = false
                str += s[i+1]
                str += s[i]
                i++;
            }else if(i < s.length){
                str += s[i];
            }
        }
        return isvalid == true ? cnt : count(str);
    }
    
    return count(s)
};
```