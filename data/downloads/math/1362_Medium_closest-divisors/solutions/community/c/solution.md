# C++ Simple and Easy 4-Line Solution, Faster than 99%

**Author:** YehudisK
**Votes:** 4
**Link:** [https://leetcode.com/problems/closest-divisors/solutions/1380543/](https://leetcode.com/problems/closest-divisors/solutions/1380543/)

---

**Explanation:**
For each option, num+1 and num+2, we find the closest factors.
then we compare which one is closer.
```
class Solution {
public:
    vector<int> fact(int n) {
        for (int i = sqrt(n); i > 1; i--) if (!(n % i)) return {i, n/i};
        return {1, n};
    }
    
    vector<int> closestDivisors(int num) {
        vector<int> n1 = fact(num+1), n2 = fact(num+2);
        return abs(n1[0] - n1[1]) < abs(n2[0] - n2[1]) ? n1 : n2;
    }
};
```
**Like it? please upvote!**