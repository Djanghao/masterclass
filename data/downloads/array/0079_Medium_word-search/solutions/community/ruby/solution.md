# Ruby DFS solution

**Author:** zivojin1998
**Votes:** 6
**Link:** [https://leetcode.com/problems/word-search/solutions/1758958/](https://leetcode.com/problems/word-search/solutions/1758958/)

---

Regular ruby dfs does not pass. I added to check if the matrix contains all the letters in the word. The broking example was:
```
[["A","A","A","A","A","A"],["A","A","A","A","A","A"],["A","A","A","A","A","A"],["A","A","A","A","A","A"],["A","A","A","A","A","A"],["A","A","A","A","A","A"]]
"AAAAAAAAAAAAAAB"
```
Here we can see that we can not construct the word from the begining so we early return.
```
def dfs(board,word,i,j)
    return true if word == ''
    return false if i < 0 || j<0 || i >= board.length || j>= board[0].length || board[i][j]!=word[0]
    pom = board[i][j]
    board[i][j] = '#'
    word = word[1..-1]
    return true if dfs(board,word,i-1,j)
    return true if dfs(board,word,i,j-1)
    return true if dfs(board,word,i+1,j)
    return true if dfs(board,word,i,j+1)
    board[i][j] = pom
    return false
end
def exist(board, word)
    set1 = board.flatten.to_set
    set2 = word.split('').to_set
    return false if !(set1 >= set2)
    (0...board.length).each do |i|
        (0...board[0].length).each do |j|
            return true if dfs(board,word,i,j)
        end
    end
    return false
end
```