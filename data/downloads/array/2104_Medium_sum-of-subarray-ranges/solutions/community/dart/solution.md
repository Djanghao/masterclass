# Direct Approach Using Subarray Method || Using Java and Dart

**Author:** logith_04
**Votes:** 0
**Link:** [https://leetcode.com/problems/sum-of-subarray-ranges/solutions/4008316/](https://leetcode.com/problems/sum-of-subarray-ranges/solutions/4008316/)

---



# Java Code
```
class Solution {
    public long subArrayRanges(int[] nums) {
        long count = 0;
        for(int i =0;i<nums.length;i++){
            int min = 2147483647,max = -2147483647;
            for(int j = i;j<nums.length;j++){
                min = Math.min(min,nums[j]);
                max = Math.max(max, nums[j]);
                count +=(max-min);
            }
        }
        return count;
    }
}
```
# Dart Code
```
class Solution {
  int subArrayRanges(List<int> nums) {
      int count = 0;
        for(int i =0;i<nums.length;i++){
            int minnum = 2147483647,maxnum = -2147483647;
            for(int j = i;j<nums.length;j++){
                minnum = min(minnum,nums[j]);
                maxnum = max(maxnum, nums[j]);
                count +=(maxnum-minnum);
            }
        }
        return count;
  }
}
```