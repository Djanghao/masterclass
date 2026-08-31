# [Java/C++/Python/JavaScript/Kotlin/Swift]O(n)time/BEATS 99.97% MEMORY/SPEED 0ms APRIL 2022

**Author:** darian-catalin-cucer
**Votes:** 17
**Link:** [https://leetcode.com/problems/text-justification/solutions/1987109/](https://leetcode.com/problems/text-justification/solutions/1987109/)

---

***Hello it would be my pleasure to introduce myself Darian.***

***Java***
```
class Solution {
     public List<String> fullJustify(String[] words, int maxWidth) {
        int left = 0; List<String> result = new ArrayList<>();
        
        while (left < words.length) {
            int right = findRight(left, words, maxWidth);
            result.add(justify(left, right, words, maxWidth));
            left = right + 1;
        }
        
        return result;
    }
    
    private int findRight(int left, String[] words, int maxWidth) {
        int right = left;
        int sum = words[right++].length();
        
        while (right < words.length && (sum + 1 + words[right].length()) <= maxWidth)
            sum += 1 + words[right++].length();
            
        return right - 1;
    }
    
    private String justify(int left, int right, String[] words, int maxWidth) {
        if (right - left == 0) return padResult(words[left], maxWidth);
        
        boolean isLastLine = right == words.length - 1;
        int numSpaces = right - left;
        int totalSpace = maxWidth - wordsLength(left, right, words);
        
        String space = isLastLine ? " " : blank(totalSpace / numSpaces);
        int remainder = isLastLine ? 0 : totalSpace % numSpaces;
        
        StringBuilder result = new StringBuilder();
        for (int i = left; i <= right; i++)
            result.append(words[i])
                .append(space)
                .append(remainder-- > 0 ? " " : "");
        
        return padResult(result.toString().trim(), maxWidth);
    }
    
    private int wordsLength(int left, int right, String[] words) {
        int wordsLength = 0;
        for (int i = left; i <= right; i++) wordsLength += words[i].length();
        return wordsLength;
    }
    
    private String padResult(String result, int maxWidth) {
        return result + blank(maxWidth - result.length());
    }
    
    private String blank(int length) {
        return new String(new char[length]).replace('\\0', ' ');
    }
}
```

***JavaScript***
```
var fullJustify = function(words, maxWidth) {
    let result = [];
    
    let line = [];
    let lineLength = 0;
    
    for(let i = 0; i < words.length; i++) {
        let w = words[i];
        
        if(lineLength === 0 && w.length <= maxWidth) {
			// Note: We add first word assuming no space will be added after it. As we know this is not the case. 
			//       The space for first word will be accounted for by our last word in the line & 
			//       the lack of space after last word is accounted for by this first word.
            line.push(w);
            lineLength += w.length;
        } else if(lineLength + w.length + 1 <= maxWidth){
			// we add word and consider it's length plus a space following it
            line.push(w);
            lineLength += (w.length + 1);
        } else {
			//OUR LINE IS FULL AND SHOULD BE ADDED TO THE RESULT
			
            // add the required single space after each word except last one
            line = addMinSpace(line);
            
            // find remaining space to distribute
            let remainingSpace = maxWidth - lineLength;
            
            // add remaining space to each word expect last one
            line = distributeSpaces(line, remainingSpace);

            // turn array into a single string
            let temp = line.join("")
            
            // If the line only had one large word, we add remaining spaces to it's end just like how we would later do for last line
            if(line.length === 1) temp = addRemainingSpaces(temp, remainingSpace)
            
            result.push(temp);
            
            // reset the line and it's length
            line = [];
            lineLength = 0;
            
            // add this new word like it's the first one
            line.push(w);
            lineLength += w.length;
        }
    }
    
    
    // pad our final line
    line = addMinSpace(line);
    
    // create final string
    let temp = line.join("")
    
    // find remaining padding 
    let remainingSpace = maxWidth - lineLength;
    
    // add remaining padding to end of our final line
    temp = addRemainingSpaces(temp, remainingSpace)
    
    // add final line to result
    result.push(temp);
 
    // return result
    return result;
    
	// Adds single space after each word except last one
    function addMinSpace(line) {
        for(let i = 0; i < line.length - 1; i++) line[i] += " ";
        return line;
    }
    
	// add remaining spaces to end of line
    function addRemainingSpaces(line, spaces) {
        while(spaces > 0) {
            line += " ";
            spaces--;
        }
        return line;
    }
    
	// distribute remaining spaces from left to right
    function distributeSpaces(arr, spaces) {
        while(spaces > 0 && arr.length > 1) {
           for(let i = 0; i < arr.length - 1; i++) {
                if(spaces <= 0) break;
                arr[i] = arr[i] + " ";
                spaces --;
            } 
        }
        return arr;
    }
};
```

***C++***
```
class Solution {
public:
    vector<string> fullJustify(vector<string>& words, int maxWidth) {
        vector<string> result;
        const int totalWords = words.size()-1;
        for (int begin=0, moreWords=0; begin<=totalWords; begin=moreWords) {
            string currentBlock(maxWidth, ' ');
            /* In problem statement, it is specified that each word is guaranteed to be
             * grether than 0 and not exceed maxWidth, so I can safely add first word. */
            currentBlock.replace(0, words[begin].size(), words[begin]);
            /* Now current block of text is ready with first word and remainig spaces,
             * I just need to calculate how many more words I can fit in this block. */
            int remainingSpace = maxWidth - words[begin].size();
            for (moreWords=begin+1; moreWords <=totalWords && words[moreWords].size() < remainingSpace; moreWords++) {
                /* First word in current block is already added before this for loop.
                 * Additional word(s) can be added in current justification block. As this
                 * is additional word, at least one space is needed in calculation
                 * for remaining space. Above '<' condition make sure that we have space for
                 * one additional space */
                remainingSpace -= words[moreWords].size()+1;
            }
            /* Word joints are total separating gap between words, for which we need to do
             * space management */
            int wordJoints = moreWords - begin -1;
            if (wordJoints) {
                /*Ok so we have more than one word in this justification block*/
                int evenlyDistributedSpace = 1; /*One space is already provisioned in above loop */
                int unEvenSpace = 0;
                if (moreWords <= totalWords) {
                /* Control is here means current justification block is not the last
                 * block, so we need to do some mathematics on remaining space and evenly
                 * distribute it between the words (word joints). Remember for last block
                 * this is not needed as it is left aligned and additional words are only
                 * placed one white space apart */
                    evenlyDistributedSpace += remainingSpace / wordJoints;
                    unEvenSpace = remainingSpace % wordJoints;
                }
                for (int i=begin+1, index=words[begin].size(); i < moreWords; i++) {
                    index += evenlyDistributedSpace + (unEvenSpace-- > 0);
                    currentBlock.replace(index, words[i].size(), words[i]);
                    index += words[i].size();
                }
            }
            result.push_back(currentBlock);
        }
        return result;
    }
};
```

***Python***
```
class Solution:
    def fullJustify(self, words: List[str], maxWidth: int) -> List[str]:
        ans, cur = [], []
        chars = 0
        
        for word in words:
            # if cur is empty or the total chars + total needed spaces + next word fit
            if not cur or (len(word) + chars + len(cur)) <= maxWidth:
                cur.append(word)
                chars += len(word)
            else:
                # place spaces, append the line to the ans, and move on
                line = self.placeSpacesBetween(cur, maxWidth - chars)
                ans.append(line)
                cur.clear()
                cur.append(word)
                chars = len(word)
        
        # left justify any remaining text, which is easy
        if cur:
            extra_spaces = maxWidth - chars - len(cur) + 1
            ans.append(' '.join(cur) + ' ' * extra_spaces)
            
        return ans
    
    
    def placeSpacesBetween(self, words, spaces):
        if len(words) == 1: return words[0] + ' ' * spaces
        
        space_groups = len(words)-1
        spaces_between_words = spaces // space_groups
        extra_spaces = spaces % space_groups
        
        cur = []
        for word in words:
            cur.append(word)
            
            # place the min of remaining spaces or spaces between words plus an extra if available
            cur_extra = min(1, extra_spaces)
            spaces_to_place = min(spaces_between_words + cur_extra, spaces)

            cur.append(' ' * spaces_to_place)
            
            if extra_spaces: extra_spaces -= 1
            spaces -= spaces_to_place
        
        return ''.join(cur)
```

***Kotlin***
```
class Solution {
     private  val SEPARATOR = " " 
    
    fun fullJustify(words: Array<String>, maxWidth: Int): List<String> {

        val result = mutableListOf<String>() // keeps the lines as a sting in a paragraph
        val currentLineWords = mutableListOf<String>()// keeps track of all the words for the current line
        var availableSpacePerLine = maxWidth //  keeps track of the available space in the current line

        words.forEach { word ->
            availableSpacePerLine -= word.length
            when {
                (availableSpacePerLine == 0) -> { // the words perfectly fit
                    currentLineWords.add(word)
                    result.add(toLineString(availableSpacePerLine, currentLineWords))

                    // Start a new line
                    currentLineWords.clear()
                    availableSpacePerLine = maxWidth
                }
                (availableSpacePerLine < 0) -> { // too much words in a line adjust!
                    availableSpacePerLine += (word.length + 1) //remove the claimed space for current
                    result.add(toLineString(availableSpacePerLine, currentLineWords))

                    // Start a new line
                    currentLineWords.clear()
                    currentLineWords.add(word)
                    availableSpacePerLine = maxWidth - (word.length + 1)
                }
                (availableSpacePerLine > 0) -> { // space is still available in the current line
                    currentLineWords.add(word)
                    availableSpacePerLine--
                }
            }
        }

        // Process the last line if there is one
        if (currentLineWords.isNotEmpty()) {
            result.add(toLineString(availableSpacePerLine + 1, currentLineWords, true))
        }
        return result
    }
    

    private fun toLineString(
        noOfSpaceToBeDistributed: Int,
        wordsInLine: MutableList<String>,
        isLastLine: Boolean = false
    ): String {
        return if (wordsInLine.size == 1 || isLastLine) { // if there is only one word in a line or if the line is the last one , all the remaining spaces should just go to the end of the sentence
            wordsInLine.joinToString(SEPARATOR) + SEPARATOR.repeat(noOfSpaceToBeDistributed)
        } else { // other wise we have to evenly distribute the remaining lines
            val spaceToBeAddedToAllWords = (Math.floorDiv(
                noOfSpaceToBeDistributed,
                wordsInLine.lastIndex
            )) + 1 // the +1 is because we already take in to consideration a space when calculating noOfSpaceToBeDistributed
            
            for (i in 0 until noOfSpaceToBeDistributed % wordsInLine.lastIndex) {
                wordsInLine[i] += SEPARATOR
            }
            wordsInLine.joinToString(SEPARATOR.repeat(spaceToBeAddedToAllWords))
        }
    }
  
  
}
```

***Swift***
```
class Solution {
    func fullJustify(_ words: [String], _ maxWidth: Int) -> [String] {
        var res: [String] = []
        var i = 0
        
        while i < words.count {
            var j = i
            var tmpLength = 0
            
            while j < words.count {
                tmpLength += words[j].count + ((j > i) ? 1 : 0)
                
                if tmpLength <= maxWidth { j += 1 } 
                else {
                    res.append(stringWithWords(words, maxWidth, i, j))
                    break
                }
            }
            
            if j == words.count {
                res.append(stringWithWords(words, maxWidth, i, j))
            }
            i = j
        }
        
        return res
    }


    func stringWithWords(_ words: [String], _ maxWidth: Int, _ i: Int, _ j: Int) -> String {
        var length = 0
        var string = ""
        
        func space(_ n: Int) -> String {
            var string = ""
            for _ in 0..<n { string += " " }
            return string
        }
        
        func space(_ index: Int, _ count: Int, _ length: Int, _ maxWidth: Int, _ isLast: Bool) -> String {
            if isLast { return index == count - 1 ? space(maxWidth - length - count + 1) : " " }
            if count == 1 { return space(maxWidth - length) }
            if index == count - 1 { return "" }
            return space((maxWidth - length) / (count - 1)) + (index < ((maxWidth - length) % (count - 1)) ? " " : "")
        }

        for k in i..<j { length += words[k].count }
        
        for k in i..<j {
            string += words[k] + space(k - i, j - i, length, maxWidth, j == words.count)
        }
        
        return string
    }

}
```

***Consider upvote if useful! Hopefully it can be used in your advantage!***
***Take care brother, peace, love!***