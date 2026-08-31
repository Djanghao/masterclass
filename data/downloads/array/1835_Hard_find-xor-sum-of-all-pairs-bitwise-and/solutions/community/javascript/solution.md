# [JavaScript] Just Math - use a rule to simply

**Author:** jialihan
**Votes:** 7
**Link:** [https://leetcode.com/problems/find-xor-sum-of-all-pairs-bitwise-and/solutions/1164069/](https://leetcode.com/problems/find-xor-sum-of-all-pairs-bitwise-and/solutions/1164069/)

---

This problem is just like using my time to find a simplied rule, finally I got:
```
let x in arr1;
let 2,3 in arr2;
(x & 2) XOR (x & 3) = x AND (2 xor 3)
```
In contest, waste a long time to find this rule, see my comments in code.
```js
var getXORSum = function(arr1, arr2) {
    // (x & 2) xor (x & 3) =[ !(x&2) & (x&3) ] OR  [ (x&2) & !(x&3) ]
	// = [ (!x || !2 ) & (x&3) ] OR [ (x&2) & (!x || !3) ]
    // = [ (!x || !2) & x & 3 ]   OR  [ x & 2 & (!x || !3) ]
    // = (!2 & x & 3 ) || (x & 2 & !3)
    // = x & [ (!2 & 3) || (!3 & 2) ]
    // = x & (2 XOR 3)
    // const ans = (2 XOR 3 XOR....) in arr2
    // The same principle: x, y,z... in arr1
    // res = (x & ans) XOR (y & ans) XOR .....
    //  = ans & (x XOR y XOR z .......)
    // Finally: res = (XOR: arr1) AND (XOR: arr2);
    var xor1 = arr1.reduce((acc,cur)=>acc^cur);
    var xor2 = arr2.reduce((acc,cur)=>acc^cur);
    return xor1 & xor2;
};
```