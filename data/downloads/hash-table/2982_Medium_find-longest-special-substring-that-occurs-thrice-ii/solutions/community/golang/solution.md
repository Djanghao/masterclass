# Easy To Understand Solution in GO

**Author:** hasnain003
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-longest-special-substring-that-occurs-thrice-ii/solutions/4482519/](https://leetcode.com/problems/find-longest-special-substring-that-occurs-thrice-ii/solutions/4482519/)

---

# Approach
<!-- Describe your approach to solving the problem. -->
- track the length of continous occurrence of each character by using map of character to array.
- Iterate over the map and find 3 largest substring length for each character.
- Now Answer track the answer by tracking maximum(Largest - 2, 2ndLargest)
- The maximum size of special substring that will occur 3 times in largest substring would be largest - 2.
- There is a edge case when both largest and 2nd largest is equal in that case if third largest is smaller than 2nd largest then the answer will be 2ndLargest - 1.
# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
func maximumLength(s string) int {
    countMap := make(map[byte][]int)
    n,count := len(s),0
    last := s[0]
    for i := 0; i < n;i++ {
        if last == s[i] {
            count++
        } else {
            if _,ok := countMap[last]; !ok {
                countMap[last] = make([]int,0)
            }
            countMap[last] = append(countMap[last],count)
            count = 1
            last = s[i]
        }
    }
    ans := 0
    countMap[last] = append(countMap[last],count)
    //fmt.Println(countMap)
    for _,values := range countMap {
        l1,l2,l3 := 0,0,0
        for _,val := range values {
            if val > l1 {
                l1,l2,l3 = val,l1,l2
            } else if val > l2 {
                l2,l3 = val,l2
            } else if val > l3 {
                l3 = val
            }
        }
        if l1 == l2 && l3 < l2 {
            l2--
        }
        ans = max(ans,max(l1 - 2,l2))
    }
    if ans == 0 {
        return -1
    }
    return ans
}

func max(a,b int) int {
    if a > b {
        return a
    }
    return b
}
```