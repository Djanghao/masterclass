# ✅💯🔥Simple Code🚀📌|| 🔥✔️Easy to understand🎯 || 🎓🧠Beats 100%🔥|| Beginner friendly💀💯

**Author:** atishayj4in
**Votes:** 3
**Link:** [https://leetcode.com/problems/complex-number-multiplication/solutions/5576464/](https://leetcode.com/problems/complex-number-multiplication/solutions/5576464/)

---

```
//           //////////////////ATISHAY\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\           \\\\
//           \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\JAIN//////////////////           \\\\
```
# Code
```
class Solution {
    public String complexNumberMultiply(String num1, String num2) {
        int p1 = num1.indexOf('+');
        int p2 = num2.indexOf('+');

        int r1 = Integer.parseInt(num1.substring(0, p1));
        int i1 = Integer.parseInt(num1.substring(p1+1, num1.length()-1));
        int r2 = Integer.parseInt(num2.substring(0, p2));
        int i2 = Integer.parseInt(num2.substring(p2+1, num2.length()-1));
        
        int real = r1*r2 - i1*i2;
        int imaginary = r1*i2 + i1*r2;
        StringBuilder ans = new StringBuilder();
        ans.append(real);
        ans.append('+');
        ans.append(imaginary);
        ans.append('i');
        return ans.toString();
    }
}
```
![7be995b4-0cf4-4fa3-b48b-8086738ea4ba_1699897744.9062278.jpeg](./images/0.jpeg)