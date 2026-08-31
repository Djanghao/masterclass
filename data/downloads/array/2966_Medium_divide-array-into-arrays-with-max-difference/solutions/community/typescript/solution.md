# Beats 99.34% of users with TypeScript

**Author:** pandey_suraj
**Votes:** 2
**Link:** [https://leetcode.com/problems/divide-array-into-arrays-with-max-difference/solutions/4725743/](https://leetcode.com/problems/divide-array-into-arrays-with-max-difference/solutions/4725743/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->
Sort the array first, then insert it into the gap until it is three. Next, determine whether the current value of i - (i-2) is less than or equal to k. If it is, append it to the answer array; otherwise, return [].

# Complexity
- Time complexity: O(n log n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:  O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
function divideArray(nums: number[], k: number): number[][] {
    nums.sort((a,b) => a-b)
    let answer = []
    for(let i = 2 ; i < nums.length; i = i+3){
        if((nums[i] - nums[i-2]) <= k){
            let arr = nums.slice(i-2,i+1)
            answer.push(arr)
        }else{
            return []
        }

    }
    return answer
    
};
```