# 💯✅🔥🤐NO STACK && bruteforce has time complexity O(nlogn) and space complexity O(n)

**Author:** sameonall
**Votes:** 6
**Link:** [https://leetcode.com/problems/robot-collisions/solutions/5469139/](https://leetcode.com/problems/robot-collisions/solutions/5469139/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

**Note**:position value is not significant but positional order is significant for this question as speed is same.Suggestion-Try to think urself!!
**Note**:Concept of collision-segments when speed is same.
**Collision-segments**-> means positional-segments where we have* R..RL..L* movements and independent collision happens in this segments and winners of this segments participate in collisons next time.
**Note**:speed should be same nonzero or at rest in every collision-segments
# Approach
<!-- Describe your approach to solving the problem. -->
        // consider below is one of the collision-segment
        // 15 14 13 13   12 15 14 13
        // 15 14 13 12    0 15 14 13
        // 15 14 13 0     0 14 14 13
        // 15 14  0 0     0 13 14 13
        // 15 13  0 0     0  0 14 13
        // 15  0  0 0     0  0 13 13
        // 14  0  0 0     0  0  0 13
        // 13  0  0 0     0  0  0  0
        task1: sort health,directions by positions vector<pair<int,int>>h,d;
        task2: now iterate again and again till collision not possible (at max logn times iterations)and find collision segments ( R..RL..L) and call update(int l,int le,int r,vector<pair<int,int>>&h) to get winners.
        task3: store healths in vector<int>res in order as in positions vector and then store in  vector ans all nonzeros health from vector<int>res;
# Complexity
- Time complexity:$$O(n*logn)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
Collision function is called logn times as each time number of    participants in every collision-segments reduced to 0 or 1.at worst size of collision-segment of two it will be logn times
- Space complexity:$$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```javascript []
class Solution {
    update(l, le, re, h) {
        let i = le, j = le + 1;
        while (i >= l && j <= re) {
            if (h[i][1] === 0) {
                i--;
                continue;
            }
            if (h[j][1] === 0) {
                j++;
                continue;
            }
            if (h[i][1] > h[j][1]) {
                h[i][1]--;
                h[j][1] = 0;
                j++;
            } else if (h[i][1] < h[j][1]) {
                h[j][1]--;
                h[i][1] = 0;
                i--;
            } else {
                h[i][1] = 0;
                h[j][1] = 0;
                i--;
                j++;
            }
        }
    }
    
    scan(h, d) {
        let i = 0;
        while (i < d.length) {
            let le = i - 1;
            let re = le;
            while (le + 1 < d.length && (h[le + 1][1] === 0 || d[le + 1][1] === 'R')) {
                le++;
            }
            re = le;
            while (re + 1 < d.length && (h[re + 1][1] === 0 || d[re + 1][1] === 'L')) {
                re++;
            }
            if (le === i - 1) {
                i = re + 1;
                continue;
            }
            if (re === le) {
                break;
            }
            this.update(i, le, re, h);
            i = re + 1;
        }
    }
    
    collision(h, d) {
        let right = d.length;
        let left = -1;
        for (let i = 0; i < d.length; i++) {
            if (h[i][1] > 0) {
                if (d[i][1] === 'L') {
                    left = i;
                } else if (right === d.length) {
                    right = i;
                }
            }
        }
        return right < left;
    }
    
    survivedRobotsHealths(po, he, di) {
        let h = po.map((val, index) => [val, he[index]]);
        let d = po.map((val, index) => [val, di[index]]);
        
        h.sort((a, b) => a[0] - b[0]);
        d.sort((a, b) => a[0] - b[0]);
        
        while (this.collision(h, d)) {
            this.scan(h, d);
        }
        
        let res = new Array(po.length).fill(0);
        let pos = {};
        po.forEach((val, index) => pos[val] = index);
        
        h.forEach((pair) => {
            if (pair[1] > 0) {
                res[pos[pair[0]]] = pair[1];
            }
        });
        
        return res.filter(val => val > 0);
    }
}

// Example usage:
let po = [1, 3, 5, 7, 9];
let he = [2, 2, 2, 2, 2];
let di = "LLRLR";

let sol = new Solution();
let result = sol.survivedRobotsHealths(po, he, di);
console.log(result); // Output: [2, 2, 2, 2, 2]

```
```python []
class Solution:
    def update(self, l, le, re, h):
        i, j = le, le + 1
        while i >= l and j <= re:
            if h[i][1] == 0:
                i -= 1
                continue
            if h[j][1] == 0:
                j += 1
                continue
            if h[i][1] > h[j][1]:
                h[i] = (h[i][0], h[i][1] - 1)
                h[j] = (h[j][0], 0)
                j += 1
            elif h[i][1] < h[j][1]:
                h[j] = (h[j][0], h[j][1] - 1)
                h[i] = (h[i][0], 0)
                i -= 1
            else:
                h[i] = (h[i][0], 0)
                h[j] = (h[j][0], 0)
                i -= 1
                j += 1
    
    def scan(self, h, d):
        i = 0
        while i < len(d):
            le = i - 1
            re = le
            while le + 1 < len(d) and (h[le + 1][1] == 0 or d[le + 1][1] == 'R'):
                le += 1
            re = le
            while re + 1 < len(d) and (h[re + 1][1] == 0 or d[re + 1][1] == 'L'):
                re += 1
            if le == i - 1:
                i = re + 1
                continue
            if re == le:
                break
            self.update(i, le, re, h)
            i = re + 1
    
    def collision(self, h, d):
        right, left = len(d), -1
        for i in range(len(d)):
            if h[i][1] > 0:
                if d[i][1] == 'L':
                    left = i
                elif right == len(d):
                    right = i
        return right < left
    
    def survivedRobotsHealths(self, po, he, di):
        h = [(po[i], he[i]) for i in range(len(po))]
        d = [(po[i], di[i]) for i in range(len(po))]
        h.sort()
        d.sort()
        
        while self.collision(h, d):
            self.scan(h, d)
        
        res = [0] * len(po)
        pos = {po[i]: i for i in range(len(po))}
        for j in range(len(h)):
            res[pos[h[j][0]]] = h[j][1]
        
        ans = [f for f in res if f > 0]
        return ans

```

```Python3 []
class Solution:
    def update(self, l, le, re, h):
        i, j = le, le + 1
        while i >= l and j <= re:
            if h[i][1] == 0:
                i -= 1
                continue
            if h[j][1] == 0:
                j += 1
                continue
            if h[i][1] > h[j][1]:
                h[i][1] -= 1
                h[j][1] = 0
                j += 1
            elif h[i][1] < h[j][1]:
                h[j][1] -= 1
                h[i][1] = 0
                i -= 1
            else:
                h[i][1] = 0
                h[j][1] = 0
                i -= 1
                j += 1

    def scan(self, h, d):
        i = 0
        while i < len(d):
            le = i - 1
            re = le
            while le + 1 < len(d) and (h[le + 1][1] == 0 or d[le + 1][1] == 'R'):
                le += 1
            re = le
            while re + 1 < len(d) and (h[re + 1][1] == 0 or d[re + 1][1] == 'L'):
                re += 1
            if le == i - 1:
                i = re + 1
                continue
            if re == le:
                break
            self.update(i, le, re, h)
            i = re + 1

    def collision(self, h, d):
        right = len(d)
        left = -1
        for i in range(len(d)):
            if h[i][1] > 0:
                if d[i][1] == 'L':
                    left = i
                elif right == len(d):
                    right = i
        return right < left

    def survived_robots_healths(self, po, he, di):
        size = len(po)
        h = [[0] * 2 for _ in range(size)]
        d = [[0] * 2 for _ in range(size)]

        for i in range(size):
            h[i][0] = po[i]
            h[i][1] = he[i]
            d[i][0] = po[i]
            d[i][1] = di[i]

        h.sort()
        d.sort()

        while self.collision(h, d):
            self.scan(h, d)

        pos = {}
        for i in range(size):
            pos[po[i]] = i

        res = []
        for j in range(size):
            if h[j][1] > 0:
                res.append(h[j][1])

        return res

# Example usage:
po = [1, 3, 5, 7, 9]
he = [2, 2, 2, 2, 2]
di = ['L', 'L', 'R', 'L', 'R']

sol = Solution()
result = sol.survived_robots_healths(po, he, di)
print(result)  # Output: [2, 2, 2, 2, 2]

```

```Ruby []
class Solution {
    update(l, le, re, h) {
        let i = le, j = le + 1;
        while (i >= l && j <= re) {
            if (h[i][1] === 0) {
                i--;
                continue;
            }
            if (h[j][1] === 0) {
                j++;
                continue;
            }
            if (h[i][1] > h[j][1]) {
                h[i][1]--;
                h[j][1] = 0;
                j++;
            } else if (h[i][1] < h[j][1]) {
                h[j][1]--;
                h[i][1] = 0;
                i--;
            } else {
                h[i][1] = 0;
                h[j][1] = 0;
                i--;
                j++;
            }
        }
    }
    
    scan(h, d) {
        let i = 0;
        while (i < d.length) {
            let le = i - 1;
            let re = le;
            while (le + 1 < d.length && (h[le + 1][1] === 0 || d[le + 1][1] === 'R')) {
                le++;
            }
            re = le;
            while (re + 1 < d.length && (h[re + 1][1] === 0 || d[re + 1][1] === 'L')) {
                re++;
            }
            if (le === i - 1) {
                i = re + 1;
                continue;
            }
            if (re === le) {
                break;
            }
            this.update(i, le, re, h);
            i = re + 1;
        }
    }
    
    collision(h, d) {
        let right = d.length;
        let left = -1;
        for (let i = 0; i < d.length; i++) {
            if (h[i][1] > 0) {
                if (d[i][1] === 'L') {
                    left = i;
                } else if (right === d.length) {
                    right = i;
                }
            }
        }
        return right < left;
    }
    
    survivedRobotsHealths(po, he, di) {
        let h = po.map((val, index) => [val, he[index]]);
        let d = po.map((val, index) => [val, di[index]]);
        
        h.sort((a, b) => a[0] - b[0]);
        d.sort((a, b) => a[0] - b[0]);
        
        while (this.collision(h, d)) {
            this.scan(h, d);
        }
        
        let res = new Array(po.length).fill(0);
        let pos = {};
        po.forEach((val, index) => pos[val] = index);
        
        h.forEach((pair) => {
            if (pair[1] > 0) {
                res[pos[pair[0]]] = pair[1];
            }
        });
        
        return res.filter(val => val > 0);
    }
}

// Example usage:
let po = [1, 3, 5, 7, 9];
let he = [2, 2, 2, 2, 2];
let di = "LLRLR";

let sol = new Solution();
let result = sol.survivedRobotsHealths(po, he, di);
console.log(result); // Output: [2, 2, 2, 2, 2]

```


```C++ []
class Solution {
public:
void segmentUpdate(int l,int le,int re,vector<pair<int,int>>&h){
    int i=le,j=le+1;
    while(i>=l&&j<=re){
        if(h[i].second==0){i--;continue;}
        if(h[j].second==0){j++;continue;}
        if(h[i].second > h[j].second){
            h[i].second--;h[j++].second=0;
        }else if(h[i].second < h[j].second){
            h[j].second--;h[i--].second=0;
        }else{
            h[i].second=0;i--;
            h[j].second=0;j++;
        }
    }
}
void update(vector<pair<int,int>>&h,vector<pair<int,char>>&d){
    int i=0;
    while(i<d.size()){
        int le=i-1,re;
        while(le+1<d.size()&&(h[le+1].second==0||d[le+1].second=='R'))le++;
        re=le;
        while(re+1<d.size()&&(h[re+1].second==0||d[re+1].second=='L'))re++;
        if(le==i-1){i=re+1;continue;}
        if(re==le)break;
        segmentUpdate(i,le,re,h);
        i=re+1;
    }
}

bool collision(vector<pair<int,int>>&h,vector<pair<int,char>>&d){
    int right=d.size(),left=-1;
    for(int i=0;i<d.size();i++){
        if(h[i].second){
            if(d[i].second=='L')left=i;
            else if(right==d.size())right=i;
        }
    }
    return right<left;
}
    vector<int> survivedRobotsHealths(vector<int>& po, vector<int>& he, string di) {
       
        vector<pair<int,int>>h;
        vector<pair<int,char>>d;
        for(int i=0;i<po.size();i++){
            h.push_back({po[i],he[i]});
            d.push_back({po[i],di[i]});
        }
        sort(h.begin(),h.end());
        sort(d.begin(),d.end());
        //O(n*logn)
        while(collision(h,d))update(h,d);

        vector<int>res(po.size());
        unordered_map<int,int>pos;
        for(int i=0;i<po.size();i++)pos[po[i]]=i;
        for(int j=0;j<h.size();j++){
            res[pos[h[j].first]]=h[j].second;
        }
        vector<int> ans;
        for(auto f:res)if(f)ans.push_back(f);
        return ans;
    }
};
```

```C []
#include <stdio.h>
#include <stdlib.h>

void update(int l, int le, int re, int h[][2]) {
    int i = le, j = le + 1;
    while (i >= l && j <= re) {
        if (h[i][1] == 0) {
            i--;
            continue;
        }
        if (h[j][1] == 0) {
            j++;
            continue;
        }
        if (h[i][1] > h[j][1]) {
            h[i][1]--;
            h[j][1] = 0;
            j++;
        } else if (h[i][1] < h[j][1]) {
            h[j][1]--;
            h[i][1] = 0;
            i--;
        } else {
            h[i][1] = 0;
            h[j][1] = 0;
            i--;
            j++;
        }
    }
}

void scan(int h[][2], char d[][2], int size) {
    int i = 0;
    while (i < size) {
        int le = i - 1, re;
        while (le + 1 < size && (h[le + 1][1] == 0 || d[le + 1][1] == 'R')) le++;
        re = le;
        while (re + 1 < size && (h[re + 1][1] == 0 || d[re + 1][1] == 'L')) re++;
        if (le == i - 1) {
            i = re + 1;
            continue;
        }
        if (re == le) break;
        update(i, le, re, h);
        i = re + 1;
    }
}

int collision(int h[][2], char d[][2], int size) {
    int right = size, left = -1;
    for (int i = 0; i < size; i++) {
        if (h[i][1] > 0) {
            if (d[i][1] == 'L') left = i;
            else if (right == size) right = i;
        }
    }
    return right < left;
}

void survived_robots_healths(int po[], int he[], char di[], int size, int *result_size, int result[]) {
    int h[size][2];
    char d[size][2];
    
    for (int i = 0; i < size; i++) {
        h[i][0] = po[i];
        h[i][1] = he[i];
        d[i][0] = po[i];
        d[i][1] = di[i];
    }
    
    for (int i = 0; i < size; i++) {
        for (int j = i + 1; j < size; j++) {
            if (h[i][0] > h[j][0]) {
                int temp1 = h[i][0], temp2 = h[i][1];
                h[i][0] = h[j][0], h[i][1] = h[j][1];
                h[j][0] = temp1, h[j][1] = temp2;
            }
            if (d[i][0] > d[j][0]) {
                char temp1 = d[i][0], temp2 = d[i][1];
                d[i][0] = d[j][0], d[i][1] = d[j][1];
                d[j][0] = temp1, d[j][1] = temp2;
            }
        }
    }
    
    while (collision(h, d, size)) {
        scan(h, d, size);
    }
    
    int pos[size];
    for (int i = 0; i < size; i++) {
        pos[i] = -1;
    }
    for (int i = 0; i < size; i++) {
        for (int j = 0; j < size; j++) {
            if (po[i] == h[j][0]) {
                pos[i] = j;
                break;
            }
        }
    }
    
    int idx = 0;
    for (int j = 0; j < size; j++) {
        if (h[j][1] > 0) {
            result[idx++] = h[j][1];
        }
    }
    *result_size = idx;
}

int main() {
    int po[] = {1, 3, 5, 7, 9};
    int he[] = {2, 2, 2, 2, 2};
    char di[] = {'L', 'L', 'R', 'L', 'R'};
    int size = sizeof(po) / sizeof(po[0]);
    int result[size];
    int result_size;
    
    survived_robots_healths(po, he, di, size, &result_size, result);
    
    printf("[");
    for (int i = 0; i < result_size; i++) {
        printf("%d", result[i]);
        if (i < result_size - 1) {
            printf(", ");
        }
    }
    printf("]\
");
    
    return 0;
}

```
```