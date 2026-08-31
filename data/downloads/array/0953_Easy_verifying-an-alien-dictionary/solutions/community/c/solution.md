# ✅ Simple Solution using HashMap w/ Explanation | O(N) / O(1) | Beats 100%

**Author:** archit91
**Votes:** 70
**Link:** [https://leetcode.com/problems/verifying-an-alien-dictionary/solutions/1149842/](https://leetcode.com/problems/verifying-an-alien-dictionary/solutions/1149842/)

---

We need to create a mapping (let's call it **`mp`**) of all alphabets to their index in *`order`*. This will help us determine if two words are lexicographically sorted efficiently. 

---

\u2714\uFE0F ***Solution - I (Map Letters to Index & Check Adjacent Words)***

If a sequence of words is sorted, then **each adjacent word of the sequence must also be sorted**. In the given question, while comparing if two words are sorted, we just need to compare `mp[letter1]` and `mp[letter2]`  (instead of direct `letter1` and `letter2` that we would have done if it was normal english alphabetical ordering). Now, while checking if string `a`, `b` are lexicographically sorted, they are -

&emsp;&emsp;\uD83D\uDC49 **Lexicographically Sorted** when -
&emsp;&emsp;&emsp;&emsp;\u2726 If at first mismatch, `mp[a[i]] < mp[b[i]]`, or
&emsp;&emsp;&emsp;&emsp;\u2726 If each letters of both words match and `length(a) <= length(b)`


&emsp;&emsp;\uD83D\uDC49 **Not Lexicographically Sorted** when -
&emsp;&emsp;&emsp;&emsp;\u2726 If at first mismatch, `mp[a[i]] > mp[b[i]]`, or
&emsp;&emsp;&emsp;&emsp;\u2726  If each letters of both words match and `length(a) > length(b)`.

With this, we can proceed to check if each adjacent words are lexicographically sorted and return true if all are found to be sorted.

---

**C++**
```
unordered_map<char, int> mp;
bool isAlienSorted(vector<string>& words, string order) {        
	for(int i = 0; i < size(order); i++) mp[order[i]] = i;  // mapping letter to its corresponding index in order
	for(int i = 0; i < size(words) - 1; i++)
		if(!checkOrder(words[i], words[i + 1])) return false;
	return true;        
}    
// checking if two words are lexicographically sorted
bool checkOrder(string& a, string& b){
	int i = -1;
	while(++i < size(a) && i < size(b))
		if(mp[a[i]] != mp[b[i]]) return mp[a[i]] < mp[b[i]];
	return size(a) <= size(b);
}
```

---

**Python**
```
def isAlienSorted(self, words: List[str], order: str) -> bool:
	def checkOrder(A, B):            
		for ai, bi in zip(A, B) :
			if mp[ai] != mp[bi] :
				return mp[ai] < mp[bi]
		return len(A) <= len(B)
	mp = {c : idx for idx,c in enumerate(order)}
	return all(checkOrder(word1, word2) for word1, word2 in zip(words, words[1:]))
```

---

***Time Complexity :*** `O(N)`, where `N` is the total number of characters in `words`.
***Space Complexity :*** `O(1)`, we only need constant amount of space to store the mapping of letters to index which does not depend on the size of input. Hence we get constant space complexity.

---
---

\u2714\uFE0F ***Solution - II (Mapping Letters in Alien Order to English Order)***

We can also map the letters in `order` to equivalent words considering normal English ordering, transform word and then check if they are sorted as we normally would. For eg.

```
order = "hlabcdefgijkmnopqrstuvwxyz" gets mapped to "abcdefghijklmnopqrstuvwxyz".
So for eg, The word "hello" is transformed to "agbbo"
           The word "leetcode" is transformed to "bggteofg"
```


In C++, there's a inbuilt method `is_sorted` to check if elements in a range are sorted which I have used in the implementation below. It functions similar to the `checkOrder` function in the first solution but we can use it here since we have mapped alien language to english language -

---

**C++**


```
unordered_map<char, char> mp;
bool isAlienSorted(vector<string>& words, string order) {        
	// Infact, we can do without the + 'a' below as well. It just won't map to English but rather to characters having ascii 0,1,2...
	for(int i = 0; i < size(order); i++) mp[order[i]] = i + 'a';  
	for(auto& word : words)
		for(auto& c : word) c = mp[c];
	return is_sorted(begin(words), end(words));
} 
```

---

**Python**
```
def isAlienSorted(self, words: List[str], order: str) -> bool:
	mp = {c : i for i, c in enumerate(order)}        
	words = [[mp[c] for c in word] for word in words]
	return all(word1 <= word2 for word1, word2 in zip(words, words[1:]))
```

The Time & Space complexity are same as in the first solution. But the runtime might be slightly worse since this solution involves extra operation of transforming words which we didn't require in the first solution. Just mentioned this solution as another possible approach to solve this question.

---

*Best Runtime Results :*

<span>&emsp;&emsp;&emsp;&emsp;<img src=https://assets.leetcode.com/users/images/16231ace-16e3-405c-bb23-97edbd8572f6_1617967706.3983092.png /></span>


---
---

\uD83E\uDDD1\u200D\uD83D\uDCBB\uD83D\uDC31\u200D\uD83D\uDCBBIf there are any questions or mistakes in my post, please do comment below \uD83D\uDC47 

---
---