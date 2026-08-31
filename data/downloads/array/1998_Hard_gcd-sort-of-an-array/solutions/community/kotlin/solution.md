# Kotlin solution using sieve

**Author:** neo204
**Votes:** 0
**Link:** [https://leetcode.com/problems/gcd-sort-of-an-array/solutions/2042183/](https://leetcode.com/problems/gcd-sort-of-an-array/solutions/2042183/)

---

```

// dsu: union find data structure disjoint union set
class dsu(n: Int) {
    val size: IntArray
    val arr: IntArray

    init{
        size = IntArray(n){1}
        arr = IntArray(n){it}
    }

    fun root(idx: Int): Int {
        var i = idx
        while (arr[i] != i) {
            arr[i] = arr[arr[i]]
            i = arr[i]
        }
        return i
    }

    fun union(a: Int, b: Int) {
        val rootA = root(a)
        val rootB = root(b)
        if(rootA==rootB) {
            return
        } else if(size[rootA]<size[rootB]) {
            arr[rootA] = rootB
            size[rootB] += size[rootA]
            size[rootA] = 0
        } else {
            arr[rootB] = rootA
            size[rootA] += size[rootB]
            size[rootB] = 0
        }
    }
}

class Solution {
    private val n = 100005

    private lateinit var unionSet: dsu

    fun gcdSort(nums: IntArray): Boolean {
        val mp = BooleanArray(n){false}
        // mark the nos which are present
        nums.forEach { mp[it] = true }
        // create a sorted copy for future comparison
        val sortedNums = nums.copyOf()
        sortedNums.sort()
        // run sieve through nums to create the dsu
        sieve(mp)
        nums.forEachIndexed { i,num ->
            if(sortedNums[i]!=num && unionSet.root(sortedNums[i])!=unionSet.root(num))
                return false
        }
        return true
    }

    // uses sieve method of finding prime
    private fun sieve(mp: BooleanArray) {
        val prime = BooleanArray(n){true}
        unionSet = dsu(n)
        for(i in 2 until n) {
            if(prime[i]) {
                for(j in i*2 until n step i) {
                    prime[j] = false
                    if(mp[j]){
					// we are connecting the numbers whose gcd >1 and are present in nums
                        unionSet.union(i,j)
                    }
                }
            }
        }
    }
}
```