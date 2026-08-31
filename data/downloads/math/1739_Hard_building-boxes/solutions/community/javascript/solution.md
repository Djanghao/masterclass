# [Javascript] Math explanation O(logN)

**Author:** George_Chrysochoou
**Votes:** 4
**Link:** [https://leetcode.com/problems/building-boxes/solutions/1036344/](https://leetcode.com/problems/building-boxes/solutions/1036344/)

---

The plan is simple:
1. Find the biggest triangle of boxes that can be created. 
2. Add the remaining boxes one by one until you run out of them. 

**Necessary observations:**
1. A triangle made of boxes of height h has `h(h+1)(h+2)/6` boxes
**Proof**:
Any complete triangle of height ` H` has :
1 column of H boxes
2 columns of H-1 boxes
3 columns of H-2 boxes etc.
the summation equals \u03C3=\u03A3 i*(H-i+1) for  1<=i<=H
through the use of known sum-series formulas
\u03C3= (H+1)\\*\u03A3i -\u03A3(i\\*i) =(H+1)\\*(H\\*(H+1)/2) - (H\\*(H+1)(2H+1)/6)=...=H*(H+1)\\*(H+2)/6

2. In order to go from a complete triangle of height H to the next triangle( of height H+1) I always need H cubes. 
3. The difference in extra floor boxes used after adding some boxes to a complete triangle follows the pattern 1,2,2,3,3,3,4,4,4,4,5,5,5,5,5 etc. This is a known series and its i-th term can be calculated through the formula    `Math.floor(Math.sqrt(2\\*i)+1/2)`

You may be asking yourself how to prove the last 2 points, or even how to observe them. The answer is simple: pen and paper. Trial and error. Out of all the solutions posted nobody knew these formulas beforehand. 

```
var minimumBoxes = function(n) {
    //Binary search for the height of the biggest triangle I can create with n cubes available.
    let lo=1,hi=n,result
    let totalCubes=x=>x*(x+1)*(x+2)/6 //the total cubes of a triangle with height x 
    while(lo+1<hi){
        let mid=lo+hi>>1
        if(totalCubes(mid)<=n)
            lo=mid
        else 
            hi=mid
    }
	let f=(x)=>Math.floor(Math.sqrt(2*x)+1/2)// the i-th element of the sequence 1,2,2,3,3,3,4,4,4,4,5,...
    result=(lo)*(lo+1)/2// the base of the largest complete triangle 1+2+3+..+H
    n-=totalCubes(lo) //remove the cubes of the complete triangle
    return result+f(n)  // the base of the largest+ the extra floor cubes
};
```