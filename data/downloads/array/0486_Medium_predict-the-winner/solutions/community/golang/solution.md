# Golang : recursive - closure / Memory beats 96%

**Author:** ramyadmz
**Votes:** 1
**Link:** [https://leetcode.com/problems/predict-the-winner/solutions/4045499/](https://leetcode.com/problems/predict-the-winner/solutions/4045499/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: o(n^2)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
func predictTheWinner(nums []int) bool {
  var helper func(int,int)int
  helper = func(start,end int)int{
    if start==end{
     return nums[start]
    }
    return max(nums[start]-helper(start+1,end),nums[end]-helper(start,end-1))
  }
  return helper(0,len(nums)-1)>=0
}

func max(a,b int)int{
  if a>b {return a}; return b
}

```