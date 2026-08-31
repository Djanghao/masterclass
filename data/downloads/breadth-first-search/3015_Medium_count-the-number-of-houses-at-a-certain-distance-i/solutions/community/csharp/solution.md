# Floyd Walshav

**Author:** jovamilenkovic
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-the-number-of-houses-at-a-certain-distance-i/solutions/4603155/](https://leetcode.com/problems/count-the-number-of-houses-at-a-certain-distance-i/solutions/4603155/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
public class Solution {
    public int[] CountOfPairs(int n, int x, int y) {
        int [,]map =new int[n,n];
        for (int i=0; i< n; i++){
            for (int j=0; j<n;j++){
                if (j==i+1|| i==j+1)map[i,j]=1;
                else map[i,j]=200;
            }
        }
        for (int i=0; i<n; i++){
            map[i,i]=0;
        }
        map[x-1,y-1]=1;
        map[y-1,x-1]=1;
        for (int k=0; k<n; k++){
            for (int i=0; i<n; i++){
                for (int j=0; j<n; j++){
                    if (map[i,k]!=200&& map[k,j]!=200)map[i,j]=Math.Min(map[i,j], map[i,k]+map[k,j]);
                }
            }
        }
Dictionary<int,int> d= new Dictionary<int,int>();
for (int i=1; i<=n; i++){
    d.Add(i,0);
}
    for (int i=0; i<n; i++){
        for (int j=0; j<n; j++){
           if (i!=j) d[map[i,j]]++;
        }
    }

    int []ans= new int [n];
    for (int i=1;i<=n; i++){
        ans[i-1]=d[i];
    }

return ans;
    }
}
```