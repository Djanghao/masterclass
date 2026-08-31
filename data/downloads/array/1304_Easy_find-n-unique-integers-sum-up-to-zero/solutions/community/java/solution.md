# Java O(n) solution with explanation 0ms 100%

**Author:** eduardrg
**Votes:** 39
**Link:** [https://leetcode.com/problems/find-n-unique-integers-sum-up-to-zero/solutions/922269/](https://leetcode.com/problems/find-n-unique-integers-sum-up-to-zero/solutions/922269/)

---

Set the values at each sequential pair of indices such that they sum to 0 and each of these pairs is unique.
Idea: use ```i,-i``` for the values at each pair of indices ```i, i+1```. 
This won't work if ```i = 0``` because the first two elements would be ```0, 0```. Use ```i+1, -(i+1)``` instead to make it work for all ```i```.
After the loop, all elements up to the last even index are unique and sum to ```0```. We don't have to worry if ```n``` is odd because the last element would have been initialized to ```0``` and ```0 + 0 = 0```, so we're done.
Statements in the loop execute ```n/2``` times, so the time complexity is ```O(n)```.

```
class Solution {
    public int[] sumZero(int n) {
        int[] result = new int[n];
        for (int i = 0; i < n - 1; i += 2) {
            result[i] = i + 1;
            result[i + 1] = -(i + 1);
        }
        return result;
    }
}
```