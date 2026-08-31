# modPow

**Author:** votrubac
**Votes:** 51
**Link:** [https://leetcode.com/problems/count-good-numbers/solutions/1314505/](https://leetcode.com/problems/count-good-numbers/solutions/1314505/)

---

The answer is `5 * 4 * 5 * 4 ... * 5 * 4 [ * 5]`, and we have `4` repeated `n / 2`  times, and `5` repeated `(n + 1) / 2` times (we have an extra `5` if `n` is odd). 

Since `n` can be very large, we need to use an efficient power operation. The `modPow` function below has logarithmic complexity and it's mod-aware.

> Update: see an optimized solution below.

**C++**
```cpp
long long modPow(long long x, long long y, int m = 1000000007)
{
    if (y == 0)
        return 1;
    auto p = modPow(x, y / 2, m);
    return p * p * (y % 2 ? x : 1) % m;
}
int countGoodNumbers(long long n) {
    return modPow(5, (n + 1) / 2) * modPow(4, n / 2) % 1000000007;
}  
```
**Java**
```java
long modPow(long x, long y)
{
    if (y == 0)
        return 1;
    long p = modPow(x, y / 2);
    return p * p * (y % 2 > 0 ? x : 1) % 1000000007;
}
public int countGoodNumbers(long n) {
    return (int)(modPow(5, (n + 1) / 2) * modPow(4, n / 2) % 1000000007);    
}
```
#### Optimized Solution
We can just do `modPow(20, n / 2) * (n % 2 ? 5 : 1)` instead of two separate function calls, like [ZX007PI](https://leetcode.com/ZX007PI/) suggested. 
**C++**
```cpp
long long modPow(long long x, long long y, int mod = 1000000007)
{
    if (y == 0)
        return 1;
    auto p = modPow(x, y / 2);
    return p * p % mod * (y % 2 ? x : 1) % mod;
}
int countGoodNumbers(long long n) {
    return modPow(20, n / 2) * (n % 2 ? 5 : 1) % 1000000007;
}   
```