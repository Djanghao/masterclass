# C++ O(n) | O(1), two vectors

**Author:** votrubac
**Votes:** 289
**Link:** [https://leetcode.com/problems/find-common-characters/solutions/247573/](https://leetcode.com/problems/find-common-characters/solutions/247573/)

---

**Python 3**
The `&` operation for counters results in minumum counters for each element. 
```python
class Solution:
    def commonChars(self, words: List[str]) -> List[str]:
        return reduce(lambda a, b: a & b, map(Counter, words)).elements()
```
**C++**
For each string, we count characters in ```cnt1```. Then, we track the minimum count for each character in ```cnt```.

```cpp
vector<string> commonChars(vector<string>& A) {
  vector<int> cnt(26, INT_MAX);
  vector<string> res;
  for (auto s : A) {
    vector<int> cnt1(26, 0);
    for (auto c : s) ++cnt1[c - 'a'];
    for (auto i = 0; i < 26; ++i) cnt[i] = min(cnt[i], cnt1[i]);
  }
  for (auto i = 0; i < 26; ++i)
    for (auto j = 0; j < cnt[i]; ++j) res.push_back(string(1, i + 'a'));
  return res;
}
```
## Complexity Analysis
Runtime: *O(n)*, where *n* is the total number of characters.
Memory: *O(1)* (we use two fixed-size vectors).