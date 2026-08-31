# Super simple approach, beats 100%, O(1) space and O(n) time, YouTube Video added

**Author:** vinod_aka_veenu
**Votes:** 23
**Link:** [https://leetcode.com/problems/minimum-add-to-make-parentheses-valid/solutions/5888834/](https://leetcode.com/problems/minimum-add-to-make-parentheses-valid/solutions/5888834/)

---

# Youtube Solution https://youtu.be/UojbHmdbj7Q
# Intuition and approach
  keep it very very simple guys , just like below :- 
  i have variable **open = 0, mismatch = 0**
  now traverse in the string 
if **char = '('** ==> open++;
else ===> **if(open>0)==> open--** ; (because we have to decrease open count as we found pairing close bracket)
 but **if(open==0)** that means we are finding closing bracket without having an open bracket ===> like below case
**)()()** ===> we have a **leading close bracket** and no open one

so we will increase **mismatch++**

finally we will return **(mismatch + open)** as answer.
**now you might have question, how can i return as sum of both variable**

just observe this string **)()()(((** ==> **mismatch = 1**
                                      ==> **open = 3** (total orphan open brackets)

ans = mismatch + open = 1 + 3 = 4

we need to add 4 operation ==> **(**)()()(((**)))** 

**still have doubt, will release Youtube video soon**


 


# Code
```java []
class Solution {
    public int minAddToMakeValid(String s) {
    int open =0, mismatch=0;
    for(int i=0; i<s.length(); i++)
    {
     if(s.charAt(i)=='(')
     open++;
     else
     {
        if(open>0)
        open--;
        else
        mismatch++;
     }
    } 
     return open+mismatch;   
    }
}
```C++
class Solution {
public:
    int minAddToMakeValid(string s) {
        int open = 0, mismatch = 0;
        for (int i = 0; i < s.length(); i++) {
            if (s[i] == '(')
                open++;
            else {
                if (open > 0)
                    open--;
                else
                    mismatch++;
            }
        }
        return open + mismatch;
    }
};
```C# code
public class Solution {
    public int MinAddToMakeValid(string s) {
        int open = 0, mismatch = 0;
        for (int i = 0; i < s.Length; i++) {
            if (s[i] == '(')
                open++;
            else {
                if (open > 0)
                    open--;
                else
                    mismatch++;
            }
        }
        return open + mismatch;
    }
}
````Python code
class Solution(object):
    def minAddToMakeValid(self, s):
        """
        :type s: str
        :rtype: int
        """
        open_brackets = 0
        mismatch = 0
        for char in s:
            if char == '(':
                open_brackets += 1
            else:
                if open_brackets > 0:
                    open_brackets -= 1
                else:
                    mismatch += 1
        return open_brackets + mismatch

