# C#, 2 Arrays

**Author:** CDev
**Votes:** 2
**Link:** [https://leetcode.com/problems/frequency-tracker/solutions/3495124/](https://leetcode.com/problems/frequency-tracker/solutions/3495124/)

---

# Complexity
- Time complexity: $$O(n)$$ 

- Space complexity: $$O(10^5)$$ 

# Code
```
public class FrequencyTracker 
{
    private int[] numberFreq;
    private int[] freqCount;

    public FrequencyTracker()
    {
        numberFreq = new int[100001];
        freqCount = new int[100001];
    }

    public void Add(int number)
    {
        int oldFreq = numberFreq[number];
        freqCount[oldFreq]--;
        freqCount[oldFreq+1]++;
        numberFreq[number]++;
    }

    public void DeleteOne(int number)
    {
        if (numberFreq[number] > 0)
        {
            int oldFreq = numberFreq[number];
            freqCount[oldFreq]--;
            freqCount[oldFreq - 1]++;
            numberFreq[number]--;
        }
    }

    public bool HasFrequency(int frequency)
    {
        return freqCount[frequency] > 0 ? true : false;
    }
}
```