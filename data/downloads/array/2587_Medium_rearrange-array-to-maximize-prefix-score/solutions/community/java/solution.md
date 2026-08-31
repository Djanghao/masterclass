# Simple java solution

**Author:** Siddhant_1602
**Votes:** 6
**Link:** [https://leetcode.com/problems/rearrange-array-to-maximize-prefix-score/solutions/3286263/](https://leetcode.com/problems/rearrange-array-to-maximize-prefix-score/solutions/3286263/)

---

# Complexity
- Time complexity: $$O(n log n)$$ 

- Space complexity: $$O(n)$$ where n is the size of the array

# Code
```
class Solution {
    public int maxScore(int[] num) {
        Integer[] boxedArr = Arrays.stream(num).boxed().toArray(Integer[]::new);
        Arrays.sort(boxedArr, Comparator.reverseOrder());
        int[] nums = Arrays.stream(boxedArr).mapToInt(Integer::intValue).toArray();
        int sum=0;
        long p=0;
        for(int i:nums)
        {
            p+=(long)i;
            if(p>0)
            {
                sum++;
            }
            else
            {
                p=0;
            }
        }
        return sum;
    }
}
```