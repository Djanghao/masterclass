# Javascript No Loops (Outside GCD), Fastest/Lowest Mem (100%/100%)

**Author:** joe40001
**Votes:** 5
**Link:** [https://leetcode.com/problems/nth-magical-number/solutions/863002/](https://leetcode.com/problems/nth-magical-number/solutions/863002/)

---

I just did a lot of of math in my notebook and figured out how to basically calculate the result. I don't know the total amount of javascript submissions, but I'm pretty proud of what I did.

The trick is that the answer is going to be `A*X or B*Y`  And that X + Y is just going to equal N plus the number of times  `A*X == B*Y` I called this "superN".

Once you know the superN and know the ratio of what X to Y should be (which is the same as B to A) you can trivially caculate X and Y for a given superN.

```
/**
 * @param {number} N
 * @param {number} A
 * @param {number} B
 * @return {number}
 */
var nthMagicalNumber = function(N, A, B) {
    var temp;
    if(B > A){
        temp = A;
        A = B;
        B = temp;
    }
    //A is bigger
    
    var shareFreq = ((A+B)/GCD(A,B))-1;
    var numShares = Math.floor(N/shareFreq);
    var superN = N + numShares;
    
    //X+Y = superN
    
    var X = Math.ceil(superN*B/(A+B));
    var Y = Math.ceil(superN-(superN*B/(A+B)));
    
    var mod = (10**9)+7;
    
    if(X*A <= Y*B)return (X*A)%mod;
    else return (Y*B)%mod;
};

var GCD = function(x,y){
    while(y!=0){
        var t = y;
        y = x % y;
        x = t;
    }
    return x;
}
```

