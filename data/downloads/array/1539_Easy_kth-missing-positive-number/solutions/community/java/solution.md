# Java 1 liner O(n) simplest, easy to understand beats 100%

**Author:** niranjvin
**Votes:** 329
**Link:** [https://leetcode.com/problems/kth-missing-positive-number/solutions/876751/](https://leetcode.com/problems/kth-missing-positive-number/solutions/876751/)

---

Note that the array is in strictly increasing order and hence there is no repetition.

Think of this case, if every element in the array > k , the answer would be k. 

So, for every element <= k , you need to increment k. (i.e. when you iterate from left to right). And since the array is in increasing order, you can break out of the loop on the first instance this condition fails.

```
class Solution {
    public int findKthPositive(int[] arr, int k) {
        for(int i : arr){
			if(i <= k) k++; else break;
		}
        return k;
    }
}
```