# pre sum

**Author:** punyreborn
**Votes:** 0
**Link:** [https://leetcode.com/problems/sum-of-distances/solutions/4264101/](https://leetcode.com/problems/sum-of-distances/solutions/4264101/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(n)$$
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(n)$$
# Code
```
func distance(nums []int) []int64 {
    set := make(map[int]int)
    count := make(map[int]int)
    l := make([]int64,len(nums))
    for i:=0;i<len(nums);i++ {
        v := set[nums[i]]
        l[i] = int64(i-v)*int64(count[nums[i]]) + l[v]
        set[nums[i]]=i
        count[nums[i]]++
    }

    

    r := make([]int64,len(nums))
    set = make(map[int]int)
    count = make(map[int]int)
    for i:=len(nums)-1;i>=0;i-- {
        v := set[nums[i]]
        r[i] = int64(v-i)*int64(count[nums[i]]) + r[v]
        set[nums[i]]=i
        count[nums[i]]++
    }

 


    ans := make([]int64,len(nums))
    
    for i:=0;i<len(nums);i++ {
        ans[i] = l[i]+r[i]
    }
return ans

}
```