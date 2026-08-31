# [C++|Java|Python3] frequency table + mask

**Author:** ye15
**Votes:** 61
**Link:** [https://leetcode.com/problems/count-pairs-of-similar-strings/solutions/2923505/](https://leetcode.com/problems/count-pairs-of-similar-strings/solutions/2923505/)

---

Please pull this [commit](https://github.com/gaosanyong/leetcode/commit/af6e415cd101768ea8743ea9e4d22d788c9461c3) for solutions of weekly 324. 

**Intuition**
Here, we can use a mask to indicate what characters appear in a word, and use a hash table to indicate the frequency of a mask. 
**Implementation**
**C++**
```
class Solution {
public: 
	int similarPairs(vector<string>& words) {
		int ans = 0; 
		unordered_map<int, int> freq; 
		for (auto& word : words) {
			int mask = 0; 
			for (auto& c : word) mask |= 1 << (c-'a'); 
			ans += freq[mask]++; 
		}
		return ans; 
	}
};
```
**Java**
```
class Solution {
	public int similarPairs(String[] words) {
		int ans = 0; 
		HashMap<Integer, Integer> freq = new HashMap(); 
		for (var word : words) {
			int mask = 0; 
			for (var ch : word.toCharArray()) 
				mask |= 1<<ch-'a'; 
			ans += freq.getOrDefault(mask, 0); 
			freq.merge(mask, 1, Integer::sum); 
		}
		return ans; 
	}
}
```
**Python3**
```
class Solution: 
	def similarPairs(self, words: List[str]) -> int: 
		ans = 0
		freq = Counter()
		for word in words: 
			mask = reduce(or_, (1<<ord(ch)-97 for ch in word))
			ans += freq[mask]
			freq[mask] += 1
		return ans
```
**Complexity**
Time O(NW) 
Space O(N) 
