# 🥇 C++ | PYTHON | JAVA || EXPLAINED  || ; ] ✅

**Author:** karan_8082
**Votes:** 26
**Link:** [https://leetcode.com/problems/find-words-containing-character/solutions/4330341/](https://leetcode.com/problems/find-words-containing-character/solutions/4330341/)

---

**UPVOTE IF HELPFuuL**

# Approach
Basic iteration through the array.
For every index check that the given char ``x``` is present in the word or not.


```Python []
class Solution:
    def findWordsContaining(self, words: List[str], x: str) -> List[int]:
        res = []
        for i in range(len(words)):
            if x in words[i]:
                res.append(i)
        return res
```
```C++ []
class Solution {
public:
    vector<int> findWordsContaining(vector<string>& words, char x) {
        vector<int> output;
        for(int i=0; i < words.size(); i++){
            string word = words[i];
            if(words[i].find(x) != std::string::npos) {
                output.push_back(i);
            }
        }
        return output;
    }
};
```
```Java []
class Solution {
	public List<Integer> findWordsContaining(String[] words, char x) {
		List<Integer> list = new ArrayList<>();
		for(int i=0; i<words.length; i++){
			if(words[i].indexOf(x) != -1){
				list.add(i);
			}
		}
		return list;
	}
}
```

**![IMG_3740.JPG](./images/0.jpeg)**

