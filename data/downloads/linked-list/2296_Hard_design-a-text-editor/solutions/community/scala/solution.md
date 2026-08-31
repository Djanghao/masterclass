# Scala 2 Vectors O(k)

**Author:** maxmtmn
**Votes:** 0
**Link:** [https://leetcode.com/problems/design-a-text-editor/solutions/2786934/](https://leetcode.com/problems/design-a-text-editor/solutions/2786934/)

---

https://www.scala-lang.org/api/2.13.4/scala/collection/immutable/Vector.html

Vector is a general-purpose, immutable data structure. It provides random access and updates in O(log n) time, as well as very fast append/prepend/tail/init (amortized O(1), worst case O(log n)). Because vectors strike a good balance between fast random selections and fast random functional updates, they are currently the default implementation of immutable indexed sequences.

We can keep vector 1 representing left side from the cursor and vector 2 representing right side from the cursor. All operations that we are going to do are append/prepend/tail/init have amortized complexity O(1)

```
class TextEditor() {
    
    private var left = Vector[Char]()
    private var right = Vector[Char]()

    def addText(text: String) {
        left = text.foldLeft(left) {
            case (left, char) => left.appended(char)
        }
    }

    def deleteText(k: Int): Int = {
        val numCharsToRemove = (k min left.length)
        left = (0 until numCharsToRemove).foldLeft(left) {
            case (buf,_) => buf.init
        }
        numCharsToRemove
    }

    def cursorLeft(k: Int): String = {
        // move chars from left's end to beggining of right
        (0 until (k min left.length)).foreach {
            _ =>
                right = right.prepended(left.last)
                left = left.init
        }
        lastTen()
    }

    def cursorRight(k: Int): String = {
        // move chars from rights's beggining to left's end
        (0 until (k min right.length)).foreach {
            _ =>
                left = left.appended(right.head)
                right = right.tail
        }
        lastTen()
    }
    
    private def lastTen(): String = {
        (0 until (10 min left.length)).foldLeft((List.empty[Char],left)) {
            case ((list, buf),_) => 
                (buf.last :: list, buf.init)
        }._1.mkString
    }

}

/**
 * Your TextEditor object will be instantiated and called as such:
 * var obj = new TextEditor()
 * obj.addText(text)
 * var param_2 = obj.deleteText(k)
 * var param_3 = obj.cursorLeft(k)
 * var param_4 = obj.cursorRight(k)
 */
```