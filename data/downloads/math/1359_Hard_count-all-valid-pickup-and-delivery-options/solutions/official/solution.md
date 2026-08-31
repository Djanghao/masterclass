# Official Solution

**Link:** [https://leetcode.com/problems/count-all-valid-pickup-and-delivery-options/solution/](https://leetcode.com/problems/count-all-valid-pickup-and-delivery-options/solution/)

---

[TOC]

## Solution

---

### Overview

We have $$N$$ orders, each order consists of a pickup and delivery service.       
We have to count all valid pickup/delivery sequences. A valid sequence means that for all elements, delivery of the $$i^{th}$$ element will occur after picking up the $$i^{th}$$ element.

<img src="../Figures/1359/Slide1.PNG" width="960" alt="some combinations"> <br />

--- 

### Approach 1: Recursion with Memoization (Top-Down DP)

**Intuition**

A trivial way to approach this problem is to recursively explore every valid pickup and delivery option.  
We can do so by iterating over all of the orders, and for each order, if it is not picked up, pick up the order, mark the order as picked up, and make another recursive call. If the order is already picked up but not delivered, then deliver the order and mark it as delivered. After delivering all packages, we return from the recursive call and unmark the deliveries and pickups so that we can use them in another combination. This step of discarding a chosen element and then using that element during later recursive calls is called <b>[backtracking](https://leetcode.com/explore/learn/card/recursion-ii/472/backtracking/2654/)</b>.
Hence, we can solve this problem using a recursive backtracking algorithm.   

This approach is **not optimal** and will result in **Time Limit Exceeded**. Let's try optimizing it further.     

In this backtracking approach, we pick up each order one by one in order to generate all valid combinations. This step of generating all valid combinations is very time-consuming as we must visit every possible combination once. Since the problem asks us "**count** all valid pickup/delivery sequences," let's see if we can count the number of combinations without actually generating them.

If there are $$n$$ unpicked orders, then we have $$n$$ different options for orders that we can pick up at the current step. So instead of picking up each order one by one and making a recursive call for each one, we could count the number of ways to pick $$(n-1)$$ unpicked orders and multiply it by the number of choices at the current step, $$n$$.
Thus, we improved the approach from calling the function $$n$$ times to only calling once.       
Likewise, we can apply the same idea for delivering the orders.

If we pick one order then we need to count ways for the rest remaining orders.    
Now, how to count ways for the remaining orders? Well, you might have noticed, it is similar problem but with a smaller input.      
Thus, we can break this problem into some smaller **subproblems** and it can be solved recursively.    

> If you're new to recursion, this may be a challenging problem to solve. You may wish to check out the [recursion explore card](https://leetcode.com/explore/featured/card/recursion-i/) and become more comfortable with recursion by practicing on less difficult problems before returning.

Let's say we have `unpicked` number of orders that have not been picked up and `undelivered` number orders to be delivered.
If we want to pick one order then there are `unpicked` different choices to pick at the current step. Or if we want to deliver one order then there are `undelivered - unpicked` (orders which are picked but not delivered) different choices.

Hence, we can say,
```
// If we want to pick one order then,
waysToPick = unpicked * totalWays(unpicked - 1, undelivered)

// If we want to deliver one order then,    
waysToDeliver = (undelivered - unpicked) * totalWays(unpicked, undelivered - 1)
```
This recursive pattern is known as a **recurrence relation.**

For recursive approaches, we need base cases. 

>Base cases are states (any combination of `unpicked` and `undelivered`) for which we can calculate the answer without using recursion. 

Now what could be our base cases, when should we stop the recursion? 
When we deliver all the orders that means we have generated some combination of pickup and delivery, so we can count this sequence, thus `return 1`.

Some of the subproblems occur again and again, thus these subproblems are also **overlapping** - for example, we would need to calculate `totalWays(4, 5)` in both `totalWays(4, 6)` and `totalWays(5, 5)`.

<img src="../Figures/1359/Slide2.PNG" width="960" alt="recursion tree"> <br />

By caching the result of each subproblem, we can avoid recalculating previously seen subproblems, hence improving the time complexity.

This optimization technique of storing the results of the expensive function calls and returning the cached result when the input occurs again is called **memoization**.

**Algorithm**

1. Initialize some variables:
    - `MOD` as $$10^{9} + 7$$ to prevent integer overflow (as stated in the problem description).
    - `memo`, a data structure that we will use to cache results to prevent duplicate computation.       
      In python, we will use [@cache](https://docs.python.org/3/library/functools.html), which can automatically memoize the function's return values for each combination of input arguments and will return the cached result if the function is called again with the same combination of arguments. 

2. Create a function `totalWays(unpicked, undelivered)` that will be used for recursion.
    - First, check if we have delivered all the orders (`unpicked == 0` and `undelivered == 0`). If they are all delivered, `return 1`.
    - We can't deliver/pick up more than `N` orders or deliver more orders than we picked up. If `unpicked < 0` or `undelivered < 0` or `undelivered < unpicked`, then `return 0`.
    - Check if this subproblem has already been visited once. If it has, then return the cached result.
    - Otherwise, add the ways to pick `unpicked` and deliver `undelivered` orders while preventing integer overflow.
    - At the end of each recursive call, store the number of valid pickup and delivery options for the current subproblem in the cache and return it.

3. Call the function we created in step 2 (`totalWays`) with the initial input values of `N` unpicked and `N` undelivered orders.

**Implementation**

<iframe src="https://leetcode.com/playground/LqVoPW8Q/shared" frameBorder="0" width="100%" height="500" name="LqVoPW8Q"></iframe>


**Complexity Analysis**

If $$N$$ is the number of the orders given.

* Time complexity: $$O(N^2)$$.    
 
  The recursive function would have made approximately $$2^N$$ recursive calls, but due to caching, we will avoid recomputation of results, and only unique function calls may result in more recursive calls. The recursive function depends on two variables (`unpicked` and `undelivered`). Since the values for `unpicked` and `undelivered` must be in the range $$0$$ to $$N$$, there will be at most $$(N + 1) \cdot (N + 1)$$ unique function calls.

* Space complexity: $$O(N^2)$$.     

  Our cache must store the results for all of the unique function calls that are valid states. There are approximately $$N^{2}/2$$ valid states.
    
<br/>

---

### Approach 2: Tabulation (Bottom-Up DP)

**Intuition**
   
The top-down dynamic programming approach requires some time and space to maintain a function call stack. To avoid the overhead that results from using a recursive function, we can use bottom-up dynamic programming (tabulation) instead. Since tabulation is performed iteratively, it does not require a function call stack.   

> If you are not familiar with Dynamic Programming, then be sure to check out our distinguished [Dynamic Programming Explore Card](https://leetcode.com/explore/learn/card/dynamic-programming/).

In the recursive approach, the variables that change are the number of unpicked and undelivered orders. Hence, each state in our DP table will be some combination of values for `unpicked` and `undelivered`. 

What is a state? If we picture this scenario in real life, what information do we need at any given moment? We only need to know what is the number of unpicked and undelivered orders. In a DP problem (iterative or recursive), a state is a set of variables that can sufficiently describe a scenario. 

So in this problem let's define a state `(unpicked, undelivered)`, where `dp[unpicked][undelivered]` denotes, the number of ways to arrange the `unpicked` unpicked and `undelivered` undelivered orders.    
When all orders are picked and delivered (`unpicked` and `undelivered` are `0`) it is assumed there is one way to arrange the `0` remaining orders, hence `dp[0][0] = 1`. Which will be our base case.       

We build our table in a bottom-up manner. Going bottom-up is a common strategy for dynamic programming problems, in which we first solve smaller problems and use those already solved smaller problems to solve a bigger problem.

If there are $$n$$ unpicked orders then we have $$n$$ choices of picking orders, so the number of ways to pick these $$n$$ orders will be $$n$$ multiplied by the number of ways to pick $$(n-1)$$ orders, which will already be stored in the DP table.   

Let's say we have `unpicked` number of orders to be picked and `undelivered` orders to be delivered.     
If we want to pick one order then there are `unpicked` different choices to pick at the current step. Or if we want to deliver one order then there are `undelivered - unpicked` (orders which are picked but not delivered) different choices.

Hence, we can say,
```
// There are some unpicked elements left. 
if unpicked > 0
    // We have the choice to pick any one of those orders.
    waysToPick += unpicked * dp[unpicked - 1][undelivered]

// Delivery done are less than picked orders.
if undelivered > unpicked 
    // We have the choice to deliver any one of (undelivered - unpicked) orders. 
    waysToDeliver += (undelivered - unpicked) * dp[unpicked][undelivered - 1]
```

!?!../Documents/1359/slideshow1.json:960,540!?!

**Algorithm**

1. Initialize some variables:
    - `MOD` as $$10^{9} + 7$$ to prevent integer overflow (as stated in the problem description).
    - `dp`, a data structure that will be used to store all subproblems results.

2. We iterate over each subproblem of unpicked and undelivered orders.        
  We start from the base case `(unpicked = 0 and undelivered = 0)` and increment `undelivered` count whenever we reach `undelivered` equal to `N`, we increment `unpicked` count and reset `undelivered` to `unpicked` count because the count of undelivered orders can't be less than unpicked orders `(i.e. delivered orders can't be more than picked orders)`.              
  The outer loop will iterate over unpicked orders and the inner loop will iterate over undelivered orders.           
    - If both the unpicked and undelivered orders are `0`, the number of ways to arrange them is `1`.
    - Otherwise, add the ways to pick unpicked and deliver undelivered orders with handling the integer overflow.

3. Return the number of ways to pick and deliver `N` unpicked and undelivered orders, stored in `dp[N][N]`.

**Implementation**

<iframe src="https://leetcode.com/playground/fFQF8DG6/shared" frameBorder="0" width="100%" height="500" name="fFQF8DG6"></iframe>


**Complexity Analysis**

If $$N$$ is the number of the orders given.

* Time complexity: $$O(N^2)$$.

  We have two state variables, and each subproblem is a configuration of those two state variables. Thus, there will be at most $$(N + 1) \cdot (N + 1)$$ unique subproblems and we will iterate over half of them using two nested for loops.

* Space complexity: $$O(N^2)$$.     

  Our DP table must be large enough to store all of the $$(N + 1) \cdot (N + 1)$$ possible states.

  > **Note:** You can further reduce the space complexity of this approach as we can see in the slideshow while building the DP table we only need previous and current rows. Thus instead of keeping an $$N \cdot N$$ size array we could just keep two $$N$$ size arrays. 
  > It would follow the same approach explained above, but it's not implemented here.
    
<br/>

---

### Approach 3: Permutations (Math)

**Intuition**

Let's assume we want to place 4 different objects `(A, B, C, D respectively)` in some order in a row, what are all the possible ways to do it?        
Now how can we approach this problem?

We can say we have 4 empty positions and at each position, we have to place one object.      
At the 1st position, we can place any one of the 4 objects so we have 4 choices here.        
At the 2nd position, we can only place any one of 3 objects because one object is already placed at the 1st position.      
At the 3rd position, we can place any one of the remaining 2 objects (2 objects are already placed).     
At the 4th position, we can place the remaining 1 object (3 objects are already placed).     

Hence, total number of ways to place $$4$$ different objects = $$4 \cdot 3 \cdot 2 \cdot 1 = 4! $$.    

<img src="../Figures/1359/Slide4.PNG" width="960" alt="rearrange"> <br />

> A permutation is a mathematical calculation of the **number of ways** a particular set can be arranged, where the order of the arrangement matters.

Now, the given problem can be changed to a similar permutations problem.  
    
We have $$N$$ orders each with a pickup and delivery, let's denote $$P_i = Pickup \space of \space i^{th} \space order,$$ and $$D_i = Delivery \space of \space i^{th} \space order$$.     

We have $$2N$$ empty positions and we need to count all ways to place all $$P_i$$ and $$D_i$$ such that all $$D_i$$ is placed after $$P_i$$.

So, we first place all the $$N$$ pickups in some random order as we don't have any constraints on placing pickups.            
As we saw with an example above, to place $$N$$ different objects, we have $$N!$$ ways. So $$N$$ pickups can be placed in $$N!$$ ways.     

Now, let's take an example of 4 orders.

<img src="../Figures/1359/Slide5A.PNG" width="960" alt="pickups"> <br />
 
Now we start placing all the deliveries one by one.     
The last pickup was `P3`, hence for `D3` we have only **one** place i.e. after `P3`.     

<img src="../Figures/1359/Slide5B.PNG" width="960" alt="del-1"> <br />

Now, the second last pickup was `P1`, so we have **three** places to place the delivery `D1`.

<img src="../Figures/1359/Slide6.PNG" width="960" alt="del-2"> <br />

Similarly, for `D4` we have **five** places and for `D2` we have **seven** places.

<img src="../Figures/1359/Slide7.PNG" width="960" alt="del-4"> <br />

So, the number of ways to place all deliveries is $$1 \cdot 3 \cdot 5 \cdot 7$$.

Thus, we can come to the formula that, to place $$N$$ pickups we have $$N!$$ ways,     
and to place the $$N$$ deliveries we have $$1 \cdot 3 \cdot 5 \space \cdot .... \cdot \space (2N-1)$$ ways.

> So, **total ways to arrange all pickups and deliveries are, $$ N! * \prod_{i=1}^{N} (2 * i - 1) $$.**

**Algorithm**

1. Initialize some variables:
    - `MOD` as $$10^{9} + 7$$ to prevent integer overflow (as stated in the problem description).
    - `ans`, to store the final result.

2. Calculate the number of ways to arrange pickups and deliveries, i.e. $N!$ and $ \prod_{i=1}^{N} (2 * i - 1) $ and multiply them to calculate total ways to arrange pickups and deliveries for `N` orders with handling the overflow.

3. Return the final result `ans`.

**Implementation**

<iframe src="https://leetcode.com/playground/JP2RH9Aw/shared" frameBorder="0" width="100%" height="344" name="JP2RH9Aw"></iframe>


**Complexity Analysis**

If $$N$$ is the number of the orders given.

* Time complexity: $$O(N)$$.     

  To calcualte $$N!$$ and $$\prod_{i=1}^{N} (2 * i - 1) $$ we need to iterate over $$N$$ elements. 

* Space complexity: $$O(1)$$.     

  We have used only constant space to store the result.
    
<br/>

---

### Approach 4: Probability (Math)

**Intuition**

Probability is simply how likely something is to happen.       
We can generate the mathematical formula using probability and permutations concepts.

<img src="../Figures/1359/Slide23.PNG" width="960" alt="prob4"> <br />

Let's define a favorable outcome as a sequence where each $$P_i$$ occurs before $$D_i$$.      
Thus for this problem, 
> (Number of arrangements of N orders in a valid sequence) = (Probability of arranging N orders in a valid sequence) * (Total number of possible arrangements with N orders)

<br />

<u>Calculating Probability: </u>

If we have only 1 order, i.e. one pickup $$P1$$ and one delivery $$D1$$.  
Two arrangements are possible, $$P1 \space D1$$ and $$D1 \space P1$$.       
Thus, the probability to arrange one pickup and delivery in the right sequence is, $$1 / 2$$.

If we have $$N$$ orders and the pickup/delivery is reversed for any one of the orders, then the sequence is not valid.  
So to have a valid sequence of $$N$$ orders, we must have all $$N$$ pairs of $$P_i$$ and $$D_i$$ in the correct order, where each pair has a probability of $$1 / 2$$ of being in the correct order. 
So, the probability of arranging $$N$$ orders in a valid sequence is:
$$ = 1/2 \cdot 1/2 \cdot 1/2 \cdot \space..... \space \cdot 1/2 $$ (N times)   
$$ \bf{ = 1 / 2^N} $$


<u>Total Number of Outcomes: </u> 

Total number of arrangements possible using $$2N$$ objects ($$N$$ pickups and $$N$$ deliveries) is, $$\bf{(2N)!}$$.

<u>Total Number of Favorable Outcomes: </u>

> Thus, **total number of arrangements possible** using $$2N$$ objects in right sequence is, $$\bf{(2N)! / 2^N}$$.

**Algorithm**

1. Initialize some variables:
    - `MOD` = to handle the integer overflow as stated in the problem.
    - `ans` = to store the final result.

2. Calculate $$(2N)! / 2^N$$ and return it.
 
**Implementation**

<iframe src="https://leetcode.com/playground/hwKvg6uz/shared" frameBorder="0" width="100%" height="378" name="hwKvg6uz"></iframe>


**Complexity Analysis**

If $$N$$ is the number of the orders given.

* Time complexity: $$O(N)$$.     
  - For calculating $$(2N)!$$ we need to iterate over $$2N$$ elements. 
  - And for calculating $$1 / 2^N$$ we multiply $$2$$ N-times.
  - Thus, it leads to a time complexity of $$O(N)$$.

* Space complexity: $$O(1)$$.     
  We have used only constant space to store the result.

  > **Note:** In python, we can use the $$factorial()$$ function, a direct function that can compute the factorial of a number without writing the whole code for computing factorial.     
  > But then the approach will not count as $$O(1)$$ space, the reason is that in the worst case we will calculate $$factorial(2 * n)$$ which may have a lot of digits. The way python handles extremely long numbers is that it requires an extra $$4$$ bytes of memory every time the number increases by a factor of $$2^{30}$$.