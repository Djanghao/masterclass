# Dart simple solution explained

**Author:** Mahmoud_Zakaria
**Votes:** 7
**Link:** [https://leetcode.com/problems/add-binary/solutions/2845357/](https://leetcode.com/problems/add-binary/solutions/2845357/)

---


If you Learned something new please give it upvote;
otherwise thank you for having a look \uD83D\uDE4F\uD83C\uDFFB

# Code
```
class Solution {
  String addBinary(String a, String b) {
      String sum="" ; //result string
       int i = a.length-1 , j= b.length-1 , c=0 ;//c=carry, i=last index of string a, j=last index of string b
       while(i>=0||j>=0||c>0){// i==0 || j==0 means run loop till we cover both strings completely and c>0 states even if we covered both strings but carry still remains
           if(i>=0)c += int.parse(a[i--]) ;// carry=carry+ int value of a[i]
           if(j>=0)c += int.parse(b[j--]) ;// carry=carry + int value of b[j]
           sum = (c%2).toString() + sum ;//  c%2 means insert 0 if carry==0  or carry==2 (1+1) because ('1'+'1'=0 in binary) else insert 1 ('0'+'1'=1)
           c= c~/2 ; //if c==2 or 3, there is a carry i.e 1 otherwise no carry (3 in case if prev c=1 and a[i]=1 and b[i]=1)
       }
       
       return sum ;

  }
}
```






Pls upvote the solution if you found helpful, it means a lot.
Also comment down your doubts.
Happy Coding :)