# Python Trie Solution easy to understand with explanation

**Author:** kevinko1788
**Votes:** 71
**Link:** [https://leetcode.com/problems/design-search-autocomplete-system/solutions/460803/](https://leetcode.com/problems/design-search-autocomplete-system/solutions/460803/)

---

If you are not clear how Trie works, I suggest you to do below problem first!
https://leetcode.com/problems/implement-trie-prefix-tree/

I commented with numbers so you can see the code flow.
Please read through overall code first, then follow the numbers on the comments :)

```
class TrieNode():
    def __init__(self):
        self.isEnd = False
        self.children = {}
        self.hot = 0
    
class AutocompleteSystem(object):
    def __init__(self, sentences, times):
        self.root = TrieNode()
        self.searchTerm = ""
        # 1. add historical data
        for i, sentence in enumerate(sentences):
            self.add(sentence, times[i])
			
    def add(self,sentence, hot):
        node = self.root
        #2. for each character in sentence
        for c in sentence: 
            if c not in node.children:
                node.children[c] = TrieNode()
            node = node.children[c]
        #3. when last character is added,
        #   make node.isEnd = True indicate that the current node is end of the sentence
        node.isEnd = True
        #4. do -= because by negating, we can sort as ascending order later
        node.hot-= hot
        
    def search(self):
        node = self.root
        res = []
        path = ""

        for c in self.searchTerm:
            if c not in node.children:
                return res
            # 6. add each character to path variable, path will added to res when we found node.isEnd ==True
            path +=c
            node = node.children[c]
        # 7. at this point, node is at the given searchTerm.
        # for ex. if search term is "i_a", we are at "a" node.
        # from this point, we need to search all the possible sentence by using DFS
        self.dfs(node, path,res)
        # 11. variable res has result of all the relevant sentences
        # we just need to do sort and return [1] element of first 3
        return [item[1] for item in sorted(res)[:3]]
            
    def dfs(self,node, path, res):
        # 8. Check if node is end of the sentence
        # if so, add path to res
        if node.isEnd:
            # 9. when add to res, we also want to add hot for sorting
            res.append((node.hot,path))
        # 10. keep going if the node has child
        # until there is no more child (reached to bottom)
        for c in node.children:
            self.dfs(node.children[c], path+c,res)

    def input(self, c):
        if c != "#":
            # 5. if input is not "#" add c to self.searchTerm and do self.search each time
            self.searchTerm +=c
            return self.search()
        
        else:
            self.add(self.searchTerm, 1)
            self.searchTerm =""
        
```

Hope it helps!