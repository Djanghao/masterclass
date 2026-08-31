# [Greedy + Proof + Tutorial] IPO

**Author:** never_get_piped
**Votes:** 17
**Link:** [https://leetcode.com/problems/ipo/solutions/5315196/](https://leetcode.com/problems/ipo/solutions/5315196/)

---

**Topic** :  Greedy
Greedy algorithms are a class of algorithms that make locally optimal choices at each step with the hope of finding a global optimum solution. In these algorithms, decisions are made based on the information available at the current moment without considering the consequences of these decisions in the future. The key idea is to select the best possible choice at each step, leading to a solution that may not always be the most optimal but is often good enough for many problems. (GFG Reference)

**A thorough proof is essential to demonstrate the correctness of a perfect Greedy solution.**

Feel free to refer back to recent challenge on how I constructed a proof for it :
* [Minimum Number of Moves to Seat Everyone](https://leetcode.com/problems/minimum-number-of-moves-to-seat-everyone/discuss/5304525/greedy-formal-proof-minimum-number-of-moves-to-seat-everyone)
* [Minimum Increment to Make Array Unique](https://leetcode.com/problems/minimum-increment-to-make-array-unique/discuss/5309958/greedy-formal-proof-minimum-increment-to-make-array-unique)

___

## Greedy Solution
Solving a greedy problem generally involves coming up with a quick idea, but we need to prove its correctness before starting implementation. **Please refer to the section below for the solution walkthrough. This part exclusively focuses on guiding through the solution approach**.

Let's simplify the problem for **easier/funny** understanding:
```
Your initial LeetCode skill level is W. 
By solving one LeetCode question per day, your skill level can potentially increase. 
To secure a FANG offer, particularly from Amazon, you aim to solve at most K questions. 
Questions are locked until your skill level surpasses their target difficulty. 
Determine the maximum skill level achievable by solving at most K questions.
```

The **greedy intuition** here suggests that from all available unlockable projects/questions, you should prioritize solving the one that offers the highest increase in skill level first.

We first sort all LeetCode questions/projects based on their difficulty level in ascending order. We first iterate over our projects/questions to collect all unlockable ones. Since they are all unlocked, we can handle them at any time we like.

If there is a project/LeetCode question that is locked, we can start solving it to increase our capital/skill level until we can unlock the next one. Since we aim to maximize our profits/skill levels, we deal projects/questions that offer the maximum profit/skill increase first. We can use a **max heap** as our bank to store all available unlocked projects/questions. At the same time, we need to update available projects/questions as they become unlocked during our capital/skill level increase.

If all projects/questions are unlocked and we still have the capacity to solve more, we should continue solving the remaining projects/questions as much as possible. We can iterate over the remaining projects/questions and solve them until we reach the limit `k`.



## Proof 
We need to proof the above idea is correct, and today's proof is quite simple.

We noticed that before we start solving any projects/questions, we collect all unlocked projects/questions into our bank. Since this action does not affect our answer, there is no harm in doing so.

As soon as you encounter a locked project/question, it indicates that you cannot collect any more projects/questions, as the remaining ones are sorted in ascending order based on their capital/difficulty.

At this moment, you should start solving a project/question, it's optimal to always begin with the one that offers the highest profit/skill increase. Proof:
```
Let set S denotes the current bank for all unlocked projects/questions.
Assume you try to pick k from them.
With the greedy strategy, you end up picking the top k elements from our bank.
There is no other picking arrangement that is better than this strategy.
```

Following the same principle as above, if you can include more good projects/questions in your bank, you should do so to ensure you can pick up a greater one.

## Code
<iframe src="https://leetcode.com/playground/MFns9QzW/shared" frameBorder="0" width="800" height="300"></iframe>

**Complexity**:
* Time Complexity : `O(n log n)`
* Space Complexity : `O(n)`

**Feel free to leave a comment if something is confusing, or if you have any suggestions on how I can improve the post.**