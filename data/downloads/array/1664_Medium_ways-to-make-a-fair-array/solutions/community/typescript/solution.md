# TypeScript O(n)

**Author:** Raptor_a
**Votes:** 0
**Link:** [https://leetcode.com/problems/ways-to-make-a-fair-array/solutions/5003572/](https://leetcode.com/problems/ways-to-make-a-fair-array/solutions/5003572/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
function waysToMakeFair(nums: number[]): number {
    let e = 0, o = 0, res = 0, prev = 0;
    let n = nums.length;
    for(let i = 0;i<n;i++){
        if(i%2==0){
            o += nums[i];
        }else e += nums[i];
    }
    for(let i = 0;i<n;i++){
        if(i%2==0){
            o = o- nums[i] + prev;
        }else e = e-nums[i] + prev;
        if(o==e) res++;
        prev = nums[i];
    }
    return res;
    
};
```