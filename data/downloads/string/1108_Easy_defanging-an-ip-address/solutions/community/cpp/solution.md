# [C++] 100% faster solution with 0ms runtime

**Author:** steffi_keran
**Votes:** 75
**Link:** [https://leetcode.com/problems/defanging-an-ip-address/solutions/351240/](https://leetcode.com/problems/defanging-an-ip-address/solutions/351240/)

---

```
class Solution {
public:
    string defangIPaddr(string address) {
        string res;
        for(auto c: address) {
            if(c=='.') {
                res+="[.]";
            } else res+=c;
        }
        return res;
    }
};

```