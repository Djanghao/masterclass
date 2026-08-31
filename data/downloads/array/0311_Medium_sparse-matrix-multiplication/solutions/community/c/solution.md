# 0ms Efficient and 12ms Simple approach with comments

**Author:** ulnevano
**Votes:** 2
**Link:** [https://leetcode.com/problems/sparse-matrix-multiplication/solutions/1221024/](https://leetcode.com/problems/sparse-matrix-multiplication/solutions/1221024/)

---

'''
class Solution 
{
public:
   vector<vector<int>> multiply(vector<vector<int>>& mat1, vector<vector<int>>& mat2) 
    {
	
		//get the dimensions first         
        int m = mat1.size(), n = mat1[0].size(), k = mat2[0].size();
        
        //create result matrix
        vector<vector<int>> result(m,vector<int> (k,0));
        
        //solution 1 - regular multiplication - slower approch easy to understand 12ms
        //we need to multiply on the 2nd dim of mat 1 with 1st dim of mat2
        //also do a check on zero to make sure we dont multiply zeros
        
        for(int i = 0; i < m; i++)
        {
            for(int j = 0; j < n; j++)
            {
                if(!mat1[i][j])
                    continue;
                
                for(int x = 0; x < k; x++)
                {
                    if(!mat2[j][x])
                        continue;
                    
                    result[i][x] += mat1[i][j] * mat2[j][x];
                }
            }
        }
        return result;
        
        //solution 2 - faster approach 0ms
        //create a hashtable for the sparse elements in mat1 and mat2
        //then multiply non zero elements
        //since we do multiplication of matrix1rows with matrix2cols, our hashtable will reflect that
        //In mat1 hashtable the keys are row indices and in mat2 hashtable keys are col indices
        //if these indices are not found, then we dont need to proceed with multiplication
        //if they are found then we see if the correspnding inner dimensions match
        //if yes we multiply and store the answer in result matrix
        
        unordered_map<int, vector<pair<int,int>>> mat1Rows;
        unordered_map<int, vector<pair<int,int>>> mat2Cols;
        
        for(int i = 0; i < m; i++)
        {
            for(int j = 0; j < n; j++)
            {
                if(mat1[i][j])
                    mat1Rows[i].push_back(make_pair(j, mat1[i][j]));
            }
        }
        
        for(int j = 0; j < n; j++)
        {
            for(int l = 0; l < k; l++)
            {
                if(mat2[j][l])
                    mat2Cols[l].push_back(make_pair(j, mat2[j][l]));
            }
        }
        
        for(int i = 0; i < m; i++)
        {
            if(mat1Rows.find(i) == mat1Rows.end())
                    continue;
            
            for(int l = 0; l < k; l++)
            {
                 if(mat2Cols.find(l) == mat2Cols.end())
                    continue;
                
                int x = 0, y = 0;
                while(x < mat1Rows[i].size() && y < mat2Cols[l].size())
                {
                    if(mat1Rows[i][x].first == mat2Cols[l][y].first)
                    {
                        result[i][l] += mat1Rows[i][x].second * mat2Cols[l][y].second;
                        x++;
                        y++;
                    }
                    else if(mat1Rows[i][x].first < mat2Cols[l][y].first)
                        x++;
                    else
                        y++;                        
                }
            }
        }
        
        return result;
        
        
    }
};

'''