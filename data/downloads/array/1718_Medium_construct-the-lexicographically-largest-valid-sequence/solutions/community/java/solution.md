# Java | C++| Detailed explanation | BackTracking  | 100% faster

**Author:** db99
**Votes:** 132
**Link:** [https://leetcode.com/problems/construct-the-lexicographically-largest-valid-sequence/solutions/1008864/](https://leetcode.com/problems/construct-the-lexicographically-largest-valid-sequence/solutions/1008864/)

---



Since 'n' ranges between 1 to 20 , we can afford a solution of exponential time complexity.

1. We try to construct our result array by taking the largest number possible at each point.
2. Except  1 (since its count is 1) whenever we place an integer in a particular position, we also place the second occurence of that integer in our temporary array. This is because in the question it is mentioned that  : *For every integer i between 2 and n, the distance between the two occurrences of i is exactly i.*
3. As soon as we reach a valid solution that follows all the constraints we return 'true'. This indicates we do not need to continue our search. (This is an important step as otherwise we will get TLE).
4. Since we start from largest possible number at each step once we reach a valid solution that is our answer.

**Time Complexity** : Ideally it should be (n!) since we are using backtracking and trying to find out all possible solutions.
But because of this constraint : **For every integer i between 2 and n, the distance between the two occurrences of i is exactly i**, the number of permutations under consideration is reducing greatly.
Also since we are trying to find out the **lexicographically largest sequence** we stop as soon as we find a valid solution (early stop).  

**Java Code**

```
class Solution {

        public int[] constructDistancedSequence(int n) {
            int[] ans = new int[n * 2 - 1];
            boolean[] visited = new boolean[n + 1];
            calc(0, ans, visited, n);
            return ans;
        }

        private boolean calc(int index, int[] ans, boolean[] visited, int n) {
            if (index == ans.length) {
                return true;
            }
            if (ans[index] != 0) return calc(index + 1, ans, visited, n); // value already assigned in this position. So go ahead with the next index.
            else {
				// we start from n to 1 since we need to find out the lexicographically largest sequence.
                for (int i = n; i >= 1; i--) {
                    if (visited[i]) continue;
                    visited[i] = true;
                    ans[index] = i;
                    if (i == 1) {
                        if (calc(index + 1, ans, visited, n)) return true;
                    } else if (index + i < ans.length && ans[index + i] == 0) {
                        ans[i + index] = i; // assigning the second occurence of i in the desired position i.e, (current index + i )
                        if (calc(index + 1, ans, visited, n)) return true; // largest possible sequence satisfying the given conditions found.
                        ans[index + i] = 0;
                    }
                    ans[index] = 0;
                    visited[i] = false;
                }

            }
            return false;
        }
    }
	
```
	
**C++ Code**

```
class Solution {
public:
    vector<int> constructDistancedSequence(int n) {
        vector<int> ans(n * 2 - 1, 0);

        vector<bool> visited(n + 1, false);
        calc(0, ans, visited, n);
        return ans;
    }

private :
    bool calc(int index, vector<int> &ans, vector<bool> &visited, int n) {
        if (index == ans.size()) {
            return true;
        }
        if (ans[index] != 0)
            return calc(index + 1, ans, visited,
                        n); // value already assigned in this position. So go ahead with the next index.
        else {
            // we start from n to 1 since we need to find out the lexicographically largest sequence.
            for (int i = n; i >= 1; i--) {
                if (visited[i]) continue;
                visited[i] = true;
                ans[index] = i;
                if (i == 1) {
                    if (calc(index + 1, ans, visited, n)) return true;
                } else if (index + i < ans.size() && ans[index + i] == 0) {
                    ans[i +
                        index] = i; // assigning the second occurence of i in the desired position i.e, (current index + i )
                    if (calc(index + 1, ans, visited, n))
                        return true; // largest possible sequence satisfying the given conditions found.
                    ans[index + i] = 0;
                }
                ans[index] = 0;
                visited[i] = false;
            }

        }
        return false;
    }


};
```
	