# 🎉🔥Java | Simple and Easy | One Line🔥🎉

**Author:** anniec1
**Votes:** 5
**Link:** [https://leetcode.com/problems/find-the-key-of-the-numbers/solutions/5715938/](https://leetcode.com/problems/find-the-key-of-the-numbers/solutions/5715938/)

---


# Code
```java []
class Solution {
    public int generateKey(int num1, int num2, int num3) {
        return Math.min(num1/1000, Math.min(num2/1000, num3/1000)) * 1000 + Math.min(num1/100 % 10, Math.min(num2/100 % 10, num3/100 % 10)) * 100 + Math.min(num1/10 % 10, Math.min(num2/10 % 10, num3/10 % 10)) * 10 + Math.min(num1 % 10, Math.min(num2 % 10, num3 % 10)); 
    }
}
```