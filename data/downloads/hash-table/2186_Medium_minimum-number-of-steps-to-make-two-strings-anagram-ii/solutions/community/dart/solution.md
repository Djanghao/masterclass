# 🟢🔴🟢 Beats 100.00%👏 Best Solution 🟢🔴🟢

**Author:** HelloSajib
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-steps-to-make-two-strings-anagram-ii/solutions/5977301/](https://leetcode.com/problems/minimum-number-of-steps-to-make-two-strings-anagram-ii/solutions/5977301/)

---

```
class Solution {
  int minSteps(String s, String t) {

    Map<String,int> map = {};

    for(int i = 0; i < s.length; i++){
        map.update(s[i],(value)=> value+1, ifAbsent: ()=> 1);
    }

    for(int i = 0; i < t.length; i++){
        map.update(t[i],(value)=> value-1, ifAbsent: ()=> -1);
    }
   
    int res = map.values.fold(0,(a,b)=> a + b.abs());
    return res;

  }
}
```