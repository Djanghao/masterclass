# Functional Solution

**Author:** cachemiss
**Votes:** 0
**Link:** [https://leetcode.com/problems/design-search-autocomplete-system/solutions/5950187/](https://leetcode.com/problems/design-search-autocomplete-system/solutions/5950187/)

---

```scala []
class AutocompleteSystem(_sentences: Array[String], _times: Array[Int]) {

    private final case class Suggestion(text: String, times: Int)
    private final case class Node(char: Char, var suggestion: Option[Suggestion], var children: List[Node])

    @scala.annotation.tailrec
    private def insertWord(node: Node, wordIndex: Int, nodeIndex: Int): Unit = {
        val word = _sentences(wordIndex)
        if nodeIndex == word.length then return
        val wordChar = word(nodeIndex)
        node.children.find(_.char == wordChar) match {
            case Some(child) if nodeIndex == word.length - 1 =>
                val newNode = child.copy(suggestion=Some(Suggestion(word, _times(wordIndex))))
                node.children = newNode :: node.children.filter(_ != child)
            case Some(child) => insertWord(child, wordIndex, nodeIndex + 1)
            case None =>
                val maybeSuggestion = Option.when(nodeIndex == word.length - 1){Suggestion(word, _times(wordIndex))}
                val newNode = Node(wordChar, maybeSuggestion, List.empty)
                node.children = newNode :: node.children
                insertWord(newNode, wordIndex, nodeIndex + 1)
        }
    } 

    private lazy val root = {
        val r = Node('-', None, List.empty)
        _sentences.view.indices.foreach{index => insertWord(r, index, 0)}
        r
    }

    private var pointer: Node = root
    private val newInputText: StringBuffer = new StringBuffer()

    def input(c: Char): List[String] = {
        def process(node: Node): List[Suggestion] = {
            node match {
                case Node(_, Some(suggestion), children) =>
                    suggestion :: children.flatMap(process)
                case Node(_, None, children) => children.flatMap(process)
            }
        }

        c match {
            case '#' =>
                pointer.suggestion = pointer.suggestion
                .map(s => s.copy(times=s.times + 1))
                .orElse{Some(Suggestion(newInputText.toString, 1))}
                pointer = root
                newInputText.setLength(0)
                List.empty
            case _ =>
                newInputText.append(c)
                pointer.children.find(_.char == c) match {
                    case Some(child) => 
                        val suggestions = process(child)
                        .sortBy{s => (- s.times, s.text)}
                        .take(3)
                        .map(_.text)
                        pointer = child
                        suggestions
                    case None =>
                        val newNode = Node(c, None, List.empty)
                        pointer.children = newNode :: pointer.children
                        pointer = newNode
                        List.empty
                }
        }
    }

}
```