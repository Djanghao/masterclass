# Official Solution

**Link:** [https://leetcode.com/problems/simplify-path/solution/](https://leetcode.com/problems/simplify-path/solution/)

---

[TOC]

## Video Solution
---

<div>
    <div class="video-container">
        <iframe src="https://player.vimeo.com/video/810685782" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
    </div>
</div>

<div>&nbsp;
</div>

## Solution Article

---

### Approach: Using Stacks

**Intuition**

This is a direct implementation of one of the most common commands used (in one form of the other) on all the famous operating systems. For e.g. this directly translates to a part of the implementation of the `cd` command functionality in the Unix OS. It basically helps us to change directory. Obviously, there's much more to it than simply figuring out the smallest path of the final directory where the user wants to go. There is kernel level implementation involved that actually uses the underlying file system to `change` the directory you are in to the one where you want to go. You might argue that nobody would go crazy on the command line and want to run something like:

<pre>
cd /a/b/c/.././././//d</pre>

However, our code needs to be able to handle the different scenarios and all the special characters like `.`, `..`, and `/`. All these weird scenarios will be taken care of by a couple of checks here and there. The main idea for solving this problem would remain the same. The heading of this approach mentions the data structure that we are going to use. However, we are going to work our way through the problem so as to understand as to why a `stack` fits in here. Let's look at a tree-ish representation of a simple directory path.

<center>
<img src="../Figures/71/img_fixed.png"/>
</center>

Now suppose that to a path like `/a/b/c`, we add another component like `/a/b/c/..`. Now, this is interesting because the `..` is no longer a sub-directory name. It has a special meaning and an indication to the operating system to move up one level in the directory structure thus transforming the overall path to just `/a/b`. It's as if we `popped out` the subdirectory `c` from the overall path. That's the core idea of this problem. If you think about it, the only actionable special character is `..`. The single dot is kind of a no-op because it simply means the current directory. So nothing changes in the overall path as such. Now that we have a general idea about how this problem can be potentially solved using the stack, let's get right into the algorithm and discuss the solution.

**Algorithm**

1. Initialize a stack, `S` that we will be using for our implementation.
2. Split the input string using `/` as the delimiter. This step is really important because no matter what, the given input is a `valid` path and we simply have to shorten it. So, that means that whatever we have between two `/` characters is either a directory name or a special character and we have to process them accordingly.
3. Once we are done splitting the input path, we will process one component at a time.
4. If the current component is a `.` or an empty string, we will do nothing and simply continue. Well if you think about it, the split string array for the string `/a//b` would be `[a,,b]`. yes, that's an empty string in between `a` and `b`. Again, from the perspective of the overall path, it doesn't mean anything.
5. If we encounter a double-dot `..`, we have to do some processing. This simply means go one level up in the current directory path. So, we will pop an entry from our stack if it's not empty.
6. Finally, if the component we are processing right now is not one of the special characters, then we will simply add it to our stack because it's a legitimate directory name.
7. Once we are done processing all the components, we simply have to connect all the directory names in our stack together using `/` as the delimiter and we will have our shortest path that leads us to the same directory as the one provided as an input.

<iframe src="https://leetcode.com/playground/kg2oD8UE/shared" frameBorder="0" width="100%" height="500" name="kg2oD8UE"></iframe>

**Complexity Analysis**

* Time Complexity: $$O(N)$$ if there are $$N$$ characters in the original path. First, we spend $$O(N)$$ trying to split the input path into components and then we process each component one by one which is again an $$O(N)$$ operation. We can get rid of the splitting part and just string together the characters and form directory names etc. However, that would be too complicated and not worth depicting in the implementation. The main idea of this algorithm is to use a stack. How you decide to process the input string is a personal choice.
* Space Complexity: $$O(N)$$. Actually, it's $$2N$$ because we have the array that contains the split components and then we have the stack.