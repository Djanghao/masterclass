# [Golang] O(n) with explanation

**Author:** cwc123
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-moves-to-make-array-complementary/solutions/954321/](https://leetcode.com/problems/minimum-moves-to-make-array-complementary/solutions/954321/)

---

Since `1 <= every number <= limit`, there are some nature boundaries:
- For pair sum there's a boundary: 2 ~ 2*limit.
- For every valid sum, at most 2 moves.

If limit = 5, pair numbers are [3, 4], because every number >= 1, pair sum can only
 greater than itself.
 
For number 3, possible sums are:
 0 1 2 3 4 5 6 7 8
         <------->
         
Because `1 <= every number <= limit`, so sum can range from 3+1 ~ 3+5
         
For number 4, possible sums are:
 0 1 2 3 4 5 6 7 8 9
         <--------->
         
Combine above observations, moves can be found as follows:
 - no change: sum = 3+4 = 7
 - 1 change: sum ranges 3+1 ~ 6, 8 ~ 4+5 = 4~6, 8~9
 - 2 moves: 2, 10
 
For general case, every pair sum [m, n] has following conditions:
- no change: m+n
- 1 change: min(m, n)+1 ~ m+n-1, m+n+1 ~ max(m, n)+limit
- 2 moves: 2 ~ min(m, n), max(m, n)+limit+2 ~ 2*limit

The algorithm is straight forward, create a dp array from 0 ~ 2*limit+1, dp[i] means
 moves to make pair of sum equal to i

As above observations, time complexity of this algorithm is O(n * limit), n is size of
 array
 
 ```golang
func minMoves(nums []int, limit int) int {
    size := len(nums)
    
    // dp[i]: needed moves for pair of sum to i
    dp := make([]int, limit*2+1)
    
    var j, m, n int
    for i := 0; i < size>>1; i++ {
        if nums[i] >= nums[size-1-i] {
            m, n = nums[i], nums[size-1-i]
        } else {
            m, n = nums[size-1-i], nums[i]
        }
        
        sum := m+n
        
        // [2, 2], 2: 2, 3: 1, 4: 0
        // need to start from sum, because don't know n+1 is 1 or 2 moves
        for j = sum-1; j >= n+1; j-- {
            dp[j] += 1
        }
        
        for ; j >= 2; j-- {
            dp[j] += 2
        }
        
        for j = sum+1; j <= m+limit; j++ {
            dp[j] += 1
        }
        
        for ; j < len(dp); j++ {
            dp[j] += 2
        }
    }
    
    minChange := math.MaxInt32
    
    for i := 2; i < len(dp); i++ {
        if dp[i] < minChange {
            minChange = dp[i]
        }
    }
    
    return minChange
}
```

This algorithm gets TLE, next step is to optimize it.

Main loop tries to calculate moves for the specific pair of sum, so it gets a lot of
 addition.
 
- iteration 1
    dp = [0, 0, 2, 1, 0, 1, 2, 2]
    
- iteration 2
    dp = [0, 0, 4, 2, 1, 3, 4, 4]
    
For every iteration, dp[i] could only be same as before or larger. Instead of counting
 precisely needed moves for the specific sum, it could also be done by storing
  increment value.
  
Take pair of numbers [3, 4] as an example:
original dp = [0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 2] meaning

sum = 4, moves = 1
sum = 5, moves = 1
sum = 6, moves = 1
sum = 7, moves = 0
sum = 8, moves = 1
sum = 9, moves = 1
sum = 10, moves = 2
            
Instead of storing exactly moves, storing increment value forms new dp as follows:
[0, 0, 0, 0, 1, 0, 0, -1, 1, 0, 1] meaning

sum = 4, count = 0 + 1 = 1
sum = 5, count = 1 + 0 = 1
sum = 6, count = 1 + 0 = 1
sum = 7, count = 1 - 1 = 0
sum = 8, count = 0 + 1 = 1
sum = 9, count = 1 + 0 = 1
sum = 10, count = 1 + 1 = 2

With this technique, computation can be further reduced, time complexity is O(n)

```golang
func minMoves(nums []int, limit int) int {
    size := len(nums)
    
    // dp[i]: needed moves for pair of sum to i
    dp := make([]int, limit*2+2)
    
    var m, n int
    for i := 0; i < size>>1; i++ {
        if nums[i] >= nums[size-1-i] {
            m, n = nums[i], nums[size-1-i]
        } else {
            m, n = nums[size-1-i], nums[i]
        }
        
        sum := m+n
        
        dp[2] += 2
        dp[n+1]--
        dp[sum]--
        dp[sum+1]++    // sum could be 2*limit, dp size should be increased
        dp[m+limit+1]++
    }
    
    minChange := math.MaxInt32
    var count int
    
    for i := 2; i <= limit*2; i++ {
        count += dp[i]
        if count < minChange {
            minChange = count
        }
    }
    
    return minChange
}
```