# 🟢🔴🟢 Beats 100.00%👏 Easiest Solution 🟢🔴🟢

**Author:** HelloSajib
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-sum-of-encrypted-integers/solutions/6062225/](https://leetcode.com/problems/find-the-sum-of-encrypted-integers/solutions/6062225/)

---

```
class Solution {
  int sumOfEncryptedInt(List<int> nums) {
    
    int sum = 0;
    for(int num in nums){
        String numString = num.toString();
        String maxNum = numString.split("").reduce((a,b)=> int.parse(a) > int.parse(b) ? a : b);
        sum += int.parse(maxNum * numString.length);
    } 
    return sum;

  }
}
```