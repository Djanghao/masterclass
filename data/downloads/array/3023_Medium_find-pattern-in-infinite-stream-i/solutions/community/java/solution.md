# Easiest rolling hash beats 100%

**Author:** yavinci
**Votes:** 3
**Link:** [https://leetcode.com/problems/find-pattern-in-infinite-stream-i/solutions/4715704/](https://leetcode.com/problems/find-pattern-in-infinite-stream-i/solutions/4715704/)

---

# Intuition
Take `stream = [1,0,1,1,0,1,1,0,1,...], pattern = [1,1,0,1]` as an example.

With brute force, we would compare each stream digit with each pattern digit, for each next() call. The complexity is `O(m * n)`, where m is  stream length and n is pattern length. 

Can we reduce some repetitive computation? Let's first run some examples:
```
pattern = [1,1,0,1]
stream =  [1,0,1,1]       -> not match
            [0,1,1,0]     -> not match
              [1,1,0,1]   -> match!
```

In each next() call, the right digit is appended and the left digit is removed. The inner part is unchanged. How about we define some "identity" that is only updating instead of not computing from scratch? 

The answer is **rolling hash (Rabin-Karp Algorithm)**. In each next() call, stream hash is updated by removing the leftmost digit, multiplying by 2, and appending the new digit. if stream hash equals to pattern hash, we found the pattern: 

```
pattern = [1,1,0,1].    hashp = binary(1101) 
stream =  [1,0,1,1]     hashs = binary(1011) 
            [0,1,1,0]   hashs = binary(0110) = (hash - binary(0000)) * 2 + 0 
              [1,1,0,1] hashs = binary(1101) = (hash - binary(1000)) * 2 + 1 
```
# Solution
```
class Solution {
    public int findPattern(InfiniteStream infiniteStream, int[] pattern) {
        int hashp = 0;
        for (int i = 0; i < pattern.length; i++) {
            hashp = hashp * 2 + pattern[i];
        }
        int hashs = 0;
        for (int i = 0; i < pattern.length; i++) {
            hashs = hashs * 2 + infiniteStream.next();
        }

        int idx = 0;
        int base = (int)Math.pow(2, pattern.length - 1);
        while (true) {
            if (hashs == hashp) {
                return idx;
            }
            hashs -= (hashs / base) * base;
            hashs = hashs * 2 + infiniteStream.next();
            idx++;
        }
    }
}
```