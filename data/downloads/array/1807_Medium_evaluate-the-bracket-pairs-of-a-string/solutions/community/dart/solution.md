# 🟢🔴🟢 Beats 100.00%👏 Dart Solution 🟢🔴🟢

**Author:** HelloSajib
**Votes:** 0
**Link:** [https://leetcode.com/problems/evaluate-the-bracket-pairs-of-a-string/solutions/5917778/](https://leetcode.com/problems/evaluate-the-bracket-pairs-of-a-string/solutions/5917778/)

---

```
class Solution {
  String evaluate(String s, List<List<String>> knowledge) {

    Map<String, String> knowledgeMap = {
        for (List<String> e in knowledge) e[0]: e[1]
    };

    String key = "";
    bool pair = false;
    String res = "";
    for(int i = 0; i < s.length; i++){
        if(s[i] == "("){
            pair = true;
            continue;
        }else if(s[i] == ")"){
            pair = false;
            res += knowledgeMap.containsKey(key) ? knowledgeMap[key]! : "?";
            key = "";
        }else if(pair == false){
            res += s[i];
        }

        if(pair) key += s[i];
         
    }
    return res;

  }
}

```