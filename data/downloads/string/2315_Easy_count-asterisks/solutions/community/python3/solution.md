# [Java/Python 3] Count after bars reach even, w/ brief explanation and analysis.

**Author:** rock
**Votes:** 15
**Link:** [https://leetcode.com/problems/count-asterisks/solutions/2196109/](https://leetcode.com/problems/count-asterisks/solutions/2196109/)

---

Traverse input `s` and check the number of bars (`|`), whenever it reaches even numbers, we are outside of the pairs, then count the stars (`*`) in.

```java
    public int countAsterisks(String s) {
        int star = 0;
        boolean barEven = true;
        for (int i = 0; i < s.length(); ++i) {
            char c = s.charAt(i);
            if (c == '|') {
                barEven = !barEven;
            }else if (c == '*' && barEven) {
                ++star;
            }
        }
        return star;
    }
```
```python
    def countAsterisks(self, s: str) -> int:
        bar_even, star = True, 0
        for c in s:
            if c == '|':
                bar_even = not bar_even
            elif c == '*' and bar_even:
                star += 1   
        return star
```

**Analysis:**

Time: `O(n)`, space: `O(1)`, where `n = s.length()`.

----

1 liners: 

The following codes: credit to **@stefan4trivia**

```java
    public int countAsterisks(String s) {
        return s.replaceAll("\\\\|.*?\\\\||[^*]", "").length();
    }
```
```python
    def countAsterisks(self, s: str) -> int:
        return re.sub(r'\\|.*?\\|', '', s).count('*')
```
----

The following Py 3 code: credit to **@WilmerKrisp**

```python
    def countAsterisks(self, s: str) -> int:
        return (''.join(s.split('|')[::2])).count('*')
```

**Analysis:**

Time & space: `O(n)`, where `n = s.length()`.
	