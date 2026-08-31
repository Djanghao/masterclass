# PYTHON 3 | faster than 95.14% | USING DICTIONARY

**Author:** rohitkhairnar
**Votes:** 26
**Link:** [https://leetcode.com/problems/sorting-the-sentence/solutions/1343270/](https://leetcode.com/problems/sorting-the-sentence/solutions/1343270/)

---

```
class Solution:
    def sortSentence(self, s: str) -> str:
        
        x = s.split()
        dic = {}
        for i in x :
            dic[i[-1]] = i[:-1]
        return ' '.join([dic[j] for j in sorted(dic)])
```
```

```
eg --> s = "is2 sentence4 This1 a3"

* stp1) split --> ['is2', 'sentence4', 'This1', 'a3']
* stp2) create dict
* stp3) in dict put (key = number ) and ( value = word )  --using-- ( dic[i[-1]] = i[:-1] )
* stp4) sort the dict keys ---> from [2,4,1,3] to [1,2,3,4]
* stp5) insert all the sorted key's values accordingly into the new list
* stp6) join that new list ---> ['This', 'is', 'a', 'sentence'] --to-- "This is a sentence"

**plz upvote if it was helpful : )**