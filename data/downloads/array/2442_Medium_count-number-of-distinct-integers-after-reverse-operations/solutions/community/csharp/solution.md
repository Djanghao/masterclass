# 100 % faster than other

**Author:** DiyorjonDeveloper
**Votes:** 2
**Link:** [https://leetcode.com/problems/count-number-of-distinct-integers-after-reverse-operations/solutions/3145956/](https://leetcode.com/problems/count-number-of-distinct-integers-after-reverse-operations/solutions/3145956/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->
Easy solution with HashSet and understandable 
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
    public int CountDistinctIntegers(int[] nums) {
        
    HashSet<int> unique = new HashSet<int>();
    int reversedNumber = 0;
    for(int i=0;i<nums.Length;i++)
    {
        if (!unique.Contains(nums[i]))
            unique.Add(nums[i]);
        reversedNumber = Reverse(nums[i]);
        if (reversedNumber != nums[i] && !unique.Contains(reversedNumber))
            unique.Add(reversedNumber);

    }
    return unique.Count;
    }
    static int Reverse(int i)
{
    
    int reversedNumber = 0;
    int cycle = 1;
    while(i>0)
    {
        reversedNumber = (cycle * reversedNumber*10) + (i % 10);
        i/= 10;
    }
    return reversedNumber;
}
}
```