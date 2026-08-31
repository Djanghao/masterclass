# binary search well explained (Beats 100.00%)

**Author:** remedydev
**Votes:** 0
**Link:** [https://leetcode.com/problems/kth-smallest-subarray-sum/solutions/5176212/](https://leetcode.com/problems/kth-smallest-subarray-sum/solutions/5176212/)

---

# Approach
I follow a hint
1) Create a function which calculates a 'Number of subarrays sum which less then T'
2) Then I use a binary search and trying T between 0 and 10000000000

See comment in the code
# Complexity
- Time complexity:
$$O(n*Log10000000000)$$

- Space complexity:
$$O(1)$$

# Code
```

var kthSmallestSubarraySum = function(nums, k) {
    //Compute the number of subarrays with a sum less than t
    const numberSubarraysSumsLessThenT=(t)=>{
        let runningSum=0, ans=0;
        for(let j=0,i=0;j<nums.length;j++){
            runningSum+=nums[j];
            while(runningSum>t){ // shrinking a window, sum greater then t
                runningSum-=nums[i++];
            }

            // Magic happens here, 1+2+3+4 arithmetical progression formula
            // So we need only O(N) to tell a number of sub arrays less then t
            ans+=(j-i+1); 
        }
        return ans;
    }

    // Binary search
    let l=0, r=10000000000;
    while(l<=r){
        const mid=Math.trunc((l+r)/2);
        const subArraysCount=numberSubarraysSumsLessThenT(mid);
        if(subArraysCount===k){
            r=mid-1;
        }else if(subArraysCount>k){
            r=mid-1;
        }else{
            l=mid+1;
        }
    }
    return Math.max(l,r);  // return maximum boundary
};
```