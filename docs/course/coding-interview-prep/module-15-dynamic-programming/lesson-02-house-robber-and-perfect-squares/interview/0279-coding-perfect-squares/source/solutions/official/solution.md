# Official Solution

**Link:** [https://leetcode.com/problems/perfect-squares/solution/](https://leetcode.com/problems/perfect-squares/solution/)

---

[TOC]

## Solution


---

### Approach 1: Brute-force Enumeration [Time Limit Exceeded]

**Intuition**

The problem asks us to find the **least** numbers of square numbers that can sum up to a given number. We could rephrase the problem as follows:

>Given a list of square numbers and a positive integer number `n`, one is asked to find a combination of square numbers that sum up to `n`, and the combination should contain the **_least_** numbers among all possible solutions.<br/>
>_Note:_ one could reuse the square numbers in the combination.

From the above narrative of the problem, it seems to be a _combination_ problem, to which an intuitive solution would be the `brute-force enumeration` where we enumerate all possible combinations and find the minimal one of them.

We could formulate the problem in the following formula:

$$
\text{numSquares}(n) = \min \Big(\text{numSquares(n-k) + 1}\Big) \qquad \forall k \in \{\text{square numbers}\}
$$

From the above formula, one can translate it into a **_recursive_** solution literally. Here is one example.

<iframe src="https://leetcode.com/playground/bNapAJPg/shared" frameBorder="0" width="100%" height="395" name="bNapAJPg"></iframe>

The above solution could work for small numbers. However, as one would find out, we would quickly run into the `Time Limit Exceeded` exception even for medium-size numbers (_e.g._ 55).

Or simply we might encounter the `Stack Overflow` due the to the excessive recursion. 
<br/>
<br/>

---

### Approach 2: Dynamic Programming

**Intuition**

The reason why it failed with the brute-force approach is simply because we re-calculate the sub-solutions over and over again. However, the formula that we derived before is still valuable. All we need is a better way to implement the formula.

$$
\text{numSquares}(n) = \min \Big(\text{numSquares(n-k) + 1}\Big) \qquad \forall k \in \{\text{square numbers}\}
$$

One might notice that, the problem is similar to the [Fibonacci number problem](https://leetcode.com/problems/fibonacci-number/), judging from the formula. And like Fibonacci number, we have several more efficient ways to calculate the solution, other than the simple recursion.

One of the ideas to solve the stack overflow issue in recursion is to apply the **_Dynamic Programming_** (DP) technique, which is built upon the idea of reusing the results of intermediate sub-solutions to calculate the final solution. 

To calculate the value of $$\text{numSquares}(n)$$, first we need to calculate all the values before $$n$$, _i.e._ $$\text{numSquares}(n-k) \qquad \forall{k} \in\{\text{square numbers}\}$$. If we have already kept the solution for the number $$n-k$$ in somewhere, we then would not need to resort to the recursive calculation which prevents the stack overflow. 

**Algorithm**

Based on the above intuition, we could implement the DP solution in the following steps.

- As for almost all DP solutions, we first create an array `dp` of one or multiple dimensions to hold the values of intermediate sub-solutions, as well as the final solution which is usually the last element in the array. _Note that_, we create a fictional element `dp[0]=0` to simplify the logic, which helps in the case that the remainder (`n-k`) happens to be a square number.
<br/>
- As an additional preparation step, we pre-calculate a list of square numbers (_i.e._ `square_nums`) that is less than the given number `n`.
<br/>
- As the main step, we then loop from the number `1` to `n`, to calculate the solution for each number `i` (_i.e._ `numSquares(i)`). At each iteration, we keep the result of `numSquares(i)` in `dp[i]`, while resuing the previous results stored in the array.
<br/>
- At the end of the loop, we then return the last element in the array as the result of the solution.

In the graph below, we illustrate how to calculate the results of `numSquares(4)` and `numSquares(5)` which correspond to the values in `dp[4]` and `dp[5]`.

![pic](../Figures/279/279_dp.png)

Here are some sample implementations. In particular, the Python solution took ~3500 ms, which was faster than ~50% submissions at the time.

**Note:** the following python solution works for Python2 only. For some unknown reason, it takes significantly longer time for Python3 to run the same code.

<iframe src="https://leetcode.com/playground/mgeJD3zR/shared" frameBorder="0" width="100%" height="480" name="mgeJD3zR"></iframe>


**Complexity**

* Time complexity:  $$\mathcal{O}(n\cdot\sqrt{n})$$. In main step, we have a nested loop, where the outer loop is of $$n$$ iterations and in the inner loop it takes at maximum $$\sqrt{n}$$ iterations.

* Space Complexity: $$\mathcal{O}(n)$$. We keep all the intermediate sub-solutions in the array `dp[]`.
<br/>
<br/>

---

### Approach 3: Greedy Enumeration

**Intuition**

Recursion isn't bad though. Above all, it provides us a concise and intuitive way to understand the problem. We could still resolve the problem with recursion. To improve the above brute-force enumeration solution, we could add a touch of `Greedy` into the recursion process. We could reformulate the enumeration solution as follows:
> Starting from the combination of one single number to multiple numbers, _once_ we find a combination that can sum up to the given number `n`, then we can say that we must have found the `smallest` combination, since we enumerate the combinations _greedily_ from small to large.

To better explain the above intuition, let us first define a function called `is_divided_by(n, count)` which returns a boolean value to indicate whether the number `n` can be divided by a combination with `count` number of square numbers, rather than returning the exact size of combination as the previous function `numSquares(n)`.

$$
\text{numSquares}(n) = \argmin_{\text{count} \in [1, 2, ...n]} \Big(
\text{is\_divided\_by}(n, \text{count}) \Big)
$$

In addition, the function `is_divided_by(n, count)` could also assume the form of recursion as follows:
$$
\text{is\_divided\_by}(n, \text{count}) = \text{is\_divided\_by}(n-k, \text{count}-1) \quad \exists{k} \in \{\text{square numbers}\}
$$

>Different from the recursive function of `numSquare(n)`, the recursion process of `is_divided_by(n, count)` would boil down to its bottom case (_i.e._ `count==1`) much more _rapid_.

Here is one example on how the function `is_divided_by(n, count)` breaks down for the input `n=5` and `count=2`.

<br/>

![pic](../Figures/279/279_greedy.png)

With this trick of reformulation, we could dramatically reduce the risk of stack overflow.


**Algorithm**

- First of all, we prepare a list of square numbers (named `square_nums`) that are less than the given number `n`.
<br/>
- In the main loop, iterating the size of combination (named `count`) from one to `n`, we check if the number `n` can be divided by the sum of the combination, _i.e._ `is_divided_by(n, count)`.
<br>
- The function `is_divided_by(n, count)` can be implemented in the form of recursion as we defined in the intuition section.
<br/>
- In the bottom case, we have `count==1`, we just need to check if the number `n` is a square number itself. We could use the inclusion test with the list `square_nums` that we prepared before, _i.e._ $$n \in \text{square\_nums}$$. And if we use the `set` data structure for `square_nums`, we could obtain a faster running time than the approach of `n == int(sqrt(n)) ^ 2`.

Concerning the correctness of the algorithm, often the case we could prove the Greedy algorithm by **contradiction**. This is no exception. Suppose we find a `count=m` that can divide the number `n`, and suppose in the later iterations there exists another number `count=p` that can also divide the number and the combination is smaller than the found one _i.e._ `p < m`. Given the order of the iteration, the `count=p` would have been discovered before `count=m` which is contradict to the fact that `p` comes later than `m`. Therefore, we can say that the algorithm works as expected, which always finds the minimal size of combination.

Here are some sample implementation. In particular, the Python solution took ~_70ms_, which was faster than ~ _90%_ submissions at the time.

<iframe src="https://leetcode.com/playground/2R8WfFbi/shared" frameBorder="0" width="100%" height="500" name="2R8WfFbi"></iframe>

**Complexity**

* Time complexity:  $$\mathcal{O}( \frac{\sqrt{n}^{h+1} - 1}{\sqrt{n} - 1} ) = \mathcal{O}(n^{\frac{h}{2}}) $$ where `h` is the maximal number of recursion that could happen. As one might notice, the above formula actually resembles the formula to calculate the number of nodes in a complete N-ary tree. Indeed, the trace of recursive calls in the algorithm form a N-ary tree, where N is the number of squares in `square_nums`, _i.e._ $$\sqrt{n}$$. In the worst case, we might have to traverse the entire tree to find the solution.
<br/>

* Space Complexity: $$\mathcal{O}(\sqrt{n})$$. We keep a list of `square_nums`, which is of $$\sqrt{n}$$ size. In addition, we would need additional space for the recursive call stack. But as we will learn later, the size of the call track would not exceed 4.
<br/>
<br/>

---

### Approach 4: Greedy + BFS (Breadth-First Search)

**Intuition**

As we mentioned in the complexity analysis in the above Greedy approach, the trace of the call stack forms a N-ary tree where each node represents a call to the `is_divided_by(n, count)` function. Based on the above intuition, again we could reformulate the original problem as follows:

>Given a N-ary tree, where each node represents a **remainder** of the number `n` subtracting a combination of square numbers, our task is to find a node in the tree, which should meet two conditions:
1). the value of the node (_i.e._ the remainder) should be a square number as well.
2). the distance between the node and the root should be minimal among all nodes that meet the condition (1).

