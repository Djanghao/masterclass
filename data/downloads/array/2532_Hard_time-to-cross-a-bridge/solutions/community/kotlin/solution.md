# Kotlin + 4 heaps

**Author:** c4tdog
**Votes:** 1
**Link:** [https://leetcode.com/problems/time-to-cross-a-bridge/solutions/3595535/](https://leetcode.com/problems/time-to-cross-a-bridge/solutions/3595535/)

---


# Code
```
class Solution {
    fun findCrossingTime(n: Int, k: Int, time: Array<IntArray>): Int {
        val comp = compareByDescending { it: IntArray -> it[0] }.thenByDescending { it: IntArray -> it[1] }
        val comp2 = compareBy { it: IntArray -> it[0] }.thenByDescending { it: IntArray -> it[1] }
        val lw = PriorityQueue<IntArray>(comp) // waiting queue: effectiveness + worker index
        val rw = PriorityQueue<IntArray>(comp)
        val lp = PriorityQueue<IntArray>(comp2) // processing queue: time when ready + worker index
        val rp = PriorityQueue<IntArray>(comp2)
        var res = 0

        // place all workers on the left side
        for (i in 0..time.size - 1) {
            val t = time[i]
            val a = IntArray(2, { 0 })
            a[0] = t[0] + t[2]
            a[1] = i
            lw.add(a)
        }

        var b = n // boxes left
        var t = 0 // current time
        while (true) {
            if (b == 0 && rw.size == 0 && rp.size == 0) break
            if ((lw.size > 0 && b > 0) || rw.size > 0) {
                if (rw.size > 0) {
                    // send a worker back to left side
                    val w = rw.poll() // worker
                    t += time[w[1]][2]
                    
                    w[0] = t + time[w[1]][3] // will be ready again at this time
                    lp.add(w)
                } else {
                    // send a new one from the left if needed
                    if (b > 0 && lw.size > 0) {
                        val w = lw.poll()
                        t += time[w[1]][0]

                        w[0] = t + time[w[1]][1] // will be ready to get back at this time
                        rp.add(w)
                        b--
                    }
                }
                checkIfReady(lw, rw, lp, rp, t, time)

                continue
            }

            // if all workers are busy wait until processed
            val t1 = if (lp.size > 0) lp.peek()[0] else Int.MAX_VALUE
            val t2 = if (rp.size > 0) rp.peek()[0] else Int.MAX_VALUE
            t = Math.min(t1, t2)

            checkIfReady(lw, rw, lp, rp, t, time)
        }

        return t
    }

    fun checkIfReady(lw: PriorityQueue<IntArray>,
            rw: PriorityQueue<IntArray>,
            lp: PriorityQueue<IntArray>,
            rp: PriorityQueue<IntArray>,
            t: Int,
            time: Array<IntArray>) {
        while (true) {
            if (lp.size == 0) break
            if (lp.peek()[0] > t) break
            val w = lp.poll()
            val i = w[1] // index
            w[0] = time[i][0] + time[i][2]
            lw.add(w)
        }

        while (true) {
            if (rp.size == 0) break
            if (rp.peek()[0] > t) break
            val w = rp.poll()
            val i = w[1] // index
            w[0] = time[i][0] + time[i][2]
            rw.add(w)
        }
    }
}
```