# Prefix Sum C#

**Author:** gardio
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-vowel-strings-in-ranges/solutions/5005054/](https://leetcode.com/problems/count-vowel-strings-in-ranges/solutions/5005054/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Prefix Sum allows 1 time evaluation of **words** **array**. Then just 2 access to calculate answer.
# Approach
<!-- Describe your approach to solving the problem. -->
google prefix sum
# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n)

# Code
```
public class Solution {
    public int[] VowelStrings(string[] words, int[][] queries) 
    {
        // solution
        // go through words array and validate if predicate of "start and end with vowel"
        // flag with [1,0] true false
        // we can create prefix sum for better performance on calculating sum for total 
        int[] prefix = new int[words.Length + 1];
        int[] ans = new int[queries.Length];

        List<char> vowels = new List<char> { 'a', 'e', 'i', 'o', 'u' };
        for (var x = 0; x < words.Length; x++)
        {
            if (vowels.Contains(words[x][0]) && vowels.Contains(words[x][words[x].Length - 1]))
            {            
                prefix[x+1] = prefix[x] + 1;
                continue;
            }
            prefix[x+1] = prefix[x];
        }

        for (var x = 0; x < queries.Length; x++)
        {
            ans[x] = prefix[queries[x][1] + 1] - prefix[queries[x][0]];
        }

        return ans;
    }
}
```