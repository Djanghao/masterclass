# JavaScript Solution || Dynamic Programming

**Author:** astiksarathe
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-cost-to-split-an-array/solutions/3084075/](https://leetcode.com/problems/minimum-cost-to-split-an-array/solutions/3084075/)

---

# Code
```
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minCost = function (nums, k) {

        const len = nums.length
        const dp = new Array(len + 1).fill(-1)

        return partition(-1, nums, k, len, dp)
};

const partition = (ind, nums, k, len, dp) => {

        if (len - 1 === ind) return 0

        if (dp[ind] !== -1 && ind !== -1) return dp[ind]
        

        const hashTable = new Map()
        let min = Number.MAX_SAFE_INTEGER, importanceVal = 0
        for (let i = ind + 1; i < len; i++) {
                const updatedVal = (hashTable.get(nums[i]) || 0) + 1
                hashTable.set(nums[i], updatedVal)
            
                if(updatedVal === 2) importanceVal += updatedVal
                if(updatedVal > 2) importanceVal++
            
                const val = k + importanceVal + partition(i, nums, k, len, dp)
                min = Math.min(min, val)
        }
        
        return dp[ind] = min
}




```