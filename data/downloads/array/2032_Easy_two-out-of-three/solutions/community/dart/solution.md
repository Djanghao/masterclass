# Simple solution using forloop

**Author:** Geopaul93
**Votes:** 0
**Link:** [https://leetcode.com/problems/two-out-of-three/solutions/6014649/](https://leetcode.com/problems/two-out-of-three/solutions/6014649/)

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
  List<int>? twoOutOfThree(List<int> nums1, List<int> nums2, List<int> nums3) {
    List<int>output=[];
 
   Set<int> _set = {};
    nums1.sort();
    nums2.sort();
    nums3.sort();
    for(int i =0;i<nums1.length;i++){

for(int j =0;j<nums2.length;j++){
if(nums1[i]==nums2[j]){
    output.add(nums1[i]);
}}
    for(int k =0;k<nums3.length;k++){
        for(int j=0;j<nums2.length;j++){
   if(nums1[i]==nums3[k]  || nums3[k]==nums2[j]){


           output.add(nums3[k]);
 output.add(nums3[k]);

        }
        


    }
 }

   }



 
 _set=  {...output};

  
output=[..._set];
 return output;
  }
}
```