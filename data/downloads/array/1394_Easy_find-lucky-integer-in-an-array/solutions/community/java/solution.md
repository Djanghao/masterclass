# Java 100% time 100% space O(n)

**Author:** robsalcedo
**Votes:** 19
**Link:** [https://leetcode.com/problems/find-lucky-integer-in-an-array/solutions/557078/](https://leetcode.com/problems/find-lucky-integer-in-an-array/solutions/557078/)

---

```
public int findLucky(int[] arr) {
        int[] nums = new int[501];
        for(int a : arr) nums[a]++;
        for(int i = 500;i>0;i--)
			if(nums[i]==i) return i;
        return -1;
    }
```