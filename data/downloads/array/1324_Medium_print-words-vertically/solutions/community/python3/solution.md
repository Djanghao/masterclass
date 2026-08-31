# Python array solution!

**Author:** lipatino
**Votes:** 4
**Link:** [https://leetcode.com/problems/print-words-vertically/solutions/1899210/](https://leetcode.com/problems/print-words-vertically/solutions/1899210/)

---

```

        array = s.split(" ")
        maxLen = 0
        
        #find max len word
        for a in array:
            if len(a) > maxLen: 
                maxLen = len(a)
                
        # solution array to fill
        solution = [""]*maxLen
        
        #fill the solution
        for word in array:
            for i in range (0,len(solution)):
                if i < len(word): #if letter exists
                    solution[i] += word[i]
                else: #if not, we put space
                    solution[i] += " "
        
        #remove end spaces
        solution2 = []
        for word in solution:
            solution2.append(word.rstrip())
        return solution2
