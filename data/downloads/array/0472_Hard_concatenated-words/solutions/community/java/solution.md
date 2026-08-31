# Java Common template - Word Break I, Word Break II, Concatenated Words

**Author:** bluesky299
**Votes:** 245
**Link:** [https://leetcode.com/problems/concatenated-words/solutions/348972/](https://leetcode.com/problems/concatenated-words/solutions/348972/)

---

* Word Break I - [Link](https://leetcode.com/problems/word-break/)
* Word Break II - [Link](https://leetcode.com/problems/word-break-ii/) 
* Concatenated Words - [Link](https://leetcode.com/problems/concatenated-words/)

Common approach for Word Break I, Word Break II, and Concatenated Words problems. 
Concatenated Words is the reverse process of Word Break I, hence can be broken down to Word Break I.

1. Word Break I  
      This is the top-Down approach
	   
	   class Solution { 
	   
	   public boolean wordBreak(String s, List<String> wordDict) {
        
        // Need to use Boolean[] memo instead of boolean[], because we store both "true" and "false" in this array
        // and need to return our pre-calculated result of "true/"false" when we hit the scenario,
        // if it is not yet precomputed, the value will be "null"
        
        // If boolean[] is used, then the array will be initialized with "false", 
        // this might not be the pre-computed "false"
        return topDown(s, new HashSet<>(wordDict), 0, new Boolean[s.length()]);
       }
    
      
	    private boolean topDown(String s, Set<String> wordDict, int startIndex, Boolean[] memo) {
        
		// if we reach the beyond the string, then return true
        // s = "leetcode" when "code" is being checked in the IF() of the loop, we reach endIndex == s.length(), 
        // and wordDict.contains("code") => true and topDown(s, wordDict, endIndex, memo) needs to return true. 
        if(startIndex == s.length()) {
            return true;
        }
        
        // memo[i] = true means => that the substring from index i can be segmented. 
        // memo[startIndex] means => wordDict contains substring from startIndex and it can be segemented.
        if(memo[startIndex] != null) { //Boolean[] array's default value is "null"
            return memo[startIndex];
        }
        
        for(int endIndex = startIndex + 1; endIndex <= s.length(); endIndex++) {
            if(wordDict.contains(s.substring(startIndex, endIndex)) && topDown(s, wordDict, endIndex, memo)) {
                memo[startIndex] = true;
                return true;
            }
        }
        memo[startIndex] = false;
        return false;
         }
       }
	  Time Complexity : O(n^3)
	  
	  
	  This is the bottom-up approach, where base case is dp[0] = true, because string of length 0 (empty string) is present in wordDict.
	   dp[i] = true => means a valid word (word that exists in wordDict) ends at index i.

       class Solution {
	
       public boolean wordBreak(String s, List<String> wordDict) {
        boolean[] dp = new boolean[s.length() + 1]; //DP array to store previous results.
        dp[0] = true; //default value.
        
        for(int i=1; i <= s.length(); i++){
            for(int j=0; j < i; j++){
                if(dp[j] && wordDict.contains(s.substring(j, i))){
                    dp[i] = true;
                    break;
                }
            }
        }
        return dp[s.length()];
        }
       }

Time Complexity : O(n^3) since substring() in Java version > 7 takes O(n) time.




2. Word Break II - use a HashMap to store previously computed results. You check given string starts with any of the words from wordDict, instead of checking every prefix of 's' in wordDict.

       
	   class Solution {	
       public List<String> wordBreak(String s, List<String> wordDict) {	
        return DFS(s, wordDict, new HashMap<String, List<String>>());
       }
       
	   public List<String> DFS(String s, List<String> wordDict, Map<String, List<String>> map){
        
        if(map.containsKey(s)) return map.get(s);
        
        List<String> result = new ArrayList<>();
        for(String word : wordDict){
            if(s.startsWith(word)){
               String nextWord = s.substring(word.length());
               if(nextWord.length() == 0) 
                   result.add(word);
               else{
                   for(String w : DFS(nextWord, wordDict, map)) 
                       result.add(word + " " + w);
                   } 
            }            
        }
        map.put(s, result);
        return result;
        }
       }
	   
Time Complexity: O(n^3).
This approach is too time consuming if the wordDict has millions of words.

Another approach based on Word Break I, where we check if every prefix of given string exists in wordDict -

    class Solution {
    
    public Map<String, List<String>> memo = new HashMap<String, List<String>>(); 
    
    public List<String> wordBreak(String s, List<String> wordDict) {
        return topDown(s, new HashSet<>(wordDict), memo);
    }
    
    private List<String> topDown(String s, Set<String> wordDict, Map<String, List<String>> memo) {
        
        if(memo.containsKey(s)) {
            return memo.get(s);
        }
        
        List<String> result = new ArrayList<String>();
        if(wordDict.contains(s)) {
            result.add(s);
        }
        
        for(int endIndex = 1; endIndex <= s.length(); endIndex++) {
            if(wordDict.contains(s.substring(0, endIndex))) {
                for (String ss : topDown(s.substring(endIndex), wordDict, memo)) {
                    result.add(s.substring(0, endIndex) + " " + ss);
                }
            }
        }
        memo.put(s, result);
        return result;
    }
    }


3. Concatenated Words - Call Word Break I function to check if a word can be concatenated by the list of words in preWords set.
      
	  This is the top-down approach - 

       class Solution {
       public List<String> findAllConcatenatedWordsInADict(String[] words) {
        //sort the array in asc order of word length, since longer words are formed by shorter words.
        Arrays.sort(words, (a,b) -> a.length() - b.length());

         List<String> result = new ArrayList<>();

         //list of shorter words 
         HashSet<String> preWords = new HashSet<>();

         for(int i=0; i< words.length; i++){
             //Word Break-I problem.
             if(topDown(words[i], preWords, 0, new Boolean[words[i].length()])) {
                 result.add(words[i]);
             }
             preWords.add(words[i]);
         }
         return result;
        }
    
       private boolean topDown(String s, HashSet<String> wordDict, int startIndex, Boolean[] memo) {
        if(wordDict.isEmpty()) {
            return false;
        }
        // if we reach the beyond the string, then return true
        // s = "leetcode" when "code" is being checked in the IF() of the loop, we reach endIndex == s.length(), 
        // and wordDict.contains("code") => true and topDown(s, wordDict, endIndex, memo) needs to return true. 
        if(startIndex == s.length()) {
            return true;
        }
        
        // memo[i] = true means => that the substring from index i can be segmented. 
        // memo[startIndex] means => wordDict contains substring from startIndex and it can be segemented.
        if(memo[startIndex] != null) { //Boolean[] array's default value is "null"
            return memo[startIndex];
        }
        
        for(int endIndex = startIndex + 1; endIndex <= s.length(); endIndex++) {
            if(wordDict.contains(s.substring(startIndex, endIndex)) && topDown(s, wordDict, endIndex, memo)) {
                memo[startIndex] = true;
                return true;
            }
        }
        memo[startIndex] = false;
        return false;
       }
       } 

	  
This is the bottom-up approach - 

       class Solution {	 
       public List<String> findAllConcatenatedWordsInADict(String[] words) {
	   
        //sort the array in asc order of word length, since longer words are formed by shorter words.
        Arrays.sort(words, (a,b) -> a.length() - b.length());
        
		List<String> result = new ArrayList<>();
        
        //list of shorter words 
        HashSet<String> preWords = new HashSet<>();
        
        for(int i=0; i< words.length; i++){
            //Word Break-I problem.
            if(wordBreak(words[i], preWords)) result.add(words[i]);
            preWords.add(words[i]);
        }
        return result;
       }
       
	   private boolean wordBreak(String s, HashSet<String> preWords){
        if(preWords.isEmpty()) return false;
        
        boolean[] dp = new boolean[s.length() + 1];
        dp[0] = true;
        
        for(int i = 1; i <= s.length(); i++){
            for(int j = 0; j < i; j++){
                if(dp[j] && preWords.contains(s.substring(j, i))){
                    dp[i] = true;
                    break;
                }
            }
        }
        return dp[s.length()];
       }
       }
	   
	   
Time Complexity: O(total no.of words * (n^3)) where n = avg length of each word.

