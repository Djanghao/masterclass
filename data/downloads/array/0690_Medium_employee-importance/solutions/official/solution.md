# Official Solution

**Link:** [https://leetcode.com/problems/employee-importance/solution/](https://leetcode.com/problems/employee-importance/solution/)

---

[TOC]

### Approach #1: Depth-First Search [Accepted]

**Intuition and Algorithm**

Let's use a hashmap `emap = {employee.id -> employee}` to query employees quickly.

Now to find the total importance of an employee, it will be the importance of that employee, plus the total importance of each of that employee's subordinates.  This is a straightforward depth-first search.

<iframe src="https://leetcode.com/playground/jnJd8b9P/shared" frameBorder="0" width="100%" height="361" name="jnJd8b9P"></iframe>


**Complexity Analysis**

* Time Complexity: $$O(N)$$, where $$N$$ is the number of employees. We might query each employee in `dfs`.

* Space Complexity: $$O(N)$$, the size of the implicit call stack when evaluating `dfs`.