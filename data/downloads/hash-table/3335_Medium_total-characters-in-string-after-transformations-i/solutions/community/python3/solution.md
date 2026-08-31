# String Evolution: The Transformation Challenge ✅🔥 || EASY CPP HASHING SOLUTION

**Author:** ankit_kumar12345
**Votes:** 50
**Link:** [https://leetcode.com/problems/total-characters-in-string-after-transformations-i/solutions/5972920/](https://leetcode.com/problems/total-characters-in-string-after-transformations-i/solutions/5972920/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
The approach counts character frequencies and updates them for t transformations to calculate the final length without creating a large string, making it more efficient than brute force.

# Complexity
- Time complexity:
- 0(T*26)

- Space complexity:
O(26)

# Code
```c++ []
class Solution {
public:
    int lengthAfterTransformations(string s, int t) {
        const int MOD = 1e9 + 7;
        vector<long long> cnt(26, 0);

        for (char c : s) {
            cnt[c - 'a']++;
        }

        for (int j = 0; j < t; j++) {
            vector<long long> tmp(26, 0);
            for (int i = 0; i < 26; i++) {
                if (i == 25) {
                    tmp[0] = (tmp[0] + cnt[i]) % MOD;
                    tmp[1] = (tmp[1] + cnt[i]) % MOD;
                } else {
                    tmp[i + 1] = (tmp[i + 1] + cnt[i]) % MOD;
                }
            }
            cnt = tmp;
        }

        long long len = 0;
        for (long long c : cnt) {
            len = (len + c) % MOD;
        }

        return len;
    }
};
```
```javascript []
class Solution {
    lengthAfterTransformations(s, t) {
        const MOD = 1e9 + 7;
        const cnt = new Array(26).fill(0);

        for (const c of s) {
            cnt[c.charCodeAt(0) - 'a'.charCodeAt(0)]++;
        }

        for (let j = 0; j < t; j++) {
            const tmp = new Array(26).fill(0);
            for (let i = 0; i < 26; i++) {
                if (i === 25) {
                    tmp[0] = (tmp[0] + cnt[i]) % MOD;
                    tmp[1] = (tmp[1] + cnt[i]) % MOD;
                } else {
                    tmp[i + 1] = (tmp[i + 1] + cnt[i]) % MOD;
                }
            }
            cnt.splice(0, 26, ...tmp); // Update cnt with tmp values
        }

        return cnt.reduce((len, c) => (len + c) % MOD, 0);
    }
}


```
```python []
class Solution:
    def lengthAfterTransformations(self, s: str, t: int) -> int:
        MOD = 10**9 + 7
        cnt = [0] * 26

        for c in s:
            cnt[ord(c) - ord('a')] += 1

        for _ in range(t):
            tmp = [0] * 26
            for i in range(26):
                if i == 25:
                    tmp[0] = (tmp[0] + cnt[i]) % MOD
                    tmp[1] = (tmp[1] + cnt[i]) % MOD
                else:
                    tmp[i + 1] = (tmp[i + 1] + cnt[i]) % MOD
            cnt = tmp

        return sum(cnt) % MOD

```
```Java []
class Solution {
    public int lengthAfterTransformations(String s, int t) {
        final int MOD = 1000000007;
        long[] cnt = new long[26];

        for (char c : s.toCharArray()) {
            cnt[c - 'a']++;
        }

        for (int j = 0; j < t; j++) {
            long[] tmp = new long[26];
            for (int i = 0; i < 26; i++) {
                if (i == 25) {
                    tmp[0] = (tmp[0] + cnt[i]) % MOD;
                    tmp[1] = (tmp[1] + cnt[i]) % MOD;
                } else {
                    tmp[i + 1] = (tmp[i + 1] + cnt[i]) % MOD;
                }
            }
            cnt = tmp;
        }

        long len = 0;
        for (long c : cnt) {
            len = (len + c) % MOD;
        }

        return (int) len;
    }
}

```


![upvote.jpg](./images/0.jpeg)