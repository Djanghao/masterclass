# Simple solution

**Author:** salman_kv
**Votes:** 1
**Link:** [https://leetcode.com/problems/check-if-all-as-appears-before-all-bs/solutions/4344899/](https://leetcode.com/problems/check-if-all-as-appears-before-all-bs/solutions/4344899/)

---


# Code
```
class Solution {
  bool checkString(String s) {
    if(s.contains('a')){
        for(int i=s.length-1;i>0;i--){
            if(s[i]=='a'){
                for(int j=i;j>=0;j--){
                    if(s[j] == 'b'){
                        return false;
                    }
                }
            }
        }
    }
    return true;
  }
}
```