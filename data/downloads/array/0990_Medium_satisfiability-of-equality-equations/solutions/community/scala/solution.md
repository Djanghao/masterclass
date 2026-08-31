# scala - 100 %

**Author:** AnishKumar5811
**Votes:** 0
**Link:** [https://leetcode.com/problems/satisfiability-of-equality-equations/solutions/5173965/](https://leetcode.com/problems/satisfiability-of-equality-equations/solutions/5173965/)

---

```
object Solution {
    import scala.util.control.Breaks._
    def equationsPossible(equations: Array[String]): Boolean = {
        
        val parent = (0 to 26).toArray
        
        def find(i: Int): Int = {
            if(parent(i) != i) 
                parent(i) = find(parent(i))
            
            parent(i) 
        }
        
        def union(a:Int, b:Int) = {
            parent(find(a)) = find(b)
        }
        
        for(e <- equations){
            if(e(1) == '=') {
                union(e(0)-'a' , e(3)-'a')
            }
        }
        
        var ans = true
        breakable {
            for(e <- equations){
                if(e(1) == '!') {
                    if(find(e(0)-'a') == find(e(3)-'a') )
                        ans = false
                        break
                }
            }
        }
        
        ans  
    }
}
```