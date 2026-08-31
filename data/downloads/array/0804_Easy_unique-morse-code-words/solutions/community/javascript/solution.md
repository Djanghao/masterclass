# JavaScript One Line Solution w/ Explanation (52 ms, beats 94%)

**Author:** acupoftee
**Votes:** 43
**Link:** [https://leetcode.com/problems/unique-morse-code-words/solutions/329303/](https://leetcode.com/problems/unique-morse-code-words/solutions/329303/)

---

**Approach**:
We need to return the number of morse representations for the given list of words. The approach for this problem is as follows:
1. Look at each word in `words`.
2. For each word, look at each letter.
3. Get the morse representation of each letter
4. Build the word with the morse letter
5. Once we finished building the word, add it to our set if it isn't already in there
6. Return the number of *unique* morse representations.

**Solution**: 
```js
const alphabet = {
    a: '.-', b: '-...',   c: '-.-.', d: '-..', e: '.', f: '..-.', g: '--.', h: '....', i: '..',  j: '.---',  k: '-.-',  l: '.-..', m: '--',
    n: '-.',  o: '---', p: '.--.',  q: '--.-',  r: '.-.', s: '...', t: '-', u: '..-', v: '...-', w: '.--', x: '-..-',  y: '-.--', z: '--..' 
}

/**
 * @param {string[]} words the word array to convert to morse
 * @return {number} the length of unique morse representations
 */
const uniqueMorseRepresentations = words => {  
	// PREVIOUS SOLUTION:
	// return [...new Set(words.map(word => word.split('').map(letter => alphabet[letter]).join('')))].length
   
    // Edited on 9-9-2019
    return new Set(words.map(word => word.split('').map(letter => alphabet[letter]).join(''))).size
}
```
**Explanation**: 
This is a fun problem to apply [Array.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)! Since we're changing every element in the array, `map()` works nicely.  We'll use the example `words = ['gin', 'zen', 'gig', 'msg']` to explain how this works:

1. For each word, we'll split the characters of each word with our first use of `map()`. We'll have something like this after looking at one word:

	```js  
	[ ['g', 'i', 'n'], 'zen', 'gig', 'msg' ] 
	 ```
	
2. We'll use `map()`  again inside our first map method. We'll do this to look at each letter of the inner array to create a Morse Code word. 

3.  For each letter during our second use of `map()`, we'll get the letter's Morse Code, and build a word with it using `join('')`. After one use of both `map()` methods, we'll get the first Morse word for `'gin'`: 
	```js  
	['--...-.', 'zen', 'gig', 'msg'] 
	 ```

4. We'll repeat steps 1-3 until we have an array of new Morse Code words:

	```js
	['--...-.', '--...-.', '--...--.', '--...--.']
	```


5. We'll use JavaScript's [Set Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set) to only keep the unique representations. The Set constructor takes in an array, which will be the array shown in Step 2, and then removes duplicate elements, so we'll only be left with unique Morse Code words:

	```js
	['--...-.', '--...--.']
	```

(EDITED on September 9th, 2019)
Finally, we can return the size of the set
```js
    return new Set(words.map(word => word.split('').map(letter => alphabet[letter]).join(''))).size
```

