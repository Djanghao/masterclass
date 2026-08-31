# Java || 67ms || Speed optimized recursive forward and reverse hash

**Author:** dudeandcat
**Votes:** 1
**Link:** [https://leetcode.com/problems/check-if-dfs-strings-are-palindromes/solutions/5946907/](https://leetcode.com/problems/check-if-dfs-strings-are-palindromes/solutions/5946907/)

---

Runtime is as fast as 67ms in October 2024.  Usually 67ms to 82ms.

```
class Solution {
    private final int PRIME = 31;
    private final int MOD = 1_000_000_007;
    private static int[] powers = new int[100_000 + 1];
    
    private int[][] children;
    private int[] len;
    private int[] hash;
    private int[] revHash;
    private byte[] str;

    public boolean[] findAnswer(int[] parent, String s) {
        // Only build the powers table once, for first 
        // test case of a Submit or Run.
        if (powers[0] == 0) {
            powers[0] = 1;
            for (int i = 1; i < powers.length; i++)
                powers[i] = (int)(((long)powers[i - 1] * PRIME) % MOD);
        }

        // Initialize some class variables.
        final int n = parent.length;
        children = new int[n][];
        len = new int[n];
        hash = new int[n];
        revHash = new int[n];
        str = s.getBytes();
        
        // Create child links for each node.
        // Count children for each node.
        final int[] childCount = new int[n];
        for (int i = 1; i < n; i++)     
            childCount[parent[i]]++;
        // Allocate array for children for each node.
        for (int i = 0; i < n; i++) {   
            children[i] = new int[childCount[i]];
            childCount[i] = 0;
        }
        // Fill-in children links for each node.
        for (int i = 1; i < n; i++)     
            children[parent[i]][childCount[parent[i]]++] = i;
        
        // Do depth first search to build tree info.  For each node, 
        // the result is "true" if forward and reverse hash are the 
        // same, and "false" if forward and reverse hashes are 
        // different.
        dfs(0);
        boolean[] result = new boolean[n];
        for (int i = n - 1; i >= 0; i--)
            if (hash[i] == revHash[i])
                result[i] = true;
        return result;
    }
        
    
    private void dfs(int node) {
        int curLen = 0;
        int curHash = 0;
        int[] curChildren = children[node];
        
        // Calculate hash in forward direction of children.  
        // Recurse to fill-in child info.
        for (int child : curChildren) {
            dfs(child);
            curHash = (int)(((long)curHash * powers[len[child]] + 
                            hash[child]) % MOD);
            curLen += len[child];
        }
        // Include currrent node's character at end of "string" 
        // after children "strings".  The strings are not actually 
        // built.  Only the hash, reverse hash, and length of the 
        // theoretical string are actually built.
        hash[node] = (int)(((long)curHash * PRIME + str[node]) % MOD);   
        len[node] = ++curLen;
        
        // Calculate hash in reverse direction of children.
        // Count node's char first in reverse direction.
        curHash = str[node];        
        for (int i = curChildren.length - 1; i >= 0; i--) {
            int child = curChildren[i];
            curHash = (int)(((long)curHash * powers[len[child]] + 
                            revHash[child]) % MOD);
        }
        revHash[node] = curHash;
        return;
    }
}
```