# Simple Java PriorityQueue + HashMap!

**Author:** bmask
**Votes:** 0
**Link:** [https://leetcode.com/problems/the-wording-game/solutions/4116553/](https://leetcode.com/problems/the-wording-game/solutions/4116553/)

---

# Intuition
Categorize words by their first char in a HashMap and then Sort them in a PriorityQueue Asc (lexicographically smaller)

# Approach
Priority Queue + HashMap

# Complexity

# Code
```
class Solution {
    public boolean canAliceWin(String[] a, String[] b) {
        HashMap<Character, PriorityQueue<String>> aliceWords = new HashMap<>();
        // find the smallest char in Alice list to start with
        char currChar = 'z';
        for(String word : a) {
            char c = word.charAt(0);
            if(currChar>c) currChar=c;
            aliceWords.computeIfAbsent(c, k -> new PriorityQueue<String>()).add(word);
        } 

        HashMap<Character, PriorityQueue<String>> bobWords = new HashMap<>();
        for(String word : b) {
            char c = word.charAt(0);
            bobWords.computeIfAbsent(c, k -> new PriorityQueue<String>()).add(word);
        } 

        String alicePicked = getNextWord(currChar, "", aliceWords);
        String bobPicked = "";
        while(alicePicked!=null) {
            bobPicked = getNextWord(alicePicked.charAt(0), alicePicked, bobWords);
            if(bobPicked == null) return true;
            alicePicked = getNextWord(bobPicked.charAt(0), bobPicked, aliceWords);
        }

        return false;
    }

    private String getNextWord(char currChar, String prevPicked, HashMap<Character, PriorityQueue<String>> words) {
        String nextWordPick = null;
        char nextChar = (char) (currChar+1); // next possible char if there is no valid word exists for the current char
        if(!words.containsKey(currChar) && !words.containsKey(nextChar)) return nextWordPick;
        if(words.containsKey(currChar)) {
            PriorityQueue<String> pq = words.get(currChar);
            // look for a lexicographically bigger String 
            while(!pq.isEmpty() && pq.peek().compareTo(prevPicked)<0) pq.poll();
            if(pq.isEmpty()) {
                if(!words.containsKey(nextChar)) return nextWordPick;
                nextWordPick = words.get(nextChar).poll();
                if(words.get(nextChar).isEmpty()) words.remove(nextChar);
            } else nextWordPick = pq.poll();

            if(pq.isEmpty()) words.remove(currChar);
            else words.put(currChar, pq);
        } else {
            nextWordPick = words.get(nextChar).poll();
            if(words.get(nextChar).isEmpty()) words.remove(nextChar);
        }

        return nextWordPick;
    }
}
```