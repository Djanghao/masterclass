# ✅ c++ | java | Easiest solution ~ O(N) 🔥🔥

**Author:** Harsh_Padsala_265
**Votes:** 56
**Link:** [https://leetcode.com/problems/find-longest-special-substring-that-occurs-thrice-ii/solutions/4481019/](https://leetcode.com/problems/find-longest-special-substring-that-occurs-thrice-ii/solutions/4481019/)

---

# Intuition
The algorithm traverses the input string, keeping track of the frequency of special substrings for each character and their lengths. The nested loops then search for special substrings that occur at least thrice, updating the maximum length accordingly. The final result is the length of the longest special substring that occurs at least thrice, or -1 if no such substring is found.


# Complexity
- Time complexity: O(N)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(N)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Approach
1) Initialization: 
n = len(s): Get the length of the input string s.
freq = [[0] * (n + 1) for _ in range(26)]: Initialize a 2D array freq to store the frequency of characters. The rows represent characters ('a' to 'z'), and columns represent the length of special substrings. freq[i][j] stores the count of special substrings of length j ending with the character at index i.
Loop through the string:

2. pre = s[0]: Initialize the previous character as the first character of the string.
len_val = 1: Initialize the length of the current special substring as 1.
freq[ord(pre) - ord('a')][1] = 1: Increment the count of special substrings of length 1 ending with the initial character.
Iterate through the string:

3. Loop from index 1 to n-1.
If the current character (cur) is the same as the previous character (pre), increment the length of the current special substring (len_val) and update the frequency count.
If the characters are different, reset the length to 1 and update the frequency count for the new character.
Calculate the answer:

4. Loop through the frequency array.
For each character, traverse the frequencies in reverse order.
If the cumulative frequency (pre_sum) is greater than or equal to 3, update the answer with the maximum length found.
Return the answer:

5. Return the maximum length of a special substring that occurs at least thrice, or -1 if no such substring is found.
<!-- Describe your approach to solving the problem. -->

```java []
class Solution {
    public int maximumLength(String s) {
        int n = s.length();
        int[][] freq = new int[26][n + 1];
        char pre = s.charAt(0);

        int len = 1;
        freq[s.charAt(0) - 'a'][1] = 1;
        int ans = -1;

        for (int i = 1; i < n; i++) {
            char cur = s.charAt(i);
            if (cur == pre) {
                len++;
                int count = 1;
                freq[cur - 'a'][len] += 1;
            } else {
                freq[cur - 'a'][1] += 1;
                pre = cur;
                len = 1;
            }
        }

        for (int i = 0; i < 26; i++) {
            int preSum = 0;
            for (int j = n; j >= 1; j--) {
                preSum += freq[i][j];
                if (preSum >= 3) {
                    ans = Math.max(ans, j);
                    break;
                }
            }
        }

        return ans;
    }
}

```
```c++ []
#include <iostream>
#include <vector>
#include <algorithm>

class Solution {
public:
    int maximumLength(std::string s) {
        int n = s.length();
        std::vector<std::vector<int>> freq(26, std::vector<int>(n + 1, 0));
        char pre = s[0];

        int len = 1;
        freq[s[0] - 'a'][1] = 1;
        int ans = -1;

        for (int i = 1; i < n; i++) {
            char cur = s[i];
            if (cur == pre) {
                len++;
                freq[cur - 'a'][len] += 1;
            } else {
                freq[cur - 'a'][1] += 1;
                pre = cur;
                len = 1;
            }
        }

        for (int i = 0; i < 26; i++) {
            int preSum = 0;
            for (int j = n; j >= 1; j--) {
                preSum += freq[i][j];
                if (preSum >= 3) {
                    ans = std::max(ans, j);
                    break;
                }
            }
        }

        return ans;
    }
};
```

<!-- Describe your first thoughts on how to solve this problem. -->
![upvote.png](./images/0.png)





