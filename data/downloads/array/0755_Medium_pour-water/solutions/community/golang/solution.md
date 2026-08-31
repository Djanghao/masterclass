# faster than 100%

**Author:** abhinvsinh
**Votes:** 0
**Link:** [https://leetcode.com/problems/pour-water/solutions/4600003/](https://leetcode.com/problems/pour-water/solutions/4600003/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
find the lowest reachable point  on the left 
find the lowest reachable point on the right
If neither, then update current pos

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(volume * (n/2+ n/2)) ==> O(V *N) 

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
func pourWater(heights []int, volume int, k int) []int {
    for d:=0;d<volume;d++{
        pos:=k
        for l:=k-1;l>=0;l--{
            if heights[l]>heights[pos]{break}
            if heights[l]<heights[pos]{ // find lowest point reachable on left side 
                pos=l                
            }
        }
        if pos==k{
            for r:=k+1;r<len(heights);r++{
                if heights[r]>heights[pos]{break}
                if heights[r]<heights[pos]{ // find lowest point reachable on right side
                    pos=r
                }
            }
        }
        heights[pos]++
    }
    return heights
}
```