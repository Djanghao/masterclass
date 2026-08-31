# 📌📌 For Beginners || Count Number of Connected Graphs O(N) || 94% Faster 🐍

**Author:** abhi9Rai
**Votes:** 37
**Link:** [https://leetcode.com/problems/most-stones-removed-with-same-row-or-column/solutions/1689443/](https://leetcode.com/problems/most-stones-removed-with-same-row-or-column/solutions/1689443/)

---

## IDEA :

*If you see the whole description with focus you will find that we have to find total number of distinguish connected points. So, We move this problem to a graph domain. When two stones row or column is same, we can say the they are connected.*

After construcing the graph, we get a collection of one or more connected graphs In graph's terminology, this is called **strongly connected component.**

Now, for every stronly connected component, one stone will remain, all others inside that component can be removed (because from that remaining stone, we can move to other stones in that component and remove them).

**So, Our answer should be = Number ot stones - Number of strongly connected component**

### Algorightm

	Prepare the graph
	From every stone
		a. If not visitied, run dfs to remove connected nodes.
		b. After removing a node, track that to avoid infinite loop
		c. When a strongly connected component is fully traversed, subtract 1 to track that remaining stone
	Do this until all stones are traversed 

### Implementation :
'''
		
		class Solution:
			def removeStones(self, stones: List[List[int]]) -> int:
				
				def remove_point(a,b):                           # Function to remove connected points from the ongoing graph. 
					points.discard((a,b))
					for y in x_dic[a]:
						if (a,y) in points:
							remove_point(a,y)

					for x in y_dic[b]:
						if (x,b) in points:
							remove_point(x,b)

				x_dic = defaultdict(list)
				y_dic = defaultdict(list)
				points= {(i,j) for i,j in stones}
				
				for i,j in stones:                                # Construction of graph by x_coordinates and y_coordinates.
					x_dic[i].append(j)
					y_dic[j].append(i)

				cnt = 0
				for a,b in stones:                                # counting of distinct connected graph.
					if (a,b) in points:
						remove_point(a,b)
						cnt+=1

				return len(stones)-cnt
				
### **Thanks and Upvote if you like the Idea !!\uD83E\uDD17**