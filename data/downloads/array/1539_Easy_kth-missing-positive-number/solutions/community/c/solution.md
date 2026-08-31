# C++ 2-LINER SIMPLEST!! O(n) time, O(1) space - faster than 99%

**Author:** YehudisK
**Votes:** 190
**Link:** [https://leetcode.com/problems/kth-missing-positive-number/solutions/1004517/](https://leetcode.com/problems/kth-missing-positive-number/solutions/1004517/)

---

```
class Solution {
public:
    int findKthPositive(vector<int>& arr, int k) {
        for (auto a : arr) if (a <= k) k++;
        return k;
    }
};
```
**Like it? please upvote...**
**Explanation:**
The array is strictly increasing - no repeating values.
One case is, that the first element in the array is larger than k - which means all elements are larger than k.
In this case the answer will be k.
For example: arr = [5,6,7,8] k = 3
the missing numbers are: [1,2,3,4] third missing number is 3 = k.
Now, for every element that is smaller than k, if we increment k - we'll get the right answer at the end. 
Example: arr = [1,2,4,6,7] k = 3
For the first and second elements we increment k because if we take [1,2,3,4,5...] k=3 two numbers exist in arr so we go to the next numbers.
But now k=5, so we increment it also for 4, and so on...