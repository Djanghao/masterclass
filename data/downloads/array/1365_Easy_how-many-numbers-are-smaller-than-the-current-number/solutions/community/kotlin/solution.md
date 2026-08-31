# Kotlin + Java Solution || 236ms & 21ms || Commented

**Author:** Z3ROsum
**Votes:** 2
**Link:** [https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/solutions/2107687/](https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/solutions/2107687/)

---

**Kotlin** (original)
```
class Solution {
    fun smallerNumbersThanCurrent(nums: IntArray): IntArray {
        val less = IntArray(nums.size)
        for (i in nums.indices) {
            var num = 0 // number of elements smaller than this one
            for (j in nums.indices) {
                if (i != j && nums[j] < nums[i]) {
					num++ // nums[j] is less than nums[i]
				}
            }
            less[i] = num // completed one number!
        }
        return less
    }
}
```

**Java** version
same basic idea though
```
class Solution {
    public int[] smallerNumbersThanCurrent(int[] nums) {
        int[] less = new int[nums.length];
        for (int i = 0; i < nums.length; i++) {
            var num = 0;
            for (int j = 0; j < nums.length; j++) {
                if (i != j && nums[j] < nums[i]) num++;
            }
            less[i] = num;
        }
        return less;
    }
}
```
