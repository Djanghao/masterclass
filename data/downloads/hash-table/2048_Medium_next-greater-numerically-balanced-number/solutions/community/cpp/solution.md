# C++ | Beats 100% time and 92% space

**Author:** shield75_
**Votes:** 4
**Link:** [https://leetcode.com/problems/next-greater-numerically-balanced-number/solutions/1538324/](https://leetcode.com/problems/next-greater-numerically-balanced-number/solutions/1538324/)

---

Maintained array of size 7 only because with given contraints, there is no minimum number possible with all 7's that is greater than n.
This way, we avoid checking unnecessary numbers in the start itself.
```
class Solution {
public:
    bool check(int n)
    {
        int nums[7]={0};
        while(n!=0)
        {
            if(n%10==0 || n%10>6) return false;
            nums[n%10]++;
            n=n/10;
        }
        for(int i=1;i<=6;i++)
        {
            if(nums[i]!=0 && nums[i]!=i) return false;
        }
        return true;
    }
    
    int nextBeautifulNumber(int n) {
    n++;
    while(1)
    {
        if(check(n)) return n;
        n++;
    }
    return 0;
    }
};
```