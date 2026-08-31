# Two Approach || Java Solution || Brute force || Using Trie Data Structure

**Author:** nitwmanish
**Votes:** 20
**Link:** [https://leetcode.com/problems/words-within-two-edits-of-dictionary/solutions/2757049/](https://leetcode.com/problems/words-within-two-edits-of-dictionary/solutions/2757049/)

---

Brute Force Solution
Time Complexity: O(m * n * k)
Space Complexity : O(1)
m = length queries array
n  = length dictionary array
m = length String 
```
class Solution {
    private int diff(String a, String b) {
        int n = a.length();
        int same = 0;
        for(int i = 0; i < n; i++) {
            if(a.charAt(i) == b.charAt(i)){
                same++;
            }
        }
        int count = n -same;
        return count;
    }
   
	public List<String> twoEditWords(String[] queries, String[] dictionary) {
		List<String> ans = new ArrayList<>();
		for (String query : queries) {
			for (String word : dictionary) {
				int diff = diff(query, word);
				if (diff <= 2) {
					ans.add(query);
					break;
				}
			}
		}
		return ans;
	}
}
```
Using Trie Data Structure Solution
Time Complexity: O(n * k + m * k)
Space Complexity : O(n * k * 26)
m = length queries array
n  = length dictionary array
m = length String 

```
class Solution {
    private static class Node {
		private char data;
		private boolean isEnd;
		private Node[] children;

		public Node(char data) {
			this.data = data;
			this.isEnd = false;
			this.children = new Node[26];
		}
	}

	private Node root = new Node('/');

	private void insertWord(String word) {
		Node curr = root;
		for (int i = 0; i < word.length(); i++) {
			int childIdx = word.charAt(i) - 'a';
			if (curr.children[childIdx] == null) {
				curr.children[childIdx] = new Node(word.charAt(i));
			}
			curr = curr.children[childIdx];
		}
		curr.isEnd = true;
	}

	private boolean searchWord(Node root, String word, int count, int index) {
		if (index == word.length()) {
			return count <= 2;
		}
		boolean ans = false;
		for (int i = 0; i < root.children.length; i++) {
			if (root.children[i] != null) {
				ans |= searchWord(root.children[i], word, count + (((word.charAt(index) - 'a') == i) ? 0 : 1),
						index + 1);
			}
		}
		return ans;
	}

	public List<String> twoEditWords(String[] queries, String[] dictionary) {
		List<String> ans = new ArrayList<>();
		for (String word : dictionary) {
			insertWord(word);
		}
		for (String query : queries) {
			Node curr = root;
			if (searchWord(curr, query, 0, 0)) {
				ans.add(query);
			}
		}
		return ans;
	}
}
```
Some Other Problems Using Trie Data Structure 
[1268 : Search Suggestions System](https://leetcode.com/problems/search-suggestions-system/discuss/2638534/java-solution-using-trie-runtime-37-ms-beats-7219)
[1233 : Remove Sub-Folders from the Filesystem](https://leetcode.com/problems/remove-sub-folders-from-the-filesystem/discuss/2638522/java-solution-using-trie-runtime-43-ms-beats-9605)
[648	: Replace Words](https://leetcode.com/problems/replace-words/discuss/2638625/java-solution-using-trie-runtime-14-ms-beats-962219)
[820	: Short Encoding of Words](https://leetcode.com/problems/short-encoding-of-words/discuss/2639021/java-solution-using-trie)
[208	: Implement Trie (Prefix Tree)](https://leetcode.com/problems/implement-trie-prefix-tree/discuss/2638657/simple-java-solution)
[386	: Lexicographical Numbers](https://leetcode.com/problems/lexicographical-numbers/discuss/2639107/java-solution-using-trie)
[1023 : Camelcase Matching](https://leetcode.com/problems/camelcase-matching/discuss/2639736/java-solution-using-trie)
[677	: Map Sum Pairs](https://leetcode.com/problems/map-sum-pairs/discuss/2639994/java-solution-using-trie-and-hashmap)
[676	: Implement Magic Dictionary](https://leetcode.com/problems/implement-magic-dictionary/discuss/2640276/java-solution-using-trie)
[421	: Maximum XOR of Two Numbers in an Array](https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/discuss/2643276/java-trie-approach-add-number-and-check-its-max-xor-on-fly-tc-on-and-sc-on)
[792	: Number of Matching Subsequences](https://leetcode.com/problems/number-of-matching-subsequences/discuss/2643489/java-solutions-two-approach-1-using-trie-2-hashmap)
[720	: Longest Word in Dictionary](https://leetcode.com/problems/longest-word-in-dictionary/discuss/2643586/java-solution-using-trie-dfs)
[2261 : K Divisible Elements Subarrays](https://leetcode.com/problems/k-divisible-elements-subarrays/discuss/2643761/java-solution-sliding-window-trie-runtime-41-ms-faster-than-9846)
[139	: Word Break](https://leetcode.com/problems/word-break/discuss/2643915/java-solutions-two-approach-1-using-trie-bfs-2-dp)
[211	: Design Add and Search Words Data Structure](https://leetcode.com/problems/design-add-and-search-words-data-structure/discuss/2643839/java-solution-using-trie-dfs)
[1948 : Delete Duplicate Folders in System](https://leetcode.com/problems/delete-duplicate-folders-in-system/discuss/2646138/java-solution-using-trie-with-postorder-and-inorder-dfs-traversal)
[1032 : Stream of Characters](https://leetcode.com/problems/stream-of-characters/discuss/2646970/java-solution-using-trie)
[212. Word Search II](https://leetcode.com/problems/word-search-ii/discuss/2779677/Java-Solution-or-Using-Trie)