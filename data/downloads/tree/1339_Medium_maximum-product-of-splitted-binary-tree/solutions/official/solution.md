# Official Solution

**Link:** [https://leetcode.com/problems/maximum-product-of-splitted-binary-tree/solution/](https://leetcode.com/problems/maximum-product-of-splitted-binary-tree/solution/)

---

[TOC]

## Solution

---

### Approach 1: One-Pass DFS

**Intuition**

To get started, we're just going to pretend that integers can be infinitely large.

We'll use the following tree example.

![The tree example.](../Figures/1339/tree.png)

There are `n - 1` edges in a tree with `n` nodes, and so for this question there are `n - 1` different possible ways of splitting the tree into a pair of subtrees. Here are 4 out of the 10 possible ways.

![4 possible ways of splitting the original tree.](../Figures/1339/4_trees_fixed.png)

Of these 4 possible ways, the best is the third one, which has a product of `651`.

To make it easier to discuss the solution, we'll name each of the subtrees in a pair.

1. One of the new subtrees is rooted at the node below the removed edge. We'll call it `Subtree 1`.
2. The other is rooted at the root node of the original tree, and is missing the subtree below the removed edge. We'll call it `Subtree 2`.

![Diagram of Subtree 1 and Subtree 2.](../Figures/1339/subtree_pair.png)

Remember that we're required to find the pair of subtrees that have the maximum product. This is done by calculating the sum of each subtree and then multiplying them together. The sum of a subtree is the sum of all the nodes in it.

Calculating the sum of `Subtree 1` can be done using the following recursive tree algorithm. The root of `Subtree 1` is passed into the function.

```python
def tree_sum(subroot):
    if subroot is None:
        return 0
    left_sum = tree_sum(subroot.left)
    right_sum = tree_sum(subroot.right)
    return subroot.val + left_sum + right_sum

print(tree_sum(sub_tree_1_root))
```

This algorithm calculates the sum of a subtree by calculating the sum of its left subtree, sum of its right subtree, and then adding these to the root value. The sum of the left and right subtrees is done in the same way by the recursion.

![Diagram illustrating how sums are calculated.](../Figures/1339/sum_recursive.png)

If you're confused by this recursive summing algorithm, it might help you to [read this article](https://leetcode.com/explore/learn/card/data-structure-tree/17/solve-problems-recursively/534/) on solving tree problems with recursive (top down) algorithms.

We still need a way to calculate the sum of `Subtree 2`. Recall that `Subtree 2` is the tree we get by removing `Subtree 1`. The only way we could directly use the above summing algorithm to calculate the sum of `Subtree 2` is to actually *remove* the edge above `Subtree 1` first. Otherwise, `Subtree 1` would be automatically traversed too.

A simpler way is to recognise that `Sum(Subtree 2) = Sum(Entire Tree) - Sum(Sub Tree 1)`.

![Diagram showing the relationship between subtree sums.](../Figures/1339/sum_rearranging.png)

Another benefit of this approach is that we only need to calculate `Sum(Entire Tree)` once. Then, for each `Sum(Subtree 1)` we calculate, we can immediately calculate `Sum(Subtree 2)` as an $$O(1)$$ operation.

Recall how the summing algorithm above worked. The recursive function is called once for every node in the tree (i.e. subtree rooted at that node), and returns the sum of that subtree.

![Diagram of the recursive calls of part of the tree.](../Figures/1339/sum_full_recursion.png)

Therefore we can simply gather up all the possible `Subtree 1` sums with a list as follows:

```python
subtree_1_sums = [] # All Subtree 1 sums will go here.

def tree_sum(subroot):
    if subroot is None:
        return 0
    left_sum = tree_sum(subroot.left)
    right_sum = tree_sum(subroot.right)
    subtree_sum = left_sum + right_sum + subroot.val
    subtree_1_sums.append(subtree_sum) # Add this subtree sum to the list.
    return subtree_sum

total_sum = tree_sum(root) # Call with the root of the entire tree.
print(subtree_1_sums) # This is all the subree sums.
```

Now that we have a list of the sums for all possible `Subtree 1`'s, we can calculate what the corresponding `Subtree 2` would be for each of them, and then calculate the product, keeping track of the best seen so far.

```python
# Call the function.
subtree_1_sums = [] # Populate by function call.
total_sum = tree_sum(root)

best_product = 0
# Find the best product.
for subtree_1_sum in subtree_1_sums:
    subtree_2_sum = total_sum - subtree_1_sum
    product = subtree_1_sum * subtree_2_sum
    best_product = max(best_product, product)

print(best_product)
```

The question also says we need to take the answer modulo `10 ^ 9 + 7`. Expanded out, this number is `1,000,000,007`. So when we return the product, we'll do:

```python
best_product % 1000000007
```

Only take the *final product* modulo `10 ^ 9 + 7`. Otherwise, you might not be correctly comparing the products.

---

Up until now, we've assumed that integers can be of an infinite size. This is a safe assumption for Python, but not for Java. For Java (and other languages that use a 32-bit integer by default), we'll need to think carefully about where integer overflows could occur.

The problem statement states that there can be up to `50000` nodes, each with a value of up to `10000`. Therefore, the maximum possible subtree sum would be `50,000 * 10,000 = 500,000,000`. This is well below the size of a 32-bit integer (`2,147,483,647`). Therefore, it is impossible for an integer overflow to occur during the summing phase with these constraints.

However, multiplying the subtrees could be a problem. For example, if we had subtrees of `100,000,000` and `400,000,000`, then we'd get a total product of `400,000,000,000,000,000` which is definitely larger than a 32-bit integer, and therefore and overflow would occur!

The easiest solution is to instead use 64-bit integers. In Java, this is the `long` primitive type. The largest possible product would be `250,000,000 * 250,000,000 = 62,500,000,000,000,000‬`, which is below the maximum a 64-bit integer can hold.

In Approach #3, we discuss other ways of solving the problem *if you only had access to 32-bit integers*.

**Algorithm**

<iframe src="https://leetcode.com/playground/Ut2ovwRU/shared" frameBorder="0" width="100%" height="480" name="Ut2ovwRU"></iframe>

**Complexity Analysis**

$$n$$ is the number of nodes in the tree.

- Time Complexity : $$O(n)$$.

    The recursive function visits each of the $$n$$ nodes in the tree exactly once, performing an $$O(1)$$ recursive operation on each. This gives a total of $$O(n)$$

    There are $$n - 1$$ numbers in the list. Each of these is processed with an $$O(1)$$ operation, giving a total of $$O(n)$$ time for this phase too.

    In total, we have $$O(n)$$.


- Space Complexity $$O(n)$$.

    There are two places that extra space is used.

    Firstly, the recursion is putting frames on the stack. The maximum number of frames at any one time is the maximum depth of the tree. For a balanced tree, this is around $$O(\log \, n)$$, and in the worst case (a long skinny tree) it is $$O(n)$$.

    Secondly, the list takes up space. It contains $$n - 1$$ numbers at the end, so it too is $$O(n)$$.

    In both the average case and worst case, we have a total of $$O(n)$$ space used by this approach.


Something you might have realised is that the subtree pair that leads to the largest product is the pair with the smallest difference between them. Interestingly, this fact doesn't help us much with optimizing the algorithm. This is because subtree sums are *not* obtained in sorted order, and so any attempt to sort them (and thus find the nearest to middle directly) will cost at least $$O(n \, \log \, n)$$ to do. With the overall algorithm, even with the linear search, only being $$O(n)$$, this is strictly worse. The only situation this insight becomes useful is if you *have* to solve the problem using only 32-bit integers. The reason for this is discussed in Approach #3.

</br>

---

### Approach 2: Two-Pass DFS

**Intuition**

Instead of putting the `Subtree 1` sums into a separate list, we can do 2 separate tree summing traversals.

1. Calculate the sum of the entire tree.
2. Check the product we'd get for each subtree.

Calculating the total sum is done in the same way as before.

Finding the maximum product is similar, except requires a variable outside of the function to keep track of the maximum product seen so far.

```python
def maximum_product(subroot, total):
    best = 0
    def recursive_helper(subroot):
        nonlocal best
        if subroot is None: return 0
        left_sum = recursive_helper(subroot.left)
        right_sum = recursive_helper(subroot.right)
        total_sum = left_sum + right_sum + subroot.val
        product = total_sum * (tree_total_sum - total_sum)
        best = max(best, product)
        return total_sum
    recursive_helper(subroot)
    return best
```

**Algorithm**

It is possible to combine the 2 recursive functions into a single one that is called twice, however the side effects of the functions (changing of class variables) hurt code readability and can be confusing. For this reason, the code below uses 2 separate functions.

<iframe src="https://leetcode.com/playground/Nf4ReJAs/shared" frameBorder="0" width="100%" height="500" name="Nf4ReJAs"></iframe>


**Complexity Analysis**

$$n$$ is the number of nodes in the tree.

- Time Complexity : $$O(n)$$.

    Each recursive function visits each of the $$n$$ nodes in the tree exactly once, performing an $$O(1)$$ recursive operation on each. This gives a total of $$O(n)$$.

- Space Complexity $$O(n)$$.

    The recursion is putting frames on the stack. The maximum number of frames at any one time is the maximum depth of the tree. For a balanced tree, this is around $$O(\log \, n)$$, and in the worst case (a long skinny tree) it is $$O(n)$$.

    Because we use worst case for complexity analysis, we say this algorithm uses $$O(n)$$ space. However, it's worth noting that as long as the tree is fairly balanced, the space usage will be a lot nearer to $$O(\log \, n)$$.

</br>

---

### Approach 3: Advanced Strategies for Dealing with 32-Bit Integers

**Intuition**

*This is an advanced bonus section that discusses ways of solving the problem using only 32-bit integers. It's not essential for an interview, although could be useful depending on your choice of programming language. Some of the ideas might also help with potential follow up questions. This section assumes prior experience with introductory modular arithmetic.*

We'll additionally assume that the 32-bit integer we're working with is *signed*, so has a **maximum** value of `2,147,483,647`.

What if your chosen programming language only supported 32-bit integers, and you had no access to a Big Integer library? Could we still solve this problem? What are the problems we'd need to address?

The solutions above relied on being able to multiply 2 numbers of up to 30 (signed) bits each without overflow. Because the number of bits in the product add, we would expect the product to require ~60 bits to represent. Using a 64-bit integer was therefore enough. Additionally, with a modulus of `1,000,000,007`, the *final* product, after taken to the modulus, will always fit within a *32-bit* integer.

However, we're now assuming that we only have 32-bit integers. When working with 32-bit integers, we must *always* keep the total below `2,147,483,647`, even during intermediate calculations. Therefore, we'll need a way of doing the math within this restriction. One way to do the multiplication safely is to write an algorithm using the same underlying idea as [modular exponentiation](https://en.wikipedia.org/wiki/Modular_exponentiation).

```java
private int modularMultiplication(int a, int b, int m) {
    int product = 0;
    int currentSum = a;
    while (b > 0) {
        int bit = b % 2;
        b >>= 1;
        if (bit == 1) {
            product += currentSum;
            product %= m;
        }
        currentSum <<= 1;
        currentSum %= m;
    }
    return product;
}   
```

There is one possible pitfall with this though. We are supposed to return the calculation for the *largest* product, determined **before** the modulus is taken.

For example, consider the following 2 products:

1. `34,000 * 30,000 = 1,020,000,000` becomes `1,020,000,000 % 1,000,000,007 = 19,999,993`.
2. `30,000 * 30,000 = 900,000,000` doesn't change because `900,000,000 % 1,000,000,007 = 900,000,000`.

So if we were to compare them *before* taking the modulus, product 1 would be larger, which is correct. But if we compared them after, then product 2 is larger, which is incorrect.

Therefore, we need a way to determine which product will be the biggest, without actually calculating them. Then once we know which is biggest, we can use our method for calculating a product modulo `1,000,000,007` without going over `2,147,483,647`.

The trick is to realise that `Sum(Subtree 1) + Sum(Subtree 2)` is constant, but `Sum(Subtree 1) * Sum(Subtree 2)` increases as `Sum(Subtree 1) - Sum(Subtree 2)` gets nearer to 0, i.e. as the sum of the subtrees is more balanced. A good way of visualising this is to imagine you have `X` meters of fence and need to make a *rectangular* enclosure for some sheep. You want to maximise the area. It turns out that the optimal solution is to make a square. The nearer to a square the enclosure is, the nearer to the optimal area it will be. For example, where `H + W = 11`, the best (integer) solution is `5 x 6 = 30`.

![Different ways of building a fence.](../Figures/1339/area_fences.png)

A simple way to do this in code is to loop over the list of all the sums and find the `(sum, total - sum)` pair that has the minimal difference. This approach ensures we do *not* need to use floating point numbers.

**Algorithm**

We'll use Approach #1 as a basis for the code, as it's simpler and easier to understand. The same ideas can be used in Approach #2 though.

<iframe src="https://leetcode.com/playground/fweASRE4/shared" frameBorder="0" width="100%" height="500" name="fweASRE4"></iframe>

**Complexity Analysis**

$$n$$ is the number of nodes in the tree.

- Time Complexity : $$O(n)$$.

    Same as above approaches.

- Space Complexity : $$O(n)$$.

    Same as above approaches.


The `modularMultiplication` function has a time complexity of $$O(\log \, b)$$ because the loop removes one bit from $$b$$ each iteration, until there are none left. This *doesn't* bring up the total time complexity to $$O(n \, \log \, b)$$ though, because $$b$$ has a fixed upper limit of 32, and is therefore treated as a constant.

</br>