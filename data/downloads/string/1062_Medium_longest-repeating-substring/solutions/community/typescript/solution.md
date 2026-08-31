# Put all substrings into a HashSet

**Author:** jianswe
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-repeating-substring/solutions/5593598/](https://leetcode.com/problems/longest-repeating-substring/solutions/5593598/)

---

# Intuition
Since `s.length <= 2000`, we can generate all the substrings with O(N^2) time complexity. 

# Approach
1. Generate all substrings, put them in a set 
2. Check if a substring is already in set, then it is duplicated. 
3. Compare the length of duplicated substring with current answer, replace it if we find a longer substring. 
4. Return answer.  

# Complexity
- Time complexity: O(N^3)
`N = s.length`
Nested loop (N^2) * slice (N) 

- Space complexity: O(N^2)
Need to store up to O(N^2) substrings

# Code
```
function longestRepeatingSubstring(s: string): number {
    let subStrs = new Set(), ans = 0
    for (let i=0; i<s.length; i++) {
        for (let j=i+1; j<=s.length; j++) {
            const subStr = s.slice(i,j)
            if (subStrs.has(subStr)) {
                ans = Math.max(ans, subStr.length)
            } else {
                subStrs.add(subStr)
            }
        }
    }
    return ans
};
```