# Python Easy Trie Solution

**Author:** constantine786
**Votes:** 35
**Link:** [https://leetcode.com/problems/prefix-and-suffix-search/solutions/2164210/](https://leetcode.com/problems/prefix-and-suffix-search/solutions/2164210/)

---

The Data structure more suitable in such cases is a [Trie](https://en.wikipedia.org/wiki/Trie).  Please read and understand  Trie before you move onto the solution.

In this approach, I will be storing all the following combinations of a word in the trie.
>eg: word =  **'leet'**
**>leet#leet
>eet#leet
>et#leet
>t#leet
>#leet**
>
All the above combinations will be added to the **Trie**.

<img src='https://assets.leetcode.com/users/images/292c1ce5-185b-428e-ae2e-701e739a12c0_1655519535.6480691.jpeg' height="500"/>

Now let's say you want to lookup
> prefix='**le**', suffix='**et**'

You would search for '**et#le**' ie `suffix + '#' + prefix` in the **Trie**. So this would match with the **'et#leet'** path.

Taking above thoughts into consideration, below is my implementation:
```
class WordFilter:

    def __init__(self, words: List[str]):
        self.trie={}
        self.weight_marker='$'
        w=self.weight_marker
        for idx, word in enumerate(words):
            word=word + '#'
            length=len(word)
            word+=word
            
            for i in range(length):
                curr=self.trie
                curr[w]=idx 
                for c in word[i:]:
                    if c not in curr:
                        curr[c]={}
                    curr=curr[c]                    
                    curr[w]=idx  # update the weight of substring                        
            

    def f(self, prefix: str, suffix: str) -> int:
        curr=self.trie
        for c in suffix + '#' + prefix:
            if c not in curr:
                return -1
            curr=curr[c]
        
        return curr[self.weight_marker] 
```

If `N` is the number of words, `L` is the  max length of the word and `M` is the length of the query `suffix + '#' + prefix`.

**Time** :
`Constructor` - `O(N * L^2)` (Compute all the combinations of all the words), `Search` - `O(M)`
**Space** - `O(N * L^2)`(Store all the combinations of all the words)


---

***Please upvote if you find it useful***