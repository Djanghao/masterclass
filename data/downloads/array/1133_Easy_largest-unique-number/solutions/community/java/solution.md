# Java, O(n) time, O(1) space, simple, explained

**Author:** gthor10
**Votes:** 3
**Link:** [https://leetcode.com/problems/largest-unique-number/solutions/417025/](https://leetcode.com/problems/largest-unique-number/solutions/417025/)

---

We can save number of times we seen every number in the array, where index is the number and value is number of times we've seen it. We can do it in one array scan.
After that we iterate over that array of counts in desc order of indexes and first element == 1 will be our answer - we met it only once and it's greatest because we are started from the highest possible and going down one by one.
O(n) time - for linear scan to save number of times element seen, O(1) space - need 1001 elements array.

```
    public int largestUniqueNumber(int[] A) {
        int[] c = new int[10001];
        for (int n : A) 
            c[n]++;
        
        for (int i = 1000; i >= 0; i--) 
            if (c[i] == 1)
                return i;
        
        return -1;
    }
```