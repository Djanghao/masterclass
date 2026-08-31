# Go simple solution using O(1) using map

**Author:** Sheelendar
**Votes:** 1
**Link:** [https://leetcode.com/problems/random-pick-index/solutions/4455762/](https://leetcode.com/problems/random-pick-index/solutions/4455762/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(1)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
type Solution struct {
    dp map[int][]int
}


func Constructor(nums []int) Solution {
    dp:=make(map[int][]int)
    n:=len(nums)
    for i:=0; i<n; i++{
        dp[nums[i]]=append(dp[nums[i]],i)
    }
    return Solution{dp:dp}
}


func (this *Solution) Pick(target int) int {
    arr:=this.dp[target]
    n:=len(arr)
    num:=rand.Intn(n)
    return arr[num]
}


/**
 * Your Solution object will be instantiated and called as such:
 * obj := Constructor(nums);
 * param_1 := obj.Pick(target);
 */
```