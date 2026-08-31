# Simple Java solution - O(n)

**Author:** leet4242
**Votes:** 12
**Link:** [https://leetcode.com/problems/largest-number-after-mutating-substring/solutions/1361095/](https://leetcode.com/problems/largest-number-after-mutating-substring/solutions/1361095/)

---

```
 public String maximumNumber(String num, int[] change) { 
        char[] chars = num.toCharArray();
        for(int i = 0; i < chars.length; i++) {
            int currDigit = chars[i] - '0';
            if(currDigit < change[currDigit]) {
                while(i < chars.length && (chars[i] - '0' <= change[chars[i] - '0'])) {
                    chars[i] =  (char)(change[chars[i] - '0'] + '0');
                    i++;
                }
                break;
            }
        }
        return String.valueOf(chars);
    }
```