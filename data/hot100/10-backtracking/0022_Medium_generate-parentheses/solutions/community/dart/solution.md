# SImple Dart Solution W/ Explanation

**Author:** AndreLock
**Votes:** 1
**Link:** [https://leetcode.com/problems/generate-parentheses/solutions/3572634/](https://leetcode.com/problems/generate-parentheses/solutions/3572634/)

---


# Approach
To solve this problem we first need to understand that valid parenthesis can only be generated if the number of left parenthesis and right are equal while also making sure the left always come before the right. To do this I created a function that takes in the number of left and right parentheses to generate. The base case is if the left and right are 0 meaning that no more parentheses can be generated in that case you return "" and from there the string gets filled on it's way up. If there are still parentheses to created then it creates one path for the left if left > 0 and one for the right if there are more left parentheses than right meaning that the right parentheses has an existing match which is necessary for the parentheses to be valid. 

# Complexity
- Time complexity:
O(2^n)

# Code
```
class Solution {
  List<String> generateParenthesis(int n) {
      return parenthesis(n , n);
  }
  List<String> parenthesis(int left , int right){
      if(left == 0 && right == 0){
          return [""];
      }
      List<String> return_ls = [];
      if(left != 0){
          List<String> l1 = parenthesis(left - 1 , right);
          for(int i = 0 ; i < l1.length ; ++i){
            l1[i] = '(' + l1[i];
            return_ls.add(l1[i]);
          }
      }
      if(right != 0 && left < right){
          List<String> r1 = parenthesis(left , right - 1);
          for(int i = 0 ; i < r1.length ; ++i){
              r1[i] = ')' + r1[i];
              return_ls.add(r1[i]);
          }
      }
      return return_ls;
  }
}
```