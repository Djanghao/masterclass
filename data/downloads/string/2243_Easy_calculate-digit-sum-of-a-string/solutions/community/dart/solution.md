# dart solution

**Author:** 4khil_Raj
**Votes:** 0
**Link:** [https://leetcode.com/problems/calculate-digit-sum-of-a-string/solutions/5255883/](https://leetcode.com/problems/calculate-digit-sum-of-a-string/solutions/5255883/)

---



# Code
```
class Solution {
  String digitSum(String s, int k) {
    while (s.length>k) {
      String newString = '';
      for (int i=0;i<s.length;i+=k) {
        int sum=0;
        for (int j=i;j<i+k&&j<s.length;j++) {
          sum+=int.parse(s[j]);
        }
        newString+=sum.toString();
      }
      s=newString;
    }
    return s;
  }
}

```