# Simple C++ Greedy Algorithm With A Brief Explanation.

**Author:** fentoyal
**Votes:** 5
**Link:** [https://leetcode.com/problems/minimum-factorization/solutions/104665/](https://leetcode.com/problems/minimum-factorization/solutions/104665/)

---

We only need to pick the largest factor in [2, 9] each time and put it to the front of current result. (So that the first pick is put at the least significant digit).
Why it works?
Lets forget about how we put the digits for a moment. If we just pick the largest factor in [2, 9] every time, we can guarantee the result has the shortest length (least digits).
Now if we have the shortest length, the way to make this number smallest is to put the largest one to the least significant. 
Hence this algorithm.
```
class Solution {
public:
    int smallestFactorization(int n) {
	if (n == 1) return 1;
	long long m = 0, l = 1;
        for (int i = 9; i >= 2;)
        if (n % i == 0)
        {
            m += i*l;
            l *= 10;
            n /= i;
            if (m > INT_MAX)
                return 0;
        }else
            i --;
    return n == 1 ? m : 0;
    }
};

```