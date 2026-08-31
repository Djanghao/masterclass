# Multiply Permutations

**Author:** votrubac
**Votes:** 20
**Link:** [https://leetcode.com/problems/count-anagrams/solutions/2947480/](https://leetcode.com/problems/count-anagrams/solutions/2947480/)

---

We count permutations of each word, and multiply those permutatons.

The number of permutations with repetitions is a factorial of word lenght, divided by factorial of count of each character.

**Python 3**
Python developers are in luck due to `factorial` and large integer support.

```python
class Solution:
    def countAnagrams(self, s: str) -> int:
        res = 1
        for w in s.split(" "):
            cnt, prem = Counter(w), factorial(len(w))
            for rep in cnt.values():
                prem = prem // factorial(rep)
            res = res * prem % 1000000007
        return res
```
**C++**
Need to pre-compute factorials and inverse modulos (to simulate divisions).

```cpp
int fact[100001] = {1, 1}, inv_fact[100001] = {1, 1}, mod = 1000000007;
class Solution {
public: 
int countAnagrams(string s) {
    if (fact[2] == 0) {
        vector<int> inv(100001, 1);
        for (long long i = 2; i < sizeof(fact) / sizeof(fact[0]); ++i) {
            fact[i] = i * fact[i - 1] % mod;
            inv[i] = mod - mod / i * inv[mod % i] % mod;
            inv_fact[i] = 1LL * inv_fact[i - 1] * inv[i] % mod;            
        }
    }
    int res = 1;
    for (int i = 0, j = 0; i <= s.size(); ++i)
        if (i == s.size() || s[i] == ' ') {
            long long cnt[26] = {}, prem = fact[i - j];
            for (int k = j; k < i; ++k)
                ++cnt[s[k] - 'a'];
            for (int rep : cnt)
                prem = prem * inv_fact[rep] % mod;
            res = res * prem % mod;
            j = i + 1;
        }
    return res;
}
};
```