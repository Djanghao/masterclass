# Official Solution

**Link:** [https://leetcode.com/problems/remove-k-digits/solution/](https://leetcode.com/problems/remove-k-digits/solution/)

---

[TOC]

## Solution

--- 

### Approach 1: Brute-force [Time Limit Exceeded]

**Intuition**

At the first glance, one of the first intuitions that might come to one's mind is to enumerate all the possible combinations and find the minimal number among them, _i.e._ _brute-force_.

Though after a small moment of reflection, we would easily rule it out. We could name a few reasons. The major caveat is that the algorithm would have an **exponential time complexity**, since we need to enumerate the combinations of selecting $$k$$ numbers out of a list of $$n$$, _i.e._ $$C_{n}^{k}$$. Even for a trial example, the algorithm could run out of the time limit.

Apart from the complexity issue, another technical issue that one needs to solve in the above brute-force approach, is _to compare the values of two digit strings_. As naive as it sounds, we could convert the digit string to the numerical value. Soon one would realize that this method does not scale. For an unsigned 32 bit-integer, the maximum value it can hold is a number with 10 digits (_i.e._ _4,294,967,295_). We can expect there are plenty of test cases with strings of hundreds of digits.

One would argue that for comparison, we don't need to convert the digit string to its numeric value, but simply compare the sequence of digits one by one from left to right. Indeed, it would work.

_But then, if we look at the overall problem again, it seems that there should be some **deterministic way** to construct the solution, without the need of exhausting all possible solutions._
<br/>
<br/>


--- 
### Approach 2: Greedy with Stack

**Intuition**

We've got a hint while entertaining the idea of brute-force, that given two sequences of digit of the same length, it is the **leftmost** **distinct** digits that determine the superior of the two numbers, _e.g._ for `A = 1axxx`, `B = 1bxxx`, if the digits `a > b`, then `A > B`.

With this insight, the first intuition we got for our problem is that _we should iterate from the left to right_, when removing the digits. The more a digit to the left-hand side, the more weight it carries. 

Now that we fix on the order of the iteration, it is critical to come up some **criteria** on how we eliminate digits, in order to obtain the minimum value.

![pic](../Figures/402/402_example.png)

Let us start from a simple example. Given a sequence of digits, _e.g._ `425`, if we are asked to remove just one digit, then from left to right, we have the candidates as `4`, `2` and `5`. And we compare each digit with its left neighbor. Starting from `2`, which is less than its left neighbor `4`. _At this very moment, we are sure that we should remove the digit `4`_. Because the consequence of not doing so is that we won't obtain the minimum number, no matter what we do subsequently.

Imagine if we keep the digit `4`, then all the possible solutions are lead with the digit `4` (_i.e._ 42, 45). While in one of the opposite cases, _e.g._ removing `4` and keeping `2`, we have solutions lead with `2` (_i.e._ 25), which is obviously less than any of the solutions of keeping the digit `4`.

We could summarize the above scenario of removing a digit, as a rule below:
> Given a sequence of digits $$[D_1D_2D_3...D_n]$$, if the digit $$D_2$$ is less than its left neighbor $$D_1$$, then we should remove the left neighbor ($$D_1$$) in order to obtain the minimum result.

**Algorithm**

Believe it or not, the above rule is the only key needed to solve the problem. It clearly defines a condition on which we can remove a digit without a doubt. By removing the digits one by one, we are steadily approaching the optimal solution step by step. Now, it might ring a bell, to one of the popular algorithmic paradigms $$-$$ **Greedy**. 

>Indeed, the problem could be solved with the greedy algorithm. The above rule clarifies the essential logic on how we can approach the final solution. Once we remove a digit from the sequence, the remaining digits forms a new problem where we can continue to apply the rule.

One might notice that, there could be some cases where the condition to apply the rule does not hold for any of the digits. To put it in another word, in those cases, we would have a _**monotonic increasing sequence**_, _i.e._ each digit is bigger than its previous digit. In this scenario, we simply remove the pending large digits, again, _**greedily**_. We skip the rigorous proof here, and claim that the solution obtained by the above measure is indeed the optimal one.

On the other hand, we did provide a **_proof by contradiction_**, with the simple example of `425` in the Intuition section, that by repeatedly applying the rule we would obtain the optimal solution.

**Implementation**

One could implement the above algorithm with the help of the **stack** data structure. We use a stack to hold the digits that we would keep at the end.

Iterating the sequence of digits from left to right, the main loop can be broken down as follows: 

- 1). for each digit, if the digit is less than the top of the stack, _i.e._ the left neighbor of the digit, then we pop the stack, _i.e._ removing the left neighbor. At the end, we push the digit to the stack.

- 2). we repeat the above step (1) until any of the conditions does not hold any more, _e.g._ the stack is empty (no more digits left). or in another case, we have already removed `k` digits, therefore mission accomplished.

![pic](../Figures/402/402_algorithm.png)

We demonstrate how the algorithm works in the above graph. Given the input sequence `[1, 2, 3, 4, 5, 2, 6, 4]` and the number of digits to remove `k=4`, the rule is triggered for the first time at the digit of `5`. Once we remove the digit `5`, the rule is triggered again at the digit `4` till the digit `3`. And then later, at the digit `6`, the rule is triggered as well.

Out of the above main loop, we need to handle some corner cases to make the solution more complete.

- case 1). when we get out of the main loop, we removed `m` digits, which is _less than asked_, _i.e._(`m < k`). In the extreme case, we would not remove any digit for the monotonic increasing sequence in the loop, _i.e._ `m==0`. In this case, we just need to remove the additional `k-m` digits from the tail of the sequence.

- case 2). once we remove all the `k` digits from the sequence, there could be some leading zeros left. To format the final number, we need to strip off those leading zeros.

- case 3). we might end up removing all numbers from the sequence. In this case, we should return zero, instead of empty string.

Here are some sample implementations.

<iframe src="https://leetcode.com/playground/Zv456emo/shared" frameBorder="0" width="100%" height="500" name="Zv456emo"></iframe>

**Complexity Analysis**

* Time complexity : $$\mathcal{O}(N)$$. Although there are nested loops, the inner loop is bounded to be run at most $$k$$ times globally. Together with the outer loop, we have the exact $$(N + k)$$ number of operations. Since $$0 < k \le N$$, the time complexity of the main loop is bounded within $$2N$$.
For the logic outside the main loop, it is clear to see that their time complexity is $$\mathcal{O}(N)$$. As a result, the overall time complexity of the algorithm is $$\mathcal{O}(N)$$.

* Space complexity : $$\mathcal{O}(N)$$. We have a stack which would hold all the input digits in the worst case.