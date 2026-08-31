# ✅ C++ || BFS || Easy To Understand || Full Explanation

**Author:** knockcat
**Votes:** 727
**Link:** [https://leetcode.com/problems/maximum-width-of-binary-tree/solutions/1802311/](https://leetcode.com/problems/maximum-width-of-binary-tree/solutions/1802311/)

---

# 662. Maximum Width of Binary Tree
**KNOCKCAT**

```
1. Easy C++
2. Line by Line Explanation with Comments.
3. BFS (breadth first Search)
4. Detailed Explanation \u2705
5. Please Upvote if it helps\u2B06\uFE0F
6. Link to my Github Profile contains a repository of Leetcode with all my Solutions. \u2B07\uFE0F
	// \uD83D\uDE09If you Like the repository don't foget to star & fork the repository\uD83D\uDE09 
```
[LeetCode](https://github.com/knockcat/Leetcode)       **Link to LeetCode Repository**


* **EXPLANATION**
```
1.  According to Problem , we have also to count null nodes b/w two nodes.

		  5					1
	     / \\
	    3   6				2
	   /   /
	  2   4					2

2.  Above example we have max 2 nodes in a level, but if you see the second level you
will find that right child of 3 is NULL and therefore we also have to count that 
NULL node, and with that the last level now contain 3 nodes, refer to diagram below.

	      5					1
	   /     \\
	   3      6				2
	 /  \\    /
	2  NULL  4				3 (NULL node also counted)

So Last Level Contains 3 Nodes Including NULL.

3 . We will also assign index to every node

	(if we are startting index from 0)
	according to binary heap

	left(idx) = 2 idx + 1			// left child
	right(idx) = 2 idx + 2			// right child


we will also insert index with node , so that we will know,
the first element at index __ & the last node is at index __
```

* **LET CONSIDER THE DRY RUN FOR ABOVE EXAMPLE**

```
	      5					    1
	   /     \\
	   3      6					2
	 /  \\    /
	2  NULL  4				    3 (NULL node also counted)


if root is empty // return NULL

insert(5, 0) in queue,  queue is not empty
we will continue.

res = 1; 

1. pop(5,0);

	now we look at size of queue, size is one therefore
	and now we will insert,
	left and right child of popped node that is 5 in this case
	therefore,  
2. (3,1) , (6,2)  is inserted.

when we will finish with one iteration,
we will see the index of first element and index of last element in the current level..

i.e difference,

(2 - 1) + 1 and we will assign this to result.

so we will check  as,   res  = max(res, endIdx - startIdx + 1)
				res  = max(0, (2-1) + 1)
				res  = 2

3. Now (3,1)  is poped and its left and right child will be inserted.

	i.e (2,3)  its right is empty it will not insert

   Poped (6,2)
	and now right & left child of (6,2) will inserted.

	i.e (4,5) its right is empty it will not insert,

now at this level the startIdx is 3 (2,3)  & the endIndx is 5

therefore res = max(res  = max(res, endIdx - startIdx + 1)
	    res = max(2, (5-3) + 1)
	    res = 3

4. Now we will pop it and now there is nothing to push.

So finally we will return the result... (3)


As tree is Going Exponentially so we can come accross signed overflow,
therefore for preventing that we will do,

	int idx = p.second - start;

as we don't need  previous values. also we will type cast 2 * idx to  long long
```

 *AS EACH NODE IS VISITED ONCE*
				**Time Complexity O(N)
				Space Comlexity O(N)**

 **CODE WITH EXPLANATION**
```
						// \uD83D\uDE09\uD83D\uDE09\uD83D\uDE09\uD83D\uDE09Please upvote if it helps \uD83D\uDE09\uD83D\uDE09\uD83D\uDE09\uD83D\uDE09
class Solution {
public:
    int widthOfBinaryTree(TreeNode* root) {
        if(root == NULL)
            return 0;
        
        long long res = 1;
        queue<pair<TreeNode*, long long>> q;
        
        // I am using intialising list
        q.push({root, 0});      // also can use make_pair
        
        while(!q.empty())
        {
            long long cnt = q.size();
            // start is the index of root node for first level
            long long start = q.front().second;
            long long end = q.back().second;
            
            res = max(res,end-start + 1);
            
            for(int i = 0; i <cnt; ++i)
            {
                pair<TreeNode*, int> p = q.front();
                // we will use it while inserting it children
                // left child will be 2 * idx + 1;
                // right chils will be 2 * idx + 2;
                long long idx = p.second - start;
                
                q.pop();
                
                // if  left child exist
                if(p.first->left != NULL)
                    q.push({p.first->left, (long long)2 * idx + 1});
                
                // if right child exist
                if(p.first->right != NULL)
                    q.push({p.first->right, (long long) 2 * idx + 2});
            }
        }
        
        return res;
        
    }
};
```

**HOW WE ARE PREVENTING SIGNED OVERFLOW**
we have to prevent signed overflowe that's why..

Consider if we have a sparse tree like this

```
					   90
	                  /  \\
                     45   110
                     /	    \\
                   34	     130
	               /		    \\
				24               200
				/		          \\	
		        and so  on increasing
```
**If each level contains only 2 nodes**
1            (2^0)
2	      (2^1)
4	      (2^2)
8	     (2^3 and so  on)
16	
'	    (**2 ^ level**)
'
'
'
'
they will increase in this fashion.

so even though we have  2 nodes on each level but indexes for null nodes will also be counted,
as these are the  left most and right most nodes. all the intermediate nodes indeces will 
consumed even they are not present 

**so after 31 levels it will come upto 2^31 which will become greater than the value of INT_MAX**
so we have to take **long long but also after 2 ^ 63 the long long limit will also be reached** 
so we have to optimised the code in some way.

*we are pushing one level and popping one level so we are working with 1 level at a time or we say 
2 level at a time*
so when iteration end all the nodes in the queue are of one level
**so we are bothered about only 2 level at a time.**

from 3 to 6
we know the first index is 3 here and last index is 6
**so does it matter if the index is from 3 - 6 or 0 - 3**

from 7 to 14
the index which is 7 - 14 can be represednted as 0 - 7
**so we see the diff is 7 in both the case.**

so in all levels it will propogate like that

**so once we will done with the level we will reset it and we will take first index as 0 always.**
so if it started from 33 to 64
so it will become 0 and frome 64 we will subtract 33

so from 0 to 31

**so that's why we are doing this ( int idx = p.second - start)   to prevent the overflow.**

**Hope Everything is clear now.**

