# Python3 | O(n) | Sliding Window | Simple Explanation

**Author:** Ruvxei
**Votes:** 53
**Link:** [https://leetcode.com/problems/count-of-substrings-containing-every-vowel-and-k-consonants-ii/solutions/5846076/](https://leetcode.com/problems/count-of-substrings-containing-every-vowel-and-k-consonants-ii/solutions/5846076/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Figuring out how to count the number of substrings with at least `k` consonants that have all five vowels is easier than counting the number of substrings with exactly `k`consonants that have all 5 vowels. Once we can do this, the answer is simply the number of substrings with at least k consonants minus the number of substrings with at least `k + 1` consonants. (This is a similar strategy to the first solution of https://leetcode.com/problems/subarrays-with-k-different-integers/editorial/)

# Approach
<!-- Describe your approach to solving the problem. -->
Maintain a sliding window. We will calculate the number of substrings starting at each index that have at least `k` consonants and have 5 vowels. If we have found 5 vowels and have at least `k` consonants, then any substring beginning at the start of our sliding window and ending at the end or after our sliding window has 5 vowels and at least `k` consonants. After, we move the start of our sliding window one step to the right. If we don't have all 5 vowels or we have less than `k` consonants, then we extend our sliding window to the right.
# Complexity
- Time complexity: `O(n)`
<!-- Add your time complexity here, e.g. $$O(n)$$ -->


- Space complexity: `O(1)`
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```class Solution:
    def countOfSubstrings(self, word: str, k: int) -> int:
        def countAtLeastMConsonants(m):
            n = len(word)
            vowels = ('a', 'e', 'i', 'o', 'u')
            vowels_map = defaultdict(int)
            num_consonants = 0
            ans = 0
            l = 0
            r = 0
            while r < n or l < n:
                if len(vowels_map) == 5 and num_consonants >= m:
                    ans += n - r + 1
                    if word[l] not in vowels:
                        num_consonants -= 1
                    else:
                        vowels_map[word[l]] -= 1
                        if vowels_map[word[l]] == 0:
                            del vowels_map[word[l]]
                    l += 1
                else:
                    if r == n:
                        break
                    if word[r] not in vowels:
                        num_consonants += 1
                    else:
                        vowels_map[word[r]] += 1
                    r += 1
            return ans
        
        return countAtLeastMConsonants(k) - countAtLeastMConsonants(k + 1)
       

```