# 🟢🔴🟢 Beats 100.00%👏 Easiest Solution of the world 🟢🔴🟢

**Author:** HelloSajib
**Votes:** 0
**Link:** [https://leetcode.com/problems/decode-the-message/solutions/5970352/](https://leetcode.com/problems/decode-the-message/solutions/5970352/)

---

```
class Solution {
  String decodeMessage(String key, String message) {
 
    List<String> chars = key.replaceAll(" ","").split("").toSet().toList();
    String res = "";
    for(int i = 0; i < message.length; i++){
        int index = chars.indexOf(message[i]);
        res += String.fromCharCode(index+97);
    }
    return res.replaceAll("`"," ");

  }
}
```