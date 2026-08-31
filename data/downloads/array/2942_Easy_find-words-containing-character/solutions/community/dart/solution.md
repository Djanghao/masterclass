# Dart

**Author:** Muhammed_Shebin
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-words-containing-character/solutions/6060717/](https://leetcode.com/problems/find-words-containing-character/solutions/6060717/)

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
  List<int> findWordsContaining(List<String> words, String x) {
    List<int>result=[];
    for(int i=0;i<words.length;i++){
        bool flag=false;
        for(int j=0;j<words[i].length;j++){
            if(words[i].contains('$x')){
                flag=true;
                break;
            }
        }
        if(flag==true){
            result.add(i);
        }
    }
    return result;
  }
}
```