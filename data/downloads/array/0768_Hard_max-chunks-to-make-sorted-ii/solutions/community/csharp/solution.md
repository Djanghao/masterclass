# C# using Stack

**Author:** software-shepherd
**Votes:** 0
**Link:** [https://leetcode.com/problems/max-chunks-to-make-sorted-ii/solutions/6083377/](https://leetcode.com/problems/max-chunks-to-make-sorted-ii/solutions/6083377/)

---

# Intuition
At first I thought this would be a really complex problem with a lot of backtracking, since you need to be forming chunks by checking if the next number is lower than the max from this current chunk.

As soon as the next number is higher, that means this chunk is complete and a new chunk must begin.

Then the larger problem arises when a higher number is followed by a number lower than any of the chunks before.

What if I already have multiple chunks ready, then a new chunk contains the number 1?

That means I have to merge all previous chunks with this one, that would require a lot of backtracking.

What if I only need to merge some of those chunks and not all of them?
How do I know when to stop merging chunks?

# Approach
In reality, this problem is not about merging chunks.
I'm not being asked to return the chunks.
I'm only asked to count how many chunks could fit the requirement.

The code only needs to keep the state of the result as we iterate through the array. For that, I used a stack.

Whenever a new chunk starts, I pushed the max value from this chunk into the result stack.

If I find a new chunk with a new min value lower than the max value from any of my previous stacks, I pop the top value from the stack until the top value is lower than my new min.

I don't need to complicate myself with any logic about how to merge those chunks. I'm only keeping the count, and popping the last 'state' from the stack fills that purpose.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
Worst case scenario will be O(2n);

We try to iterate only once through the array, and we do.

But when we need to pop items from the stack, that also adds to the time complexity. Worst case scenario, each element in the array is a chunk by itself, then the last element in the array is lower than everything else. 


- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```csharp []
public class Solution
{
    public int MaxChunksToSorted(int[] arr)
    {
        if (arr == null || arr.Length == 0) return 0;

        Stack<int> result = [];
        int min = arr[0];
        int max = arr[0];
        // We start at 1 to skip the first item, which already set the min and max values
        // that initiate the first chunk.
        for (int i = 1; i < arr.Length; i++)
        {
            if (arr[i] >= max)
            {
                CommitChunkToResult(result, min, max);
                min = arr[i];
                max = arr[i];
            }

            if (arr[i] < min) min = arr[i];
        }
        // We commit one last result because the loop will have committed 
        // all previous chunks, but we stil have to commit this last chunk.
        CommitChunkToResult(result, min, max);

        return result.Count;
    }

    private void CommitChunkToResult(Stack<int> result, int min, int max)
    {
        // If it's the first value we simply push is because there is nothing to analyze
        if (result.Count == 0)
        {
            result.Push(max);
            return;
        }
        int top = result.Peek();
        // We pop the top "chunk" to represent the merge between this new chunk and the top chunk
        while (top > min)
        {
            result.Pop();
            if (result.Count == 0) break;
            top = result.Peek();
        }

        result.Push(max);
    }
}
```