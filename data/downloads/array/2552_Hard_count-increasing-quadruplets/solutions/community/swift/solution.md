# Swift Solution with explanation.

**Author:** aayushkumar20
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-increasing-quadruplets/solutions/3113941/](https://leetcode.com/problems/count-increasing-quadruplets/solutions/3113941/)

---

# Explanation
We can use a dp array to store the number of quadruplets that can be formed with the first i elements and the last element is smaller than the second element. Then we can iterate through the array and for each element, we can count the number of elements that are smaller than it and add it to the answer. We can also update the dp array for the next iteration.

# Working
1. Create a dp array of size n, and initialize it to all 0's, like this: var dp = [Int](repeating: 0, count: n)
2. Create a variable called ans and initialize it to 0. This will be the final answer and return value of the function.
3. Create a nested for loop. The outer loop will iterate from 0 to n-1 (j). The inner loop will iterate from 0 to j-1 (i).
4. Create a variable called previousSmaller and initialize it to 0.
5. If the number at index j is greater than the number at index i, then increment previousSmaller by 1 and add dp[i] to ans.
6. If the number at index j is less than the number at index i, then add previousSmaller to dp[i].
7. Return ans.

# Complexity
> Time complexity: O(n^2)
> Space complexity: O(n)

# Code
```
class Solution 
{
    func countQuadruplets(_ nums: [Int]) -> Int 
    {
        var n = nums.count
        var dp = [Int](repeating: 0, count: n)
        var ans = 0
        
        for j in 0..<n 
        {
            var previousSmaller = 0
            
            for i in 0..<j 
            {
                if nums[j] > nums[i] 
                {
                    previousSmaller += 1
                    ans += dp[i]
                } 
                else if nums[j] < nums[i] 
                {
                    dp[i] += previousSmaller
                }
            }
        }
        
        return ans
    }
}
```