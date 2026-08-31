# Typescript approach

**Author:** Ranadeeps
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-maximum-length-of-valid-subsequence-i/solutions/5423080/](https://leetcode.com/problems/find-the-maximum-length-of-valid-subsequence-i/solutions/5423080/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
O(n)

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
function maximumLength(nums: number[]): number {
    let ec=0;
    let oc=0;
    let eoc=0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]%2==0){
            ec++;
        }else{
            oc++;
        }
    }
    for(let i=0;i<nums.length-1;i++){
        if(nums[i]%2==0&&nums[i+1]%2==1){
            eoc++;
            continue;
        }
        if(nums[i]%2==1&&nums[i+1]%2==0){
            eoc++;
            continue;
        }
    }
    eoc++;
    return Math.max(ec,oc,eoc);
};
```