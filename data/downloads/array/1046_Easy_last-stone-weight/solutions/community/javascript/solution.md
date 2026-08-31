# JavaScript || Faster than 95% ||Easy to understand ||With comments

**Author:** VaishnaviRachakonda
**Votes:** 38
**Link:** [https://leetcode.com/problems/last-stone-weight/solutions/1923171/](https://leetcode.com/problems/last-stone-weight/solutions/1923171/)

---

```
/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    while(stones.length>1){
        stones.sort((a,b)=>b-a); //sort the remaining stones in decending order;
        stones[1]=stones[0]-stones[1]; //smash the first and second stones ie the stones with largest weight ans assign the remaining stone weight to 1st index
        stones.shift();//shift the array to get rid of the 0 index
    }
    return stones[0] //return the 0 index value ie the resultl
};
```

Its okay if you did not get the solution in the first try, don't give up!
Please do UPVOTE if you find it helpfull.... I know this is not the best solution to this problem but this is what I came up with.
Happy C0d1ng!! Cheers!