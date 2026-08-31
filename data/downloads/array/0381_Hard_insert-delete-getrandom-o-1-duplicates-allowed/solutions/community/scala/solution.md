# Scala solution

**Author:** danielOlivo
**Votes:** 0
**Link:** [https://leetcode.com/problems/insert-delete-getrandom-o1-duplicates-allowed/solutions/4574978/](https://leetcode.com/problems/insert-delete-getrandom-o1-duplicates-allowed/solutions/4574978/)

---

# Code
```
class RandomizedCollection() {

    var m = collection.mutable.Map[Int,Int]()
    var count = 0

    def insert(`val`: Int): Boolean = {
        count += 1
        if(!m.contains(`val`)) {
            m.addOne((`val`,1))
            true
        }
        else {
            m(`val`) += 1
            false
        }
    }
     

    def remove(`val`: Int): Boolean = {
        if(!m.contains(`val`)) false
        else {
            val upd = m(`val`) - 1
            if(upd > 0) m(`val`) = upd
            else m.remove(`val`)
            count -= 1
            true
        }
    }

    def getRandom(): Int = {
        var n = util.Random.nextInt(count) + 1
        var it = m.iterator
        var (r,c) = it.next()
        var continue = m.size > 1

        while(continue){
            if(n > c){
                n -= c
                var (r2,c2) = it.next()
                r = r2
                c = c2
            }
            else continue = false
        }
        r
    }

    override def toString() = m.toString()
}

/**
 * Your RandomizedCollection object will be instantiated and called as such:
 * var obj = new RandomizedCollection()
 * var param_1 = obj.insert(`val`)
 * var param_2 = obj.remove(`val`)
 * var param_3 = obj.getRandom()
 */
```