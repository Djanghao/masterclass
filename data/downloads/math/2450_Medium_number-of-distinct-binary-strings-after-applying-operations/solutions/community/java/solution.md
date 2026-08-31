# Simple Java Approach in 1ms

**Author:** Ineha
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-distinct-binary-strings-after-applying-operations/solutions/5367085/](https://leetcode.com/problems/number-of-distinct-binary-strings-after-applying-operations/solutions/5367085/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
diff =s.length()-k
Try to build a pattern using diff
diff =0 then res =2
diff =1 then res =4
diff =2 then res =8

Pattern is
Math.pow(2,diff+1)

# Complexity
- Time complexity: o(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:o(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    public int countDistinctStrings(String s, int k) {
        if(s.length()<=0){
            return -1;
        }
        int MOD = 1000000007;
        System.out.println("s.length():" + s.length());
        int n= s.length()-k+1;
        long ans=1;
        while(n>0){
            ans=ans<<1;
            n--;
            ans%=MOD;
            System.out.println("ans : " + ans +" n : "+n);
        }
       
        return (int)ans;
    }
}







```