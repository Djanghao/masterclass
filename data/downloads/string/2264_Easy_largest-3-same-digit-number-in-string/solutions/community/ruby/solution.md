# 🚀🚀 BEATS 100% | 0ms | Easy-To-Understand 🔥🔥

**Author:** The_Sanket_Deshmukh
**Votes:** 6
**Link:** [https://leetcode.com/problems/largest-3-same-digit-number-in-string/solutions/4359506/](https://leetcode.com/problems/largest-3-same-digit-number-in-string/solutions/4359506/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
![abc.jpeg](./images/0.jpeg)


# Approach
<!-- Describe your approach to solving the problem. -->
#### 1. **Optimize Input/Output Handling \uD83D\uDE80**
   - `ios_base::sync_with_stdio(false);` and `cin.tie(0); cout.tie(0);` are used to optimize input/output operations.
   - Allows faster I/O operations by disabling synchronization between C and C++ streams.

#### 2. **Initialize Variables and Counter \uD83D\uDD04**
   - `string ans = "";` initializes an empty string to store the result.
   - `int count = 1;` keeps track of the consecutive character count.
   - `char res = 'a';` initializes the result character to 'a'.
   - `char prev = num[0];` initializes the previous character with the first character in the input string.

#### 3. **Iterate Through the String \uD83D\uDD01**
   - Loop through the characters in the input string starting from the second character (`for(int i = 1; i < num.length(); i++)`).
   - `char curr = num[i];` represents the current character in the iteration.

#### 4. **Check Consecutive Character Counts \uD83E\uDDD0**
   - If `curr` is equal to `prev`, increment the `count` variable.
   - If `curr` is different from `prev`, reset the `count` to 1 and update `prev` to the current character.

#### 5. **Identify Largest Consecutive Triplets \uD83C\uDFAF**
   - If `count` reaches 3 and `res` is still 'a', update `res` with the current character.
   - If `count` reaches 3 and `res` is not 'a', compare the current character with `res` and update `res` if the current character is greater.

#### 6. **Build Result String \uD83D\uDEE0\uFE0F**
   - If `res` is still 'a' after the loop, there are no consecutive triplets, return an empty string.
   - Otherwise, append `res` to the result string three times using a loop (`for(int i = 0; i < 3; i++) ans.push_back(res);`).

#### 7. **Return Result \uD83C\uDF89**
   - Return the constructed result string.

### Conclusion \uD83C\uDF1F
   - The algorithm efficiently identifies the largest consecutive triplet of characters in the input string and constructs the result string accordingly.
   - Time complexity is O(N), where N is the length of the input string.

### Optimization Note \uD83D\uDEA8
   - The code assumes that the input string is not empty. If this assumption is not guaranteed, add a check for an empty string at the beginning of the function and handle it appropriately.

# Complexity
- Time complexity: O(N)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
public:
    string largestGoodInteger(string num) {
        ios_base::sync_with_stdio(false);
        cin.tie(0);
        cout.tie(0);
        
        string ans = "";
        int count = 1;
        char res = 'a';
        char prev = num[0];
        for(int i = 1; i < num.length(); i++)
        {
            char curr = num[i];
            if(curr == prev) count++;
            else
            {
                prev = curr;
                count = 1;
            }
            if(count == 3 and res == 'a') res = prev;
            else if(count == 3 and res != 'a')
            {
                if(res < prev) res = prev;
            }
        }
        if(res == 'a') return "";
        for(int i = 0; i < 3; i++) ans.push_back(res);
        return ans;
    }
};
```
![lc.gif](./images/1.gif)
<----------------------------------\uD83D\uDEA8 UPVOTE PLEASE \uD83D\uDEA8 ---------------------------->
