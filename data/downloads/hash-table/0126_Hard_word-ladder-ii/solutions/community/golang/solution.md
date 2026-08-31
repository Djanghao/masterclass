# 25 ms | Use less memory than 97% | BFS + DFS | Golang |

**Author:** mbfibat
**Votes:** 5
**Link:** [https://leetcode.com/problems/word-ladder-ii/solutions/2423621/](https://leetcode.com/problems/word-ladder-ii/solutions/2423621/)

---

- Let consider each string in ```wordList``` as a vertex on a graph, and if two strings differ by at most one character, we will connect an edge with weight ```1``` between them. The problem become: "Find the shortest path, single source, single destination, on a graph where each edge's weight is equal to 1".

- The aforementioned problem is a basic BFS implementation, where the source vertex is ```beginWord```, and the destination is ```endWord```. Since I'm a new user in Golang, I'm not sure if storing each state in a hashmap the correct way to do this(?) Please let me know in the comment for a better way.

- After having calculated the distance between each vertex to the source, we can simply use a recursive function to find all the solutions. 

- **Note:** I'm not sure if the number of solutions are too large are not. If it's too big, there's no way we can find all the solutions using recursive function, as it would take forever.

***Implementation:***
```
func difChar(a, b string) int { // Function to calculate the number of different chars between 2 strings
    ans := 0
    for id, _ := range a {
        if a[id] != b[id] {
            ans++
        }
    }    
    return ans
}

func findLadders(beginWord string, endWord string, wordList []string) [][]string {
    mp := map[string]int{beginWord:0} // Hashmap to store the distance to the source, also set mp[beginWord] = 0
    q := make([]string, 0) // Queue to BFS
    q = append(q, beginWord) // Insert the source to the queue
    for len(q) > 0 { // While the queue is not empty
        curWord := q[0] // Get the front of the queue
        q = q[1:] // Remove the front of the queue
        for _, nxtWord := range wordList { // Iterate all next states
            if _, have := mp[nxtWord]; !have && difChar(curWord, nxtWord) == 1 { // If the next state has not been visited yet
                q = append(q, nxtWord) // We push it to the queue
                mp[nxtWord] = mp[curWord] + 1 // And update the distance
            }
        }
    }
    
    ans := [][]string{} // Initialize the answer
    if _, have := mp[endWord]; !have { // If we can't reach the end vertex
        return ans // Return empty
    }

    var dfs func(curWord string, cur []string) 
    dfs = func(curWord string, cur []string) { // Anonymous function for inserting into answer easier
        cur = append(cur, curWord) // Insert the current string 
        if (mp[curWord] == 1) { // If we has reach the end state
            cur = append(cur, beginWord) // Insert beginWord, since we stop at distance = 1
            tmp := cur // Remember to reverse the current string list
            for i, j := 0, len(tmp)-1; i < j; i, j = i + 1, j - 1 {
                tmp[i], tmp[j] = tmp[j], tmp[i]
            }
            ans = append(ans, tmp) // Add it to answer
            cur = cur[:len(cur)-2] // And remove the new two just-added strings
            return;
        }           
        for _, nxtWord := range wordList {
            if _, have := mp[nxtWord]; have && difChar(curWord, nxtWord) == 1 && mp[curWord] == mp[nxtWord] + 1 {
                dfs(nxtWord, cur)
            }
        }        
        cur = cur[:len(cur)-1] // Remove the last string
    }
    dfs(endWord, []string{}) // Begin recursion
    
    return ans
}
```