Here is an example how the tree would look like.

![pic](../Figures/279/279_greedy_tree.png)

In the previous Approach #3, due to the _Greedy_ strategy that we perform the calls, we were actually constructing the N-ary tree level-by-level from top to down. And the we were traversing it in a **_BFS_** (Breadth-First Search) manner. At each level of the N-ary tree, we were enumerating the combinations that are of the same size.

The order of traversing is of BFS, rather than DFS (Depth-First Search), is due to the fact that before exhausting all the possibilities of decomposing a number `n` with a fixed amount of squares, we would not explore any potential combination that needs more elements.  


**Algorithm**

- Again, first of all, we prepare a list of square numbers (named `square_nums`) that are less than the given number `n`.
<br/>
- We then create a `queue` variable which would keep all the remainders to enumerate at each level.
<br/>
- In the main loop, we iterate over the `queue` variable. At each iteration, we check if the remainder is one of the square numbers. If the remainder is not a square number, we subtract it with one of the square numbers to obtain a new remainder and then add the new remainder to the `next_queue` for the iteration of the next level. We break out of the loop once we encounter a remainder that is of a square number, which also means that we find the solution. 

**_Note_**: in a typical BFS algorithm, the `queue` variable usually would be of array or list type. However, here we use the set type, in order to eliminate the redundancy of remainders within the same level. As it turns out, this tiny trick could even provide a 5 times speedup on running time.

