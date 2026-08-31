# [Python] 2 solutions with explanations

**Author:** nikryl
**Votes:** 21
**Link:** [https://leetcode.com/problems/iterator-for-combination/solutions/789649/](https://leetcode.com/problems/iterator-for-combination/solutions/789649/)

---

This problem can easily be solved using available functions collections.deque and itertools.combinations. Simply generate all possible combinations and store it in a queue. At each `next()` call `popleft()` from deque and for `hasNext()` check if our queue is not empty. But I don't think this solution might be acceptable during interview.

```
class CombinationIterator:

def __init__(self, characters: str, combinationLength: int):
	self.dq = deque(combinations(characters, combinationLength))

def next(self) -> str:
	return ''.join(self.dq.popleft())

def hasNext(self) -> bool:
	return len(self.dq)>0
```

Let's try a different approach and take `characters = 'abcdefg'` as an example with `combinationLength = 3`. Our first combination then would be '*abc*', then it's '*abd*', '*abe*' and so on until we get the last possible combination '*efg*'. If we look at indices of our combinations it will be as follows: '*012*', '*013*', '*014*' ... '*456*'.
We can see that at each step we change index of last character in our combination and move it 1 step further until it reaches the last character. Which would be combination '*abg*' = '*016*'. Obviously it's not the end yet. Once our last character of combination is at the end we take `combination[-2]` character and add 1 to its index. Then we repeat the same process: '*acd*'-*023*, '*ace*'-*024* ... '*acg*'-*026* ... '*efg*'-'*456*'.  
With this approach we do not need to store all possible combinations, just the current one. At each `next()` call we are going to calculate it. 
I'm storing current combination state in a list of size `combinationLength` and initiate it with `[0,1..n-2]`. For previous example it would look as follows: `[0,1,1]`, so that when we first call `next()` we get the first possible combination `[0,1,2]`.
`hasNext()` can be checked by comparing `comb[0]` to its last possible position, which is `len(characters) - combinationLength`. 

```
class CombinationIterator:

    def __init__(self, characters: str, combinationLength: int):
        self.s = characters
        self.comb = [i for i in range(combinationLength-1)] + [combinationLength-2]
        
    def next(self) -> str:
        for i in range(1, len(self.comb)+1):
            if self.comb[-i] < len(self.s)-i:
                self.comb[-i] += 1
                while i != 1: 
                    self.comb[-i+1] = self.comb[-i] + 1
                    i -= 1
                break
            
        return ''.join([self.s[pos] for pos in self.comb])

    def hasNext(self) -> bool:
        return self.comb[0] != len(self.s) - len(self.comb)
```
