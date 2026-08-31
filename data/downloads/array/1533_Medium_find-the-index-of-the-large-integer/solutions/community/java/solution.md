# Java. They key is to handle odd and even number of elements separately

**Author:** o_inari
**Votes:** 16
**Link:** [https://leetcode.com/problems/find-the-index-of-the-large-integer/solutions/926651/](https://leetcode.com/problems/find-the-index-of-the-large-integer/solutions/926651/)

---

The key is to figure out whether the array has odd or even number of elements. The rest is standard binary search.

If we have odd number of elements, include mid. 
Sum of left array is 6 + 6 = 12, right array is 6 + 12 = 18.  
If we do not include mid, left sum and right sum would both be 12. We would get the wrong index.
```
arr = [6,6,12]
         ^ include m
```
If we have even number of elements, do not include mid.
Sum of left array is 7 + 7 + 7 + 7 = 28, right array is 10 + 7 + 7 + 7 = 31. Obviously, the larger element is on the right.
```
arr = [7,7,7,7, | 10,7,7,7]
                ^ split into two parts
```

Time Complexity: O(logN)
Space Complexity: O(N)

```
public int getIndex(ArrayReader reader) {
    int l = 0, r = reader.length() - 1;
    
    while (l < r) {
        int m = l + (r - l) / 2;
        int val;
        if ((r - l) % 2 == 0) {
            val = reader.compareSub(l, m, m, r);
        } else {
            val = reader.compareSub(l, m, m + 1, r);
        }
        
        if (val == 1) {
            r = m;
        } else if (val == -1) {
            l = m + 1;
        } else if (val == 0) {
            return m;
        }
    }
    
    return l;
}
```