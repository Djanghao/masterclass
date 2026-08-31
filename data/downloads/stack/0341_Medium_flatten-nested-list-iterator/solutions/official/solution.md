# Official Solution

**Link:** [https://leetcode.com/problems/flatten-nested-list-iterator/solution/](https://leetcode.com/problems/flatten-nested-list-iterator/solution/)

---

[TOC]

## Solution

---

### Overview

If you aren't at all familiar with Iterators, then we suggest having a go at [Peeking Iterator](https://leetcode.com/problems/peeking-iterator/). Additionally, the [Solution Article for Peeking Iterator](https://leetcode.com/problems/peeking-iterator/solution/) has a special introduction section that introduces you to what Iterators are.

If you're still having trouble, have a go at writing a function that simply flattens a nested list (i.e. not as an iterator). Then, think about how you could adapt it to be an iterator.

In this article, we cover 5 approaches. Approach 4 is primarily for Java programmers, and Approach 5 is for programmers of languages where generators are supported.

<br/>

---

### Approach 1: Make a Flat List with Recursion

**Intuition**

The simplest way of solving this problem is to flatten the entire input list, in the constructor. Then the actual iterator methods can simply work with this flattened list instead of needing to worry about the input structure.

This approach splits the coding into two parts:

1. A function that the constructor can call to make a flattened list. 
2. `next()` and `hasNext()` methods that iterate over a plain list, by keeping track of the current position within it.

The first part is best done with recursion (iteration is more complicated, and if you were going to use it, then you may as well look at approaches 2, 3, and 4 instead). This approach is the only recursive one that works in any programming language (as of the time of writing this article, things are changing!).

To flatten the list recursively, notice that we can look at the input as a tree. The integers are the leaf nodes, and the order they should be returned is from left to right.

!?!../Documents/341_flatten_tree_expansion.json:960,540!?!

Therefore, we can use a recursive depth-first search to flatten it.

```text
integers = []

define function flattenList(nestedList):
    for nestedInteger in nestedList:
        if nestedInteger.isInteger():
            append nestedInteger.getInteger() to integers
        else:
            recursively call flattenList on nestedInteger.getList()
```

Here is an animation showing the flattening algorithm.

!?!../Documents/341_flatten_tree.json:960,600!?!

**Algorithm**

<iframe src="https://leetcode.com/playground/iwWCG7pc/shared" frameBorder="0" width="100%" height="500" name="iwWCG7pc"></iframe>

**Complexity Analysis**

Let $$N$$ be the total number of *integers* within the nested list, $$L$$ be the total number of *lists* within the nested list, and $$D$$ be the maximum nesting depth (maximum number of lists inside each other).

- Time complexity:

    We'll analyze each of the methods separately.

    
    - **Constructor:** $$O(N + L)$$.

        The constructor is where all the time-consuming work is done.

        For each list within the nested list, there will be one call to `flattenList(...)`. The loop within `flattenList(...)` will then iterate $$n$$ times, where $$n$$ is the number of integers within that list. Across all calls to `flattenList(...)`, there will be a total of $$N$$ loop iterations. Therefore, the time complexity is the number of lists plus the number of integers, giving us $$O(N + L)$$.

        Notice that the maximum depth of the nesting does not impact the time complexity.
        

    - **next():** $$O(1)$$.
        
        Getting the next element requires incrementing `position` by 1 and accessing an element at a particular index of the `integers` list. Both of these are $$O(1)$$ operations.

    - **hasNext():** $$O(1)$$.

        Checking whether or not there is a next element requires comparing the length of the `integers` list to the `position` variable. This is an $$O(1)$$ operation.
        

- Space complexity : $$O(N + D)$$.

    The most obvious auxiliary space is the `integers` list. The length of this is $$O(N)$$.

    The less obvious auxiliary space is the space used by the `flattenList(...)` function. Recall that recursive functions need to keep track of where they're up to by putting stack frames on the runtime stack. Therefore, we need to determine what the maximum number of stack frames there could be at a time is. Each time we encounter a nested list, we call `flattenList(...)` and a stack frame is added. Each time we finish processing a nested list, `flattenList(...)` returns and a stack frame is removed. Therefore, the maximum number of stack frames on the runtime stack is the maximum nesting depth, $$D$$. 

    Because these two operations happen one-after-the-other, and either could be the largest, we add their time complexities together giving a final result of $$O(N + D)$$.

<br/>

---

### Approach 2: Stack

**Intuition**

The downside of Approach 1 is that it creates a new data structure instead of simply iterating over the given one. Instead, we should find a way to step through the integers, one at a time, keeping track of where we're currently up to in `nestedList`.

A better way is to do an iterative depth-first search, based on the following tree traversal algorithm:

```text
define function iterativeDepthFirstSearch(nestedList):
    result = []

    stack = a new Stack
    push all items in nestedList onto stack, in reverse order

    while stack is not empty:
        nestedInteger = pop top of stack
        if nestedInteger.isInteger():
            append nestedInteger.getInteger() to result
        else:
            list = nestedInteger.getList()
            push all items in list onto stack, in reverse order

    return result
```

While we could use this algorithm in the constructor like before, a better way would be to store `stack` on the iterator object and progress the algorithm on each call to `next()` to get the next integer out.

Notice that if the top of the stack is an integer, then we've already found the next integer. Otherwise, if it's a list, then the `else` is adding the list contents to `stack`. On the next loop iteration, the same will happen. We could write an algorithm to get the next integer as follows.

```text
stack = a new Stack
push all items in nestedList onto stack, in reverse order

define function getNextInteger():
    while stack is not empty:
        nestedInteger = pop top off stack
        if nestedInteger.isInteger():
            RETURN nestedInteger.getInteger()
        else:
            list = nestedInteger.getList()
            push all items in list onto stack, in reverse order

```

Notice that the `stack` is shared between calls. This means that `getNextInteger()` will find an integer and return it, while still preserving the state of the stack. We can then call `getNextInteger()` again to get the next integer, and so forth.

To simplify the code a bit, we can change our loop condition so that it checks if the top of the stack is still a list. The loop body should push the contents of the list onto the stack (in reverse). Eventually, there will be an integer on the top of the stack, OR the stack will be empty. Being able to get the next integer to the top of the stack allows the `next()` and `hasNext()` methods to access it.

```text
stack = a new Stack
push all items in nestedList onto stack, in reverse order

define function makeStackTopAnInteger():
    while stack is not empty AND the nestedInteger at top of stack is a list:
        nestedInteger = pop top off stack
        list = nestedInteger.getList()
        push all items in list onto stack, in reverse order
```


**Algorithm**

Let's define a private method called `makeStackTopAnInteger()` that contains the algorithm to make the stack top an integer (as described above). The `makeStackTopAnInteger()` method never *removes* integers. 

The `next()` and `hasNext()` methods should call `makeStackTopAnInteger()` before doing anything else. This means that they can then *assume* that either the stack top is an integer, *or* the stack is empty. Then, their definitions are as follows:

- **hasNext():** Returns `true` if the stack still contains items, `false` if not.
- **next():** If the stack still contains items, then it is guaranteed the top is an integer. This integer is popped and returned. If the stack is empty, then the behavior is language-dependent. For example, in Java, a `NoSuchElementException` should be throw.


<iframe src="https://leetcode.com/playground/h2Ygj5uu/shared" frameBorder="0" width="100%" height="500" name="h2Ygj5uu"></iframe>

**Complexity Analysis**

Let $$N$$ be the total number of *integers* within the nested list, $$L$$ be the total number of *lists* within the nested list, and $$D$$ be the maximum nesting depth (maximum number of lists inside each other).

- Time complexity.

    - **Constructor:** $$O(N + L)$$.

        The worst-case occurs when the initial input nestedList consists entirely of integers and empty lists (everything is in the top-level). In this case, every item is reversed and stored, giving a total time complexity of $$O(N + L)$$.

    - **makeStackTopAnInteger():** $$O(\dfrac{L}{N})$$ or $$O(1)$$.

        If the top of the stack is an integer, then this function does nothing; taking $$O(1)$$ time.

        Otherwise, it needs to process the stack until an integer is on top. The best way of analyzing the time complexity is to look at the total cost across all calls to `makeStackTopAnInteger()` and then divide by the number of calls made. Once the iterator is exhausted `makeStackTopAnInteger()` must have seen every integer at least once, costing $$O(N)$$ time. Additionally, it has seen every list (except the first) on the stack at least once also, so this costs $$O(L)$$ time. Adding these together, we get $$O(N + L)$$ time.

        The amortized time of a single `makeStackTopAnInteger` is the total cost, $$O(N + L)$$, divided by the number of times it's called. In order to get all integers, we need to have called it $$N$$ times. This gives us an amortized time complexity of $$\dfrac{O(N + L)}{N} = O(\dfrac{N}{N} + \dfrac{L}{N}) = O(\dfrac{L}{N})$$.

    - **next():** $$O(\dfrac{L}{N})$$ or $$O(1)$$.

        All of this method is $$O(1)$$, except for possibly the call to `makeStackTopAnInteger()`, giving us a time complexity the same as `makeStackTopAnInteger()`.

    - **hasNext():** $$O(\dfrac{L}{N})$$ or $$O(1)$$.

        All of this method is $$O(1)$$, except for possibly the call to `makeStackTopAnInteger()`, giving us a time complexity the same as `makeStackTopAnInteger()`.

- Space complexity : $$O(N + L)$$.

    In the worst case, where the top list contains $$N$$ integers, or $$L$$ empty lists, it will cost $$O(N + L)$$ space. Other expensive cases occur when the nesting is very deep. However, it's useful to remember that $$D ≤ L$$ (because each layer of nesting requires another list), and so we don't need to take this into account.

<br/>

---

### Approach 3: Two Stacks

**Intuition**

Reversing the lists to put them onto the stack can be an expensive operation, and it turns out it isn't necessary.

Instead of pushing every item of a sub-list onto the stack, we can instead associate an index pointer with each sub-list, that keeps track of how far along that sub-list we are. Adding a new sub-list to the stack now becomes an $$O(1)$$ operation instead of a $$O(length of sublist)$$ one. 

Here is an animation showing this approach.

!?!../Documents/341_flatten_tree_two_stacks.json:960,400!?!

The *total* time complexity across all method calls for using up the entire iterator remains the same, *but* work is only done when it's necessary, thus improving performance when we only use part of the iterator. This is a desirable property for an iterator.

**Algorithm**

This approach can be implemented as either one stack of pairs/ tuples, or two stacks with one for `NestedInteger`s and the other for indexes. The best decision for this is language-dependent. I tried both for the Java and found that attempting to put `Pair` objects onto a single stack doesn't work well because updating an index count requires popping and then reconstructing the entire `Pair` due to immutability (alternatives such as using length-2 `Lists`s as pairs are possible, but I don't think ideal). Using two stacks is cleaner.

