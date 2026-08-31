# Java Simple Binary Search + Explanation

**Author:** yerlandinata
**Votes:** 170
**Link:** [https://leetcode.com/problems/cutting-ribbons/solutions/1263437/](https://leetcode.com/problems/cutting-ribbons/solutions/1263437/)

---

**Observation**
First, let's forget the "maximum" part, if you are only asked to verify whether you can make at least k cut with length of x, you can do that in O(N). 
```
    public boolean isCutPossible(int[] ribbons, int length, int k) {
        int count = 0;
        for (int ribbon: ribbons) {
            count += (ribbon / length);
        } // I could've written an early 'return' here to save some computation, but for me, the more "if", the more likely to bug
        return count >= k;
    }
```

Because we are asked to find the maximum valid answer, if you try to guess from 1 to Integer.MAX_VALUE, you will get this:
1:valid, 2: valid, 3: valid, ..., x: valid, x+1: invalid, x+2: invalid, x+3: invalid  (x is the answer)
Now it's looks like a legit binary search: find the the last valid value, or like find the last 0 in an array like this: [0,0,0,0,0,1,1,1,1]

**Binary Search**
If until today you are still struggling to write a binary search, I suggest you read this article: https://medium.com/swlh/binary-search-find-upper-and-lower-bound-3f07867d81fb
For me, I *thought* understand binary search since my first year in college, but every time I was asked to write a binary search code, I could write it in just a minute but then I would spend 10 minutes debugging: this corner case and that corner case and infinite loop case.
Once I understand the concept of lower bound and upper bound, you will notice that in general, there are only two ways to code binary search: find lower bound or find upper bound.

Because I only memorize lower bound implementation of binary search codes, the implementation below is a lower bound binary search implementation.
Instead of finding the last valid answer (upper bound of valid answer), I try to find the first invalid answer (lower bound of invalid answer).
Then lastly, decrement by 1, obviously.


```
class Solution {
    public int maxLength(int[] ribbons, int k) {
        int l = 1;
        int r = (int) 1e5 + 1;
        while (l < r) {
            int mid = l + ((r - l) >> 1);
            
            if (!isCutPossible(ribbons, mid, k)) {
                r = mid;
            } else {
                l = mid + 1;
            }
        }
        return l - 1;
    }

}
```

The final running time is O(N log (max length)) with O(1) auxilary space.