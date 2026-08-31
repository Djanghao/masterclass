# A Beginner's Guide on DP validation & How to come up with a Recursive solution [Python 3]

**Author:** ryandeng32
**Votes:** 493
**Link:** [https://leetcode.com/problems/min-cost-climbing-stairs/solutions/773865/](https://leetcode.com/problems/min-cost-climbing-stairs/solutions/773865/)

---

### Section 1: DP Validation 
Our first question should be: **Is Dynamic Programming (DP) suitable for this question?**

In its essence, DP is just **doing brute force recursion smartly**, so we should first check if the question can be done **recursively** (whether we can break it down into **smaller subproblems**) 

Then, to check if we can apply DP, we look at 2 distinct properties of DP: 
1. **Overlapping subproblems**: Does finding the solution require us to calculate the same subproblem multiple times? 
2. **Optimal Substructure Property**: Can the optimal solution be constructed from the optimal solutions of its subproblems? (Are the subproblems independent from each other? 

**Thought Process**
We can use recursion to solve the problem because we can break it into smaller subproblems: 
* If we want to know the **min cost to reach stair #n**, It will be tremendously helpful to know the **min cost to reach step #n-1** and **step #n-2** (because we can reach step #n in one step from them)

Now that we know we can use recursion, should we use DP? Let's check if the question contains the two properties that I mentioned above
1. **Overlapping Subproblems**: 
	* minCost(n) will be the short form of min cost to reach stair #n
	* We know that minCost(n) depends on minCost(n-1) and **minCost(n-2)**, then by the same logic minCost(n-1) depends on **minCost(n-2)** and minCost(n-3). 
	* Notice that we have the same expression twice (bolded), this shows that **we have overlapping subproblems!** 

2. **Optimal Substructure Property**
	* let's take cost = [4,2,3] for example, what's minCost(3)?
	* To reach stair #3, we have to start from either stair #1 or #2, since we want to minimize cost so we choose stair #2 (2 < 4) and climb one step to reach #3
	* To reach stair #2, since we can choose to start at #2 (step with index 1), it's already the optimal solution.
	* We see that the optimal solution of one subproblem leads up to the optimal solution of the problem, therefore **this property is present!**

After we have both properties fulfilled, we know that we can tackle this problem using DP with confidence! 

..............................................................
### Section 2: How to come up with a recursive solution? 
The key to solving any DP problem is to **identify a recursive solution**, then we can identify the overlapping subproblems and then apply **memoization (top-down)** or **tabulation (bottom-up)** methods to optimize based of the recursive solution

Below is a strategy we can use to find a recursive solution
1. **Identify what variable is changing between each subproblem**
2. **Create the recursive function based on #1 and clearly defines its meaning**
3. **State transition formula (Find a formula that connects a problem to its subproblems)**
4. **Define the base cases of recursion** 

**Walkthrough**
1. **Changing Variables:** 
	* From the problem, we can see that there are 2 changing variables
	* index of the current stair (stair #n) 
	* minimum cost to reach the current stair 
2. **Create function:** 
	* We can associate the 2 variables together by creating a function minCost(n), where n is the index of the current stair, and minCost(n) represents the min cost to reach stair #n
	* This is the same function that we came up with in section 1 based on pure intuition 
3. **Get State transition formula:** 
	 * Get a formula to connect a problem to its subproblems, we first check what is moving the problem forward. By reading the problem, we see that the key info is that **you can either climb one or two steps.**
	 * Based of this info, we know that minCost(n) has strong relationship to minCost(n-1) and minCost(n-2), because you can reach n from both n-1 and n-2 stairs 
	 * Keep reading the question, we see that we should **pay the cost at each stair** and **get minimum cost**, so the relationship between them becomes clear as shown below
	 * minCost(n) = cost[n] + min(minCost(n-1), minCost(n-2))
4. **Define base cases:**
	* This part is easy, from the problem statement we know we can start from either stair index 0 or index 1
	* So base cases would be the first 2 stairs. minCost(0) = cost[0] and minCost(1) = cost[1] 

With all the above info, it's easy to construct a recursive solution as shown below: 
```
 def minCostClimbingStairs(self, cost: List[int]) -> int:
        # identify what is changing from subproblems to subproblems: 
        # n - step #n    dp(n) - min cost to get to step #n 
        def dp(n):  
            # write down base cases
            if n < 2: 
                return cost[n] 
            # write recursive function based on what you can change (climb one or two steps)
            return cost[n] + min(dp(n-1), dp(n-2))
		
		# since we want to know the min cost to get to the final step, we use the code below 
        length = len(cost) 
        return min(dp(length-1), dp(length-2))
```
..............................................................
### Section 3: Extra
* To see how to use DP techniques (top-down, bottom-up) to make recursion more efficient, check out https://leetcode.com/problems/min-cost-climbing-stairs/discuss/476388/4-ways-or-Step-by-step-from-Recursion-greater-top-down-DP-greater-bottom-up-DP-greater-fine-tuning

* Please leave a comment to let me know any confusion or feedback :)

* This problem took me a while to understand, and I  wish to share the thought process for the first few very important parts 

* Thank you for reading, have a nice day!