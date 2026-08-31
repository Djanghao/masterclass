# O(N^2) with Prefix Sum + HashMap

**Author:** agp12
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-good-subarray-sum/solutions/4679920/](https://leetcode.com/problems/maximum-good-subarray-sum/solutions/4679920/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
First we need to calculate the prefixSum (O(N)), this is to easily calculate the rangeSum (subArray sum) quickly in O(1).

Then with the help of hashmap, for each `num[i]` in the `nums`, we can track all `x` index that has `abs(nums[i], nums[x]) == k`, by appending the `i` into `hashmap[nums[i]+k]`.

Later on we need to iterate the `nums` once more and for each `nums[i]`, we can check the `hashmap[nums[i]]` to see all the index that satisfied the condition (please also check that the `index >= i`). We can then calculate the range sum and store the maximum sum found.

# Complexity
- Time complexity: O(N)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(N)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
func maximumSubarraySum(nums []int, k int) int64 {
    n := len(nums)
    prefixSum:= make([]int64, n+1)
    for i:=0;i<n;i++{
        prefixSum[i+1] = prefixSum[i] + int64(nums[i])
    }

    track := make(map[int][]int)
    for i:=0;i<n;i++{
        num := nums[i]
        track[num+k] = append(track[num+k], i) 
        track[num-k] = append(track[num-k], i)
    }

    rangeSum := func(start, end int) int64 {
        return prefixSum[end+1] - prefixSum[start]
    }

    res := int64(0)
    found := false
    for i:=0;i<n;i++{
        candidates := track[nums[i]]

        for _, cand := range candidates {
            if cand >= i {
                // fmt.Println(i, cand)
                if !found {
                    res = rangeSum(i, cand)
                }else{
                    res = max(res, rangeSum(i, cand))
                }
                found = true
            }
        }
    }

    return res
}

func abs(a int) int {
    if a < 0 {
        return -a
    }
    return a
}
```