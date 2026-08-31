# Java Beats 94.52%

**Author:** mushtaquddin443
**Votes:** 0
**Link:** [https://leetcode.com/problems/better-compression-of-string/solutions/6020923/](https://leetcode.com/problems/better-compression-of-string/solutions/6020923/)

---


```java []
class Solution {
    public String betterCompression(String compressed) {
        int[] arr = new int[26];
        char[] charr = compressed.toCharArray();

        for(int i = 0; i < charr.length;) {
            int pos = 0;
            if(Character.isAlphabetic(charr[i])) {
                pos = charr[i] - 'a';
                i++;
                int n = 0;
                while(i < charr.length && Character.isDigit(charr[i])) {
                    n = n * 10;
                    n = n + (charr[i] - '0');
                    i++;
                }
                arr[pos] += n;
            } 
        }
        StringBuilder s = new StringBuilder();
        for(int i = 0 ; i < arr.length; i++) {
            if(arr[i] == 0) {
                continue;
            }
            char ch = (char) (97+i);
            s.append(ch).append(arr[i]);
        }
        return s.toString();
    }
}
```