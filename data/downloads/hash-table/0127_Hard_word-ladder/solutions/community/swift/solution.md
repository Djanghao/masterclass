# ✔️ 100% Fastest Swift Solution

**Author:** sergeyleschev
**Votes:** 12
**Link:** [https://leetcode.com/problems/word-ladder/solutions/1935353/](https://leetcode.com/problems/word-ladder/solutions/1935353/)

---

```
class Solution {
    func ladderLength(_ beginWord: String, _ endWord: String, _ wordList: [String]) -> Int {
		var res = false
		var count = 1
        var wordSet = Set(wordList)
		var queue: [String] = [beginWord]
		
        loop: 
        while queue.count > 0 {
			count += 1
			var list: [String] = []
			
            for word in queue {
				list += nextWords(word, &wordSet)
				if list.contains(endWord) {
					res = true
					break loop
				}
			}
			
            queue = list
		}
        
		return res == true ? count : 0
    }
    
    
    func nextWords(_ word: String, _ wordSet: inout Set<String>) -> [String] {
		var res: [String] = []
		var chars = Array(word)
		let alphabeta = Array("abcdefghijklmnopqrstvuwxyz")
		
        for (i, char) in chars.enumerated() {
			for c in alphabeta {
				if c == char { continue } 
				else {
					chars[i] = c
					let string = String(chars)
					if wordSet.contains(string) {
						res.append(string)
						wordSet.remove(string)
					}
				}
                
				chars[i] = char
			}
		}
        
		return res
	}

}
```

Let me know in comments if you have any doubts. I will be happy to answer.

Please upvote if you found the solution useful.