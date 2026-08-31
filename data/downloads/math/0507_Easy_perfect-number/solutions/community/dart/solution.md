# Dart solution

**Author:** abiinavvv
**Votes:** 0
**Link:** [https://leetcode.com/problems/perfect-number/solutions/6090816/](https://leetcode.com/problems/perfect-number/solutions/6090816/)

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
  bool checkPerfectNumber(int num) {
    if(num<=1){
        return false;
    }
    int sum =0;
    int divisor =0;
    for(int i = 1;i<num;i++){
        if(num % i == 0){
            divisor += i;
        }
    }
    if(num == divisor){
        return true;
    }
    else{
        return false;
    }
  }
}
```