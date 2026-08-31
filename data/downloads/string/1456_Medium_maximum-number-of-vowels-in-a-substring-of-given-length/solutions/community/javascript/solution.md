# Simple implementation using sliding window but only in constant space ,O(n) time complexity || Easy

**Author:** Have-To-Do-Every-Thing
**Votes:** 9
**Link:** [https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/solutions/4985060/](https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/solutions/4985060/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The problem asks to find the maximum number of vowels in any substring of length k. The provided code efficiently iterates over the string and maintains a count of vowels within a sliding window of length k. By keeping track of the maximum count encountered so far, it ultimately returns the maximum count of vowels in any substring of length k.

# Approach
1. Initialize variables ans and count to store the maximum count of vowels encountered and the count of vowels within the current window, respectively.
2. Iterate through the first window of length k and count the vowels encountered.
3. Update ans with the maximum count of vowels found in the first window.
4. Slide the window one character at a  time:
- Increment the count if the character at the current position is a vowel.
- Decrement the count if the character at the beginning of the window (i-k) is a vowel, as it goes out of the window.
- Update ans with the maximum count found in the sliding window.
5. Return the maximum count of vowels (ans).

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
Initialize variables ans and count to store the maximum count of vowels encountered and the count of vowels within the current window, respectively.
Iterate through the first window of length k and count the vowels encountered.
Update ans with the maximum count of vowels found in the first window.
Slide the window one character at a time:
Increment the count if the character at the current position is a vowel.
Decrement the count if the character at the beginning of the window (i-k) is a vowel, as it goes out of the window.
Update ans with the maximum count found in the sliding window.
Return the maximum count of vowels (ans).

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
The space complexity is O(1) as the space used is independent of the input size. Only a constant amount of extra space is required to store variables ans and count, regardless of the input size.

# Code
``` C++ []
class Solution {
public:
    int maxVowels(string s, int k) {
        int ans = 0;
    int count = 0;
    for (int i = 0; i < k; i++)
    {
        if (s[i] == 'a' || s[i] == 'e' || s[i] == 'i' || s[i] == 'o' || s[i] == 'u')
        {
            count++;
        }
    }
    ans=max(ans,count);

    for (int i = k; i < s.length(); i++)
    {
        if (s[i] == 'a' || s[i] == 'e' || s[i] == 'i' || s[i] == 'o' || s[i] == 'u')
        {
            count++;
        }
        if (s[i-k] == 'a' || s[i-k] == 'e' || s[i-k] == 'i' || s[i-k] == 'o' || s[i-k] == 'u')
        {
            count--;
        }
        ans = max(ans,count);
    }
    return ans;
    }
};
```
``` Python []
class Solution:
    def maxVowels(self, s: str, k: int) -> int:
        ans = count = 0
        
        # Count vowels in the first window
        for i in range(k):
            if s[i] in {'a', 'e', 'i', 'o', 'u'}:
                count += 1
        ans = max(ans, count)
        
        # Slide the window and update the count
        for i in range(k, len(s)):
            if s[i] in {'a', 'e', 'i', 'o', 'u'}:
                count += 1
            if s[i - k] in {'a', 'e', 'i', 'o', 'u'}:
                count -= 1
            ans = max(ans, count)
        
        return ans

```
``` JavaScript []
function maxVowels(s, k) {
    let ans = 0;
    let count = 0;

    // Count vowels in the first window
    for (let i = 0; i < k; i++) {
        if (isVowel(s[i])) {
            count++;
        }
    }
    ans = Math.max(ans, count);

    // Slide the window and update the count
    for (let i = k; i < s.length; i++) {
        if (isVowel(s[i])) {
            count++;
        }
        if (isVowel(s[i - k])) {
            count--;
        }
        ans = Math.max(ans, count);
    }

    return ans;
}

function isVowel(c) {
    return c === 'a' || c === 'e' || c === 'i' || c === 'o' || c === 'u';
}


```
``` Java []
public class Solution {
    public int maxVowels(String s, int k) {
        int ans = 0;
        int count = 0;

        // Count vowels in the first window
        for (int i = 0; i < k; i++) {
            if (isVowel(s.charAt(i))) {
                count++;
            }
        }
        ans = Math.max(ans, count);

        // Slide the window and update the count
        for (int i = k; i < s.length(); i++) {
            if (isVowel(s.charAt(i))) {
                count++;
            }
            if (isVowel(s.charAt(i - k))) {
                count--;
            }
            ans = Math.max(ans, count);
        }

        return ans;
    }

    private boolean isVowel(char c) {
        return c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u';
    }
}


```


