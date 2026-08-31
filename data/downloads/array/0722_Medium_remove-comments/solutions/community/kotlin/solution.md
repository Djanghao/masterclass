# Kotlin using When

**Author:** bergjak
**Votes:** 1
**Link:** [https://leetcode.com/problems/remove-comments/solutions/2106874/](https://leetcode.com/problems/remove-comments/solutions/2106874/)

---

```
class Solution {
    fun removeComments(source: Array<String>): List<String> {
        val blocks_removed = MutableList<MutableList<Char>>(1) {MutableList(0) {'0'}}
        var j: Int
        var do_a_break: Boolean = false
        var in_comment: Boolean = false
        var window: String
        
        for (row in source) {
            j = 0; do_a_break = false
            
            while (j < row.length) {
                if (j + 1 < row.length) window = row.substring(j, j+2) else window = ""
                
                if (!in_comment) {
                    when(window) {
                        "/*" -> { in_comment = true; j++ }
                        "//" -> do_a_break = true
                        else -> blocks_removed.last().add(row[j])
                    }
                }
                
                else if (window == "*/") {
                    in_comment = false
                    j++
                }
                
                if (do_a_break) break
                j++
            }
            if (!in_comment) blocks_removed.add(MutableList(0) {'0'})
        }
        
        val modified_source = MutableList(0) {"0"}
        for (i in 0 until blocks_removed.size) {
            val sentence = blocks_removed[i].joinToString(separator = "")
            if (sentence.length > 0) modified_source.add(sentence)
        }
        
        return modified_source
    }
}```