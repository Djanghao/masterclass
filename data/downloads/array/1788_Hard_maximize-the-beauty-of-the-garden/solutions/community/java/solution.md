# Java | Only the first&last matter and all in between neg -> 0

**Author:** Student2091
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximize-the-beauty-of-the-garden/solutions/2240525/](https://leetcode.com/problems/maximize-the-beauty-of-the-garden/solutions/2240525/)

---

### Explanations
The optimal strategy is to take the first & last occurrence of the same number.
That way we maximize our chance to gain a positive score with available slots in between.
Because all negative numbers in between is effectively 0.

### Steps
Find the first & last occurrence's index for all numbers
And compute the prefix sum where all elements is either 0 or more.
That way we can compute the best result for each pair of number in O(1),
resulting in an overall O(n) time complexity.
```Java
class Solution {
    public int maximumBeauty(int[] flowers) {
        Map<Integer, Integer> st = new HashMap<>();
        Map<Integer, Integer> end= new HashMap<>();
        int n = flowers.length;
        int[] pre = new int[n];
        for (int i=0,j=n-1;i<n;i++,--j){
            st.put(flowers[j],j);
            end.put(flowers[i],i);
            pre[i]=Math.max(flowers[i],0)+(i==0?0:pre[i-1]);
        }
        int ans = Integer.MIN_VALUE;
        for (int key : st.keySet()){
            if (!end.get(key).equals(st.get(key))){
                ans=Math.max(ans, pre[end.get(key)-1]-pre[st.get(key)]+2*key);
            }
        }
        return ans;
    }
}
```