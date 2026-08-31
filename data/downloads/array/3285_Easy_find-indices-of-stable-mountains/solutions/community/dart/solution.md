# Dart 1ms

**Author:** Muhammed_Shebin
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-indices-of-stable-mountains/solutions/6078830/](https://leetcode.com/problems/find-indices-of-stable-mountains/solutions/6078830/)

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
  List<int> stableMountains(List<int> height, int threshold) {
    List<int> result=[];
    for(int i =1;i<height.length;i++){
        if(height[i-1]>threshold){
            result.add(i);
        }
    }
    return result;
  }
}
```