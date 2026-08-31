# Beats 100% | Java, JavaScript, Python, C++, C | Less Code | O( N )

**Author:** Ikapoor123
**Votes:** 3
**Link:** [https://leetcode.com/problems/repeated-dna-sequences/solutions/4719656/](https://leetcode.com/problems/repeated-dna-sequences/solutions/4719656/)

---

# Dont worry read these simple steps ... You can do it !!
# Approach
<!-- Describe your approach to solving the problem. -->
findRepeatedDnaSequences that efficiently finds all 10-letter long DNA sequences that appear more than once in a given DNA string.
- ans: This is a HashSet that will store the final list of unique repeated DNA sequences.
- enconter: This is another HashSet used to keep track of encountered DNA sequences during iteration.
- The for loop iterates through all possible 10-letter substrings in the s string (from index 0 to length-10).
- If dna is already present in the enconter set, it means it's encountered before, hence a duplicate, and it's added to the ans set.
- Regardless of whether it's a duplicate or not, the dna is added to the enconter set to mark it as encountered.
- Finally, the method returns a new ArrayList containing all the unique repeated DNA sequences found in ans.

# Still having doubt comment ....

# Complexity
- Time complexity:O(N)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:O(N)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
``` java []
class Solution {
    public List<String> findRepeatedDnaSequences(String s) {
        HashSet<String> ans = new  HashSet<>();
        HashSet<String> enconter = new HashSet<>();

        for(int i=0;i<s.length()-9;i++){
            String dna = s.substring(i, i+10);
            if(enconter.contains(dna))  ans.add(dna);
            enconter.add(dna);
        }
        return new ArrayList(ans);
    }
}
```
```javascript []
/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function(s) {
    const ans = new Set();
        const seen = new Set();
        for (let i = 0; i < s.length - 9; i++) {
            const dna = s.substring(i, i + 10);
            if (seen.has(dna)) {
                ans.add(dna);
            }
            seen.add(dna);
        }
        return Array.from(ans);
};
```
```python []
class Solution:
    def findRepeatedDnaSequences(self, s: str) -> List[str]:
        ans = set()
        seen = set()
        for i in range(len(s) - 9):
            dna = s[i:i+10]
            if dna in seen:
                ans.add(dna)
            seen.add(dna)
        return list(ans)
```
```C++ []
class Solution {
public:
    vector<string> findRepeatedDnaSequences(string s) {
        unordered_set<string> ans, seen;
        for (int i = 0; i < s.size() - 9; ++i) {
            const string dna = s.substr(i, 10);
            if (seen.count(dna)) {
                ans.insert(dna);
            }
            seen.insert(dna);
        }
        return vector<string>(ans.begin(), ans.end());
    }
};
```
# Just
![smile.png](./images/0.png)
