# Typescript || Prefix sum

**Author:** onifs10
**Votes:** 3
**Link:** [https://leetcode.com/problems/range-sum-query-immutable/solutions/2698174/](https://leetcode.com/problems/range-sum-query-immutable/solutions/2698174/)

---

# Intuition
have a way to cache query, since the question says the query function would have a lot of hits


# Approach
Create pre-calculated sums (prefix-sum) and use that to derive sums for each query

# Complexity
- Time complexity:
$$O(n)$$ for creation 
$$O(1)$$ for query 
 
- Space complexity:
$$O(n)$$

# Code
```
class NumArray {
    private nums : number[];
    private prefixSum: number[];
    constructor(nums: number[]) {
        this.nums = nums;
        this.prefixSum = [0]
        // num --> [-2,0,3,-5,2,-1]
        // prefixSum --> [0,-2,-2,1,-4,-2,-3]
        for(let i = 0; i < nums.length;i++){
            this.prefixSum[i+1] = this.prefixSum[i] + this.nums[i]
        }
    }

    sumRange(left: number, right: number): number {
        return  this.prefixSum[right+1] -  this.prefixSum[left]
    }
}

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
```