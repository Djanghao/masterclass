# Official Solution

**Link:** [https://leetcode.com/problems/output-contest-matches/solution/](https://leetcode.com/problems/output-contest-matches/solution/)

---

[TOC]

---
### Approach #1: Simulation [Accepted]

**Intuition**

Let `team[i]` be the correct team string of the `i`-th strongest team for that round. We will maintain these correctly as the rounds progress.

**Algorithm**

In each round, the `i`-th team becomes `"(" + team[i] + "," + team[n-1-i] + ")"`, and then there are half as many teams.

<iframe src="https://leetcode.com/playground/ZiEMnc68/shared" frameBorder="0" width="100%" height="276" name="ZiEMnc68"></iframe>

**Complexity Analysis**

* Time Complexity: $$O(N \log N)$$. Each of $$O(\log N)$$ rounds performs $$O(N)$$ work.

* Space Complexity: $$O(N \log N)$$.

---
### Approach #2: Linear Write [Accepted]

**Intuition**

Let's try to solve the problem in linear time. We can treat this problem as two separate problems: outputting the correct sequence of parentheses and commas and outputting the correct team number. With a little effort, one can be convinced that a linear time solution probably exists.

**Algorithm**

Let's focus on the parentheses first. We can use recursion to find the answer. For example, when `N = 8`, let `R = log_2(N) = 3` be the number of rounds. The parentheses and commas look like this:

```python
(((x,x),(x,x)),((x,x),(x,x)))
```

But this is just recursively
```python
"(" + (sequence for R = 2) + "," + (sequence for R = 2) + ")"
= "(" + "((x,x),(x,x))" + "," + "((x,x),(x,x))" + ")"
```

Now let's look at the team numbers. For `N = 16`, the team numbers are:

`team = [1, 16, 8, 9, 4, 13, 5, 12, 2, 15, 7, 10, 3, 14, 6, 11]`

One thing we might notice is that adjacent numbers sum to `17`. More specifically, indices that are 0 and 1 (mod 2) sum to `17`. Also, indices 0 and 2 (mod 4) sum to `9`, indices 0 and 4 (mod 8) sum to `5`, and so on.

The pattern in general is: indices `0` and `2**r` (mod `2**(r+1)`) sum to `N * 2**-r + 1`.

If we want to find the next `team[i]`, then the lowest bit of `i` will help determine its lower neighbor. For example, `team[12] = team[0b1100]` has a lower bit `w = 4 = 0b100`, so `12` has a lower neighbor `12 - w = 8`, and also those team numbers sum to `N / w + 1`.

<iframe src="https://leetcode.com/playground/hEwxZHky/shared" frameBorder="0" width="100%" height="497" name="hEwxZHky"></iframe>

**Complexity Analysis**

* Time Complexity: $$O(N)$$. We print each of the $$O(N)$$ characters in order.

* Space Complexity: $$O(N)$$.