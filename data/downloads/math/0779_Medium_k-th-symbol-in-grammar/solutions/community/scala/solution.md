# Functional solution

**Author:** cachemiss
**Votes:** 0
**Link:** [https://leetcode.com/problems/k-th-symbol-in-grammar/solutions/5307050/](https://leetcode.com/problems/k-th-symbol-in-grammar/solutions/5307050/)

---

/*
1 -> 1
2 -> 1
3 -> 2
4 -> 2
5 -> 3
6 -> 3
7 -> 4
8 -> 4

*/

object Solution {

    def kthGrammar(n: Int, k: Int): Int = {
        lazy val kth = if k % 2 == 0 then k / 2 else k / 2 + 1
        n match {
            case 1 => 0
            case _ => 
                kthGrammar(n - 1, kth) match {
                    case 0 if (k - 1) % 2 == 0 => 0
                    case 0 if (k - 1) % 2 != 0 => 1
                    case 1 if (k - 1) % 2 == 0 => 1
                    case _ => 0
            }
        }
    }
}
```