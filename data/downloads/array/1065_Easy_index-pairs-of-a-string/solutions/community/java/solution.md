# Clean Java | Trie | Easy explanation

**Author:** guywithimpostersyndrome
**Votes:** 13
**Link:** [https://leetcode.com/problems/index-pairs-of-a-string/solutions/1678785/](https://leetcode.com/problems/index-pairs-of-a-string/solutions/1678785/)

---

**Key logic**:
- Find all the *valid* index ranges in **text** of all the words that are valid substrings of **text**.
- Considering immutability of strings, this can be done via few in-built functions (or brute-force) but the time complexity will be worse.
- Using Trie gives a better approach with useful improvement in time complexity.
	- Store all the words in Trie. This will help in quickly finding start of any word, character by character.
	- For any word (start from root) - compare one character at a time with any maching character in **text**.
		- If it matches, keep comparing until the word's last character.
		- At any point of time, be it beginning, middle or end of the word - if there is a mismatch => skip and move on to next word.
		- Else, store the start/end indices in **text** that matches with this current word => move on to next word.

**Prerequisite**: Basic understanding of Trie and how inserting & searching of words works within it.

**Pseudo-code**:
- Initialize a Trie (with a non-null `root`). Each node will have a flag `wordEnd` to indicate end of a word.
- For each word in words:
	- insert word in Trie
- For each index `i` in text:
	- Initialize `curr` node referencing to `root`
	- For each index `j` from `i` till end of text index:
		- compare the character at index `j` with character in `curr` node.
		- If the character doesn't exist in Trie => break the current loop (no use of moving forward)
		- Else, if the `wordEnd` flag is `true` => store the indices (`i` and `j`). Otherwise, move forward (next step)
		- Traverse `curr` to next node and increment `j`.

**Time Complexity**: O(W * M) + O(T^2),
where T = length of string `text`, W = number of words and M = Avg. or longest length of each word in words.

**Space Complexity**: O(W * M), storing all the words in the Trie. (excluding the returning list)

**Code**:
```
class Solution {
    
    public int[][] indexPairs(String text, String[] words) {
	
        List<int[]> result = new LinkedList<>();
        Trie trie = new Trie();
		
        for(String word: words) // Insert all the words in Trie.
            trie.insert(word);
		
        for(int startIndex = 0; startIndex < text.length(); ++startIndex) { // Start storing the right indices
            int endIndex = startIndex;
            TrieNode currNode = trie.getRoot();
            
            while(endIndex < text.length()) {
                char ch = text.charAt(endIndex);
                if(currNode.children.get(ch) == null) //invalid
                    break;
                if(currNode.children.get(ch).wordEnd) //valid
                    result.add(new int[] { startIndex, endIndex });
                
                currNode = currNode.children.get(ch);
                endIndex++;
            }
        }
        
        return result.toArray(new int[result.size()][2]);
    }
}

class Trie {
    private TrieNode root;
    
    public Trie() {  root = new TrieNode();  }
    
    public TrieNode getRoot() {  return root;  }
    
    public void insert(String word) {
        TrieNode currNode = root;
        for(Character ch: word.toCharArray()) {
            currNode.children.put(ch, currNode.children.getOrDefault(ch, new TrieNode()));
            currNode = currNode.children.get(ch);
        }
        currNode.wordEnd = true;
    }
}

class TrieNode {
    Map<Character, TrieNode> children;
    boolean wordEnd;
    
    public TrieNode() {
        children = new HashMap<>();
        wordEnd = false;
    }
}
```

**Example:**
Consider text = `ababacd` and words = `["aba", "a", "ab"]`
Let's construct a Trie:
```
Insert `aba`:

	 a (wordEnd = false)
    / 
   b (wordEnd = false)
  /
 a (wordEnd = true)
 
Insert `a`:

	 a (wordEnd = true)
    / 
   b (wordEnd = false)
  /
 a (wordEnd = true)
 
Insert `ab`:

	 a (wordEnd = true)
    / 
   b (wordEnd = true)
  /
 a (wordEnd = true)
```

Now loop through all possible combinations of indices in `text`. (`O(n^2)` - `n` being length of `text`)
Traverse the trie from root at the beginning of every nested loop.

loop `i` from 0 to end index & for each `i`, loop `j` from `i` till end. (nested)

curr = root:
[i, j] => [0,0] => `a` & compare with `curr` => valid (wordEnd of `a` is `true`)
Increment `j` & traverse curr to the next valid child:
[i, j] => [0,1] => `ab` & compare with `curr` => valid (wordEnd of `b` is `true`)
Increment `j` & traverse curr to the next valid child:
[i, j] => [0,2] => `aba` & compare with `curr` => valid (wordEnd of `a` is `true`)
Increment `j` & traverse curr to the next valid child:
[i, j] => [0,3] => `abab` & compare with `curr` => `curr` is `null` => invalid => break the nested loop.
...
curr = root:
[i, j] => [1,1] => `b` & compare with `curr` => invalid as root node starts with `a` => break the nest loop.
...
curr = root:
[i, j] => [2, 2] => `a` &. compare with `curr` => valid
...
...
...
Similarly for `cd` => invalid.

So the valid indices are: [0,0], [0,1], [0,2], [2,2],[2,3],[2,4] and [4,4]
