# [Golang]| Dynamic programming | beats 100% of runtime and memory

**Author:** ragnar_by
**Votes:** 2
**Link:** [https://leetcode.com/problems/knight-probability-in-chessboard/solutions/3798781/](https://leetcode.com/problems/knight-probability-in-chessboard/solutions/3798781/)

---

# Intuition
Just for every step and for every cell count probability.

# Approach
We can count probability for every cell after $k$ steps. 
Let $dp[k][i][j]$ is probability for cell $i,j$ after $k$ steps.
Then to count probability for some cell $X$ on step $k+1$ it is enough to sum $\\frac{1}{8}*Prop(\	ext{cell } Y | Y \	ext {can be reached from X})$
or $dp[k][i][j]=sum ( \\frac{1}{8}*dp[k-1][is][js])$ where cell $[is,js]$ can be reached from $[i,j]$ and valid borad cell.
As counting for step $k+1$ is depends only from counting for step $k$ it is enough to keep in memory only two states: previous and current.So instead of $dp[k][i][j]$ enough to have $dp0[i][j]$ and $dp1[i][j]$


# Complexity
- Time complexity:
 $$O(k*n^2)$$ because from every $k$ we should traverse over all board.

- Space complexity:
$$O(n^2)$$ to keep 2 states

# Code
```
func knightProbability(n int, k int, row int, column int) float64 {
    moves:=[][]int{[]int{1,2},[]int{2,1},[]int{-1,2},[]int{2,-1},[]int{1,-2},[]int{-2,1},[]int{-2,-1},[]int{-1,-2}}

    dp0:=make([][]float64,n)
    for i:=0;i<n;i++{
        dp0[i]=make([]float64,n)
        for j:=0;j<n;j++{
            dp0[i][j]=1.0
        }
    }
    var dp1 [][]float64
    for move:=1;move<=k;move++{
        dp1=make([][]float64,n)
        for i:=0;i<n;i++{
            dp1[i]=make([]float64,n)
            for j:=0;j<n;j++{
                for _,s:=range moves{
                    is,js:=i+s[0],j+s[1]
                    if is>=0 && is<n && js>=0 && js<n{
                        dp1[i][j]+=0.125*dp0[is][js]
                    }
                }
            }
        }
        dp0=dp1
    }
    return dp0[row][column]
}
```