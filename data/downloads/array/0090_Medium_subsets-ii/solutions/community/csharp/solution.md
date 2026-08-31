# Simple C# Solution (With Explanation)

**Author:** inderbindra
**Votes:** 1
**Link:** [https://leetcode.com/problems/subsets-ii/solutions/3999050/](https://leetcode.com/problems/subsets-ii/solutions/3999050/)

---

# Approaches 
Two approaches:
1. Iterative Backtracking
2. Recusrive Backtracking

# Approach (Iterative Backtracking)

The given code is for generating all unique subsets of an integer array `nums`, even if there are duplicates in the input array. A unique subset is a set of elements picked from the array in such a way that no two subsets are the same.

Here's how the code works:

1. Sort the `nums` array in ascending order. Sorting is done to handle duplicates efficiently.

2. Initialize an empty list of lists called `result` to store the unique subsets.

3. Start a backtracking recursion with the initial parameters:
   - `nums`: The input integer array (sorted).
   - `currentList`: An empty list that will represent the current subset being constructed.
   - `index`: An integer representing the current index in the `nums` array.

4. In the backtracking recursion:
   - Add the current `currentList` to the `result`. This ensures that all subsets, including the empty one, are considered as unique.

   - Iterate through the `nums` array starting from the `index`:
     - Include the current element `nums[i]` in the current subset by adding it to `currentList`, and then recursively call `BackTrack` with `index` incremented by 1.

     - Remove the current element `nums[i]` from `currentList` (backtrack).

     - Handle duplicate elements: While `i` is less than the length of `nums` minus 1 (to avoid an out-of-bounds index) and `nums[i]` is equal to `nums[i+1]`, increment `i`. This ensures that duplicate elements are skipped to avoid generating duplicate subsets.

5. Finally, return the `result` list, which contains all the unique subsets of `nums`.

# Complexity

- **Time Complexity: O(2^N)**
   Let's break down the time and space complexity of the provided code:
    - **Sorting Operation**: Sorting the input array `nums` takes `(O(n log n))` time complexity, where `n` is the length of `nums`.
    - **Backtracking Algorithm**:
    - The backtracking function `BackTracking` explores all possible subsets of `nums`.
    - At each element of `nums`, we have two choices: include the element in the subset or exclude it.
    - Considering the worst-case scenario, each element can be included or excluded independently, leading to `(2^n)` possible subsets.
    - For each subset, there is an operation of adding and removing elements from `currentList`, which is `(O(1))` for each operation due to the nature of `List` in C#.
    - Additionally, inside the `for` loop of `BackTracking`, there's a `while` loop to skip duplicates. In the worst-case scenario, this loop may need to iterate through all elements.

    - Therefore, the overall time complexity of this backtracking approach is dominated by the number of subsets generated, which is `(O(2^n))`, where `(n)` is the length of the `nums` array.

- **Space Complexity: O(N)**
    - Call stack takes o(n).
    - Result variable is not considered in the space complexity:
    - The space complexity is determined by the `result` list, which stores all the unique subsets.
    - In the worst case, there can be 2^N subsets for an array of size N.

# Code (Iterative Backtracking)
```
public class Solution {
    IList<IList<int>> result = new List<IList<int>>();
    public IList<IList<int>> SubsetsWithDup(int[] nums) {
        Array.Sort(nums);
        BackTrack(nums, new List<int>(), 0);
        return result;
    }
    private void BackTrack(int[] nums, IList<int> currentList, int index)
    {
        result.Add(new List<int>(currentList));
        for(int i=index; i<nums.Length; i++)
        {
            currentList.Add(nums[i]);
            BackTrack(nums, currentList, i + 1);
            currentList.Remove(nums[i]);
            while(i < nums.Length-1 && nums[i] == nums[i+1])
            {
                i++;
            }
        }
    }
}
```

# Approach (Recusrive Solution)

1. Sort the input array nums in non-decreasing order. This sorting step is crucial to ensure that duplicate values appear next to each other in the array.

2. Initialize an empty list result to store the subsets.

3. Call the DFS function to start the recursive process, passing the sorted nums, an empty list currentList, and the initial index 0.

4. In the DFS function:
    - If the index exceeds or equals the length of nums, a valid subset has been constructed. It copies the elements from currentList to a new array curr and adds curr to the result list.

    - Include the current index value by adding nums[index] to currentList, then recursively call DFS with index + 1.
    
    - Don't include the current index value by removing nums[index] from currentList, then skip over any duplicate values in the sorted array to avoid creating duplicate subsets. This is achieved using a while loop that increments index while nums[index] is equal to nums[index+1].

5. The DFS function explores all possible combinations of including and excluding elements from the sorted nums array while avoiding duplicates.

6. The result list contains all unique subsets of nums after the DFS traversal.

# Complexity
- **Time complexity: O(n * 2^n)**
    - The time complexity of this code is O(n * 2^n), where n is the length of the input array nums. This is because, in the worst case, all possible subsets are generated. The sorting step takes O(n * log(n)) time, and the DFS traversal explores 2^n possible subsets for n items in an array.

- **Space complexity: O(2^n)**
    - Overall, the space complexity is dominated by the space used for the recursion stack and the result list. Therefore, the total space complexity of the code is O(n + 2^n), which simplifies to O(2^n) because the exponential term dominates.

# Code (Recursive Solution)
```
public class Solution {
    IList<IList<int>> result = new List<IList<int>>();
    public IList<IList<int>> SubsetsWithDup(int[] nums) {
        Array.Sort(nums);
        DFS(nums, new List<int>(), 0);   
        return result;
    }
    private void DFS(int[] nums, IList<int> currentList, int index)
    {
        if(index >= nums.Length)
        {
            int[] curr = new int[currentList.Count];
            currentList.CopyTo(curr, 0);
            result.Add(curr);
            return;
        }
        //Include the current index value
        currentList.Add(nums[index]);
        DFS(nums, currentList, index + 1);
        //Don't include the current index value
        currentList.Remove(nums[index]);
        //Execute the loop to skip the duplicate values to avoid creating duplicate sets.
        while(index+1 < nums.Length && nums[index] == nums[index+1])
        {
            index++;
        }
        DFS(nums, currentList, index + 1);
    }
}
```


