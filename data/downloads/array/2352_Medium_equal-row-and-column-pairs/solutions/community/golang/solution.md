# Golang| Map solution without using strings conversion | Fast and memory effective

**Author:** ragnar_by
**Votes:** 5
**Link:** [https://leetcode.com/problems/equal-row-and-column-pairs/solutions/3586137/](https://leetcode.com/problems/equal-row-and-column-pairs/solutions/3586137/)

---

# Intuition
To find number of pairs it is enough to count all variants for rows, and then compare it with columns
# Approach
To faster comparison we use golang map. We can not use slice as key, so replace it with array $[200]int$ ( other variant is to convert slice in some string). We add every row in map, and then we run through all columns and look for it in map.

# Complexity
- Time complexity:
$$O(n^2)$$ to build all columns

- Space complexity:
 $$O(n)$$ - we use map with mostly $n$ different keys

# Code
```
func equalPairs(grid [][]int) int {
    n:=len(grid)
    m:=make( map[[200]int]int)
    arr:=[200]int{}
    for i:=0;i<n;i++{
        copy(arr[:],grid[i])
        m[arr]++
    }
    res:=0

    for i:=0;i<n;i++{
        arr = [200]int{}
        for j:=0;j<n;j++{ // copy column to arr
            arr[j]=grid[j][i]
        }
        if v,ok:=m[arr];ok{
            res+=v
        }
    }
    return res
}
```