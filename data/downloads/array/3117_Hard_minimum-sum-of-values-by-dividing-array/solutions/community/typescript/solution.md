# [Typescript] Memoization with inline explanations

**Author:** yfyau
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-sum-of-values-by-dividing-array/solutions/5023871/](https://leetcode.com/problems/minimum-sum-of-values-by-dividing-array/solutions/5023871/)

---

# Complexity
- Time complexity: $$O(n * m * b)$$ 
    ```text
    b = max bit length of nums[number]
    b = log2(10^5)
    b = 16
    ```

- Space complexity: $$O(n * m * b)$$

# Code
```
function minimumValueSum(nums: number[], andValues: number[]): number {
    const n = nums.length;
    const m = andValues.length;

    const memo = {};
    const recursion = (numIdx: number, aIdx: number, value: number) => {
        if (numIdx >= n && aIdx >= m) return 0;
        if (numIdx >= n || aIdx >= m) return Infinity;
        
        const memoKey = `${numIdx}:${aIdx}:${value}`;
        if (memo[memoKey]) return memo[memoKey];

        const newValue = value & nums[numIdx];

        if (newValue < andValues[aIdx]) {
            // Never reach target mask with AND operator
            return memo[memoKey] = Infinity;;
        }

        if (newValue > andValues[aIdx]) {
            // Pick current number is the only option
            return memo[memoKey] = recursion(numIdx + 1, aIdx, newValue);
        } 
        
        if (newValue === andValues[aIdx]) {
            // Whether pick or not pick, 
            //  not pick may result in a smaller sum or a failed solution
            const pick = nums[numIdx] + recursion(numIdx + 1, aIdx + 1, nums[numIdx + 1]);
            const notPick = recursion(numIdx + 1, aIdx, newValue);
            
            return memo[memoKey] = Math.min(pick, notPick);
        }
    }
    
    // You use replace `nums[0]` with `(1 << 17) - 1` here
    //  which equal to the `b` in time complexity
    const sum = recursion(0, 0, nums[0]);
    
    return sum !== Infinity ? sum : -1;
};
```