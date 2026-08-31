# scala solution

**Author:** urbanclimatefr
**Votes:** 0
**Link:** [https://leetcode.com/problems/design-in-memory-file-system/solutions/4672686/](https://leetcode.com/problems/design-in-memory-file-system/solutions/4672686/)

---

# Code
```
import scala.collection.mutable

class FileSystem() {
  class Item(val isDir: Boolean, val name: String) {
    val children: mutable.Map[String, Item] = mutable.TreeMap[String, Item]()
    var content: String = ""

    override def toString: String = name // Optionally for better debugging
  }

  private val main: Item = new Item(isDir = true, name = "")

  def ls(path: String): List[String] = {
    var actualPath = path.drop(1) // Removes the leading slash

    if (actualPath.isEmpty) return main.children.keys.toList

    val pathItems = actualPath.split("/")
    var currItem = main
    for (itemName <- pathItems) {
      currItem = currItem.children(itemName)
    }

    if (currItem.isDir) currItem.children.keys.toList
    else List(currItem.name)
  }

  def mkdir(path: String): Unit = {
    var actualPath = path.drop(1)
    if (actualPath.isEmpty) return

    val pathItems = actualPath.split("/")
    var currItem = main
    for (itemName <- pathItems) {
      if (!currItem.children.contains(itemName)) {
        currItem.children(itemName) = new Item(isDir = true, name = itemName)
      }
      currItem = currItem.children(itemName)
    }
  }

  def addContentToFile(filePath: String, content: String): Unit = {
    var actualPath = filePath.drop(1)
    if (actualPath.isEmpty) return

    val pathItems = actualPath.split("/")
    val n = pathItems.length
    var currItem = main
    for (i <- pathItems.indices) {
      val itemName = pathItems(i)
      if (i == n - 1) {
        if (!currItem.children.contains(itemName)) {
          currItem.children(itemName) = new Item(isDir = false, name = itemName)
        }
        currItem = currItem.children(itemName)
        currItem.content += content
        return
      }
      if (!currItem.children.contains(itemName)) {
        currItem.children(itemName) = new Item(isDir = true, name = itemName)
      }
      currItem = currItem.children(itemName)
    }
  }

  def readContentFromFile(filePath: String): String = {
    var actualPath = filePath.drop(1)

    val pathItems = actualPath.split("/")
    var currItem = main
    for (itemName <- pathItems) {
      currItem = currItem.children(itemName)
    }
    currItem.content
  }
}

```