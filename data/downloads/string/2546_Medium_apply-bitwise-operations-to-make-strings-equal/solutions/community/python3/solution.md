# [Java/Python 3] Analysis results short codes.

**Author:** rock
**Votes:** 12
**Link:** [https://leetcode.com/problems/apply-bitwise-operations-to-make-strings-equal/solutions/3083931/](https://leetcode.com/problems/apply-bitwise-operations-to-make-strings-equal/solutions/3083931/)

---

**If a string contains no `1`, then there is no way to change it any longer;  If a string contains at least a `1`, there is no way to change it to an all-zero string,  under the rules of the problem.**

Otherwise, we can always  change `s` to `target`.

```java
    public boolean makeStringsEqual(String s, String target) {
        if (!s.contains("1") || !target.contains("1")) {
            return s.equals(target);
        }
        return true;
    }
```

```python
    def makeStringsEqual(self, s: str, target: str) -> bool:
        if ('1' not in s) or ('1' not in target):
            return s == target
        return True
```

In case you are interested one liners:

```java
    public boolean makeStringsEqual(String s, String target) {
        return s.equals(target) || s.contains("1") && target.contains("1");
    }
```
```python
    def makeStringsEqual(self, s: str, target: str) -> bool:
        return s == target or ('1' in s) and ('1' in target)
```
or 
```java
    public boolean makeStringsEqual(String s, String target) {
        return s.contains("1") == target.contains("1");
    }
```
```python
    def makeStringsEqual(self, s: str, target: str) -> bool:
        return max(s) == max(target)
```

**Analysis:**

Time: `O(n)`, space: `O(1)`.