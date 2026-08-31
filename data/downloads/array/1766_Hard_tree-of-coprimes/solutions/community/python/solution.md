# Optimised DFS(Python)

**Author:** manvendra_yadav
**Votes:** 0
**Link:** [https://leetcode.com/problems/tree-of-coprimes/solutions/3000204/](https://leetcode.com/problems/tree-of-coprimes/solutions/3000204/)

---

# Intuition
Since 0 < n[i] < 51, we can use techniques similar to counting sort.
Also custom gcd method is implemented to memorize the results.

# Approach
if we need to find ancestor coprime of x -
- first we find, whether from 1 to 51 which number is coprime to x and then check if that number actually comes in between the path from root to x. if yes it is an ancestor coprime
- but to find the lowest ancestor we also need to check if that number has the maximum depth of all coprimes of x in the path

# Complexity
- Time complexity:
O(N*51)

- Space complexity:
O(N)

# Code
```
class Solution(object):
    def getCoprimes(self, nums, edges):
        """
        :type nums: List[int]
        :type edges: List[List[int]]
        :rtype: List[int]
        """
        graph = collections.defaultdict(list)
        for u, v in edges:
            graph[u].append(v)
            graph[v].append(u)

        map = {}
        path = [None for _ in range(51)]
        ans = [-1] * len(nums)

        def dfs(node, depth, parent):
            max_depth = -1

            for number in range(1, 51):
                if path[number] != None and path[number][1] > max_depth and self.gcd(nums[node], number, map) == 1:
                    ans[node] = path[number][0]
                    max_depth = path[number][1]
            
            temp = path[nums[node]]

            path[nums[node]] = (node, depth)

            for nei in graph[node]:
                if nei != parent:
                    dfs(nei, depth + 1, node)

            path[nums[node]] = temp

        dfs(0, 0, -1)
        return ans
    
    def gcd(self, num1, num2, co_prime_map):

        x = num1
        y = num2

        tuples = [(num1, num2), (num2, num1)]

        while num1%num2 != 0:
            if co_prime_map.get((num1,num2)) != None or co_prime_map.get((num2,num1)) != None:
                num2 = co_prime_map.get((num1,num2))
                break

            r = num1%num2
            num1 = num2
            num2 = r
            tuples.append((num1, num2))
            tuples.append((num2, num1))

        
        for t in tuples:
            co_prime_map[(t[0], t[1])] = num2
            co_prime_map[(t[1], t[0])] = num2

        return num2
    
    
```