# Swift Simple Solution Using Dictionary

**Author:** jayantsogikar
**Votes:** 4
**Link:** [https://leetcode.com/problems/decrypt-string-from-alphabet-to-integer-mapping/solutions/587216/](https://leetcode.com/problems/decrypt-string-from-alphabet-to-integer-mapping/solutions/587216/)

---

```
func freqAlphabets(_ s: String) -> String {
    let dict = ["1":"a","2":"b","3":"c","4":"d","5":"e","6":"f","7":"g","8":"h","9":"i","10":"j","11":"k","12":"l","13":"m","14":"n","15":"o","16":"p","17":"q","18":"r","19":"s","20":"t","21":"u","22":"v","23":"w","24":"x","25":"y","26":"z"]
    var i = 0
    var st = ""
    let s = Array(s)
    while(i < s.count){
        if i + 2 < s.count && s[i+2] == "#"{
            st.append(dict[String(s[i...i+1])]!)
            i += 3
        }
        else{
            st.append(dict[String(s[i])]!)
            i += 1
        }
    }
    return st
}
```