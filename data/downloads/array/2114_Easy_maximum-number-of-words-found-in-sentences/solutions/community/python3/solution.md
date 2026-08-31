# Count Spaces

**Author:** votrubac
**Votes:** 115
**Link:** [https://leetcode.com/problems/maximum-number-of-words-found-in-sentences/solutions/1646786/](https://leetcode.com/problems/maximum-number-of-words-found-in-sentences/solutions/1646786/)

---

Count spaces in each sentence, and return `max + 1`. The benefit (comparing to a split method) is that we do not create temporary strings.

**Python 3**
```python
class Solution:
    def mostWordsFound(self, ss: List[str]) -> int:
        return max(s.count(" ") for s in ss) + 1
```

**C++**
```cpp
int mostWordsFound(vector<string>& s) {
    return 1 + accumulate(begin(s), end(s), 0, [](int res, const auto &s) {
        return max(res, (int)count(begin(s), end(s), ' ')); });
}
```

**Java**
```java
public int mostWordsFound(String[] sentences) {
    return 1 + Stream.of(sentences).mapToInt(s -> (int)s.chars().filter(ch -> ch == ' ').count()).max().getAsInt();
}
```