# Simple Kotlin Solution

**Author:** justherefortesting
**Votes:** 0
**Link:** [https://leetcode.com/problems/design-a-text-editor/solutions/4486039/](https://leetcode.com/problems/design-a-text-editor/solutions/4486039/)

---

Simple Kotlin Solution

# Code
```
class TextEditor() {

    var fakeHead: Node? = null
    var fakeTail: Node? = null
    var cursor: Node? = null

    init {
        fakeHead = Node('1', null, null)
        fakeTail = Node('9', null, null)
        cursor = fakeHead
        fakeHead?.next = fakeTail
        fakeTail?.prev = fakeHead
    }
    
    fun addText(text: String) {
        for(c in text) {
            var node = Node(c, cursor?.next, cursor)
            cursor?.next?.prev = node
            cursor?.next = node
            cursor = node
        }
    }

    fun deleteText(k: Int): Int {
        var x = k
        while(x > 0 && cursor != fakeHead) {
            cursor?.prev?.next = cursor?.next
            cursor?.next?.prev = cursor?.prev
            cursor = cursor?.prev
            x--
        }
        return k-x;
    }

    fun cursorLeft(k: Int): String {
        var i = k
        while(i > 0 && cursor != fakeHead) {
            cursor = cursor?.prev
            i--
        }
        return printLeftString(cursor)
    }

    fun cursorRight(k: Int): String {
        var i = k
        while(i > 0 && cursor != fakeTail) {
            cursor = cursor?.next
            i--
        }
        if(cursor == fakeTail) {
            cursor = fakeTail?.prev
        }
        return printLeftString(cursor)
    }

    private fun printLeftString(temp: Node?): String {
        var i = 0
        var sb = StringBuffer()
        var tmp = temp

        while(i < 10 && tmp != fakeHead) {
            sb.append(Character.toString(tmp?.chr!!))
            tmp = tmp?.prev
            i++
        }
        return sb.reverse().toString()
    }
}

data class Node(
        var chr: Char?,
        var next: Node?,
        var prev: Node?)

/**
 * Your TextEditor object will be instantiated and called as such:
 * var obj = TextEditor()
 * obj.addText(text)
 * var param_2 = obj.deleteText(k)
 * var param_3 = obj.cursorLeft(k)
 * var param_4 = obj.cursorRight(k)
 */
```