# runtime : 4ms - beats 100% | Memory: 42.77MB - beats 23.08%

**Author:** PxyQPJ0zJa
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-operations-to-collect-elements/solutions/5931517/](https://leetcode.com/problems/minimum-operations-to-collect-elements/solutions/5931517/)

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
    public int MinOperations(IList<int> nums, int k) {
        List<int> occurance = new List<int>();
        int op=0;
        occurance.AddRange(Enumerable.Range(1,k));
        for(int j=nums.Count-1;j>=0;j--){
            if(occurance.Contains(nums[j]))
                occurance.Remove(nums[j]);
            op++;
            if(occurance.Count==0)
                break;
        }
        return op;
    }
}

        
```