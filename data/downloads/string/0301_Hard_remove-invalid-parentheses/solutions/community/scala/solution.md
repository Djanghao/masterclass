# Scala Recursion Simple to Understand

**Author:** Shubhang2101
**Votes:** 0
**Link:** [https://leetcode.com/problems/remove-invalid-parentheses/solutions/5027067/](https://leetcode.com/problems/remove-invalid-parentheses/solutions/5027067/)

---

# Intuition
The intuition behind this problem is 
* We will keep track of three things 
  * Removals-> keep track of removals so far , we get our answer with a value of removals less than removals we update our list to new and update the value of minimum removals appeared so far , if current removal is equal to the minimum removal so far , we add current string to the list
  * We only include '(' when number of open brackets are less than length/2 ( to make valid string) if we also explore the possibilty of not including '('
  * We only include ')' when number of close brackets are less than lopen brackets ( to make valid string) if we also explore the possibilty of not including ')'

# Approach
<!-- Describe your approach to solving the problem. -->
Recursion + Backtrack

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(2^n)

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(n) Recursive stack
# Code
```
object Solution {
    def removeInvalidParentheses(s: String): List[String] = {

        val n = s.length/2
        
        var minRemovals = Int.MaxValue

        var ans:List[String] = List()

        def solve(index:Int,str:String,open:Int,close:Int,removals:Int):Unit = index match {

            case i if i>= s.length && open == close => {
                if(removals == minRemovals){
                    ans = ans ++ List(str)
                }
                else{
                    if(removals < minRemovals){
                        minRemovals = removals
                        ans = List(str)
                    }
                    else
                    return
                }
            }


            case i if i >= s.length => return


            case i if s(i) == '(' => {
                if(open < n){
                    solve(i+1,str:+'(',open+1 , close ,removals)
                    solve(i+1,str,open,close,removals+1)
                }
                else{
                    solve(i+1,str,open,close,removals+1)
                }
            }


            case i if s(i) == ')' => {
                if(close < open){
                    solve(i+1,str:+')',open,close+1,removals)
                    solve(i+1,str,open,close,removals+1)
                }
                else{
                    solve(i+1,str,open,close,removals+1)
                }
            }


            case i => solve(i+1,str:+s(i),open,close,removals)
 
        }

        solve(0,"",0,0,0)

        ans.toSet.toList
    }
}
```