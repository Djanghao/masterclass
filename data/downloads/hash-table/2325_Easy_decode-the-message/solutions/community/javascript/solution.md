# javascript solution

**Author:** carlosgreen
**Votes:** 17
**Link:** [https://leetcode.com/problems/decode-the-message/solutions/2248370/](https://leetcode.com/problems/decode-the-message/solutions/2248370/)

---

```javascript

var decodeMessage = function(key, message) {
  let result = ''
  key = Array.from(new Set(key.split(' ').join('')))
  const hash = new Map()
  const alpha = 'abcdefghijklmnopqrstuvwxyz'
  
  for (let i = 0; i < alpha.length; i++) {
    hash.set(key[i], alpha[i])
  }

  for (let chr of message) {
    result += hash.get(chr) || ' '
  }
    
  return result
};

```