# Kotlin - DFS with Trie

**Author:** idiotleon
**Votes:** 1
**Link:** [https://leetcode.com/problems/palindrome-pairs/solutions/1270028/](https://leetcode.com/problems/palindrome-pairs/solutions/1270028/)

---

```
/**
 * https://leetcode.com/problems/palindrome-pairs/
 *
 * Time Complexity:     O(`nWords` * (ave_len_word ^ 2))
 * Space Complexity:    O(`nWords` * ave_len_word)
 *
 * Reference:
 *  https://leetcode.com/problems/palindrome-pairs/discuss/79195/O(n-*-k2)-java-solution-with-Trie-structure
 */
class Solution {
    fun palindromePairs(words: Array<String>): List<List<Int>> {
        val ans = mutableListOf<List<Int>>()
        
        val root = TrieNode()
        
        for(idx in words.indices){
            addWord(root, words[idx], idx)
        }
        
        for(idx in words.indices){
            search(idx, root, words, ans)
        }
        
        return ans
    }
    
    private fun search(idxCurWord: Int, root: TrieNode, words: Array<String>, res: MutableList<List<Int>>){
        var cur: TrieNode? = root
        
        val curWord = words[idxCurWord]
        val lenW = curWord.length

        for(idxCh in curWord.indices){
            if(cur!!.index >= 0 && cur.index != idxCurWord && isPalindrome(curWord, idxCh, lenW - 1))
                res.add(listOf(idxCurWord, cur.index))
                
            cur = cur.children[curWord[idxCh] - 'a']
            if(cur == null)
                return
        }
        
        for(idxPalin in cur!!.panlinIndicies){
            if(idxPalin == idxCurWord) continue
            res.add(listOf(idxCurWord, idxPalin))
        }
    }
    
    private fun addWord(root: TrieNode, word: String, index: Int){
        var cur: TrieNode? = root
        
        for(idx in word.indices.reversed()){
            val idxCh = word[idx] - 'a'
            
            if(cur!!.children[idxCh] == null)
                cur.children[idxCh] = TrieNode()
                
            if(isPalindrome(word, 0, idx))
                cur.panlinIndicies.add(index)
                
            cur = cur.children[idxCh]
        }
        
        cur!!.panlinIndicies.add(index)
        cur.index = index
    }
    
    private fun isPalindrome(word: String, lo: Int, hi: Int): Boolean{
        var lo = lo
        var hi = hi
        
        while(lo < hi){
            if(word[lo] != word[hi])
                return false
            
            ++lo
            --hi
        }
        
        return true
    }
    
    private data class TrieNode(
        val children: Array<TrieNode?> = Array<TrieNode?>(26){ null },
        var index: Int = -1,
        val panlinIndicies: MutableList<Int> = mutableListOf<Int>()
    )
}
```