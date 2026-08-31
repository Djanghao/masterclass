# Easy - Compare Left and Right Distances

**Author:** AdityaRaj_cpp
**Votes:** 36
**Link:** [https://leetcode.com/problems/lexicographically-smallest-string-after-operations-with-constraint/solutions/4986099/](https://leetcode.com/problems/lexicographically-smallest-string-after-operations-with-constraint/solutions/4986099/)

---

# Intuition
Since the task is to return the lexicographically smallest string, so we will try to convert the beginning characters into 'a', if possible.

# Approach
1. It iterates through each character`ch`in the input string`s`.
3. For each character`ch`, it calculates two values:
\u2022 `left` : The distance between the character and 'a' on left side.
\u2022 `right`: The distance between the character and 'a' on the right side.
4. It then calculates`mnn`,which is the minimum of`left`and`right`.
5. If`k`(the remaining operations) is greater than or equal to `mnn`, it reduces`k`by`mnn`and sets the current character`ch`to 'a'.
6. Otherwise, it subtracts `k` from the current character `ch` and break the loop.
7. Finally, it returns the modified string`s`.

# Complexity
- Time complexity:  `O(n)`

# Code
```
class Solution
{
public:
    string getSmallestString(string s, int k)
    {
        string ans = s;
        for (char &ch : s)
        {
            int left = ch - 'a';
            int right = 'z' - ch + 1;
            int mnn = min(left, right);
            if (k >= mnn)
            {
                k -= mnn;
                ch = 'a';
            }
            else
            {
                ch = ch - k;
                break;
            }
        }
        return s;
    }
};
```