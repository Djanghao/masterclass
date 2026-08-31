# Dart simple solution

**Author:** Nissamudeen-VA
**Votes:** 1
**Link:** [https://leetcode.com/problems/sum-of-digits-of-string-after-convert/solutions/4281494/](https://leetcode.com/problems/sum-of-digits-of-string-after-convert/solutions/4281494/)

---

# Complexity
- Time complexity:
O(n+m)
- Space complexity:
O(1)

# Code
```
class Solution {
  int getLucky(String s, int k) {
    String nums = '';
    for(int i=0; i<s.length; i++){
        nums += (s.codeUnitAt(i)-96).toString();
    }
    print(nums);
    int sum = 0;
    while(k!=0){
      sum = 0;
      for(int i=0; i<nums.length; i++){
        sum += int.parse(nums[i]);
      }
      nums = sum.toString();
      k--;
    }
    return sum;
  }
}
```