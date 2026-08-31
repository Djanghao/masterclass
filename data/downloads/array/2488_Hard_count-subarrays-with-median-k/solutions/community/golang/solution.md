# Count Subarrays With Median K

**Author:** Naeem_ABD
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-subarrays-with-median-k/solutions/6138007/](https://leetcode.com/problems/count-subarrays-with-median-k/solutions/6138007/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->
# Keypoint
All numbers are distinct. So there is only one k in nums
balanced: if an array is balanced(count(moreK) - count(lessK) == 0 or 1) and contains k, it is a valid subarray.
split array with k. If left side and right side combined are balanced, the array has median k
3.1 First calculate balance of right side, record balance-count in a hashtable. Then calculate balance of left side, find count of balanced right side and add it to the result.
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```golang []
func countSubarrays(nums []int, k int) int {
    n := len(nums)
    cnt := map[int]int{}
    p := -1
    for i, num := range nums {
        if num == k {
            p = i
            break
        }
    }
    bal := 0
    for i := p; i < n; i++ {
        if nums[i] == k {
            bal += 0
        } else if nums[i] < k {
            bal -= 1
        } else {
            bal += 1
        }
        if _, ok := cnt[bal]; !ok {
            cnt[bal] = 1
        } else {
            cnt[bal]++
        }
    }
    res := 0
    bal = 0
    for i := p; i >= 0; i-- {
        if nums[i] == k {
            bal += 0
        } else if nums[i] < k {
            bal -= 1
        } else {
            bal += 1
        }
        res += cnt[-bal] + cnt[-bal+1]
    }
    return res
}
```