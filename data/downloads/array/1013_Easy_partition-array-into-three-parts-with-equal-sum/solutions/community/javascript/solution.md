# JS-Easy to understand for beginners as well

**Author:** lssuseendharlal
**Votes:** 9
**Link:** [https://leetcode.com/problems/partition-array-into-three-parts-with-equal-sum/solutions/1069596/](https://leetcode.com/problems/partition-array-into-three-parts-with-equal-sum/solutions/1069596/)

---

```
var canThreePartsEqualSum = function(A) {
let totalSum=0;
    for(let i=0;i<A.length;i++){
        totalSum+=A[i]
    }
    const average = totalSum/3;
    let sum=0,count=0;
    for(let i=0;i<A.length;i++){
        sum+=A[i];
        if(sum===average){
            count++;
            sum=0;
        }
    }
    return count>=3;
};
```