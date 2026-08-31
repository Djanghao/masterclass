# Python solution

**Author:** leetcode_dafu
**Votes:** 9
**Link:** [https://leetcode.com/problems/count-submatrices-with-all-ones/solutions/723109/](https://leetcode.com/problems/count-submatrices-with-all-ones/solutions/723109/)

---

loop through each row. use a list to record the height of each column,  and a stack to record the height and the # of additional submatrices created by column for each row

if the height of the cur column< that of the previous column in the stack, pop the record of the previous column from the stack until either the stack is empty or the previous column has a lower height

the \uFF03of additional submatrices created by the cur column equals (the index of the cur column - the index of the previous column with lower height)* the height of cur column, plus the submatries owing to the previous column with lower height


'''

	   def numSubmat(self, mat: List[List[int]]) -> int:
        col=len(mat[0])
        h,res=[0]*col,0


        for row in mat:

            memo=[] 

            for i in range(col):

                h[i]=(row[i]==1)*(h[i]+1)

                while memo and h[i]<h[memo[-1][0]]:
                    memo.pop()


                ct=(i-memo[-1][0])*h[i]+memo[-1][1] if memo else h[i]*(i+1)

                res+=ct    
                memo.append((i,ct)) #(index, additonal submatrices)
                
                
        return res
'''