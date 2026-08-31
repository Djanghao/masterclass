# Dart simple

**Author:** Muhammed_Shebin
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-balanced-string/solutions/6086180/](https://leetcode.com/problems/check-balanced-string/solutions/6086180/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```dart []
class Solution {
  bool isBalanced(String num) {
    List<int>numbers=num.split('').map(int.parse).toList();
    int evenSum=0,oddSum=0;
    for(int i=0;i<numbers.length;i++){
        if(i%2==0)oddSum+=numbers[i];else evenSum+=numbers[i];
    }
    return oddSum==evenSum;
  }
}
```