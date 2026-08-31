# Javascript Simple Solution

**Author:** Saadsiddiqi
**Votes:** 1
**Link:** [https://leetcode.com/problems/super-washing-machines/solutions/1702358/](https://leetcode.com/problems/super-washing-machines/solutions/1702358/)

---

```
/**
 * @param {number[]} machines
 * @return {number}
 */
var findMinMoves = function(machines) {
    var sum=0;
    for(var i=0; i<machines.length; i++)
        sum+=machines[i];
    if((sum/machines.length)%1 != 0)
        return -1;
    let avg = sum/machines.length;
    let output = 0 , left=0;
    i=0;
;
    while(i < machines.length) 
    {
        machines[i] -= avg;
        output = Math.max(output, Math.max(0, -left) + Math.max(0, -(-left - machines[i])));
        left += machines[i++];
    }
    return output;  
};
```