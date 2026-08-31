# Two Lines DART solution

**Author:** Mohamed_Sadeck
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-sum-of-four-digit-number-after-splitting-digits/solutions/4480883/](https://leetcode.com/problems/minimum-sum-of-four-digit-number-after-splitting-digits/solutions/4480883/)

---


# Code
```
class Solution {
  int minimumSum(int num) {
    List<String> list = num.toString().split('');
    list.sort();
    return int.parse(list[0]+list[2])+int.parse(list[1]+list[3]);
  }
}
```