# ✅ [Javascript] O(n) | Easy understanding with Example

**Author:** mrinal_Kanti_ghosh
**Votes:** 4
**Link:** [https://leetcode.com/problems/all-divisions-with-the-highest-score-of-a-binary-array/solutions/1731240/](https://leetcode.com/problems/all-divisions-with-the-highest-score-of-a-binary-array/solutions/1731240/)

---

3 Step \uD83E\uDE9C process
nums = [0,0,1,0]                      index  0,1,2,3,4
left array [] => [0,1,2,2,3] ; count the zeros from left to right
right array[]=>  [1,1,1,0,0]; count the ones from right to left
total array []=> SUM  (0+1),(1+1),(2+1),(2+0),(3+0) => [1,2,3,2,3]
All done \u2705 just find max element index !
(Please upvote if you love this explanation)

```
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var maxScoreIndices = function(nums) {
        let n=nums.length;
        // initialize 3 arrays for counting with n+1 size
        let zeros = new Array(n+1).fill(0);
        let ones = new Array(n+1).fill(0);
        let total = new Array(n+1).fill(0);
        
       // count no of zeros from left to right
        for(let i=0;i<n;i++){
            if(nums[i]==0)zeros[i+1]=zeros[i]+1;
            else zeros[i+1]=zeros[i];
        }

        
        // count no of ones from right to left
        for(let i=n-1;i>=0;i--){
            if(nums[i]==1)ones[i]=ones[i+1]+1;
            else ones[i]=ones[i+1];
        }

        
        // merge left and right to total and find max element
        let max=0;
        for(let i=0;i<n+1;i++){
            total[i]=ones[i]+zeros[i];
            if(total[i]>max)max=total[i];
        }

        
        // Find occurrence of max elements and return those indexes
        let ans= [];
        for(let i=0;i<n+1;i++){
            if(total[i]==max)ans.push(i);
        }

        return ans;
};
```