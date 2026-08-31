# C# Sliding Window with Two SortedSet`s

**Author:** ilya-a-f
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-x-sum-of-all-k-long-subarrays-ii/solutions/5946648/](https://leetcode.com/problems/find-x-sum-of-all-k-long-subarrays-ii/solutions/5946648/)

---

```csharp
using Entry = (int Count, int Num);

public class Solution
{
    public long[] FindXSum(int[] nums, int k, int x)
    {
        var top = new XSortedSet();
        var bot = new XSortedSet();
        var freq = new Dictionary<int, int>();
        var answer = new long[nums.Length - k + 1];

        for (var i = 0; i < nums.Length; i++)
        {
            freq.TryAdd(nums[i], 0);
            ExpandWindow(nums[i]);

            if (i - k >= 0)
                ShrinkWindow(nums[i - k]);

            if (i - k + 1 >= 0)
                answer[i - k + 1] = top.XSum;
        }

        return answer;

        void ExpandWindow(int num)
        {
            var rem = (  freq[num], num);
            var add = (++freq[num], num);

            bot.Remove(rem);
            top.Remove(rem);
            top.Add(add);

            if (top.Count > x)
            {
                var entry = top.Min;
                top.Remove(entry);
                bot.Add(entry);
            }
        }

        void ShrinkWindow(int num)
        {
            var rem = (  freq[num], num);
            var add = (--freq[num], num);

            top.Remove(rem);
            bot.Remove(rem);
            bot.Add(add);

            if (top.Count < x)
            {
                var entry = bot.Max;
                bot.Remove(entry);
                top.Add(entry);
            }
        }
    }
}

public class XSortedSet
{
    private SortedSet<Entry> Sorted { get; } = new();

    public long XSum { get; private set; }

    public int Count => Sorted.Count;

    public Entry Min => Sorted.Min;

    public Entry Max => Sorted.Max;

    public void Add(Entry entry)
    {
        if (Sorted.Add(entry))
            XSum += 1L * entry.Count * entry.Num;
    }

    public void Remove(Entry entry)
    {
        if (Sorted.Remove(entry))
            XSum -= 1L * entry.Count * entry.Num;
    }
}
```