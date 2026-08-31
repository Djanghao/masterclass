# Detailed Explanations + Diagrams + Annotated Code

**Author:** chaudhary1337
**Votes:** 150
**Link:** [https://leetcode.com/problems/parallel-courses-ii/solutions/1373540/](https://leetcode.com/problems/parallel-courses-ii/solutions/1373540/)

---

## 0. Preface
This is a *really* good problem. However, the solutions I found were either too complex or just did not make any sense. In this post, I'll attempt to explain everything from top to bottom.

## 1. Understading the Problem
**Given**:
- There are courses from `1 to n`, both inclusive.
- There are relations between the courses, given by a list of items: `[prev_course, next_course]`. This essentially means the following.

![](https://i.imgur.com/40viwl5.png)

There's one last thing, that gives this problem all the flavour. The value `k` is given to you. This represents the maximum number of nodes, "courses", you can select at a given time instant, "sememter", in this problem.

**Goal**:
As a college student, find the least numbers of semesters possible to complete all the courses ~~and escape the hell hole~~.

Note how without the condition of `k`, this problem would just be a topological sorting problem.

## 2. Examples
I'll mention the examples mentioned in the question itself below, for the sake of completeness.

**Example 1 (from question)**
![](https://i.imgur.com/PKmlSwG.png)

```
Input: n = 4, dependencies = [[2,1],[3,1],[1,4]], k = 2
Output: 3 
Explanation: The figure above represents the given graph.
In the first semester, you can take courses 2 and 3.
In the second semester, you can take course 1.
In the third semester, you can take course 4.
```

**Example 2 (from question)**
![](https://i.imgur.com/OR0xFHg.png)
```
Input: n = 5, dependencies = [[2,1],[3,1],[4,1],[1,5]], k = 2
Output: 4 
Explanation: The figure above represents the given graph.
In the first semester, you can take courses 2 and 3 only since you cannot take more than two per semester.
In the second semester, you can take course 4.
In the third semester, you can take course 1.
In the fourth semester, you can take course 5.
```

**Example 3 (from question)**
```
Input: n = 11, dependencies = [], k = 2
Output: 6
```

**Try it yourself**
In my opinion, all of the above are *sneaky* examples. I ended up wasting hours on a wrong solution, because I missed a test case like the one below. Try if you can find the most optimal solution for `k = 2`. (Quick note: labels are immaterial)

![](https://i.imgur.com/W6HZORP.png)

Take a look at two such cases for this question.
![](https://i.imgur.com/NoIIpTd.png)

What's happening? Each semester's worth of courses are enclosed in green, and enumerated in order. What do you observe?
- The selection of what you choose to be the first two (since `k = 2`) has a *drastic* impact on how you select the rest - and thus the answer. Think of it like the **butterfly effect**.
- There is no way to tell who is what, and which particular combination is any good. We may not know anything till the very end.

## 3. The Approach
**Data Structures**
1. We need to know the layout of the graph, who points to what. Let's keep a structure like `graph = {node: [children]}`
2. We also need to encode the information of how may in-edges are there for each node. We store that in a list like: `in_degrees = [values]`. We keep the `in_degrees` and `graph` separate for implementation reasons.
3. Implementation detail: the inputs are 1 indexed, we make everything 0-indexed for easier implementations.

**Nodes**
There are two types of nodes:
- There are nodes which have been already considered. Let's label them with `0`.
- There are nodes which have not been taken yet. Let's label them with `1`.

Note that even if a node is marked `1`, it *does not* mean its `in_degree[node]` is `0`. It only means it needs to be taken - either in the present or in the future.  

Moreover, labelling a node either `0` or `1` allows us to represent the status of the problem in a neat format. What we have done here is called **bit masking**. `mask = 10110` represents the nodes `1, 2, 4` are yet to be considered (aka the course is yet to be taken), and the rest have already been taken.

**Recursion**
We know that decisions taken now can produce different results later on. This makes the recursive approach favourable. For each particular iteration, we consider **all** the possible **combinations** of the **currently available nodes** - `in_degree[node] == 0 and mask & 1 << node`. The second part is checking if the `node`th bit is set in `mask`.


## 4. Annotated Code
```
from itertools import combinations # for picking k of n
class Solution:
    @lru_cache(None) # caching for faster lookups
    def recurse(self, mask, in_degrees):
        # if all the bits are 0, we have taken all the courses
        if not mask: return 0
        
        # all the nodes that *can* be taken now, following both the properties
        nodes = [i for i in range(self.n) if mask & 1 << i and in_degrees[i] == 0]
        
        ans = float('inf')
        # enumerating all the possible combinations
        for k_nodes in combinations(nodes, min(self.k, len(nodes))):
            new_mask, new_in_degrees = mask, list(in_degrees)
            
            # updating what would happen to new_mask and new_in_degrees 
            # if we considered the nodes in k_nodes
            for node in k_nodes:
                # since we know the bit is set, we un-set this bit, to mark it "considered"
                new_mask ^= 1 << node
                # updating each of the in-degrees, since the "parents" have been taken away
                for child in self.graph[node]:
                    new_in_degrees[child] -= 1
            
            # the heart of recursion
            # note the +1!
            ans = min(ans, 1+self.recurse(new_mask, tuple(new_in_degrees)))
        return ans
    
    def minNumberOfSemesters(self, n: int, relations: List[List[int]], k: int) -> int:
        # saving n and k for later use
        self.n = n
        self.k = k
        in_degrees = [0]*self.n
        # graph layout remains the same, although the in_degrees change. 
        # This allows us to keep graph as self.graph 
        # instead of passing it over and over.
        self.graph = defaultdict(list)
        for prev_course, next_course in relations:
            # remember, its 0-indexed now!
            in_degrees[next_course - 1] += 1
            self.graph[prev_course - 1].append(next_course - 1)
        
        # start with all the bits set
        return self.recurse((1 << self.n) - 1, tuple(in_degrees))
```

## 5. References
- https://leetcode.com/problems/parallel-courses-ii/discuss/710229/Python-Short-DP-with-Binary-Masks-O(n2*2n)-explained
- https://leetcode.com/problems/parallel-courses-ii/discuss/710229/Python-Short-DP-with-Binary-Masks-O(n2*2n)-explained/830096 < I took the code from this guy.

Anyways, this wraps up the solution. If you found it helpful, upvote. More feedback or comments/criticisms? Let me know!