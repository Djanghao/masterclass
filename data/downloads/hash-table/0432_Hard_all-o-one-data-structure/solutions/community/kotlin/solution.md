# Kotlin O(1) doubly linked list and hashmap

**Author:** james4388
**Votes:** 1
**Link:** [https://leetcode.com/problems/all-oone-data-structure/solutions/5827058/](https://leetcode.com/problems/all-oone-data-structure/solutions/5827058/)

---

```
data class Bucket(val count: Int, var prev: Bucket? = null, var next: Bucket? = null) {
    var keys: MutableSet<String> = mutableSetOf()
}


class AllOne() {
    val buckets = mutableMapOf<String, Bucket>()
    var head: Bucket? = null
    var tail: Bucket? = null
    
    fun cleanUpBucket(bucket: Bucket) {
        if (head == null || tail == null || bucket.keys.isNotEmpty()) {
            return 
        }
        if (bucket == head) {
            head = head!!.next
        }
        if (bucket == tail) {
            tail = tail!!.prev
        }
        val prevBucket = bucket.prev
        val nextBucket = bucket.next
        if (prevBucket != null) {
            prevBucket.next = nextBucket
        }
        if (nextBucket != null) {
            nextBucket.prev = prevBucket
        }
    }
    
    fun inc(key: String) {
        if (key !in buckets) {
            if (head == null || head!!.count > 1) {
                head = Bucket(1, next=head)
                if (head!!.next != null) {
                    head!!.next!!.prev = head
                }
            }
            head!!.keys.add(key)
            buckets[key] = head!!
            if (tail == null) {
                tail = head
            }
        } else {
            val oldBucket = buckets[key]!!
            val nextCount = oldBucket.count + 1
            oldBucket.keys.remove(key)
            var newBucket: Bucket
            if (oldBucket.next != null && oldBucket.next!!.count == nextCount) {
                newBucket = oldBucket.next!!
            } else {
                newBucket = Bucket(nextCount, prev=oldBucket, next=oldBucket.next)
                oldBucket.next = newBucket
                if (newBucket.next != null) {
                    newBucket.prev = newBucket
                }
            }
            if (tail!!.count < newBucket.count) {
                tail = newBucket
            }
            newBucket.keys.add(key)
            buckets[key] = newBucket
            cleanUpBucket(oldBucket)
        }
    }

    fun dec(key: String) {
        if (key !in buckets) {
            return
        }
        val oldBucket = buckets[key]!!
        val prevCount = oldBucket.count - 1
        oldBucket.keys.remove(key)
        if (prevCount == 0) {
            buckets.remove(key)
            cleanUpBucket(oldBucket)
            return
        }
        var newBucket: Bucket
        if (oldBucket.prev != null && oldBucket.prev!!.count == prevCount) {
            newBucket = oldBucket.prev!!
        } else {
            newBucket = Bucket(prevCount, oldBucket.prev, oldBucket)
            oldBucket.prev = newBucket
            if (newBucket.prev != null) {
                newBucket.prev!!.next = newBucket
            }
        }
        if (head!!.count > newBucket.count) {
            head = newBucket
        }
        newBucket.keys.add(key)
        buckets[key] = newBucket
        cleanUpBucket(oldBucket)
    }

    fun getMaxKey(): String {
        if (tail == null || tail!!.keys.isEmpty()) {
            return ""
        }
        return tail!!.keys.first()
    }

    fun getMinKey(): String {
        if (head == null || head!!.keys.isEmpty()) {
            return ""
        }
        return head!!.keys.first()
    }

}

/**
 * Your AllOne object will be instantiated and called as such:
 * var obj = AllOne()
 * obj.inc(key)
 * obj.dec(key)
 * var param_3 = obj.getMaxKey()
 * var param_4 = obj.getMinKey()
 */
 ```