# Count all alphabets with explanation | Clean code

**Author:** anupsingh556
**Votes:** 5
**Link:** [https://leetcode.com/problems/find-common-characters/solutions/5261899/](https://leetcode.com/problems/find-common-characters/solutions/5261899/)

---

# Intuition
- This looks like a counting problem we can maintain a res array which will store count of all characters that appear in every string
- At the end we can get our string from this array
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
- The code part is self explanatory if you look at code once but here is step by step explanation for beginners
- We are using res vector to count occurence of char present in all string. We initialise it to INT_MAX for all chars
- Traverse through input array and store all chars count in count vector
- Update our res array to be minimum of count and current value in res array
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n*len) where n is size of input array and len is length of input string.
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(len) where len is the length of string in input array. We are creating res array which is of constant size and resArray which can be of size O(size of string) in worst case.
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code

```c++ []
class Solution {
public:
    vector<string> commonChars(vector<string>& a) {
        vector<int> res(26, INT_MAX);

        for(int i=0;i<a.size();i++) {
            vector<int> count(26, 0);
            for(int j=0;j<a[i].size();j++) count[a[i][j]-'a']++;
            for(int j=0;j<26;j++)res[j]=min(res[j], count[j]);
        }

        vector<string> resArray;
        for(int i=0;i<26;i++) {
            while(res[i]!=0) {
                resArray.push_back(string(1, 'a' + i));
                res[i]--;
            }
        }
        return resArray;
    }
};
```
```go []
func commonChars(a []string) []string {
	res := make([]int, 26)
	for i := range res {
		res[i] = math.MaxInt32
	}

	for _, s := range a {
		count := make([]int, 26)
		for _, char := range s {
			count[char-'a']++
		}
		for i := 0; i < 26; i++ {
			res[i] = min(res[i], count[i])
		}
	}

	var resArray []string
	for i := 0; i < 26; i++ {
		for res[i] != 0 {
			resArray = append(resArray, string('a'+i))
			res[i]--
		}
	}
	return resArray
}
```
