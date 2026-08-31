# [Java/C++/Python] Bit by Bit, Same as 421

**Author:** lee215
**Votes:** 31
**Link:** [https://leetcode.com/problems/maximum-strong-pair-xor-ii/solutions/4278213/](https://leetcode.com/problems/maximum-strong-pair-xor-ii/solutions/4278213/)

---

# **Intuition**
Almost same as [421. Maximum XOR of Two Numbers in an Array](https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/).

In extreme case,
all pairs satisfy the condition `|x - y| <= min(x, y)`,
then it's exactly same as 421,
so need to check and understand 421 first.
<br>

# **Explanation**
In 421, we only care about the binary prefix of element `A[i]`.
In this problem, we have one more condition that `|x - y| <= min(x, y)`.

Assume `x >= y`,
then `x - y <= y`
then `x <= y * 2`.

We use `pref[p]` to record the minimum `a` with a prefix `p`,
and use `pref2[p]` to record the maximum `a` with a prefix `p`.
The above condition become `pref[x] <= pref2[y] * 2`, where `x` and `y` is the prefix.
<br>

# **Complexity**
Time `O(20n)`
Space `O(20n)`
<br>

**Java**
```java
    public int maximumStrongPairXor(int[] A) {
        int res = 0;
        for (int i = 20; i >= 0; i--) {
            res <<= 1;
            HashMap<Integer, Integer> pref = new HashMap<>(), pref2 = new HashMap<>();
            for (int a : A) {
                int p = a >> i;
                if (!pref.containsKey(p)) {
                    pref.put(p, a);
                    pref2.put(p, a);
                }
                pref.put(p, Math.min(pref.get(p), a));
                pref2.put(p, Math.max(pref2.get(p), a));
            }
            for (int x : pref.keySet()) {
                int y = res ^ 1 ^ x;
                if (x >= y && pref.containsKey(y) && pref.get(x) <= pref2.get(y) * 2) {
                    res |= 1;
                    break;
                }
            }
        }
        return res;
    }
```

**C++**
```cpp
    int maximumStrongPairXor(vector<int>& A) {
        int res = 0;
        for (int i = 20; i >= 0; --i) {
            res <<= 1;
            unordered_map<int, int> pref, pref2;
            for (int& a : A) {
                int p = a >> i;
                if (pref.find(p) == pref.end())
                    pref[p] = pref2[p] = a;
                pref[p] = min(pref[p], a);
                pref2[p] = max(pref2[p], a);
            }
            for (auto& it: pref) {
                int x = it.first, y = res ^ 1 ^ x;
                if (x >= y && pref.count(y) && pref[x] <= pref2[y] * 2) {
                    res |= 1;
                    break;
                }
            }
        }
        return res;
    }
```

**Python**
```py
    def maximumStrongPairXor(self, A: List[int]) -> int:
        res = 0
        for i in range(20, -1, -1):
            res <<= 1
            pref, pref2 = {}, {}
            for a in A:
                p = a >> i
                if p not in pref:
                    pref[p] = pref2[p] = a
                pref[p] = min(pref[p], a)
                pref2[p] = max(pref2[p], a)
            for x in pref:
                y = res ^ 1 ^ x
                if x >= y and y in pref and pref[x] <= pref2[y] * 2:
                    res |= 1
                    break
        return res
```
