# Python3 || 2 lines, check 10 integers  || T/S: 99% / 38%

**Author:** Spaulding_
**Votes:** 12
**Link:** [https://leetcode.com/problems/smallest-divisible-digit-product-i/solutions/6027586/](https://leetcode.com/problems/smallest-divisible-digit-product-i/solutions/6027586/)

---

Here's the intuition:

It's not difficult to show that we are ensured of encountering a solution in the interval [*n* . . *n* + 10], so we reduce the problem to an iteration over this interval.

```python3 []
class Solution:
    def smallestNumber(self, n: int, t: int) -> int:

        for i in range(n, n + 10):
            if reduce(mul, map(int,str(i))) %t == 0: return i
```
```cpp []
class Solution {
public:
    int smallestNumber(int n, int t) {
        auto productOfDigits = [](int x) {
            int product = 1;
            while (x > 0) {
                product *= (x % 10);
                x /= 10;}
            return product;
        };

        for (int i = n; i < n + 10; ++i) {
            if (productOfDigits(i) % t == 0) {
                return i;}
        }
        
        return -1; }
};
```
```java []
public class Solution {
    public int smallestNumber(int n, int t) {
        for (int i = n; i < n + 10; i++) {
            if (productOfDigits(i) % t == 0) {
                return i; }
        }
        return -1;
    }
    
    private int productOfDigits(int x) {
        int product = 1;
        while (x > 0) {
            product *= (x % 10);
            x /= 10;}

        return product;
    }
}
```
[https://leetcode.com/problems/smallest-divisible-digit-product-i/submissions/1447882802/](https://leetcode.com/problems/smallest-divisible-digit-product-i/submissions/1447882802/)

I could be wrong, but I think that time complexity is *O*(*N*) and space complexity is *O*(1), in which *N* ~ `len(str(x))`. *Note: In this problem, *N* <= 3.