In the following graph, we illustrate the layout of the queue, on the example of `numSquares(7)`.

![pic](../Figures/279/279_greedy_bfs_edited.png)

Here are some sample implementations. In particular, the Python implementation inspired from the post of [ChrisZhang12240](https://leetcode.com/problems/perfect-squares/discuss/71475/Short-Python-solution-using-BFS) took ~200 ms which was faster than ~72% of submission at that time.

<iframe src="https://leetcode.com/playground/54h6TkrV/shared" frameBorder="0" width="100%" height="500" name="54h6TkrV"></iframe>

**Complexity**

* Time complexity: $$\mathcal{O}( \frac{\sqrt{n}^{h+1} - 1}{\sqrt{n} - 1} ) = \mathcal{O}(n^{\frac{h}{2}}) $$ where `h` is the height of the N-ary tree. One can see the detailed explanation on the previous Approach #3.
<br/>

* Space complexity: $$\mathcal{O}\Big((\sqrt{n})^h\Big)$$, which is also the maximal number of nodes that can appear at the level `h`. As one can see, though we keep a list of `square_nums`, the main consumption of the space is the `queue` variable, which keep track of the remainders to visit for a given level of N-ary tree.
<br/>
<br/>

---

### Approach 5: Mathematics 

**Intuition**

The problem can be solved with the mathematical theorems that have been proposed and proved over time. We will break down the problem into several cases in this section.

In 1770, [Joseph Louis Lagrange](https://en.wikipedia.org/wiki/Lagrange%27s_four-square_theorem) proved a theorem, called _Lagrange's four-square theorem_, also known as Bachet's conjecture, which states that every natural number can be represented as the sum of four integer squares:
$$
p=a_{0}^{2}+a_{1}^{2}+a_{2}^{2}+a_{3}^{2}
$$
where the four numbers 
$$a_{0},a_{1},a_{2},a_{3}$$ are integers.

For example, 3, 31 can be represented as the sum of four squares as follows:
$$
3=1^{2}+1^{2}+1^{2}+0^{2} \qquad
31=5^{2}+2^{2}+1^{2}+1^{2}
$$

>Case 1). The Lagrange's four-square theorem sets the upper bound for the results of the problem, _i.e._ if the number `n` cannot be decomposed into a fewer number of squares, _at least_ it can be decomposed into the sum of **4** square numbers, _i.e._ $$\text{numSquares}(n) \le 4$$.

As one might notice in the above example, the number zero is also considered as a square number, so we can consider that the number 3 can either be decomposed into 3 or 4 square numbers.

_However, Lagrange's four-square theorem does not tell us directly the *least* numbers of square to decompose a natural number._ 

Later, in 1797, [Adrien-Marie Legendre](https://en.wikipedia.org/wiki/Adrien-Marie_Legendre) completed the four-square theorem with his **_three-square theorem_**, by proving a particular condition that a positive integer can be expressed as the sum of three squares:
$$
n \ne 4^{k}(8m+7) \iff n = a_{0}^{2}+a_{1}^{2}+a_{2}^{2}
$$
where $$k$$ and $$m$$ are integers.

> Case 2). Unlike the four-square theorem, Adrien-Marie Legendre's three-square theorem gives us a **necessary** and **sufficient** condition to check if the number can **ONLY** be decomposed into 4 squares, not fewer.

It might be tricky to see the conclusion that we made in the case (2) from the three-square theorem. Let us elaborate the deduction procedure a bit.
First of all, the three-square theorem tells us that if the number `n` is of the form $$n = 4^{k}(8m+7)$$, then the number `n` cannot be decomposed into the sum of 3 numbers of squares. Further, we can also **assert** that the number `n` cannot be decomposed into the sum of two squares, neither the number itself is a square. Because suppose the number `n` can be decomposed as $$n = a_{0}^{2}+a_{1}^{2}$$, then by adding the square number zero into the expression, _i.e._ $$n = a_{0}^{2}+a_{1}^{2} + 0^2$$, we obtain the conclusion that the number `n` can be decomposed into 3 squares, which is **contradicted** to the three-square theorem. Therefore, together with the four-square theorem, we can assert that if the number does not meet the condition of the three-square theorem, it can ONLY be decomposed into the sum of 4 squares, not fewer.
<br/>

If the number meets the condition of the three-square theorem, we know that if can be decomposed into 3 squares. But what we don't know is that whether the number can be decomposed into fewer squares, _i.e._ one or two squares.
So before we attribute the number to the bottom case (three-square theorem), here are the two cases remained to check, namely:

>Case 3.1). if the number is a square number itself, which is easy to check _e.g._ `n == int(sqrt(n)) ^ 2`.

