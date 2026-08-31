# Javascript with explanation (this problem is easier than you think) solution works for both I and II

**Author:** tumamatambien
**Votes:** 21
**Link:** [https://leetcode.com/problems/read-n-characters-given-read4-ii-call-multiple-times/solutions/738644/](https://leetcode.com/problems/read-n-characters-given-read4-ii-call-multiple-times/solutions/738644/)

---

I think the hardest part of this question is understading the question itself. It took me a bit of time to figure out what they wanted.

Our goal is to read `n` number of characters from the file and move it to the `buf` (buffer)  provided from the input. 

Let me explain what they have given us.

You are given a function `read4` that takes in as an argument an array. We can use this function to read from a file (hidden from us) 4 characters at a time. Additionally, it stores the 4 characters that it reads from the file in the array we passed in as an argument.

Caveat about `read4` is that if you call it multiple times it will overide the values inside the array you pass in. 

```
hiddenFile = 'abcdef'

let temp = []

read4(temp) // temp = [a,b,c,d]
read4(temp) // temp = [e,f,c,d] (it overrides a, b on subsequent call)
```

Please leave comments if this is not clear enough. This problem should not be fustrating to anybody lets improve this solution together.


```
var solution = function(read4) {
     // create an internal buffer to pass in as an argument to read4. When everytime read4 is called,
	 // it will store up to 4 characters that it readfrom the hidden file.
    const internalBuffer = []; 
    
    return function(buf, n) {
	    // 1. we add to our internal buffer when its empy.
		// 2. we remove from the internal buffer as long as n > 0.
		// 3. if we empty the internal buffer and n > 0. We refill it again until n < 0
        for(n; n > 0; n--) { 
            if (internalBuffer.length === 0) { 
			// we add to our buffer our initial 4 characters
				read4(internalBuffer)
			}; 
			// if we call read4 and the internal buffer remains empty
			// this means that there is nothing left to read from the hidden file.
            if(internalBuffer.length === 0) { break } 
            
			buf.push(internalBuffer.shift()) // remove from the internal buffer
         }
    }
    
	return buf.length
};
```