# Solution Using Counter in Python

**Author:** AY_
**Votes:** 34
**Link:** [https://leetcode.com/problems/word-subsets/solutions/2353565/](https://leetcode.com/problems/word-subsets/solutions/2353565/)

---

In this the order of characters in words2 does not  matter what only matters is the character and its max count in all the words, so we create a dictionary and update the count for each character in words2.

Example:  words1 = ["acaac","cccbb","aacbb","caacc","bcbbb"]
words2 = *["c","cc","b"]*

so our dictonary for word2 is = { c -> 2, b -> 1 } (c is 2 because max number of *c* in words2 is 2)

here for character *c*, a word in words1 should have atleast count of 2 bcoz  max count of *c* is 2.
so output will only be [,"cccbb"] it satisfies all the values in dictionary that is it has atleast 2 *c* and atleast 1 *b* in it.

----
Steps:

1. we create an empty Counter() (This dictionary subclass provides efficient counting capabilities)

2. now we iterate through each word in words2 and use update operator ( |= ) to update left side of dictionary with the values on the right dictionary. If dictionary have common keys, then the rightmost dict values wil prevail. We call this dictionary *tempDict*.

3.  now we iterate through each word in words1 and create a Counter() for each word and substract all the value from *tempDict* and if no values are left in *tempDict* that means we found the word so we append it into the results.

4.  Finally return the results
-------------------------------------------------------------------------
```
class Solution:
    def wordSubsets(self, words1: List[str], words2: List[str]) -> List[str]:
        result = []
        tempDict = Counter()
        for w in words2:
            tempDict |= Counter(w)
        print(tempDict)
        
        for w in words1:
            if not tempDict - Counter(w):
                result.append(w)
        return result
```
----
***Please Do Upvote If you liked the solution. Thanks.!***