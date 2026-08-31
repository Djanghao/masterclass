# Dart Solution

**Author:** tashtanov333
**Votes:** 0
**Link:** [https://leetcode.com/problems/solve-the-equation/solutions/3386120/](https://leetcode.com/problems/solve-the-equation/solutions/3386120/)

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
 String solveEquation(String equation) {
  var s=equation.split('=');
  List<int>right=solve(s.last);
  List<int>left=solve(s.first);
  int x=right[0]-left[0];
  int val=right[1]-left[1];
  if(x==0){
    if(val!=0){
      return "No solution";
    }
    else{
      return "Infinite solutions";
    }
  }
  int xValue=(-val)~/x;
  return "x=$xValue";
}
List<int> solve(String ex){
  List<int> q=[0,0];
  var s=ex.split(RegExp(r'(?=[-+])'));
  for(var el in s){
    if(el=="+x"||el=="x"){
      q[0]++;
    }
    else if(el=="-x"){
      q[0]--;
    }
    else if(el.contains("x")){
      q[0]+=int.parse(el.substring(0,el.indexOf("x")));
    }
    else{
      q[1]+=int.parse(el);
    }
  }
  return q;
}
}
```