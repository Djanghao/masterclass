# [Java/C++/Python] O(1) Greedy Solution with Explanation

**Author:** lee215
**Votes:** 57
**Link:** [https://leetcode.com/problems/minimum-deletions-to-make-array-beautiful/solutions/1887031/](https://leetcode.com/problems/minimum-deletions-to-make-array-beautiful/solutions/1887031/)

---

# **Solution 1**
Greedily add all element to a result array.

Anyway, greedy solution is not obvious to be right.
To handle every continuous elements pair, we actually only care if the number of deleted numbers is even or single.

We never need to delete a number when not necessary to optimize the deleting in future, because the benefit is at most 1.
It doesn't worth an early deletion.

Time `O(n)`
Space `O(n)`
<br>

**Python**
```py
    def minDeletion(self, A):
        res = []
        for a in A:
            if len(res) % 2 == 0 or a != res[-1]:
                res.append(a)
        return len(A) - (len(res) - len(res) % 2)
```
<br>

# **Solution 2: Space O(1)**
Using a variable `pre` to record the last element with even index.

**Java**
```java
    public int minDeletion(int[] A) {
        int res = 0, pre = -1;
        for (int a : A) {
            if (a == pre)
                res++;
            else
                pre = pre < 0 ? a : -1;
        }
        return pre < 0 ? res : res + 1;
    }
```

**C++**
```cpp
    int minDeletion(vector<int>& A) {
        int res = 0, pre = -1;
        for (int& a: A) {   
            if (a == pre)
                res++;
            else
                pre = pre < 0 ? a : -1;
        }
        return res + (pre >= 0);
    }
```
**Python**
```py
    def minDeletion(self, A):
        res, pre = 0, -1
        for a in A:
            if a == pre:
                res += 1
            else:
                pre = a if pre < 0 else -1
        return res + (pre >= 0)
```
