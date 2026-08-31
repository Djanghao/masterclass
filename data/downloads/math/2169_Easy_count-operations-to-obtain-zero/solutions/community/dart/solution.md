# Dart Solution

**Author:** Isko21
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-operations-to-obtain-zero/solutions/3561819/](https://leetcode.com/problems/count-operations-to-obtain-zero/solutions/3561819/)

---

# Code
```
class Solution {
    int countOperations(int num1, int num2) {
        int step = 0;

        while(num1 != 0 && num2 != 0){
            num1 > num2 ? num1 -= num2 : num2 -= num1;
            step++;
        }
        return step;
    }
}
```