# [Java] 20 Lines Bottom-Up DP | Clear Explanation |

**Author:** 000Prime
**Votes:** 25
**Link:** [https://leetcode.com/problems/minimum-cost-to-reach-destination-in-time/solutions/1366641/](https://leetcode.com/problems/minimum-cost-to-reach-destination-in-time/solutions/1366641/)

---

# Explaination:
* Create a 2D matrix  `dp[maxTime+1][n]` and initialise the elements to `infinity`.  
* `dp[t][i] `stores the minimum cost to reach node `i` **at `time = t`** . 
* At `t = 0`, you are at `source = 0`, 
* Since you have to pay fees to be even present at a node, so you start the journey with minimum fees of `fee[source]` . So update the dp as `dp[0][0] = fee[source]`. 
* Now start looping from `currTime = 0` to `currTime = maxTime`. For each `currTime`, loop through every `edge {a,b,timeCost}`. 
* If `dp[currTime][i] == infinity`, then it means that node` i` was not reachable **at** `t = currTime`
* So, while looping through every `edge {a,b,timeCost}`, check if `dp[currTime][a]  == infinity` or `dp[currTime][b]  == infinity` before making any change to dp state.
* Let `fromNode = a` and `toNode = b` (we have to again swap these to handle bidirectional movement )
* If `dp[currTime][fromNode]  != infinity`, then it means at` t = currTime` we have managed to reach `fromNode` so we can traverse to `toNode` at `timeCost`, hence we will reach `toNode` at `reachTime = currTime + timeCost`
* If this `reachTime <= maxTime`, update the cost in `dp`
* After the dp is populated, loop through from `t = 0`  to `t = maxTime` and pick the minCost from `dp[t][n]`


-----
**Request:** Please upvote this post if you found it helpful. This is the only way you can show your gratitude for my work.

------



# Code:
<iframe src="https://leetcode.com/playground/2BNqd9sJ/shared" frameBorder="0" width="1000" height="420"></iframe>
