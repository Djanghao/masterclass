# (Easy Video Solution🔥) (Brute->Optimal ✅)  Sort 'X' coordinate and check 'Y' coordinate on the way

**Author:** ayushnemmaniwar12
**Votes:** 15
**Link:** [https://leetcode.com/problems/find-the-number-of-ways-to-place-people-ii/solutions/4671743/](https://leetcode.com/problems/find-the-number-of-ways-to-place-people-ii/solutions/4671743/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Try to plot points on the graph and apply the conditions


# ***Easy Video Explanation***

https://youtu.be/2UkoanSUQy8



# Approach
<!-- Describe your approach to solving the problem. -->
The code counts the number of pairs of points in a 2D vector such that one point encloses the other. It uses nested loops to compare each pair of points, checking if one rectangle encloses the other, and increments the count if the condition is satisfied. 

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
    O(N*N*N)->O(N*N)
    

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
    O(1)=>Not using any extra space
    

# Brute Force Code


```C++ []
class Solution {
public:
    int numberOfPairs(vector<vector<int>>& v) {
        int n=v.size();
        int ans=0;
        for(int i=0;i<n;i++) {
            int x1=v[i][0],y1=v[i][1];
            for(int j=0;j<n;j++) {
                if(i==j)
                    continue;
                int x2=v[j][0],y2=v[j][1];
                int f=0;
                if(y1>=y2 && x1<=x2) {
                    for(int k=0;k<n;k++) {
                        if(k==i || k==j)
                            continue;
                        int x3=v[k][0],y3=v[k][1];
                        if(x3>=x1 && x3<=x2 && y3>=y2 && y3<=y1) {
                            f=1;
                            break;
                        }
                    }
                    if(f==0)
                        ans++;
                }
                
            }
        }
        return ans;
    }
};
```
```python []
class Solution:
    def numberOfPairs(self, v):
        n = len(v)
        ans = 0

        for i in range(n):
            x1, y1 = v[i][0], v[i][1]

            for j in range(n):
                if i == j:
                    continue

                x2, y2 = v[j][0], v[j][1]
                f = 0

                if y1 >= y2 and x1 <= x2:
                    for k in range(n):
                        if k == i or k == j:
                            continue

                        x3, y3 = v[k][0], v[k][1]

                        if x3 >= x1 and x3 <= x2 and y3 >= y2 and y3 <= y1:
                            f = 1
                            break

                    if f == 0:
                        ans += 1

        return ans

```
```Java []
import java.util.*;

public class Solution {
    public int numberOfPairs(ArrayList<ArrayList<Integer>> v) {
        int n = v.size();
        int ans = 0;

        for (int i = 0; i < n; i++) {
            int x1 = v.get(i).get(0), y1 = v.get(i).get(1);

            for (int j = 0; j < n; j++) {
                if (i == j)
                    continue;

                int x2 = v.get(j).get(0), y2 = v.get(j).get(1);
                int f = 0;

                if (y1 >= y2 && x1 <= x2) {
                    for (int k = 0; k < n; k++) {
                        if (k == i || k == j)
                            continue;

                        int x3 = v.get(k).get(0), y3 = v.get(k).get(1);

                        if (x3 >= x1 && x3 <= x2 && y3 >= y2 && y3 <= y1) {
                            f = 1;
                            break;
                        }
                    }

                    if (f == 0)
                        ans++;
                }
            }
        }

        return ans;
    }
}


```

# Optimal Solution


```C++ []
class Solution {
public:
    static bool comp(vector<int>&a,vector<int>&b) {
        if(a[0]==b[0])
            return a[1]>b[1];
        return a[0]<b[0];
    }
    int numberOfPairs(vector<vector<int>>& v) {
        int n=v.size();
        sort(v.begin(),v.end(),comp);
        int ans=0;
        for(int i=0;i<n;i++) {
            int x1=v[i][0],y1=v[i][1];
            long long k=-10000000000;
            for(int j=i+1;j<n;j++) {
                int x2=v[j][0],y2=v[j][1];
                if(y2>y1)
                    continue;
                if(y2>k)
                    ans++;
                if(y2>k)
                    k=y2;
            }
        }
        return ans;
    }
};
```
```python []
class Solution:
    @staticmethod
    def comp(a, b):
        if a[0] == b[0]:
            return a[1] > b[1]
        return a[0] < b[0]

    def numberOfPairs(self, v):
        n = len(v)
        v.sort(key=lambda x: (x[0], -x[1]))
        ans = 0

        for i in range(n):
            x1, y1 = v[i][0], v[i][1]
            k = -10000000000

            for j in range(i + 1, n):
                x2, y2 = v[j][0], v[j][1]

                if y2 > y1:
                    continue

                if y2 > k:
                    ans += 1

                if y2 > k:
                    k = y2

        return ans

```
```Java []
import java.util.*;

public class Solution {
    public static boolean comp(ArrayList<Integer> a, ArrayList<Integer> b) {
        if (a.get(0).equals(b.get(0)))
            return a.get(1) > b.get(1);
        return a.get(0) < b.get(0);
    }

    public int numberOfPairs(ArrayList<ArrayList<Integer>> v) {
        int n = v.size();
        Collections.sort(v, Solution::comp);
        int ans = 0;

        for (int i = 0; i < n; i++) {
            int x1 = v.get(i).get(0), y1 = v.get(i).get(1);
            long k = -10000000000L;

            for (int j = i + 1; j < n; j++) {
                int x2 = v.get(j).get(0), y2 = v.get(j).get(1);

                if (y2 > y1)
                    continue;

                if (y2 > k)
                    ans++;

                if (y2 > k)
                    k = y2;
            }
        }

        return ans;
    }
}


```

# ***If you like the solution Please Upvote and subscribe to my youtube channel***
***It Motivates me to record more videos***

*Thank you* \uD83D\uDE00