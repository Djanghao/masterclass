# Easy JS solution Beats 95% online submissions

**Author:** Viraj_Patil_092
**Votes:** 6
**Link:** [https://leetcode.com/problems/number-of-subsequences-that-satisfy-the-given-sum-condition/solutions/3491617/](https://leetcode.com/problems/number-of-subsequences-that-satisfy-the-given-sum-condition/solutions/3491617/)

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
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var numSubseq = function(nums, target) {
    let pow = [];
    pow.push(1);

    nums.sort((a,b)=>{return a-b;})

    const mod = 1e9+7;

    for(let i = 1;i < nums.length;i++){
        pow.push((pow[pow.length-1]*2) % mod);
    }

    let i = 0, j = nums.length-1, res = 0;

    while(i <= j){
        if(nums[i]+nums[j] > target){
            j--;
        }
        else{
            res = (res+pow[j-i++]) % mod;
        }
    }

    return res;
};
```