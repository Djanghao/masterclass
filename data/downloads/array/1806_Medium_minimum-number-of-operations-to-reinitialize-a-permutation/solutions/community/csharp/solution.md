# C# Solution

**Author:** anshulgarg904
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-operations-to-reinitialize-a-permutation/solutions/4486815/](https://leetcode.com/problems/minimum-number-of-operations-to-reinitialize-a-permutation/solutions/4486815/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
public class Solution {
    public int ReinitializePermutation(int n) {
        int[] perm = new int[n];
        int res=0;

        for(int i=0; i<n; i++){
            perm[i] = i;
        }

        while(true){
            int[] nextPerm = new int[n];
            bool equal = true;
            res++;

            for(int i=0; i<n; i++){
                if((i&1) == 0){
                    nextPerm[i] = perm[i/2];
                }
                else{
                    nextPerm[i] = perm[n/2 + (i - 1)/2];
                }

                equal = equal && nextPerm[i] == i;
            }

            if(equal){
                return res;
            }

            perm = nextPerm;
        }

        return n;
    }
}
```