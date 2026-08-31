# Official Solution

**Link:** [https://leetcode.com/problems/campus-bikes-ii/solution/](https://leetcode.com/problems/campus-bikes-ii/solution/)

---

[TOC]

## Solution

--- 

### Approach 1: Greedy Backtracking 

**Intuition**

We have $$N$$ workers and $$M$$ bikes, each worker needs to be assigned a unique bike. Since our objective is to find the combination of workers and bikes that results in the minimum distance sum, intuitively, we can create every possible combination of workers paired with bikes. Then, among all of these combinations, the one that has the minimum distance sum will be our answer.

Let's see how many combinations we can have. The first worker will have $$M$$ choices, the second worker will have $$M-1$$ choices, and so on up to the $$Nth$$ worker who will have $$M-N+1$$ bikes to choose from. The number of combinations we can have will be equal to $$M*(M-1)*(M-2)*............(M-N+1)$$. This expression is equivalent to $$(M! / (M - N)!)$$. When $$N$$ is equal to $$M$$, the above expression simplifies to $$M!$$

When $$M$$ is constrained to be less than or equal to approximately $$12$$, solutions with a time complexity of $$O(M!)$$ are feasible. However, a time complexity of $$O(M!)$$ is generally not ideal.  Let's consider how we can optimize this approach to reduce the execution time.

Suppose we've obtained one combination of workers and bikes with the total distance sum as `smallestDistanceSum` and we are still searching for other combinations with the hope of finding a better result. Now during this process, if after assigning bikes to some workers we have incurred a total distance sum of `currDistanceSum` and `currDistanceSum >= smallestDistanceSum` then we don't need to go further to assign bikes to the remaining workers because the total distance sum at the end will never be smaller than our smallest distance we have achieved so far which is `smallestDistanceSum`. Therefore we can greedily stop searching when our current solution cannot be better than the best solution we have found so far.

**Algorithm**
1. For every worker starting from the worker at index `0`, traverse over the bikes and assign the bike to the worker if it is available (`visited[bikeIndex] = false`). After assigning the bike mark it as unavailable (`visited[bikeIndex] = true`).
2. Add the Manhattan distance of the above assignment to the total distance incurred so far represented by `currDistanceSum` and enter the recursive call for the next worker.
3. When the recursive call is finished, make the bike as available again by setting `visited[bikeIndex]` to `false`.
4. If we have assigned bikes to all the workers, compare the `currDistanceSum` with the `smallestDistanceSum` and update the `smallestDistanceSum` accordingly.
5. Before assigning any bike to the worker, check if the `currDistanceSum` is already greater than or equal to `smallestDistanceSum`. If so, then skip the rest of the workers and return. This is because `currDistanceSum` can only increase, and thus we will not find a better result than `smallestDistanceSum` using the current combination of workers and bikes.

**Implementation**

<iframe src="https://leetcode.com/playground/Lwt6jkPA/shared" frameBorder="0" width="100%" height="500" name="Lwt6jkPA"></iframe>

**Complexity Analysis**

Here $$N$$ is the number of workers, and $$M$$ is the number of bikes.

* Time complexity: $$O(M! / (M - N)!)$$

    As discussed above, in the worst case, we will end up finding all the combinations of workers and bikes. Notice that this is equivalent to the number of permutations of $$N$$ bikes taken from $$M$$ total bikes. 

* Space complexity: $$O(N + M)$$
 
  We have used an array `visited` to mark if the bike is available or not this will use $$O(M)$$ space. There will also be some stack space used while making recursive calls. The recursion stack space used is proportional to the maximum number of active function calls in the stack.  At most, this will be equal to the number of workers $$O(N)$$.

<br/>

---

### Approach 2: Top-Down Dynamic Programming + BitMasking

**Intuition**

The time complexity of the previous approach, $$O(M! / (M - N)!)$$, means it is only reasonable to use when the number of bikes ($$M$$) or the number of workers ($$N$$) is small.  Let's see if we can find a way to solve this problem more efficiently.  
There are two elements of this problem that serve as hints for another way to approach the problem:
1. The problem requires us to **minimize** the distance sum by making sequential decisions (assigning bikes to workers).
2. Each decision we make is affected by the previous decisions we made (which bikes are available depends on which bikes have already been assigned).
These are both characteristics of problems that can be solved using dynamic programming.  Thus, in this approach, we will leverage recursive dynamic programming.


Previously, we used the `visited` array to mark the availability of bikes.
In this approach, we will be using bits to represent the above. Since the maximum number of bikes is less than $$32$$, we can use bitmasking to represent which bikes have been taken with a single integer.

The availability of bikes is now represented by an integer `mask` having $$10$$ bits. The $$10$$ bits represent the states of $$10$$ bikes. A value of $$0$$ at the `ith` bit signifies that the bike at the `ith` index is available while a value of $$1$$ signifies that the bike has been assigned to a worker.

Similar to the previous approach, for every worker starting from the worker at index `0`, we will traverse over the bikes and assign it to the worker if it is available. Availability of `ith` bike can be checked by the `ith` bit in `mask`, the bike is available if the `ith` bit in `mask` is $$0$$. When we assign a bike to the worker we should mark it as unavailable for further workers and for that we need to change the `ith` bit to $$1$$. 

In this approach we need to check/set/unset a particular bit in an integer. 
The below slides show how bitwise AND (`&`) can be used to check if the `ith` bit is set, how bitwise OR (`|`) can be used to set the `ith` bit, and how bitwise XOR (`^`) can be used to unset the `ith` bit.

!?!../Documents/1066_campus_bikes_II.json:650,720!?! <br>


**Algorithm**
1. For every worker starting from the worker at index `0`, traverse over the bits of `mask` and assign it to the worker if it is available (bit at `bikeIndex` in `mask` is `0` ). After assigning the bike mark it is unavailable (change the bit at `bikeIndex` in `mask` to `1`).
2.  Add the Manhattan distance of the above assignment and add it to the distance that will be returned by the recursive function `minimumDistanceSum` for the next worker `workerIndex`.
3. If we have assigned bikes to all the workers (`workerIndex >= workers.size()`) then we can return the distance as `0`.
4. Use memoization to store the result corresponding to `mask`, because there will be repeated subproblems as shown below. This will help us to avoid recalculating subproblems.

![fig](../Figures/1066/1066A.png)

Note: Although we have two states in our recursive functions, `mask` and `workerIndex` still we don't need to memoize the result corresponding to both `workerIndex` and `mask` because `workerIndex` is equal to the number of set bits in `mask`. Hence both this information can be represented by `mask` itself.

**Implementation**


<iframe src="https://leetcode.com/playground/FuifUFTg/shared" frameBorder="0" width="100%" height="500" name="FuifUFTg"></iframe>


**Complexity Analysis**

Here $$N$$ is the number of workers, and $$M$$ is the number of bikes.

* Time complexity: $$O(M \cdot 2^M)$$

    Time complexity is equal to the number of unique states in the `memo` table multiplied by the average time that the `minimumDistanceSum` function takes. The number of states is equal to unique values of `mask` that is $$2^M$$ and the `minimumDistanceSum` function takes $$O(M)$$ time. So the time complexity is $$O(M \cdot 2^M)$$.

* Space complexity: $$O(2^M)$$

    We have used an array `memo` to store the results corresponding to `mask`. Also, there will be some stack space used during recursion. The recursion space will be equal to the maximum number of the active function calls in the stack that will be equal to the number of workers i.e., $$N$$. Hence the space complexity will be equal to $$O(2^M + N)$$.
    

<br/>

---

### Approach 3: Bottom-Up Dynamic Programming + BitMasking

**Intuition**

In the previous approach, the recursive calls incurred stack space. We can avoid this by applying the same approach in an iterative manner which is generally faster than the top-down approach. As explained in the previous approach, `mask` represents the availability of bikes. The $$10$$ bits represent the states of $$10$$ bikes. A value of $$0$$ at the ith bit signifies that the bike at the `ith` index is available, while a value of $$1$$ signifies that the bike has been assigned to a worker.

It is given in the constraints that the number of bikes (`numOfBikes`) will always be greater than and equal to the number of workers (`numOfworkers`). We need to assign one bike to all the workers, so our final representation of `mask` will have `numOfWorkers` number of $$1$$'s denoting that the bikes at these indices have been assigned. Among all the possible representations of `mask` with `numOfWorkers` number of $$1$$'s, we need the one that has the minimum distance sum.

We will traverse over all the possible values of `mask`. For each value, we will use its distance sum to find the distance sum for other values of `mask` by changing the zeroes to ones.  Suppose the current value of `mask` is `1001011011` with $$6$$ ones, which signifies that $$6$$ workers have been assigned a bike. From the current value of the mask, we want to find the possible representations having  $$7$$ ones. In the current value `1001011011`, we can replace any `0` with `1` and add the additional distance of this assignment to the distance sum of the original `mask` value.

In the above process, the value of `mask` will be repeated hence we will memoize the result corresponding to `mask` to avoid recalculation.

**Algorithm**

1. Traverse over `mask` from $$0$$ to $$2^{10}$$. 
2. For every value of mask traverse over the `bikeIndex`. If the bike (at index `bikeIndex`) has not been assigned (bit at `bikeIndex` in `mask` is `0`) then change the bit at `bikeIndex` to `1`. The new value of `mask` is denoted by `newMask`.
3. The worker to which the above bike is assigned is given by the number of bikes already assigned (equal to the number of `1`s in `mask`) denoted by `nextWorkerIndex`.
4. The distance sum for `newMask` will be equal to the distance sum for `mask` (`memo[mask]`) plus the Manhattan distance between `nextWorkerIndex` and `bikeIndex`. Record the distance for `newMask` in `memo` for future reference.
5. Base case will be when we have an equal or more number of ones in `mask` (`nextWorkerIndex`) than the number of workers (`numOfWorkers`). Note that for `mask` having more number of ones than the `numOfWorkers`, the value of `smallestDistanceSum` will not be affected because the value for such `mask` in `memo` is initially set to `INT_MAX`.

**Implementation**

<iframe src="https://leetcode.com/playground/4UTcQRJe/shared" frameBorder="0" width="100%" height="500" name="4UTcQRJe"></iframe>


**Complexity Analysis**

Here $$N$$ is the number of workers, and $$M$$ is the number of bikes.

* Time complexity: $$O(M \cdot 2^M)$$

    We traverse over all of the values for `mask` from $$0$$ to $$2^M$$ and for each value, we traverse over the $$M$$ bikes and also count the number of ones in `mask`, which on average takes $$M / 2$$ iterations using Kernighan's Algorithm.  So the time complexity will be $$O(2^M \cdot (M + M / 2))$$ which simplifies to $$O(M \cdot 2^M)$$.
* Space complexity: $$O(2^M)$$.
    
    We are only using space in `memo` with the size equal to $$2^M$$.

<br/>

---

### Approach 4: Priority Queue (Similar to Dijkstra's Algorithm)

**Intuition**

In the previous approach, we traversed over all of the values for `mask` from $$0$$ to $$2^M$$ and generated `newMask` each time. In this approach instead of traversing over `mask` in a sequential manner, we will traverse `mask` in increasing order of the total distance sum. This is because it is more likely to find the smallest distance sum from a `mask` that currently has a smaller sum of distance.

To find the next `mask` with the lowest distance sum, we will use a priority queue. With every `mask`, we will store the total Manhattan distance as a pair/vector ({distanceSum, mask}) in the priority queue. In order to avoid processing a repeated mask, we will use a HashSet/Map `visited` to store the processed `mask`. Since we are traversing the `mask` in increasing order of their distance sum, the first time when the `mask` consists of $$1$$'s equal to the number of workers `numOfWorkers` we will know that it's the smallest distance sum possible.

**Algorithm**

1. As an initial state push `{0, 0}` to the priority queue, signifying that the `mask` is $$0$$ and the sum of distance is $$0$$.
2. Pop the top pair ({`currentDistanceSum`,  `currentMask`}) from the priority queue. We will discard this pair and continue to the next pair if the `currentMask` has been already visited.
3. Traverse over bikes and if the bike at `bikeIndex` has not been assigned (the bit at `bikeIndex` in `currentMask` is $$0$$), then assign it to the worker `workerIndex`.
4. Add the next state pair {`nextStateDistanceSum`, `nextStateMask`} to the priority queue.
5. Return the `currentDistanceSum` if the `workerIndex` is equal to `numOfWorkers`.

**Implementation**


<iframe src="https://leetcode.com/playground/LZgNcJSs/shared" frameBorder="0" width="100%" height="500" name="LZgNcJSs"></iframe>


**Complexity Analysis**

Here $$N$$ is the number of workers, $$M$$ is the number of bikes and,

$$P(M, N) = M! / (M - N)!$$ is the number of permutations for $$N$$ bikes taken from $$M$$ total bikes,

$$C(M, N) = M! / ((M - N)! \cdot N!)$$ is the number of ways to choose $$N$$ bikes from $$M$$ total bikes. 


* Time complexity: $$O(P(M, N) \cdot \log (P(M, N)) + (M \cdot \log (P(M, N)) \cdot 2^M)$$

    Priority queue might have more than $$1$$ copy of a `mask`. For instance `0011` will be inserted into the priority queue twice, the first occasion, `0001 -> 0011`, the second occasion `0010 -> 0011`.

    The total number of the possible mask with size `M` and having `N` ones will be `C(M, N)`. For each such mask, the order in which `1`'s are added to `mask` will also matter, this can be done in `N!` ways. So in total, there can be $$C(M, N) \cdot N! = P(M, N)$$ number of `mask` in the priority queue. All these `mask` will be iterated in the while loop and for each mask,  $$\log (P(M, N))$$ number of operations will be required for removing the top pair from the priority queue.

   Since we are tracking the `mask` that we have traversed using `visited` set, the inner for loop where we are traversing over the bikes will only be executed for only unique values of `mask` that is $$2^M$$. Also pushing into priority queue will cost $$\log (P(M, N))$$ time.

    Hence the total time complexity becomes $$O(P(M, N) \cdot \log (P(M, N)) + (M \cdot \log (P(M, N)) \cdot 2^M)$$.

* Space complexity: $$O(P(M, N) + 2^M)$$

    The number of `mask` that can be stored in the priority queue is $$O(P(M, N))$$, and the number of `mask` that can be inserted into the set `visited` will be $$O(2^M)$$.
    

<br/>

---