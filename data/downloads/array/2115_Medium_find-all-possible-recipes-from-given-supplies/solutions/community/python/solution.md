# 📌📌 Beginners Friendly || Well-Explained || 94% Faster 🐍

**Author:** abhi9Rai
**Votes:** 51
**Link:** [https://leetcode.com/problems/find-all-possible-recipes-from-given-supplies/solutions/1664405/](https://leetcode.com/problems/find-all-possible-recipes-from-given-supplies/solutions/1664405/)

---

## IDEA  :
*Yeahh, This  question is little tricky. But when we come to question in which one element is dependent on others element to complete then we have to first think of Graph.*
Here, All the recipes and supplies ingredients should be made node and Edges `a->b` to be defined as for completion of recipe `b` we should have ingredients `a`.

Taking the first Example:
'''

	recipes = ["bread"], ingredients = [["yeast","flour"]], supplies = ["yeast","flour","corn"]
	
	we can now draw the graph first. (Consider the graph directed from upper nodes to downwards)
	
					yeast       flour
						  \\     /
				meat      Bread
				  \\        /
				  SandWhich

So From here, we can clearly see that we have to do topological sort, Since our graph will be always DAG.

**Topological Sort :-** Topological sorting for Directed Acyclic Graph (DAG) is a linear ordering of vertices such that for every directed edge u v, vertex u comes before v in the ordering. Topological Sorting for a graph is not possible if the graph is not a DAG.
****
### Implementation :
'''

	class Solution:
		def findAllRecipes(self, recipes: List[str], ingredients: List[List[str]], supplies: List[str]) -> List[str]:

			graph = defaultdict(list)
			in_degree = defaultdict(int)
			for r,ing in zip(recipes,ingredients):
				for i in ing:
					graph[i].append(r)
					in_degree[r]+=1

			queue = supplies[::]
			res = []
			while queue:
				ing = queue.pop(0)
				if ing in recipes:
					res.append(ing)

				for child in graph[ing]:
					in_degree[child]-=1
					if in_degree[child]==0:
						queue.append(child)

			return res
		
### Feel free to ask if you have any doubts!! \uD83E\uDD17
### **Thanks & Upvote if you like the Idea !!** \uD83E\uDD1E