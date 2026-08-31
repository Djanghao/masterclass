# simple solution using map

**Author:** Ajaymanikandan
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-pairs-of-similar-strings/solutions/5813452/](https://leetcode.com/problems/count-pairs-of-similar-strings/solutions/5813452/)

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
  int similarPairs(List<String> words) {
    
 int res =0;
   List<String> value = words.map((word) {
    return (word.split('')..sort()).toSet().join();
  }).toList();
print(value);
   for(var i=0;i<value.length;i++){
    for (var j=i+1;j<value.length;j++){
        if(value[i]==value[j]){
            res++;
        }
    }
   }
return res;
  }
}
```