# My Java Solution with idea given as comments

**Author:** vRohith
**Votes:** 79
**Link:** [https://leetcode.com/problems/check-if-array-is-sorted-and-rotated/solutions/1053807/](https://leetcode.com/problems/check-if-array-is-sorted-and-rotated/solutions/1053807/)

---

```
class Solution {
    public boolean check(int[] nums) {
        // here we compare all the neighbouring elemnts and check whether they are in somewhat sorted
        // there will be a small change due to rotation in the array at only one place.
        // so if there are irregularities more than once, return false
        // else return true;
        int irregularities = 0;
        int length = nums.length;
        for (int i=0; i<length; i++) {
            if (nums[i] > nums[(i + 1) % length])
                irregularities += 1;
        }
        return irregularities > 1 ? false : true;
    }
}
```