# [Java/Python 3] 2 methods w/ brief explanation and analysis.

**Author:** rock
**Votes:** 102
**Link:** [https://leetcode.com/problems/move-pieces-to-obtain-a-string/solutions/2261392/](https://leetcode.com/problems/move-pieces-to-obtain-a-string/solutions/2261392/)

---


**Intuition:**

Since `L`s and `R`s can ONLY move to empty spaces and can NOT swap, the sequences containing all `L`s and `R`s and only `L`s and `R`s of `start` and `target` must be same;
Since `L`s and `R`s can move to left and right only respectively, all positions of `L`s in `start` must be no less than the corresponding ones in `target`, and all positions of `R`s in `start` must be no greater than the corresponding ones in `target`.

Based on the above conclusion we can implement an algorithm as follows:

**Algorithm:**

1. Check if `start` and `target` are same if without `_`'s;
2. Check if all positions of `L`'s in `start` are no less than those in `target`;
3. Check if all positions of `R`'s in `start` are no greater than those in `target`;
4. If all above 3 are yes, return true; otherwise return false.

----

**Method 1: Compare the sequences and the indices of 'L' and 'R'.**

Credit to **@Thoyajkiran** for removal of redundant code.
```java
    public boolean canChange(String start, String target) {
        if (!(start.replaceAll("_", "")).equals(target.replaceAll("_", ""))) {
            return false;
        }
        for (int i = 0, j = 0, n = start.length(); i < n && j < n; ++i, ++j) {
            while (i < n && start.charAt(i) == '_') {
                ++i;
            }
            while (j < n && target.charAt(j) == '_') {
                ++j;
            }
            if (i < n && j < n && (start.charAt(i) == 'L' && i < j || target.charAt(j) == 'R' && i > j)) {
                return false;
            }
        }
        return true;
    }
```
```python
    def canChange(self, start: str, target: str) -> bool:
        if start.replace('_', '') != target.replace('_', ''):
            return False
        i = j = 0
        n = len(start)
        while i < n and j < n:
            while i < n and start[i] == '_':
                i += 1
            while j < n and target[j] == '_':
                j += 1
            if i < n and j < n and (start[i] == 'L' and i < j or start[i] == 'R' and i > j):
                return False
            i += 1
            j += 1
        return True
```


**Analysis:**

`replace` and `for loop` contribute `O(n)` time complexity respectively. Each character at most visited twice, hence:

Time & space: `O(n)`, where `n = start.length()`.

----

We can optimize the space:

```java
     public boolean canChange(String start, String target) {
        int i = 0, j = 0, n = start.length();
        while (i < n || j < n) {
            while (i < n && start.charAt(i) == '_') {
                ++i;
            }
            while (j < n && target.charAt(j) == '_') {
                ++j;
            }
            if (i == n || j == n) {
                return i == j;
            }
            if (start.charAt(i) != target.charAt(j) || 
                        start.charAt(i) == 'L' && i < j ||
                        start.charAt(i) == 'R' && i > j) {
                return false;
            }
            ++i;
            ++j;
        }
        return true;
    }
```
```python
    def canChange(self, start: str, target: str) -> bool:
        i = j = 0
        n = len(start)
        while i < n or j < n:
            while i < n and start[i] == '_':
                i += 1
            while j < n and target[j] == '_':
                j += 1
            if i == n or j == n:
                return i == j
            if start[i] != target[j] or \\
                    start[i] == 'L' and i < j or \\
                    start[i] == 'R' and i > j:   
                return False
            i += 1
            j += 1
        return True
```

**Analysis:**

`for loop` contribute `O(n)` time complexity. Each character  visited once, hence:

Time: `O(n)`, space: `O(1)`, where `n = start.length()`.

----

**Method 2: Count the balance of 'L's and 'R's.** -- inspired by and hence credit to **@kreakEmp** 

```java
    public boolean canChange(String start, String target) {
        int balanceL = 0, balanceR = 0;
        for (int i = 0, n = start.length(); i < n; ++i) {
            char s = start.charAt(i), t = target.charAt(i);
            balanceL += t == 'L' ? 1 : 0;
            balanceR += s == 'R' ? 1 : 0;
            // If both balancers > 0, there must be different 
            // 'L...R...' subsequence between start and target.
            if (balanceL * balanceR != 0) {
                return false;
            }
            balanceL -= s == 'L' ? 1 : 0;
            balanceR -= t == 'R' ? 1 : 0;
            if (balanceL < 0 || balanceR < 0) {
                return false;
            }
        }
        return balanceL == 0 && balanceR == 0;
    }
```
```python
    def canChange(self, start: str, target: str) -> bool:
        balance_L = balance_R = 0
        for s, t in zip(start, target):
            balance_L += (t == 'L')
            balance_R += (s == 'R')
            # If both balancers > 0, there must be different 
            # 'L...R...'subsequence between start and target.  
            if balance_L * balance_R != 0:
                return False
            balance_L -= (s == 'L')
            balance_R -= (t == 'R')
            if balance_L < 0 or balance_R < 0:
                return False
        return balance_L == balance_R == 0
```

**Analysis:**

`for loop` contribute `O(n)` time complexity. Each character  visited once, hence:

Time: `O(n)`, space: `O(1)`, where `n = start.length()`.
