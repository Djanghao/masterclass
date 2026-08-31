# [Java] 4 ms 100% BFS explanation and complexity analysis

**Author:** shk10
**Votes:** 17
**Link:** [https://leetcode.com/problems/stickers-to-spell-word/solutions/962702/](https://leetcode.com/problems/stickers-to-spell-word/solutions/962702/)

---

Model the problem in terms of a graph.

- A string represents a vertex.
- Define *applying a sticker* on a string as a new string having the union of characters from both strings. With that definition, each vertex has ```stickers.length``` edges corresponding to applying each sticker ```stickers[i]``` on current vertex string.
- Our goal is to find the length of shortest path from empty string ```""``` vertex to ```target``` string vertex.

Once we see this modelling, BFS suits perfectly for our use case.

Some notes with regards to my implementation below:
* I am finding the shortest path from ```target``` string to empty string ```""``` with the definition of *applying a sticker* reversed i.e. removing the sticker characters from current string.
* **Optimization 1** ([from Solution article](https://leetcode.com/problems/stickers-to-spell-word/solution/)): we only need to concern ourselves with characters present in ```target``` string so no need to keep all 26 characters.
* **Optimization 2** ([from Solution article](https://leetcode.com/problems/stickers-to-spell-word/solution/)): we can ignore all the dominated stickers from consideration. For example, let's say ```a```'s and ```b```'s are required in ```target```, it is always better to choose sticker ```abb``` over sticker ```ab``` because either of them count as 1 only but choosing former gives us 1 ```b``` extra. So we can say that sticker ```ab``` is dominated by some other sticker (```abb```) and an optimal solution can always be found without using it.
* **Optimization 3**: Only apply stickers (i.e. explore the edges) which remove the first character from current string (vertex). *How does that still guarantee correctness?* Reason: If stickers s1 -> s1 -> s2 -> s3 is the shortest path to our destination then so is s2 -> s1 -> s3 -> s1 or any other permutation of s1, s1, s2 and s3 since order of applying stickers don't matter to the final result. So we might be applying only selected stickers (exploring less edges) now but first character might change for subsequent vertices and then we might apply other stickers ensuring that we're moving towards atleast some permutation of the optimal combination of stickers.

```
class Solution {
    private boolean empty(int[] freq) {
        for(int f: freq) if(f > 0) return false;
        return true;
    }
    private String toString(int[] freq) {
        StringBuilder sb = new StringBuilder();
        char c = 'a';
        for(int f: freq) {
            while(f-- > 0) sb.append(c);
            c++;
        }
        return sb.toString();
    }
    public int minStickers(String[] stickers, String target) {
        // Optimization 1: Maintain frequency only for characters present in target
        int[] targetNaiveCount = new int[26];
        for(char c: target.toCharArray()) targetNaiveCount[c - 'a']++;
        int[] index = new int[26];
        int N = 0;  // no of distinct characters in target
        for(int i = 0; i < 26; i++) index[i] = targetNaiveCount[i] > 0 ? N++ : -1;
        int[] targetCount = new int[N];
        int t = 0;
        for(int c: targetNaiveCount) if(c > 0) {
            targetCount[t++] = c;
        }
        int[][] stickersCount = new int[stickers.length][N];
        for(int i = 0; i < stickers.length; i++) {
            for(char c: stickers[i].toCharArray()) {
                int j = index[c - 'a'];
                if(j >= 0) stickersCount[i][j]++;
            }
        }
        // Optimization 2: Remove stickers dominated by some other sticker
        int start = 0;
        for(int i = 0; i < stickers.length; i++) {
            for(int j = start; j < stickers.length; j++) if(j != i) {
                int k = 0;
                while(k < N && stickersCount[i][k] <= stickersCount[j][k]) k++;
                if(k == N) {
                    int[] tmp = stickersCount[i];
                    stickersCount[i] = stickersCount[start];
                    stickersCount[start++] = tmp;
                    break;
                }
            }
        }
        // Perform BFS with target as source and an empty string as destination
        Queue<int[]> Q = new LinkedList<>();
        Set<String> visited = new HashSet<>();
        Q.add(targetCount);
        int steps = 0;
        while(!Q.isEmpty()) {
            steps++;
            int size = Q.size();
            while(size-- > 0) {
                int[] freq = Q.poll();
                String cur = toString(freq);
                if(visited.add(cur)) {
                    // Optimization 3: Only use stickers that are capable of removing first character from current string
                    int first = cur.charAt(0) - 'a';
                    for(int i = start; i < stickers.length; i++) if(stickersCount[i][first] != 0) {
                        int[] next = freq.clone();
                        for(int j = 0; j < N; j++) next[j] = Math.max(next[j] - stickersCount[i][j], 0);
                        if(empty(next)) return steps;
                        Q.add(next);
                    }
                }
            }
        }
        return -1;
    }
}
```

**Complexity analysis:**
This part is easy for most problems but not this one.
Let T = no of characters in ```target```, S = no of ```stickers```, D = no of distinct characters in ```target```.
1. Calculating frequencies for target and stickers: O(S\\*26 + S\\*D) = O(26\\*S) (since D <= 26) = O(S)
2. Removing dominated stickers: O(S<sup>2</sup>\\*D) = O(S<sup>2</sup>)
3. During BFS, let's say no of vertices we explore are V (we'll figure out its value in a minute), then time spent per vertex: O(S\\*D) = O(S)

How many vertices can we explore in the worst case?
Let's f(1), f(2), ... f(D) be the frequencies of each distinct character in ```target```, then we'd explore (in the worst case) all the strings possible using these characters but never exceeding corresponding frequencies. So each character's frequency could independently range from 0 to f(i) essentially giving us the result as R = (f(1) + 1) * (f(2) + 1) * ... (f(D)+1). BTW this is identical to calculating number of factors of a number using its prime factorization.

For what values of D and f(i) is this expression R maximized? We can choose f(i) = 1 for each character which means D = T.
V = (1 + 1) * (1 + 1) ... (D = T times) = O(2<sup>T</sup>)

Time complexity: O(S + S<sup>2</sup> + V * S) = O(S<sup>2</sup> + 2<sup>T</sup> * S)
Space complexity: O(V) = O(2<sup>T</sup>)