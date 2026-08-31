# this solution may feel little complex but i will try to explain

**Author:** subruZz
**Votes:** 0
**Link:** [https://leetcode.com/problems/make-three-strings-equal/solutions/4806641/](https://leetcode.com/problems/make-three-strings-equal/solutions/4806641/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
so first i added all the string to a list so i can easily find the longest common prefix. so now try to understand the for and while loop .it is important to understand that . may take some time and thats completely ok . after finding the longest common prefix i did this 
 return checkString.isEmpty?-1: (s1.length+s2.length+s3.length)-(3*checkString.length);
i will explain it .
take the first eg abc, abb, ab here longest common prefix is ab right?
so first we will calculate the total length of all string which is 3+3+2=8.  then we will minus it with 3* *x longest prefix length. its because  common prefix will be same for all strings right? in our case ab which has length of 2 . and its present in all strings .and ab is the longest common prefix so we dont want to include that in the count .so will minus the length of ab from all string which we can do by 3*ab.length in our case and its changes based on the test cases. so after finding out this we can substract and get our answers. 
I hope this made some sense. My english isn't that great but i tried my best to give the explanation. If you have better logic than this please reply to this. also if you have any doubt about my approach feel free to ask
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
  int findMinimumOperations(String s1, String s2, String s3) {
    List<String> s=[s1,s2,s3];
    int c=0;
    String checkString=s1;
    for(var word in s){
    while(word.startsWith(checkString)==false){
    checkString = checkString.substring(0, checkString.length - 1);
    
    }
    }
    return checkString.isEmpty?-1: (s1.length+s2.length+s3.length)-(3*checkString.length);
  }
}
```