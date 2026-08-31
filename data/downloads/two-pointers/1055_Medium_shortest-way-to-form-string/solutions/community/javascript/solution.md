# javascript js 95% time, 100% space [SIMPLE]

**Author:** benphs
**Votes:** 9
**Link:** [https://leetcode.com/problems/shortest-way-to-form-string/solutions/432430/](https://leetcode.com/problems/shortest-way-to-form-string/solutions/432430/)

---

```
var shortestWay = function(source, target) {
   let subs = []
   let t = 0
   while (t < target.length) {
      let sub = ''
      for (let i=0; i<source.length; i++) {
         let targetLetter = target[t]
         let letter = source[i]
         if (targetLetter === letter) {
            sub +=letter
            t++
         }
      }
      if (!sub) return -1
      subs.push(sub)
   }

   return subs.length
};
```