# scala solution

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/design-an-atm-machine/solutions/5990927/](https://leetcode.com/problems/design-an-atm-machine/solutions/5990927/)

---

```scala []
class ATM() {
  import scala.util.chaining._
  val it = List(20,50,100,200,500).zipWithIndex.reverse
  val arr = Array.fill(it.size)(0)
  def deposit(banknotesCount: Array[Int]): Unit =
    banknotesCount.zipWithIndex.foreach{case (c,i) => arr(i)+=c}
  def withdraw(amount: Int): Array[Int] = {
    val x0 = it.scanLeft((amount,0)){case ((rem,lst),(x,i)) =>
      (arr(i) min rem/x) pipe {cnt => (rem - cnt*x, cnt)}
    }.drop(1).reverse
    if(x0.head._1 != 0) Array(-1) else 
      x0.map(_._2).toArray
        .tap(_.zipWithIndex.foreach{case (c,i)=>arr(i)-=c})
  }
}

/**
 * Your ATM object will be instantiated and called as such:
 * val obj = new ATM()
 * obj.deposit(banknotesCount)
 * val param_2 = obj.withdraw(amount)
 */
```