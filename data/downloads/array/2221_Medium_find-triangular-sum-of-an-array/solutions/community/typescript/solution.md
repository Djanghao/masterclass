# Typescript Solution beats 95%

**Author:** ppranay_20
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-triangular-sum-of-an-array/solutions/5562793/](https://leetcode.com/problems/find-triangular-sum-of-an-array/solutions/5562793/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $$O(n^2)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
function triangularSum(nums: number[]): number {
    let newNums : number[] = nums;
    let n : number = nums.length;

    while(n > 1){
        for(let i : number = 0 ; i<n-1 ; i++){
            newNums[i] = (newNums[i]+newNums[i+1])%10;
        }

        n--;
    }

    return newNums[0];
};
```