>Case 3.2). if the number can be decomposed into the sum of two squares. Unfortunately, there is no mathematical weapon that can help us to check this case in one shot. We need to resort to the **enumeration** approach.


**Algorithm**

One can literally follow the above cases to implement the solution.

- First, we check if the number `n` is of the form $$n = 4^{k}(8m+7)$$, if so we return 4 directly.
<br/>
- Otherwise, we further check if the number is of a square number itself or the number can be decomposed the sum of two squares.
<br/>
- In the bottom case, the number can be decomposed into the sum of 3 squares, though we can also consider it decomposable by 4 squares by adding zero according to the four-square theorem. But we are asked to find the least number of squares.

We give some sample implementations here. The solution is inspired from the posts of [TCarmic](https://leetcode.com/problems/perfect-squares/discuss/376795/100-O(log-n)-Python3-Solution-Lagrange's-four-square-theorem) and [StefanPochmann](https://tinyurl.com/y4falx4f) in the [Discussion](https://leetcode.com/problems/perfect-squares/discuss/) forum.

<iframe src="https://leetcode.com/playground/R7wxBJ2z/shared" frameBorder="0" width="100%" height="480" name="R7wxBJ2z"></iframe>

**Complexity**

* Time complexity: $$\mathcal{O}(\sqrt{n})$$. In the main loop, we check if the number can be decomposed into the sum of two squares, which takes $$\mathcal{O}(\sqrt{n})$$ iterations. In the rest of cases, we do the check in constant time.
<br/>

* Space complexity: $$\mathcal{O}(1)$$. The algorithm consumes a constant space, regardless the size of the input number.
<br/>
<br/>