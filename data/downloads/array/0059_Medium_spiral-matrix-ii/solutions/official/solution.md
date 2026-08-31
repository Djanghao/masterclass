# Official Solution

**Link:** [https://leetcode.com/problems/spiral-matrix-ii/solution/](https://leetcode.com/problems/spiral-matrix-ii/solution/)

---

[TOC]

## Solution

---
### Overview

There are various problems in spiral matrix series with some variations like [Spiral Matrix](https://leetcode.com/problems/spiral-matrix/) and [Spiral Matrix III](https://leetcode.com/problems/spiral-matrix-iii/).

In order to solve such questions, the core idea is to decode the underlying pattern. This can be done by simulating the pattern and finding a generic representation that would work for any given $$n$$.
Let's discuss a few approaches.

---
### Approach 1: Traverse Layer by Layer in Spiral Form

**Intuition**

If we try to build a pattern for a given $$n$$, we observe that the pattern repeats after completing one circular traversal around the matrix. Let's call this one circular traversal as  _layer_. We start traversing from the outer layer and move towards inner layers on every iteration.

![img](../Figures/59/spiral_layers.png)

**Algorithm**

Let's devise an algorithm for the spiral traversal:

-  We can observe that, for any given $$n$$, the total number of layers is given by :
$$\lfloor \frac{n+1}{2} \rfloor$$
This works for both even and odd $$n$$.

_Example_

For $$n = 3$$, $$layers = 2$$

For $$n = 6$$, total $$layers = 3$$

- Also, for each layer, we traverse in _at most_ 4 directions :


![img](../Figures/59/spiral_traverse.png)


In every direction, either row or column remains constant and other parameter changes (increments/decrements).

_Direction 1: From top left corner to top right corner._

The row remains constant as $$\text{layer}$$ and column increments from $$\text{layer}$$ to  $$n-\text{layer}-1$$

_Direction 2: From top right corner to the bottom right corner._

The column remains constant as $$n-layer-1$$ and row increments from
$$\text{layer}+1$$ to $$n-\text{layer}$$.

_Direction 3: From bottom right corner to bottom left corner._

The row remains constant as $$n-\text{layer}-1$$ and column decrements from $$n-\text{layer}-2$$ to $$\text{layer}$$.

_Direction 4: From bottom left corner to top left corner._

The column remains constant as $$\text{layer}$$ and column decrements from $$n-\text{layer}-2$$ to $$\text{layer}+1$$.

This process repeats $$(n+1)/2$$ times until all layers are traversed.

![img](../Figures/59/spiral_detailed_fix.png)


<iframe src="https://leetcode.com/playground/fs3Ga77r/shared" frameBorder="0" width="100%" height="500" name="fs3Ga77r"></iframe>

**Complexity Analysis**

* Time Complexity: $$\mathcal{O}(n^2)$$. Here, $$n$$ is given input and we are iterating over $$n\cdot n$$ matrix in spiral form.
* Space Complexity: $$\mathcal{O}(1)$$  We use constant extra space for storing $$cnt$$.

---
### Approach 2: Optimized spiral traversal

**Intuition**

Our main aim is to walk in a spiral form and fill the array in a particular pattern. In the previous approach, we used a separate loop for each direction. Here, we discuss another optimized to achieve the same result.

**Algorithm**

- We have to walk in 4 directions forming a layer. We use an array $$dir$$ that stores the changes in $$x$$ and $$y$$ co-ordinates in each direction.

_Example_

In left to right walk ( _direction #1_ ), $$x$$ co-ordinates remains same and $$y$$ increments ($$x = 0$$, $$y = 1$$).

In right to left walk ( _direction #3_ ), $$x$$ remains same and $$y$$ decrements ($$x = 0$$, $$y = -1$$).

Using this intuition, we pre-define an array $$dir$$ having $$x$$ and $$y$$ co-ordinate changes for each direction. There are a total of 4 directions as discussed in the previous approach.

- The $$\text{row}$$ and $$col$$ variables represent the current $$x$$ and $$y$$ co-ordinates respectively. It updates based on the direction in which we are moving.

_How do we know when we have to change the direction?_

When we find the next row or column in a particular direction has a non-zero value, we are sure it is already traversed and we change the direction.

Let $$d$$ be the current direction index. We go to next direction in array $$dir$$ using $$(d+ 1) \% 4$$. Using this we could go back to direction 1 after completing one circular traversal from direction 1 to direction 4 .

> It must be noted that we use `floorMod` in Java instead of modulo $$\%$$ to handle mod of negative numbers. This is required because row and column values might go negative and using $$\%$$ won't give desired results in such cases.  

<iframe src="https://leetcode.com/playground/97g6k8bX/shared" frameBorder="0" width="100%" height="480" name="97g6k8bX"></iframe>

**Complexity Analysis**

* Time Complexity: $$\mathcal{O}(n^2)$$. Here, $$n$$ is given input and we are iterating over $$n\cdot n$$ matrix in spiral form.
* Space Complexity: $$\mathcal{O}(1)$$  We use constant extra space for storing $$cnt$$.