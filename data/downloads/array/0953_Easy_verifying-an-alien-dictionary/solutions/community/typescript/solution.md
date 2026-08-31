# Typescript O(m*n) easy solution with explanation

**Author:** adnansabbir
**Votes:** 3
**Link:** [https://leetcode.com/problems/verifying-an-alien-dictionary/solutions/3129457/](https://leetcode.com/problems/verifying-an-alien-dictionary/solutions/3129457/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
The description was a bit unclear, but then I saw the constrain for length or order is 26. Which means these are mapping of real order of english alphabhets to alien alphabhets.

# Complexity
- Time complexity:
Order's length is fixed, so we don't need to count it.
Let's say average length of each word is **m** and size of words is **n**
We need go through each word and transform them at the worst case where all words are sorted. 
So, time complexity is O(m*n)

- Space complexity:
We are storing the mapping of **order** in alphabhet variable, but it is of constant size. 
So Space complexity will be O(1)

# Code
```
function isAlienSorted(words: string[], order: string): boolean {
    // Mapping the alphabhets to real order of alphabhets
    // let's say given order is hlabcdefgijkmnopqrstuvwxyz
    // it means {h:'a',l:'b',a:'c',b:'d'} ....
    const alphabets = {}
    for(let i = 0; i < order.length; i++){
        alphabets[order[i]] = String.fromCharCode(i+97)
    }

    // Function to transform word into the order of alphabhets given above
    // according to above given example the word 'lab' will transformed into 'bcd'
    const transformWord = (word: string)=> word.split('').map(alp => alphabets[alp]).join('')

    // Check if any transformed word is greater than next transformed word. If there is any then they are not sorted 
    for(let i = 1; i < words.length; i++){
        if(transformWord(words[i-1]) > transformWord(words[i])) return false
    }
    return true
};
```