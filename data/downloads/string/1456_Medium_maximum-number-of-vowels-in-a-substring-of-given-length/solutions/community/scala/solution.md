# Scala Code

**Author:** abhi_84
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/solutions/5213452/](https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/solutions/5213452/)

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
```
object Solution {
    def maxVowels(s: String, k: Int): Int = {
        var mAns = 0
        var ans = 0
        var i = 0
        for(j <- 0 until s.length){
            if(s(j) == 'a' || s(j) == 'e' || s(j) == 'i' || s(j) == 'o' || s(j) == 'u'){
                ans += 1
                mAns = Math.max(ans, mAns)
            }

            if(j-i+1 == k){
                if(s(i) == 'a' || s(i) == 'e' || s(i) == 'i' || s(i) == 'o' || s(i) == 'u'){
                    ans -= 1
                    mAns = Math.max(ans, mAns)
                }

                i += 1
            }
        }

        mAns
    }
}
```