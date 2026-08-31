# Official Solution

**Link:** [https://leetcode.com/problems/baseball-game/solution/](https://leetcode.com/problems/baseball-game/solution/)

---

### Approach #1: Stack [Accepted]

**Intuition and Algorithm**

Let's maintain the value of each valid round on a stack as we process the data. A stack is ideal since we only deal with operations involving the last or second-last valid round.

<iframe src="https://leetcode.com/playground/FRAbgcgJ/shared" frameBorder="0" name="FRAbgcgJ" width="100%" height="462"></iframe>

**Complexity Analysis**

* Time Complexity: $$O(N)$$, where $$N$$ is the length of `ops`. We parse through every element in the given array once, and do $$O(1)$$ work for each element.

* Space Complexity: $$O(N)$$, the space used to store our `stack`.