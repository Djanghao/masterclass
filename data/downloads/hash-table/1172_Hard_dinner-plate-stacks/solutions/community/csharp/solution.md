# C# Solution / Runtime 100%, Memory 100% Beats

**Author:** sebnembasak
**Votes:** 0
**Link:** [https://leetcode.com/problems/dinner-plate-stacks/solutions/5511171/](https://leetcode.com/problems/dinner-plate-stacks/solutions/5511171/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
In addition to using normal Stacks, we use the "AvailableStacks" set. This sorted set is used to keep track of the indexes of stacks that are not full and can accommodate new elements. If there is no available stack available, a new stack is created, the value is added to this stack, and added to the list of stacks. If available, the value is added to the smallest indexed heap in the sorted set. If the stack is full, it is removed from the set of available stacks.
When performing a pop operation, empty stacks are checked. Empty stacks are removed from the end of the list so that the list does not grow unnecessarily. The value is extracted from the stack at the end of the list. If the stack is still full after exiting, it is added to the set of reusable stacks.

# Complexity
Time complexity:
- Push Operations -> O(log n)
n represents the number of stacks. This is caused by operations in the sorted set.

- Pop Operations  -> O(1) - O(n)
On average O(1), but removing empty heaps can be O(n) in worst-case scenario.

- PopAtStack Op.  -> O(log n) - O(1)
Due to operations on the sorted set and the stack operations are O(1).


Space complexity -> O(n*m)
where 'n' is the number of stacks and 'm' is the maximum number of elements in any stack. This accounts for the space used by all the stacks and the sorted set for tracking available stacks.


# Code
```
using System;
using System.Collections.Generic;

public class DinnerPlates
{
    private int capacity;
    private List<Stack<int>> stacks;
    private SortedSet<int> availableStacks;

    public DinnerPlates(int capacity)
    {
        this.capacity = capacity;
        this.stacks = new List<Stack<int>>();
        this.availableStacks = new SortedSet<int>();
    }

    public void Push(int val)
    {
        // If no available stacks, create a new one
        if (availableStacks.Count == 0){
            Stack<int> newStack = new Stack<int>();
            newStack.Push(val);
            stacks.Add(newStack);

            // If the new stack is not full, add it to available stacks
            if (newStack.Count < capacity) 
                availableStacks.Add(stacks.Count - 1);
        }
        else  {
            int index = availableStacks.Min; // Get the leftmost available stack

            // Check if the index is valid before accessing
            if (index >= 0 && index < stacks.Count){
                stacks[index].Push(val);

                // If the stack is now full, remove it from available stacks
                if (stacks[index].Count == capacity)  availableStacks.Remove(index); 
            }
            else {
                // If the index is invalid, create a new stack
                Stack<int> newStack = new Stack<int>();
                newStack.Push(val);
                stacks.Add(newStack);

                // If the new stack is not full, add it to available stacks
                if (newStack.Count < capacity) 
                    availableStacks.Add(stacks.Count - 1);
            }
        }
    }

    public int Pop()
    {
        // Remove empty stacks from the end
        while (stacks.Count > 0 && stacks[stacks.Count - 1].Count == 0){
            stacks.RemoveAt(stacks.Count - 1);
        }

        if (stacks.Count == 0) return -1;

        int val = stacks[stacks.Count - 1].Pop();

        // If the stack is not full after popping, add it to available stacks
        if (stacks[stacks.Count - 1].Count > 0) availableStacks.Add(stacks.Count - 1);
        return val;
    }

    public int PopAtStack(int index)
    {
        if (index < 0 || index >= stacks.Count || stacks[index].Count == 0)
            return -1; // Invalid stack index or empty stack

        int val = stacks[index].Pop();

        // Add this index to available stacks as it's not full now
        if (stacks[index].Count < capacity) availableStacks.Add(index);
        return val;
    }
}

/**
 * Your DinnerPlates object will be instantiated and called as such:
 * DinnerPlates obj = new DinnerPlates(capacity);
 * obj.Push(val);
 * int param_2 = obj.Pop();
 * int param_3 = obj.PopAtStack(index);
 */


```