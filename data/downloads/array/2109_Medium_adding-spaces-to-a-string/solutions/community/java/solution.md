# [Java/Python 3] 2 methods w/ analysis.

**Author:** rock
**Votes:** 31
**Link:** [https://leetcode.com/problems/adding-spaces-to-a-string/solutions/1635039/](https://leetcode.com/problems/adding-spaces-to-a-string/solutions/1635039/)

---

**Method 1:**

Reversely traverse input.

```java
    public String addSpaces(String s, int[] spaces) {
        StringBuilder ans = new StringBuilder();
        for (int i = s.length() - 1, j = spaces.length - 1; i >= 0; --i) {
            ans.append(s.charAt(i));
            if (j >= 0 && spaces[j] == i) {
                --j;
                ans.append(' ');
            }
        }
        return ans.reverse().toString();
    }
```
```python
    def addSpaces(self, s: str, spaces: List[int]) -> str:
        ans = []
        i = len(s) - 1
        while i >= 0:
            ans.append(s[i])
            if spaces and i == spaces[-1]:
                ans.append(' ')
                spaces.pop()
            i -= 1    
        return ''.join(ans[:: -1])
```

----

Traverse input from left to right.
```java
    public String addSpaces(String s, int[] spaces) {
        StringBuilder ans = new StringBuilder();
        for (int i = 0, j = 0; i < s.length(); ++i) {
            if (j < spaces.length && spaces[j] == i) {
                ans.append(' ');
                ++j;
            }
            ans.append(s.charAt(i));
        }
        return ans.toString();
    }
```
```python
    def addSpaces(self, s: str, spaces: List[int]) -> str:
        ans = []
        j = 0
        for i, c in enumerate(s):
            if j < len(spaces) and i == spaces[j]:
                ans.append(' ')
                j += 1
            ans.append(c)
        return ''.join(ans)
```

----

**Method 2:** -- inspired by and hence credit to **@Himanshu3889**.

```java
    public String addSpaces(String s, int[] spaces) {
        List<String> modified = new ArrayList<>();
        int lo = 0;
        for (int hi : spaces) {
            modified.add(s.substring(lo, hi));
            lo = hi;
        }
        modified.add(s.substring(lo));
        return String.join(" ", modified);
    }
```

```python
    def addSpaces(self, s: str, spaces: List[int]) -> str:
        modified = []
        for lo, hi in pairwise([0, *spaces, len(s)]):
            modified.append(s[lo : hi])
        return ' '.join(modified)
```
**Analysis:**

Time & space: `O(n)`, where `n = s.length().`