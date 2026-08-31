# Scala tail-recursive

**Author:** fulgenssequar
**Votes:** 1
**Link:** [https://leetcode.com/problems/longest-valid-parentheses/solutions/360447/](https://leetcode.com/problems/longest-valid-parentheses/solutions/360447/)

---

An inner recursive function with 4 input arguments.
```
object Solution {
    def longestValidParentheses(s: String): Int = {
        
        def readcompare(stk:List[Int], n:Int, lenLast:Int, lenMax:Int) : Int = {
            if (n>=s.length){
                lenMax
            }
            else {
                val sn = s(n)
                val (stk1, last1, len1) = sn match {
                    case '(' => ( (n-lenLast) :: stk, 0, lenMax ); // not the position n but (n-last), the beginning of a series of brackets. 
                    case ')' if stk==Nil => ( Nil, 0, lenMax )
                    case ')' => {
                        val len1 = n+1-stk.head
                        ( stk.tail, len1, math.max(lenMax, len1) )
                    }
                }
                readcompare( stk1, n+1, last1, len1 )
            }
        } 
        readcompare(Nil, 0, 0, 0)
    }
}
```