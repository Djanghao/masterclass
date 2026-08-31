# Official Solution

**Link:** [https://leetcode.com/problems/optimal-division/solution/](https://leetcode.com/problems/optimal-division/solution/)

---

[TOC]

## Solution

---
### Approach #1 Brute Force [Accepted]

**Algorithm**

Brute force of this problem is to divide the list into two parts $$left$$ and $$right$$ and call function for these two parts. We will iterate $$i$$ from $$start$$ to $$end$$ so that $$left=(start,i)$$ and $$right=(i+1,end)$$.

$$left$$ and $$right$$ parts return their maximum and minimum value and corresponding strings.

Minimum value can be found by dividing minimum of left by maximum of right i.e. $$minVal=left.min/right.max$$.

Similarly,Maximum value can be found by dividing maximum of left value by minimum of right value. i.e. $$maxVal=left.max/right.min$$.

Now, how to add parenthesis? As associativity of division operator is from left to right i.e. by default left most divide should be done first, we need not have to add paranthesis to the left part, but we must add parenthesis to the right part.

eg- "2/(3/4)" will be formed as leftPart+"/"+"("+rightPart+")", assuming leftPart is "2" and rightPart is"3/4".

One more point, we also don't require parenthesis to right part when it contains single digit.

eg- "2/3", here left part is "2" and right part is "3" (contains single digit) . 2/(3) is not valid.


<iframe src="https://leetcode.com/playground/CAbJyzm4/shared" frameBorder="0" name="CAbJyzm4" width="100%" height="515"></iframe>


**Complexity Analysis**

* Time complexity : $$O(n!)$$. Number of permutations of expression after applying brackets will be in $$O(n!)$$ where $$n$$ is the number of items in the list.

* Space complexity: $$O(n^2)$$. Depth of recursion tree will be $$O(n)$$ and each node contains string of maximum length $$O(n)$$.

---
### Approach #2 Using Memorization [Accepted]

**Algorithm**

In the above approach we called optimal function recursively for ever $$start$$ and $$end$$. We can notice that there are many redundant calls in the above approach, we can reduce these calls by using memorization to store the result of different function calls. Here, $$memo$$ array is used for this purpose.

<iframe src="https://leetcode.com/playground/xFgr7Cpd/shared" frameBorder="0" name="xFgr7Cpd" width="100%" height="515"></iframe>

**Complexity Analysis**

* Time complexity : $$O(n^3)$$. $$memo$$ array of size $$n^2$$ is filled and filling of each cell of the $$memo$$ array takes $$O(n)$$ time.

* Space complexity : $$O(n^3)$$. $$memo$$ array of size $$n^2$$ where each cell of array contains string of length $$O(n)$$.

---
### Approach #3 Using some Math [Accepted]

**Algorithm**

Using some simple math we can find the easy solution of this problem. Consider the input in the form of [a,b,c,d], now we have to set priority of
operations to maximize a/b/c/d. We know that to maximize fraction $$p/q$$, $$q$$(denominator) should be minimized. So, to maximize $$a/b/c/d$$  we have to first minimize b/c/d. Now our objective turns to minimize the expression b/c/d.

There are two possible combinations of this expression, b/(c/d) and (b/c)/d.
```
b/(c/d)        (b/c)/d = b/c/d
(b*d)/c        b/(d*c)
d/c            1/(d*c)
```

Obviously, $$d/c > 1/(d*c)$$ for $$d>1$$.

You can see that second combination will always be less than first one for numbers greater than $$1$$. So, the answer will be a/(b/c/d).
Similarly for expression like a/b/c/d/e/f... answer will be a/(b/c/d/e/f...).



<iframe src="https://leetcode.com/playground/wUbJEUre/shared" frameBorder="0" name="wUbJEUre" width="100%" height="309"></iframe>

**Complexity Analysis**

* Time complexity : $$O(n)$$. Single loop to traverse $$nums$$ array.

* Space complexity : $$O(n)$$. $$res$$ variable is used to store the result.