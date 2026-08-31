# Easy Scala Pattern Matching Optimal Solution .

**Author:** HARSHIDAS_21
**Votes:** 0
**Link:** [https://leetcode.com/problems/best-poker-hand/solutions/5232377/](https://leetcode.com/problems/best-poker-hand/solutions/5232377/)

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
    def bestHand(ranks: Array[Int], suits: Array[Char]): String = {
        (ranks,suits)   match
        {
            case   (_,s)    if   (s.forall(_   ==   s.head))   =>   "Flush"
            case (r,_)=>   r.groupBy(identity).values.map(_.length).max match
            {
                case n   if   n   >=   3   =>   "Three of a Kind"
                case n   if   n   ==   2   =>   "Pair"
                case _   =>   "High Card"
            }
        }
    }
}
```