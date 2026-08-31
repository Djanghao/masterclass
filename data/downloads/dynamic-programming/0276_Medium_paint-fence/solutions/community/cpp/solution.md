# 3-liner O(N) with detailed math derivation (similar to Fibonacci sequence)

**Author:** zzg_zzm
**Votes:** 13
**Link:** [https://leetcode.com/problems/paint-fence/solutions/71161/](https://leetcode.com/problems/paint-fence/solutions/71161/)

---

Let ```T[n]```be the solution to the problem, actually we can prove that 
* ```T[n] = (k-1)*(T[n-1]+T[n-2])```, where ```n > 2```.

**Proof:** Note that the only restriction in this problem is that 3 three adjacent posts with same color are not allowed, so whether we can paint a post freely solely depends on whether previous two posts have the same color. Clearly, we can decompose the total number of painting solutions into 
* ```T[n] = D[n] + S[n]```, 

where ```D[n]```is the number of painting solutions with last two posts in ***different*** colors and ```S[n]```the number of painting solutions with last two posts in ***same*** color. Now we can have two key observations:
 * 1. ```D[n] = (k-1)*T[n-1]```, that is if we have a solution to paint ```n-1```posts, simply using a color different from post```n-1```to paint post```n```will give a solution for ```D[n]```without violating the rule (also holds vice versa).
* 2. ```S[n] = D[n-1]```, that is if we have a solution to paint ```n-1```posts with last two in different colors, simply repeating the same color from post```n-1```to paint post```n```will give a solution for ```S[n]```without violating the rule (also holds vice versa).

Now combining equations 1, 2 as well as definition of ```T[n]``` will give you the conclusion at top. The coding will be straightforward as following.
```
    int numWays(int n, int k) {
      int T[] = {0, k, k*k}; // initial conditions   
      for (int i = 3; i++ <= n;) T[0] = (k-1)*(T[1]+T[2]), T[1] = T[2], T[2] = T[0];
      return T[(n<3)*n];  
    }
```