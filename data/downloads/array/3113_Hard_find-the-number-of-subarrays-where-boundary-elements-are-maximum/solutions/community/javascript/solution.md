# JS

**Author:** Manu-Bharadwaj-BN
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-the-number-of-subarrays-where-boundary-elements-are-maximum/solutions/5017235/](https://leetcode.com/problems/find-the-number-of-subarrays-where-boundary-elements-are-maximum/solutions/5017235/)

---

# Code
```
var numberOfSubarrays = function(nums) {
    let max = -1,max_i=-1,max_count=1,ans=0;
    let stack=[],freq={}
    for(let i=0;i<nums.length;i++){
        let c = nums[i];
        while(stack.length>0 && stack[stack.length-1]<c){
            let removed = stack.pop();
            freq[removed]--;
        }
        if(freq[c]!==undefined){
            ans += freq[c];
        }
        if(freq[c]===undefined){
            freq[c]=1;
        }else{
            freq[c]++;
        }
        stack.push(c);
    }
    return nums.length+ans;
};
```