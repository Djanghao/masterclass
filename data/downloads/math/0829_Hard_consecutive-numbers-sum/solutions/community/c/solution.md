# C++ Most Easy Solution

**Author:** Satyamchaubey123
**Votes:** 7
**Link:** [https://leetcode.com/problems/consecutive-numbers-sum/solutions/2304471/](https://leetcode.com/problems/consecutive-numbers-sum/solutions/2304471/)

---

```
class Solution {
public:
    int consecutiveNumbersSum(int n) {
        int count=0,i=1;
        while(n>0)
        {
            n=n-i;
            if(n%i==0)count++;
            i++;
        }
        return count;
    }
};
```

If you like the solution plz upvote..