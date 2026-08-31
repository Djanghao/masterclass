# Kotlin solution | without IntArray and ArrayList

**Author:** K_Anvarbek
**Votes:** 6
**Link:** [https://leetcode.com/problems/intersection-of-two-arrays-ii/solutions/2426081/](https://leetcode.com/problems/intersection-of-two-arrays-ii/solutions/2426081/)

---

```
class Solution {
    fun intersect(nums1: IntArray, nums2: IntArray): IntArray {
        
        val cnt = IntArray(1001){0}
        val list = ArrayList<Int>()
        
        nums1.forEach{
            cnt[it]++
        }
        
        nums2.forEach{
            if(cnt[it]>=1){
                list.add(it)
                cnt[it]--
            }
        }
        
        return list.toIntArray()
        
    }
}
```