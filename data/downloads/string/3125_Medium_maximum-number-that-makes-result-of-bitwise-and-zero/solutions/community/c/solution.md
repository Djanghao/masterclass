# bit manipulation c solution

**Author:** nameldi
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-that-makes-result-of-bitwise-and-zero/solutions/5081783/](https://leetcode.com/problems/maximum-number-that-makes-result-of-bitwise-and-zero/solutions/5081783/)

---

```
long long maxNumber(long long n) {
    int cnt = 0;
    while(n){
        cnt++;
        n >>= 1;
    }
    while(cnt > 1){
        n <<= 1;
        n |= 1;
        cnt--;
    }
    return n;
}
```