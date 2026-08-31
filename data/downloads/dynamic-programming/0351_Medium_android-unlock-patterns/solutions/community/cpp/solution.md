# Share my thinking process and backtracking solution with optimization

**Author:** xero10
**Votes:** 25
**Link:** [https://leetcode.com/problems/android-unlock-patterns/solutions/82537/](https://leetcode.com/problems/android-unlock-patterns/solutions/82537/)

---

1) In order to find out the number of patterns with at least **m** keys and at most **n** keys, we can find out how many patterns can be generated if m, m + 1, m + 2, ... , n keys are used, and then add them together

2) To figure out the number of patterns with **k** keys, we can start from any one of 9 keys then count the number of patterns using **k** keys, then add the number together

3) Start from a specific key, if we could record how many and what keys have been used, we could figure out which of remaining keys can be used. Then we can continue counting until the number of keys used becomes **k**. We can use a helper function:

    void helper(int index_x, int index_y, vector<vector<bool> >& used, int cur, int k)

`index_x` and `index_y` is the index of a key ([0][0], [0][1], ... , [2][2])

`used[i][j]` indicates whether the key is used

`cur` is the current number of keys used

`k` is the exact number of keys that should be used

                                                             
  
We can traverse all the keys, for candidate key **[i][j]**, we continue counting if and only if:

a) [i][j] is not the current key, and

b) `used[i][j]` is false, and

c) [i][j] is a valid key that can and only can be reached by used keys. We can use a function called valid to check. Assume `[index_x][index_y]` is index of current key. Let `diff_x = i - index_x` and `diff_y = j - index_y`, so **0 <= abs(diff_x) <= 2** and **0 <= abs(diff_y) <= 2**.
For **abs(diff_x)** and **abs(diff_y)**:

i) if both of them **< 2**, then [i][j] is a valid candidate

ii) if both of them **== 2**, then [i][j] is valid only if the key between current key and candidate is used

iii) if one of them is **2** and the other is **0**, then [i][j] is valid only if the key between current key and candidate is used

iv) if one of them is **2** and the other is **1**, then [i][j] is a valid candidate

For ii) and iii), the key between current key and candidate is `[index_x + diff_x / 2][index_y + diff_y / 2]`, therefore we can combine them into one condition


----------


So far, we've solved the problem. Next let's do some optimization.

1) In the process of counting how many patterns can be generated using **k** keys starting from a specific key, in fact we've aslo already counted the number of possible patterns using **1, 2, 3, ... , k - 1** keys. Therefore, we can record these values so that we don't have to repeat calling helper with k = 1, 2, ..., n. Instead, we can just call helper once with k = n and we can get the result with k = 1 ~ n.

2) Observe the key:

    1 2 3
    4 5 6
    7 8 9


We realize that this structure is symmetric, which means that for 1, 3, 7, 9, since all the them is at corner, the number of patterns starting from anyone of them with same number of keys should be the same. Similarly, 2, 4, 6, 8 are all in the middle of an edge and their results should also be the same. Therefore, we can divide starting keys into 3 gorups:

corner: 1, 3, 7, 9

middle: 2, 4, 6, 8

center: 5



Finally, we get our final solution. `corner` is an array of size 9, with `corner[i]` indicating number of possible patterns with **i + 1** keys starting from a key in corner group. Same for middle and center.


    class Solution {
    public:
        int numberOfPatterns(int m, int n) {
            int result, i;
            vector<int> corner(9, 0), middle(9, 0), center(9, 0);
            vector<vector<bool> > used(3, vector<bool>(3, false));
            helper(0, 0, corner, used, 0, n);
            helper(0, 1, middle, used, 0, n);
            helper(1, 1, center, used, 0, n);
            for(result = 0, i = m; i <= n; i++)
                result += 4 * (corner[i - 1] + middle[i - 1]) + center[i - 1];
            return result;
        }
        
    private:
        void helper(int index_x, int index_y, vector<int>& count, vector<vector<bool> >&used, int cur, int k) {
            count[++cur - 1]++;
            if(cur >= k)
                return;
            used[index_x][index_y] = true;
            int i, j;
            for(i = 0; i < 3; i++) {
                for(j = 0; j < 3; j++) {
                    if(!(i == index_x && j == index_y) && !used[i][j] && valid(used, index_x, index_y, i, j))
                        helper(i, j, count, used, cur, k);
                }
            }
            
            used[index_x][index_y] = false;
        }
        
        bool valid(vector<vector<bool> >& used, int index_x, int index_y, int i, int j) {
            int diff_x = i - index_x, diff_y = j - index_y;
            if(abs(diff_x) < 2 && abs(diff_y) < 2)
                return true;
            if((abs(diff_x) == 2 && abs(diff_y) == 2) || (abs(diff_x) == 0 || abs(diff_y) == 0))
                return used[index_x + diff_x / 2][index_y + diff_y / 2];
            return true;
        }
    };