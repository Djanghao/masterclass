# O(k) Straightforward Java DP Solution, calculating possibilities of ending dots.

**Author:** Travolta
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-ways-to-reach-destination-in-the-grid/solutions/4321390/](https://leetcode.com/problems/number-of-ways-to-reach-destination-in-the-grid/solutions/4321390/)

---

# Intuition
Imagining the cross intersacting at the dest dot, we got four types of dots: 
1. lying out of the cross: out
2. lying on the row of the cross: in1
3. lying on the column of the cross: in2
4. lying on dest: fineIn

the possbilities of types transformation is bounded for each dot type. so we can brute force go through them.

# Approach
<!-- Describe your approach to solving the problem. -->
For the last two steps:
each out has two ways to reach dest.
each in1 has m-2 ways to reach dest.
each in2 has n-2 ways to reach dest.
each f has m+n-2 ways to reach dest.

we need to calculate **how many possibilities of routes ending currently on each of four types** 
which could be calculated through recursion map:

```
         total,   out,     in1      in2     fineIn   toDestIn2steps
out     (m+n-2),  m+n-4,   1        1       0        2
in1     (m+n-2),  n-1,     m-2      0       1        m-2
in2     (m+n-2),  m-1,     0        n-2     1        n-2
fineIn  (m+n-2),  0,       m-1,     n-1     0        m+n-2
```

each cell means how many possiblities row to column could happen for current step.

Initial state would be the source itself.
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(k)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(1)
# Code
```
class Solution {
    public int numberOfWays(int n, int m, int k, int[] source, int[] dest) {
        //         total,   out,     in1      in2     fineIn   toDestIn2steps
        // out     (m+n-2), m+n-4,   1        1       0        2
        // in1     (m+n-2), n-1,     m-2      0       1        m-2
        // in2     (m+n-2), m-1,     0        n-2     1        n-2
        // fineIn  (m+n-2), 0,       m-1,     n-1     0        m+n-2
        
        int mod = 1000000007;
        long o = 0, i1 = 0, i2 = 0, f = 0;
        if (source[0] == dest[0] && source[1] == dest[1]) f++;
        else if (source[0] == dest[0]) i1++;  
        else if (source[1] == dest[1]) i2++;
        else o++;
        if (k == 1) return (int)(i1+i2);

        for (int j = 0; j < k - 2; j++) {
            long oo = o*(m+n-4)%mod, oi1 = o, oi2 = o;
            long i1o = i1*(n-1)%mod, i1i1 = i1*(m-2)%mod, i1f = i1;
            long i2o = i2*(m-1)%mod, i2i2 = i2*(n-2)%mod, i2f = i2;
            long fi1 = f*(m-1)%mod, fi2 = f*(n-1)%mod;

            o = ((oo + i1o)%mod + i2o)%mod;
            i1 = ((oi1 + i1i1)%mod + fi1)%mod;
            i2 = ((oi2 + i2i2)%mod + fi2)%mod;
            f = (i1f + i2f)%mod;
        }

        long res = 0;
        res = (res + o*2)%mod;
        res = (res + i1*(m-2)%mod)%mod;
        res = (res + i2*(n-2)%mod)%mod;
        res = (res + f*(m+n-2)%mod)%mod;
        
        return (int) (res);
    }
}
```