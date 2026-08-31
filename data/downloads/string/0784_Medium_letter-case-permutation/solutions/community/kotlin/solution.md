# Kotlin recursive, beats 70%

**Author:** Grelkin
**Votes:** 1
**Link:** [https://leetcode.com/problems/letter-case-permutation/solutions/1898795/](https://leetcode.com/problems/letter-case-permutation/solutions/1898795/)

---

fun letterCasePermutation(s: String): List<String> {

    val size = s.length
    val resList = mutableListOf<String>()

    resList.add(s)

    fun iter(ind: Int, str: String) {
        if (ind >= size) return

        val array = str.toCharArray()
        val char = array[ind]

        if (char.isLetter()) {
            if (char.isLowerCase()) {
                array[ind] = char.toUpperCase()
            } else {
                array[ind] = char.toLowerCase()
            }
            val joined = String(array)
            resList.add(joined)
            iter(ind+1, joined)
        }
        iter(ind+1, str)
    }

    iter(0, s)

    return resList
}