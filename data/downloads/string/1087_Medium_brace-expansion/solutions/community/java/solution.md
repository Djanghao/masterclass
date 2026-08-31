# Easy java solution with comments, beat 99.2%

**Author:** carl-sagan
**Votes:** 5
**Link:** [https://leetcode.com/problems/brace-expansion/solutions/428381/](https://leetcode.com/problems/brace-expansion/solutions/428381/)

---

```java
class Solution {
    List<List<Character>> parts;
    List<String> results;
    
    /**
        The idea is to convert the string into a DS like [[a,b],[c],[d,e],[f]].
        This way the DFS/recursion on a list of lists is easier to understand
    */
    public String[] expand(String S) {
        parts = new ArrayList<>();
        boolean start = false;
        List<Character> part = new ArrayList<>();
        // O(Slog(S))
        for (int i=0; i < S.length(); i++) {
            char ch = S.charAt(i);
            
            if (ch == ',') continue;
            
            if (ch == '{') {
                start = true;
                part = new ArrayList<>();
                continue;
            }
            
            if (ch == '}') {
                start = false;
                Collections.sort(part);
                parts.add(part);
                
                continue;
            }

            if (start) {
                part.add(ch);
            } else {
                parts.add(Arrays.asList(ch));
            }
        }
        
        results = new ArrayList<>();
        // O(S)
        getStrings(0, "");
        
        String [] arr = new String[results.size()];
        int index=0;
        for (String result: results) arr[index++] = result;
        
        return arr;
    }
    
    /**
      Just grab characters from each part and append to the result string.  
    */
    private void getStrings(int index, String result) {
        // If we reach the end then call it a result and return.
        if (index == parts.size()) {
            results.add(result);
            
            return;
        }
        
        List<Character> part = parts.get(index);
        for (char ch: part) {
            getStrings(index+1, result+ch);
        }
    }
}
```