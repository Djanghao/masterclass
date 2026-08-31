# Biweekly 130 || Fastest (100%) || Easy || Clean || Multiple Approaches

**Author:** gameboey
**Votes:** 55
**Link:** [https://leetcode.com/problems/maximum-points-inside-the-square/solutions/5144889/](https://leetcode.com/problems/maximum-points-inside-the-square/solutions/5144889/)

---




# Approach : Greedy 
Here is a quick explaination to the approach:

- Iterate through Points & there corresponding Characters simultaneously

- Track minimum possible size to enclose all points of characters.

- Find the second minimum one to ensure not encompassing a couple of different points.

- Update the maximum size for each character encountered & decrease the second minimum accordingly.

- Count the corresponding characters with minimum size less than the second minimum size as those characters are the ones valid to be encompassed in the square, and then return the result.

Thus, this method allows to find the maximum number of points that can be enclosed in a valid square and correctly accounts for the conditions presented in the problem.  

**We sort of run between points and characters, using quirks power to discover the perfect square! Like Izuku Midoriya, you should remember that it is essential to be smart and not to be afraid to think unconventionally when looking for a solution to a problem! Plus Ultra!**



# Complexity
- Time complexity: O(n), 'n' being the size of points array

- Space complexity: O(m), 'm' being the number of unique characters in string 's'

# Code
```C++ []
class Solution {
public:
    int maxPointsInsideSquare(vector<vector<int>>& points, string s) {
        unordered_map<char, int> minLens;
        int secondMin = INT_MAX, count = 0;

        for(size_t i = 0; i < points.size(); ++i) {
            int len = max(abs(points[i][0]), abs(points[i][1]));
            char c = s[i];

            if(minLens.find(c) == minLens.end()) {
                minLens[c] = len;
            } else if(len < minLens[c]) {
                secondMin = min(secondMin, minLens[c]); 
                minLens[c] = len;
            } else {
                secondMin = min(secondMin, len);
            }
        }

        for(auto& pair : minLens) {
            if(pair.second < secondMin) {
                count++;
            }
        }

        return count;
    }
};
```
```python []
class Solution:        
    def maxPointsInsideSquare(self, points: List[List[int]], s: str) -> int:
        minLens = {}
        secondMin = float('inf')
        
        for point, char in zip(points, s):
            size = max(abs(point[0]), abs(point[1]))

            if char not in minLens:
                minLens[char] = size
            elif size < minLens[char]:
                secondMin = min(minLens[char], secondMin)
                minLens[char] = size
            else:
                secondMin = min(size, secondMin)
        
        count = 0
        for len in minLens.values():
            if len < secondMin:
                count += 1
        
        return count
```
```Java []
class Solution {
    public int maxPointsInsideSquare(int[][] points, String s) {
        HashMap<Character, Integer> minLens = new HashMap<>();
        int secondMin = Integer.MAX_VALUE, count = 0;

        for (int i = 0; i < points.length; ++i) {
            int len = Math.max(Math.abs(points[i][0]), Math.abs(points[i][1]));
            char c = s.charAt(i);

            if (!minLens.containsKey(c)) {
                minLens.put(c, len);
            } else if (len < minLens.get(c)) {
                secondMin = Math.min(minLens.get(c), secondMin);
                minLens.put(c, len);
            } else {
                secondMin = Math.min(len, secondMin);
            }
        }   

        for(int len : minLens.values()) {
            if(len < secondMin) {
                count++;
            } 
        }

        return count;
    }
}
```

# Approach : Binary Search 

Here's a quick explantion of this binary search approach:

1. **Use of Binary Search**: - It searches for the maximum valid side length of the square enclosing the points using binary search.
   - In this case, it looks for this side length between `0` and a very big number `10^9`.

2. **Checking Valid Squares**: - ITo determine whether a square with side length `mid` can accommodate all points without overlapping for each possible side length `mid`.
   - It guarantees that no two points with the same tag are inside the same square and that every point fits inside the square's bounds.

3. **Search Range updation**: - We then update `res` to `mid` and modify the search range to cover further side lengths if a valid square is discovered for a certain side length, `mid`. If not, we just reduce the search space to shorter side lengths. Just like we always do in binary search - based algorithms.

4. **Counting the points**: - At last we count the number of points that can fit inside a square with side length `res` after determining the maximum valid side length `res`. We accomplish this by continuously going over each point and determining whether or not it is inside the square's bounds.

5. **Returning the Result**: - In the end, it provides the number of points that can fit inside a vlid square.



# Complexity
- Time complexity: `O(n * log(maxCord))`, `n` being the size of `points` array and `maxCord` being the max valued coordinate in `points`

- Space complexity: `O(m)`, `m` being the number of unique characters in string `s`

# Code
```C++ []
class Solution {
public:
    bool check(vector<vector<int>> &points, int i, int res) {
        return points[i][0] <= res && points[i][1] <= res;
    }

    int maxPointsInsideSquare(vector<vector<int>>& points, string s) {
        int n = points.size();
        for (int i = 0; i < n; ++i) {
            points[i][0] = abs(points[i][0]);
            points[i][1] = abs(points[i][1]);
        }

        int left = 0, right = 1e9, res = 0;
        while(left <= right) {
            int mid = left + (right - left) / 2;
            unordered_map<char, int> temp;
            bool flag = true;
            
            for (int i = 0; i < n; ++i) {
                if (points[i][0] <= mid && points[i][1] <= mid) {
                    temp[s[i]]++;
                }
            }
            
            for (auto val : temp) {
                if (val.second > 1) {
                    flag = false;
                    break;
                }
            }

            if (flag) {
                res = mid;
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        
        int ans = 0;
        for (int i = 0; i < n; ++i) {
            if (check(points, i, res)) {
                ans++;
            }
        }

        return ans;
    }
};
```
```python []
class Solution:    
    def check(selff, points, i, res) :
        return points[i][0] <= res and points[i][1] <= res
    
    def maxPointsInsideSquare(self, points: List[List[int]], s: str) -> int:
        n = len(points)
        for i in range(n) :
            points[i][0] = abs(points[i][0])
            points[i][1] = abs(points[i][1])
            
        left, right, res = 0, 10 ** 9, 0
        
        while left <= right :
            mid = left + (right - left) // 2
            temp, flag = {}, 1
            
            for i in range(n) :
                if points[i][0] <= mid and points[i][1] <= mid :
                    temp[s[i]] = temp.get(s[i], 0) + 1
                    
            for val in temp.values() :
                if val > 1:
                    flag = 0
                    break

            if flag :
                res = mid
                left = mid + 1

            else :
                right = mid - 1
            
        ans = 0
        for i in range(n) :
            if self.check(points, i, res) :
                ans += 1

        return ans
```
```Java []
class Solution {
    public boolean check(int[][] points, int i, int res) {
        return points[i][0] <= res && points[i][1] <= res;
    }

    public int maxPointsInsideSquare(int[][] points, String s) {
        int n = points.length;
        for (int i = 0; i < n; ++i) {
            points[i][0] = Math.abs(points[i][0]);
            points[i][1] = Math.abs(points[i][1]);
        }
        
        int left = 0, right = (int) 1e9, res = 0;
        
        while (left <=right) {
            int mid = left + (right - left) / 2;
            HashMap<Character, Integer> temp = new HashMap<>();
            boolean flag = true;
            
            for (int i = 0; i < n; ++i) {
                if (points[i][0] <= mid && points[i][1] <= mid) {
                    temp.put(s.charAt(i), temp.getOrDefault(s.charAt(i), 0) + 1);
                }
            }
            
            for (int val : temp.values()) {
                if (val > 1) {
                    flag = false;
                    break;
                }
            }

            if (flag) {
                res = mid;
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        
        int ans = 0;
        for (int i = 0; i < n; ++i) {
            if (check(points, i, res)) {
                ans++;
            }
        }

        return ans;
    }
}
```
![izuku.webp](./images/0.webp)
