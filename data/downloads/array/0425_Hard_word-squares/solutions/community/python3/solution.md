# Python easy to understand with explanation comment

**Author:** kevinko1788
**Votes:** 7
**Link:** [https://leetcode.com/problems/word-squares/solutions/870722/](https://leetcode.com/problems/word-squares/solutions/870722/)

---

Hi all, please read along comment numbers  #1 - #10

```
from collections import defaultdict
class Solution:
    def wordSquares(self, words: List[str]) -> List[List[str]]:
        def dfs(begin_with, path):
            if begin_with not in prefix: return
            #5 loop through each candidate with the prefix
            for next_candidate in prefix[begin_with]:
                #6 add the next_candidate to path
                path+=[next_candidate]
                #9 if path is equal to N (word length) then it formed square
                if len(path) == N:
                    result.append(list(path))
                    #10 after append to result list, 
                    # pop the last candidate and continue with next candidate
                    # no need to recurse anymore
                    path.pop()
                    continue
                #7 find next prefix need to be found
                # if the path is [ball, area], the next word we need to find is the ones with "le" (index 2)
                # therefore, "".join(word[len(path)]) for each word in path
                next_prefix = "".join([word[len(path)] for word in path])
                #8 recurse into same function
                dfs(next_prefix, path)
                path.pop()
            
        N = len(words[0])
        #1 if word length is 1, it means itself is a square
        # thus, return words
        if N == 1: return words
        
        #2 make prefix dictionary
        prefix = defaultdict(set)
        for word in words:
            for i in range(1, N):
                prefix[word[:i]].add(word)
        
        result = []
        #3 Try each word as possible leading candidate
        for word in words:
            #4 gives second char of the leading word as next prefix to search for
            # note index is 1
            dfs(word[1] ,[word]) 
        return result
            

    
```