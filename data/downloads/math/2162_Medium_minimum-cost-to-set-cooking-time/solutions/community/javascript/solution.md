# ✅ Easy to understand JS Solution with explanation

**Author:** dollysingh
**Votes:** 3
**Link:** [https://leetcode.com/problems/minimum-cost-to-set-cooking-time/solutions/1749553/](https://leetcode.com/problems/minimum-cost-to-set-cooking-time/solutions/1749553/)

---

Intuition:

The idea is first we need to think that in how many ways we can get targetSeconds so that we can maintain the constraint of mm:ss i.e 99:99. And from those ways we need one possible combination such that we get less tired(moving + pushing those buttons).

**Example 1:**  if we have targetSeconds of 400 seconds:

```
1st way       400 sec ( _ _ : _ _) i.e ( 0 0: 400 )
              -60
              -----
2nd way       340 sec ( _ _ : _ _) i.e ( 0 1: 340 ) <--- cannot be arranged here
              -60
			  -----
3rd way       280 sec ( _ _ : _ _) i.e ( 0 2: 280 )<-- neither here
              -60
              -----
4th way       220 sec ( _ _: _ _) i.e ( 0 3: 220 ) <-- neither here
              -60
             -----
5th way.      160 sec ( _ _: _ _) i.e ( 0 4: 160 ) <-- neither here
              -60
              -----
6th           100 sec ( _ _: _ _) i.e ( 0 5: 100 ) <-- neither here
              -60
              -----
               40 sec ( 0 6: 4 0) <-- here we can achieve our constraint ( <=99: <=99 )
```

Hence we can see that 1 to 5 can not be part of minimum cost as they do not follow our constraint of ( <=99: <=99 ). For these we simply continue and for 6 we generate our cost, which will be the minimum.


**Example 2:**  targetSeconds of 99 seconds:
```
1st way   99 sec ( _ _ : _ _) i.e ( 0 0: 99 )  <-- can be arranged in mm:ss
         -60
		 -----
2n way    39 sec ( _ 1 : _ _) i.e ( 0 1: 39 )  <-- can be arranged in mm:ss
```

Hence we see 1 and 2 both fulfill our criteria of ( <=99: <=99 ) and both of them will contribute to our minimum cost logic

**CODE**

```
/**
 * @param {number} startAt
 * @param {number} moveCost
 * @param {number} pushCost
 * @param {number} targetSeconds
 * @return {number}
 */
var minCostSetTime = function(startAt, moveCost, pushCost, targetSeconds) {
    let cost = Infinity;
    
    let maxMinutes = Math.floor(targetSeconds / 60);
    
    for(let min = 0; min <= maxMinutes; min++) {
        let secs = targetSeconds - min * 60;
        
        if (secs > 99 || min > 99) continue;
        
        let buttons = String(100 * min + secs);
        let prev = Number(buttons[0]);
        
        let sum = 0;
        
        //start index will vary according to startAt pointer
        let start = 0;
        
        //If startAt is equal to first button, we need to add pushCost fatigue
        if(prev === startAt) {
            sum += pushCost;
            start = 1;
         } else {
            //Else we need to add moveCost fatigue
            sum += moveCost;
         }
        
        for(let i = start; i < buttons.length; i++) {
            let button = Number(buttons[i]);
            
            if(button !== prev) {
                sum += moveCost + pushCost;
            } else {
                sum += pushCost;
            }
            
            prev = button;
        }
        
        cost = Math.min(cost, sum)
    }
    
    return cost;
};
```

Note: This is JS version of https://leetcode.com/problems/minimum-cost-to-set-cooking-time/discuss/1746988/Python3-Java-C%2B%2B-Combinations-of-Minutes-and-Seconds-O(1) Solution

Hope it helps!