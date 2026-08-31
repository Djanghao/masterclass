# Resources Listed | Commented | Trie | Map | Simple | Recursive | JavaScript Implementation

**Author:** Mrmagician
**Votes:** 26
**Link:** [https://leetcode.com/problems/design-add-and-search-words-data-structure/solutions/443857/](https://leetcode.com/problems/design-add-and-search-words-data-structure/solutions/443857/)

---

**Please do upvote, it motivates me to write more such posts\uD83D\uDE03**

```

// This class shows each and every node of trie

class Node{
    constructor(){
        this.keys = new Map();
        this.end = false;
    }
    setEnd(){this.end = true;}
    isEnd(){return this.end}
}

// Simple initialization of the WordDictionary class

var WordDictionary = function() {
    this.root = new Node();
};

// This just adds the word to the dictionary

WordDictionary.prototype.addWord = function(word) {
    let node = this.root;
    function rec(node, word){
        if(word){
            if(!node.keys.has(word[0]))
                node.keys.set(word[0], new Node());
            return rec(node.keys.get(word[0]), word.substr(1));
        }
        else node.setEnd();
    }
    rec(node, word)
    return true;
};

// This is the main recursive function where all of the magic is happening

WordDictionary.prototype.search = function(word) {
    let node = this.root;
    function rec(node, word){
	
		// returns false if the node doesn't exist
        if(!node) return false;
		
		// if the word exist
        if(word){
		
			//skipping any calculation if the word[0] is . 
        
			if(word[0]==='.'){
				
				// Since we don't know what should be the next node so, need to go through all of them one by one
                let out = false;
                for(let val of node.keys.keys()){
					// Any one of the nodes will return true for the upcoming character in word after .
					// So, taking an OR operation
                    out = out || rec(node.keys.get(val), word.substr(1));
                }
                return out;
            }
            else if(node.keys.has(word[0])){
				// If the node has encountered a word then the simple stuff
                return rec(node.keys.get(word[0]), word.substr(1));
            }
			// otherwise return false when the above two are false
            else{ return false}
            
        }
		// If the word doesn't exist but it could have existed so just checking if the node is the end node and returning the result
        else return node.isEnd();
    }
	
    return rec(node, word);
};


```

**Following are some of the resources regarding *Trie***
***JS based implementation of Trie*****Must checkout**
[https://www.youtube.com/watch?v=7XmS8McW_1U](http://)


***For more info about trie DS, you can watch the following video***
*Copyright(For the following video): Tushar Roy*
[https://www.youtube.com/watch?v=AXjmTQ8LEoI](http://)

 
