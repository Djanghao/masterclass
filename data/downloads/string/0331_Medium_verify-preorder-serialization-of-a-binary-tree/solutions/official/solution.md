# Official Solution

**Link:** [https://leetcode.com/problems/verify-preorder-serialization-of-a-binary-tree/solution/](https://leetcode.com/problems/verify-preorder-serialization-of-a-binary-tree/solution/)

---

[TOC]

## Solution

--- 

### Approach 1: Iteration

**Intuition**

Let's start with the simplest but not optimal solution to discuss the idea.

The binary tree could be considered as a number of slots to fulfill. At the start, there is just one slot available for a number 
or null node. Both the number and null node take one slot to be placed. For the null node, the story ends up here, whereas the number will add into the tree two slots for the child nodes. Each child node could be, again, a number or a null.  
 
> The idea is straightforward: take the nodes one by one from preorder traversal, and compute the number of available slots. If at the end all available slots are used up, the preorder traversal represents the valid serialization. 

- In the beginning, there is one available slot.   

- Each number or null consumes one slot.

- Null node adds no slots, whereas each number adds two slots for the child nodes.

![fig](../Figures/331/rules.png)

**Algorithm**

- Initiate the number of available slots: `slots = 1`.

- Split preorder traversal by comma, and iterate over the resulting array. At each step :

    - Both a number and a null node take one slot: `slots = slot - 1`.
    
    - If the number of available slots is negative, the preorder traversal is invalid, return False.
    
    - Non-empty node `node != '#'` creates two more available slots: `slots = slots + 2`.
    
- Preorder traversal is valid if all available slots are used up: return `slots == 0`.

**Implementation**

<iframe src="https://leetcode.com/playground/WcK8o9bq/shared" frameBorder="0" width="100%" height="395" name="WcK8o9bq"></iframe>

**Complexity Analysis**

* Time complexity : $$\mathcal{O}(N)$$ to iterate over the string of length N. 

* Space complexity : $$\mathcal{O}(N)$$ to keep split array in memory. 
<br /> 
<br />


---
### Approach 2: One pass

**Intuition**

Approach 1 uses $$\mathcal{O}(N)$$ space to keep a split array in memory, and for sure that should be optimized. The idea is to iterate over the string itself and not over the array of nodes.

During the iteration, one has to update the number of available slots at each comma character. First, one should decrease the number of slots by one, because both empty and non-empty nodes take one slot. Second, if the node is a non-empty one, i.e. the character just before the comma is not equal to `#`, one should add two more slots for the child nodes. 

The last node should be considered separately since there is no comma after it.

!?!../Documents/331_LIS.json:1000,520!?!

**Algorithm**

- Initiate the number of available slots: `slots = 1`.

- Iterate over the string. At each comma :

    - Both a number and a null node take one slot: `slots = slot - 1`.
    
    - If the number of available slots is negative, the preorder traversal is invalid, return False.
    
    - Non-empty node, detected by non-`#` character before comma, creates two more available slots: `slots = slots + 2`.
    
- The last node should be considered separately since there is no comma after it. 
    
- Preorder traversal is valid if all available slots are used up: return `slots == 0`.

**Implementation**

<iframe src="https://leetcode.com/playground/4d2iZEqz/shared" frameBorder="0" width="100%" height="480" name="4d2iZEqz"></iframe>

**Complexity Analysis**

* Time complexity : $$\mathcal{O}(N)$$ to iterate over the string of length N. 

* Space complexity : $$\mathcal{O}(1)$$, it's a constant space solution.