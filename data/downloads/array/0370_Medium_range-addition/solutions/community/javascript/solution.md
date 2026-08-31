# O(n) Time Complexity Javascript Easy Solution

**Author:** theesoteric
**Votes:** 3
**Link:** [https://leetcode.com/problems/range-addition/solutions/1339668/](https://leetcode.com/problems/range-addition/solutions/1339668/)

---

```
/**
 * @param {number} length
 * @param {number[][]} updates
 * @return {number[]}
 */
var getModifiedArray = function(length, updates) {
    /*
    startIdxi, endIdxi, inci
    Approach: add 'inci' at the 'startIdxi' and substract 'inci' at 'endIdxi'+1 if 'endIdxi'+1 inside the range
    Do sum of elements to create the 'ans' array
    */
    let ans=[],sum=0;
    for(let i=0;i<length;i++){
        ans.push(0);
    }
    for(let i=0;i<updates.length;i++){
        ans[updates[i][0]]+=updates[i][2];
        if(updates[i][1]+1<=length-1){
            ans[updates[i][1]+1]-=updates[i][2];
        }
    }
    for(let i=0;i<length;i++){
        sum+=ans[i];
        ans[i]=sum;
    }
    return ans;
};
```