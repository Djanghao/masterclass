# Best Solution Explained

**Author:** darian-catalin-cucer
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-integers-with-even-digit-sum/solutions/3154427/](https://leetcode.com/problems/count-integers-with-even-digit-sum/solutions/3154427/)

---


```
class Solution {
public:
    int countEven(int num) {
        int temp = num, sum = 0;
        while (num > 0) {
            sum += num % 10;
            num /= 10;
        }
        return sum % 2 == 0 ? temp / 2 : (temp - 1) / 2;
    }
};
```