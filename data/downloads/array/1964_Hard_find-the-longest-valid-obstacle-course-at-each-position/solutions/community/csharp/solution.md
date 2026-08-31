# C# solution beats 100% in perf  - Using built-in BinarySearch

**Author:** TamasTako
**Votes:** 2
**Link:** [https://leetcode.com/problems/find-the-longest-valid-obstacle-course-at-each-position/solutions/3495895/](https://leetcode.com/problems/find-the-longest-valid-obstacle-course-at-each-position/solutions/3495895/)

---

# Intuition
Typical LIS (longest increasing subsequence) problem, a good algo description can be found at [this answer](https://leetcode.com/problems/longest-increasing-subsequence/solutions/1326552/optimization-from-brute-force-to-dynamic-programming-explained/) as solution #5. 
We need to return multiple results here, but we can achieve that with maintaining only one LIS list, and consider the last insertion position always (as the $$i$$th item always needs to be considered).

# Approach
I have been using the built-in BinarySearch method for C# List<> as some companies would prefer to not to re-invent the wheel on interviews (and of course in PROD code too) and describe how you do binary search if that is not the exact problem itself. The only trick here is that you need to consider that elements might not be unique (binary search returns a position that has the given element, but not necessary the last one), and that if the element is not found, it is returning the bitwise complement of the insert position.   

# Complexity
- Time complexity:
$$O(n * logn)$$ as we iterate through all elements and use a binary search (log n) to find the insert position for all

- Space complexity:
$$O(n)$$ as the list used for LIS can be n length (output is also n length but that should not be considered) 

# Code
```
public class Solution {
    public int[] LongestObstacleCourseAtEachPosition(int[] obstacles) {
        var result = new int[obstacles.Length];
        var lis = new List<int>();
        for(int ind = 0; ind < obstacles.Length; ind++)
        {
            if (lis.Count == 0 || obstacles[ind] >= lis[lis.Count - 1])
            {
                lis.Add(obstacles[ind]);
                result[ind] = lis.Count;
            }
            else
            {
                var insertPos = lis.BinarySearch(obstacles[ind]);
                if (insertPos < 0)
                {
                    lis[~insertPos] = obstacles[ind];
                    result[ind] = (~insertPos) + 1;
                }
                else
                {
                    while(insertPos < lis.Count && lis[insertPos] == obstacles[ind])
                    {
                        insertPos++;
                    }
                    lis[insertPos] = obstacles[ind];
                    result[ind] = insertPos + 1;
                }
            }
        }

        return result;
    }
}
