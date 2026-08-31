# Beautiful Scala Solution (1-Liner)

**Author:** code_report
**Votes:** 2
**Link:** [https://leetcode.com/problems/maximum-number-of-balloons/solutions/396008/](https://leetcode.com/problems/maximum-number-of-balloons/solutions/396008/)

---

I love functional programming <3
```
def maxNumberOfBalloons(text: String): Int = {
    return "balon".toList.zip(List(1,1,2,2,1)) 
                  .map(p => text.count(_ == p._1) / p._2)
                  .min;
}
```
The one-liner (although it looks much less beautiful):
```
def maxNumberOfBalloons(text: String): Int = {
    return "balon".toList.zip(List(1,1,2,2,1)).map(p => text.count(_ == p._1) / p._2).min;
}