# 🟢🔴🟢 Most Efficient And Best Approach 🟢🔴🟢

**Author:** HelloSajib
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-element-after-replacement-with-digit-sum/solutions/6051122/](https://leetcode.com/problems/minimum-element-after-replacement-with-digit-sum/solutions/6051122/)

---

```
class Solution {
  int minElement(List<int> nums) {

    List<int> digits = [];
    for(int element in nums){
        int num = element;
        int sum = 0;
        while(num != 0){
            sum += num % 10;
            num = num ~/ 10;
        }
        digits.add(sum);
    }
    return digits.reduce((a,b)=> a < b ? a : b);
    
  }
}
```