# ✅☑Beats 100% Users || [C++/Java/Python/JavaScript] || 2 Approaches || EXPLAINED🔥

**Author:** MarkSPhilip31
**Votes:** 140
**Link:** [https://leetcode.com/problems/maximum-odd-binary-number/solutions/4802354/](https://leetcode.com/problems/maximum-odd-binary-number/solutions/4802354/)

---

# DO GIVE IT A LIKE IF THAT WAS HELPFUL\uD83E\uDEE1\uD83D\uDC47



---
![Screenshot 2024-03-01 054425.png](./images/0.png)


---


# Approaches

(Also explained in the code)
#### **Approach 1**

**Lets work with examples :)**
``` []
            s = "0101"
lets sort it in a way that all 1's will be in front and 0's at last.

            s = "1100"
Since we have to return greatest odd number, there should be 
atleast one 1 at the end, so lets just swap only one 1 at the last.

But the catch is which 1 should we actually swap.

Lets find it out:

Lets swap with the first positioned 1 in the string.
            s = "1100"  =>  s = "0101"

Lets just try once more to swap it with the last positioned 
1 we have.
            s = "1100" =>  s = "1001"

Here we goooo, 
if we swapped with the last positioned 1 we are getting 
the greatest odd number.

Even if we had only one 1, this logic will still give desired output.


```




# Complexity
- Time complexity:
   $$O(nlogn)$$
    

- Space complexity:
   $$O(1)$$
    


# Code
```C++ []
class Solution {
public:
    string maximumOddBinaryNumber(string s) {
        sort(s.rbegin(),s.rend());
        for(int i = s.size()-1;i>=0;i--){
            if(s[i]=='1')swap(s[i],s[s.size()-1]);
        }
        return s;
    }
};


```
```Java []
import java.util.Arrays;

class Solution {
    public String maximumOddBinaryNumber(String s) {
        char[] chars = s.toCharArray();
        Arrays.sort(chars);
        for (int i = chars.length - 1; i >= 0; i--) {
            if (chars[i] == '1') {
                char temp = chars[i];
                chars[i] = chars[chars.length - 1];
                chars[chars.length - 1] = temp;
                break;
            }
        }
        return new String(chars);
    }
}


```
```python3 []
class Solution:
    def maximumOddBinaryNumber(self, s: str) -> str:
        sorted_s = sorted(s, reverse=True)
        for i in range(len(s) - 1, -1, -1):
            if sorted_s[i] == '1':
                sorted_s[i], sorted_s[-1] = sorted_s[-1], sorted_s[i]
                break
        return ''.join(sorted_s)


```
```javascript []
var maximumOddBinaryNumber = function(s) {
    let chars = s.split('').sort().reverse();
    for (let i = chars.length - 1; i >= 0; i--) {
        if (chars[i] === '1') {
            [chars[i], chars[chars.length - 1]] = [chars[chars.length - 1], chars[i]];
            break;
        }
    }
    return chars.join('');
};


```
---
#### **Approach 2**


**Lets work with examples :)**
``` []
            s = "010110"
Lets just count no. of 1's and 0's.
            cnt1 = 3 and cnt0 = 3
Since we need greatest odd number we obviously need one 1 
at the last to make it odd and best chances to make it greatest 
is by putting rest every 1's at the front.

            ans = "11" + "000" + "1"

            ans = "110001"

Will work for all cases, try it out:)

```




# Complexity
- Time complexity:
   $$O(n)$$
    

- Space complexity:
   $$O(n)$$
    


# Code
```C++ []


class Solution {
public:
    string maximumOddBinaryNumber(string s) {
        int cnt1 = 0, cnt0 = 0;
        for (auto a : s) {
            if (a == '1') cnt1++;
            else if (a == '0') cnt0++;
        }
        string ans = string(cnt1 - 1, '1') + string(cnt0, '0') + '1';
        return ans;
    }
};



```
```Java []
class Solution {
    public String maximumOddBinaryNumber(String s) {
        int cnt1 = 0, cnt0 = 0;
        for (char a : s.toCharArray()) {
            if (a == '1') cnt1++;
            else if (a == '0') cnt0++;
        }
        StringBuilder ans = new StringBuilder();
        ans.append("1".repeat(cnt1 - 1));
        ans.append("0".repeat(cnt0));
        ans.append("1");
        return ans.toString();
    }
}



```
```python3 []
class Solution:
    def maximumOddBinaryNumber(self, s: str) -> str:
        cnt1 = s.count('1')
        cnt0 = s.count('0')
        ans = '1' * (cnt1 - 1) + '0' * cnt0 + '1'
        return ans


```
```javascript []
var maximumOddBinaryNumber = function(s) {
    let cnt1 = 0, cnt0 = 0;
    for (let a of s) {
        if (a === '1') cnt1++;
        else if (a === '0') cnt0++;
    }
    let ans = '1'.repeat(cnt1 - 1) + '0'.repeat(cnt0) + '1';
    return ans;
};



```
---





# DO GIVE IT A LIKE IF THAT WAS HELPFUL\uD83E\uDEE1\uD83D\uDC47

---
---


---