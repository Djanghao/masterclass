# Java 2ms 100% solution, readable, simple, easy, clean, fast, explanation

**Author:** saveHCH
**Votes:** 2
**Link:** [https://leetcode.com/problems/hexspeak/solutions/440807/](https://leetcode.com/problems/hexspeak/solutions/440807/)

---

**hexadecimal** (also base 16, or hex) uses sixteen distinct symbols, most often the symbols "0"\u2013"9" to represent values zero to nine, and "A"\u2013"F" (or alternatively "a"\u2013"f") to represent values ten to fifteen

```
import java.util.ArrayList;
import java.util.List;

class Solution {
    public String toHexspeak(String num) {

        Long lon = Long.parseLong(num);
        List<Integer> l = new ArrayList<>();
        while(lon!=0){
            int num2 = (int) (long) lon%16;
            if(num2<0) num2+=16;
            l.add(num2);
            lon/=16;
        }

        String hex = "OI23456789ABCDEF";
        StringBuilder sb = new StringBuilder();
        for(int nu:l){
            if(nu==0||nu==1||nu>=10){
                sb.append(hex.charAt(nu));
            }else{
                return "ERROR";
            }
        }

        String res= sb.reverse().toString();
        return res;
    }
}
```