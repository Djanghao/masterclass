# C# || Dictionary of <int, PriorityQueue<int, int>> solution

**Author:** timmok2022
**Votes:** 1
**Link:** [https://leetcode.com/problems/high-five/solutions/3395448/](https://leetcode.com/problems/high-five/solutions/3395448/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
This problem requires sorting of the input data - whether they are handled at the time of storing data or generating outputs.  I find the option of storing all socres to PriorityQueue a cleaner solution.

For each student id, create a dictionary entry where the id is the key and the score is stored as a PriorityQueue element - the score is stored as is and the priority is **int.MaxValue - score** which effectively turn the minHeap datastructure into maxHeap.

When calculating the average score, check if the PriorityQueue count is greater or equal to 5.  If yes, sum up the first five values of Dequeue() and then divide it by 5.  Otherwise, sum up all the value divided by the count (which is less than or equal to 4).

A side note: I believe this is a **medium** level question, not **easy**.  While the logic may be relatively simple, implementing a proper solution of handling sorts and calculating data for a given language (in my case C#) is quite involved - using Dictionary with the key of int and the value of PriorityQueue<int, int>.

# Approach
<!-- Describe your approach to solving the problem. -->
1. Instantiate a new varaible **dict **of **Dictionary<int, PriorityQueue<int, int>>()**.
2. Instantiate a new varaible **result** which is **List<int[]>**
3. Iterate through all the inputs of items by using foreach 
4. Once all the inputs are stored, for each key-value pair of **dict**, have an int array **record** with two elements - the first element to store the student is (i.e. key) and the second element to store the average score.  Add each output **record** to the **result** list.
5. For calculating the average score, create a helper function **avgScore** that 1) checks the total count of the PriorityQueue entry and 2) calculate the average based on the actual available score entries up to five.
6. **result** needs to be sorted by the sudent id before return it as an array.  For this, a LINQ method of **OrderBy** is used.  

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n)

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(n)

# Code
```
public class Solution {
    public int[][] HighFive(int[][] items) {

        var dict = new Dictionary<int, PriorityQueue<int, int>>();
        var result = new List<int[]>();

        foreach (var item in items)
        {
            int id = item[0];
            int score = item[1];

            if (!dict.ContainsKey(id))
            {
                dict.Add(id, new PriorityQueue<int, int>());
            }
            dict[id].Enqueue(score, int.MaxValue - score);
        }

        foreach (var kvp in dict)
        {
            // helper function
            var record = new int[2];
            record[0] = kvp.Key;
            record[1] = avgScore(kvp.Value);

            result.Add(record);
        }

        return result.OrderBy(pair => pair[0]).ToArray();

        int avgScore(PriorityQueue<int, int> input)
        {
            int total = 0;
            int count = input.Count >= 5? 5 : input.Count;

            for (int i = 0; i < count; i++)
            {
                total += input.Dequeue();
            }

            return (int) total/count;
        }
        
    }
}
```