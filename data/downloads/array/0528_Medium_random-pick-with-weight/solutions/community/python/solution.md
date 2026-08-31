# Python 3 simple solution

**Author:** drblessing
**Votes:** 107
**Link:** [https://leetcode.com/problems/random-pick-with-weight/solutions/671921/](https://leetcode.com/problems/random-pick-with-weight/solutions/671921/)

---

**Hello fellow coders! \uD83D\uDE00**

I decided to post this solution because the other python3 solutions, while genius and better, were a bit hard to read. Here is the breakdown of my solution:
* Normalize the weights in the initial w list to ratios 
	* i.e.  [1,3,3,1] --> [1 / 8, 3 / 8, 3 / 8, 1 / 8], for a general list [...i...] ---> [... i / sum(list) ...]
	* This give us the frequency of each index
* Take these new weights and put them on a number line from 0 --> 1 by adding to each element all of the previous elements 
	* i.e. [1/8, 3/8, 3/8, 1/8] --> [1/8,4/8,7/8,1], for a general list [...i...] ---> [... i + sum(all previous)...]
	* Note this will always mean list[-1] = 1
	* This gives us a number line to test a random variable on 
* Generate a random number between 0 ,1 
* Find the section of the number line the random number falls into and return its index 
	* I used a while loop here but if anyone has a better idea please reply! \uD83D\uDE00
	* This effectively gives us each index with its correct probability

I hope this code makes sense! If you have any question **please** respond! \uD83D\uDE00
```
# used for random number generation
import random

class Solution:
    def __init__(self, w: List[int]):
        self.w = w
		# 1. calculate relative frequency
        denom = sum(self.w)
        for i in range(len(self.w)):
            self.w[i] = self.w[i] / denom
        # 2. put relative frequencies on the number line between 0 and 1
		# Note self.w[-1] = 1
        for i in range(1,len(self.w)):
            self.w[i] += self.w[i-1]
        
    def pickIndex(self) -> int:
		
		# this is where we pick the index
        N = random.uniform(0,1)
      
        flag = 1
        index = -1
        
		# test each region of the numberline to see if N falls in it, if it 
		# does not then go to the next index and check if N falls in it
		# this is gaurenteed to break because of previous normalization
        while flag:
            index +=1 
           
           
     
            if N <= self.w[index]:
                flag = 0
        
    
        return index


'''
Pseudocode
1. Initialize class
2. Get a list of all unique values
3. normalize weights
4. put weights on the number line
5. If a uniform varialbe falls in the range of a value that value is returned
'''
```

**Happy Coding!**


**P.S.:** Looking back on it, there was no need to turn all the weights into their relative weights between [0,1]. I could have just generated a random integer between [1,sum(w)] right off the bat, but my brain immediately jumped to the uniform distribution. Hope you enjoyed! If you liked this please upvote it, so I do it more \uD83D\uDE00. 

