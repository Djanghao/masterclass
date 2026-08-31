# JAVA | faster than 94.95% | Bit Masking using XOR

**Author:** architaapandey
**Votes:** 6
**Link:** [https://leetcode.com/problems/circular-permutation-in-binary-representation/solutions/1190658/](https://leetcode.com/problems/circular-permutation-in-binary-representation/solutions/1190658/)

---

I've done bit masking using XOR and achieved the following results : 
faster than 94.95%
memory used less than 80.81%

Do upvote if you like the solution, and comment if optimizations are possible.

```
class Solution {
    public List<Integer> circularPermutation(int n, int start) {
    List<Integer> list = new ArrayList<>();
        int i;
        for(i=0;i<(1<<n);i++)
            list.add(start^i^(i>>1));
        return list;
    }
}
```

Thank You!