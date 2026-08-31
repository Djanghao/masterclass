# AC Java clean solution

**Author:** jeantimex
**Votes:** 261
**Link:** [https://leetcode.com/problems/shortest-word-distance/solutions/66931/](https://leetcode.com/problems/shortest-word-distance/solutions/66931/)

---

    public int shortestDistance(String[] words, String word1, String word2) {
        int p1 = -1, p2 = -1, min = Integer.MAX_VALUE;
        
        for (int i = 0; i < words.length; i++) {
            if (words[i].equals(word1)) 
                p1 = i;

            if (words[i].equals(word2)) 
                p2 = i;
                
            if (p1 != -1 && p2 != -1)
                min = Math.min(min, Math.abs(p1 - p2));
        }
        
        return min;
    }