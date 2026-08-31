# C++ solution | Two pointer Approach

**Author:** kritika_12
**Votes:** 142
**Link:** [https://leetcode.com/problems/valid-palindrome-ii/solutions/1324407/](https://leetcode.com/problems/valid-palindrome-ii/solutions/1324407/)

---

**Two Pointer Approach**

i is at 0th index;
j is at last index 

while checking for i and j pointers if they are equal than just move the pointers. 
if they aren't equal there could be two cases  i != j
if  we delete ith index character check for the i+1 to j are they a palindrome?  if yes than the whole string is palindrome.
case 2: skip jth index character and see if i to j-1 are a palindrome or not 

	Time complexity - O(N) 
	Space complexity - O(1)


```
class Solution {
public:
    bool ispalindrome(string s, int i, int j){
        while(i < j){
            if(s.at(i) == s.at(j)){
                i++;
                j--;
            }else return false;
        }
        return true;
    }
    bool validPalindrome(string s) {
        int i  = 0;
        int j = s.size()-1;
        while(i < j){
            if(s.at(i) == s.at(j)){
                i++;
                j--;
            }else{
                return ispalindrome(s, i+1, j) || ispalindrome(s, i, j-1);
            }
        }
        return true;
    }
};
```
**Please upvote if you like the solution and comment if have doubts**
