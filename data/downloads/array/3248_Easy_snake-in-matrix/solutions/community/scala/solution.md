# easy solution scala

**Author:** user8349be
**Votes:** 1
**Link:** [https://leetcode.com/problems/snake-in-matrix/solutions/5900927/](https://leetcode.com/problems/snake-in-matrix/solutions/5900927/)

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
```scala []
object Solution {
    def finalPositionOfSnake(n: Int, commands: List[String]): Int = {
        val snake = Array.fill(n,n)(0)
        var (i,j) = (0,0)
        var last = 0
        for(cmd <- commands){
            if(cmd == "RIGHT"){
                j+=1
                snake(i)(j)=(i*n)+j
            }
            else if (cmd == "DOWN"){
                i+=1
                snake(i)(j)=(i*n)+j
            }
            else if (cmd == "UP"){
                i-=1
                snake(i)(j)=(i*n)+j
            }else{
                j-=1
                snake(i)(j)=(i*n)+j
            }
            last =snake(i)(j)

        }
        return last
    }
}
```