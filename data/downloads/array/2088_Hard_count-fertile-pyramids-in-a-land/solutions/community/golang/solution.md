# Go/Golang Stacked Pyramids with Inverse 100% (Runtime: 88 ms,   Memory Usage: 7.6 MB )

**Author:** camusabsurdo
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-fertile-pyramids-in-a-land/solutions/1607462/](https://leetcode.com/problems/count-fertile-pyramids-in-a-land/solutions/1607462/)

---

```
func countPyramids(grid [][]int) int {
    res:=count(grid)
    for i,j:=0,len(grid)-1;i<j;i,j=i+1,j-1{
        grid[i],grid[j]=grid[j],grid[i]
    }
    res+=count(grid)
    return res
}

func count(grid [][]int) int{
    n,m,res:=len(grid),len(grid[0]),0
    for i:=1;i<n;i++{
        for j:=1;j<m-1;j++{
            if grid[i][j]>0 && grid[i-1][j]>0{
                grid[i][j]=min(grid[i-1][j-1], grid[i-1][j+1])+1
                res+=grid[i][j]-1
            }
        }
    }
    for i:=1;i<n;i++{
        for j:=1;j<m-1;j++{
            if grid[i][j]>0{
                grid[i][j]=1
            }
        }
    }
    return res
}

func min(a,b int)int{
    if a<b{
        return a
    }
    return b
}