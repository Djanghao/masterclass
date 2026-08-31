# Count Pairs

**Author:** votrubac
**Votes:** 72
**Link:** [https://leetcode.com/problems/maximum-palindromes-after-operations/solutions/4708768/](https://leetcode.com/problems/maximum-palindromes-after-operations/solutions/4708768/)

---

We count all characters in all words.

If we have two of the same character, we have a pair.

If we have `n` pairs, we can make a palindrome of size `2 * n`, or `2 * n + 1`.

To make as many palindromes as possible, we sort our words by size (shortest to longest).

Then, we count how many palindromes we can make before we run out of pairs.

> It actually does not matter if the string size is even or odd. After we finish making palindromes, we can use remaning chars to fit the middle of odd strings.
> We will always have enough remainign chars, as the total number of chars does not change.

**Python 3**
```python
class Solution:
    def maxPalindromesAfterOperations(self, words: List[str]) -> int:
        cnt, res = Counter([ch for w in words for ch in w]), 0
        pairs = sum(char_cnt // 2 for char_cnt in cnt.values())
        for sz in sorted([len(w) for w in words]):
            pairs -= sz // 2
            res += pairs >= 0
        return res
```

**C++**
```cpp
int maxPalindromesAfterOperations(vector<string>& words) {
    int cnt[26] = {}, pairs = 0, res = 0;
    vector<int> sizes;
    for (const auto &w : words) {
        for (char ch : w)
            pairs += (++cnt[ch - 'a']) % 2 == 0;
        sizes.push_back(w.size());
    }
    sort(begin(sizes), end(sizes));
    for (int sz : sizes) {
        pairs -= sz / 2;
        res += pairs >= 0;
    }
    return res;
}
```