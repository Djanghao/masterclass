# ✔Java greedy BFS Solution With Explanation💯

**Author:** harshu175
**Votes:** 27
**Link:** [https://leetcode.com/problems/k-similar-strings/solutions/1351170/](https://leetcode.com/problems/k-similar-strings/solutions/1351170/)

---

/*
The Basic intution behind th approach is related to **sliding puzzel question- leetcode 773**
What we will do is check all **possible swaps and compare them**. But will it be optimal?
So we will **greedly swap** the characters. **Our motive will be to place atleast one character at it's right place in one swap.**
Okayy...so what if there are multiple characters which will be great fit for that particular index?
So, we will swap with every character which is a great fit unless it's already at it's correct position.

**Step 1** - Add the initial stage of string

**Step 2** - Perform operations in bfs manner

**Step 3** - Each time the level changes indicates we have swapped on charcter and the queue hold all the possibilties of
         initial string after level no of swaps performed greedily.

**Step 4** - Check if the remove string is equal to the target or not?

**Step 5** - Find the first mis match ( tho we can take any mismatch char but first mis match will be easy to code). lets say 
         we found first mis match at ith position. now we will swap ith index with all the correct char at ith position 
         which are apperaing in between i + 1 to string length. But we will ignore that char which is already at correct
         position.

*/
```
class Solution {
    public int kSimilarity(String s1, String tar) {
        Queue<String> q = new ArrayDeque<>();
        q.add(s1);
        
        int lvl = 0;
        while(q.size() > 0){
            int size = q.size();
            while(size-- > 0){
                String s = q.remove();
                if(s.equals(tar))return lvl;
                
                
                int i = 0;
                while(s.charAt(i) == tar.charAt(i))i++;
                
                int j = i;
                
                while(j < s.length()){
                    if(s.charAt(j) == tar.charAt(i) && tar.charAt(j) != s.charAt(j)){
                        StringBuilder sb = new StringBuilder(s);
                        sb.setCharAt(i, s.charAt(j));
                        sb.setCharAt(j, s.charAt(i));
                        
						//A small optimization.
                        if(sb.toString().equals(tar))return lvl+1;
                        
                        q.add(sb.toString());
                    }
                    j++;
                }
            }
            lvl++;
        }
        return lvl;
    }
}

```

**Didn't found any Java solution. So decided to post. Please upvote if it help's**
Markdown is appreciated. 


