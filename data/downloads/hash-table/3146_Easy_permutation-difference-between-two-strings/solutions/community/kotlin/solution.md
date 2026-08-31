# Store Target Positions

**Author:** votrubac
**Votes:** 17
**Link:** [https://leetcode.com/problems/permutation-difference-between-two-strings/solutions/5146181/](https://leetcode.com/problems/permutation-difference-between-two-strings/solutions/5146181/)

---

We store the position of each letter in the target string in `pos`.

Then, we accumulate and return `abs(i - pos[s[i]])`.

**Kotlin**
```kotlin
fun findPermutationDifference(s: String, t: String): Int {
    val pos = t.withIndex().associate ({it.value to it.index})
    return (0 until s.length).sumBy { abs(it - (pos[s[it]] ?: 0)) }
} 
```

**Python 3**
```python
class Solution:
    def findPermutationDifference(self, s: str, t: str) -> int:
        pos = {ch : i for i, ch in enumerate(t)}
        return sum([abs(i - pos[s[i]]) for i in range(len(s))])
```

**C++**
```cpp
int findPermutationDifference(const string &s, const string &t) {
    int pos[26] = {}, res = 0;
    for (int i = 0; i < t.size(); ++i)
        pos[t[i] - 'a'] = i;
    for (int i = 0; i < s.size(); ++i)
        res += abs(i - pos[s[i] - 'a']);
    return res;
}
```