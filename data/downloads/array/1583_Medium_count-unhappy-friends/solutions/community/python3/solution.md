# [Python] Make you happy with clean and concise solution

**Author:** abhattad4
**Votes:** 23
**Link:** [https://leetcode.com/problems/count-unhappy-friends/solutions/1890091/](https://leetcode.com/problems/count-unhappy-friends/solutions/1890091/)

---

The problem description is not very clear. Please find below clean, concise and self explanatory code. 
Time Complexity: O(n^2). Space Complexity: O(n^2)
Including comments in the code for better understanding. Kindly upvote if you like the solution.

		#Map to get pair mapping
        pairMap = defaultdict(int)
        #To get preference of person i with person j in O(1)
        prefer = {}
        
        #Populating pairMap
        for p1,p2 in pairs:
            pairMap[p1] = p2
            pairMap[p2] = p1
        
         #Populating prefer Map
        for i in range(len(preferences)):
            for j in range(n-1):
                if i not in prefer:
                    prefer[i] = {}
                prefer[i][preferences[i][j]] = j
        
        #Looping through preferences again to find if person i is unhappy
        res = 0
        for i in range(len(preferences)):
            for j in range(n-1):
                x = i
                y = pairMap[x]
                u = preferences[x][j]
                v = pairMap[u]
                if prefer[x][u] < prefer[x][y] and prefer[u][x] < prefer[u][v]:
                    res+=1
                    break
        return res