# Reversed Rabin-Karp vs. Inverse Modulo

**Author:** votrubac
**Votes:** 76
**Link:** [https://leetcode.com/problems/find-substring-with-given-hash-value/solutions/1730118/](https://leetcode.com/problems/find-substring-with-given-hash-value/solutions/1730118/)

---

Computing hash for each substring will result in O(nk) complexity - too slow.

Rolling hash (Rabin-Karp algorithm) works for sub-strings of the same size, and computes `hash` for the next string in O(1):
- Add `i + 1` character: multiply `hash` by `power` and add `val(s[i + 1])`.
	- This is because 
		- `s[1] * p^k + s[2] * p^(k-1) + s[3]  * p^(k-2) ... + s[k - 1] * p + s[k]` 
	- can be written as 
		- `(...((s[1] * p + s[2]) * p + s[3]) * p ... + s[k - 1]) * p + s[k]`
- Remove `i + 1 - k` character: subtract `val(s[i + 1 - k]) * power ^ k` from `hash`.

Gotchas:
1. The value of `a` is `1`, not `0`.
2. The `hashValue` is computed by rolling the hash right-to-left, so we need to do the same.
3. We need to roll all the way to zero because we need to return the first matching string from the left.
4. Make sure we do not go negative when subtracting (add `mod` and make sure the subtracted value is less than `mod`).

> Why can't we go left-to-right, and use inverse modulo to do the division? The reason is that inverse modulo may not exist for a given power and modulo. See approach 2 below.

**C++**
```cpp
string subStrHash(string s, int power, int mod, int k, int hashValue) {
    long long hash = 0, res = 0, power_k = 1;
    auto val = [&](int i){ return s[i] - '`'; };
    for (int i = s.size() - 1; i >= 0; --i) {
        hash = (hash * power + val(i)) % mod;
        if (i < s.size() - k)
            hash = (mod + hash - power_k * val(i + k) % mod) % mod;
        else
            power_k = power_k * power % mod;
        if (hash == hashValue)
            res = i;        
    }
    return s.substr(res, k);
}
```
**Python 3**
```python
class Solution:
    def subStrHash(self, s: str, power: int, mod: int, k: int, hashValue: int) -> str:
        val = lambda ch : ord(ch) - ord("a") + 1
        hash, res, power_k = 0, 0, pow(power, k, mod)
        for i in reversed(range(len(s))):
            hash = (hash * power + val(s[i])) % mod
            if i < len(s) - k:
                hash = (mod + hash - power_k * val(s[i + k]) % mod) % mod
            res = i if hash == hashValue else res
        return s[res:res + k]
```

#### Approach 2: Inverse Modulo
Because inverse modulo only exists if `gcd(power, mod) == 1`, we need to fall back to the right-to-left solution for some test cases.

Even with this fallback, the solution below is 50% faster than the one above. Perhaps there are many test cases where the first substring is close to the left.

**Python 3**
```python
class Solution:
    def subStrHash(self, s: str, power: int, mod: int, k: int, hashValue: int) -> str:
        val = lambda ch : ord(ch) - ord("a") + 1
        hash, res, pow_k, pow_k_1 = 0, 0, pow(power, k, mod), pow(power, k - 1, mod)
        if gcd(power, mod) == 1:
            inverse = pow(power, -1, mod)
            for i in range(len(s)):
                if (i >= k):
                    hash = (mod + hash - val(s[i - k])) % mod
                hash = (hash * inverse + val(s[i]) * pow_k_1) % mod
                if i + 1 >= k and hash == hashValue:
                    return s[i + 1 - k : i + 1]            
        else:
            for i in reversed(range(len(s))):
                hash = (hash * power + val(s[i])) % mod
                if i < len(s) - k:
                    hash = (mod + hash - pow_k * val(s[i + k]) % mod) % mod
                res = i if hash == hashValue else res
            return s[res:res + k]
```