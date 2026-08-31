# Detailed Explanation With Thought Process

**Author:** tara-97
**Votes:** 13
**Link:** [https://leetcode.com/problems/minimum-number-of-operations-to-reinitialize-a-permutation/solutions/1131138/](https://leetcode.com/problems/minimum-number-of-operations-to-reinitialize-a-permutation/solutions/1131138/)

---

First i tried to find the pattern. After taking example the question conveterd to

`Imagine there is a infinite list and you are just tracking the index of  1. After how many repetation you find the `1` in the same position as it was in intial array i.e in index 1 . `

And the position of 1 gets updated as 2,4,8....Why? Because you know in every reps, even index gets value from `[index/2] `.

ex -> in 1st rep `list[2] = list [1]`. in 2nd rep` list[4] = list[2]`  .And so on

But we don't have infinite list. So index gets wrap around (n-1).
So when again the index  is 1 we return our ans.

```
class Solution {
    public int reinitializePermutation(int n) {
        int ans = 1;
        int num = 2;
        if(n == 2) return 1;
        while(true){
            if(num % (n-1) == 1)break; 
            else {
                ans++;
                num = (num * 2) % (n-1);
            }
        }
        return ans;
        
    }
}
```



