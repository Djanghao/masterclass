# [Golang] Sort vs Dictionary

**Author:** vasakris
**Votes:** 7
**Link:** [https://leetcode.com/problems/max-number-of-k-sum-pairs/solutions/3545683/](https://leetcode.com/problems/max-number-of-k-sum-pairs/solutions/3545683/)

---

# Complexity
- Time complexity:
Solution1 -> O(NlogN)
Solution2 -> O(N)

- Space complexity:
Solution1 -> O(1)
Solution2 -> O(N)

# Code
```

/* Solution1 */
func maxOperations(nums []int, k int) int {
    sort.Ints(nums)
    left, right := 0, len(nums)-1

    count := 0
    for left < right {
        sum := nums[left] + nums[right]
        if sum == k {
            count++
            left++
            right--
        } else if sum < k {
            left++
        } else {
            right--
        }
    }

    return count
}

/* Solution2 */
func maxOperations(nums []int, k int) int {
    dict := make(map[int]int)

    count := 0
    for _, num := range nums {
        target := k - num
        if value, ok := dict[target]; ok {
            count++
            if value > 1 {
                dict[target]--
            } else {
                delete(dict, target)
            }
        } else {
            dict[num]++
        }
    }

    return count
}
```