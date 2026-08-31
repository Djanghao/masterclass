# easy

**Author:** ANSINA_ROSE_ISMAYEEL
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-common-characters/solutions/5361071/](https://leetcode.com/problems/find-common-characters/solutions/5361071/)

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
  List<String> commonChars(List<String> words) {
  List<String>  result = words[0].split('');
  
   for(String word in words){
   List<String> store = [];
   for(var i=0;i<word.length;i++){
    
        if(result.contains(word[i])){
           result.remove(word[i]);
           store.add(word[i]);
           

           
        }
    }
    result = store;
   
}
return result;
  }
}
```