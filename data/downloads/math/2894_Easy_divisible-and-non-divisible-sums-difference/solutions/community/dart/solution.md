# Dart Solution

**Author:** abiinavvv
**Votes:** 0
**Link:** [https://leetcode.com/problems/divisible-and-non-divisible-sums-difference/solutions/6102810/](https://leetcode.com/problems/divisible-and-non-divisible-sums-difference/solutions/6102810/)

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
  int differenceOfSums(int n, int m) {
    int num1 = 0;
    int num2 = 0;
    for(int i = 1;i<=n;i++){
        if(i %m == 0){
            num1 += i;
        }
        else{
            num2 += i;
        }
    }
    return num2-num1;
  }
}
```