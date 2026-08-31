# My Java Solution

**Author:** vRohith
**Votes:** 16
**Link:** [https://leetcode.com/problems/convert-a-number-to-hexadecimal/solutions/1049495/](https://leetcode.com/problems/convert-a-number-to-hexadecimal/solutions/1049495/)

---

```
class Solution {
    public String toHex(int num) {
        if (num == 0)
            return "0";
        char [] possibility = new char[] {'0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'};
        StringBuilder sb = new StringBuilder();
        while (num != 0) {
            sb.append(possibility[num & 15]);
            num = (num >>> 4);
            System.out.println(num);
        }
        return sb.reverse().toString();
    }
}
```