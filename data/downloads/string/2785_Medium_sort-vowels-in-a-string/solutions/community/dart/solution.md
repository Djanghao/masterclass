# using sorting  and stack

**Author:** subruZz
**Votes:** 0
**Link:** [https://leetcode.com/problems/sort-vowels-in-a-string/solutions/5831719/](https://leetcode.com/problems/sort-vowels-in-a-string/solutions/5831719/)

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
  String sortVowels(String s) {
    Set vowel = {'A', 'a', 'E', 'e', 'I', 'i', 'O', 'o', 'U', 'u'};
    List<String> vowels=[];
    List<String> list = s.split('');
    for( int i=0;i<s.length;i++){
        if(vowel.contains(s[i])){
            vowels.add(s[i]);
        }
    } 
   vowels.sort((a, b) => b.codeUnitAt(0).compareTo(a.codeUnitAt(0)));
    for( int i=0;i<list.length;i++){
     if(vowel.contains(list[i])){
        list[i]=vowels.removeLast();
     }
    } 
    return list.join();

  }
}

```