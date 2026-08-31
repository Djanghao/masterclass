# BASIC MATHEMATICS LOL ✅✅69_BEATS_100%✅✅🔥Easy Solution🔥With Explanation🔥

**Author:** phoenix_sr
**Votes:** 1
**Link:** [https://leetcode.com/problems/sum-of-square-numbers/solutions/5324589/](https://leetcode.com/problems/sum-of-square-numbers/solutions/5324589/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Given a non-negative integer c, decide whether there're two integers a and b such that 
a2 + b2 = c.
CHECK OUT MY SOLUTION FOR LAST WEEKS CONTEST PROBLEM
https://leetcode.com/problems/count-pairs-that-form-a-complete-day-ii/solutions/5323244/the-simple-explanation69_beats_100easy-solutionwith-explanation
# Approach
<!-- Describe your approach to solving the problem. -->
by definition we know that any number a or b in the equation 
a^2 +b^2 = c cannot be more than square root of c 
thus by that rule our numbers a and b are less than square root of c 
we search in for loop starting at square root of c and go down until we find a number that is also an integer that satisfies our equation
return true or else false
# Complexity
- Time complexity:O(sqrt(C))
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
![celestial_sapien.jpeg](./images/0.jpeg)

# Code
```javascript []
var judgeSquareSum = function(c) {
    let st = Math.floor(Math.sqrt(c))
    for(let i=st; i>-1;i--){
        if(Math.sqrt(c-(i**2))%1==0){
            return true
        }
    }
    return false
};
```
```python []
import math

def judgeSquareSum(c):
    st = int(math.sqrt(c))
    for i in range(st, -1, -1):
        if math.sqrt(c - (i ** 2)) % 1 == 0:
            return True
    return False

```
```java []
public class Solution {
    public boolean judgeSquareSum(int c) {
        int st = (int) Math.floor(Math.sqrt(c));
        for (int i = st; i >= 0; i--) {
            if (Math.sqrt(c - (i * i)) % 1 == 0) {
                return true;
            }
        }
        return false;
    }
}

```
```c []
#include <stdbool.h>
#include <math.h>

bool judgeSquareSum(int c) {
    int st = sqrt(c);
    for (int i = st; i >= 0; i--) {
        if (sqrt(c - (i * i)) == floor(sqrt(c - (i * i)))) {
            return true;
        }
    }
    return false;
}
```
