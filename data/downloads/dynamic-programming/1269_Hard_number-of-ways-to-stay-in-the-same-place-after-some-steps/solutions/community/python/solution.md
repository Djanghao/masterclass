# 7 python approaches with Time and Space analysis

**Author:** rayfengli
**Votes:** 34
**Link:** [https://leetcode.com/problems/number-of-ways-to-stay-in-the-same-place-after-some-steps/solutions/569521/](https://leetcode.com/problems/number-of-ways-to-stay-in-the-same-place-after-some-steps/solutions/569521/)

---

# APP1: DFS. Time: O(3^N) Space: O(1). 
# Result: TLE when 27, 7
    def numWays(self, steps: int, arrLen: int) -> int:
        if steps is None or steps < 0 or not arrLen:
            return 0
        return self.dfs(steps, arrLen, 0)
        
    def dfs(self, steps, arrLen, pos):
        if pos < 0 or pos >= arrLen:
            return 0
        if steps == 0:
            return 1 if pos == 0 else 0
        return self.dfs(steps - 1, arrLen, pos - 1) + self.dfs(steps - 1, arrLen, pos) + self.dfs(steps - 1, arrLen, pos + 1)

# APP2: DFS + Memoization. Memo:{(step, index), ways}
# Time: O(steps * min(arrLen, steps + 1)), Space: O(steps * min(arrLen, steps + 1)) 
# Result: Accepted 50%
    def numWays(self, steps: int, arrLen: int) -> int:
        if steps is None or steps < 0 or not arrLen:
            return 0
        memo = {}
        return self.dfs(steps, arrLen, 0, memo)

    def dfs(self, steps, arrLen, pos, memo):
        if (steps, pos) in memo:
            return memo[(steps, pos)]
        if pos < 0 or pos > arrLen - 1:
            memo[(steps, pos)] = 0
            return 0
        if steps == 0:
            return 1 if pos == 0 else 0
        memo[(steps, pos)] = self.dfs(steps - 1, arrLen, pos - 1, memo) + self.dfs(steps - 1, arrLen, pos, memo) \\
                             + self.dfs(steps - 1, arrLen, pos + 1, memo) 
        return memo[(steps, pos)] % (10 ** 9 + 7)

# APP3: DP. f[i][j]: total ways to get index j at ith step. ans = f[steps][0]. 
# f[i][j] = f[i - 1][j - 1] + f[i - 1][j] + f[i - 1][j + 1], f[0][0] = 1
# Time: O(steps * arrLen) Space: O(steps * arrLen) 
# Result: TLE when 430, 148488

    def numWays(self, steps: int, arrLen: int) -> int:
        if steps is None or steps < 0 or not arrLen:
            return 0
        f = [[0] * arrLen for _ in range(steps + 1)]
        f[0][0] = 1
        for i in range(1, steps + 1):
            for j in range(arrLen):
                f[i][j] += f[i - 1][j]
                if j > 0:
                    f[i][j] += f[i - 1][j - 1]
                if j < arrLen - 1:
                    f[i][j] += f[i - 1][j + 1]
        return f[steps][0] % (10 ** 9 + 7)
        
# APP4: DP. Optimize APP3. If steps = 3, even arrLen = 400, max we can reach index = steps + 1
# So we can optimize arrLen = min(arrLen, steps + 1), just add one line to APP2
# Time: O(steps * min(arrLen, steps + 1)), Space: O(steps * min(arrLen, steps + 1)) 
# Result: Runtime: 30% Memory: 100%
    def numWays(self, steps: int, arrLen: int) -> int:
        if steps is None or steps < 0 or not arrLen:
            return 0
        arrLen = min(arrLen, steps + 1)
        f = [[0] * arrLen for _ in range(steps + 1)]
        f[0][0] = 1
        for i in range(1, steps + 1):
            for j in range(arrLen):
                f[i][j] += f[i - 1][j]
                if j > 0:
                    f[i][j] += f[i - 1][j - 1]
                if j < arrLen - 1:
                    f[i][j] += f[i - 1][j + 1]
        return f[steps][0] % (10 ** 9 + 7)
    
# APP5: DP. Optimize APP4 using rolling array because you only need to know the previous step status
# But if you implemented like below, you're still allocating steps + 1 times new array
# If it doesn't trigger the gc, space is still O(steps * min(arrLen, steps + 1)) 
# Time: O(steps * min(arrLen, steps + 1)) Space: O(steps * min(arrLen, steps + 1))
# Result: Runtime: 50% Memory: 100%
    def numWays(self, steps: int, arrLen: int) -> int:
        if steps is None or steps < 0 or not arrLen:
            return 0
        arrLen = min(arrLen, steps + 1)
        prev = [1] + [0] * (arrLen - 1)
        for i in range(1, steps + 1):     
            cur = [0] * arrLen
            for j in range(arrLen):
                cur[j] += prev[j]
                if j > 0:
                    cur[j] += prev[j - 1]
                if j < arrLen - 1:
                    cur[j] += prev[j + 1]
            prev = cur
        return prev[0] % (10 ** 9 + 7)
    
# APP6: DP, Optimize APP5 impplementation. allocate two arrays memory only
# Time: O(steps * min(arrLen, steps + 1)) Space: O(min(arrLen, steps + 1))
# Result: Runtime: 48% Memory: 100%
    def numWays(self, steps: int, arrLen: int) -> int:
        if steps is None or steps < 0 or not arrLen:
            return 0
        arrLen = min(arrLen, steps + 1)
        prev = [1] + [0] * (arrLen - 1)
        cur = [0] * arrLen
        for i in range(1, steps + 1):     
            for j in range(arrLen):
                cur[j] = 0
                cur[j] += prev[j]
                if j > 0:
                    cur[j] += prev[j - 1]
                if j < arrLen - 1:
                    cur[j] += prev[j + 1]
            prev, cur = cur, prev
        return prev[0] % (10 ** 9 + 7)
		
# APP7: DP, Optimize APP6 impplementation since you only need one array and one variable to track left
    def numWays(self, steps, arrLen):
        # write your code here
        arrLen = min(arrLen, steps + 1) 
        f = [1]+[0]*(arrLen-1) # f[0] = 1
        
        for i in range(1, steps+1):
            old = 0 
            for j in range(arrLen):
                old_left = old
                old = f[j]
                if j > 0:
                    f[j] += old_left      
                if j < arrLen - 1:
                    f[j] += f[j+1]   
        return f[0] % (10 ** 9 + 7)