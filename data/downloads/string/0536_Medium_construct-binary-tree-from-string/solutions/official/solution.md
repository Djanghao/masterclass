# Official Solution

**Link:** [https://leetcode.com/problems/construct-binary-tree-from-string/solution/](https://leetcode.com/problems/construct-binary-tree-from-string/solution/)

---

[TOC]

## Solution

---

### Overview

This is a really useful problem to work on since this is a part of the general umbrella of problems which are like *Serialize and Deserialize some data structure*. This is important if we want to save a tree (a custom object with some special properties and fields) to a file, a database, or as a string someplace essentially. In this problem we are given a string representation of a tree i.e. we are given the serialized version of the tree and we have to deserialize it and return the `TreeNode` object representing the root of the tree (since the rest of the tree is trackable via the root). 

A tree (or a graph) has a recursive structure to it i.e. *a subtree is a tree in itself*. Similarly, we expect the string representation of a tree to also have some kind of a recursive structure and that is what will be used to reconstruct our tree. Let's first take a look at this recursive structure in the string.


![](../Figures/536/img1.png)


*Figure 1. The tree and the corresponding string.*


Let's look at the subtrees along with their counterparts in the string. Note that we assume the entire string is also enclosed between a pair of brackets thus representing the entire tree. 

![](../Figures/536/img2.png)


*Figure 2. String split according to the subtrees.*


So we can see the recursive build-up of the string and we are going to leverage that property to come up with a solution. Since this problem involves a recursive property, we will look at a solution based on recursion, and then, we will convert that solution to one using a stack as opposed to the memory stack used in the recursive approach.

</br>

---

### Approach 1: Recursion

**Intuition**

The idea here is very simple. An opening bracket represents the start of a new tree (subtree really). Thus, whenever we encounter a new opening bracket, we make a new recursion call. A recursion call to our function will essentially return the root of a properly built tree with all the required `TreeNode` objects and proper connections set up between them. Thus, making a new recursive call upon encountering an opening bracket is essentially calling our function to build the subtree and return the root node.

We know when to make a new recursive call, but, when do we stop really? We stop when we encounter a closing bracket. That's because a closing bracket will be the end of *the most recent* subtree that we're building in our recursion. We assume that a particular closing bracket matches with the *nearest* opening bracket we would have encountered previously when we made the recursive call. Let's put all this information into an algorithm with steps.

**Algorithm**

1. Let's define a couple of internal functions that we will be using along the way. The first one is called `getNumber` and it returns the integer number/value that the current `TreeNode` is supposed to have. It takes the string and the current index as inputs. We iterate until we no longer encounter a digit or we reach the end of the string. We stick all the digits together and get a number. Also, we take care of the sign `-` in case one exists in the beginning which would indicate a negative value for the node.
2. The next function we define is our recursive function called `str2treeInternal` which does all the heavy lifting for us. It also takes the string and the index of the current character as inputs and returns a pair of the `TreeNode` representation of the current subtree and also the index of the next character to be processed in the string. This index manipulation is important because we don't want to parse the string twice to figure out the boundaries for the children subtrees.
3. Whenever the function `str2treeInternal` is called, we expect that the current subtree will all its children and descendants will be constructed and returned. There are 4 steps we take inside this function of ours. 
   1. Firstly we check for the termination condition i.e. if there are no more characters left in the string to process. 
   
       ![](../Figures/536/img3.png)

       *Figure 3. Sample subtrees which we will consider for the algorithm.*

   2. Next, we get the value for the root node of this tree. This is an invariant here. We will never find any brackets before we get the value for the root node.
   
       ![](../Figures/536/img4.png)
   
   3. Once we have the value, we form the root node.
   4. Then, we check for an opening bracket (make sure to check for the end of string conditions always). If there is one, we make a recursive call and use the node returned as the left child of the current node.
   
       ![](../Figures/536/img5.png)
   
   5. Finally, we check if there's another opening bracket. If there is one, then it represents our right child and we again make a recursive call to construct that and make the right connection.
   
       ![](../Figures/536/img6.png)
   
4. We return the construct root node and also the correct index. For the index, we check if it points to a closing bracket, we move one step forward. Else, we stay at the current spot and let the caller function decide how to proceed/process.

**Implementation**

<iframe src="https://leetcode.com/playground/nf6kojSw/shared" frameBorder="0" width="100%" height="500" name="nf6kojSw"></iframe>

**Complexity Analysis**

* Time Complexity: $$O(N)$$ where $$N$$ represents the number of characters in the string representation. This is because each character is processed exactly once and we need to process the entire string to form our tree.

* Space Complexity: $$O(H)$$ where $$H$$ represents the height of the tree. We don't have any information about if the tree is balanced or not and so, in the worst case when the tree would be skewed left (can't be right according to the problem), we will have a recursion stack consisting of $$N$$ calls and hence, the overall space complexity can be $$O(N)$$;

