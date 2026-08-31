# DP Hash Table | Python / JS Solution

**Author:** TFDLeeter
**Votes:** 8
**Link:** [https://leetcode.com/problems/tallest-billboard/solutions/3675294/](https://leetcode.com/problems/tallest-billboard/solutions/3675294/)

---

Hello **Tenno Leetcoders**,
 
For this problem, we are installing a billboard and want it to have the largest height. The billboard will have two steel supports, one on each side. Each steel support must be an equal height.

We want to return the largest possible height of your billboard installation. If you cannot support the billboard, return 0.

### Explanation

The problem wants us to find the largest possible height for a billboard installation with two steel supports, given a collection of rods that can be welded together. Our goal is to maximize the height of the billboard while ensuring that the two steel supports are of equal height. 

Since we want to find the largest possible height of the billboard installation `dynamic programming` approach.

Using a dictionary for this problem allows us to efficiently store and retrieve the maximum height for different sums of rod lengths.

Since the key factor of this problem is the sum of the rod lengths. We are interested in finding the maximum height achievable for each possible sum. By using a dictionary, we can store the maximum heights with the sums as keys, allowing us to quickly access and update the values associated with each sum. 

1) Initialize a dp table of a dictionary to store the maximum possible heights for difference sum of rod lengths. The key will represent the sum, and the value will represent the maximum height

2) Iterate through rods and for each element, we have two choices to make:

    - Add the left support 
    
    - Add the right support

3) For the choices that we make, it will results in creating two possibilities: 

      - Either the elements we have chosen will contribute to the height equally on both sides
    
      - Or it will contribute more to one side than the other

4) For each possibility, we either have the same contribution of height on both sides or one side contributes more than the other side.

- If both sides contributes to the same height, our recurrence relation will be, `dp[height + rod] = max(dp.get(height + rod, 0), curr_dp[height])`
    
- For our recurrence relation when both sides have equal height, the height on both sides increases by the length of the current element. As we update our dp table, we have two cases to consider.
    
    - `dp.get(height + rod, 0)` retrieves the current maximum height for the sum `height + rod` in our dictionary. If sum is not yet present, return a default value of `0`
        
    - `curr_dp[height]` represent the maximum height achieved without considering the current element. 
       
    - Thus, for  `dp[height + rod] = max(dp.get(height + rod, 0), curr_dp[height])` we take the maximum height between the existing maximum height for the sum `height + rod` and the maximum height achieved without the current element
        
- If one side contributes more than the other side, our recurrence relation will be `dp[abs(height - rod)] = max(dp.get(abs(height - rod), 0), curr_dp[height] + min(height, rod))`
        
- For our recurrence relation when one side contributes more than the other side, we update the dp table for the absolute difference between the height on both sides `abs(height - rod)`. As we update our dp table, we have two cases to consider:
      
    - `dp.get(abs(height - rod), 0)` retrieves the current maximum height for the sum `abs(height-rod)`  in our dictionary. If sum is not yet present, return a default value of `0`
      
    - `curr_dp[height] + min(height, rod)` represents the maximum height achieved by adding the current element to the side that is shorter. 
      
    - Thus, for `dp[abs(height - rod)] = max(dp.get(abs(height - rod), 0), curr_dp[height] + min(height, rod))`, we take the maximum between the existing maximum height for the sum `abs(height - rod)` and the height achieved by the current element
      

# Code

**Python**
```
    def tallestBillboard(self, rods: List[int]) -> int:
        dp = {0: 0}  

        for rod in rods:
            # Create a shallow copy of current dp table
            # to avoid modifying it while iterating over it
            curr_dp = dp.copy()

            for height in curr_dp:
                dp[height + rod] = max(dp.get(height + rod, 0), curr_dp[height])
            
                dp[abs(height - rod)] = max(dp.get(abs(height - rod), 0), curr_dp[height] + min(height, rod))

        return dp.get(0, 0)  
```

**JavaScript**
```
/**
 * @param {number[]} rods
 * @return {number}
 */
var tallestBillboard = function(rods) {
    let dp = {0:0}

    for(let rod of rods){
        let currentDP = {...dp}
        for(let height in currentDP){
            height = parseInt(height)
            dp[height + rod] = Math.max(dp[height + rod] || 0, currentDP[height])
            dp[Math.abs(height-rod)] = Math.max(dp[Math.abs(height-rod)] || 0, currentDP[height] + Math.min(height,rod))
        }
    }
    return dp[0] || 0
};
```
### Time Complexity: O(number of rod * sum of rods length )
### Space Complexity: O(sum of rods length)

 
***Warframe's Darvo wants you to upvote this post  \uD83D\uDE4F\uD83C\uDFFB \u2764\uFE0F\u200D\uD83D\uDD25***

![image](./images/0.gif)