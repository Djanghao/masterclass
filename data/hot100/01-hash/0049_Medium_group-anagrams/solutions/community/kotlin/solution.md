# A trick that wasn't obvious

**Author:** max0ugh
**Votes:** 8
**Link:** [https://leetcode.com/problems/group-anagrams/solutions/3417484/](https://leetcode.com/problems/group-anagrams/solutions/3417484/)

---

# Intro
Since most probably you've already discovered a proper intuition for the task I'd like to highlight & describe a trick that other Java/Kotlin solutions used but none of found ones described it. Maybe it wasn't obvious not only for me.

# The problem
As in other optimal solutions we're going **to group `strs` in a map by a key that is count of letter entries in every string**. The key is intialized with 26 zeros.
For example, str: `cabb` would have key: `12100...0`. 

But one of Leetcode cases fails with such approach. Because **something goes wrong if a letter entiries count in a str is >= 10**. I mean:
`cabbbbbbbbbb` gets key `110100...0`.
`dab` gets `110100...0` too.

For sure, it's possible to build a key using a delimeter.
Then `cabbbbbbbbbb` gets key `1,10,1,0,0,...,0`
and `dab` \u2013 `1,1,0,1,0,0,...,0`.

```
class Solution {
    fun groupAnagrams(strs: Array<String>): List<List<String>> {
        val map = mutableMapOf<String, MutableList<String>>()
        for (str in strs){
            val key = buildKey(str)
            if(map.contains(key)){
                map[key]!!.add(str)
            } else {
                map[key] = mutableListOf(str)
            }
        }
        return map.values.toList()
    }

    fun buildKey(str: String): String {
        val arr = IntArray(26,{0})
        for (ch in str){
            arr[ch - 'a']++
        }
        return arr.map{it.toString()}.reduce { acc, s -> acc+","+s }
    }
}
```

But such approach, especially in Kotlin, has surprisingly low performance. It beats only ~45% of submissions. Even it's complexity is O(m*n).
Also impling to a real coding task it does a lot of unnecessary work: mapping, reducing, concating & etc. 

# The trick
So how can the count up to 100(the max length of a `str` in `strs`) can be stored in one single symbol?
We can encode **count of every char in str by another char** \uD83E\uDD2F
- `a` as count means `0`
- `b -> 1`
- `c -> 2` and so on

E.g. the key for str `aabbbcc` would be `bcbaa...a`

# Code
```
class Solution {
    fun groupAnagrams(strs: Array<String>): List<List<String>> {
        val map = mutableMapOf<String, MutableList<String>>()
        for (str in strs){
            val key = buildKey(str)
            if(map.contains(key)){
                map[key]!!.add(str)
            } else {
                map[key] = mutableListOf(str)
            }
        }
        return map.values.toList()
    }

    fun buildKey(str: String): String {
        val arr = CharArray(26,{'a'})
        for (ch in str){
            arr[ch - 'a']++
        }
        return String(arr)
    }
}
```
The latter solution beats ~97% of submission and is much more elegant too.

Hope it was helpful!