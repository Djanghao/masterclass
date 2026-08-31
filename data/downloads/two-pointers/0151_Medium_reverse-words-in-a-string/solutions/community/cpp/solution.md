# Easy and Simple C++ solution | Two Pointers ✅

**Author:** AyushBansalCodes
**Votes:** 339
**Link:** [https://leetcode.com/problems/reverse-words-in-a-string/solutions/5521484/](https://leetcode.com/problems/reverse-words-in-a-string/solutions/5521484/)

---

# Approach

**1) Reverse the entire string:** The solution begins by reversing the entire input string `s`. This step ensures that words which were at the end of the original string are now at the beginning, and vice versa.

**2) Initialize pointers:** Three pointers are used: `left`, `right`, and `i`, all initialized to 0. The `left` and `right` pointers help in marking the start and end of each word, while `i` traverses the string.

**3) Skip leading spaces:** The outer `while` loop iterates over the string. The inner loop `while(i<n && s[i]==' ') i++;` skips any leading spaces.

**4) Process each word:**

- **Identify word boundaries:** Once the leading spaces are skipped, the second inner loop `while(i<n && s[i]!=' ')` identifies the current word and assigns characters to the correct position in the string starting from `right`.
- **Reverse the current word:** After identifying the word, it is reversed back to its original order within the reversed string. This reversal is done using the `reverse` function on the substring from `left` to `right`.
- **Add space after the word:** A space is added after the word to separate it from the next word.

**5) Resize the string:** After all words are processed, the string is resized to remove the trailing space added after the last word.

# Reason for the Approach

1. **Efficiency:** Reversing the entire string first allows the algorithm to process words in their final position. This avoids the need for additional data structures, making the in-place manipulation of the string possible.

2. **In-place manipulation:** This approach modifies the input string directly without requiring extra space, which is memory efficient.

3. **Simplicity:** The logic of reversing the entire string and then reversing individual words is straightforward and easy to understand.


# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

`Upvote! It only takes 1 click\uD83D\uDE09`

# Code
```
class Solution {
public:
    string reverseWords(string s) {
        reverse(s.begin(), s.end());
        int n = s.size();
        int left = 0;
        int right = 0;
        int i = 0;
        while (i < n) {
            while (i < n && s[i] == ' ')
                i++;
            if (i == n)
                break;
            while (i < n && s[i] != ' ') {
                s[right++] = s[i++];
            }
            reverse(s.begin() + left, s.begin() + right);
            s[right++] = ' ';
            left = right;
            i++;
        }
        s.resize(right - 1);
        return s;
    }
};
```

![upvote.jpeg](./images/0.jpeg)