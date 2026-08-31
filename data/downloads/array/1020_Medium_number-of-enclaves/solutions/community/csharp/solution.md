# 💢☠💫Easiest👾Faster✅💯 Lesser🧠 🎯 C++✅Python3🐍✅Java✅C✅Python🐍✅C#✅💥🔥💫Explained☠💥🔥 Beats 100

**Author:** Edwards310
**Votes:** 3
**Link:** [https://leetcode.com/problems/number-of-enclaves/solutions/6026605/](https://leetcode.com/problems/number-of-enclaves/solutions/6026605/)

---

![0ehh83fsnh811.jpg](./images/0.jpeg)

<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
1. **Basic Approach for DFS Solutions is** ::-
2. **Since we can move up, right, down, left directions make a dir vector for that movement.**
3. **Make an vis array of bool type of same size as of image.**
4. **Start to traverse on matrix bounndaries & at baoundry if grid[i][j] == 1 this means this is the (i, j) from where we can go outside the matrix.**
5. **Call dfs for all such ones soo that they can mark all other 1's that are directly connected to boundry 1's in (left, top, right, bottom) directions.**
6. **After all dfs calls just check how many 1's are there in grid that are still unvisited. Count them and return the count.**
***DFS Solutions***
<!-- Describe your approach to solving the problem. -->
- ***JavaScript Code -->*** https://leetcode.com/problems/number-of-enclaves/submissions/1447532020
- ***C++ Code -->*** https://leetcode.com/problems/number-of-enclaves/submissions/1447475158
- ***Python3 Code -->*** https://leetcode.com/problems/number-of-enclaves/submissions/1447507942
- ***Java Code -->*** https://leetcode.com/problems/number-of-enclaves/submissions/1447485245
- ***C Code -->*** https://leetcode.com/problems/number-of-enclaves/submissions/1447542344
- ***Python Code -->*** https://leetcode.com/problems/number-of-enclaves/submissions/1447506440
- ***C# Code -->*** https://leetcode.com/problems/number-of-enclaves/submissions/1447510669
***
***BFS Solutions***
1. **Basic Approach for DFS Solutions is** ::-
2. **Since we can move up, right, down, left directions make a dir vector for that movement.**
3. **Make an vis array of bool type of same size as of image.**
4. **Now make a queue container that can store the type (row, col) a pair like structure [ {r, c }.... ].** 
5. **Start to traverse on matrix bounndaries & at baoundry if grid[i][j] == 1 this means this is the (i, j) from where we can go outside the matrix. push all such(i, j) in queue.**
6. **Check untill the queue is empty . Pop out the pair ({ r , c}) and find the other four directions and check if these are inside the image dimensions or not. Also check if grid[newr][newc] == 1 (because that is where we have to move) and check if that piece of land is already visited or filled or not by !vis[newr][newc] .**
7. **Now Just check how many 1's are there in grid that are still unvisited. Count them and return the count..**
- ***JavaScript Code -->*** https://leetcode.com/problems/number-of-enclaves/submissions/1447530801
- ***C++ Code -->*** https://leetcode.com/problems/number-of-enclaves/submissions/1447475158
- ***Python3 Code -->*** https://leetcode.com/problems/number-of-enclaves/submissions/1447507514
- ***Java Code -->*** https://leetcode.com/problems/number-of-enclaves/submissions/1447482742
- ***C Code -->*** https://leetcode.com/problems/number-of-enclaves/submissions/1447557240
- ***Python Code -->*** https://leetcode.com/problems/number-of-enclaves/submissions/1447501479
- ***C# Code -->*** https://leetcode.com/problems/number-of-enclaves/submissions/1447515018
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
     O(N * M)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
     O(N * M)
# Code
![th.jpeg](./images/1.jpeg)
