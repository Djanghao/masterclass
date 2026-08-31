# Clean code - Using HashMap + LinkedHashSet

**Author:** freeze_francis
**Votes:** 3
**Link:** [https://leetcode.com/problems/lfu-cache/solutions/3112803/](https://leetcode.com/problems/lfu-cache/solutions/3112803/)

---

# Github with testcases
https://github.com/Freeze777/SDE-Interviewer-Notes/blob/main/LeetCodeKotlin/src/main/kotlin/leetcode/hard/design/LFUCache.kt

# Code
```
class LFUCache(private val capacity: Int) {
    private val keyValueStore = HashMap<Int, Int>()
    private val keyUsageCount = HashMap<Int, Int>()
    private val usageCountToKeysLookup = HashMap<Int, LinkedHashSet<Int>>()
    private var minUsageCount = 1

    fun get(key: Int): Int {
        if (capacity == 0 || !keyValueStore.containsKey(key)) return -1
        updateKeyUsage(key)
        return keyValueStore[key]!!
    }

    fun put(key: Int, value: Int) {
        if (capacity == 0) return
        if (keyValueStore.containsKey(key)) {
            updateKeyUsage(key)
            keyValueStore[key] = value
            return
        }
        if (keyValueStore.size == capacity) evictLeastFrequentlyUsed()
        addNewKeyValue(key, value)
    }

    private fun evictLeastFrequentlyUsed() {
        val candidateKeys = usageCountToKeysLookup[minUsageCount]!!
        val evictedKey = candidateKeys.first()//lru
        candidateKeys.remove(evictedKey)
        keyValueStore.remove(evictedKey)
        keyUsageCount.remove(evictedKey)
    }

    private fun updateKeyUsage(key: Int) {
        val prevCount = keyUsageCount[key]!!
        val nextCount = prevCount + 1
        val keys = usageCountToKeysLookup[prevCount]!!
        keys.remove(key)
        if (minUsageCount == prevCount && keys.isEmpty()) minUsageCount = nextCount
        keyUsageCount[key] = nextCount
        usageCountToKeysLookup.computeIfAbsent(nextCount) { LinkedHashSet() }.add(key)
    }

    private fun addNewKeyValue(key: Int, value: Int) {
        minUsageCount = 1
        keyUsageCount[key] = 1
        usageCountToKeysLookup.computeIfAbsent(1) { LinkedHashSet() }.add(key)
        keyValueStore[key] = value
    }

    fun printState() {
        println("keyValueStore: $keyValueStore,keyUsageCount: $keyUsageCount,usageCountToKeysLookup: $usageCountToKeysLookup,minCount: $minUsageCount")
    }
}
```

![upvote_meme.jpeg](./images/0.jpeg)
