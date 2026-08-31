# Simple solution

**Author:** Mohamed_Sadeck
**Votes:** 0
**Link:** [https://leetcode.com/problems/latest-time-by-replacing-hidden-digits/solutions/5216989/](https://leetcode.com/problems/latest-time-by-replacing-hidden-digits/solutions/5216989/)

---

# Code
```
class Solution {
  String maximumTime(String time) {
    var ans = time.split('');
    if(ans[4]=='?') ans[4]='9';
    if(ans[3]=='?') ans[3]='5';
    if(ans[1]=='?'){
        if(ans[0]=='?' || ans[0]=='2') ans[1]='3';
        else ans[1]='9';
    }
    if(ans[0]=='?'){
        if(ans[1].compareTo('3')>0) ans[0]='1';
        else ans[0]='2';
    }
    return ans.join();
  }
}
```