# 🚀 Sort + Greedy || Explained Intuition 🚀

**Author:** MohamedMamdouh20
**Votes:** 10
**Link:** [https://leetcode.com/problems/maximize-happiness-of-selected-children/solutions/5132699/](https://leetcode.com/problems/maximize-happiness-of-selected-children/solutions/5132699/)

---

# Problem Description

Given an array `happiness` of length `n` representing the happiness values of `n` children standing in a queue, and a positive integer `k`, choose `k` children from the queue in `k` turns. During each turn, selecting a child decreases the happiness value of all children not yet chosen by `1`. However, happiness values cannot become **negative**. Return the maximum sum of happiness values among the selected children.

Ex: `happiness` = [1,2,3], `k` = 2
Output: 4
Explanation: Select 2 children as follows:
1. Pick the child with happiness value 3. Remaining happiness values: [0,1].
2. Pick the child with happiness value 1. Remaining happiness values: [0].
Sum of selected children's happiness values: 3 + 1 = 4.

---

# Intuition

Hi there, \uD83D\uDE04

Let's dive\uD83E\uDD3F deep into our today's problem.
In today's problem, we have array of happiness indicates each child's happiness\uD83D\uDE04\uD83D\uDE14 in it and we have to choose `k` children in `k` turns (rounds).
BUT we have to **max** the sum of those happiness.\uD83D\uDCC8

How can we do that ?\uD83E\uDD14
let's give you some hint.... now, we have to choose `k` children and `max` their sum so what we can do?
Yes, we can **sort** !\uD83E\uDD29
we can **sort** the children and choose the **maximum** `k` ones -we can use any other method to get the maximum `k` ones like using a **heap** but sort is my favorite\uD83D\uDE02-.

what we can do in a nutshell is to **sort** those happiness `ascending` or `descending` you can use both -C++ and Python solutions are descending and Java solution in ascending-
then for each round we choose the (highest current happiness - past rounds till now).

since all happiness are **decreased** by `1` each round other than selected ones till now then when we choose a happiness in a round we will **decrease** from it the number of past round that we didn't select it in.

and finally, we have our answer which is the sum of all selected happiness.\uD83D\uDE03

And this is the solution for our today'S problem I hope that you understood it\uD83D\uDE80\uD83D\uDE80

---

# Approach

1. **Sort** the happiness values in `non-increasing` order.
2. Initialize a variable `total` to store the total happiness sum.
3. Iterate `k` times:
    a. Calculate the happiness contribution of the current child in this turn by subtracting the turn number from their happiness value. If the result is **negative**, set it to `0`.
    b. Add the calculated happiness contribution to the `total`.
4. Return the `total` happiness sum.

---

# Code

```C++ []
class Solution {
public:
    long long maximumHappinessSum(vector<int>& happiness, int k) {
        // Sort the happiness values in non-increasing order
        sort(happiness.rbegin(), happiness.rend());

        long long total = 0;
        for (int turn = 0; turn < k; ++turn) {
            // Calculate the happiness contribution of the current child in this turn
            // since his happinness has been decreased for all of the past rounds
            long long current = max(happiness[turn] - turn, 0);
            // Accumulate the happiness contribution
            total+= current;
        }
        return total;
    }
};
```
```Java []
public class Solution {
    public long maximumHappinessSum(int[] happiness, int k) {
        // Sort the happiness values in non-increasing order
        Arrays.sort(happiness);

        long total = 0;
        for (int turn = happiness.length; happiness.length - turn < k; --turn) {
            // Calculate the happiness contribution of the current child in this turn
            // since his happiness has been decreased for all of the past rounds
            long current = Math.max(happiness[turn - 1] - (happiness.length - turn), 0);
            // Accumulate the happiness contribution
            total += current;
        }
        return total;
    }
}
```
```Python []
class Solution:
    def maximumHappinessSum(self, happiness: List[int], k: int) -> int:
        # Sort the happiness values in non-increasing order
        happiness.sort(reverse=True)

        total = 0
        for turn in range(k):
            # Calculate the happiness contribution of the current child in this turn
            # since his happiness has been decreased for all of the past rounds
            current = max(happiness[turn] - turn, 0)
            # Accumulate the happiness contribution
            total += current
        
        return total
```


![HelpfulJerry.jpg](./images/0.jpeg)
