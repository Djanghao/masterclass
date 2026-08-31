# Go lang solution beats 50%

**Author:** divya_mamidi
**Votes:** 0
**Link:** [https://leetcode.com/problems/get-biggest-three-rhombus-sums-in-a-grid/solutions/4400434/](https://leetcode.com/problems/get-biggest-three-rhombus-sums-in-a-grid/solutions/4400434/)

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
func getBiggestThree(grid [][]int) []int {
    m := len(grid)
    n := len(grid[0])
    v1 := 0
    v2 := 0
    v3 := 0
    for i:=0;i<m;i++ {
        for j:=0;j<n;j++ {
            i1 := i-1
            j1 := j-1
            // fmt.Printf("%d %d %d\
",i,j,grid[i][j])
            v := -1
            for ;i1 >= 0 && j1 >= 0 && v!=0; {
                v = findRhombusPerimeter(grid,i,j,i1,j1)
                i1--
                j1--
                if v > v1 {
                    v3 = v2
                    v2 = v1
                    v1 = v
                } else if v > v2 && v!=v1 {
                    v3 = v2
                    v2 = v
                } else if v > v3 && v!=v2 && v != v1{
                    v3 = v
                }
                // fmt.Printf("val:%d \
",v)
            }
           // fmt.Println()
            v = grid[i][j]
            if v > v1 {
                    v3 = v2
                    v2 = v1
                    v1 = v
                } else if v > v2 && v!=v1 {
                    v3 = v2
                    v2 = v
                } else if v > v3 && v!=v2 && v!=v1 {
                    v3 = v
                }
        }
    }
    ans := make([]int,0)
    if v1 != 0 {
        ans = append(ans,v1)
    }
    if v2 != 0 {
        ans = append(ans,v2)
    }
    if v3 != 0 {
        ans = append(ans,v3)
    }
    fmt.Printf("%d %d %d",v1,v2,v3)
    return ans
}

func findRhombusPerimeter(grid [][]int,i,j,i1,j1 int) int{
    i2 := i
    j2 := j - 2*(j-j1)
    i3 := i1 + 2*(i-i1)
    j3 := j1
    p := 0
    if i3 < len(grid) && j2 >= 0 {
        // fmt.Printf("i1:%d j1:%d\
",i1,j1)
        // fmt.Printf("i2:%d j2:%d\
",i2,j2)
        // fmt.Printf("i3:%d j3:%d\
",i3,j3)
        h:=i1
        k:=j1
        for ; h< i && k < j; {
            p += grid[h][k]
            h++
            k++
        }
        h=i
        k=j
        for ; h< i3 && k > j3; {
            p += grid[h][k]
            h++
            k--
        }
        h=i3
        k=j3
        for ; h> i2 && k > j2; {
            p += grid[h][k]
            h--
            k--
        }
        h=i2
        k=j2
        for ; h> i1 && k < j1; {
            p += grid[h][k]
            h--
            k++
        } 
    }
    return p
}
```