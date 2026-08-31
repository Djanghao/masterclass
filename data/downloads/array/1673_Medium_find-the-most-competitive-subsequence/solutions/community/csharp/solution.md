# C# monotonic stack with comments

**Author:** remedydev
**Votes:** 2
**Link:** [https://leetcode.com/problems/find-the-most-competitive-subsequence/solutions/2909019/](https://leetcode.com/problems/find-the-most-competitive-subsequence/solutions/2909019/)

---

# Approach
We use stack to maintain subsequent minimum values

# Complexity
- Time complexity: O(N)
- Space complexity: O(N)

# Code
```
public class Solution {
    public int[] MostCompetitive(int[] nums, int k) {
        Stack<int> stack = new(); // stack to maintain all minimum subsequent elements
        
        for(int i=0;i<nums.Length;i++){
            // keep poping bigger elements
            while(stack.Count>0 &&
                // keep smaller elements in the stack, e.g: 1,5 last '5' will be dropped if new pushed element is '3'
                nums[stack.Peek()]>nums[i] &&
                //  cover [24,8,80,2],k=3 use case, we don't pop all elements once we encountered '2' if we at the end
                // of the array, we should keep pushing elements into a stack cause we must have 'k' elements at the end
                nums.Length-i>k-stack.Count) 
                    stack.Pop();

            // whatever value the new element has, 
            // it is bigger then we have on top of the stack, 
            // so we skip it if stack is full
            if(stack.Count<k) 
                stack.Push(i);
        }

        var result = new int[stack.Count];
        while(stack.Count>0) result[stack.Count-1]=nums[stack.Pop()];
        return result;
    }
}
```