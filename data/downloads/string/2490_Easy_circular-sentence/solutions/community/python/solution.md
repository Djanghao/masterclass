# Simple and Easy to Understand | Two Solutions | Python

**Author:** krush_r_sonwane
**Votes:** 9
**Link:** [https://leetcode.com/problems/circular-sentence/solutions/2874968/](https://leetcode.com/problems/circular-sentence/solutions/2874968/)

---

##### Solution 1:
* *Time Complexity :* **O(N)**
* *Space Complexity:* **O(1)**
```
class Solution(object):
    def isCircularSentence(self, s):
        if s[0] != s[-1]: return False
        flag = 1
        for ch in s:
            if flag:
                if ch != ' ': last = ch
                else: flag = 0
            else:
                if ch != last: return False
                flag = 1
        return True
```
##### Solution 2:
* *Time Complexity :* **O(N)**
* *Space Complexity:* **O(N)**
```
class Solution(object):
    def isCircularSentence(self, s):
        arr, word = [], ''
        for ch in s:
            if ch == ' ':
                arr.append(word)
                word = ''
            else: word += ch
        arr.append(word)
        if arr[0][0] != arr[-1][-1]:
            return False
        last = arr[0][-1]   
        for i in range(1, len(arr)):
            if arr[i][0] == last:
                last = arr[i][-1]
            else:
                return False
        return True
```
**UpVote**, if you like it **:)**