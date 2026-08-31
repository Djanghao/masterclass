# Golang simple observation

**Author:** starvingsloth
**Votes:** 3
**Link:** [https://leetcode.com/problems/sum-of-absolute-differences-in-a-sorted-array/solutions/969915/](https://leetcode.com/problems/sum-of-absolute-differences-in-a-sorted-array/solutions/969915/)

---

**Observation**

We know that the array is in a non-decreasing order.
That means that the number at index i will always be equal to or more than the number at index i-1.

We also know that we can rewrite the nature of absolute difference into a simple substraction, ensuring that the bigger number is in front:
```
func absoluteDifference(a, b int) {
	if a > b {
		return a - b
	}
	return b - a
}
```

With these two key information we can split each absolute difference at index i into two parts: the summation of all number **before** index i and **after** index i. Here's an example:

```
Input: nums = [1,2,3,4,5]
Output: [10,7,6,7,10]

// Here's a visualization on how to count result[2] = 6
result[2] = |1-3| + |2-3| + |3-3| + |4-3| + |5-3|

// group into before and after
= (|1-3| + |2-3|) + (|3-3| + |4-3| + |5-3|)

// rewrite the absolute operations
= (3-1 + 3-2) + (3-3 + 4-3 + 5-3)

// group the same number i into one
= (3+3 - 1-2) + (3+4+5 - 3-3-3)
= (3*2 - 1-2) + (3+4+5 - 3*3)
= (3*2 - (1+2)) + ((3+4+5) - 3*3)

// and you can get the logic from generalization
result[i] = (nums[i]*i - sum[i]) + (sum[n]-sum[i] - nums[i]*(n-i))

// where sum[i] means sum of values up to index i-1
```


Full code:
```
func getSumAbsoluteDifferences(nums []int) []int {
    n := len(nums)
    
    total := 0
    sum := make([]int, n)
    
    for i := 0; i < n; i++ {
        total += nums[i]
        sum[i] = total
    }
    
    arr := make([]int, n)
    for i := 0; i < n; i++ {       
        before := (nums[i] * (i+1)) - (sum[i])
        after := (total - sum[i]) - (nums[i] * (n-1-i))
        arr[i] = before + after
    }
    
    return arr
}
```