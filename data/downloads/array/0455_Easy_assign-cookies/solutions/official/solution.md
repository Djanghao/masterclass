# Official Solution

**Link:** [https://leetcode.com/problems/assign-cookies/solution/](https://leetcode.com/problems/assign-cookies/solution/)

---

[TOC]

## Solution

--- 

### Overview

Our objective is to determine the maximum number of content children given cookie sizes and greed factors.

Each index `i` in `g` represents a child whose minimum cookie size is `g[i]`.
Each index `j` in `s` represents a cookie with the size `s[j]`.

A child will be content if their cookie's size `s[j]` meets or exceeds their greed `g[i]`, represented as cookie size `s[j] >= g[i]` 

Each child should receive at most one cookie. We must note that we could have many small cookies, but that will not satisfy a greedy child, because they want 1 large cookie. If there are lots of small cookies but no children with small greed, we can't use those cookies.

### Approach: Greedy, Two-Pointer

#### Intuition

Given the test case 2 `g = [1, 2]` and `s = [1, 2, 3]`, we could attempt a naive approach, iterating through both arrays and assigning cookies to the children in order. 

Would this approach work for all cases? With the test case `g = [2, 1]` and `s = [1, 2]` we realize we cannot assign cookies in order because the first cookie isn't large enough for the first child, and if we allocate the second cookie to the second child, we satisfy only one child when we could satisfy two.

We need to be able to ensure that each child receives the smallest cookie that meets their greed so that larger cookies can be saved for children with more greed. We also want to make sure there are no leftover cookies that could have satisfied children.

The optimal solution will satisfy these conditions:
* Every child that receives a cookie receives the smallest cookie that meets their greed so no larger cookies are wasted on children with smaller greed
* After cookies are assigned, no cookies are remaining that could satisfy the available children's greed

How do we ensure that we don't waste larger cookies on children with smaller greed? We notice that in the first example, both arrays are sorted in ascending order. We need to sort the cookies and children in ascending order so that we can guarantee that for each child, we always try the currently smallest available cookie.

To solve the problem, we will start by sorting both arrays. That way we can ensure the children with the smallest greed and the smallest cookies are at the beginning, and the children with the largest greed and the largest cookies are at the end.

Next, we will use a while loop to iterate through our array of cookies, attempting to assign cookies to children.  We will continue while we have more cookies and children. We will create a variable `cookieIndex` that keeps track of which cookies we have assigned or passed. We will store the number of satisfied children in `contentChildren`. If the next cookie meets the current child's greed, we increment `contentChildren` and `cookieIndex` as that cookie is assigned to a child. If the next cookie doesn't meet the current child's greed, we iterate `cookieIndex` to move on to the next cookie, until we find a cookie large enough for the child or we run out of cookies. Finally, we return `contentChildren`.

How can we be sure this provides the optimal solution?

With this approach, each child is offered the smallest available cookie first. Since the cookies are offered in order of ascending size, this ensures every child receives the smallest cookie that meets their greed. While assigning cookies to children, the children are sorted in increasing order of greed, which means that when we offer a cookie that doesn't meet the current child's greed, we also know there are no children less greedy than the current child. This means that any leftover cookies will not satisfy any available children. The approach provides an optimal solution.

This is a greedy approach because the current child always receives the cookie, even if the cookie could have satisfied the next child. This is the locally optimal choice.


#### Algorithm

1. Sort arrays `g` and `s` in ascending order.
2. Initialize variable ` contentChildren = 0` to represent the number of children who receive cookies that meet their greed.
2. Initialize variable `cookieIndex = 0` to represent the number of cookies that have been assigned or skipped.
3. while `cookieIndex` is less than the size of `s` and `contentChildren` is less than the size of `g`:
    - If the current cookie's size is greater than or equal to the current child's greed: 
        - Increment `contentChildren` to allocate the cookie.
    - Increment `cookieIndex` to move on to the next cookie.
4. Return `contentChildren`.


#### Implementation

<iframe src="https://leetcode.com/playground/aAJwA8BN/shared" frameBorder="0" width="100%" height="327" name="aAJwA8BN"></iframe>

#### Complexity Analysis

* Time Complexity: $O (n \cdot \log n + m \cdot \log m)$ where $n$ is the size of the array `g` and $m$ is the size of the array `s`. 

    Sorting an array of length $k$ takes $O (k \cdot\log k)$, we need to sort two given arrays. The while loop iterates over each cookie and child once, taking $O(m + n)$. To sum up, the overall time complexity is $O (n \cdot \log n + m \cdot \log m)$

* Space Complexity:  $O(m + n)$ or $O(\log m + \log n)$ 
    - Some extra space is used when we sort $s$ and $g$ in place. The space complexity of the sorting algorithm depends on the programming language.
        - In Python, the `sort` method sorts a list using the Timesort algorithm which is a combination of Merge Sort and Insertion Sort and has $$O(n + m)$$ additional space.
        - In C++, the sort() function is implemented as a hybrid of Quick Sort, Heap Sort, and Insertion Sort, with a worse-case space complexity of $$O(\log n + \log m)$$.
        - In Java, Arrays.sort() is implemented using a variant of the Quick Sort algorithm which has a space complexity of $$O(\log n + \log m)$$ for sorting two arrays.