# Hash with a queue

**Author:** sav20011962
**Votes:** 0
**Link:** [https://leetcode.com/problems/max-sum-of-a-pair-with-equal-sum-of-digits/solutions/5754737/](https://leetcode.com/problems/max-sum-of-a-pair-with-equal-sum-of-digits/solutions/5754737/)

---

# Approach
Hash with a queue
# Complexity
![image.png](./images/0.png)
# Code
```var1 []
class Solution {
    fun maximumSum(nums: IntArray): Int {
        val map = mutableMapOf<Int, PriorityQueue<Int>>()
        var max = -1
        fun sum_of_digits(N : Int) : Int {
            var n = N
            var sum = 0
            while (n>0) {
                sum += n % 10
                n /= 10
            }
            return sum
        }
        for (N in nums) {
            val sod = sum_of_digits(N)
            map.computeIfAbsent(sod) { PriorityQueue<Int> { a,b -> b-a} }.add(N)
        }
        for((key, value) in map){
            if (value.size>1) {
                max = Math.max(max,value.poll()+value.poll())
            }
        }
        return max
    }
}
```
```var2 []
class Solution {
    fun maximumSum(nums: IntArray): Int {
        val map = mutableMapOf<Int, Pair<Int,Int>>()
        var rez = -1
        fun sum_of_digits(N : Int) : Int {
            var n = N
            var sum = 0
            while (n>0) {
                sum += n % 10
                n /= 10
            }
            return sum
        }
        for (N in nums) {
            val sod = sum_of_digits(N)
            if (map.containsKey(sod)) {
                val pair = map.getValue(sod)
                val max = maxOf(pair.first,pair.second,N)
                val min = minOf(pair.first,pair.second,N)
                map.put(sod, Pair(max,pair.first xor pair.second xor N xor max xor min))
            }
            else {
                map.put(sod, Pair(N,0))    
            }
        }
        for((key, value) in map){
            // println("Key is $key, value is $value")
            if (value.second!=0) {
                rez = Math.max(rez,value.first+value.second)
            }
        }
        return rez
    }
}
```