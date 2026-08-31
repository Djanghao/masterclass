# Beats 98%🔥||ASCII✅✅ and Stack ✅✅ 2 Approaches with Explanation🔥🔥.

**Author:** 21eca01
**Votes:** 50
**Link:** [https://leetcode.com/problems/make-the-string-great/solutions/4975247/](https://leetcode.com/problems/make-the-string-great/solutions/4975247/)

---

**We know that :
ASCII value of uppercase alphabets \u2013 65 to 90. 
ASCII value of lowercase alphabets \u2013 97 to 122.**

**so there are certain steps we have to take to grab the essence of it**

**step 1: first we have to initialize a pointer flag which will cutoff the loop when there no ```lower,upper``` pair found**

**step 2: we have to iterate throughout the loop and check whether there is any ```lower upper``` pair available,if yes delete it and continue the process.**

**step 3:define a func which will check accordingly if a pair exists or not: thus we will have our output string .**

**Ex.leEeetcode
first iter: l**eE**eetcode ->first pair found delete it
second iter: leetcode -> no pair found hence return it as flag==1.**

# Code
``` java []
class Solution {
    public String makeGood(String s) {
        StringBuilder sb=new StringBuilder();
        sb.append(s);
        int flag=0;
        while(flag==0&&sb.length()>0){
            flag=1;
            for(int i=0;i<sb.length()-1;i++){
                if(isGreat(sb,i)){
                    sb.delete(i,i+2);
                    flag=0;
                }
            }
        }
        return sb.toString();     
    }
    public static boolean isGreat(StringBuilder sb,int i){
        if(Integer.valueOf(sb.charAt(i))==Integer.valueOf(sb.charAt(i+1))+32||Integer.valueOf(sb.charAt(i))==Integer.valueOf(sb.charAt(i+1))-32){
        
            return true;
        } 
        return false;
    }
}
```
```Python3 []
class Solution:
    def makeGood(self, s: str) -> str:
        sb = list(s)
        flag = 0
        while flag == 0 and len(sb) > 0:
            flag = 1
            i = 0
            while i < len(sb) - 1:
                if self.isGreat(sb, i):
                    del sb[i:i+2]
                    flag = 0
                i += 1
        return ''.join(sb)

    def isGreat(self, sb, i):
        return ord(sb[i]) == ord(sb[i + 1]) + 32 or ord(sb[i]) == ord(sb[i + 1]) - 32

```

``` C++ []
#include <string>
using namespace std;

class Solution {
public:
    string makeGood(string s) {
        string sb = s;
        int flag = 0;
        while (flag == 0 && sb.length() > 0) {
            flag = 1;
            for (int i = 0; i < sb.length() - 1; i++) {
                if (isGreat(sb, i)) {
                    sb.erase(i, 2);
                    flag = 0;
                    break; // Break out of the inner loop after modification
                }
            }
        }
        return sb;
    }

    bool isGreat(string& sb, int i) {
        // Check if both characters are alphabets and have a difference of 32 in their ASCII values
        if ((sb[i] >= 'a' && sb[i] <= 'z' && sb[i + 1] == sb[i] - 32) ||
            (sb[i] >= 'A' && sb[i] <= 'Z' && sb[i + 1] == sb[i] + 32)) {
            return true;
        }
        return false;
    }
};

```

``` JavaScript []
/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function(s) {
    let sb = s;
    let flag = 0;
    while (flag === 0 && sb.length > 0) {
        flag = 1;
        for (let i = 0; i < sb.length - 1; i++) {
            if (isGreat(sb, i)) { 
                sb = sb.substring(0, i) + sb.substring(i + 2);
                flag = 0;
                break; 
            }
        }
    }
    return sb;
}

function isGreat(sb, i) { // Changed the function declaration to standalone

    return Math.abs(sb.charCodeAt(i) - sb.charCodeAt(i + 1)) === 32;
}

```
```C# []
using System.Text;

public class Solution {
    public string MakeGood(string s) {
        StringBuilder sb = new StringBuilder(s);
        int flag = 0;
        while (flag == 0 && sb.Length > 0) {
            flag = 1;
            for (int i = 0; i < sb.Length - 1; i++) {
                if (IsGreat(sb, i)) {
                    sb.Remove(i, 2);
                    flag = 0;
                }
            }
        }
        return sb.ToString();
    }

    public bool IsGreat(StringBuilder sb, int i) {
        return (int)sb[i] == (int)sb[i + 1] + 32 || (int)sb[i] == (int)sb[i + 1] - 32;
    }
}

```

**Stack Approach :**


**In this approach we can either check whether the current appending value inside a stack is a ```upper,lower``` pair or not if yes then we can just pop the previous appended element !!**


**By doing so our stack will be free from the ```upper,lower``` pairs**

``` Java []
class Solution {
    public String makeGood(String s) {
        int n = s.length();
        Stack<Character> st = new Stack<>();
        String ans = "";
        st.push(s.charAt(0));
        char[] arr = s.toCharArray();
        for(int i=1; i<n ;i++){
            if(!st.isEmpty() && (st.peek()-arr[i]==32 || st.peek()-arr[i]==-32)){
                st.pop();
            }else{
                st.push(arr[i]);
            }
            
        }
        while(!st.empty()){
            ans=st.pop()+ans;
        }
        return ans;
    }
}
```
``` Python3 []
class Solution:
    def makeGood(self, s: str) -> str:
        
        ss = []
        
        for c in s: 
            if ss and ss[-1] == c.swapcase():    # if the stack is not empty and the last letter on the stack is
                ss.pop()                         # a match for the current letter (e.g., 'a' and 'A'), remove both
            else: 
                ss.append(c)                     # continue adding to stack to compare with next letter
        
        return "".join(ss)
```

``` C++ []
class Solution {
public:
    bool check(char x, char y) {
        return abs(x - y) == 32;
    }

    string makeGood(string s) {
        string res = "";
        for (char c : s) {
            if (!res.empty() && check(res.back(), c)) res.pop_back();
            else res += c;
        }
        return res;
    }
};
```
# **If this helps !!do upvote**
![upvote 2.png](./images/0.png)

