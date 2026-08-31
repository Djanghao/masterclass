# 🟢🔴🟢 Beats 100.00%👏 Dart Solution 🟢🔴🟢

**Author:** HelloSajib
**Votes:** 0
**Link:** [https://leetcode.com/problems/greatest-english-letter-in-upper-and-lower-case/solutions/5970101/](https://leetcode.com/problems/greatest-english-letter-in-upper-and-lower-case/solutions/5970101/)

---

```
class Solution {
  String greatestLetter(String s) {
    String res = "";
    for(int i = 0; i < s.length; i++){
       for(int j = i+1; j < s.length; j++){
         if(s[i].toUpperCase() == s[j].toUpperCase() && s[i] != s[j]){
            if(res.isNotEmpty){
                int maximum = max(s[i].toUpperCase().codeUnitAt(0), res.toUpperCase().codeUnitAt(0));
                res = String.fromCharCode(maximum);
            }else{
                res = s[i].toUpperCase();
            }
         }
       }
    }
    return res;
  }
}
```