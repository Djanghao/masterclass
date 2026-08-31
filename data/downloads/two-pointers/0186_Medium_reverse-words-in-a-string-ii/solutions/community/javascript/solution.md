# javascript | clean | time O(n) | space O(1)

**Author:** bailey_mckelway
**Votes:** 4
**Link:** [https://leetcode.com/problems/reverse-words-in-a-string-ii/solutions/921468/](https://leetcode.com/problems/reverse-words-in-a-string-ii/solutions/921468/)

---

```
var reverseWords = function(s) {
    s = s.reverse()
    let ptr1 = 0
    let ptr2 = 0
    while(ptr1 < s.length){
        while(s[ptr2] != " " && ptr2 < s.length) ptr2 += 1
        rev(ptr1, ptr2 - 1)
        ptr1 = ptr2 + 1
        ptr2 = ptr1
    }
    
    return s
    
    function rev(l, r){
        while(l < r){
            let temp = s[l]
            s[l] = s[r]
            s[r] = temp
            l++
            r--
        }
     }	
};
```
time: O(n)
space: O(1)