# [Detailed Explanation] Python Dynamic Programming Intuition

**Author:** brogrammin
**Votes:** 51
**Link:** [https://leetcode.com/problems/sentence-screen-fitting/solutions/443413/](https://leetcode.com/problems/sentence-screen-fitting/solutions/443413/)

---

Dynamic Programming Idea:

Every time we go to a new line, a certain word in our sentence will start the line. Because the # of words in the sentence are limited to n words, as the columns and rows grow, we can cache the results of starting a new line with any given word in the sentence. 

For example, if the given input is the following:

["try","to","be","better"]
rows = 10000
cols = 9001

As the cols and rows values are really high, a brute force approach will lead to a time out exception. Instead, we can use the caching idea described above. Our memo table will have 4 rows - "try", "to", "be" "better". The cached values will be the first word on the next line, and how many sentences we've completed on the row. 

The first time we have a sentence start with word i, we need to compute the number of sentences that have been completed on that line, and the first word on the next line. We then memoize those results and use them again whenever we have a line that starts with that given word.

This leads to a runtime of O(n x cols), where n is the # of words, and cols is the variable given in the function. 
This is because  for every start word, we need to compute how many sentences fit on that line, and what the first word on the next line will be. 

The space time complexity is just O(n), for our memo table. 

Hope this helps :) 

```
def wordsTyping(self, sentence: List[str], rows: int, cols: int) -> int:
        
        x = 0 
        y = 0 
        
        word = 0
        ans = 0
        
        for w in sentence:
            if len(w) > cols:
                return 0
        
        memo = {}
        
        while y < rows:
            x = 0
            
            start_word = word
            
			# If the given starting word is not in our cache, compute the results for it
			
            if (start_word not in memo):
			
                comp_flag = 0
				# Count the number of completed sentences on this line, and what the starting word on the next line will be
                while x < cols: 

                    diff = cols - x 
                    if (len(sentence[word]) > diff):
                        break
                    else:
                        x += (len(sentence[word])+1)
                        word += 1
                        word = word%len(sentence)
                        if (word == 0):
                            comp_flag += 1 
                            ans += 1
						# Cache the result
                        memo[start_word] = [word, comp_flag]
            else:
				# If the given word is in our cache, simply updated our answer with the # of completed sentences 
                word, com = memo[start_word] 
                ans += com
            y += 1
            
        return ans
```

