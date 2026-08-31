# Dart Solution || easy solution

**Author:** mennazakaria
**Votes:** 3
**Link:** [https://leetcode.com/problems/fizz-buzz/solutions/3150917/](https://leetcode.com/problems/fizz-buzz/solutions/3150917/)

---


# Code
```
class Solution {
  List<String> fizzBuzz(int n) {
     var v =new  List.filled(n,"");
      for ( int i=1;i<=n;i++){
          if (i%3==0 && i%5==0 ) v[i-1]=("FizzBuzz");
        else if (i%3==0 ) v[i-1]=("Fizz");
          else  if ( i%5==0 )v[i-1]=("Buzz");
          else v[i-1]=(i.toString());
      }  
      return v;
  }
}
```