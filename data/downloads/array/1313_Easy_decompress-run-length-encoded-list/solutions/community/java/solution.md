# Java 100% time

**Author:** yurokusa
**Votes:** 159
**Link:** [https://leetcode.com/problems/decompress-run-length-encoded-list/solutions/521777/](https://leetcode.com/problems/decompress-run-length-encoded-list/solutions/521777/)

---

```java
class Solution {
    public int[] decompressRLElist(int[] nums) {
        int arrSize = 0;
        for (int i = 0; i < nums.length; i += 2) {
            arrSize += nums[i];
        }
        
        int[] result = new int[arrSize];

        int startIdx = 0;
        for (int i = 0; i < nums.length; i += 2) {
            Arrays.fill(result, startIdx, startIdx + nums[i], nums[i + 1]);
            startIdx += nums[i];
        }
        return result;
    }
}
```