# C# solution

**Author:** Narich963
**Votes:** 0
**Link:** [https://leetcode.com/problems/statistics-from-a-large-sample/solutions/5878384/](https://leetcode.com/problems/statistics-from-a-large-sample/solutions/5878384/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```csharp []
public class Solution {
    public double[] SampleStats(int[] count)
    {
        var listCount = count.ToList();
        double min = listCount.FindIndex(m => m == count.FirstOrDefault(c => c > 0));
        double max = listCount.FindLastIndex(m => m == count.LastOrDefault(c => c > 0));

        var listWithValues = listCount.Where(c => c > 0).ToList();

        double pro = 0;
        double sum = 0;
        sum = listCount.Sum();
        int lastIndex = -1;
        foreach (var i in listWithValues)
        {
        pro += (double)i * listCount.IndexOf(i, lastIndex + 1);
        lastIndex = listCount.IndexOf(i);
        }
        double mean = pro / sum;

        double median = FindMedian(count, sum);

        double mode = listCount.FindIndex(m => m == count.Max());

        return [ min, max, mean, median, mode ];
    }
    public double FindMedian(int[] count, double sum)
    {
        int cumalativeCount = 0;
        double median1 = -1, median2 = -1;

        for (int i = 0; i <= count.Length; i++)
        {
            if (count[i] > 0)
            {
                cumalativeCount += count[i];

                if (median1 == -1 && cumalativeCount >= sum / 2)
                {
                    median1 = i;
                }
                if (cumalativeCount >= (sum + 1) / 2)
                {
                    median2 = i;
                    break;
                }
            }
        }
        if (sum % 2 == 0)
        {
            return (median1 + median2) / 2;
        }
        return median2;
    }
}
```