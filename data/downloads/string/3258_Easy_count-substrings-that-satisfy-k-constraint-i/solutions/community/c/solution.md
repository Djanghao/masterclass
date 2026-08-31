# Concise Sliding Window Solution | C++, Python, Java

**Author:** not_yl3
**Votes:** 4
**Link:** [https://leetcode.com/problems/count-substrings-that-satisfy-k-constraint-i/solutions/5656907/](https://leetcode.com/problems/count-substrings-that-satisfy-k-constraint-i/solutions/5656907/)

---

# Approach
<!-- Describe your approach to solving the problem. -->
We need to count the number of substrings in `s` such that the number of `0's` and `1's` in each substring does not exceed $$k$$.

Instead of iterating over every substring in `s`, we can use a sliding window approach to count the number of substrings, going from an exponential complexity to linear ($$O(n)$$). We use `l` and `r` to represent the boundaries for each window. Also, we use `ones` and `zeros` to represent the counts for the number of ones and zeros and each substring/window.

We expand the window in each iteration and increment `ones` and `zeros` accordingly. If at any point both `ones` and `zeros` becomes greater than $$k$$, we shrink the window from the left side while also decrementing `ones` and `zeros` accordingly. Then at the end of each iteration, we add the number of subarrays that we can create out of the current window (represented by `r - l + 1`) to `res`. We can do this since if we have a valid substring from `s[l]..s[r]` inclusive, then every substring of it is also a valid substring since the counts for zeros and ones would also be less than $$k$$.
# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```C++ []
class Solution {
public:
    int countKConstraintSubstrings(string s, int k) {
        int res = 0, ones = 0, zeros = 0;
        for (int l = 0, r = 0; r < s.length(); r++){
            s[r] == '0' ? zeros++ : ones++;
            while (ones > k && zeros > k)
                s[l++] == '0' ? zeros-- : ones--;
            res += (r - l + 1);
        }
        return res;
    }
};
```
```python []
class Solution:
    def countKConstraintSubstrings(self, s: str, k: int) -> int:
        res = l = 0
        counts = [0, 0]
        for r, c in enumerate(s):
            counts[c == '1'] += 1
            while counts[0] > k and counts[1] > k:
                counts[s[l] == '1'] -= 1
                l += 1
            res += (r - l + 1)
        return res
```
```Java []
class Solution {
    public int countKConstraintSubstrings(String s, int k) {
        int res = 0, counts[] = new int[2];
        for (int l = 0, r = 0; r < s.length(); r++){
            counts[s.charAt(r) == '1' ? 1 : 0]++;
            while (counts[0] > k && counts[1] > k)
                counts[s.charAt(l++) == '1' ? 1 : 0]--;
            res += (r - l + 1);
        }
        return res;
    }
}
```
