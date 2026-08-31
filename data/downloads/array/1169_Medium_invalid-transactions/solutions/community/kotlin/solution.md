# Kotlin 100% (240ms) explained with comments

**Author:** lgsmitty
**Votes:** 1
**Link:** [https://leetcode.com/problems/invalid-transactions/solutions/2665509/](https://leetcode.com/problems/invalid-transactions/solutions/2665509/)

---

***"Fancy algorithms are slow when n is small, and n is usually small."*** [source](https://users.ece.utexas.edu/~adnan/pike.html)

**Pre-processing**: `transactions` will be compared different by values which can be extracted during preprocessing. Original `transaction` string should be preserved to put it into result if it is invalid. 

```
class Tx(val original: String, parts: List<String> = original.split(',')) {
	val name = parts[0]
	val time = parts[1].toInt()
	val amount = parts[2].toInt()
	val city = parts[3]
}
```

**Solution #1** compares each pair of transactions and checks whether any of them becomes invalid

**Time**: O(N^2)
**Space**: O(N)
**Runtime** (ms):  474, 456, 490, 511, 453. 
**Average runtme** (ms): 476

```
class Solution {
    fun invalidTransactions(_ts: Array<String>): List<String> {
        val result = LinkedList<String>()

        class Tx(val original: String, parts: List<String> = original.split(',')) {
            val name = parts[0]
            val time = parts[1].toInt()
            val amount = parts[2].toInt()
            val city = parts[3]
        }

        val ts = _ts.map { Tx(it) }

        for (i in ts.indices) {
            val cur = ts[i]

            if (cur.amount > 1000) {
                result += cur.original
                continue
            }

            for (j in ts.indices) {
                // compare current `transaction` only to other ones 
                if (i == j) continue

                if (ts[j].time >= cur.time - 60 &&
                    ts[j].time <= cur.time + 60 &&
                    cur.name == ts[j].name &&
                    cur.city != ts[j].city
                ) {
                    result += cur.original
                    break
                }
            }
        }

        return result
    }
}
```

**Solution #2** makes use of `TreeMap` to get a `subMap()` by time interval of +/- 60 second from current transaction. In case of random data it will improve performance. Worst case runtime is quadratic.

**Time**: O(N^2)
**Space**: O(N)
**Runtimes** (ms): 521, 523, 281, 547, 287
**Average runtime** (ms): 431

```
class Solution {
    fun invalidTransactions(_ts: Array<String>): List<String> {
        val result = LinkedList<String>()

        class Tx(val original: String, parts: List<String> = original.split(',')) {
            val name = parts[0]
            val time = parts[1].toInt()
            val amount = parts[2].toInt()
            val city = parts[3]
        }

        val ts = _ts.map { Tx(it) }

        // Look up keys are: HashMap<Name: String, TreeMap<Time: Int, HashSet<City>>>
        val citiesByNameAndTime = hashMapOf<String, TreeMap<Int, HashSet<String>>>()

        for (i in ts.indices) {
            citiesByNameAndTime
                .getOrPut(ts[i].name) { TreeMap() }
                .getOrPut(ts[i].time) { HashSet() }
                .add(ts[i].city)
        }

        for (i in ts.indices) {
            val cur = ts[i]

            if (cur.amount > 1000) {
                result += cur.original
                continue
            }

            citiesByNameAndTime[ts[i].name]
                // [time - 60, time + 60] interval 
                ?.subMap(ts[i].time - 60, true, ts[i].time + 60, true)
                ?.let {
                    for ((_, cities) in it) {
                        if (ts[i].city in cities) {
                            if (cities.size > 1) {
                                // current city included but there are others
                                result += ts[i].original
                                break
                            }
                        } else if (cities.isNotEmpty()) {
                            // current city is not included and there are still cities 
                            result += ts[i].original
                            break
                        }
                    }
                }
        }

        return result
    }
}
```

**Solution #3** sorts all transactions by time. After that compares each transaction with others to the left/right while those within 60 seconds interval. It is a simplified version of **Solution #2**.

**Time**: O(N^2)
**Space**: O(N)
**Runtimes** (ms): 500, 496, 279, 503, 283
**Average runtime** (ms): 412

```
class Solution {
    fun invalidTransactions(_ts: Array<String>): List<String> {
        val result = LinkedList<String>()

        class Tx(val original: String, parts: List<String> = original.split(',')) {
            val name = parts[0]
            val time = parts[1].toInt()
            val amount = parts[2].toInt()
            val city = parts[3]
        }

        val ts = _ts.map { Tx(it) }.sortedBy { it.time }

        for (i in ts.indices) {
            val cur = ts[i]
            var good = true

            if (cur.amount > 1000) {
                good = false
            }

            if (good) {
                for (j in i - 1 downTo 0) {
                    if (ts[j].time < ts[i].time - 60) break

                    if (ts[j].name == ts[i].name && ts[j].city != ts[i].city) {
                        good = false
                        break
                    }
                }
            }

            if (good) {
                for (j in i + 1..ts.lastIndex) {
                    if (ts[j].time > ts[i].time + 60) break

                    if (ts[j].name == ts[i].name && ts[j].city != ts[i].city) {
                        good = false
                        break
                    }
                }
            }

            if (!good) {
                result += ts[i].original
            }
        }

        return result
    }
}
```

**Solution #4** makes use of a fact that numbers comparison works faster than strings comparison. Names and cities of transactions are being mapped to integers and compared later. 

**Time**: O(N^2)
**Space**: O(N)
**Runtimes** (ms): 287, 270, 484, 416, 315
**Average runtime** (ms): 354

```
class Solution {
    fun invalidTransactions(_ts: Array<String>): List<String> {
        val stringIds = HashMap<String, Int>(4 * (1 + _ts.size))

        fun stringId(string: String): Int = stringIds.getOrPut(string) { stringIds.size }

        class Tx(val original: String, parts: List<String> = original.split(',')) {
            val name = stringId(parts[0])
            val time = parts[1].toInt()
            val amount = parts[2].toInt()
            val city = stringId(parts[3])
        }

        val ts = _ts.map { Tx(it) }
        val result = LinkedList<String>()

        for (i in ts.indices) {
            val cur = ts[i]

            if (cur.amount > 1000) {
                result += cur.original
                continue
            }

            for (j in ts.indices) {
                if (i == j) continue

                if (ts[j].time >= cur.time - 60 &&
                    ts[j].time <= cur.time + 60 &&
                    cur.name == ts[j].name &&
                    cur.city != ts[j].city
                ) {
                    result += cur.original
                    break
                }
            }
        }

        return result
    }
}
```

**Solution #5** re-orders operations in comparison of transactions so that those which require calculations go last.
**Time**: O(N^2)
**Space**: O(N)
**Runtimes** (ms): 240 (**best time**!), 444, 315, 416, 463
**Average runtime** (ms): 376

```
class Solution {
    fun invalidTransactions(_ts: Array<String>): List<String> {
        val stringIds = HashMap<String, Int>(4 * (1 + _ts.size))

        fun stringId(string: String): Int = stringIds.getOrPut(string) { stringIds.size }

        class Tx(val original: String, parts: List<String> = original.split(',')) {
            val name = stringId(parts[0])
            val time = parts[1].toInt()
            val amount = parts[2].toInt()
            val city = stringId(parts[3])
        }

        val ts = _ts.map { Tx(it) }
        val result = LinkedList<String>()

        for (i in ts.indices) {
            val cur = ts[i]

            if (cur.amount > 1000) {
                result += cur.original
                continue
            }

            for (j in ts.indices) {
                if (i == j) continue

                // name and city compared first 
                if (cur.name == ts[j].name &&
                    cur.city != ts[j].city &&
                    ts[j].time >= cur.time - 60 &&
                    ts[j].time <= cur.time + 60
                ) {
                    result += cur.original
                    break
                }
            }
        }

        return result
    }
}
```

**Solution #6** takes a look at each set of `transactions` with the same name separately. When validating a concrete `transaction`, 2 numbers are being calculated: total number of `transactions` **within time interval** and total number of `translactions` with the **same name** as current `transaction` within time interval. If both numbers matches then all transactions within time interval from the same city and transaction is valid. Overhead of segment tree operations is so big on given test set so that it is the slowest solution out of all but it has best theoretical time complexity. 
**Time**: O(N log N)
**Space**: O(N^2)
**Runtimes** (ms): 545, 553, 594, 569, 593
**Average runtime** (ms): 571

```
class Solution {
    fun invalidTransactions(_ts: Array<String>): List<String> {
        val stringIds = HashMap<String, Int>(4 * (1 + _ts.size))

        fun stringId(string: String): Int =
            stringIds.getOrPut(string) { stringIds.size }

        class Tx(val original: String, parts: List<String> = original.split(',')) {
            val name = parts[0]
            val time = parts[1].toInt()
            val amount = parts[2].toInt()
            val city = stringId(parts[3])
        }

        val ts = _ts.map { Tx(it) }

        // segment tree for each name no matter what city it is
        val segmentTreeByName = HashMap<String, IntArray>()
        // segment tree for each name and city
        val segmentTreeByNameAndCity = HashMap<String, HashMap<Int, IntArray>>()
        val timeSize = 2 + (ts.maxBy { it.time }?.time ?: 0)

        fun incrementNumberOfCities(name: String, _time: Int, city: Int) {
            var tree = segmentTreeByName.getOrPut(name) { IntArray(timeSize + timeSize) }
            var time = timeSize + _time
            while (time > 1) {
                ++tree[time]
                tree[time ushr 1] = tree[time] + tree[time xor 1]
                time = time ushr 1
            }

            tree = segmentTreeByNameAndCity
                .getOrPut(name) { HashMap() }
                .getOrPut(city) { IntArray(timeSize + timeSize) }

            time = timeSize + _time
            while (time > 1) {
                ++tree[time]
                tree[time ushr 1] = tree[time] + tree[time xor 1]
                time = time ushr 1
            }
        }

        fun onlyCitiesWithTheSameName(name: String, city: Int, _startTime: Int, _endTime: Int): Boolean {
            var tree = segmentTreeByName[name]!!
            var l = timeSize + (_startTime).coerceIn(0, timeSize - 1)
            var r = timeSize + (_endTime + 1).coerceIn(0, timeSize - 1)
            var result0 = 0

            while (l < r) {
                if ((l and 1) != 0) {
                    result0 += tree[l++]
                }
                if ((r and 1) != 0) {
                    result0 += tree[--r]
                }

                l = l ushr 1
                r = r ushr 1
            }

            tree = segmentTreeByNameAndCity[name]!![city]!!
            l = timeSize + (_startTime).coerceIn(0, timeSize - 1)
            r = timeSize + (_endTime + 1).coerceIn(0, timeSize - 1)
            var result1 = 0

            while (l < r) {
                if ((l and 1) != 0) {
                    result1 += tree[l++]
                }
                if ((r and 1) != 0) {
                    result1 += tree[--r]
                }

                l = l ushr 1
                r = r ushr 1
            }

            return result0 == result1
        }

        for (i in ts.indices) {
            incrementNumberOfCities(ts[i].name, ts[i].time, ts[i].city)
        }

        val result = LinkedList<String>()

        for (i in ts.indices) {
            val cur = ts[i]

            if (cur.amount > 1000) {
                result += cur.original
                continue
            }

            val good = onlyCitiesWithTheSameName(ts[i].name, ts[i].city, ts[i].time - 60, ts[i].time + 60)
            if (!good) {
                result += cur.original
                continue
            }
        }

        return result
    }
}
```

Set of optimizations from all soluitions above can be applied to improve performance from technical point of view rather than from theoretical time complexity. Have a good day!