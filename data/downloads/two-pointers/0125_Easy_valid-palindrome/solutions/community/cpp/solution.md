# 🚀Super Clean |C++ ✅|Easy code with explanation  | O(n)

**Author:** msfxvenom
**Votes:** 726
**Link:** [https://leetcode.com/problems/valid-palindrome/solutions/3572960/](https://leetcode.com/problems/valid-palindrome/solutions/3572960/)

---

# Intuition
By reading the question you may think that first we need to convert the string to desired form and then check if its a valid palindrome or not.

But all of that is just distraction you can check valid palindrome by simply using two pointers no need to convert.

<!-- Describe your first thoughts on how to solve this problem. -->

# Approach

If a character is not alphanumeric we can simply ignore it and update our pointer to next character (for both pointers)

and then we check by converting the alphanumeric character to lowercase (tolower() function on numbers has no change)
if those two are not equal then return false(not palindrome)
else update both pointers and continue.

Finally after all checking if reach at last then string must be a valid palindrome so return true.
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:$$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:$$O(1)$$ since only use two pointers
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
public:
    bool isPalindrome(string s) {
       int start=0;
       int end=s.size()-1;
       while(start<=end){
           if(!isalnum(s[start])){start++; continue;}
           if(!isalnum(s[end])){end--;continue;}
           if(tolower(s[start])!=tolower(s[end]))return false;
           else{
               start++;
               end--;
           }
       }
       return true;
}
};
```
## PS - Please upvote (bottom left) if this solution was helpful :) It motivates me to write more solutions
