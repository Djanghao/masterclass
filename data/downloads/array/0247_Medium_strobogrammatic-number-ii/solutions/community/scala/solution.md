# Scala Solution

**Author:** honelight
**Votes:** 0
**Link:** [https://leetcode.com/problems/strobogrammatic-number-ii/solutions/978362/](https://leetcode.com/problems/strobogrammatic-number-ii/solutions/978362/)

---

```
object Solution {
    def findStrobogrammatic(n: Int): List[String] = {
        def calculateRange(index:Int, outerMost:Boolean):List[String] = {
            index match {
                case 0 => List("")
                case 1 =>{
                    List("0","1","8")
                }
                case value => {
                    val range = calculateRange(index-2, false)
                    if(outerMost){
                        range.flatMap(x=>{
                            List("1"+x+"1", "6"+x+"9","8"+x+"8","9"+x+"6")
                        })
                    }else{
                        range.flatMap(x=>{
                            List("0"+x+"0", "1"+x+"1", "6"+x+"9","8"+x+"8","9"+x+"6")
                        })
                    }
                }
            }
        }
        
        calculateRange(n, true)
    }
}
```