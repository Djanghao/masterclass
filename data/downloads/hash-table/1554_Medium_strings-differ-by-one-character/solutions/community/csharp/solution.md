# Trie based solution

**Author:** SquirrelN
**Votes:** 2
**Link:** [https://leetcode.com/problems/strings-differ-by-one-character/solutions/2153011/](https://leetcode.com/problems/strings-differ-by-one-character/solutions/2153011/)

---

TC is ```O(26*m*n) ~ O(m*n)```, SC is ```O(n)```, m: Number of entries in dict, n: length of a word in the dict.
```
public bool DifferByOne(string[] dict) {
	TrieNode _root = new();
	foreach(var str in dict){
		if(Exists(str, 0, false, _root)) return true;
		AddToTrie(str,_root);
	}
	return false;
}

void AddToTrie(string str, TrieNode node){
	var parent = node;
	foreach(var ch in str){
		if(parent.Children[ch-'a']==null) parent.Children[ch-'a'] = new();
		parent = parent.Children[ch-'a'];
	}
}

bool Exists(string str, int i, bool skipped, TrieNode node){
	if(i==str.Length) return skipped;//Reached word end, return true if we skipped a char to get here.
	if(node.Children[str[i]-'a']!=null) {if (Exists(str, i+1, skipped, node.Children[str[i]-'a'])) return true;}//Matching char in Trie, proceed with this char
	if(skipped) return false;//We have already skipped a char, so just return false;
	for(int j=0;j<26;j++){//If we have not yet skiped a char, try all chars in the Trie at this position, but mark that we have already skipped a char.
		if(node.Children[j]==null) continue;
		if (Exists(str, i+1, true, node.Children[j])) return true;
	}
	return false;
}

class TrieNode{//Note Trie does not need a property to denote the end since all words are the same length.
	public TrieNode[] Children {get;set;} = new TrieNode[26];
}
```