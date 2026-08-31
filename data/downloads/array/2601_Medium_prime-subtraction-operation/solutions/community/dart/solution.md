# 🔥BEATS 💯 % 🎯 |✨SUPER EASY BEGINNERS 👏

**Author:** CodeWithSparsh
**Votes:** 2
**Link:** [https://leetcode.com/problems/prime-subtraction-operation/solutions/6034305/](https://leetcode.com/problems/prime-subtraction-operation/solutions/6034305/)

---

![image.png](./images/0.png)

---

## Intuition
The problem requires verifying if we can make the array strictly increasing by subtracting a prime number from each element. We can use a sorted list of primes and check if, by choosing a suitable prime, each adjusted element remains smaller than the next in sequence.

---

## Approach
1. **Iterate Through Array**:
   - For each element, check if it can be modified to a smaller number by subtracting any prime that maintains the strict increase condition.
   - Track a solution variable to keep the modified values.

2. **Apply Prime Subtraction**:
   - If an adjusted element maintains the order, update the element and proceed. Otherwise, if we cannot find a valid subtraction, return `false`.

3. **Validate Entire Array**:
   - Ensure all elements meet the strict increase condition after processing.

---

## Complexity
- **Time Complexity**: \\(O(n \\cdot p)\\), where \\(n\\) is the array length and \\(p\\) is the number of primes checked.
- **Space Complexity**: \\(O(n + p)\\), accounting for the input array and prime list.

---

## Implementations in Various Languages


```dart []
class Solution {
  bool primeSubOperation(List<int> arr) {
    primes.sort();
    for (int i = 0; i < arr.length - 1; i++) {
      int num = arr[i];
      if (num == 1) continue;

      int sol = num;

      for (int p in primes) {
        if (p >= num) break;
        int res = num - p;

        if (i == 0) {
          if (res < arr[i + 1]) sol = res;
        } else if (arr[i - 1] < res && res < arr[i + 1]) {
          sol = res;
        }
      }
      arr[i] = sol;
    }
    for (int i = 0; i < arr.length - 1; i++) if (arr[i] >= arr[i + 1]) return false;

    return true;
  }
}

final List<int> primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509];
```


```python []
class Solution:
    def primeSubOperation(self, arr):
        primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509]

        for i in range(len(arr) - 1):
            num = arr[i]
            if num == 1:
                continue

            sol = num

            for p in primes:
                if p >= num:
                    break
                res = num - p
                if (i == 0 and res < arr[i + 1]) or (i > 0 and arr[i - 1] < res < arr[i + 1]):
                    sol = res
            arr[i] = sol

        return all(arr[i] < arr[i + 1] for i in range(len(arr) - 1))
```


```java []
import java.util.Arrays;

class Solution {
    private static final int[] PRIMES = {2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509};

    public boolean primeSubOperation(int[] arr) {
        for (int i = 0; i < arr.length - 1; i++) {
            int num = arr[i];
            if (num == 1) continue;

            int sol = num;

            for (int p : PRIMES) {
                if (p >= num) break;
                int res = num - p;

                if (i == 0 && res < arr[i + 1] || (i > 0 && arr[i - 1] < res && res < arr[i + 1])) {
                    sol = res;
                }
            }
            arr[i] = sol;
        }

        for (int i = 0; i < arr.length - 1; i++) {
            if (arr[i] >= arr[i + 1]) return false;
        }

        return true;
    }
}
```


```cpp []
#include <vector>
using namespace std;

class Solution {
public:
    bool primeSubOperation(vector<int>& arr) {
        vector<int> primes = {2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509};

        for (int i = 0; i < arr.size()

 - 1; i++) {
            int num = arr[i];
            if (num == 1) continue;

            int sol = num;

            for (int p : primes) {
                if (p >= num) break;
                int res = num - p;

                if ((i == 0 && res < arr[i + 1]) || (i > 0 && arr[i - 1] < res && res < arr[i + 1])) {
                    sol = res;
                }
            }
            arr[i] = sol;
        }

        for (int i = 0; i < arr.size() - 1; i++) {
            if (arr[i] >= arr[i + 1]) return false;
        }

        return true;
    }
};
```

```javascript []
class Solution {
  constructor() {
    this.primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509];
  }

  primeSubOperation(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
      let num = arr[i];
      if (num === 1) continue;

      let sol = num;

      for (let p of this.primes) {
        if (p >= num) break;
        let res = num - p;

        if ((i === 0 && res < arr[i + 1]) || (i > 0 && arr[i - 1] < res && res < arr[i + 1])) {
          sol = res;
        }
      }
      arr[i] = sol;
    }

    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] >= arr[i + 1]) return false;
    }

    return true;
  }
}
```
---
![image.png](./images/1.png) {:style='width:250px'}