# Easy Simple Solution 👌👌😎😎100%

**Author:** amrittiwari
**Votes:** 20
**Link:** [https://leetcode.com/problems/permutation-difference-between-two-strings/solutions/5896332/](https://leetcode.com/problems/permutation-difference-between-two-strings/solutions/5896332/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
For example, consider:

s = "abc"
t = "cab"
Character 'a':

Index in s: 0
Index in t: 1
Difference: abs(1 - 0) = 1
Character 'b':

Index in s: 1
Index in t: 2
Difference: abs(2 - 1) = 1
Character 'c':

Index in s: 2
Index in t: 0
Difference: abs(0 - 2) = 2
The total diff would be 1 + 1 + 2 = 4.

# Approach
<!-- Describe your approach to solving the problem. -->
Steps
1. Loop Through Characters:

For each character in s, we look at where that character is in t.

2. Find the Index:

We use the find function to get the position of the character from s in t.

3. Calculate the Difference:

We calculate how far that character has moved by taking the absolute difference between its position in s and its position in t. This tells us how many places it shifted.

4. Add Up Differences:

We keep adding up these differences for all characters to get a total shift value.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
Initail Loop: O(n)
Index Loop: O(m)
Overall complexity: O(m x n)

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
Best Case space complexity: O(1)

# Code
```cpp []
class Solution {
public:
    int findPermutationDifference(string s, string t) {
        int diff=0;
        for(int i=0; i<s.length(); i++){
            char str=s[i];
            int j = t.find(s[i]);
            diff+=abs(j-i);
        }
        return diff;
    }
};
```