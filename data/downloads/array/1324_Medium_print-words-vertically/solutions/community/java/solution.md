# 🔥 Best Java solution , 0ms 100% faster 🔥

**Author:** abdullakh
**Votes:** 5
**Link:** [https://leetcode.com/problems/print-words-vertically/solutions/3185002/](https://leetcode.com/problems/print-words-vertically/solutions/3185002/)

---

# Code
```
class Solution {
    public List<String> printVertically(String s) {
        List<String> list = new ArrayList();
        String [] words = s.split(" ");
        int maxLen = maxLength(words);

        for (int i = 0; i < maxLen; i++) {
            StringBuilder sb = new StringBuilder();
            for (String word : words) {
                if (i >= word.length()) sb.append(" ");
                else sb.append(word.charAt(i));
            }
            list.add(trimRight(sb.toString()));
        }
        return list;
    }



    public int maxLength(String[] arr) {
        int maximum = 0;
        for (String s : arr) maximum = Math.max(maximum, s.length());
        return maximum;
    }



    public String trimRight(String s) {
        int i = s.length() - 1;
        while (i >= 0 && s.charAt(i) == ' ') i--;
        return s.substring(0, i + 1);
    }
}
```