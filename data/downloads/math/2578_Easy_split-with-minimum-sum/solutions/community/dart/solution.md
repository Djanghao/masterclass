# dart simple  solution easy to understand

**Author:** arshad_kk
**Votes:** 0
**Link:** [https://leetcode.com/problems/split-with-minimum-sum/solutions/4538317/](https://leetcode.com/problems/split-with-minimum-sum/solutions/4538317/)

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
  int splitNum(int num) {
   String numstring= num.toString();
  List<int> numInt = numstring.split('').map(int.parse).toList();
   numInt.sort();
   String num1= '';
   String num2= '';
   for(int i=0 ; i<numInt.length ; i++){
       if(i%2==0){
           num1 += numInt[i].toString();
          
       }
       else{
            num2 +=numInt[i].toString() ;
       }
   }
   int sum = int.parse(num1)+int.parse(num2);
   return sum ;
  }
}
```