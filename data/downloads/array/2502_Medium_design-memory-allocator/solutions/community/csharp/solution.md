# c#, modelling

**Author:** bytchenko
**Votes:** 0
**Link:** [https://leetcode.com/problems/design-memory-allocator/solutions/2975611/](https://leetcode.com/problems/design-memory-allocator/solutions/2975611/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
We can model `memory` with a help of array and then apply greedy approach (allocate as early as possible)

# Approach
<!-- Describe your approach to solving the problem. -->
greedy approach with sliding window

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(n)$$ (worst case) for each `Allocate` or `Free` call

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(n)$$

# Code
```
public class Allocator {
    int[] memory;

    public Allocator(int n) {
        memory = new int[n];    
    }
    
    public int Allocate(int size, int mID) {
        for (int i = 0, current = 0; i < memory.Length; ++i) 
            if (memory[i] == 0) {
                if (++current == size) {
                    for (int j = 0; j < size; ++j)
                        memory[i - size + j + 1] = mID;

                    return i - size + 1;
                }
            }
            else
                current = 0;

        return -1;
    }
    
    public int Free(int mID) {
        int result = 0;

        for (int i = memory.Length - 1; i >= 0; --i) 
            if (memory[i] == mID) {
                memory[i] = 0;

                ++result;
            }    

        return result;
    }
}

/**
 * Your Allocator object will be instantiated and called as such:
 * Allocator obj = new Allocator(n);
 * int param_1 = obj.Allocate(size,mID);
 * int param_2 = obj.Free(mID);
 */
```