# ✅ [Swift, C++, Python, Java]: Easy to Understand and Simple Solution

**Author:** sohagkumarbiswas
**Votes:** 3
**Link:** [https://leetcode.com/problems/extra-characters-in-a-string/solutions/3991506/](https://leetcode.com/problems/extra-characters-in-a-string/solutions/3991506/)

---


# Complexity
- Time complexity: $$O(n^2)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Swift
```
class Solution {
    func minExtraChar(_ s: String, _ dictionary: [String]) -> Int {
        let (n, dictionarySet) = (s.count, Set(dictionary))
        var dp = Array(repeating: n, count: n + 1)
        dp[0] = 0
        
        for i in 1...n {
            for j in 0..<i {
                if dictionarySet.contains(String(s[s.index(s.startIndex, offsetBy: j)..<s.index(s.startIndex, offsetBy: i)])) {
                    dp[i] = min(dp[i], dp[j])

                } else {
                    dp[i] = min(dp[i], dp[j] + i - j)
                }
            }
        }
        return dp[n]
    }
}

```
# C++
```
class Solution {
 public:
  int minExtraChar(string s, vector<string>& dictionary) {
    const int n = s.length();
    const unordered_set<string> dictionarySet{dictionary.begin(),
                                              dictionary.end()};
    vector<int> dp(n + 1, n);
    dp[0] = 0;

    for (int i = 1; i <= n; ++i)
      for (int j = 0; j < i; ++j)
        if (dictionarySet.count(s.substr(j, i - j)))
          dp[i] = min(dp[i], dp[j]);
        
        else
          dp[i] = min(dp[i], dp[j] + i - j);

    return dp[n];
  }
};
```
# Python
```
class Solution:
  def minExtraChar(self, s: str, dictionary: List[str]) -> int:
    n = len(s)
    dictionarySet = set(dictionary)
    dp = [0] + [n] * n

    for i in range(1, n + 1):
      for j in range(i):
        if s[j:i] in dictionarySet:
          dp[i] = min(dp[i], dp[j])

        else:
          dp[i] = min(dp[i], dp[j] + i - j)

    return dp[n]
```
# Java
```
class Solution {
  public int minExtraChar(String s, String[] dictionary) {
    final int n = s.length();
    Set<String> dictionarySet = new HashSet<>(Arrays.asList(dictionary));
    int[] dp = new int[n + 1];
    Arrays.fill(dp, n);
    dp[0] = 0;

    for (int i = 1; i <= n; i++)
      for (int j = 0; j < i; j++)
        if (dictionarySet.contains(s.substring(j, i)))
          dp[i] = Math.min(dp[i], dp[j]);

        else
          dp[i] = Math.min(dp[i], dp[j] + i - j);

    return dp[n];
  }
}
```