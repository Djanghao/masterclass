# Nothing ✅ - 😉

**Author:** MMAsadovich
**Votes:** 1
**Link:** [https://leetcode.com/problems/add-digits/solutions/5062610/](https://leetcode.com/problems/add-digits/solutions/5062610/)

---

image.png
![image.png](./images/0.png)

# Code
```
class Solution {
    fun addDigits(num: Int): Int {
        if(num < 10) return num
        var sum = 0
        var num1 = num
        while(num1/10 > 0){
            sum += num1 % 10
            num1 = num1 / 10
            if(num1 < 10) {
                sum += num1 
                break;
            }
        }
        return addDigits(sum)
    }
}
```