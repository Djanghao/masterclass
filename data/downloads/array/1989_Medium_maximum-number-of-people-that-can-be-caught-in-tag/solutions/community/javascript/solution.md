# JavaScript [Beats 100%]

**Author:** ToonRiyad
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-number-of-people-that-can-be-caught-in-tag/solutions/3353688/](https://leetcode.com/problems/maximum-number-of-people-that-can-be-caught-in-tag/solutions/3353688/)

---


# Code
```
var catchMaximumAmountofPeople = function(team, dist) {
    let sum=0;
    for(let i=0;i<team.length;i++){
        if(team[i]==1){
            for(let j=i-dist;j<i+dist+1;j++) {
                if(j<0||j==i){continue}
                if(j==team.length){return sum}
                if(team[j]==0){sum++;team[j]=2;
                break
                }
            }
        }
    }
    return sum;
};
```