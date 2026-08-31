# C# simple solution beats 97%

**Author:** pawel753
**Votes:** 3
**Link:** [https://leetcode.com/problems/pairs-of-songs-with-total-durations-divisible-by-60/solutions/965050/](https://leetcode.com/problems/pairs-of-songs-with-total-durations-divisible-by-60/solutions/965050/)

---

Runtime: 116 ms, faster than 97.09% of C# online submissions for Pairs of Songs With Total Durations Divisible by 60.
Memory Usage: 32.9 MB, less than 76.36% of C# online submissions for Pairs of Songs With Total Durations Divisible by 60.
```
public class Solution
{
    int[] dict = new int[60];

    public int NumPairsDivisibleBy60(int[] time)
    {
        int res = 0;

        foreach(var t in time)
        {
            res += dict[(60 - t % 60) % 60];  //count number of matching modulus in visited values
            dict[t % 60]++;
        }
        return res;
    }
}
```