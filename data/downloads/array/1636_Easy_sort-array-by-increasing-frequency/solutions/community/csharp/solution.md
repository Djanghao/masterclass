# C# Solution for Sort Array In Increasing Frequency Problem

**Author:** Aman_Raj_Sinha
**Votes:** 6
**Link:** [https://leetcode.com/problems/sort-array-by-increasing-frequency/solutions/5520239/](https://leetcode.com/problems/sort-array-by-increasing-frequency/solutions/5520239/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
In C#, we can use a Dictionary for counting frequencies, followed by a sorted list to maintain the elements by their frequency. Here\u2019s

# Approach
<!-- Describe your approach to solving the problem. -->
1.	Count Frequencies: Use a Dictionary<int, int> to store the frequency of each element.
2.	Group by Frequency: Use another Dictionary<int, List<int>> to group elements by their frequency.
3.	Sort Groups: Sort the keys of the frequency groups in ascending order and within each frequency group, sort the elements in descending order.
4.	Construct Result: Iterate over the sorted frequency groups to construct the result array.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
1.	Counting Frequencies: This takes  O(n)  time.
2.	Grouping by Frequency: This takes  O(n)  time.
3.	Sorting Groups: Sorting the frequency keys takes  O(k log k) , where  k  is the number of unique frequencies. Sorting the elements within each frequency group takes  O(u log u)  for each group, where  u  is the number of unique elements with that frequency. In the worst case, this can be  O(n log n) .
4.	Constructing Result: This takes  O(n)  time.

Thus, the overall time complexity is  O(n log n) .

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
1.	Dictionary for Frequency Count: This requires  O(n)  space in the worst case.
2.	Dictionary for Grouping by Frequency: This also requires  O(n)  space.
3.	List for Sorted Numbers: This requires  O(n)  space.

Thus, the overall space complexity is  O(n) .

# Code
```
public class Solution {
    public int[] FrequencySort(int[] nums) {
        // Step 1: Count the frequency of each element
        var freqMap = new Dictionary<int, int>();
        foreach (var num in nums) {
            if (freqMap.ContainsKey(num)) {
                freqMap[num]++;
            } else {
                freqMap[num] = 1;
            }
        }

        // Step 2: Group elements by their frequency
        var groupedByFreq = new Dictionary<int, List<int>>();
        foreach (var kvp in freqMap) {
            var num = kvp.Key;
            var freq = kvp.Value;
            if (!groupedByFreq.ContainsKey(freq)) {
                groupedByFreq[freq] = new List<int>();
            }
            groupedByFreq[freq].Add(num);
        }

        // Step 3: Sort the groups by frequency and sort the elements in each group in descending order
        var sortedNums = new List<int>();
        foreach (var freq in groupedByFreq.Keys.OrderBy(f => f)) {
            var numsWithSameFreq = groupedByFreq[freq];
            numsWithSameFreq.Sort((a, b) => b.CompareTo(a)); // Descending order
            foreach (var num in numsWithSameFreq) {
                for (int i = 0; i < freq; i++) {
                    sortedNums.Add(num);
                }
            }
        }

        return sortedNums.ToArray();
    }
}
```