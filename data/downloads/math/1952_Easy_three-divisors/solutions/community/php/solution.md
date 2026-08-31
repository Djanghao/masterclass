# One-Liner || fast|| 0ms|| 100% || O(1) || 2 ways

**Author:** ManojKumarPatnaik
**Votes:** 1
**Link:** [https://leetcode.com/problems/three-divisors/solutions/1864720/](https://leetcode.com/problems/three-divisors/solutions/1864720/)

---

class Solution {
    public boolean isThree(int n) {var c=0;
        for(int i=1;i<=n;i++)
            c = (n % i == 0) ? c + 1 : c;
         return c==3;}
}

//2nd solution 
//   // if(n%i==0)c++;