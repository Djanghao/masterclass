# Java backtracking solution

**Author:** soymuybien
**Votes:** 300
**Link:** [https://leetcode.com/problems/generalized-abbreviation/solutions/77190/](https://leetcode.com/problems/generalized-abbreviation/solutions/77190/)

---

The idea is: for every character, we can keep it or abbreviate it. To keep it, we add it to the current solution and carry on backtracking. To abbreviate it, we omit it in the current solution, but increment the count, which indicates how many characters have we abbreviated. When we reach the end or need to put a character in the current solution, and count is bigger than zero, we add the number into the solution.



      public List<String> generateAbbreviations(String word){
            List<String> ret = new ArrayList<String>();
            backtrack(ret, word, 0, "", 0);
    
            return ret;
        }
    
        private void backtrack(List<String> ret, String word, int pos, String cur, int count){
            if(pos==word.length()){
                if(count > 0) cur += count;
                ret.add(cur);
            }
            else{
                backtrack(ret, word, pos + 1, cur, count + 1);
                backtrack(ret, word, pos+1, cur + (count>0 ? count : "") + word.charAt(pos), 0);
            }
        }