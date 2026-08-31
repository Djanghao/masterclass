# Python Understanding generators and yield statement

**Author:** denvered
**Votes:** 238
**Link:** [https://leetcode.com/problems/check-if-two-string-arrays-are-equivalent/solutions/1007878/](https://leetcode.com/problems/check-if-two-string-arrays-are-equivalent/solutions/1007878/)

---

**Naive approach:**

```
class Solution:
    def arrayStringsAreEqual(self, word1: List[str], word2: List[str]) -> bool:
        word1 = "".join(word1)
        word2 = "".join(word2)
        return word1 == word2
```

**Time complexity O(n)
Space complexity O(n)**

where n is the length of the longer string.

The key to solving this problem efficiently is to **not concatenate** and store the array, as we waste space irrespective of if the two arrays are same or not. We want the **comparisons** to be **on the fly** so that we can exit immediately when there is a mismatch. 

Generators come in handy here. 

**Using generators:**

Generators are a kind of iterators which **do not store all the values in memory**, they simply generate the values on the fly (thus you cannot go back and perform operations on previously seen indices).


```
class Solution:
    def arrayStringsAreEqual(self, word1: List[str], word2: List[str]) -> bool:
        for c1, c2 in zip(self.generate(word1), self.generate(word2)):
            if c1 != c2:
                return False
        return True

    def generate(self, wordlist: List[str]):
        for word in wordlist:
            for char in word:
                yield char
        yield None
```

##### **Significance of "yield None" statement:**
yield None here signifies that we have exhausted the given input. 
```
word1 = ["ab", "c"], word2 = ["a", "bc"]
```
Compares a,a, then b,b, followed by c,c and None, None

**In the** **absence of yield None**, it will not be able to able to detect examples where len(input1) != len(input2).

```
word1 = ["ab", "c"], word2 = ["a", "bc", "d", "efg"]
```

The code will only zip from a,a to c,c and return True for all comparisons. 
Since it does not zip the rest of longer input(word2) `["d", "efg"]` to word1 , it will not be able to detect the mismatch.

**Time complexity O(min(m,n))** => exits when it finds the first mismatch character
**Space complexity O(1)** => does not store any inputs and makes comparison one char at a time on the fly.