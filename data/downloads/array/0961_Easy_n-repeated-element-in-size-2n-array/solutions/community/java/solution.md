# Java 0MS Set

**Author:** Trevor-akshay
**Votes:** 11
**Link:** [https://leetcode.com/problems/n-repeated-element-in-size-2n-array/solutions/1068166/](https://leetcode.com/problems/n-repeated-element-in-size-2n-array/solutions/1068166/)

---

```
class Solution {
    public int repeatedNTimes(int[] A) {
        Set<Integer> set = new HashSet<>();
        for(int num : A) {
            if(set.contains(num)) return num;
            else set.add(num);
        }
        return -1;
    }
}