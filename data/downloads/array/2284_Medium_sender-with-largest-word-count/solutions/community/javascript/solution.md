# Javascript || Count space || HashMap

**Author:** seymuromarov
**Votes:** 3
**Link:** [https://leetcode.com/problems/sender-with-largest-word-count/solutions/2102840/](https://leetcode.com/problems/sender-with-largest-word-count/solutions/2102840/)

---

```
/**
 * @param {string[]} messages
 * @param {string[]} senders
 * @return {string}
 */
var largestWordCount = function(messages, senders) {
    let wordCount = {}
    let result = ''
    let maxCount = -Infinity
    for (let i = 0; i < messages.length;i++) {
        let count=messages[i].split(' ').length
        wordCount[senders[i]] = wordCount[senders[i]] == undefined ? count : wordCount[senders[i]] + count;
        if (wordCount[senders[i]]  > maxCount || (wordCount[senders[i]]  == maxCount && senders[i] > result)) {
            maxCount = wordCount[senders[i]];
            result = senders[i];
        }
    }
    return result;

};
```