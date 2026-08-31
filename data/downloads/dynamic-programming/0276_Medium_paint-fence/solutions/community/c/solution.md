# Simple Solution without DP. 0ms 100%faster

**Author:** bansalsidharth
**Votes:** 3
**Link:** [https://leetcode.com/problems/paint-fence/solutions/851234/](https://leetcode.com/problems/paint-fence/solutions/851234/)

---

This problem requires  knowledge of permutations & combinations. 
In order to solve this problem , we divide the **total** sum into two parts
**same** & **diff**.
**same** - stores the no. of ways in which not  two adjacent fences have the same color and also the last two fences have the same color.
**diff** -  stores the no. of ways in which not two adjacent fences have the same color and also the last two fences doesn't have the same color.
```
class Solution {
public:
    int numWays(int n, int k) {  
        if (n==0 || k==0) return 0; // base case
        if(n==1) return k;  // if no. of posts is 1 there are k ways  to color the fence
        int same=k;        
        int diff=k*(k-1);
        int total=same+diff; 
        for(int i=3;i<=n;i++)
        {
            same=diff*1;
            diff=total*(k-1);
            total=same+diff;
        }
        return total;
    }
};
```