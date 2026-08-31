# PHP code with bfs and dfs

**Author:** hailong
**Votes:** 0
**Link:** [https://leetcode.com/problems/word-ladder-ii/solutions/941322/](https://leetcode.com/problems/word-ladder-ii/solutions/941322/)

---

```
class Solution {

    /**
     * @param String $beginWord
     * @param String $endWord
     * @param String[] $wordList
     * @return String[][]
     */
    function findLadders($beginWord, $endWord, $wordList) {
        if (!in_array($endWord, $wordList)) {
            return [];
        }
        
        $wordList[] = $beginWord;
        $wordListDict = array_flip($wordList);

        $bfsAdjacencyMatrix = [];
        $queue = new SplQueue;
        $visited = [];

        $queue->enqueue($beginWord);
        $visited[$beginWord] = 0;
        $alphabets = range('a', 'z');
        
        while (!$queue->isEmpty()) {
            $word = $queue->dequeue();

            foreach ($this->findAdjacentWords($word, $wordListDict, $alphabets) as $adjacentWord) {
                if (!isset($visited[$adjacentWord]) || $visited[$adjacentWord] == $visited[$word] + 1) {
                    if (!isset($bfsAdjacencyMatrix[$word])) {
                        $bfsAdjacencyMatrix[$word] = [];
                    }
        
                    $bfsAdjacencyMatrix[$word][$adjacentWord] = $adjacentWord;
        
                    $visited[$adjacentWord] = $visited[$word] + 1;
                    $queue->enqueue($adjacentWord);                    
                }
            }
        }

        $currentTransform = [];
        $transforms = [];

        $this->searchPaths($wordList, $bfsAdjacencyMatrix, $beginWord, $endWord, $currentTransform, $transforms);

        return $transforms;
    }
    
    function searchPaths($wordList, $bfsAdjacencyMatrix, $beginWord, $endWord, &$currentTransform, &$transforms)
    {
        array_push($currentTransform, $beginWord);

        if ($beginWord == $endWord) {
            $transforms[] = $currentTransform;
        }

        if (isset($bfsAdjacencyMatrix[$beginWord])) {
            foreach ($bfsAdjacencyMatrix[$beginWord] as $adjacentWord) {
                $this->searchPaths($wordList, $bfsAdjacencyMatrix, $adjacentWord, $endWord, $currentTransform, $transforms);
            }
        }

        array_pop($currentTransform);
    }

    function findAdjacentWords($word, $wordListDict, $alphabets) {
        $adjacentWords = [];
        
        for ($i = 0; $i < strlen($word); $i++) {
            $adjacentWord = $word;

            foreach ($alphabets as $char) {
                if ($char != $word[$i]) {
                    $adjacentWord[$i] = $char;

                    if (isset($wordListDict[$adjacentWord])) {
                        $adjacentWords[] = $adjacentWord;
                    }
                }
            }
        }
        
        return $adjacentWords;
    }
}
```