<br/>

---

### Approach 2: Stack

**Intuition**

The main problem with a recursive solution is the stack limitation. We might run into stack-overflow problems if the tree is too tall and the system's stack is low on resources. Hence, we prefer to use our own stack and that is the variation which we will explore in this solution. The overall idea remains the same as the previous approach and for that matter, even the complexities remain the same. The only thing that changes is a recursive vs iterative approach.

The algorithm presented here is completely based on the recursive solution before. The only thing we need to take care of are the different states a particular *function call/node* can be in during recursion. Notably, there are 3 different states that we need to account for. We won't be using these three states in the code directly but it is important to understand these three possibilities to understand the overall algorithm.

1. *NOT_STARTED* ~ This is the initial state that a node is in. Before we even process the left or the right children. In this state, we simply form the value of the root node and then check for the presence of the left child. If the left child exists, we make a recursive call and the returned value is used as the left child.
2. *LEFT_DONE* ~ In this state, we are processing our root node given the fact that we're done processing its left subtree. So, the `index` would be used to check for the presence of a right child and if one exists, we make another recursive call to process the same.
3. *RIGHT_DONE* ~ This is the final state of any node where we are done processing the left and the right children and don't need to do anything more.

**Algorithm**

1. Let's define a function called `getNumber` which returns the integer number/value that the current `TreeNode` is supposed to have. It takes the string and the current index as inputs. We iterate until we no longer encounter a digit or we reach the end of the string. We stick all the digits together and get a number. Also, we take care of the sign `-` in case one exists in the beginning which would indicate a negative value for the node.
2. We use a `stack` for our implementation and it would contain a pair of the node itself and the state it is in. The state can be one of the three described before.
3. Initially, we push the `root node` (a new `TreeNode` essentially) into the stack. *Note:* that the state of this node is `NOT_STARTED`.
4. We iterate over the characters in our string one by one and we do the following at each step:
   1. Pop the node. This will be the root node that we currently process i.e. not the global root node of the tree but rather the root of the current subtree.
   2. If the current character pointed to by the `index` is a digit or the `-` character, 
      1. that means we have a node that we haven't started processing yet i.e. the `NOT_STARTED` state. So the first thing we do is to call the `getNumber` function to get the value for the node and set `node.val` to this value. *Note:* the `getNumber` function progresses the `index`.
      2. Then, we check for the presence of a left child. We simply check if there are more characters left in the string and the one we have to process now is an opening bracket. If it is, then we do two things:
         * We add the current node back to the queue. At this point, the state of this node would be `LEFT_DONE`. Again, we don't need the state information anywhere in the code except for reasoning about the algorithm itself.
         * Then, we assign `node.left` to a new `TreeNode` and also add it to the queue.

             ![](../Figures/536/img7.png)
             
             *Figure 4. Process the root node from the string.*

             ![](../Figures/536/img8.png)
             
             *Figure 5. Here we process the left child.*

             ![](../Figures/536/img9.png)
             
             *Figure 6. Complete the processing or the left child.*

   3. If the current character is the left bracket i.e. `(`,
      1. we check for the presence of a right child because we know that the value of the node is already set in the previous step and also, the left child is properly processed at this point.
      2. We check if the current character, if there is one left, is an opening bracket. If it is one then we do the following:
         * We add the current node back to the queue assuming its state to be `LEFT_DONE`.
         * Then, we assign `node.right` to a new `TreeNode` and also add it to the queue.

             ![](../Figures/536/img10.png)
             
             *Figure 7. Start processing the right child.*

   4. We don't do anything if the current character is a closing bracket except for popping the nodes which we already did in step `4.1` here.

       ![](../Figures/536/img11.png)
       
       *Figure 8. Pop the right child and return the root.*

**Implementation**

<iframe src="https://leetcode.com/playground/7bd3ohyf/shared" frameBorder="0" width="100%" height="500" name="7bd3ohyf"></iframe>

**Complexity Analysis**

The complexity is the same as the previous solution with the only exception that we are now using our own stack instead of relying on the system's stack.

* Time Complexity: $$O(N)$$ where $$N$$ represents the number of characters in the string representation. This is because each character is processed exactly once and we need to process the entire string so as to form our tree.

* Space Complexity: $$O(H)$$ where $$H$$ represents the height of the tree. We don't have any information about if the tree is balanced or not and so, in the worst case when the tree would be skewed left (can't be right according to the problem), we will have a recursion stack consisting of $$N$$ calls and hence, the overall space complexity can be $$O(N)$$;

<br/>