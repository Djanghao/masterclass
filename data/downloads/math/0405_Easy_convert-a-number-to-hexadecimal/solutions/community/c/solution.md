# C++ Solution [Runtime 0ms Beats 100%]

**Author:** ShashwatKadam4
**Votes:** 21
**Link:** [https://leetcode.com/problems/convert-a-number-to-hexadecimal/solutions/1021854/](https://leetcode.com/problems/convert-a-number-to-hexadecimal/solutions/1021854/)

---

This code can be modified for any base.
```
string toHex(int num) {
        if(num == 0){
            return "0";
        }
        unsigned int num1 = num; // takes care of negative integers automatically
        string hex = "";
        int base = 16;
        int rem;
        while(num1 > 0){
            rem = num1 % base;
            if(rem < 10){
                hex += ('0' + (rem));
            }else{
                hex += ('a' + (rem%10));
            }
            num1 = num1 / base;
        }
		// reverse the string, because we were appending in the opposite direction (at the end)
        reverse(hex.begin(), hex.end()); 
		
        return hex;
    }
```