# Simple and Readable Kotlin Code

**Author:** FastTurtle97
**Votes:** 0
**Link:** [https://leetcode.com/problems/design-in-memory-file-system/solutions/5579980/](https://leetcode.com/problems/design-in-memory-file-system/solutions/5579980/)

---


# Code
```
class FileSystem {
    data class File(
        var content: String? = null,
        val children: TreeMap<String, File> = TreeMap()
    )

    val root: File = File()

    private fun getFileFromPath(curFile: File, dirs: List<String>, index: Int, create: Boolean): File {
        if (index == dirs.size) {
            return curFile
        }
        val nextFile = dirs[index]
        val nextPath = if (create) curFile.children.computeIfAbsent(nextFile) { File() } else curFile.children[nextFile]
        return getFileFromPath(nextPath!!, dirs, index + 1, create)
    }

    private fun getFileWithCreate(path: String, create: Boolean = false): File {
        val dirs = path.split('/').filter { it.isNotEmpty() }
        return if (dirs.isEmpty()) root else getFileFromPath(root, dirs, 0, create)
    }

    fun ls(path: String): List<String> {
        val file = getFileWithCreate(path)
        return if (file.content != null) {
            listOf(path.split('/').last())
        } else {
            file.children.keys.toList()
        }
    }

    fun mkdir(path: String) {
        getFileWithCreate(path, true)
    }

    fun addContentToFile(filePath: String, content: String) {
        val dirs = filePath.split('/').filter { it.isNotEmpty() }
        val parentPath = dirs.dropLast(1)
        val fileName = dirs.last()

        val parentDir = if (parentPath.isEmpty()) root else getFileFromPath(root, parentPath, 0, true)
        val file = parentDir.children.computeIfAbsent(fileName) { File() }
        file.content = (file.content ?: "") + content
    }

    fun readContentFromFile(filePath: String): String {
        val file = getFileWithCreate(filePath)
        return file.content ?: ""
    }
}

```