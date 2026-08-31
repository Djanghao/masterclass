# Scala tailrec solution

**Author:** ntsaturov
**Votes:** 1
**Link:** [https://leetcode.com/problems/defanging-an-ip-address/solutions/1468696/](https://leetcode.com/problems/defanging-an-ip-address/solutions/1468696/)

---

```
def defangIpaddrWithTailRec(address: String): String = {
    @tailrec
    def accFunction(addr: Seq[String], acc: String): String = addr match {
      case hd :: tail => accFunction(tail, if(hd.equals(".")) acc + "[.]" else acc + hd)
      case Nil => acc
    }

    accFunction(address.split("").toList, "")
  }
```