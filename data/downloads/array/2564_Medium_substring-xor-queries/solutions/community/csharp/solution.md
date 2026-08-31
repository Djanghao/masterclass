# C# beats 100% speed and memory

**Author:** felixbonin
**Votes:** 0
**Link:** [https://leetcode.com/problems/substring-xor-queries/solutions/3968790/](https://leetcode.com/problems/substring-xor-queries/solutions/3968790/)

---

# Intuition
Iterating over the array at every query seems too slow. There has to be a way to find all substrings possible and save them.

# Approach
Put all substring found in s in a Dictionary. We only need to go up to length 32 because ints have 32 bits so a binary string of an int will never be over 32 chars.
A further improvment could be to not remember sub strings with trailling zeros since we don't need them.

# Complexity
S being the length of the string and Q being the length of the queries array
- Time complexity: O(S + Q)

- Space complexity: O(S)

# Code
```
public class Solution {
    public int[][] SubstringXorQueries(string s, int[][] queries) {
        Dictionary<string, int> subStrings = new Dictionary<string, int>();
        for(int i = 1; i <= 32; i++) {
            for(int j = 0; j + i <= s.Length; j++) {
                string sub = s.Substring(j, i);
                if(!subStrings.ContainsKey(sub)) {
                    subStrings[sub] = j;
                }
            }
        }
        int[][] ans = new int[queries.Length][];
        for(int i = 0; i < queries.Length; i++) {
            int toFind = queries[i][0] ^ queries[i][1];
            string toFindBin = Convert.ToString(toFind, 2);
            if(subStrings.TryGetValue(toFindBin, out int found)) {
                ans[i] = new int[] {found, found + toFindBin.Length - 1};
            } else {
                ans[i] = new int[] {-1, -1};
            }
        }
        return ans;
    }
}
```