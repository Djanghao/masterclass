# stack solution

**Author:** punyreborn
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-people-that-can-be-seen-in-a-grid/solutions/4403620/](https://leetcode.com/problems/number-of-people-that-can-be-seen-in-a-grid/solutions/4403620/)

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
func seePeople(heights [][]int) [][]int {
    m,n:=len(heights),len(heights[0])
    res:= make([][]int,m)
    for i:=0;i<m;i++ {
        ans:= helper(heights[i])
        res[i]=ans
    }

    fmt.Println(res)

    for j:=0;j<n;j++ {
        x:=make([]int,0)
        for i:=0;i<m;i++ {
            x=append(x, heights[i][j])
        }

        ans:= helper(x)
        for i:=0;i<len(ans);i++ {
            res[i][j]+=ans[i]
        }
    }
    return res
}

func helper(nums []int) []int {
    ans := make([]int,len(nums))
    stack := make([]int,0)
    for i:=0;i<len(nums);i++ {
        x:=-1
        for len(stack)>0 && nums[stack[len(stack)-1]]<=nums[i] {
            m := stack[len(stack)-1]
            stack = stack[:len(stack)-1]
            x=m
            ans[m]++
        }
        if len(stack)>0 {
            if x==-1 || (x!=-1 && nums[x]!=nums[i]) {
               ans[stack[len(stack)-1]]++
            }
        }
        stack=append(stack,i)
    }
    return ans
}

```