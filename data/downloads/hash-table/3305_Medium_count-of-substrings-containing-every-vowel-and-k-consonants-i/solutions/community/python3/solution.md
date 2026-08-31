# Straight Forward Sliding window (3305 , 3306)

**Author:** ekambareswar1729
**Votes:** 9
**Link:** [https://leetcode.com/problems/count-of-substrings-containing-every-vowel-and-k-consonants-i/solutions/5847569/](https://leetcode.com/problems/count-of-substrings-containing-every-vowel-and-k-consonants-i/solutions/5847569/)

---

# Approach
- Two-Pointer and Sliding Window Technique: Use two pointers, l_left and l_right, to create a sliding window that maintains the number of consonants and checks if all vowels are present.
- Dictionary for Vowel Count: Maintain a dictionary map to count the number of each vowel in the current window.
- Count Consonants: Keep track of the number of consonants in the window using the variable cons_count.
- Move r Pointer to Expand the Window: As we move the r pointer to the right, add vowels to the map and increment cons_count for consonants.
- Adjust Window Using l_right: When the number of consonants exceeds k, move l_right to the right until cons_count is equal to k again at this point it is stored in l_left (because its actually l_left). Now extra vowels at the left end are removed from map l_right is moved further.
- Check Valid Substring: Once cons_count == k and all vowels are present (len(map) == 5), add the number of valid substrings between l_left and l_right to the result.
- Output the Final Count: The final answer will be the number of such valid substrings found.
# Code
```python3 []
class Solution:
    def countOfSubstrings(self, w: str, k: int) -> int:
        n = len(w)
        cons_count = 0 # count of constants
        ans = 0

        vowels = ("a", "e", "i", "o", "u")
        map = defaultdict(int)

        l_right = 0
        l_left = 0
        for r in range(n):
           
            if w[r] in vowels:
                map[w[r]] += 1
            else:
                cons_count += 1

            while cons_count > k and l_right < r:# lets make cons_count ==k
                if w[l_right] in vowels:
                    map[w[l_right]] -= 1
                    if map[w[l_right]] == 0:
                        del map[w[l_right]]

                else:
                    cons_count -= 1
                l_right += 1
                l_left = l_right # l_left is extreme left at which cons_count==k

            # even if cons_count==k , some vowels at left side can be removed 
            # l_right is extreme right at which cons_count==k 
            while cons_count == k and l_right < r:
                if w[l_right] in vowels:
                    if map[w[l_right]] - 1 > 0:
                        map[w[l_right]] -= 1
                        l_right += 1
                    else:
                        break
                else:
                    break

            if len(map) == 5 and cons_count == k:
                ans += (l_right - l_left + 1)  # number sub strings between l_right , l_left

        return ans

```