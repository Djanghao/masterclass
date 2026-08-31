# Official Solution

**Link:** [https://leetcode.com/problems/jewels-and-stones/solution/](https://leetcode.com/problems/jewels-and-stones/solution/)

---

[TOC]

---
### Approach #1: Brute Force [Accepted]

**Intuition and Algorithm**

For each stone, check whether it matches any of the jewels.  We can check with a linear scan.

<iframe src="https://leetcode.com/playground/7RiyS8Sr/shared" frameBorder="0" width="100%" height="259" name="7RiyS8Sr"></iframe>

**Complexity Analysis**

* Time Complexity:  $$O(J\text{.length} * S\text{.length}))$$.

* Space Complexity: $$O(1)$$ additional space complexity in Python.  In Java, this can be $$O(J\text{.length} + S\text{.length}))$$ because of the creation of new arrays.

---
### Approach #2: Hash Set [Accepted]

**Intuition and Algorithm**

For each stone, check whether it matches any of the jewels.  We can check efficiently with a *Hash Set*.

<iframe src="https://leetcode.com/playground/UidHi4mv/shared" frameBorder="0" width="100%" height="276" name="UidHi4mv"></iframe>

**Complexity Analysis**

* Time Complexity:  $$O(J\text{.length} + S\text{.length})$$.  The $$O(J\text{.length})$$ part comes from creating `J`.  The $$O(S\text{.length})$$ part comes from searching `S`.

* Space Complexity: $$O(J\text{.length})$$.