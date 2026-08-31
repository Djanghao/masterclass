# Java DP

**Author:** MI1
**Votes:** 3
**Link:** [https://leetcode.com/problems/encode-string-with-shortest-length/solutions/1605983/](https://leetcode.com/problems/encode-string-with-shortest-length/solutions/1605983/)

---

```
  HashMap<String, String> dp = new HashMap<>();

    public String encode(String str) {
        if (str.length() <= 4) {
            return str;
        }
        if (dp.containsKey(str)) {
            return dp.get(str);
        }
        String best = str;
        int strLen = str.length();
        for (int len = 1; len <= strLen / 2; len++) {
            String subStr = str.substring(0, len);
            if (strLen % len == 0 && str.replaceAll(subStr, "").isEmpty()) {
                String currBest = strLen / len + "[" + encode(subStr) + "]";
                if (currBest.length() < best.length()) {
                    best = currBest;
                }
            }
        }
        for (int i = 0; i + 1 < str.length(); i++) {
            String left = encode(str.substring(0, i + 1));
            String right = encode(str.substring(i + 1));
            if ((left + right).length() < best.length()) {
                best = (left + right);
            }
        }
        dp.put(str, best);
        return best;
    }
```