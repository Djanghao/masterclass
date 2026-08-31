# ✅98.33%🔥Easy Solution🔥With ultimate explanation🔥

**Author:** MrAke
**Votes:** 178
**Link:** [https://leetcode.com/problems/2-keys-keyboard/solutions/5657975/](https://leetcode.com/problems/2-keys-keyboard/solutions/5657975/)

---

# Intuition \u2712\uFE0F
#### When we look at the problem, the main challenge is to minimize the number of operations required to produce exactly `n` characters 'A' using only "Copy All" and "Paste" operations. Since "Copy All" copies everything on the screen, it suggests that we should think in terms of copying when we have a beneficial number of 'A's that will allow us to reach `n` through multiple pastes. This leads us to consider the factors of `n` because these represent meaningful points at which we can perform a "Copy All" to maximize efficiency.
---
# Approach \uD83D\uDE80
##### 1.*`Factorization Insight`*: To minimize the number of operations, break down the number `n` into its prime factors. Each factor corresponds to a sequence where you repeatedly paste after a "Copy All" operation.
##### 2.*`Iterative Process`:*
- #### Start with the smallest factor (beginning with 2).
- #### Divide `n` by this factor as long as possible, adding the factor to the total steps each time you divide.
- #### Move to the next larger factor and repeat until `n` is reduced to 1.
##### 3. *`Sum of Factors`*: The sum of these factors will give the minimum number of operations required.
---
# Example Execution:
 - ### For `n = 9`:
 - - We start with factor 2: doesn't divide 9.
 - - Factor 3 divides 9, so we add 3 to steps and reduce n to 3.
 - - Factor 3 again divides 3, so we add 3 to steps and reduce n to 1.
 - - Total steps = 3 + 3 = 6.
### For `n = 3`, the result will be `3`, as shown in the problem statement.
### For `n = 1`, the result will be `0`, as you already have one '`A`'.
---



# Code
```python []
class Solution:
    def minSteps(self, n: int) -> int:
        if n == 1:
            return 0
        
        steps = 0
        factor = 2
        
        while n > 1:
            while n % factor == 0:
                steps += factor
                n //= factor
            factor += 1
            
        return steps
```
```C++ []
class Solution {
public:
    int minSteps(int n) {
        if (n == 1) return 0;
        
        int steps = 0;
        int factor = 2;
        
        while (n > 1) {
            while (n % factor == 0) {
                steps += factor;
                n /= factor;
            }
            factor++;
        }
        
        return steps;
    }
};

```
```javascript []
var minSteps = function(n) {
    if (n === 1) return 0;
    
    let steps = 0;
    let factor = 2;
    
    while (n > 1) {
        while (n % factor === 0) {
            steps += factor;
            n = Math.floor(n / factor);
        }
        factor++;
    }
    
    return steps;
};

```
```java []
class Solution {
    public int minSteps(int n) {
        if (n == 1) return 0;
        
        int steps = 0;
        int factor = 2;
        
        while (n > 1) {
            while (n % factor == 0) {
                steps += factor;
                n /= factor;
            }
            factor++;
        }
        
        return steps;
    }
}

```
```C# []
public class Solution {
    public int MinSteps(int n) {
        if (n == 1) return 0;
        
        int steps = 0;
        int factor = 2;
        
        while (n > 1) {
            while (n % factor == 0) {
                steps += factor;
                n /= factor;
            }
            factor++;
        }
        
        return steps;
    }
}

```
---

