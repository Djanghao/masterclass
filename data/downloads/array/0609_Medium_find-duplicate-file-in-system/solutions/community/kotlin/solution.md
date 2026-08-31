# Kotlin HashMap

**Author:** rempel
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-duplicate-file-in-system/solutions/447218/](https://leetcode.com/problems/find-duplicate-file-in-system/solutions/447218/)

---

```
fun findDuplicate(paths: Array<String>): List<List<String>> {

    val filesByContent = mutableMapOf<String, MutableList<String>>()

    paths.forEach {
        val lineSplit = it.split(" ")
        val dir = lineSplit[0]

        for (i in 1..lineSplit.lastIndex) {
            val fileAndContents = lineSplit[i].split("(")
            val contents = fileAndContents[1].replace(")", "")
            val fileName = fileAndContents[0]

            if (filesByContent.containsKey(contents)) {
                filesByContent[contents]!!.add("$dir/${fileName}")
            } else {
                filesByContent[contents] = mutableListOf(("$dir/${fileName}"))
            }
        }
    }

    val result = mutableListOf<MutableList<String>>()
    filesByContent.forEach { (key, v) ->
        if (v.size > 1) result.add(v)
    }

    return result
}
```