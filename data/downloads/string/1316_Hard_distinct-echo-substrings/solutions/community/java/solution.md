# [Java] Clean O(n^2) Rolling Hash + Dynamic Programming Solution || with comments

**Author:** xieyun95
**Votes:** 3
**Link:** [https://leetcode.com/problems/distinct-echo-substrings/solutions/1181698/](https://leetcode.com/problems/distinct-echo-substrings/solutions/1181698/)

---

For those who are not familiar with Rabin-Karp rolling-hash method, I strongly recommand you try this question first. 
* [28. Implement strStr()](https://leetcode.com/problems/implement-strstr/)

You might also want to try and compare these questions to realize the power of Rabin-Karp's:
* [214. Shortest Palindrome](https://leetcode.com/problems/shortest-palindrome/)
* [718. Maximum Length of Repeated Subarray](https://leetcode.com/problems/maximum-length-of-repeated-subarray/discuss/1181612/Java-Clean-O(N-logN)-Rolling-Hash-Solution-oror-with-comments)
* [1044. Longest Duplicate Substring (collision)](https://leetcode.com/problems/longest-duplicate-substring/discuss/1260058/Java-Rabin-Karp-O(N-logN)-Solution-oror-with-comments)
* [1316. Distinct Echo Substrings](https://leetcode.com/problems/distinct-echo-substrings/discuss/1181698/Java-clean-O(n2)-Rolling-Hash-Solution-oror-with-comments)
* [1698. Number of Distinct Substrings in a String](https://leetcode.com/problems/number-of-distinct-substrings-in-a-string/discuss/1196782/Java-clean-O(N2)-Rabin-Karp-Solution)

Again, everytime we calculate hash values when implementing Rabin-Karp's, there's some issue to worry about. There are some good practices that will make this algorithm stable: 
1. taking modulus to avoid overflow
2. each time adding a positive number when updating hash value

Consider these two ways of updating hash values: 
``` 
hash = hash * PRIME + text.charAt(j);
hash = hash * PRIME + text.charAt(j) - 'a' + 1;
hash = hash * PRIME + text.charAt(j) - 'a';
```
The third one will not work here since encountering 'a' leads to adding 0 to hash value. Thus "a", "aa", "aa....a"  will share the same hash value. 

```
class Solution {
    private static final int PRIME = 101;
    private static final int MOD = 1_000_000_007;
    public int distinctEchoSubstrings(String text) {
        int n = text.length();
        
        // dp[i][j] : hash value of text[i:j]
        int[][] dp = new int[n][n];
        for (int i = 0; i < n; i++) {
            long hash = 0;
            for (int j = i; j < n; j++) {
                hash = hash * PRIME + (text.charAt(j) - 'a' + 1);
                hash %= MOD;
                dp[i][j] = (int) hash;
            }
        }
        
        Set<Integer> set = new HashSet<>();
        int res = 0;
        for (int i = 0; i < n-1; i++) {
            // compare text[i:j] with text[j+1: 2j-i+1]
            for (int j = i; 2*j - i + 1 < n; j++) {
                if (dp[i][j] == dp[j+1][2*j - i+1] && set.add(dp[i][j])) res++;
            }
        }
        
        return res;
    }
}
```

Note: this Solution is induced by a [Monte Carlo Algorithm](http://people.seas.harvard.edu/~cs125/fall16/section-notes/09.pdf), which might leads to unwanted results due to hash collision. However in real practice, the probability of hash collision is very low due to our choice of PRIME & MOD. If we want to absolutely eliminate any possibility of unwanted results caused by the algorithm, we might compare two String if they have the same hash value; Namely, this solution will be induced by a [Las Vegas Algorithm](http://people.seas.harvard.edu/~cs125/fall16/section-notes/09.pdf).