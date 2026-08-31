# Counting and Sorting | C++, Python, Java

**Author:** not_yl3
**Votes:** 7
**Link:** [https://leetcode.com/problems/minimum-number-of-pushes-to-type-word-ii/solutions/5593827/](https://leetcode.com/problems/minimum-number-of-pushes-to-type-word-ii/solutions/5593827/)

---

# Approach
<!-- Describe your approach to solving the problem. -->
We can use a hashmap or array `freq` to store the frequency of each letter in `word`. Once we add the count of each letter from `word` to `freq`, we sort the array in descending order. After sorting, the most frequent characters will be at the beginning of the array.

Sorting the array will help us to greedily find the minimum number of pushes needed. This is because we start off by mapping the most frequently pushed characters in `word`. The first 8 distinct characters need 1 push, then 2 ... For this approach, we map the most frequently pushed characters to the first 8 buttons (at this point they will require only 1 push) until we have to go back to the first button if `word` has more than 8 distinct characters.

We use (i / 8 + 1) which determines the multiplier based on the position. For every 8 characters, the multiplier increases by 1. (e.g positions 0-7 have a multiplier of 1, 8-15 have a multiplier of 2 and so on). We sum up `res` and stop the loop when `freq[i] == 0` indicating no more characters.
# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```C++ []
class Solution {
public:
    int minimumPushes(string word) {
        int res = 0, freq[26] = {};
        for (char c : word)
            freq[c-'a']++;
        sort(begin(freq), end(freq), greater<int>());
        for (int i = 0; i < 26 && freq[i]; i++)
            res += freq[i] * (i / 8 + 1);
        return res;
    }
};
```
```python []
class Solution:
    def minimumPushes(self, word: str) -> int:
        res = i = 0
        for n in sorted(Counter(word).values(), reverse=True):
            res += n * (i // 8 + 1)
            i += 1
        return res
```
```Java []
class Solution {
    public int minimumPushes(String word) {
        int res = 0, freq[] = new int[26];
        for (int i = 0; i < word.length(); i++)
            freq[word.charAt(i)-'a']++;
        Arrays.sort(freq);
        for (int i = 25; i >= 0 && freq[i] != 0; i--)
            res += freq[i] * ((25 - i) / 8 + 1);
        return res;
    }
}
```
