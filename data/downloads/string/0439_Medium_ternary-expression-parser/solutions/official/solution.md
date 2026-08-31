# Official Solution

**Link:** [https://leetcode.com/problems/ternary-expression-parser/solution/](https://leetcode.com/problems/ternary-expression-parser/solution/)

---

[TOC]

## Solution

--- 

### Overview

In this problem, we are given a string `expression` representing (arbitrarily nested) ternary expressions. We are supposed to evaluate the expression and return the result.

<details> <summary> Before proceeding further, let's refresh our memory about ternary expressions. Click to expand. </summary> 

<p>

> A ternary expression contains three parts:  
> - `B`, a condition (which is a boolean expression)
> - `E1`, an expression to evaluate if the condition is true
> - `E2`, an expression to evaluate if the condition is false
>
> Now, the syntax of a ternary expression is `B ? E1 : E2`
>
> ![flow_chart](../Documents/439/439_Flow_Chart.svg)
>
> If `B` evaluates to true, then the result of the ternary expression is the result of evaluating `E1`. Otherwise, the result of the ternary expression is the result of evaluating `E2`.

Now, ternary expressions can be nested. It means that `E1` and `E2` can also be ternary expressions. However, on reading problem constraint

> `expression` consists of digits, '`T`', '`F`', '`?`', and '`:`'

We can derive the conclusion that the nested portion will not be enclosed within parenthesis.

So, let's define **atomic expression** as the "expression that is NOT nested". More precisely, if the given form is `B?E1:E2`, then in an atomic expression,  

- `B` will be either `T` (true) or `F` (false). We don't need to evaluate `B` to be true or false.   

- Then `E1` and `E2` will be among `T`, `F`, `0`, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9` only.

One must take care that the conditional expressions are right-to-left associative. This means that the expression `T?F:T?4:5` should be 

✔️ evaluated as `T?F:(T?4:5)`      
❌ and not as `(T?F:T)?4:5`.

The answer to ✔️ is `F` and the answer to ❌ is `5`.

Let's try to solve `T?F?1:2:F?4:1`.

!?!../Documents/439/439_Ternary_Example.json:1280,427!?!   

</p>
</details><br/>

$\downarrow_{\text{After Refresher}}$

<br/>

<details> <summary>  Now, we have refreshed our memory about ternary expressions, do solve  <code>F?1:F?2:T?F?3:4:5</code> on pen and paper. Click to reveal answer. </summary>

<br/>

<p> It will evaluate to <code>4</code> </p>
</details><br/>

**What steps you have followed to solve the problem?**     
If you have followed the illustration given under refresher, then you might have replaced the rightmost atomic expression with its value. Then you might have replaced the next atomic expression with its value. And so on.   
Thus, we can find the rightmost atomic expression of the form `B?E1:E2` and replace it with its value. We can repeat this process until we are left with a single value.


---

### Approach 1: Find Rightmost Atomic Expression

#### Intuition

As illustrated here, due to the right-to-left associativity of ternary expressions, we can find the rightmost atomic expression of the form `B?E1:E2` and replace it with its value. We can repeat this process until we are left with a single value.

!?!../Documents/439/439_Ternary_Example.json:1280,427!?!

The rightmost atomic expression can be found by having a `window` of length 5 and moving it from right to left. The `window` will be a valid atomic expression if it is of the form `B?E1:E2`. More precisely, the `window` will be a valid atomic expression if it satisfies the following conditions:

- `window[0]` is `T` or `F`  
- `window[1]` is `?`  
- `window[2]` is `T` or `F` or `0` or `1` or `2` or `3` or `4` or `5` or `6` or `7` or `8` or `9`
- `window[3]` is `:`
- `window[4]` is `T` or `F` or `0` or `1` or `2` or `3` or `4` or `5` or `6` or `7` or `8` or `9`

If the `window` is a valid atomic expression, then we can replace it with its value. We can repeat this process until we are left with a single value.

For implementation purposes, we can have two helper functions. 

- **isValidAtomic(s):** it takes a string `s` and returns `True` if `s` is a valid atomic expression. Otherwise, it returns `False`. The valid atomic expression should satisfy **all** of the above-mentioned five conditions. The logical AND function will be helpful here.

- **solveAtomic(s):** It takes a string `s` and returns the value of the atomic expression. The value of the atomic expression is `E1` if `B` is `T`. Otherwise, the value of the atomic expression is `E2`. We can use conditional if-else statements here. Also, `B` is `s[0]`, `E1` is `s[2]` and `E2` is `s[4]`.

#### Algorithm

1. Define a helper function `isValidAtomic(s)` which takes a string `s` and returns `True` if `s` is a valid atomic expression. Otherwise, it returns `False`. The function will be called only with 5-character long strings. It will return a boolean. 
    
    If **all** of these conditions are satisfied, then the function will return `True`. Otherwise, it will return `False`.

    - `s[0]` is `T` or `F`   
    - `s[1]` is `?`     
    - `s[2]` is `T` or `F` or `0` or `1` or `2` or `3` or `4` or `5` or `6` or `7` or `8` or `9`    
    - `s[3]` is `:`   
    - `s[4]` is `T` or `F` or `0` or `1` or `2` or `3` or `4` or `5` or `6` or `7` or `8` or `9`   

2. Define a helper function `solveAtomic(s)` which takes a string `s` and returns the value of the atomic expression. The value of the atomic expression is `E1` if `B` is `T`. Otherwise, the value of the atomic expression is `E2`. The function will be called only with 5-character long strings. It will return a character. 
    
    If `s[0]` is `T`, then the function will return `s[2]`. Otherwise, it will return `s[4]`.

3. Now, in the **given** `parseTernary(expression)` function, reduce expression. Do this until we are left with a single-character string. 

    - Initialize `j` to `expression.size() - 1`. This will be the rightmost index of the `window`.

    - While the rightmost window of length 5 is not valid atomic, decrement `j` by 1. The rightmost window of length 5 is `expression[j-4, j-3, j-2, j-1, j]`.

    - Now, we have found the rightmost valid atomic expression. Solve it and reduce it to a single character. 
    
    - Replace the rightmost valid atomic expression with a single character. The length of `expression` will be reduced by 4. 

4. Now, we are left with a single-character string. Return it.

#### Implementation

<iframe src="https://leetcode.com/playground/9YESaSdG/shared" frameBorder="0" width="100%" height="500" name="9YESaSdG"></iframe>

**Implementation Note:** We can implement the logic of helper functions directly in the code. However, it is a good practice to define helper functions. This makes the code more readable and maintainable. Also, it makes the code more modular.

#### Complexity Analysis

Let $N$ be the length of `expression`.

* Time complexity: $O(N^2)$.

    The helper function `isValidAtomic(s)` takes $O(1)$ time. The helper function `solveAtomic(s)` takes $O(1)$ time.

    We are reducing the length of `expression` by 4 in each iteration. Thus, the number of iterations will be $N/4$. In each iteration, 
    
    - we are finding the rightmost valid atomic expression. This takes $O(N)$ time. 
    
    - Then we are re-building the `expression`. This takes $O(N)$ time.

    - Thus, time complexity of each iteration is $O(2N) = O(N)$.
    
    Hence, there will be $O(N)$ iterations each taking $O(N)$ time. Thus, the total time complexity will be $O(N^2)$.
    
* Space complexity: $O(N)$.
    
    We are not using any extra space. Thus, the space complexity will be $O(1)$ in languages where string is mutable. However, we are modifying the input which may not be considered a good practice. If we created a copy of the input and performed operations on that, we would have $O(N)$ space. 
    
    Also, if the string is immutable in the language, then the space complexity will be $O(N)$, because for re-building the `expression`, we will be creating a new string of length $N$.


  
---

### Approach 2: Reverse Polish Notation

#### Intuition

We are doing a right-to-left traversal of the expression. In other words, we will encounter both the operands (i.e. `E1` and `E2`) before the operator (i.e. `T` or `F`). This is similar to the **postfix notation** or **reverse polish notation.**

<details> <summary> <b> Here is a quick refresher on different notations. Click to expand. </b> </summary>

<p>

> **Infix Notation:** Infix notation is the notation commonly used in arithmetics. In this notation, the operator is placed between the operands. For example, `1 + 2` is an infix notation.   

> **Prefix Notation:** In prefix notation, the operator is placed before the operands. For example, `+ 1 2` is a prefix notation. The prefix notation has the following other names:
> - Polish notation (PN)
> - Polish prefix notation
> - Łukasiewicz notation
> - Warsaw notation
> - Normal Polish notation (NPN)

> **Postfix Notation:** In postfix notation, the operator is placed after the operands. For example, `1 2 +` is a postfix notation. The postfix notation has the following other names:
> - Reverse Polish notation (RPN)
> - Polish postfix notation
> - Reverse Łukasiewicz notation

Please note that **Postfix notation** is **NOT** the **reverse of Prefix notation**. A simple example illustrates this.

- **Infix notation:** `3 - 2`
- **Prefix notation:** `- 3 2`
- **Postfix notation:** `3 2 -`

Thus, **Postfix** is `3 2 -` while the **reverse of Prefix** is `2 3 -`. The former will be evaluated as `1` while the latter will be evaluated as `-1`.

> Readers are encouraged to solve [Evaluate Reverse Polish Notation](https://leetcode.com/problems/evaluate-reverse-polish-notation/). The [Editorial](https://leetcode.com/problems/evaluate-reverse-polish-notation/editorial/) busts many myths.

</p>
</details>

$\downarrow_{\text{After Refresher}}$


Readers shouldn't get confused. Many might be prompted to think that `expression` is in prefix notation. However, it is not. The thumb rule is that 

> If you came to know about the operator before the operands, then it is prefix notation. Otherwise, it is a postfix notation. 

In our case, we will encounter both operands (i.e. `E1` and `E2`) before the operator (i.e. `T` or `F`). Thus, it is a postfix notation. This is because we are doing right-to-left traversal of the expression.

Now that we are clear about the notation, let's try to solve the problem. We will traverse the expression from right to left. As soon as we found `?`, we will see characters on the left of `?` as `B` and characters on the right of `?` as `E1:E2`. We will evaluate `B` and replace `B?E1:E2` with the value of the atomic expression. We will repeat this process until we are left with a single character.

This approach is more or less similar to the [previous approach](#approach-1-find-rightmost-atomic-expression). However, we are not finding the rightmost valid atomic expression. Instead, we are finding the rightmost `?` and evaluating the atomic expression.

#### Algorithm

1. Reduce the `expression`. Do the next steps until we are left with a single character.

    - Initialize `questionMarkIndex` to `expression.size() - 1`. This will be the index of `?`.

    - While `expression[questionMarkIndex]` is not `?`, decrement `questionMarkIndex` by 1.
    
    - Now, `expression[questionMarkIndex]` is `?`. Thus, `expression[questionMarkIndex+1:]` is `E1:E2` and `expression[questionMarkIndex - 1]` is `B`. 
        
        Therefore, our window of interest is `expression[questionMarkIndex - 1]` to `expression[questionMarkIndex + 3]`, both inclusive.

        The substring preceding the window of interest is till the index `questionMarkIndex - 2`.
        
        The substring succeeding the window of interest is from the index `questionMarkIndex + 4`.
    
    - Evaluate the window. If `expression[questionMarkIndex - 1]` is `T`, then replace the window with `E1`, which is nothing but `expression[questionMarkIndex + 1]`, otherwise replace the window with `E2`, which is nothing but `expression[questionMarkIndex + 3]`.

2. Now, we are left with a single-character string. Return it.

#### Implementation

<iframe src="https://leetcode.com/playground/2oD7DdVs/shared" frameBorder="0" width="100%" height="500" name="2oD7DdVs"></iframe>

#### Complexity Analysis

Let $N$ be the length of `expression`.

* Time complexity: $O(N^2)$.

    We are reducing the length of `expression` by 4 in each iteration. Thus, the number of iterations will be $N/4$. In each iteration, 
    
    - we are finding the index of `?`. This takes $O(N)$ time. 
    
    - Then we are re-building the `expression`. This takes $O(N)$ time.

    - Thus, time complexity of each iteration is $O(2N) = O(N)$.
    
    Hence, there will be $O(N)$ iterations each taking $O(N)$ time. Thus, the total time complexity will be $O(N^2)$.

    
* Space complexity: $O(N)$.

    We are not using any extra space. Thus, the space complexity will be $O(1)$ in languages where string is mutable. However, we are modifying the input which may not be considered a good practice. If we created a copy of the input and performed operations on that, we would have $O(N)$ space. 
    
    Also, if the string is immutable in the language, then the space complexity will be $O(N)$, because for re-building the `expression`, we will be creating a new string of length $N$.
    

---


### Approach 3: Reverse Polish Notation using Stack

#### Intuition

We are doing a right-to-left traversal of the expression. In other words, we will encounter both the operands (i.e. `E1` and `E2`) before the operator (i.e. `T` or `F`). This is similar to the **postfix notation** or **reverse polish notation.**

We have solved the problem using the reverse polish notation in the [previous approach](#approach-2-reverse-polish-notation). The biggest bottleneck of that approach is that we are re-building the `expression` in each iteration. This is not efficient. Also, we have to find the index of `?` as soon as we rebuild the `expression`. This is also not efficient.

Now, this [reverse polish notation can be evaluated using a stack](https://leetcode.com/problems/evaluate-reverse-polish-notation/editorial/)

After we encounter `?`, we just need the next two characters to evaluate the expression. Thus, we can push the digits, `T` and `F` on the stack. As soon as we encounter `?`, we can pop the top two elements of the stack and evaluate the expression. Then we can push the result on the stack. We can repeat this process until we are left with a single element on the stack.

Hence, in brief push every `T`, `F`, and digit on the stack. As soon as we encounter `?`, replace the top two elements of the stack with one. When we encounter a `?`, the character before it will be `T` or `F`. We don't need to push that onto the stack as it will be used to evaluate the expression.


#### Algorithm

1. Initialize a stack `stack`. Also, initialize `i` to `expression.size() - 1`. This will be the index of the character we are currently processing.

2. Until we process all the characters, do the next steps.

    - If `expression[i]` is `T`, `F`, or a digit, then push it on the stack.

    - If `expression[i]` is `?`, then pop the top two elements of the stack. Let's call them `onTrue` and `onFalse`. If `expression[i - 1]` is `T`, then push `onTrue` on the stack. Otherwise, push `onFalse` on the stack. Decrement `i` by 1 as we have already used `expression[i - 1]`.

    - Decrement `i` by 1 as we have already processed `expression[i]`.

3. Now, if the string is valid, then the stack will have only one element. Return it.


#### Implementation

<iframe src="https://leetcode.com/playground/juGv2kjy/shared" frameBorder="0" width="100%" height="500" name="juGv2kjy"></iframe>

Another way of implementing the same is to push even `?` and `:` on the stack. If at any stage we found that `?` is on top of the stack, then this means the current character is boolean `B`. Then, we can replace the next four characters (`? E1: E2`) with `E1` or `E2` depending on the value of `B`. We can repeat this process until we are left with a single character. Here is this approach implemented.

<iframe src="https://leetcode.com/playground/Ksk6twkk/shared" frameBorder="0" width="100%" height="500" name="Ksk6twkk"></iframe>

#### Complexity Analysis

Let $N$ be the length of `expression`.

* Time complexity: $O(N)$.

    We are processing each character only once. Thus, the time complexity will be $O(N)$. In every iteration, we are pushing and popping from the stack. This takes $O(1)$ time. Thus, the total time complexity will be $O(N)$.


* Space complexity: $O(N)$.

    We are using a stack of size $O(N)$. Thus, the space complexity will be $O(N)$.

---




### Approach 4: Binary Tree

#### Intuition

Ternary Expression is itself binary in nature. Isn't it? 

Let's try to understand this. The general form is `B?E1:E2`. Here, `B` is a boolean, and `E1` and `E2` are expressions.

- If `B` is `T`, go to `E1`. This `E1` can be another ternary expression. Thus, `E1` represents the left subtree of `B`.

- If `B` is `F`, go to `E2`. This `E2` can be another ternary expression. Thus, `E2` represents the right subtree of `B`.

Let's practice a few examples. Click on the example to verify the solution.

<details> <summary> <b> Example 1: <code> x?y:z </code> </b> </summary>

<p>

<pre>
   x     
 /   \     
y     z     
</pre>

</p>
</details>
<br/>

<details> <summary> <b> Example 2: <code> x?y:z?u:v </code> </b> </summary>

<p>

<pre>
   x
 /   \
y     z
     /   \
    u     v
</pre>

</p>

</details>
<br/>

<details> <summary> <b> Example 3: <code> x?y?z:u:v </code> </b> </summary>

<p>

<pre>
       x
     /   \
    y     v   
  /   \
z       u
</pre>

</p>

</details>
<br/>

<details> <summary> <b> Example 4: <code> a?b:c?d?e:f:g?h:i?j:k  </code> </b> </summary>

<p>

<pre>
              a
             / \
            b   c
               /  \
              d    g
             / \  / \
            e   f h  i
                    / \
                   j   k
</pre>

</p>

</details>
<br/>

Thus, we can represent the ternary expression as a binary tree. But we are given the expression in string format. **How can we convert a string to a binary tree?**

> For constructing a unique binary tree from traversal, we necessarily need to know its inorder traversal along with either [preorder](https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/) or [postorder](https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/) traversal.
>
> Note that we can't construct a unique binary tree from only preorder or postorder traversal, inorder traversal is necessary.
>
> Suppose we are given preorder as `XY` and postorder as `YX`. It is clear that `X` is the root, but we can't find out whether `Y` is the left child or right child of `X`.

**Now, what kind of traversal do we have, if we traverse from left to right?**   
We are given `B`, let it be the root.  $\rightsquigarrow$ Then `E1`, let it be the left child. $\rightsquigarrow$ Then `E2`, let it be the right child.           
$\rightarrow$ Root, then left Child, then right Child. This is **preorder traversal**.

**Can we construct a unique binary tree from Preorder Traversal?**    
No, we can't, in general. But this question is special. The string `expression` itself gives us information about the structure of the tree. `?` tells us that we have to go to the left subtree. `:` tells us that we have to go to the right subtree. Hence, from the given `expression`, we can construct a unique binary tree.

> Declare the first character of `expression` as the root. Then, recursively construct the left subtree and right subtree.
> 
> - On encountering `?`, add the next character as the left child of the current node. Then, recursively construct the left subtree of the current node.
>
> - On encountering `:`, add the next character as the right child of the current node. Then, recursively construct the right subtree of the current node.   
>   
> **While the task is easier, the subsequent section will not provide many details as this was not the main focus of the problem. That's why readers are encouraged to solve [Construct Binary Tree from Preorder and Inorder Traversal](https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/).**

Then what? Our task was to parse the ternary expression. We have constructed the binary tree. It turns out parsing is indeed simple. We just have to look at the root, and depending on if it is `T` or `F`, we have to traverse to the left or right subtree. We will repeat this process until we are at a leaf node. This leaf node will be our answer.

One thing that we can appreciate is that there is no hard-and-fast rule to solve the problem. In all the previous three approaches, we were doing right-to-left traversal. In this approach, we are doing left-to-right traversal. From the beginning, our focus was that we will traverse right-to-left given the associativity rule. But things may work the other way around as well. Hence, readers are encouraged to have an open mind while encountering problems.

#### Algorithm

1. Construct a binary tree from `expression`. Save the root node in `root`.

2. Parse the binary tree till we reach the leaf node. If the current node is `T`, then go to the left subtree. Otherwise, go to the right subtree.

3. Return the value of the leaf node as the parsed answer.


#### Implementation

<iframe src="https://leetcode.com/playground/7q85LBLp/shared" frameBorder="0" width="100%" height="500" name="7q85LBLp"></iframe>

#### Complexity Analysis

Let $N$ be the length of `expression`, and $H$ be the height of the binary tree constructed from `expression`.

* Time complexity: $O(N)$.

    Constructing the binary tree takes $O(N)$ time. Parsing the binary tree takes $O(H)$ time. Since $H \leq N$, the total time complexity will be $O(N)$.


* Space complexity: $O(N)$.

    For constructing the binary tree, we are saving $N$ nodes. Thus, the space complexity will be $O(N)$.

    
---

### Approach 5: Recursion

#### Intuition

Did we over-engineer the problem in the [previous approach](#approach-4-binary-tree)? Was it necessary to construct the binary tree? Can't we just solve the problem using recursion?

Turns out we can. We will use recursion to solve the problem. This will also indirectly construct the binary tree. However, we will not be saving the nodes. We will just be using the recursion stack.

> Before moving further, be assured that "Converting Ternary Expression to Binary Tree" didn't go in vain. It is also a separate problem often asked in interviews.

We will do left-to-right traversal. The general form is `B?E1:E2`. If `B` is `T`, then we will recursively solve the expression `E1`. Otherwise, we will recursively solve the expression `E2`.

We just need to identify valid indices between which `E1`, or `E2` is present. We can do this by using the fact that the given `expression` is valid. Thus, for every `?`, there will be a corresponding `:`. Hence, using this fact, we can reach the desired `:` of this `?`. This will be the end index of `E1`. 

- The start index of `E1` will be the index next to `?`.

- The start index of `E2` will be the index next to `:`.
  
- The end index of `E2` will be the end index of `expression` using which this problem (or subproblem) was called.

We will repeat this process until we are left with a single character.

#### Algorithm

1. Define a recursive function `solve(expression, i, j)` which will return the parsed answer between indices `i` and `j` (both inclusive). In the function, 

    - if `i == j`, return `expression[i]`, since there is only one character.

    - Find the index of `?`. Let's call it `questionMarkIndex`.

    - Find one index after corresponding `:`. Let's call it `aheadColonIndex`. This can be done by maintaining a count. Start from `questionMarkIndex + 1`. If we encounter `?`, increment the count. If we encounter `:`, decrement the count. If the count becomes `0`, then we have found the corresponding `:`.

    - If the first character of `expression` is `T`, then recursively solve the expression between `?` and `:`. Otherwise, recursively solve the expression after `:`. Pass indices accordingly.

2. Call the recursive function `solve(expression, 0, expression.size() - 1)`.


#### Implementation

<iframe src="https://leetcode.com/playground/dL8nVUnB/shared" frameBorder="0" width="100%" height="500" name="dL8nVUnB"></iframe>

#### Complexity Analysis

Let $N$ be the length of `expression`. 

* Time complexity: $O(N^2)$.
    
    In worst case, when expression is of the form   
    `T ? T ? .......... : D : D`  
    where `D` is a single character, we will have to traverse almost the entire expression to find the corresponding `:`. This may have to do $\frac{N}{2}$ times.
    
    Thus, the time complexity will be $O(N^2)$.
    
* Space complexity: $O(N)$.

    We are using a recursion stack. The maximum depth of the recursion stack will be $O(N)$. Thus, the space complexity will be $O(N)$.
    

**Note :** We can reduce the time complexity of this approach to $O(N)$ by modifying implementation a bit. The major bottleneck here was finding the corresponding `:`. Readers can ponder and come up with their interesting $O(N)$ recursive implementation in the comments section.

---

### Approach 6: Constant Space Solution

#### Intuition

Let's try to solve it using constant space. This approach is the same as the recursive solution. However, we will use iterative traversal to avoid a recursion stack.

Here we will do left-to-right traversal. The reason will be clear soon if not clear already.

The ternary expression is of the form `B?E1:E2`. 

- If `B` is `T`, then we can simply ignore `E2`. Or, we can say that we have to FOCUS only on the portion between `?` and corresponding `:`. We have used "corresponding" because there can be nested ternary expressions.

- If `B` is `F`, then we can simply ignore `E1`. Or, we can say that we have to FOCUS only on the portion after corresponding `:` of `?` succeeding `B`.

For this we will maintain a loop invariant where **we will always be at the first character of the subexpression which we should FOCUS on.**

- Now, if this first character is not a boolean, then it means no more nesting is there. Thus, we can simply return this character.

- Is there any other base case? Assume this first character is a boolean, but ahead of it, we have a `:` *(and not `?`. Since `expression` is valid, a boolean can be followed by these two characters only)*. Now, we have maintained the invariant that we will only FOCUS on the relevant portion. The `:` signifies that we were reading the portion after `?` and before this `:`. If we were reading this part, it means we don't have to read after this `:`. Thus, we can simply ignore this `:` and the portion after it. We can simply return the character here!

- If we have reached the last character of `expression`, then we can simply return this character. This condition might have arisen because, at every nested expression, the boolean was `F`. Thus, focusing on the portion after `:`, we were pushed towards the end of `expression`.

Thus, by maintaining the invariant, and analyzing the cases, we can come up with the solution. The solution has many corner cases. Thus, it may not be easy to come up with this solution. 

And why left-to-right traversal? Because the leftmost boolean will help us in jumping to the FOCUS part and ignoring the other part.

Readers are encouraged to implement this solution.

#### Algorithm

1. Initialize a pointer `i` to `0`. This will be the index of the character we are currently processing. It will maintain the loop invariant where **we will always be at the first character of subexpression which we should FOCUS on.**

2. Until we process all the characters, do the next steps

    - If `expression[i]` is not a boolean, then return it.

    - If `expression[i]` is the last character of the `expression`, then return it.

    - If `expression[i]` is a boolean, then

        - If `expression[i + 1]` is `:`, then return `expression[i]`. It means we have to ignore the portion after `:`, as we were processing the portion before `:`.

        - If `expression[i + 1]` is `?`, then

            - If `expression[i]` is `T`, then increment `i` by 2 to process the portion between `?` and `:`. After the `:` portion will be ignored by the above condition.

            - If `expression[i]` is `F`, then make `i` point to the character after `:` of this `?`. To have corresponding `:`, we can maintain count. 

3. If programming language supports function without return statement, then returning in loop suffices. Otherwise, save the answer character in a variable and return it.


#### Implementation

<iframe src="https://leetcode.com/playground/UX9aEdLB/shared" frameBorder="0" width="100%" height="500" name="UX9aEdLB"></iframe>

**Implementation Note:** The code has more comments than required. This is done to explain the algorithm. The code can be made succinct as done here.

Also, the `for` loop in Python doesn't support updating of pointer `i` in the loop. Thus, we have used a `while` loop. However, if the language supports updating of pointer in the loop, then we can use `for` loop as well.

If programming language supports function without return statement, then returning in the loop suffices. Otherwise, save the answer character in a variable and return it

<iframe src="https://leetcode.com/playground/Vsxet2DE/shared" frameBorder="0" width="100%" height="500" name="Vsxet2DE"></iframe>

#### Complexity Analysis

Let $N$ be the length of `expression`.

* Time complexity: $O(N)$.

    We are processing each character only once. Thus, the time complexity will be $O(N)$. In every iteration, we are incrementing `i` at least by 2. Thus, the total time complexity will be $O(N)$.

* Space complexity: $O(1)$.

    We are not using any extra space. Thus, the space complexity will be $O(1)$.
 
---

### Follow up

The biggest advantage we were given was that the `expression` is valid. However, if the `expression` was invalid, then we may have to handle many corner cases.   
Also, we were given that `E1` and `E2`, if they aren't nested, then they are a single character. However, if they were not a single character, then the problem may have become more complex.

Users are advised to brainstorm in the comment section the possible corner cases and how to handle them if the above assumptions were not given.

It's good practice to think about the follow-up questions. It helps in understanding the problem better. 

Moreover, whenever in an interview, it's always better to clarify the assumptions. 


---