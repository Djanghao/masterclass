# JavaScript w/o "Cheating": O(n) time, O(n) space

**Author:** dunc0029
**Votes:** 33
**Link:** [https://leetcode.com/problems/defanging-an-ip-address/solutions/428284/](https://leetcode.com/problems/defanging-an-ip-address/solutions/428284/)

---

Yeah, your one-liner set operations are cute, but clearly defeat the purpose of the exercise, which is having you understand the underlying, abstracted algorithms and what their complexity is.

```
/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
    var result="";
    
    for(var i=0;i<address.length;i++) {
        if(address[i] === ".")
            result += "[.]";
        else
            result += address[i];
    }
    
    return result;    
};
```