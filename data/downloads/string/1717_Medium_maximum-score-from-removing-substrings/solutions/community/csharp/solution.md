# Ram Ram Bhai saaryane✌️✌️☑️☑️☑️ <<Beginner friendly code !! thoda sa stack aana chahiye bss .......k

**Author:** useriiit22
**Votes:** 17
**Link:** [https://leetcode.com/problems/maximum-score-from-removing-substrings/solutions/5464547/](https://leetcode.com/problems/maximum-score-from-removing-substrings/solutions/5464547/)

---

# Khud se likha code h cheating valo se door rhe ......
# Intuition
To maximize the gain from removing pairs of "ab" and "ba" from the string, we should prioritize removing the pair that has the higher value first. By doing this, we ensure that we get the maximum possible gain.

# Approach
# Stack Utilization:
We use a stack to keep track of characters as we iterate through the string.
If x > y, prioritize removing "ab" pairs first.
If y > x, prioritize removing "ba" pairs first.
# Processing the String:
Traverse the string and use the stack to identify and remove the prioritized pairs.
After processing for the prioritized pair, update the string with the remaining characters in the stack.
Reverse the updated string and repeat the process for the second type of pair.
# Updating the String:
Clear the string and update it with characters from the stack after processing each type of pair.
Reverse the updated string to maintain the correct order before processing the next type of pair.
Complexity
Time Complexity: O(n)
We traverse the string twice, once for each type of pair ("ab" and "ba"), leading to a linear time complexity.
Space Complexity: O(n)
We use a stack to store characters, which in the worst case could be the entire string length.
Here is the complete solution with the provided comments:
# Code
```
class Solution {
public:
    int maximumGain(string s, int x, int y) {
        stack<char> st1;
        int ans = 0;

        if (x > y) {
            // Process 'ab' pairs first
            for (char ch : s) {
                if (!st1.empty() && st1.top() == 'a' && ch == 'b') {
                    st1.pop();
                    ans += x;
                } else {
                    st1.push(ch);
                }
            }
            
            // Collect remaining characters back into s
            s.clear();
            while (!st1.empty()) {
                s += st1.top();
                st1.pop();
            }
            reverse(s.begin(), s.end());

            // Process 'ba' pairs
            for (char ch : s) {
                if (!st1.empty() && st1.top() == 'b' && ch == 'a') {
                    st1.pop();
                    ans += y;
                } else {
                    st1.push(ch);
                }
            }
        } else {
            // Process 'ba' pairs first
            for (char ch : s) {
                if (!st1.empty() && st1.top() == 'b' && ch == 'a') {
                    st1.pop();
                    ans += y;
                } else {
                    st1.push(ch);
                }
            }
            
            // Collect remaining characters back into s
            s.clear();
            while (!st1.empty()) {
                s += st1.top();
                st1.pop();
            }
            reverse(s.begin(), s.end());

            // Process 'ab' pairs
            for (char ch : s) {
                if (!st1.empty() && st1.top() == 'a' && ch == 'b') {
                    st1.pop();
                    ans += x;
                } else {
                    st1.push(ch);
                }
            }
        }

        return ans;
    }
};


```