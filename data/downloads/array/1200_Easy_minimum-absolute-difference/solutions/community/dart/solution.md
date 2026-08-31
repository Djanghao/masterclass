# dart solution

**Author:** jincykp
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-absolute-difference/solutions/6048348/](https://leetcode.com/problems/minimum-absolute-difference/solutions/6048348/)

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
  List<List<int>> minimumAbsDifference(List<int> arr) {
    
    arr.sort();
    int small=arr[1]-arr[0];
    for(int i=0;i<arr.length-1;i++){
   int b=arr[i+1]-arr[i];
   small=b<small? b:small;
    }
    List<List<int>> result=[];
    for(int i=0;i<arr.length-1;i++){
       if(arr[i+1]-arr[i]==small){
       result.add([arr[i],arr[i+1]]);
    }
    }

    return result;
  }
}
```