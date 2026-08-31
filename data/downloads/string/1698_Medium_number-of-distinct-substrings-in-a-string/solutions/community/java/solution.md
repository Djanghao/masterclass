# [Java] clean O(N^2) Rabin-Karp (rolling hash) Solution || with comments

**Author:** xieyun95
**Votes:** 4
**Link:** [https://leetcode.com/problems/number-of-distinct-substrings-in-a-string/solutions/1196782/](https://leetcode.com/problems/number-of-distinct-substrings-in-a-string/solutions/1196782/)

---

For those who are not familiar with Rabin-Karp rolling-hash method, I strongly recommand you try this question first. 
* [28. Implement strStr()](https://leetcode.com/problems/implement-strstr/)

You might also want to try and compare these questions to realize the power of Rabin-Karp's:
* [214. Shortest Palindrome](https://leetcode.com/problems/shortest-palindrome/)
* [718. Maximum Length of Repeated Subarray](https://leetcode.com/problems/maximum-length-of-repeated-subarray/discuss/1181612/Java-Clean-O(N-logN)-Rolling-Hash-Solution-oror-with-comments)
* [1044. Longest Duplicate Substring (collision)](https://leetcode.com/problems/longest-duplicate-substring/discuss/1260058/Java-Rabin-Karp-O(N-logN)-Solution-oror-with-comments)
* [1316. Distinct Echo Substrings](https://leetcode.com/problems/distinct-echo-substrings/discuss/1181698/Java-clean-O(n2)-Rolling-Hash-Solution-oror-with-comments)
* [1698. Number of Distinct Substrings in a String](https://leetcode.com/problems/number-of-distinct-substrings-in-a-string/discuss/1196782/Java-clean-O(N2)-Rabin-Karp-Solution)

As always, be alert when implementing rolling-hash by taking care of these issues: 
1. make sure each time do not add a zero hash value
2. pre-calculate the hash value of PRIEM ^ k by taking modulus each step
3. when substracting a hash value, make sure to add MOD to keep positive hash value

```
class Solution {
    private static final int MOD = 1_000_000_007;
    private static final int PRIME = 101;
    private static long[] power;
    
    public int countDistinct(String s) {
        int n = s.length(), res = 0;
        
        // power[i] : hash value for PRIME ^ i 
        this.power = new long[n];
        power[0] = 1;
        for (int i = 1; i < n; i++) {
            power[i] = (power[i-1] * PRIME) % MOD;
        }
        
        
        long hash = 0L;    // hash value for s[0: k]
        
        for (int k = 0; k < n; k++) {
            // update hash value of s[0: k] by s[0: k-1]
            int c = s.charAt(k);
            hash = (hash * PRIME + c) % MOD;
            
            
            // consider all substring with length same as s[0: k]
            Set<Integer> set = new HashSet<>();
            long curr = hash;
            set.add((int) curr);
            
            // everytime exclude s[i] & include s[j]
            for (int i = 0, j = k+1; j < n; i++, j++) {
                int l = s.charAt(i);
                int r = s.charAt(j);
                
                curr = curr - (power[k] * l) % MOD + MOD;
                curr = (curr * PRIME + r) % MOD;
                
                set.add((int) curr);
            }
            
            res += set.size();
        }
        
        return res;
    }
}
```