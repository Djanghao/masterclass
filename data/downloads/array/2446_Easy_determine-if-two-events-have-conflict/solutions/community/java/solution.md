# [Java/C++/Python] Easy 1-liner Solutions

**Author:** lee215
**Votes:** 136
**Link:** [https://leetcode.com/problems/determine-if-two-events-have-conflict/solutions/2734120/](https://leetcode.com/problems/determine-if-two-events-have-conflict/solutions/2734120/)

---

# **Similar question**
[836. Rectangle Overlap](https://leetcode.com/problems/rectangle-overlap/discuss/132340/C%2B%2BJavaPython-1-line-Solution-1D-to-2D)
<br>

# **Explanation**
Given 2 segment `[left1, right1]`, `[left2, right2]`,
how can we check whether they overlap?
If these two intervals overlap, it should exist a value `x`,
`left1 <= x <= right1 && left2 <= x <= right2`
so that
`max(left1, left2) <= x <= min(right1, right 2)`
so that
`left1 <= right2 && left2 <= right1`

These two are the sufficient and necessary conditions,
for two interval overlaps.
<br>

# **Complexity**
Time `O(1)`
Space `O(1)`
<br>


# Solution 1
**Java**
```java
    public boolean haveConflict(String[] e1, String[] e2) {
        return e1[0].compareTo(e2[1]) <= 0 && e2[0].compareTo(e1[1]) <= 0;
    }
```
**C++**
```cpp
    bool haveConflict(vector<string>& e1, vector<string>& e2) {
        return e1[0] <= e2[1] && e2[0] <= e1[1];
    }
```

**Python**
```py
    def haveConflict(self, e1, e2):
        return e1[0] <= e2[1] and e2[0] <= e1[1]
```
<br>

# Solution 2
**C++**
```cpp
    bool haveConflict(vector<string>& e1, vector<string>& e2) {
        return max(e1[0], e2[0]) <= min(e1[1], e2[1]);
    }
```

**Python**
```py
    def haveConflict(self, e1, e2):
        return max(e1[0],e2[0]) <= min(e1[1],e2[1])
```
