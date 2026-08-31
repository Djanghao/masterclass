# Finding the  maximum in minimum using binary search on answers--100% time

**Author:** eshu0007
**Votes:** 2
**Link:** [https://leetcode.com/problems/swim-in-rising-water/solutions/4119399/](https://leetcode.com/problems/swim-in-rising-water/solutions/4119399/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. --> Highest value of t will always be the max value in the grid and similarly the lowest value will be the lowest in the grid..
After finding the mid value we check if with that value (t) can we traverse the grid from 0,0 to n-1,n-1 using the helper function or not, if yes then we take it as one of our answers and lower the mid further by decreasing the high.. if No we increase the mid by increasing the low..and check again.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->~O(N^2*LOG(N^2))

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->~O(N^2)

# Code
```
func swimInWater(grid [][]int) int {
    n:=len(grid)
    low,high:=MinMaxVal(grid,n)
    delR:=[4]int{-1,0,1,0}
    delC:=[4]int{0,1,0,-1}
    ans:=math.MaxInt
    //O(LOG m)--Binary search m=(max value - min value) in the grid
    for low<=high{ 
    vis:=make([]int,n*n)
        mid:=(low+high)/2
        if grid[0][0]<=mid && helper(0,0,mid,grid,delR,delC,n,vis){
            if ans>mid{
                ans=mid
            }
            high=mid-1
        }else{

            low=mid+1
        }
    }
    return ans
}
//O(N^2)--VISITING ALL THE CELLS IN THE WORST CASE 
func helper(row,col int,t int, grid [][]int, delR,delC [4]int, n int,vis []int)bool{
    vis[(row*n+col)]=1//using a visited array so that we do not visit same cell again and again
    if row==(n-1) && col==(n-1){//base condition
        return true //if we rreach to the end we return true
    }
    for i:=0;i<4;i++{
        newR:=row+delR[i]
        newC:=col+delC[i]
        if newR>=0 &&newR<n && newC>=0 && newC<n && t>=grid[newR][newC] && vis[newR*n+newC]!=1{
           if !helper(newR,newC,t,grid,delR,delC,n,vis){
               continue //if further down the line we are not able to traverse anymore we backtrack to the starting point and check for another path
           }else{
               return true //if we are able to find the path with the given value of t we return true
           }
        }
    }
    return false
}
//function to find the minimum and maximum value in the grid--O(N^2)
func MinMaxVal(arr [][]int,n int)(int,int){
    mini:=math.MaxInt
    maxi:=math.MinInt
    for i:=0;i<n;i++{
        for j:=0;j<n;j++{
            val:=arr[i][j]
            if val>maxi{
                maxi=val
            }
            if val<mini{
                mini=val
            }
        }

    }
    return mini,maxi
}
```