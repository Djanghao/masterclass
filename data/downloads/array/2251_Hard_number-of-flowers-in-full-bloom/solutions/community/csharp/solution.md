# C# Solution for Number of Flowers in Full Bloom Problem

**Author:** Aman_Raj_Sinha
**Votes:** 2
**Link:** [https://leetcode.com/problems/number-of-flowers-in-full-bloom/solutions/4155682/](https://leetcode.com/problems/number-of-flowers-in-full-bloom/solutions/4155682/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The goal is to count the number of flowers that are in full bloom when each person arrives. To do this, we need to keep track of the intervals during which each flower is in full bloom. We can achieve this by sorting the start and end times of the flower intervals. For each person, we find how many intervals start before they arrive and how many end after they arrive. The difference between these counts gives us the number of flowers in full bloom when that person arrives.

\u2022	Sort the start and end times to easily count the flowers in bloom for each person.
\u2022	For each person, use binary search to find the count of intervals that start before they arrive and the count of intervals that end after they arrive.

# Approach
<!-- Describe your approach to solving the problem. -->
\u2022	Create two lists: one for the start times of flower intervals and one for the end times (incremented by 1 to handle inclusive ranges).
\u2022	Sort both lists for efficient binary searching.
\u2022	Iterate over each person\u2019s arrival time and use binary search to count the number of intervals that start before and end after the person\u2019s arrival

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
\u2022	Sorting the start and end times takes O(N log N), where N is the number of flower intervals.
\u2022	For each person, we perform two binary searches which each take O(log N).
\u2022	Overall time complexity is O(N log N + M log N), where M is the number of people.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
\u2022	We use additional space to store the sorted start and end times, which takes O(N) space.
\u2022	The space complexity is O(N) due to the storage of these lists.

# Code
```
public class Solution
{
    public int[] FullBloomFlowers(int[][] flowers, int[] people)
    {
        List<int> starts = new List<int>();
        List<int> ends = new List<int>();

        foreach (var flower in flowers)
        {
            starts.Add(flower[0]);
            ends.Add(flower[1] + 1);
        }

        starts.Sort();
        ends.Sort();
        int[] ans = new int[people.Length];

        for (int index = 0; index < people.Length; index++)
        {
            int person = people[index];
            int i = BinarySearch(starts, person);
            int j = BinarySearch(ends, person);
            ans[index] = i - j;
        }

        return ans;
    }

    public int BinarySearch(List<int> arr, int target)
    {
        int left = 0;
        int right = arr.Count;

        while (left < right)
        {
            int mid = (left + right) / 2;
            if (target < arr[mid])
            {
                right = mid;
            }
            else
            {
                left = mid + 1;
            }
        }

        return left;
    }
}
```