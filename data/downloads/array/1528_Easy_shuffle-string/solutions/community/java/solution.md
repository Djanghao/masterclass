# Java ✅ || Runtime 1 ms✅  || Beats 100% ✅

**Author:** sourabh-jadhav
**Votes:** 65
**Link:** [https://leetcode.com/problems/shuffle-string/solutions/3160204/](https://leetcode.com/problems/shuffle-string/solutions/3160204/)

---

# Intuition
Declared **length** of int type to hold length of string
Declared and Indtilized **StringBuilder** to ""
Declared **Char Array** of size of String;

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n)

# Code
```
class Solution {
    public String restoreString(String s, int[] indices) {
        
        int length=s.length();
        StringBuilder sb=new StringBuilder("");
         char c[]=new char[length];
       
        for(int i=0;i<length;i++){

            c[indices[i]]=s.charAt(i);

        }
        sb.append(c);
        return sb.toString();
    }
}
```
![478xve.jpg](./images/0.jpeg)
