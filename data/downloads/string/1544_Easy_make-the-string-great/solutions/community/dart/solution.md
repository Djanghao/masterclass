# Dart Solution 💯

**Author:** michaelopoku790
**Votes:** 0
**Link:** [https://leetcode.com/problems/make-the-string-great/solutions/5070525/](https://leetcode.com/problems/make-the-string-great/solutions/5070525/)

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
```
class Solution {
  String makeGood(String s) {
    List<String> goodString = [];
    for(var element in s.split('')){
        //1
         if(goodString.isNotEmpty && (element.toLowerCase() == goodString.last.toLowerCase()) && (element != goodString.last)){
                goodString.removeLast();
            }
        //2
        else{     
            goodString.add(element);
        }
    }
    return goodString.join('');
  }
}
```