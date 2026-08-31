# Java | Stars and Bars | O(n*sqrt(n)) | + Similar Questions

**Author:** Student2091
**Votes:** 14
**Link:** [https://leetcode.com/problems/count-the-number-of-ideal-arrays/solutions/2261917/](https://leetcode.com/problems/count-the-number-of-ideal-arrays/solutions/2261917/)

---

2D DP solution is straight-forward, it will however get you TLE or MLE due to the constraint. We have to come up with something better.

Credit to [@grawlixes (link to their post)](https://leetcode.com/problems/count-the-number-of-ideal-arrays/discuss/2261280/Python-Arranging-primes-intro-to-combinatorics). For each element ending in `val`, we can place its primes into `n` slots where each slot can have multiple primes, then it corresponds to a valid sequence. 

> This is also known as "Stars and Bars ([wiki link here](https://en.wikipedia.org/wiki/Stars_and_bars_%28combinatorics%29))" 


Here is a brief explanation of Stars and Bars for anyone who doesn't want to click on the links above:
> The gist of idea is that we have k primes to put into n slots, so we can place n-1 "bars" between the primes (stars), resulting in n groups (slots). This means that there are k+n-1 total slots to place the n - 1 bars = (k+n-1)C(n-1) = (k+n-1)Ck

The challenge for Java is how to compute combination. 
#### Enter Mod Inverse.
A brief introduction on why mod inverse is needed here: 
when it comes to computing numbers like `100!/25! MOD (1e9+7)`, if we compute `100! MOD 1e9+7` first, and got a result less than `25!`, the whole expression evaluates to 0, which is obviously not correct. In order to correct this, we have to use mod inverse. `100!/25! = 100! * (1/25!) = 100! * (25!)^-1`. If we can find a number `x` such that `x*25! = 1 MOD (1e9+7)`, then we will be able to compute `100!/25! MOD 1e9+7 = 100! * x MOD 1e9+7`.

Please refer to CP algorithm Mod inverse page for more info (Just google it or check the link in the comment below).

Here I provide a Java implentation for the idea above:
95ms at 100% Speed.

#### Time Complexity: O(n*sqrt(n))
#### Space Complexity: O(n)


```Java

class Solution {
    int M =(int)1e9+7;
    public int idealArrays(int n, int maxValue) {
        long ans = 0;
        int N = n+maxValue;
        long[] inv = new long[N];
        long[] fact = new long[N];
        long[] factinv = new long[N];
        inv[1]=fact[0]=fact[1]=factinv[0]=factinv[1]=1;
        for (int i = 2; i < N; i++){ // mod inverse
            inv[i]=M-M/i*inv[M%i]%M;
            fact[i]=fact[i-1]*i%M;
            factinv[i]=factinv[i-1]*inv[i]%M;
        }
        for (int i = 1; i <= maxValue; i++){
            int tmp = i;
            Map<Integer, Integer> map = new HashMap<>();
            for (int j = 2; j*j<= tmp; j++){
                while(tmp%j==0){  // prime factorization.
                    tmp/=j;
                    map.merge(j, 1, Integer::sum);
                }
            }
            if (tmp>1){
                map.merge(tmp, 1, Integer::sum);
            }
            long gain=1;
            for (int val : map.values()){ // arranges all the primes.
                gain *= comb(n+val-1, val, fact, factinv);
                gain %= M;
            }
            ans += gain;
            ans %= M;
        }

        return (int)ans;
    }

    private long comb(int a, int b, long[] fact, long[] factinv){
        return fact[a]*factinv[b]%M*factinv[a-b]%M;
    }
}
```
#### Similar Questions that use Stars and Bars:

[1621. Number of Sets of K Non-Overlapping Line Segments](https://leetcode.com/problems/number-of-sets-of-k-non-overlapping-line-segments/discuss/898830/Python-O(N)-Solution-with-Prove) (direct application)
[1735. Count Ways to Make Array With Product](https://leetcode.com/problems/count-ways-to-make-array-with-product/) (I came across this question 1 day after contest. They are literally identical with 1-2 lines difference)