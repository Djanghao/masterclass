# 🔥 [VIDEO] Fast and Furious: Binary Exponentiation for Pow(x, n) 🚀

**Author:** vanAmsen
**Votes:** 10
**Link:** [https://leetcode.com/problems/powx-n/solutions/3807623/](https://leetcode.com/problems/powx-n/solutions/3807623/)

---

# Intuition
When faced with the task of calculating x raised to the power n, the first instinct might be to simply multiply x, n times. However, this approach is time-consuming and inefficient for large values of n. To optimize this, we could use binary exponentiation, a method that allows us to calculate large powers efficiently.

https://youtu.be/FJr-Yuqr5QE

# Approach
We approach this problem using binary exponentiation which reduces the time complexity to O(log n) from O(n). If n is negative, we convert it to positive and take the reciprocal of the base x. We then repeatedly square the base (stored in `current_product`) and reduce the power to half until the power becomes zero. If at any point, the power is odd, we multiply the `result` by `current_product`. The final `result` will be the answer.

# Complexity
- Time complexity: The time complexity of our algorithm is \\(O(\\log n)\\), as we are reducing the power to half in each step.

- Space complexity: The space complexity of our algorithm is \\(O(1)\\), as we are using only a constant amount of space.

# Code
```Python []
class Solution:
    def myPow(self, x: float, n: int) -> float:
        if n < 0: 
            x = 1 / x 
            n = -n 
        result = 1 
        current_product = x 
        while n > 0: 
            if n % 2 == 1: 
                result = result * current_product 
            current_product = current_product * current_product 
            n = n // 2 
        return result 
```
``` C++ []
class Solution {
public:
    double myPow(double x, long long n) {
        if(n < 0) {
            x = 1 / x;
            n = -n;
        }

        double result = 1;
        double current_product = x;

        while(n > 0) {
            if(n % 2 == 1) {
                result = result * current_product;
            }
            current_product = current_product * current_product;
            n = n / 2;
        }

        return result;
    }
};
```
``` JavaScript []
var myPow = function(x, n) {
    if(n < 0) {
        x = 1 / x;
        n = -n;
    }

    let result = 1;
    let current_product = x;

    while(n > 0) {
        if(n % 2 == 1) {
            result = result * current_product;
        }
        current_product = current_product * current_product;
        n = Math.floor(n / 2);
    }

    return result;    
};
```
``` Java []
class Solution {
    public double myPow(double x, long n) {
        if(n < 0) {
            x = 1 / x;
            n = -n;
        }

        double result = 1;
        double current_product = x;

        while(n > 0) {
            if(n % 2 == 1) {
                result = result * current_product;
            }
            current_product = current_product * current_product;
            n = n / 2;
        }

        return result;
    }
}
```
``` C# []
public class Solution {
    public double MyPow(double x, long n) {
        if(n < 0) {
            x = 1 / x;
            n = -n;
        }

        double result = 1;
        double current_product = x;

        while(n > 0) {
            if(n % 2 == 1) {
                result = result * current_product;
            }
            current_product = current_product * current_product;
            n = n / 2;
        }

        return result;
    }
}
```