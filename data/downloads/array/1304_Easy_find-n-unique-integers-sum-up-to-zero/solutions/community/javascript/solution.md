# Easy to understand javascript beginner friendly

**Author:** yutoliho
**Votes:** 23
**Link:** [https://leetcode.com/problems/find-n-unique-integers-sum-up-to-zero/solutions/468560/](https://leetcode.com/problems/find-n-unique-integers-sum-up-to-zero/solutions/468560/)

---


```
var sumZero = function(n) {
  var num = Math.floor(n/2); 
  var res = [];

  for(var i=1;i<=num;i++){
      res.push(i,-i)
     } 

  if(n%2!==0){
    res.push(0)
  }
  
  return res 
}
```