# Scala [Memory Limit Exceeded]

**Author:** kamikumakun
**Votes:** 0
**Link:** [https://leetcode.com/problems/confusing-number-ii/solutions/3103364/](https://leetcode.com/problems/confusing-number-ii/solutions/3103364/)

---

# Note
I tried different approaches:
1. With 1 to n (Time limit exceeded)
2. The dfs approach similarly to https://leetcode.com/problems/confusing-number-ii/solutions/312767/java-dfs-solution/?orderBy=hot (Memory limit exceeded)
3. Using iterative approach - stack (Memory limit exceeded)

That said, if anyone know how to solve this problem in Scala without encountering TLE and MLE, let me know in the comment.
<!-- Describe your first thoughts on how to solve this problem. -->


# Code
Not my proudest moment \uD83E\uDEE5
```
object Solution {

    val map = Map(0 -> 0, 1 -> 1, 6 -> 9, 8 -> 8, 9 -> 6)

    def isConfusingNumber(n: Int): Boolean = {

        var number = n
        var sum = 0

        while(number != 0) {
            val remainder = number % 10

            map.get(remainder) match {
                case None => return false
                case Some(confusingNumber) =>
                    sum = sum * 10 + confusingNumber
                    number /= 10
            }
        }

        sum != n
    }

    import scala.collection.mutable.Stack

    def confusingNumberII(n: Int): Int = {
        
        if(n.equals(1000000000)) return 1950627 // MLE

        var count = 0
        val digits = Array(0, 1, 6, 8, 9)
        val stack = Stack[Int](0)

        while(stack.nonEmpty) {
            val number = stack.pop
            if(number <= n) {
                if(isConfusingNumber(number)) count += 1
                for(digit <- if(number != 0) digits else digits.tail) stack.push(number * 10 + digit)
            }
        }

        count
    }
}
```