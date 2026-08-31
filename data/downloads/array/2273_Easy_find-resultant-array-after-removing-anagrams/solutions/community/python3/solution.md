# Weird Description

**Author:** votrubac
**Votes:** 54
**Link:** [https://leetcode.com/problems/find-resultant-array-after-removing-anagrams/solutions/2039752/](https://leetcode.com/problems/find-resultant-array-after-removing-anagrams/solutions/2039752/)

---

Misread this question 2 times and wasted like 20 minutes. 

**Python 3**
Wanted to bubble-up this solution by one of our humble commenters below (whose name rhymes with batman). 

Apparently, `itertools.groupby` groups *consecutive* elements by a key (which is `sorted` here). And `next` takes the first element from that group.

It pays to learn vast and powerful Python libraries.

```python
class Solution:
    def removeAnagrams(self, w: List[str]) -> List[str]:
        return [next(g) for _, g in groupby(w, sorted)]
```

Original Solution
```python
class Solution:
    def removeAnagrams(self, w: List[str]) -> List[str]:
        return [w[i] for i in range(0, len(w)) if i == 0 or sorted(w[i]) != sorted(w[i - 1])]
```
#### Silly Hash
This solution won't work if there are hash collisions (unless we add a check). The idea is to compute a hash using characters value but not position. 

If the size of words is limited to 10, computing a hash would be faster than comparing counter for 26 characters.

**C++**
```cpp
vector<string> removeAnagrams(vector<string>& words) {
    long long hash = -1;
    vector<string> res;
    for (auto &w : words)
        if (auto new_hash = accumulate(begin(w), end(w), 0LL, [](long long s, char ch){ return s + (1 << (ch - 'a')); });
            hash != new_hash) {
            res.push_back(w);
            hash = new_hash;
        }
    return res;
}
```