<iframe src="https://leetcode.com/playground/Gc8wxYkY/shared" frameBorder="0" width="100%" height="500" name="Gc8wxYkY"></iframe>

**Complexity Analysis**

Let $$N$$ be the total number of *integers* within the nested list, $$L$$ be the total number of *lists* within the nested list, and $$D$$ be the maximum nesting depth (maximum number of lists inside each other).

- Time complexity:

    - **Constructor:** $$O(1)$$.

        Pushing a list onto a `stack` is *by reference* in all the programming languages we're using here. This means that instead of creating a new list, some information about how to get to the existing list is put onto the stack. The list is not traversed, as it doesn't need reversing this time, and we're not pushing the items on one-by-one. This is, therefore, an $$O(1)$$ operation.

    - **makeStackTopAnInteger() / next() / hasNext():** $$O(\dfrac{L}{N})$$ or $$O(1)$$.

        Same as Approach 2.

- Space complexity : $$O(D)$$.

    At any given time, the stack contains only *one* nestedList reference for each level. This is unlike the previous approach, wherein the worst case we need to put almost all elements onto the stack.

    Because there's one reference on the stack at each level, the worst case is when we're looking at the deepest leveled list, giving a space complexity is $$O(D)$$.

<br/>

---

### Approach 4: Stack of Iterators

