# Java Solution- 14 Lines of Code- Time O(n) Space O(1)

**Author:** mvahidalizadeh
**Votes:** 4
**Link:** [https://leetcode.com/problems/find-longest-self-contained-substring/solutions/4975456/](https://leetcode.com/problems/find-longest-self-contained-substring/solutions/4975456/)

---

# Intuition
We need to use a moving window and capture the subs that are self containing.

# Approach
Let's first find the character counts of the input String. Then, let's start by subs that have only one unique character. Then, we move to subs with 2 unique charcters and etc. For each iteration, we move the right side of the window to right and add the new char to our window counts.
Each time that the number of unique characters in the sub becomes greater than our i, we need to move the left pointer forward and remove the char in the left pointer from the counts. 
Just be aware of the edge case. We don't want to include the String itself. You can add a check for right-left+1!=n. It means the sub size should not be the size of the input String.
I put a lot of comments in the code as well. 

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(1)

# Code
```
    public int maxSubstringLength(String s) {
        int n = s.length(), res = -1, totalCount[] = new int[26];
        for (int i = 0; i < n; i++) totalCount[s.charAt(i) - 'a']++; // Count total number of chars in the String
        for (int i = 1; i <= 26; i++) { // i is the number of unique chars in the sub
            int valid = 0, unique = 0, left = 0, count[] = new int[26];
            for (int right = 0; right < n; right++) {
                count[s.charAt(right) - 'a']++; // Add the char to the sub
                if (count[s.charAt(right) - 'a'] == 1) unique++; // we saw a new char
                if (count[s.charAt(right) - 'a'] == totalCount[s.charAt(right) - 'a']) valid++; // all of this char is in this sub
                for(;unique > i;left++) {
                    count[s.charAt(left) - 'a']--; // Remove the char from sub
                    if (count[s.charAt(left) - 'a'] == 0) unique--; // We lost one of the new chars
                    if (count[s.charAt(left) - 'a'] == totalCount[s.charAt(left) - 'a'] - 1) valid--; // Not all of the char is in this sub anymore
                }
                if (valid == i && right - left + 1 != n) res = Math.max(res, right - left + 1); // make sure it is not the string itself
            }
        }
        return res;
    }
```