# Typescript Solution using Bit Masking

**Author:** ppranay_20
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-xor-sum-of-two-arrays/solutions/5574054/](https://leetcode.com/problems/minimum-xor-sum-of-two-arrays/solutions/5574054/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $$O(n*2^n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:$$O(n*2^n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
function findMinXor(index: number , mask: number , nums1: number[] , nums2: number[] , dp: number[][]) : number{
    if(index >= nums1.length) return 0;

    if(dp[index][mask] != -1) return dp[index][mask];

    let ans: number = Number.MAX_VALUE;
    for(let i: number = 0 ; i<nums2.length ; i++){
        if(mask&(1<<i)) continue;
        let XOR: number = nums1[index]^nums2[i];
        ans = Math.min(ans,XOR+findMinXor(index+1,mask|(1<<i),nums1,nums2,dp));
    }

    return dp[index][mask] = ans;
}

function minimumXORSum(nums1: number[], nums2: number[]): number {
    let n: number = nums2.length;
    let dp : number[][] = Array.from({length : n},() => Array.from({length : 1<<n}, () => -1));


    return findMinXor(0,0,nums1,nums2,dp);
};
```