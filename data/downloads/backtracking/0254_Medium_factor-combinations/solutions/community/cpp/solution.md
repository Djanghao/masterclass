# Share: Clean and simple 0ms C++ solution, with explanation

**Author:** xuweineo2
**Votes:** 23
**Link:** [https://leetcode.com/problems/factor-combinations/solutions/68103/](https://leetcode.com/problems/factor-combinations/solutions/68103/)

---

    class Solution {
    private:
        vector<vector<int>> res;
    public:
        vector<vector<int>> getFactors(int n) {
            vector<int> line;
            getFHelp(n, 2, line);
            return res;
        }
        
        void getFHelp(int n, int bottom, vector<int> line) {
            for(int i=bottom; i<=sqrt(n); i++){
                if(n%i == 0) {
                    vector<int> new_line = line;
                    new_line.push_back(i);
                    getFHelp(n/i, i, new_line);
                    new_line.push_back(n/i);
                    res.push_back(new_line);
                }
            }
        }
    };
1. If the factor is bigger than sqrt(n), then it's next factor will be smaller than sqrt(n), so we only have to loop until the index reaches sqrt(n);
2. After we push the factor into the vector, we make the division result to be the next 'n', and call the recursive function. After the function is called, we push the division result into the vector.