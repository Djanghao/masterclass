# ✔️ 100% Fastest Swift Solution

**Author:** sergeyleschev
**Votes:** 12
**Link:** [https://leetcode.com/problems/word-ladder-ii/solutions/1935339/](https://leetcode.com/problems/word-ladder-ii/solutions/1935339/)

---

```
class Solution {
    func findLadders(_ beginWord: String, _ endWord: String, _ wordList: [String]) -> [[String]] {
		guard wordList.contains(endWord) else { return [] }
        var wordSet = Set(wordList)
        var queue: [String] = [beginWord]
		var words: [[String]] = []
		var isLoopEnd = false
		var res:[[String]] = []
		var lastWords: [String] = [endWord]
		var i = 0

        if wordSet.contains(beginWord) { wordSet.remove(beginWord) }
		
        loop: 
        while queue.count > 0 {
			var list: [String] = []
			
            for word in queue {
				let next = nextWords(word, &wordSet)
                list += next
				if next.contains(endWord) { isLoopEnd = true }
			}
			
            if isLoopEnd { break loop } 
            else {
				queue = list
				words.append(queue)
			}
		}
        
		while i < words.count - 1 {
			var tmp = Set<String>()
			for word0 in words[words.count - 1 - i] {
				for word1 in lastWords where isNext(word0, word1) { tmp.insert(word0) }
			}
			lastWords = Array(tmp)
			words[words.count - 1 - i] = lastWords
			i += 1
		}
        

		func backtrack(_ path: [String], _ index: Int) {
			if index == words.count {
                if isNext(path[path.count - 1], endWord) { res.append(path + [endWord]) }
				return
			}
            
			var path = path
			for word in words[index] {
				if isNext(path[path.count - 1], word) == false { continue }
                
				path.append(word)
				backtrack(path, index + 1)
				path.remove(at: path.count - 1)
			}
		}
        
		backtrack([beginWord], 0)
		return res
	}

    
	func isNext(_ word0: String, _ word1: String) -> Bool {
		let chars0 = Array(word0)
		let chars1 = Array(word1)
		var count = 0
		
        for i in 0..<word0.count {
			if chars0[i] != chars1[i] {
				count += 1
				if count > 1 { return false }
			}
		}
		
        return count == 1
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