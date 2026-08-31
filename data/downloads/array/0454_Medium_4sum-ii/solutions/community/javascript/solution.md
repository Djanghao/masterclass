# Javascript solution :0

**Author:** remmusstudy
**Votes:** 13
**Link:** [https://leetcode.com/problems/4sum-ii/solutions/260070/](https://leetcode.com/problems/4sum-ii/solutions/260070/)

---

Idea is, 
1. Reduce this problem to the 2Sum problem by calculating all possible sum of pairs in (A,B) and (C,D), store in two maps. Map key will be the sum, and the value will be the frequency of the sum.

2. Iterate map1,  calculate each offset value (0 - current value). If the offset value is found in map2 then use get the frequency and multiply them, add to the total.


```
var fourSumCount = function(A, B, C, D) {
  
	const sumTwoList = function(x,y){
        let len = x.length;
        let result = new Map();
        for(let i = 0; i < len; i++){
            for(let j = 0; j < len; j++){
               let c = x[i] + y[j];
               result.set(c, result.get(c) + 1 || 1); 
            }
        }
        return result;
    }
    
    let sum1 = sumTwoList(A,B);
    let sum2 = sumTwoList(C,D);
    let total = 0;
   
    sum1.forEach((value,key) =>{
        let offset = 0 - key;
        if(sum2.has(offset)){
            total += (sum2.get(offset) * sum1.get(key));
        }
    })
    return total;
}

```