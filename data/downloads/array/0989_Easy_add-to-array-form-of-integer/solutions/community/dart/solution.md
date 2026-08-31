# Simple solution 👌✨

**Author:** Hari3614
**Votes:** 0
**Link:** [https://leetcode.com/problems/add-to-array-form-of-integer/solutions/5391079/](https://leetcode.com/problems/add-to-array-form-of-integer/solutions/5391079/)

---


class Solution {
  List<int> addToArrayForm(List<int> num, int k) {
    List<int> result = [];
    int carry = 0;
    int i = num.length - 1;
    
    while (i >= 0 || k > 0) {
      if (i >= 0) {
        k += num[i];
      }
      
      result.add(k % 10);
      k ~/= 10;
      i--;
    }
    
    result = result.reversed.toList();
    return result;
  }
}

