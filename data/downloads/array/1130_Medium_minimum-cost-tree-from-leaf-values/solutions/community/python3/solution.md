# [RZ] Summary of all the solutions I have learned from Discuss in Python

**Author:** ASaltyFish
**Votes:** 466
**Link:** [https://leetcode.com/problems/minimum-cost-tree-from-leaf-values/solutions/478708/](https://leetcode.com/problems/minimum-cost-tree-from-leaf-values/solutions/478708/)

---

**1. Dynamic programming approach**
We are given a list of all the leaf nodes values for certain binary trees, but we do not know which leaf nodes belong to left subtree and which leaf nodes belong to right subtree. Since the given leaf nodes are result of inorder traversal, we know there will be pivots that divide arr into left and right, nodes in the left build left subtree and nodes in the right build right subtree. For each subtree, if we know the minimum sum, we can use it to build the result of the parent tree, so the problem can be divided into subproblems, and we have the following general transition equation (res(i, j) means the minimum non-leaf nodes sum with leaf nodes from arr[i] to arr[j]):

```
for k from i to j
    res(i, j) = min(res(i, k) + res(k + 1, j) + max(arr[i] ... arr[k]) * max(arr[k + 1] ... arr[j]))
```

**Top down code with memorization ---> O(n ^ 3)**
```
class Solution:
    def mctFromLeafValues(self, arr: List[int]) -> int:
        return self.helper(arr, 0, len(arr) - 1, {})
        
    def helper(self, arr, l, r, cache):
        if (l, r) in cache:
            return cache[(l, r)]
        if l >= r:
            return 0
        
        res = float('inf')
        for i in range(l, r):
            rootVal = max(arr[l:i+1]) * max(arr[i+1:r+1])
            res = min(res, rootVal + self.helper(arr, l, i, cache) + self.helper(arr, i + 1, r, cache))
        
        cache[(l, r)] = res
        return res
```

**Bottom up code ---> O(n ^ 3)**
```
class Solution:
    def mctFromLeafValues(self, arr: List[int]) -> int:
        n = len(arr)
        dp = [[float('inf') for _ in range(n)] for _ in range(n)]
        for i in range(n):
            dp[i][i] = 0
        
        for l in range(2, n + 1):
            for i in range(n - l + 1):
                j = i + l - 1
                for k in range(i, j):
                    rootVal = max(arr[i:k+1]) * max(arr[k+1:j+1])
                    dp[i][j] = min(dp[i][j], rootVal + dp[i][k] + dp[k + 1][j])
        return dp[0][n - 1]
```

**2. Greedy approach ---> O(n ^ 2)**
Above approach is kind of like brute force since we calculate and compare the results all possible pivots. To achieve a better time complexity, one important observation is that when we build each level of the binary tree, it is the max left leaf node and max right lead node that are being used, so we would like to put big leaf nodes close to the root. Otherwise, taking the leaf node with max value in the array as an example, if its level is deep, for each level above it, its value will be used to calculate the non-leaf node value, which will result in a big total sum.

With above observation, the greedy approach is to find the smallest value in the array, use it and its smaller neighbor to build a non-leaf node, then we can safely delete it from the array since it has a smaller value than its neightbor so it will never be used again. Repeat this process until there is only one node left in the array (which means we cannot build a new level any more)

```
class Solution:
    def mctFromLeafValues(self, arr: List[int]) -> int:
        res = 0
        while len(arr) > 1:
            index = arr.index(min(arr))
            if 0 < index < len(arr) - 1:
                res += arr[index] * min(arr[index - 1], arr[index + 1])
            else:
                res += arr[index] * (arr[index + 1] if index == 0 else arr[index - 1])
            arr.pop(index)
        return res
```

**3. Monotonic stack approach ---> O(n)**
In the greedy approach of 2), every time we delete the current minimum value, we need to start over and find the next smallest value again, so repeated operations are more or less involved. To further accelerate it, one observation is that for each leaf node in the array, when it becomes the minimum value in the remaining array, its left and right neighbors will be the first bigger value in the original array to its left and right. This observation is a clue of a possible monotonic stack solution as follows.

```
class Solution:
    def mctFromLeafValues(self, arr: List[int]) -> int:
        stack = [float('inf')]
        res = 0
        for num in arr:
            while stack and stack[-1] <= num:
                cur = stack.pop()
                if stack:
                    res += cur * min(stack[-1], num)
            stack.append(num)
        while len(stack) > 2:
            res += stack.pop() * stack[-1]
        return res
```