# Golang solution 100%, 100% with explanation

**Author:** nathannaveen
**Votes:** 0
**Link:** [https://leetcode.com/problems/divide-array-into-increasing-sequences/solutions/1121424/](https://leetcode.com/problems/divide-array-into-increasing-sequences/solutions/1121424/)

---

[1121. Divide Array Into Increasing Sequences](https://leetcode.com/problems/divide-array-into-increasing-sequences/)

**What the Problem is Asking Us To Do:**

The problem statement is:

> Given a non-decreasing array of positive integers nums and an integer K, find out if this array can be divided into one or more disjoint increasing subsequences of length at least K.

What this is saying is:

* We are first given a sorted array of positive integers called `nums` and an integer `K` for our input.
* We have to determine whether `nums` can be split into disjoint *(disjoint means not together because the prefix dis is not and joint means together. Thus, the definition of disjoint is not together)* sequences of at least `K`'th length.

You might be confused by the example which the problem gives on Leetcode:

```
Input: nums = [1,2,2,3,3,4,4], K = 3
Output: true
Explanation: 
The array can be divided into the two subsequences [1,2,3,4] and [2,3,4]
```

This is kind of misdirecting if you don't read the problem statement because you usually think that the arrays you have made have to be consecutive. `[1, 2, 3, 4]` and `[2, 3, 4]` are both consecutive.

**The idea of this solution:**

The idea of this solution is to find the max frequency of a certain number and then check whether `maxFrequency * K <= len(nums)`. This works because the max frequency is the minimum number of disjoint sequences, and `K` is the minimum number of items per sequence. Even if the number of sequences is greater than the max frequency and there are more than `K` items per sequence, it will still work.

We find the max frequency, which in this solution is called `maximum` by looping through `nums`, and if the next number is greater than the current number, we know that the frequency of the current number is the max frequency of this number so we can make `maximum = math.Max(float64(counter), maximum)`. Otherwise, we know that the next number is equal to the current number because `nums` is sorted. So we can add one to the current frequency counter called `counter`.

``` go
func canDivideIntoSubsequences(nums []int, K int) bool {
    counter, maximum := 0, float64(0)
    for i := 0; i < len(nums) - 1; i++ {
        if nums[i + 1] > nums[i] {
            maximum = math.Max(float64(counter), maximum)
            counter = 1
        } else {
            counter++
        }
    }
    maximum = math.Max(float64(counter), maximum)
    return len(nums) >= K * int(maximum)
}
```

**Edit to make space better:** *(Added a function called `max` to calculate the maximum of two values instead of using `math.Max()` and converting `counter` to `float64` and then converting `maximum` to `int`)*

``` go
func canDivideIntoSubsequences(nums []int, K int) bool {
    counter, maximum := 0, 0
    for i := 0; i < len(nums) - 1; i++ {
        if nums[i + 1] > nums[i] {
            maximum = max(maximum, counter)
            counter = 1
        } else {
            counter++
        }
    }
    maximum = max(maximum, counter)
    return len(nums) >= K * maximum
}

func max(a, b int) int {
    if a > b {
        return a
    }
    return b
}
```