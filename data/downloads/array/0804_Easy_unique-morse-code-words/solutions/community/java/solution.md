# ✅Short || C++ || Java || PYTHON || Explained Solution✔️ || Beginner Friendly ||🔥 🔥 BY MR CODER

**Author:** mrcoderrm
**Votes:** 23
**Link:** [https://leetcode.com/problems/unique-morse-code-words/solutions/2437353/](https://leetcode.com/problems/unique-morse-code-words/solutions/2437353/)

---

**Please UPVOTE if you LIKE!!**
**Watch this video \uD83E\uDC83 for the better explanation of the code.**

https://www.youtube.com/watch?v=uFNUoytk270


**Also you can SUBSCRIBE  \uD83E\uDC81 \uD83E\uDC81 \uD83E\uDC81 this channel for the daily leetcode challange solution.**

https://t.me/dsacoder  \u2B05\u2B05 **Telegram link** to discuss leetcode daily questions and other dsa problems
**C++**
```
  class Solution {
  public:


  int uniqueMorseRepresentations(vector<string>& words) 
  {
  	vector<string> a = {".-","-...","-.-.","-..",".","..-.","--.","....",
                  "..",".---","-.-",".-..","--","-.","---",".--.",
                  "--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."};

  	unordered_map<string,int> um;

  	for (int i=0; i< words.size(); i++) {
  		string st;
  		for (int j=0; j<words[i].size(); j++) st += a[words[i][j] - 'a'];
  		um[st]=1;
  	 }

  return um.size ();
  }
  };
```

**PYTHON**(copied)

```
class Solution:
    def uniqueMorseRepresentations(self, words: List[str]) -> int:
        s = set()
        mos = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
        
        for w in words:                    
            m = ''
            for l in w:                       
                m += mos[ord(l) - ord('a')] 
            s.add(m)                      
        
        return len(s)
```
**JAVA**(copied)

```
class Solution {
    private final String[] morseCodes = {
        ".-",
        "-...",
        "-.-.",
        "-..",
        ".",
        "..-.",
        "--.",
        "....",
        "..",
        ".---",
        "-.-",
        ".-..",
        "--",
        "-.",
        "---",
        ".--.",
        "--.-",
        ".-.",
        "...",
        "-",
        "..-",
        "...-",
        ".--",
        "-..-",
        "-.--",
        "--.."
    };

    public int uniqueMorseRepresentations(String[] words) {
        final Set<String> codes = new HashSet<>();

        for (String word : words) {
            final StringBuilder morseCode = new StringBuilder();
            for (int i = 0, n = word.length(); i < n; i++) {
                morseCode.append(morseCodes[word.charAt(i) - 'a']);
            }
            codes.add(morseCode.toString());
        }

        return codes.size();
    }
}
```
**Please UPVOTE  to motivate me for solving more questions like this and clubbing all languages solution!!**