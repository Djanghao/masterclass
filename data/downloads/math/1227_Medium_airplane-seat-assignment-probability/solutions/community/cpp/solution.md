# Recursive and DP solution with explanation

**Author:** jzy95310
**Votes:** 18
**Link:** [https://leetcode.com/problems/airplane-seat-assignment-probability/solutions/408058/](https://leetcode.com/problems/airplane-seat-assignment-probability/solutions/408058/)

---

The main idea is:
The probability of "nth person can get the nth seat" can be divided into 2 parts:
1. The first person gets the first seat, then the nth person is guaranteed to get the nth seat. The probability of this situation is 1/n.
2. The first person gets the nth seat, then the nth person cannot get his/her seat. The probability of thi situation is also 1/n.
3. The first person gets any other seat except the first one and the nth one, then the problem shrinks into a subproblem with size n-1 because the person whose seat is occupied by the first person will become the new "person with his/her ticket lost". The probability of this situation is (n-2)/n.

Therefore, P(N) = 1/n * 1 + 1/n * 0 + (n-2)/n * P(N - 1) = 1/n + (n-2)/n * P(N - 1)

Recursive solution:
```
class Solution {
public:
    double nthPersonGetsNthSeat(int n) {
        if (n == 1) {
            return 1.0;
        }
        return (1.0/n + ((n-2.0)/n)*nthPersonGetsNthSeat(n-1));
    }
};
```
DP solution:
```
class Solution {
public:
    double nthPersonGetsNthSeat(int n) {
        vector<double> dp(n);
        dp[0] = 1.0;
        for (int i=1; i<dp.size(); i++) {
            dp[i] = 1.0/(i+1) + ((i+1-2.0)/(i+1))*dp[i-1];
        }
        return dp.back();
    }
};
```