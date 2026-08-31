# ✅ Java

**Author:** kalinga
**Votes:** 31
**Link:** [https://leetcode.com/problems/split-with-minimum-sum/solutions/3256071/](https://leetcode.com/problems/split-with-minimum-sum/solutions/3256071/)

---

```
class Solution {
    public int splitNum(int num) {
        String str=num+"";
        char str1[]=str.toCharArray();
        Arrays.sort(str1);
        String x1="";
        for(int i=0;i<str1.length;i+=2){
            x1+=str1[i];
        }
        String x2="";
        for(int i=1;i<str1.length;i+=2){
            x2+=str1[i];
        }
        return Integer.parseInt(x1)+Integer.parseInt(x2);
    }
}
```
![image](./images/0.jpeg)
