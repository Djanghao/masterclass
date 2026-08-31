# Greedy Solution || Java || Time O(NlogN) and Space:O(1)

**Author:** HIMANSHUCHHIKARA
**Votes:** 2
**Link:** [https://leetcode.com/problems/maximum-number-of-consecutive-values-you-can-make/solutions/1118929/](https://leetcode.com/problems/maximum-number-of-consecutive-values-you-can-make/solutions/1118929/)

---


```
 public int getMaximumConsecutive(int[] coins) {
        Arrays.sort(coins);
        int result=1;
        
        int idx=0;
        while(idx<coins.length && result>=coins[idx]){
            result+=coins[idx];
            idx++;
        }
        return result;
    }
	```