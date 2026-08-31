# Python. Permutations! No backtracking

**Author:** alexey_wish
**Votes:** 5
**Link:** [https://leetcode.com/problems/verbal-arithmetic-puzzle/solutions/1484528/](https://leetcode.com/problems/verbal-arithmetic-puzzle/solutions/1484528/)

---

Idea:

- sum all letters based on the postion they are in the words
["SEND","MORE"]
SEND
D : 1
N: 10
E: 100
S: 1000

Plus
MORE

E: 1
R: 10
O: 100
M:1000

Equal:
`Counter({'S': 1000, 'M': 1000, 'E': 101, 'O': 100, 'N': 10, 'R': 10, 'D': 1})`

- Subtract the `result` word from that

and we get for "SEND" + "MORE" - "MONEY":
`Counter({'S': 1000, 'E': 91, 'R': 10, 'D': 1, 'Y': -1, 'N': -90, 'O': -900, 'M': -9000})`

- Now we can see we have 2 part postive and negative. If we try just seach all numbers 0-9 for the letters 'S','E','R','D','Y','N','O','M' that would take 1,814,400 permutations to try. If we search positive and negative letters separatly that would take 5,040 for positive letters and same for negative. Basically the idea is to calculate all the sums for all posible permutations of all positive and all the negative letters. Then get overlap of the sums and find if there is no overlap in used digits to get that sum

- Optimization trick: we can start with the smallest number of positive of negative letters
```
if NN > NP:
	neg,pos = pos,neg
	NN,NP = NP, NN
```

- we don't need having dict for both positive and negative as soon as we find new sum we check if it's existed before if yes we check if there is no digits overlap

- Because we cannot start words longer than 1 letter with 0 we created set called `begins` to filter not assign 0s to the letters that correspond to the beingings of the words and result word

```python
from itertools import permutations
class Solution:
    def isSolvable(self, words: List[str], result: str) -> bool:
        # we need begins set to track start letters if word is longer than one to not have them as 0
        begins = {result[0]} if len(result) > 1 else set()
        
        # the idea to have counter is to sum repeted letters based on where they are in the word
        
        c = Counter()
        for w in words:
            if len(w) > 1:
                begins.add(w[0])
            for i,l in enumerate(w[::-1]):
                c[l] += 10**i
        
        # we subtract "result" letters from the counter
        for i,l in enumerate(result[::-1]):
            c[l] -= 10**i
            
        # we get at the end something like that Counter({'S': 1000, 'E': 91, 'R': 10, 'D': 1, 'Y': -1, 'N': -90, 'O': -900, 'M': -9000})
        
        # lets split problem into 2 let's check positive letters and negative
        pos = []
        neg = []
        for l, v in c.items():
            if v > 0:
                pos.append( (l,v) )
            elif v < 0:
                neg.append( (l,-v) )

        if not neg and not pos:
            return True
        
        if not neg or not pos:
            # False if begins else True this one is needed for words with one letter like words = ["A","B"], result = "A"
            return False if begins else True
        
        NN = len(neg)
        NP = len(pos)
        
        # we need this one to process permutaion with the smaller number first
        # that would optimize speed
        if NN > NP:
            neg,pos = pos,neg
            NN,NP = NP, NN
        
        # we create dict with list of sets of permutations
        # keys sum of digit for letter * coefficient
        nd = defaultdict(list)
        for used in permutations(list(range(10)), NN):
            if 0 in used and neg[used.index(0)][0] in begins:
                continue
            nd[sum(v * used[i] for i,(l,v) in enumerate(neg))].append(set(used))
        
        # same for the other part
        # but while we are doing that we check if overlap of digits is missing
        for used in permutations(list(range(10)), NP):
            if 0 in used and pos[used.index(0)][0] in begins:
                continue
            s = sum(v * used[i] for i,(l,v) in enumerate(pos))
            s1 = set(used)
            if s in nd:
                for s2 in nd[s]:
                    if not s1 & s2:
                        return True

        return False
```

Time comlexity: worst scenario 9 digits in one end and 1 digits another. We search within 3628800 permutations each multiplying 8 times 2 numbers and suming the results of multiplications
Space: MAX space is dict of size of permutations of 5 digits which is 30240

Beats about 15% of Python solutions