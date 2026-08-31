# 🔥BEATS 💯 % 🎯 |✨SUPER EASY BEGINNERS 👏

**Author:** CodeWithSparsh
**Votes:** 3
**Link:** [https://leetcode.com/problems/happy-number/solutions/6007008/](https://leetcode.com/problems/happy-number/solutions/6007008/)

---

![image.png](./images/0.png)

---

# To check if a number is a "happy number," we recursively find the sum of the squares of its digits until it reaches 1 (indicating happiness) or falls into a repeating loop.

---

### Intuition
A number is "happy" if, by summing the squares of its digits repeatedly, the sum eventually reaches 1. If it doesn\u2019t reach 1 but repeats any previous sum, it will continue in a cycle, indicating an unhappy number.

### Approach
1. Convert the number to a string and split it into individual digits.
2. Calculate the sum of squares of the digits.
3. If the sum equals 1 or 7 (a special happy case), the number is happy. If it\u2019s any other single-digit number, it\u2019s unhappy.
4. Recursively apply this process with the new sum until it reaches a solution.

### Complexity
- **Time Complexity**: \\(O(\\log n)\\), because the number of digits to process reduces with each step, leading to an upper bound on steps taken.
- **Space Complexity**: \\(O(\\log n)\\), for recursion depth.

---

### Code Implementations

```dart []
class Solution {
  // Function to determine if a number is a happy number
  bool isHappy(int n) {
    while (n > 9) {
      int sum = 0;
      int temp = n;

      // Calculate the sum of squares of digits
      while (temp > 0) {
        int digit = temp % 10;
        sum += digit * digit;
        temp ~/= 10;
      }

      n = sum;
    }

    // A number is considered happy if it ends up as 1 or 7
    return n == 1 || n == 7;
  }
}

```

```java []
public class Solution {
    public boolean isHappy(int n) {
        while (n > 9) {
            int sum = 0;
            while (n > 0) {
                int digit = n % 10;
                sum += digit * digit;
                n /= 10;
            }
            n = sum;
        }
        return n == 1 || n == 7;
    }
}
```

```python []
class Solution:
    def isHappy(self, n: int) -> bool:
        while n > 9:
            n = sum(int(digit) ** 2 for digit in str(n))
        return n == 1 or n == 7
```

```javascript []
function isHappy(n) {
    while (n > 9) {
        let sum = 0;
        while (n > 0) {
            let digit = n % 10;
            sum += digit * digit;
            n = Math.floor(n / 10);
        }
        n = sum;
    }
    return n === 1 || n === 7;
}
```

```cpp []
class Solution {
public:
    bool isHappy(int n) {
        while (n > 9) {
            int sum = 0;
            while (n > 0) {
                int digit = n % 10;
                sum += digit * digit;
                n /= 10;
            }
            n = sum;
        }
        return n == 1 || n == 7;
    }
};
```

```go []
package main

func isHappy(n int) bool {
    for n > 9 {
        sum := 0
        for n > 0 {
            digit := n % 10
            sum += digit * digit
            n /= 10
        }
        n = sum
    }
    return n == 1 || n == 7
}
```

```c []
#include <stdbool.h>

bool isHappy(int n) {
    while (n > 9) {
        int sum = 0;
        while (n > 0) {
            int digit = n % 10;
            sum += digit * digit;
            n /= 10;
        }
        n = sum;
    }
    return n == 1 || n == 7;
}
```

Each implementation recursively or iteratively checks the sum of squared digits until the number reaches a single digit. If that digit is 1 or 7, the number is happy; otherwise, it is not.