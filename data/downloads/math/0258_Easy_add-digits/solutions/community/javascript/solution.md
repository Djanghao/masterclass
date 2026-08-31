# Very Easy 100% (Fully Explained)(Java, C++, Python, JS, C, Python3)

**Author:** PratikSen07
**Votes:** 46
**Link:** [https://leetcode.com/problems/add-digits/solutions/2368005/](https://leetcode.com/problems/add-digits/solutions/2368005/)

---


**Problem:** For num = 478, the output will be 1.
**Solution1 :**     The process is
							  478 --> 4 + 7 + 8 --> 19
							  19 --> 1 + 9 --> 10
							  10 --> 1 + 0 --> 1
							  Since 1 has only one digit, return it.
**Solution2 :**     Here, 478 is not divisible by 9. So we calculate 478 % 9. The answer will be 1.
							  Since 1 has only one digit, return it.

# **C++ Solution:**
Runtime: 0 ms, faster than 100.00% of C++ online submissions for Add Digits.
```
class Solution {
public:
    int addDigits(int num) {
        // If num == 0, then result will be 0...
        if(num == 0)
            return 0;
        // If is divisible by 9, result will be 9...
        else if(num % 9 == 0)
            return 9;
        // if the num is not 0 and is not divisible by 9,
        // the result will always num % 9...
        else
            return num % 9;
    }
};
```

# **Java Solution (Recursive Approach):**
```
class Solution {
    public int addDigits(int num) {
        //  Variable to store the digit sum...
        int sum = 0;
        // Converts num value into string...
        String s = String.valueOf(num);
        // Calculation of digit sum...
        for(int i = 0; i < s.length(); i++){
            sum = sum + (s.charAt(i) - '0');
        }
        // If  sum is less than 10, it is the digital root. Return it...
        if(sum < 10){
            return sum;
        }else{
            return addDigits(sum);      // Sum becomes the new number. Call the function again with sum as parameter...
        }
    }
}
```

# **Python Solution:**
Runtime: 43 ms, faster than 72.76% of Python3 online submissions for Add Digits.
```
class Solution(object):
    def addDigits(self, num):
        while num > 9:
            num = num % 10 + num // 10
        return num
```
        
# **JavaScript Solution:**
```
var addDigits = function(num) {
    return 1 + (num - 1) % 9;
};
```

# **C Language (Recursive Approach):**
```
int addDigits(int num){
    //  Variable to store the digit.
    int ans = 0;
    // Calculation of digit sum.
    while(num) {
        ans += (num % 10);
        num /= 10;
    }
    // If  ans is less than 10, it is the digital root. Return it.
    if(ans < 10)
        return ans;
    else
        return addDigits(ans);  // ans becomes the new number. Call the function again with ans as parameter.
}
```

# **Python3 Solution:**
```
class Solution:
    def addDigits(self, num: int) -> int:
        while num > 9:
            num = num % 10 + num // 10
        return num
```
**I am working hard for you guys...
Please upvote if you find any help with this code...**