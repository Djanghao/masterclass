# 26 x Sliding window. Intuition

**Author:** vokasik
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-equal-count-substrings/solutions/4659221/](https://leetcode.com/problems/number-of-equal-count-substrings/solutions/4659221/)

---

***equal count substring** - each unique letter in the substring has frequency exactly equal k*
From the statement we can figure out that the **length** of such a substring is **unique letters x k**

A few examples:
```
k = 3
aaa -> 1 unique x 3
bbb -> 1 unique x 3
aaab -> invalid, because there's 3a and 1b, but should be either 3a3b or 3a
aaabbb, ababab -> 2 unique x 3
abcabcabc, aaabbbccc, aaacbbcbc -> 3 unique x 3
```
> Brute-force
> 
N^3 or N^2. Try all possible substrings `[i, j]` and count the ones that are valid (have len `unique letters x k` and correct letter frequencies - all letter frequencies should be equal `k`)

> Optimized with a sliding window with phat constant 26 (bruteforced sliding window???)
> 
Instead of checking all possible substrings we can optimize the brute-force with **fixed-length** sliding window: the length of a window is `unique letters x k`.

As there's only 26 letters, we can check all possible sliding window sizes: 1 letter x k, 2 letters x k, 3 letters x k, ... 26 letters x k. Thus 26 x N

![image](./images/0.png)

```
class Solution:
    def equalCountSubstrings(self, s: str, k: int) -> int:
        N = len(s)
        count = 0
        for unique_chars in range(1, len(set(s)) + 1):
            if unique_chars * k <= N:
                left = same_freq_count = 0
                freq = Counter()
                for right in range(N):
                    freq[s[right]] += 1
                    same_freq_count += freq[s[right]] == k
                    if right >= unique_chars * k - 1:
                        count += unique_chars == same_freq_count
                        same_freq_count -= freq[s[left]] == k
                        freq[s[left]] -= 1
                        left += 1
        return count
```