# Java | 4 lines

**Author:** Student2091
**Votes:** 4
**Link:** [https://leetcode.com/problems/valid-palindrome-iv/solutions/2248146/](https://leetcode.com/problems/valid-palindrome-iv/solutions/2248146/)

---

Not sure why this is a medium while [680. Valid Palindrome II](https://leetcode.com/problems/valid-palindrome-ii/) is easy. 

For this problem, since we are not deleting anything, we just have to count the occurrences of mismatches and determine if it is less than 3.
```Java
class Solution {
    public boolean makePalindrome(String s) {
        int i = 0, j = s.length()-1, miss=0;
        while(i<j&&(s.charAt(i)==s.charAt(j)||++miss<3)){
            i++;
            j--;
        }
        return miss < 3;
    }
}
```