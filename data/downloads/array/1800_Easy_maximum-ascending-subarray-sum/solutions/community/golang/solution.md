# Golang O(n) solution faster than 100% with walk through

**Author:** nathannaveen
**Votes:** 3
**Link:** [https://leetcode.com/problems/maximum-ascending-subarray-sum/solutions/1159788/](https://leetcode.com/problems/maximum-ascending-subarray-sum/solutions/1159788/)

---

[1800. Maximum Ascending Subarray Sum](https://leetcode.com/problems/maximum-ascending-subarray-sum/)

The idea of this solution is pretty simple:

* We need two variables, `sum` for the current sum of ascending values and `maximum` for the maximum sum.
* Then we loop through `nums`.
* Inside the loop, we check whether the current number is greater than the previous number. If so, we can add the number to `sum`.
* Else the number is smaller than or equal to the previous number, we can make `maximum` equal to the `math.Max(maximum, sum)` and reset sum to the current number.
* After we have looped through `nums` we can make `maximum` equal to `math.Max(maximum, sum)` again.
* Now we can return `maximum.`

**The Code:**

``` go
func maxAscendingSum(nums []int) int {
    maximum := nums[0]
    sum := nums[0]

    for i := 1; i < len(nums); i++ {
        if nums[i] > nums[i-1] {
            sum += nums[i]
        } else {
            maximum, sum = 
            int(math.Max(float64(maximum), float64(sum))), nums[i]
        }
    }
    maximum = int(math.Max(float64(maximum), float64(sum)))
    return maximum
}
```

**Same Solution Without `math.Max()`**

``` go
func maxAscendingSum(nums []int) int {
    maximum := nums[0]
    sum := nums[0]

    for i := 1; i < len(nums); i++ {
        if nums[i] > nums[i-1] {
            sum += nums[i]
        } else {
            maximum, sum = max(maximum, sum), nums[i]
        }
    }
    maximum = max(maximum, sum)
    return maximum
}

func max(a, b int) int {
    if a > b {
        return a
    }
    return b
}
```