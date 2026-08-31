# C++ Super Simple 3-Line Solution, 0ms Faster than 100%

**Author:** YehudisK
**Votes:** 18
**Link:** [https://leetcode.com/problems/three-divisors/solutions/1394071/](https://leetcode.com/problems/three-divisors/solutions/1394071/)

---

**Idea:**
Each number has two factors - 1 and itself.
So all we need to find is if n has only one more factor, which could happen only if it's a square of a prime number.
```
class Solution {
public:
    bool isPrime(int n) {
        for (int i = 2; i <= sqrt(n); i++) if (n % i == 0) return false;
        return true;
    }
    
    bool isThree(int n) {
        return n != 1 && n != 2 && (int)sqrt(n)*sqrt(n) == n && isPrime(sqrt(n));
    }
};
```
**Like it? please upvote!**