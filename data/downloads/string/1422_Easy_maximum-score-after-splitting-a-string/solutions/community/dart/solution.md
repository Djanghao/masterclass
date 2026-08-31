# Easy clearance Dart program

**Author:** deepakumar-developer
**Votes:** 5
**Link:** [https://leetcode.com/problems/maximum-score-after-splitting-a-string/solutions/4441301/](https://leetcode.com/problems/maximum-score-after-splitting-a-string/solutions/4441301/)

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
  int maxScore(String s) {
    List<String> left,right;
    List<int> output = [];
    if(s.length == 2){
        left = s.substring(0,1).split("");
        right = s.substring(1).split("");
        output.add( left.where((element) => element == "0").length + right.where((element) => element =="1").length );
    } else {
        for(int i=1;i<s.length-1;i++){
            left = s.substring(0,i+1).split("");
            right = s.substring(i).split("");
            output.add( left.where((element) => element == "0").length + right.where((element) => element =="1").length );
        }
    }
    output.sort();
    return output[output.length-1];

  }
}
```