# 🔥🔥🔥🔥🔥Beats 100% | JS | TS | Java | C++ | C# | C | Python | python3 | Kotlin | PHP 🔥🔥🔥🔥🔥

**Author:** 20Sunny
**Votes:** 13
**Link:** [https://leetcode.com/problems/text-justification/solutions/3952161/](https://leetcode.com/problems/text-justification/solutions/3952161/)

---

---
![header_.png](./images/0.png)

---
```C []
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
char ** fullJustify(char ** words, int wordsSize, int maxWidth, int* returnSize) {
    char **result = (char **)malloc(sizeof(char *) * wordsSize);
    *returnSize = 0;
    
    int start = 0;  // Index of the first word in the current line.
    
    while (start < wordsSize) {
        int end = start;  // Index of the last word in the current line.
        int lineLength = 0;  // Length of the words and spaces in the current line.
        
        // Calculate the number of words and total length that can fit in the current line.
        while (end < wordsSize && lineLength + strlen(words[end]) + end - start <= maxWidth) {
            lineLength += strlen(words[end]);
            end++;
        }
        
        // Calculate the total number of spaces needed in the line.
        int totalSpaces = maxWidth - lineLength;
        
        // If it's the last line or only one word in the line, left-justify.
        if (end == wordsSize || end - start == 1) {
            result[*returnSize] = (char *)malloc(sizeof(char) * (maxWidth + 1));
            int idx = 0;
            for (int i = start; i < end; i++) {
                strcpy(result[*returnSize] + idx, words[i]);
                idx += strlen(words[i]);
                if (i != end - 1) {
                    result[*returnSize][idx++] = ' ';
                }
            }
            while (idx < maxWidth) {
                result[*returnSize][idx++] = ' ';
            }
            result[*returnSize][maxWidth] = '\\0';
        } else {
            int spaceBetweenWords = totalSpaces / (end - start - 1);
            int extraSpaces = totalSpaces % (end - start - 1);
            
            result[*returnSize] = (char *)malloc(sizeof(char) * (maxWidth + 1));
            int idx = 0;
            for (int i = start; i < end; i++) {
                strcpy(result[*returnSize] + idx, words[i]);
                idx += strlen(words[i]);
                if (i != end - 1) {
                    int spaces = spaceBetweenWords + (extraSpaces > 0 ? 1 : 0);
                    extraSpaces--;
                    for (int j = 0; j < spaces; j++) {
                        result[*returnSize][idx++] = ' ';
                    }
                }
            }
            result[*returnSize][maxWidth] = '\\0';
        }
        
        (*returnSize)++;
        start = end;
    }
    
    return result;
}
```
```C++ []
class Solution {
public:
    vector<string> fullJustify(vector<string>& words, int maxWidth) {
        vector<string> result;
        int i = 0;
        
        while (i < words.size()) {
            int lineLen = words[i].size();
            int j = i + 1;
            
            // Find the words that can fit in the current line
            while (j < words.size() && lineLen + 1 + words[j].size() <= maxWidth) {
                lineLen += 1 + words[j].size();
                j++;
            }
            
            int numWords = j - i;
            int totalSpaces = maxWidth - lineLen + numWords - 1;
            
            // Construct the formatted line
            string line = words[i];
            if (numWords == 1 || j == words.size()) { // Left-justify
                for (int k = i + 1; k < j; k++) {
                    line += " " + words[k];
                }
                line += string(maxWidth - line.size(), ' '); // Pad with spaces
            } else { // Fully justify
                int spacesBetweenWords = totalSpaces / (numWords - 1);
                int extraSpaces = totalSpaces % (numWords - 1);
                for (int k = i + 1; k < j; k++) {
                    int spaces = k - i <= extraSpaces ? spacesBetweenWords + 1 : spacesBetweenWords;
                    line += string(spaces, ' ') + words[k];
                }
            }
            
            result.push_back(line);
            i = j;
        }
        
        return result;
    }
};
```
```Typescript []
function fullJustify(words: string[], maxWidth: number): string[] {
    let res = [], str = "", i = 0, n = words.length, x = 0;
    while( i < n ){
        if( (str + words[i]).length === maxWidth ){
            str += words[i++];
            res.push(str);
            str = "";
            x = i;
        }
        else if( (str + words[i]).length > maxWidth ){
            let j = x, cnt = maxWidth - (str.length - 1);
            while( cnt > 0 && j < i - 1 ){
                words[j++] += " ";
                cnt--;
                if( j === i - 1 && cnt > 0 )j = x
            }
            let tempStr = ""; j = x;
            while( j < i )tempStr += j < i - 1 ?  words[j++] + " " : words[j++];
            while( tempStr.length < maxWidth )tempStr += " "
            res.push(tempStr);
            str = "";
            x = i;
        }
        else str += words[i++] + " ";
    }
    if( str.length > 0 ){
        let cnt = maxWidth - str.length;
        while( cnt > 0 ){
            str += " ";
            cnt--;
        }
        res.push(str)
    }
    return res
};
```
```Java []
class Solution {
    public List<String> fullJustify(String[] words, int maxWidth) {
        List<String> result = new ArrayList<>();
        int index = 0;

        while (index < words.length) {
            int lineStart = index;
            int lineLength = words[index].length();
            index++;

            while (index < words.length && lineLength + words[index].length() + (index - lineStart) <= maxWidth) {
                lineLength += words[index].length();
                index++;
            }

            int totalSpaces = maxWidth - lineLength;
            int numWords = index - lineStart;

            StringBuilder line = new StringBuilder(words[lineStart]);
            
            if (numWords == 1 || index == words.length) { // Left-justify last line or single-word lines
                for (int i = lineStart + 1; i < index; i++) {
                    line.append(' ').append(words[i]);
                }
                line.append(String.valueOf(' ').repeat(maxWidth - line.length())); // Add extra spaces at the end
            } else {
                int spacesBetweenWords = totalSpaces / (numWords - 1);
                int extraSpaces = totalSpaces % (numWords - 1);
                
                for (int i = lineStart + 1; i < index; i++) {
                    int spaces = spacesBetweenWords + (extraSpaces-- > 0 ? 1 : 0);
                    line.append(String.valueOf(' ').repeat(spaces)).append(words[i]);
                }
            }

            result.add(line.toString());
        }

        return result;
    }
}
```
```Python []
class Solution(object):
    def fullJustify(self, words, maxWidth):
        result = []
        line = []
        line_length = 0
        
        for word in words:
            if line_length + len(line) + len(word) > maxWidth:
                # Justify the current line
                spaces_to_add = maxWidth - line_length
                if len(line) == 1:
                    result.append(line[0] + ' ' * spaces_to_add)
                else:
                    num_gaps = len(line) - 1
                    spaces_per_gap = spaces_to_add // num_gaps
                    extra_spaces = spaces_to_add % num_gaps
                    justified_line = line[0]
                    for i in range(1, len(line)):
                        spaces = spaces_per_gap + (1 if i <= extra_spaces else 0)
                        justified_line += ' ' * spaces + line[i]
                    result.append(justified_line)
                
                # Reset line and line_length
                line = []
                line_length = 0
            
            line.append(word)
            line_length += len(word)
        
        # Left-justify the last line
        last_line = ' '.join(line)
        last_line += ' ' * (maxWidth - len(last_line))
        result.append(last_line)
        
        return result
```
```Python3 []
class Solution:
    def fullJustify(self, words: List[str], maxWidth: int) -> List[str]:
        result = []
        line = []  # Stores words for the current line
        line_length = 0
        
        for word in words:
            # Check if adding the current word to the line exceeds the maxWidth
            if line_length + len(line) + len(word) > maxWidth:
                # Distribute extra spaces between words
                num_words = len(line)
                total_spaces = maxWidth - line_length
                
                if num_words == 1:
                    # Left-justify if there's only one word in the line
                    result.append(line[0] + ' ' * (maxWidth - len(line[0])))
                else:
                    # Calculate even and extra spaces
                    spaces_per_word = total_spaces // (num_words - 1)
                    extra_spaces = total_spaces % (num_words - 1)
                    
                    # Create the justified line
                    justified_line = ""
                    for i in range(num_words - 1):
                        justified_line += line[i] + ' ' * spaces_per_word
                        if extra_spaces > 0:
                            justified_line += ' '
                            extra_spaces -= 1
                    justified_line += line[num_words - 1]
                    result.append(justified_line)
                
                # Reset line variables for the next line
                line = []
                line_length = 0
            
            line.append(word)
            line_length += len(word)
        
        # Last line: left-justify and no extra spaces
        result.append(' '.join(line) + ' ' * (maxWidth - line_length - len(line) + 1))
        
        return result
```
```C# []
public class Solution {
    public IList<string> FullJustify(string[] words, int maxWidth) {
        List<string> result = new List<string>();
        int startIndex = 0;

        while (startIndex < words.Length) {
            int endIndex = startIndex;
            int lineLength = 0;

            // Find the range of words that can fit in the current line
            while (endIndex < words.Length && lineLength + words[endIndex].Length + (endIndex - startIndex) <= maxWidth) {
                lineLength += words[endIndex].Length;
                endIndex++;
            }

            // Calculate the number of total spaces and gaps between words
            int totalSpaces = maxWidth - lineLength;
            int totalGaps = endIndex - startIndex - 1;
            
            StringBuilder lineBuilder = new StringBuilder();

            // If it's the last line or only one word in the line, left-justify
            if (endIndex == words.Length || totalGaps == 0) {
                for (int i = startIndex; i < endIndex; i++) {
                    lineBuilder.Append(words[i]);
                    if (i < endIndex - 1) {
                        lineBuilder.Append(' ');
                    }
                }
                while (lineBuilder.Length < maxWidth) {
                    lineBuilder.Append(' ');
                }
            } else {
                int spacesPerGap = totalSpaces / totalGaps;
                int extraSpaces = totalSpaces % totalGaps;

                for (int i = startIndex; i < endIndex; i++) {
                    lineBuilder.Append(words[i]);
                    if (i < endIndex - 1) {
                        int spacesToAdd = spacesPerGap + (i - startIndex < extraSpaces ? 1 : 0);
                        lineBuilder.Append(' ', spacesToAdd);
                    }
                }
            }

            result.Add(lineBuilder.ToString());
            startIndex = endIndex;
        }

        return result;
    }
}
```
```Javascript []
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
```Kotlin []
class Solution {
    fun fullJustify(words: Array<String>, maxWidth: Int): List<String> {
        val result = mutableListOf<String>()
        var lineWords = mutableListOf<String>()
        var lineLength = 0
        
        for (word in words) {
            if (lineLength + lineWords.size + word.length <= maxWidth) {
                lineWords.add(word)
                lineLength += word.length
            } else {
                result.add(constructLine(lineWords, maxWidth, lineLength))
                lineWords.clear()
                lineWords.add(word)
                lineLength = word.length
            }
        }
        
        // Last line
        if (lineWords.isNotEmpty()) {
            val lastLine = lineWords.joinToString(" ")
            result.add(lastLine.padEnd(maxWidth))
        }
        
        return result
    }
    
    private fun constructLine(words: List<String>, maxWidth: Int, lineLength: Int): String {
        val numWords = words.size
        if (numWords == 1) {
            return words[0].padEnd(maxWidth)
        }
        
        val totalSpaces = maxWidth - lineLength
        val spaceSlots = numWords - 1
        val baseSpace = totalSpaces / spaceSlots
        val extraSpaceSlots = totalSpaces % spaceSlots
        
        val lineBuilder = StringBuilder()
        for (i in 0 until numWords - 1) {
            lineBuilder.append(words[i])
            lineBuilder.append(" ".repeat(baseSpace))
            if (i < extraSpaceSlots) {
                lineBuilder.append(" ")
            }
        }
        lineBuilder.append(words.last())
        
        return lineBuilder.toString()
    }
}
```
```PHP []
class Solution {
    /**
     * @param String[] $words
     * @param Integer $maxWidth
     * @return String[]
     */
    function fullJustify($words, $maxWidth) {
        $result = [];
        $line = [];
        $lineWidth = 0;
        
        foreach ($words as $word) {
            // Check if adding the next word exceeds maxWidth
            if ($lineWidth + count($line) + strlen($word) > $maxWidth) {
                $formattedLine = $this->formatLine($line, $lineWidth, $maxWidth);
                $result[] = $formattedLine;
                
                $line = [];
                $lineWidth = 0;
            }
            
            $line[] = $word;
            $lineWidth += strlen($word);
        }
        
        // Handle the last line
        $lastLine = implode(' ', $line);
        $lastLine .= str_repeat(' ', $maxWidth - strlen($lastLine));
        $result[] = $lastLine;
        
        return $result;
    }
    
    // Helper function to format a line
    private function formatLine($line, $lineWidth, $maxWidth) {
        $numWords = count($line);
        $numSpaces = $maxWidth - $lineWidth;
        
        if ($numWords === 1) {
            return $line[0] . str_repeat(' ', $numSpaces);
        }
        
        $avgSpaces = floor($numSpaces / ($numWords - 1));
        $extraSpaces = $numSpaces % ($numWords - 1);
        
        $formattedLine = $line[0];
        
        for ($i = 1; $i < $numWords; $i++) {
            $numPaddingSpaces = $avgSpaces + ($i <= $extraSpaces ? 1 : 0);
            $formattedLine .= str_repeat(' ', $numPaddingSpaces) . $line[$i];
        }
        
        return $formattedLine;
    }
}
```


---
![download.jpg](./images/1.jpeg)

---