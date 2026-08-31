# Golang (easy + fast)

**Author:** convitnho
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-sum-of-two-non-overlapping-subarrays/solutions/5229713/](https://leetcode.com/problems/maximum-sum-of-two-non-overlapping-subarrays/solutions/5229713/)

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
func maxSumTwoNoOverlap(nums []int, firstLen int, secondLen int) int {
    total := 0
    start := 0
    result := 0
    for index := 0; index < len(nums); index++ { 
        total += nums[index]
        if index - start + 1 > firstLen {
            total -= nums[start]
            start++
        } 

        f1 := count(nums, 0, start, secondLen)
        f2 := count(nums, index + 1 , len(nums), secondLen)

        t := 0 
        if f1 > f2 {
            t = f1 + total
        } else {
            t = f2 + total 
        }

       //  t := count(nums, 0, start, secondLen) + total + count(nums, index, len(nums), secondLen)
        if t > result {
            result = t 
        }
    }
    return result
}

func count(nums []int, start int, end int, l int) int {
    sum := 0 
    run := start
    result := 0
    for index := start; index < end; index++ {
        sum += nums[index]
        if index - run + 1 > l {
            sum -= nums[run]
            run++
        } 

        if sum > result {
            result = sum
        }
    }
    return result 
}
```