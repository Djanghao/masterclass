# Javascript easy solution

**Author:** Gaurang9
**Votes:** 3
**Link:** [https://leetcode.com/problems/distribute-candies-to-people/solutions/796986/](https://leetcode.com/problems/distribute-candies-to-people/solutions/796986/)

---

```
var distributeCandies = function(candies, num_people) {
    let finalDistribution = new Array(num_people).fill(0) // [0,0,0,0] //candies=7
    let candy =1;
    let i = 0;
    while(candy < candies){
        if(i===num_people) i=0
        finalDistribution[i] = finalDistribution[i]+candy;
        candies = candies - candy;
        candy++;
        i++;
    }
    if(candies > 0){
        if(i===num_people) i=0;
        finalDistribution[i] = finalDistribution[i] + candies;
    }
    return finalDistribution
};