# Python 3   ||   14 lines,  w/ analysis   ||   T/S: 96% / 45%

**Author:** Spaulding_
**Votes:** 9
**Link:** [https://leetcode.com/problems/add-edges-to-make-degrees-of-all-nodes-even/solutions/2927397/](https://leetcode.com/problems/add-edges-to-make-degrees-of-all-nodes-even/solutions/2927397/)

---

Here's the analysis:

- Applying one edge fixes exactly two odd edges. Therefore the only fixable graphs are those with either two or four odd nodes.

- A graph with anything other than zero, two, or four odd nodes cannot be fixed; the answer in those cases is `False`.
- Case 0: Obviously`True`.
- Case 2: Suppose the nodes are *a* and *b*. i) If there's no edge between *a* and *b*, we connect them with an edge and return `True` ii) If there is an edgebetween *a* and *b* already, then we seek a node that does not share an edge with either *a* or *b*. If one exists, we return `True`.
- Case 4: Added edges each must connect a pair of the four odd nodes, which can happen if and only if there exist such a pairing. There are three pairings to check.
- If we exhaust the above possibilities, we return`False`.
```
class Solution:
    def isPossible(self, n: int, edges: List[List[int]]) -> bool:

        dic = defaultdict(set)                      # <\u2013\u2013 Build the graph       
                                                    # 
        for p,q in edges:                           # 
            dic[p].add(q)                           # 
            dic[q].add(p)                           # 
        
        oddNodes = [node for node in dic            # <\u2013\u2013 Determine the odd nodes
                        if len(dic[node])%2]        #
       
        m = len(oddNodes)

        if m == 0: return True                      # <\u2013\u2013 Case 0
     
        if m == 2:                                  # <\u2013\u2013 Case 2

            a,b = oddNodes 

            return (not {a} & dic[b] or             # <\u2013\u2013 Case 2i
              not all({a,b} & dic[i]for i in dic))  # <\u2013\u2013 Case 2ii
  
        if m == 4:                                  # <\u2013\u2013 Case 4
            a, b, c, d = oddNodes
            
            if (not(a in dic[b] or c in dic[d]) or  # <\u2013\u2013 Find the pairings, if possible 
                not(a in dic[c] or b in dic[d]) or
                not(a in dic[d] or b in dic[c])):
                return True

        return False                                # <\u2013\u2013 If nothing works, return False

```
[https://leetcode.com/problems/add-edges-to-make-degrees-of-all-nodes-even/submissions/1290518952/](https://leetcode.com/problems/add-edges-to-make-degrees-of-all-nodes-even/submissions/1290518952/)

I could be wrong, but I think that time complexity is *O*(*N* + *E*) and space complexity is *O*(*N* + *E*), in which *N* ~ the number of nodes and *E* ~ the number of edges.
