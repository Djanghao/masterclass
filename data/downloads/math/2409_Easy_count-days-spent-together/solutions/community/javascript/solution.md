# Easy simple with dates

**Author:** iturna
**Votes:** 8
**Link:** [https://leetcode.com/problems/count-days-spent-together/solutions/2588442/](https://leetcode.com/problems/count-days-spent-together/solutions/2588442/)

---

```
var countDaysTogether = function(arriveAlice, leaveAlice, arriveBob, leaveBob) {
    
  const arriveAliceDate = new Date('2001-'+arriveAlice);
  const leaveAliceDate = new Date('2001-'+leaveAlice);
  const arriveBobDate = new Date('2001-'+arriveBob);
  const leaveBobDate = new Date('2001-'+leaveBob);
  
  let arriveMax = new Date(Math.max(arriveAliceDate, arriveBobDate));
  let leaveMin = new Date(Math.min(leaveAliceDate, leaveBobDate));
  
  if(arriveMax>leaveMin) return 0;
  return Math.floor((leaveMin-arriveMax)/(1000*60*60*24))+1;
};
```