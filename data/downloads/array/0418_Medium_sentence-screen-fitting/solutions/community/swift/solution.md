# Beats 100% Time and Memory complexity

**Author:** _MohamedNasser_
**Votes:** 0
**Link:** [https://leetcode.com/problems/sentence-screen-fitting/solutions/5429416/](https://leetcode.com/problems/sentence-screen-fitting/solutions/5429416/)

---


![Screenshot 2024-07-06 at 7.36.42\u202FPM.png](./images/0.png)

# Approach
1. Get each word size
2. subtract the size from the column 
3. if the column less than the word size use new row
4. repeat from step 2


# Code
```
class Solution {
    func wordsTyping(_ sentence: [String], _ rows: Int, _ cols: Int) -> Int {
        let wordsSizes = sentence.map { $0.count }
        return count(wordsSizes: wordsSizes, rows: rows, cols: cols)
    }

    func count(wordsSizes: [Int], rows: Int, cols: Int) -> Int {
        var rows = rows
        var columns = cols
        var wordIndex = 0
        var count = 0

        while rows > 0 {
            if columns >= wordsSizes[wordIndex] {
                columns = columns - wordsSizes[wordIndex] // word
                columns = columns - 1   // space
                wordIndex = (wordIndex + 1)
                wordIndex = wordIndex % wordsSizes.count
                if wordIndex == 0 {
                    count = count + 1
                }
            } else {
                rows = rows - 1
                columns = cols
            }
        }
        return count
    }
}
```