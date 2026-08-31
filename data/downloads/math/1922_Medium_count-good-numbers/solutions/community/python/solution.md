# Python: Logarithmic Time Solution

**Author:** meaditya70
**Votes:** 19
**Link:** [https://leetcode.com/problems/count-good-numbers/solutions/1314434/](https://leetcode.com/problems/count-good-numbers/solutions/1314434/)

---

Approach: Each even index numbers have 5 possibilites (0,2,4,6,8) and each odd index numbers have 4 possibilities(2,3,5,7).

So, 
if n = 4, ans = 5 * 4 * 5 * 4 = 20 ^ (4/2) = 20 ^ 2
if n = 7, ans =  5 * 4 * 5 * 4 * 5 * 4 * 5 = (20 ^ (6/2)) * 5 = (20 ^ 3) * 5 

Clearly it is visible that, if the number n is even ans is 20 ^ (n/2) and if the number n is odd, then along with doing 20 ^ (n/2) we need to multiply 5 at the end.

Now if we do it linearly, it will throw a TLE. But using **inbuilt pow funtion** in python, we can calucate the pow(a,b) in log2(b) time. 
*Now, calculating power can exceed the size of variable, so pass a mod constant as 3rd parameter in pow funtion.*

```
class Solution:
    def countGoodNumbers(self, n: int) -> int:
        ans = 1
        rem = n % 2
        n -= rem
        ans = pow(20, n//2, 10**9 + 7)
        if rem == 1:
            ans *= 5
        return ans % (10**9 + 7)
```
**Note:** It can be solved in constant time, by using math.pow funtion.

Time : O(log (n/2)) = O(logn)
Space : O(1)