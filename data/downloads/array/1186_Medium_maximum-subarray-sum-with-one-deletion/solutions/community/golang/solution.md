# O(n) time, O(1) space

**Author:** mixaw
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-subarray-sum-with-one-deletion/solutions/4662518/](https://leetcode.com/problems/maximum-subarray-sum-with-one-deletion/solutions/4662518/)

---

# Approach
Modification of Kadane algorithm for maximum subarray problem covering case of optionally removed element.

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(1)$$

# Code
```
func maximumSum(arr []int) int {
    // in order to satisfy condition of non-empty subarray
    // assign initial values from the first array element
    maxSum := arr[0]

    // max sum so far for all array elements
    sumAll := arr[0]

    // max sum so far for array elements except the current one
    sumExceptEl := arr[0]
   

    // for remaining array elements
    for i:=1;i<len(arr);i++ { 
        v := arr[i]
        // keep prev sum
        prevSum := sumAll

        // find maximum value for array elements till 'i'
        sumAll = max(sumAll+v,v)

        // find maximum value for array elements without the current
        // (in case v subtracts larger value than current sumExceptEl prev sum will be used)
        sumExceptEl = max(prevSum, sumExceptEl+v)

        // choose maximum
        maxForIndex := max(sumAll,sumExceptEl)
        maxSum = max(maxSum,maxForIndex) 
    }

    return maxSum 
}

// max is a helper function to simplify main loop
func max(a,b int)int {
    if a > b {
        return a
    }
    return b
}
```