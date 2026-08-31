# [Readability][C++/Java/Python] O(n) Well commented code that explains the math

**Author:** UgoTan
**Votes:** 11
**Link:** [https://leetcode.com/problems/number-of-same-end-substrings/solutions/4372513/](https://leetcode.com/problems/number-of-same-end-substrings/solutions/4372513/)

---

# Complexity

- Time complexity: $$O(26n + q)$$
- Space complexity: $$O(26n + q)$$

# Code

```cpp []
class Solution {
 public:
  vector<int> sameEndSubstringCount(string s, vector<vector<int>>& queries) {
    vector<int> ans;
    vector<int> count(26);
    // counts[i] := the count of s[0..i)
    vector<vector<int>> counts = {count};

    for (const char c : s) {
      ++count[c - 'a'];
      counts.push_back(count);
    }

    for (const vector<int>& query : queries) {
      const int l = query[0];
      const int r = query[1];
      int sameEndCount = 0;
      for (char c = 'a'; c <= 'z'; ++c) {
        //   the count of s[0..r + 1) - the count of s[0..l)
        // = the count of s[l..r]
        const int freq = counts[r + 1][c - 'a'] - counts[l][c - 'a'];
        //   C(freq, 2) + freq
        // = freq * (freq - 1) / 2 + freq
        // = freq * (freq + 1) / 2
        sameEndCount += freq * (freq + 1) / 2;
      }
      ans.push_back(sameEndCount);
    }

    return ans;
  }
};
```
```java []
class Solution {
  public int[] sameEndSubstringCount(String s, int[][] queries) {
    int[] ans = new int[queries.length];
    int[] count = new int[26];
    // counts[i] := the count of s[0..i)
    int[][] counts = new int[s.length() + 1][26];

    for (int i = 0; i < s.length(); i++) {
      ++count[s.charAt(i) - 'a'];
      System.arraycopy(count, 0, counts[i + 1], 0, 26);
    }

    for (int i = 0; i < queries.length; ++i) {
      final int l = queries[i][0];
      final int r = queries[i][1];
      int sameEndCount = 0;
      for (char c = 'a'; c <= 'z'; ++c) {
        //   the count of s[0..r + 1) - the count of s[0..l)
        // = the count of s[l..r]
        final int freq = counts[r + 1][c - 'a'] - counts[l][c - 'a'];
        //   C(freq, 2) + freq
        // = freq * (freq - 1) / 2 + freq
        // = freq * (freq + 1) / 2
        sameEndCount += freq * (freq + 1) / 2;
      }
      ans[i] = sameEndCount;
    }

    return ans;
  }
}
```
```python []
class Solution:
  def sameEndSubstringCount(self, s: str, queries: List[List[int]]) -> List[int]:
    count = collections.Counter()
    # counts[i] := the count of s[0..i)
    counts = [count.copy()]

    for c in s:
      count[c] += 1
      counts.append(count.copy())

    ans = []

    for l, r in queries:
      sameEndCount = 0
      for c in string.ascii_lowercase:
        #   the count of s[0..r] - the count of s[0..l - 1]
        # = the count of s[l..r]
        freq = counts[r + 1][c] - counts[l][c]
        #   C(freq, 2) + freq
        # = freq * (freq - 1) / 2 + freq
        # = freq * (freq + 1) / 2
        sameEndCount += freq * (freq + 1) // 2
      ans.append(sameEndCount)

    return ans
```
