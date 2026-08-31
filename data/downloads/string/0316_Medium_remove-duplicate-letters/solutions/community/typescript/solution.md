# POTD With 100% optimisation  with 100% Runtime and Memory Acceptance

**Author:** saket_1
**Votes:** 4
**Link:** [https://leetcode.com/problems/remove-duplicate-letters/solutions/4091517/](https://leetcode.com/problems/remove-duplicate-letters/solutions/4091517/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The problem is to remove duplicate letters from the input string while ensuring that the result is in lexicographically smallest order. To achieve this, we can use a stack to maintain characters and their order. We need to keep track of the last occurrence of each character to make sure we are removing characters correctly.
# Approach
<!-- Describe your approach to solving the problem. -->
1. Initialize a stack (st) to store characters, two vectors (last_occurrence and used) to keep track of the last occurrence of each character and whether a character is already in the result, respectively.

2. Iterate through the input string s:
   - For each character currChar, check if it has not been used (used[currChar - 'a'] is false).
   - If it has not been used:
   - While the stack is not empty, the current character currChar is smaller than the character at the top of the stack (st.top()), and there are more occurrences of the character at the top of the stack later in the string, pop characters from the stack and mark them as unused.
    - Push the current character onto the stack and mark it as used.
3. After processing the entire input string, create a result string of the same size as the stack (st.size()) and construct it in reverse order by popping characters from the stack.

4. Return the result string, which contains the lexicographically smallest string without duplicate letters.
# Complexity
1. Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
    - The code iterates through the input string s twice, once for calculating the last occurrence of each character and once for processing the string with the stack.
    - Both iterations have a time complexity of O(N), where N is the length of the input string s.
    - The final construction of the result string from the stack also takes O(N) time.
    - Thus, the overall time complexity is O(N).
2. Space complexity:
    - The additional space used is mainly for the stack, which can have at most N characters, where N is the length of the input string s.
    - The last_occurrence and used vectors each have a constant size of 26 (for the English alphabet).
    - The result string also takes O(N) space.
    - Therefore, the overall space complexity is O(N).
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
public:
    string removeDuplicateLetters(string s) {
        vector<int> last_occurrence(26, -1);
        vector<bool> used(26, false);
        stack<char> st;

        // Calculate the last occurrence of each character in the string
        for (int i = 0; i < s.size(); ++i) {
            last_occurrence[s[i] - 'a'] = i;
        }

        for (int i = 0; i < s.size(); ++i) {
            char currChar = s[i];

            if (!used[currChar - 'a']) {
                while (!st.empty() && currChar < st.top() && last_occurrence[st.top() - 'a'] > i) {
                    used[st.top() - 'a'] = false;
                    st.pop();
                }

                st.push(currChar);
                used[currChar - 'a'] = true;
            }
        }

        string result(st.size(), ' ');

        // Construct the result string in reverse order from the stack
        for (int i = st.size() - 1; i >= 0; --i) {
            result[i] = st.top();
            st.pop();
        }

        return result;
    }
};

```