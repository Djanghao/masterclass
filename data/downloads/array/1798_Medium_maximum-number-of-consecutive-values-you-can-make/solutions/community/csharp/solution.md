# C# Solution Using Concatenation

**Author:** Jack0001
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-consecutive-values-you-can-make/solutions/4142762/](https://leetcode.com/problems/maximum-number-of-consecutive-values-you-can-make/solutions/4142762/)

---

# Intuition


# Approach
assume we have found [0..biggest], in order for the consecutive, the next coin value have to be <=biggest+1, if that satisfies, we can concatenate the smallest we found and the biggest would be this coin value plus "biggest" we found before.

# Complexity
- Time complexity:
O(nlogn)

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
public class Solution {
    public int GetMaximumConsecutive(int[] coins) {
        int lastSml = 0, lastBig = 0;
        int largest = 1;

        Array.Sort(coins);

        for(int i=0; i<coins.Length; ++i){
            int val = coins[i];
            int sml, big;
            if(val > lastBig+1){
                sml = val;
                break;
            }
            else{
                sml = lastSml;
            }

            lastSml = sml;
            lastBig = val + lastBig;
            largest = Math.Max(largest, lastBig-lastSml+1);
        }

        return largest;
    }
}
```