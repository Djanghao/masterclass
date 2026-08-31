# Javascript very very easy to understand solution with video explanation!

**Author:** rlawnsqja850
**Votes:** 12
**Link:** [https://leetcode.com/problems/non-decreasing-subsequences/solutions/3075050/](https://leetcode.com/problems/non-decreasing-subsequences/solutions/3075050/)

---

Here is video for explain if it is helpful please subscribe! :

https://youtu.be/UFQcPycGqgM

# Code
```
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function(nums) {
    let res = []
    let map = {}
    let iterate = (index,temp) =>{
        if(map[temp]) return;
        if(temp.length>=2){
            res.push(temp)
        }
        for(let i =index;i<nums.length;i++){
            if(temp[temp.length-1]>nums[i]) continue;
            map[temp] = true;
            iterate(i+1,[...temp,nums[i]])
        }
    }
    iterate(0,[])
    return res;
};
```