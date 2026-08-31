# [Javascript] DP+ Bitmasks  + comments

**Author:** George_Chrysochoou
**Votes:** 0
**Link:** [https://leetcode.com/problems/the-number-of-good-subsets/solutions/1450602/](https://leetcode.com/problems/the-number-of-good-subsets/solutions/1450602/)

---

```
let bad=new Set([ 1, 4, 8, 9, 12, 16, 18, 20, 24, 25, 27, 28]), //bad numbers are the ones whose prime representation has more than 1 distinct numbers
	// MASKS[number] is a mask that has the i-th bit set, if the prime representation of that number contains the i-th prime  
    MASKS=[0,   0,   1,  2,  1,   4, 3, 8,  1, 2,   5,  16,  3, 32,   9, 6, 1, 64, 3, 128,   5, 10, 17, 256, 3, 4, 33, 2,   9, 512,  7]
let snoob=x=>( x + (x & -x)) | ( ((x ^ ( x + (x & -x)))/(x & -x))>>2) // snoob(x) returns the next bigger number than x that has the same number of set bits with x 
let powmod= (a, b, mod=BigInt(1e9+7)) => { let r = 1n;a=BigInt(a),b=BigInt(b||0);while (b > 0n) { if (b % 2n == 1) r = r * a % mod; b >>= 1n; a = a * a % mod; } return r; };
var numberOfGoodSubsets = function(A) {
    let freq={}
    A.forEach(c=>freq[c]=(freq[c]||0)+1)        
    A=Array.from(new Set(A)).filter(d=>!bad.has(d)) // keep only the good distinct numbers 
    let n=A.length,dp=[...Array(1<<n)],mod=BigInt(1e9+7),res=0n 
    for(let length=1,index;length<=n;length++)
        for(let state=(1<<length)-1;state<(1<<n);res=(res+dp[state][0])%mod,state=snoob(state))
            if(length===1) //base case 
                index=Math.log2(state&-state),
                dp[state]=[ BigInt(freq[A[index]]) , MASKS[A[index]] ]
            else{ // split  the number to left and right parts, the right part is the leftmost 1 
                let left=state& (state - 1),right= state^left,
                    [t1,f1]=dp[left],[t2,f2]=dp[right]
                dp[state]=[(f1&f2)>0?0n:(t1 *t2)%mod, f1|f2 ]
            }
    return (res*powmod(2,freq[1])) %mod  // count the ones, basically any set that can be made with 1s needs to be counted.
};
```
**Complexity**
O( 2^n ) where n can go up to 18 (the maximum count of good numbers )