**Intuition**

*This approach works best in Java but isn't well suited to other languages. Have a look at Approach 5 if you're looking for an elegant Python and JavaScript approach.*

If you're using Java, a very elegant approach is to maintain a stack of `ListIterators`. This approach is closely based on Approach 3. 

Instead of keeping a `Stack` of indexes to keep track of where we are in each `List`, we can simply make each `List` a `ListIterator`, thus keeping a `Stack` of `ListIterator`s. Then, we can use the `next()` and `hasNext()` methods on those `ListIterators`. Internally, the `ListIterator` is storing the index.

A downside to this approach is that for `hasNext()` to work correctly, it needs to know whether or not there are any *integers* remaining (empty lists don't count!). The only way it can do this is to remove items from the `ListIterator` and check whether or not they are an integer. It cannot, however, put the integers back again. Therefore, if it removes an integer it will need to put it into a `peeked` field so that the `next()` function can return that integer. This is the same as in the [Peeking Iterator](https://leetcode.com/problems/peeking-iterator/) problem.

A clean design is to have a `setPeeked()` method that is analogous to the `makeStackTopAnInteger()` method. This method should firstly check if `peeked` is empty, and if it is empty, then find the next integer to put in it. This integer is *removed* from the stack (as explained above).

Regardless of the need for `peeked`, this is probably the best design if you're coding in Java.

**Algorithm**

<iframe src="https://leetcode.com/playground/F3byVg8k/shared" frameBorder="0" width="100%" height="500" name="F3byVg8k"></iframe>

**Complexity Analysis**

Let $$N$$ be the total number of *integers* within the nested list, $$L$$ be the total number of *lists* within the nested list, and $$D$$ be the maximum nesting depth (maximum number of lists inside each other).

- Time complexity:

    - **Constructor:** $$O(1)$$.

        Same as Approach 3.

    - **makeStackTopAnInteger() / next() / hasNext():** $$O(\dfrac{L}{N})$$ or $$O(1)$$.

        Same as Approach 3.

- Space complexity : $$O(D)$$.

    Same as Approach 3.

In practice, this code runs faster than Approach 3, probably because most of the functionality relies on `ListIterator`; an optimized API class. Approach 3 was really just our own implementation of `ListIterator`s.

<br/>

---

### Approach 5: Using a Generator

**Intuition**

*This approach will only work in programming languages that support **generator functions**, for example, **Python**, **JavaScript** and **C#**. At the time of writing this article, **C++** doesn't support it, but it is expected to support them soon.* 

In a nutshell, generator functions are a special type of function that can "return" multiple values. When you call a **generator function**, you get back a special object called a **generator**. This **generator** can then be used to get each value from the function, one at a time.

To "return" multiple values from these **generator functions**, a special keyword, `yield`, is used. `yield` behaves similarly to a `return` statement, except that it does not terminate the function. Instead, it pauses the function, and "returns" the `yield`ed value. Then, when we need another value, the function resumes from where it left off. It continues until it gets to another `yield`, just like before. When the function gets to the end (no more code left to run), it stops. 

For example in Python, if we have a **generator** `gen`, we can tell it to resume the function and get the next value by calling `next(gen)`.

As an example, the **generators** created by this Python **generator function** can be used to get all numbers from `a` to `b`:

```python
# This is effectively how range works in Python. We're implementing our own
# version of it here to see how generators work.
# Many Python 3 library functions are generators.
def range_generator(a, b):
    current = a
    while current < b:
        # This yield "returns" a value from the function and pauses it
        yield current
        # Once the function is "woken up" by another call to next(...), it will resume
        # by continuing with the next statement (current += 1), until it either
        # hits another yield or reaches the end of the function
        current += 1
    # When we get here, the generator is finished.

# Create a new range_generator object for the numbers 10 to 20.
ten_to_twenty_generator = range_generator(10, 20)

# Get the first 3 values out of the range_generator object we made.
print(next(ten_to_twenty_generator)) # 10
print(next(ten_to_twenty_generator)) # 11
print(next(ten_to_twenty_generator)) # 12

# Here's another example of using the generator with a loop. As we said, it's
# the same as the range function.
# This is a new generator object, not the 10-20 one from above.
for number in range_generator(5, 9):
    print(number)
print("Done!")
# Will print
# 5
# 6
# 7
# 8
# Done
```


End-of-function behaviour for **generators** is language-dependent. For example, in Python, once the end of the function is reached, a `StopIteration` exception is raised. When you use your generator in a loop, e.g. `for number in range_generator(5, 9):`, it will simply stop when it gets this exception. The programmer doesn't need to explicitly handle it.

Now that we know what a **generator** is, we'll use one to implement a `NestedIterator`. 

Back in Approach 1, we started by flattening the entire list with the following recursive algorithm:

```python
integers = []
def flatten_list(nested_list):
    for nested_integer in nested_list:
        if nested_integer.isInteger():
            integers.append(nested_integer.getInteger())
        else:
            flatten_list(nested_integer.getList())
```

Something cool about **generator functions** is that they can be recursive.

So, instead of pushing each integer to a list, we could just `yield` them. This way, when we want the next integer, the function will resume from after the `yield` until it finds the next one. 

Let's replace the list append with `yield`.

```python
def flatten_list(nested_list):
    for nested_integer in nested_list:
        if nested_integer.isInteger():
            yield nested_integer.getInteger()
        else:
            flatten_list(nested_integer.getList())
```

This has a mistake though; because `flatten_list` is now a generator function, the recursive call to `flatten_list` only *creates a new generator*; it doesn't actually `yield` the values from the nested generator.

To fix this, we can loop over each item of the recursive generator and `yield` them instead.

```python
def flatten_list(nested_list):
    for nested_integer in nested_list:
        if nested_integer.isInteger():
            yield nested_integer.getInteger()
        else:
            for integer in flatten_list(nested_integer.getList()):
                yield integer
```

Some languages, such as Python, offer a shorthand for this looping, in Python called `yield from`. Here is its usage.

```python
def flatten_list(nested_list):
    for nested_integer in nested_list:
        if nested_integer.isInteger():
            yield nested_integer.getInteger()
        else:
            yield from flatten_list(nested_integer.getList())
```

Note that, not all languages that support `yield` also support `yield from`. For example, **C#** has `yield`, but no `yield from` equivalent. JavaScript supports it, but instead calls it `yield*`.

**Algorithm**

For this approach, we also need to add a `peeked` field, much like in the [Peeking Iterator](https://leetcode.com/problems/peeking-iterator/) problem. This is because the only way to know if there *is* a next value is to take it out of the generator, and generators can only go forwards, not backward.

<iframe src="https://leetcode.com/playground/722g7wkf/shared" frameBorder="0" width="100%" height="500" name="722g7wkf"></iframe>

**Complexity Analysis**

Let $$N$$ be the total number of *integers* within the nested list, $$L$$ be the total number of *lists* within the nested list, and $$D$$ be the maximum nesting depth (maximum number of lists inside each other).

- Time complexity:

    - **Constructor:** $$O(1)$$.

        In the constructor, we only create a generator object. Simply creating a generator object doesn't invoke any code in the generator function itself (only calls to next do).

        Because the time taken to create the generator doesn't vary with the size of the input, the time complexity is $$O(1)$$.

    - **next() / hasNext():** $$O(\dfrac{L}{N})$$ or $$O(1)$$.

        Same as approaches 2, 3, and 4.


- Space complexity : $$O(D)$$.

    We recursively call `_int_generator` within itself for nested lists. Therefore, the runtime stack uses memory proportional to the current depth of the list. Seeing as the largest depth is $$D$$, the space complexity is $$O(D)$$.

<br/>