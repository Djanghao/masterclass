# dart solution that beats 72% of users

**Author:** Shaham_Ahammed
**Votes:** 0
**Link:** [https://leetcode.com/problems/divide-a-string-into-groups-of-size-k/solutions/5272147/](https://leetcode.com/problems/divide-a-string-into-groups-of-size-k/solutions/5272147/)

---


# Code
```
class Solution {
  List<String> divideString(String s, int k, String fill) {
    int length =s.length;
    int dividents = length~/k;
    int mod = length%k;
    List<String> list = [];
    for(int i=0;i<dividents;i++){
        String a="";
        for(int j=0;j<k;j++){
            String letter = s[i*k +j];
            a+=letter;
        }
        list.add(a);

    }
    if(mod!=0){
        int start = dividents*k;
    String let="";
    for(int i = start;i<s.length;i++){
     let+= s[i];
    }
    while(let.length<k){
        let+=fill;
    }
    list.add(let);
    }
    return list;
  }
}
```