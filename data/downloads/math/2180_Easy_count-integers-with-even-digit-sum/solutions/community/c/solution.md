# C++ Easy to understand - using formula with some explanation

**Author:** A1exrebys
**Votes:** 84
**Link:** [https://leetcode.com/problems/count-integers-with-even-digit-sum/solutions/1784810/](https://leetcode.com/problems/count-integers-with-even-digit-sum/solutions/1784810/)

---

We calculate the sum, and then apply formula (**we just need to check if the sum is even or odd**) to calculate the final answer. 
I got the idea while checking the given examples in the description. Just try to check what will be the ouptut for 10, 20, 30, 40 etc:
10 = 2, 4, 6, 8 (4)
20 = 2, 4, 6, 8, 11, 13, 15, 17, 19, 20 (10)
30 = 2, 4, 6, 8, 11, 13, 15, 17, 19, 20, 22, 24, 26, and 28. (14)
...
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