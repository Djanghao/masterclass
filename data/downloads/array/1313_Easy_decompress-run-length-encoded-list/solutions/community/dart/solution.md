# Dart 1ms

**Author:** Muhammed_Shebin
**Votes:** 0
**Link:** [https://leetcode.com/problems/decompress-run-length-encoded-list/solutions/6059697/](https://leetcode.com/problems/decompress-run-length-encoded-list/solutions/6059697/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```dart []
class Solution {
  List<int> decompressRLElist(List<int> nums) {
    List<int> result = [];
    for(int i=0;i<nums.length;i+=2){
        for(int j=0;j<nums[i];j++){
            result.add(nums[i+1]);
        }
    }
    return result;
  }
}
```