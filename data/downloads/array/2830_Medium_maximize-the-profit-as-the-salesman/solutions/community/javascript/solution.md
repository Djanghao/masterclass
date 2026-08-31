# ✅ 100% Correct Solution  Using JS Dynamic Programming

**Author:** ilmasalsabil
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximize-the-profit-as-the-salesman/solutions/3938391/](https://leetcode.com/problems/maximize-the-profit-as-the-salesman/solutions/3938391/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->
Initialization: Initialize an array dp of size n (5 in this case) to store the maximum amount of gold we can earn at each house.

dp = [0, 0, 0, 0, 0]

Sorting Offers: Sort the offers array based on the endi value in ascending order:

offers = [[0, 0, 1], [0, 2, 10], [1, 3, 2]]

Iterating Through Houses:

Start iterating through each house (0 to n-1):

For i = 0:

Since no offers end at house 0, we directly update dp[0] to the maximum of its previous value (0) and the value from previous house (0), which is 0.
dp = [0, 0, 0, 0, 0]
For i = 1:

Since no offers end at house 1, we directly update dp[1] to the maximum of its previous value (0) and the value from previous house (0), which is 0.
dp = [0, 0, 0, 0, 0]
For i = 2:

Offer [0, 2, 10] ends at house 2. We can sell this offer and update dp[2] to the maximum of:
Gold from this offer (10) + dp[0] (no earlier house)
Value from the previous house (0)
dp = [0, 0, 10, 0, 0]
For i = 3:

Offer [1, 3, 2] ends at house 3. We can sell this offer and update dp[3] to the maximum of:
Gold from this offer (2) + dp[1]
Value from the previous house (10)
dp = [0, 0, 10, 12, 0]
For i = 4:

Since no offers end at house 4, we directly update dp[4] to the maximum of its previous value (12) and the value from the previous house (10), which is 12.
dp = [0, 0, 10, 12, 12]
Final Result:
The maximum amount of gold that can be earned is given by the last element of the dp array, which is 12.

Output:
The output for the given example is 12, which represents the maximum amount of gold that can be earned by strategically selling houses to buyers.
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n + klogk)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(n)
# Code
```
/**
 * @param {number} n
 * @param {number[][]} offers
 * @return {number}
 */
var maximizeTheProfit = function(n, offers) {
    const dp = new Array(n).fill(0);
    offers.sort((a,b)=> a[1] - b[1])

    let offerIndex = 0;

    for(let i = 0; i < n;  i++){
        if(offerIndex < offers.length && offers[offerIndex][1] === i){
            while(offerIndex < offers.length && offers[offerIndex][1] === i){

                const [start, end, gold] = offers[offerIndex];
                dp[i] = Math.max(dp[i], gold + (start > 0 ? dp[start - 1] : 0))
                offerIndex++;
            }
        }

        dp[i] = Math.max(dp[i], ( i > 0 ? dp[i - 1] : 0))
    }

    return dp[n-1]
}   








```