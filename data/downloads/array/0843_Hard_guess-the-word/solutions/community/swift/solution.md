# Swift solution: prioritize candidates by their similarities to others

**Author:** jh92710
**Votes:** 1
**Link:** [https://leetcode.com/problems/guess-the-word/solutions/1177117/](https://leetcode.com/problems/guess-the-word/solutions/1177117/)

---

Isn't the fastest, but less guesswork or randomization
Gist is that you do `master.guess(word)` on the words that are similar to other words in the wordlist. If there's a 0 or 1 match you get to eliminate the greatest number of other candidates available.
```
    func findSecretWord(_ wordlist: [String], _ master: Master) {
        // Sort the list by how many others it's associated with???
        var similarityTable = Array(repeating: Array(repeating: 0, count: wordlist.count), count: wordlist.count)
        for i in 0 ..< wordlist.count {
            for j in i + 1 ..< wordlist.count {
                let s = self.checkSimilarity(origWord: wordlist[i], newWord: wordlist[j])
                similarityTable[i][j] = s
                similarityTable[j][i] = s
            }
        }
        let sums = similarityTable.map({ $0.reduce(0, +) })
        var enumeratedWordList = Array(wordlist.enumerated())
        enumeratedWordList.sort(by:{(a, b) in
            return sums[a.0] > sums[b.0]
        })
		// --- sort complete ---
		
        var curWordList = enumeratedWordList.map({$0.1}) // ok this is now sorted
        var guessQuota = 10
        while guessQuota > 0 && curWordList.count > guessQuota {
            let lst = curWordList.removeFirst() 
            let numMatches = master.guess(lst)
            guessQuota -= 1
            curWordList = curWordList.filter { self.checkSimilarity(origWord: lst, newWord: $0) == numMatches }
        }
        if guessQuota > 0 {
            for w in curWordList {
                master.guess(w)
            }
        }
    }
    
    func checkSimilarity(origWord: String, newWord: String) -> Int {
        let ow:[Character] = Array(origWord)
        let nw:[Character] = Array(newWord)
        var matches = 0
        for i in 0 ..< ow.count {
            if ow[i] == nw[i] {
                matches += 1
            }
        }
        return matches
    }
```