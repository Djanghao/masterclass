# Sum the Combinations – An Easy Sliding Window Solution in C++ | 🍸

**Author:** finch185277
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-substrings-with-k-frequency-characters-ii/solutions/6112446/](https://leetcode.com/problems/count-substrings-with-k-frequency-characters-ii/solutions/6112446/)

---

# Intuition  
The problem asks us to find how many substrings have at least one character appearing **k** times. We can solve this efficiently using a sliding window to maintain a range where this condition is satisfied and sum the counts of combinations dynamically.  

# Approach  
We define:  
- `allComb` to store the total count of valid combinations.  
- `left` and `right` as the boundaries of the sliding window.  
- `charCount` to track character frequencies in the current window.  
- `currComb` to count the number of valid substrings for a given right boundary.  

At each step:  
1. Increment the frequency of the character at `right`.  
2. Use a `while` loop to check if any character in the window now appears at least **k** times. If so, increment `currComb` as it means more valid substrings can now start from positions left of `left`.  
3. Compute the number of valid substrings including the character at `right` as `currComb * (s.size() - right)` **(valid left ends \xD7 valid right ends)**.  
4. Add this count to `allComb`.  
5. Repeat until the right boundary reaches the end of the string.  

Finally, return `allComb`.  

# Complexity  
- **Time Complexity**: $$O(n)$$. Both `left` and `right` traverse the string at most once.  
- **Space Complexity**: $$O(1)$$. We use only a fixed array of size 26 (`charCount`) and a few variables.  

# Code
```cpp []
class Solution {
public:
    long long numberOfSubstrings(string s, int k) {
        long long allComb = 0;
        int left = 0, right = 0;
        int charCount[26] = {0};

        for (; right < s.size(); ++right) {
            charCount[s[right] - 'a']++;

            long long currComb = 0;
            while (left <= right && charCount[s[right] - 'a'] >= k) {
                currComb++;
                charCount[s[left] - 'a']--;
                left++;
            }

            allComb += currComb * (s.size() - right);
        }

        return allComb;
    }
};
```