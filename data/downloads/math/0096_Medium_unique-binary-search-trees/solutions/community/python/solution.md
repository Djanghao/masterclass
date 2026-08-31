# [Python]Easy DP Solution Explained By Someone Who Used To Struggle To Understand DP

**Author:** aysusayin
**Votes:** 107
**Link:** [https://leetcode.com/problems/unique-binary-search-trees/solutions/703644/](https://leetcode.com/problems/unique-binary-search-trees/solutions/703644/)

---

First of all, I am so happy because I was able to solve this problem without any help :) So, I am going to explained how I improved my DP skills. Of course, this is a "medium" question and I still struggle with the hard ones but I can see some improvement and I want to share my tips with you.

***How to understand if a problem is DP problem?***
Well, I still struggle to understand that for some problem types but basically if you think that you can solve the problem easily by knowing the solution for previous values(like the solution on the previous grids for 2D cases or the solution for n-1 etc.), it is probably a DP problem.

DP problems are usually an iterative version of a recursive solution. I find it easy to think about recursive solution first and then convert it to DP. 

**1. Recursive + Memoization**

We need to calculate how many possible trees can be made. 
If there is only ```1``` node then it is easy. The answer is 1. 
For ```2``` we can construct ```2``` different trees: One of the node is root, the second one can either be a left child or right child.
```
n = 2

   1                            1
  /              or               \\
2	                                2
```
Easy!
What about n=3?
```
   1         3     3      2      1
    \\       /     /      / \\      \\
	---------------------------------- Let's cut the trees from here
     3     2     1      1   3      2
    /     /       \\                 \\
   2     1         2                 3
 ```
As you can see, from where we cut, the bottom of the tree is actually another tree where the same logic applies. So the only thing we need to decide is how to distrubute the remaining nodes to childs of the root. The options can be:
```
------num of nodes------
left_child   right_child
     0             2 --> These are the subtrees, like the new trees with n = 0 and n = 2
     1             1
     2             0
```
To find how many possible solutions are there for n=3, add up all these possibilities . We can call the same function for calculating the values in all the options because it is actually the same problem. 
To sum up, we picked the root and then we need to decide on how the left and right subtrees will look like. The options are how many nodes can be on the left and right subtree at the same time.

```
       -------------- 3 ---------------
	  /		          |                \\
  /      \\	      /      \\	 	   /	    \\
  0     --2--    1        1     --2--        0
       /     \\                 /     \\  
	 /\\       /\\             /\\       /\\
	1  0     0  1           1  0     0  1

```
Here is my attempt to draw the recursion tree. Even for a small n value there are multiple overlapping problems. So I used a memoization table and saved the values on that table before returning the total value from the function and if the value that we are looking for exists on the table, return that value without doing any extra calculations.

Here is the code:

```
class Solution:
    def numTrees(self, n: int) -> int:
        self.table = [-1] * (n+1)
        self.table[0] = 1
        return self.numTreesRec(n)
        
    def numTreesRec(self, n):
        if self.table[n] != -1:
            return self.table[n]
        total = 0
        for m in range(n):
            total += (self.numTreesRec(n-1-m) * self.numTreesRec(m))
        self.table[n] = total
        return total
```

**2. Dynamic Programming**
Now, we have our recursive solution. As you can see from the above recursion tree, values are calculated starting from 0 and then 1 and goes like this until n. The means we can do it iteratively. We can start from 1 (n=0 are our base case) and calculate the values upto n. So, I created a dp table and the solution for n = i is stored at dp[i]. Now, if we go back to our example, for n=3:
```
0 2 
1 1
2 0
```
We have these options for distributing the remaining nodes to subtrees. We already calculated the values for 0, 1 and 2 because we used iterative approach. Therefore solution for dp[3] will be
```
dp[3] = dp[0] * dp[2] + dp[1] * dp[1] + dp[2] * dp[0]
```

which is done by the inner for loop in the code.

Here is the code:

```
class Solution:
    def numTrees(self, n: int) -> int:
        dp = [0] * (n+1)
        dp[0] = 1
        for i in range(1, n+1):
            for j in range(i):
                dp[i] += dp[j] * dp[i- 1 - j]
        return dp[n]
```

The time complexity is O(n^2) and the space complexity is O(n). There is a better solution by using catalan numbers. 

I tried  my best to explain how I think when solving  a dp problem. Hope that it helps and don't worry if you are having diffuculties. Practice makes perfect!