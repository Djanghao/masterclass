# Easy Java Solution

**Author:** aftab0711
**Votes:** 8
**Link:** [https://leetcode.com/problems/subarrays-distinct-element-sum-of-squares-i/solutions/4218787/](https://leetcode.com/problems/subarrays-distinct-element-sum-of-squares-i/solutions/4218787/)

---



# Approach
 Since constraint is too small we can us brut force approach 

# Complexity
- Time complexity:
O(n^2)

- Space complexity:


# Code
```
class Solution {
    public int sumCounts(List<Integer> list) {
        int n=list.size();
        int ans=0;
        for(int i=0;i<n;i++){
            HashSet<Integer> set=new HashSet<>();
            for(int j=i;j<n;j++){
                int a=list.get(j);
                set.add(a);
                int size=set.size();
                ans+=size*size;
            }
        }
        return ans;
    }
}
```