# Official Solution

**Link:** [https://leetcode.com/problems/water-bottles/solution/](https://leetcode.com/problems/water-bottles/solution/)

---

## Solution

---

### Approach 1: Simulation

#### Intuition

We are given two integers, `numBottles` and `numExchange`. `numBottles` represents the number of full water bottles, and `numExchange` is the number of empty bottles needed to exchange for one full bottle. We need to determine the total number of water bottles we can drink. For example, if `numBottles` is 3 and `numExchange` is 3, we can drink 4 bottles of water: first drinking all 3 full bottles and then exchanging the 3 empty bottles for 1 more full bottle. Note that `numExchange` must be greater than 1 because if `numExchange = 1`, we would get one full bottle for each empty one, resulting in an infinite number of bottles.

The key observation here is that once you have the `numExchange` number of empty bottles you can exchange them with one full bottle at that point. It's equivalent to keeping the empty bottles and exchanging them at some later point. This is because the number of full bottles you will get from them won't change. This observation also clarifies that the decision we make doesn't depend on the previous decision we have made and it's not a dynamic programming problem.

In this approach, we simulate the process to find the number of bottles we can drink. We keep consuming bottles until we have consumed `numExchange` bottles, then exchange them for one full bottle. We repeat this until the number of full bottles is less than `numExchange` and can no longer be exchanged. Finally, we consume the remaining bottles until we have none left.

Note that while we have more than `numExchange` full bottles, we can consume them in batches of `numExchange` instead of one by one, because we can only get one full bottle after exchanging `numExchange` empty bottles. In the end, we will add the remaining `numBottles` (which would be less than `numExchange`) to our answer.

#### Algorithm

1. Initialize the answer variable `consumedBottles` to `0`.
2. Keep doing the following until we have less `numBottles` than the `numExchange`:

    - Consume the `numExchange` number of full bottles, i.e. add `numExchange` to `consumedBottles`.
    - Decrement `numExchange`  from the available full bottles `numBottles`.
    - Exchange the empty bottles with one full bottle, i.e., increment `numBottles` by one.
3. Return `consumedBottles + numBottles`.

#### Implementation

<iframe src="https://leetcode.com/playground/VofkZu9c/shared" frameBorder="0" width="100%" height="361" name="VofkZu9c"></iframe>

#### Complexity Analysis

Here, $N$ is the number of initial full bottles.

* Time complexity: $O(N)$.

  The maximum number of operations in the while loop will be when the value of `numExchange` is minimum, i.e., `2`. In this case, we will keep consuming the `2` bottles and add `1` as an exchange. Hence, the `numBottles` will be decreased by one after each iteration. Hence, the time complexity is equal to $O(N)$.

* Space complexity: $O(1)$.

  No extra space is required apart from a few variables, hence the space complexity is constant.
---

### Approach 2: Optimized Simulation

#### Intuition

In the previous approach, we consumed `numExchange` bottles in each iteration. By using math operations, we can do this more efficiently. We can consume `numExchange * K` bottles in one go, where $K$ is the largest integer such that `numExchange * K < numBottles`. $K$ is calculated as integer division `numBottles / numExchange`. After consuming `numExchange * K` bottles, we exchange them for $K$ full bottles (one for each set of `numExchange` empty bottles).

The key difference from the previous approach is that instead of consuming `numExchange` bottles and then exchanging them, we first consume the maximum possible number of bottles and then exchange them. This method remains optimal as the order of exchanging empty bottles doesn't matter. As in the previous approach, we still need to add the remaining full bottles that are less than `numExchange` at the end.

![fig](../Figures/1518/1518A.png)

#### Algorithm

1. Initialize the answer variable `consumedBottles` to `0`.
2. Keep doing the following until we have less `numBottles` than the `numExchange`:

    - Find `K` as `numBottles / numExchange`.
    - Consume `numExchange * K` number of full bottles, i.e. add `numExchange * K` to `consumedBottles`.
    - Decrement `numExchange * K`  from the available full bottles `numBottles`.
    - Exchange the empty bottles with `K` full bottle, i.e., increment `numBottles` by `K`
3. Return `consumedBottles + numBottles`.

#### Implementation

<iframe src="https://leetcode.com/playground/DUDFrWC9/shared" frameBorder="0" width="100%" height="378" name="DUDFrWC9"></iframe>

#### Complexity Analysis

Here, $N$ is the number of initial full bottles, and $M$ is equal to `numExchange`.

* Time complexity: $O(\log_{M} N)$.

  We divide the number of full bottles `numBottles` by `numExchange` at each iteration. Hence, the time complexity is equal to  $O(\log N)$.

* Space complexity: $O(1)$.

  No extra space is required apart from a few variables, hence the space complexity is constant.
---