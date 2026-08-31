# Simple Java Solution

**Author:** ganesh_6
**Votes:** 6
**Link:** [https://leetcode.com/problems/maximum-value-after-insertion/solutions/1308381/](https://leetcode.com/problems/maximum-value-after-insertion/solutions/1308381/)

---

If **n** is positive, find the first digit in **n** from the beginning such that **digit(n[i]) < x**
if **n** is negative, find the first digit in **n** from the beginning such that **digit(n[i]) > x**
```
public String maxValue(String n, int x) {
        char c=n.charAt(0);
        if(c!='-'){
            for(int i=0;i<n.length();i++){
                c=n.charAt(i);
                int num=c-48;
                if(num<x)
                    return n.substring(0,i) + x + n.substring(i);
            }
        }else{
            for(int i=0;i<n.length();i++){
                c=n.charAt(i);
                int num=c-48;
                if(num>x)
                    return n.substring(0,i) + x + n.substring(i);
            }
        }
        return n+x;
    }
```