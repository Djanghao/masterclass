# C# LINQ One Line Solution

**Author:** gregsklyanny
**Votes:** 9
**Link:** [https://leetcode.com/problems/single-number/solutions/2854640/](https://leetcode.com/problems/single-number/solutions/2854640/)

---

**Please upvote if my solution was helpful ;)**
```
public class Solution
{
    public int SingleNumber(int[] nums)
	{
        return nums.GroupBy(x => x).Where(g => g.Count() == 1).Select(x => x.Key).First();    
    }
}
```


**LINQ Solution proposed by Thyreophora**

```
public class Solution
{
    public int SingleNumber(int[] nums)
	{
        return nums.Aggregate((x, i) => x ^ i);    
    }
}
```
