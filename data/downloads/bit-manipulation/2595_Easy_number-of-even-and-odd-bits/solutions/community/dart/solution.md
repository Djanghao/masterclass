# Dart Solution

**Author:** vinayaaugusthy
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-even-and-odd-bits/solutions/4526913/](https://leetcode.com/problems/number-of-even-and-odd-bits/solutions/4526913/)

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
  List<int> evenOddBit(int n) {
    List<int> arr=[];int eCount=0;int odd=0;
List<int> answer=[];
while(n>0){
   if(n%2==0){
       arr.add(0);
   }else{
       arr.add(1);
   }
   n=n~/2;
   } 
//   List<int> ans=arr.reversed;
//   print(ans);
for(int i=arr.length-1;i>=0;i--){
  if(arr[i]==1 && i%2==0) eCount++;
  if(arr[i]==1 && i%2==1) odd++;
}
  answer.add(eCount);
  answer.add(odd);
  return answer;
  }
}
```