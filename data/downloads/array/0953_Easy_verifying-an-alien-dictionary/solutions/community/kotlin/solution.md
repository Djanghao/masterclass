# Kotlin: Alien comparator

**Author:** dzmtr
**Votes:** 1
**Link:** [https://leetcode.com/problems/verifying-an-alien-dictionary/solutions/3133861/](https://leetcode.com/problems/verifying-an-alien-dictionary/solutions/3133861/)

---

Sort words and then compare if sorted and given words are the same.

How to sort? 
`To sort the list we can create comparator.`

Comparator
- Skip the same letters until reach different one or some of the words is shorter than other.
- Check: 
In the ascending order first word should be shorter or it's char that differ from second should have index lesser.
If they both have same lenght -> eqauls
Otherwise, if first if longe or it has it's char index greater -> they are in descending order.


Then we check:


# Code
```
class Solution {
    fun isAlienSorted(words: Array<String>, order: String): Boolean {
        return words.sortedWith(alienComparator(order)) == words.toList()
    }

private fun alienComparator(alphabet: String): Comparator<String> {
    val newOrder = alphabet.mapIndexed { index, char -> char to index }.toMap()
    return Comparator { s2: String, s1: String ->
        val (len1, len2) = s1.length to s2.length
        var i = 0
        while((i < len1) && (i < len2) && (newOrder.getValue(s1[i]) == newOrder.getValue(s2[i]))) {
            i++
        }

        when {
            (i == len2 && i < len1)               -> -1
            (i < len2 && i == len1)               ->  1
            (i == len1 && i == len2)              ->  0
            (i < len2 && i < len1) && newOrder.getValue(s1[i]) < newOrder.getValue(s2[i]) -> 1
            (i < len2 && i < len1) && newOrder.getValue(s1[i]) > newOrder.getValue(s2[i]) -> -1
            else                                  ->  0
        }
    }
}
}
```