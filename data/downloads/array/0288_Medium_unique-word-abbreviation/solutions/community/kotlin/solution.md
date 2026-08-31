# With HashMap

**Author:** usernamectrlc
**Votes:** 0
**Link:** [https://leetcode.com/problems/unique-word-abbreviation/solutions/4278066/](https://leetcode.com/problems/unique-word-abbreviation/solutions/4278066/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class ValidWordAbbr(private val dictionary: Array<String>) {

    private val map = HashMap<String, MutableList<String>>()

    init{
        dictionary.forEach{
            helper(it)
        }
    }

    fun isUnique(word: String): Boolean {
        if( map.containsValue(listOf((word)))) return true 

        if( !map.containsKey(abbreviateWord(word))) return true 

        return false
   
    }

    fun helper(word: String){

        if( word.length <= 2){
            map.getOrPut(word) {mutableListOf<String>()}.add(word)
        } else{
            map.getOrPut(abbreviateWord(word)) {mutableListOf<String>()}.add(word)
        } 
    }
    fun abbreviateWord(word: String) = "" + word.first() + (word.length - 2) + word.last()

}

/**
 * Your ValidWordAbbr object will be instantiated and called as such:
 * var obj = ValidWordAbbr(dictionary)
 * var param_1 = obj.isUnique(word)
 */
```