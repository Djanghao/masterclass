# Java, 0ms, concise, beats 100% (both time and memory) with algo

**Author:** goelrishabh5
**Votes:** 73
**Link:** [https://leetcode.com/problems/longest-chunked-palindrome-decomposition/solutions/350762/](https://leetcode.com/problems/longest-chunked-palindrome-decomposition/solutions/350762/)

---

Traverse from 0 to n/2 to find the smallest left side chunk and right side chunk which are equal.
Once you find it(\uD83E\uDDD2 \uD83D\uDC64.........\uD83D\uDC64 \uD83E\uDDD2), add 2\xA0(\uD83E\uDDD2\uD83E\uDDD2) to solution and then recursively call the function for remaining string(\uD83D\uDC64..........\uD83D\uDC64 ).
Terminating conditions:
a. Either string will be empty : return 0 
b. Or there are no more equal right and left chunks left (just a single lonely chunk \uD83D\uDE47\u200D\u2642\uFE0F ): return 1

```
 public int longestDecomposition(String text) {
        int n = text.length();   
        for (int i = 0; i < n/2; i++) 
            if (text.substring(0, i + 1).equals(text.substring(n-1-i, n))) 
                return 2+longestDecomposition(text.substring(i+1, n-1-i));
        return (n==0)?0:1;
    }
```