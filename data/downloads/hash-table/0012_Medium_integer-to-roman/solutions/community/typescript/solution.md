# JS / TS || Clean and Easy Solution || Beats 98.5%

**Author:** xdxp
**Votes:** 14
**Link:** [https://leetcode.com/problems/integer-to-roman/solutions/3114050/](https://leetcode.com/problems/integer-to-roman/solutions/3114050/)

---

```
function intToRoman(num: number): string {
    const rNums: Record<string,number> = {
      M:1000,
      CM:900,
      D:500,
      CD:400,
      C:100,
      XC:90,
      L:50,
      XL:40,
      X:10,
      IX:9,
      V:5,
      IV:4,
      I:1
    };
    let result = '';
    for(let rN in rNums){
        let count = num / rNums[rN];
        if(count>0) {
            result+= rN.repeat(count);
            num = num % rNums[rN];
        }
    }
    return result;
};
```