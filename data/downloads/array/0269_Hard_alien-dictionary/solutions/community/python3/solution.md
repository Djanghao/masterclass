# Python3 BFS with "play by play" comments

**Author:** TheAmazingLizard
**Votes:** 15
**Link:** [https://leetcode.com/problems/alien-dictionary/solutions/354832/](https://leetcode.com/problems/alien-dictionary/solutions/354832/)

---

This solution was greatly influenced by this **[Topological sort solution](https://leetcode.com/problems/alien-dictionary/discuss/329248/Topological-Sort-Explained-With-Video-(Chinese-))**

```python
from collections import defaultdict
from typing import Dict, List, Set

class Solution:

    def alienOrder(self, words: List[str]) -> str:
        
        # These are the unique letters in the list of words
        charset = set(''.join(words))
        graph, indegree = self.buildGraph(words)
        return self.bfs(graph, indegree, charset)

    def buildGraph(self, words: List[str]) -> (Dict[str, List[str]], Dict[str, int]):

        # Defaultdict works great in this case, because we don't have to initialize the list
        # NOTE that we can't relay on it to have a complete set of all possible characters,
        # we use the character set instead
        graph = defaultdict(list)

        # This defultdict is used to keep track of the number of edges going into a node
        # later on, we will use it to ensure that these nodes are visited in the correct order
		# and detect circular dependencies
        indegree = defaultdict(int)

        # Zip creates an iterator of tuples from the given lists.  The tuples are groups of elements
        # by index, that is why the second argument is a slice of the words list starting at 1.
        # if words = ['aa', 'bb', 'cc']
        #  zip(words, words[1:])  =  zip(['aa', 'bb', 'cc'], ['bb', 'cc'])
        # the result will be an iterator equivalent to [('aa', 'bb'), ('bb', 'cc')]
        for word1, word2 in zip(words, words[1:]):

            # Note that by using zip here, will save us the trouble of having to
            # find out which of the two words is the shortest. We are only guaranteed
            # lexicographical order up to the first character that is different or to the
            # length of the shortest word. Think of the words:
            #  acid
            #  acidize
            # Here we can only compare up to the length of the shortest word
            #
            # OR
            #  aaz
            #  aba
            #
            # Here we can only compare up to the first group of characters that do not match ('a', 'b') at index 1
            # anything else beyond these two conditions may have any character.
            for char1, char2 in zip(word1, word2):

                # Ignore all characters that are equal as these are not relevant; continue to
                # iterate until the first group of characters that do not match
                if char1 != char2:
                    # char1 is the node and char2 is adjacent to it, so it is added to its adjacency list
                    # aka neighbors/children
                    graph[char1].append(char2)

                    # Record that the char2 has an incoming edge
                    indegree[char2] += 1
                    break
        return graph, indegree

    def bfs(self, graph: Dict[str, List[str]], indegree: Dict[str, int], charset: Set[str]) -> str:

        # Add all the characters that don't have any incoming edges to the queue
        queue = [char for char in charset if indegree[char] == 0]
        result = ''
        while queue:
		
		    # Pop an element from the queue and assign it to cur/current and append it to the result
            cur = queue.pop()
            result += cur
			
			# Iterate over the list of children, this is the list of nodes adjacent to the current one
            for child in graph[cur]:

                # A completely disconnected circular dependency e.g. a -> b -> a will never end up in the queue
                # A circular dependency that is connected to more than one node will have an in-degree greater
                # than 1 e.g. r -> x -> q -> j -> d -> j
                #                            |--> f -> o
                # In this graph, j has an in-degree of 2 and it will never make it to the queue
                indegree[child] -= 1
                if indegree[child] == 0:
                    queue.insert(0, child)

        # In the end, the result will be the letters organized in topological order if
        # result contains the same number of letters as the charset if it contains
        # fewer letters than the charset it means we have detected a circular dependency
        # and should return an empty string.
        return result if len(result) == len(charset) else ''
```