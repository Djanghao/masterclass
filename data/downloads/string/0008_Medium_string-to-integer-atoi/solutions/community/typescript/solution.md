# JS / TS || Step by Step Solution

**Author:** xdxp
**Votes:** 6
**Link:** [https://leetcode.com/problems/string-to-integer-atoi/solutions/3114090/](https://leetcode.com/problems/string-to-integer-atoi/solutions/3114090/)

---

Just to undestand the steps. It is not the best way to solve the problem. 
```
function myAtoi(s: string): number {
   const len = s.length;
   let result = 0;
   let sign = 1;
   for(let i=0; i<len; i++){
    //    step 1:
       if(s[i]===' ') continue;
    //    step 2:
       if(s[i] === '+' || s[i]==='-'){
           sign = s[i] === '-' ? -1 : 1;
           if(!/[0-9]/.test(s[i+1])) return 0;
       }
    //    step 3:
        if(/[0-9]/.test(s[i])){
            result = result*10 + (+s[i]);
            if(!/[0-9]/.test(s[i+1])) break;
        }
    // break point:
        if(/[a-zA-Z.]/.test(s[i])){
            return 0;
        }
   }   
   return sign === -1 ? Math.max(-(2 ** 31), -result) : Math.min(2 ** 31 - 1, result);
// perfect mess but documented xd
};
```