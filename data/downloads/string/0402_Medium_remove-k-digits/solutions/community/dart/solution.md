# Dart solution

**Author:** DanyloAdamiuk
**Votes:** 1
**Link:** [https://leetcode.com/problems/remove-k-digits/solutions/3971422/](https://leetcode.com/problems/remove-k-digits/solutions/3971422/)

---



# Code
```
class Solution {
  String removeKdigits(String num, int k) {
      List<String> stack = [];
      
    for(int i = 0; i<num.length; i++) {
       while(k>0 && stack.isNotEmpty && int.parse(stack.last) > int.parse(num[i]) )
         {
             k-=1;
             stack.removeLast();
         }
          stack.add(num[i]);
    }
      
      
      stack.removeRange(stack.length-k, stack.length);
      
      if(stack.isEmpty){
          return '0';
      }
      return stack.join('').replaceAll(new RegExp(r'^0+(?=.)'), '');
  }
}
```