# ✅C++ | ✅Easy

**Author:** Yash2arma
**Votes:** 7
**Link:** [https://leetcode.com/problems/minimum-cuts-to-divide-a-circle/solutions/2850479/](https://leetcode.com/problems/minimum-cuts-to-divide-a-circle/solutions/2850479/)

---

**Approach:** If n is even we cut a circle n/2 times, if n is odd we cut a circle n times to divide a circle into n equal slices.
```
class Solution 
{
public:
    int numberOfCuts(int n) 
    {
        if(n==1) return 0; //edge case
        return n%2==0 ? n/2 : n; 
    }
};
```