# [Scala] Beats 100% in Both Memory and speed

**Author:** mav_gp13
**Votes:** 0
**Link:** [https://leetcode.com/problems/complement-of-base-10-integer/solutions/4663003/](https://leetcode.com/problems/complement-of-base-10-integer/solutions/4663003/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(nlogn)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
object Solution {
    def bitwiseComplement(n: Int): Int = {

        var r,q,cnt=0
        var result:Int = 0
        var temp = n

        if (n==0) return 1
        
        while (temp!=0) {
            
            r = temp%2
            q = temp/2
            // print(n,r,q,cnt,temp)
            // if (q == 0)
            if (r == 0) {result = result + Math.pow(2,cnt).toInt}

            cnt +=1
            temp /= 2


        }
        return result
    }
}
```