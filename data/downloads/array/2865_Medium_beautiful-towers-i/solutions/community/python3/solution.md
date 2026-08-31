# Easy Video Solution(C++,JAVA,Python)🔥 || Brute Force->Optimized(Prefix+Suffix+Stack)🔥

**Author:** ayushnemmaniwar12
**Votes:** 19
**Link:** [https://leetcode.com/problems/beautiful-towers-i/solutions/4083684/](https://leetcode.com/problems/beautiful-towers-i/solutions/4083684/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Think in terms of Stack and Prefix Sum (Plot the points and validate)

# ***Detailed and easy Video Solution***(Brute Force)

https://youtu.be/yPPMeahpz8U

# *(Optimized Using Stack)*

https://youtu.be/fsOFbbuMdy8



# Approach
<!-- Describe your approach to solving the problem. -->
***Brute Force:***
consider each index as max height and build mountain array around it.

***Optimized:***
At each index we will try to calculate left sum and right sum using stack and prefix sum technique in O(1) TC.

# Complexity(Brute Force)
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
    O(N*N)

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
    O(N)


# Optimized
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
    O(2*N)

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
    O(N)

# Code (Brute force)

```C++ []
class Solution {
public:
    long long maximumSumOfHeights(vector<int>& v) {
        int n=v.size();
        long long ans=0;
        for(int i=0;i<n;i++)
        {   
            vector<int>he(n,0);
            he[i]=v[i];
            int l=i-1,h=i+1;
            while(l>=0)
            {
                if(v[l]<=he[l+1])
                    he[l]=v[l];
                else
                    he[l]=he[l+1];
                l--;
            }
            while(h<n)
            {
                if(v[h]<=he[h-1])
                    he[h]=v[h];
                else
                    he[h]=he[h-1];
                h++;
            }
            long long s=0;
            for(auto i:he)
                s=s+i;
            ans=max(ans,s);
        }
        return ans;
    }
};
```
```python []
class Solution:
    def maximumSumOfHeights(self, v):
        n = len(v)
        ans = 0
        for i in range(n):
            he = [0] * n
            he[i] = v[i]
            l, h = i - 1, i + 1
            while l >= 0:
                if v[l] <= he[l + 1]:
                    he[l] = v[l]
                else:
                    he[l] = he[l + 1]
                l -= 1
            while h < n:
                if v[h] <= he[h - 1]:
                    he[h] = v[h]
                else:
                    he[h] = he[h - 1]
                h += 1
            s = sum(he)
            ans = max(ans, s)
        return ans

```
```JAVA []
import java.util.Arrays;

class Solution {
    public long maximumSumOfHeights(int[] v) {
        int n = v.length;
        long ans = 0;
        for (int i = 0; i < n; i++) {
            int[] he = new int[n];
            he[i] = v[i];
            int l = i - 1, h = i + 1;
            while (l >= 0) {
                if (v[l] <= he[l + 1])
                    he[l] = v[l];
                else
                    he[l] = he[l + 1];
                l--;
            }
            while (h < n) {
                if (v[h] <= he[h - 1])
                    he[h] = v[h];
                else
                    he[h] = he[h - 1];
                h++;
            }
            long s = 0;
            for (int value : he) {
                s += value;
            }
            ans = Math.max(ans, s);
        }
        return ans;
    }
}

```

# Code (Optimized)

```C++ []
class Solution {
public:
    long long maximumSumOfHeights(vector<int>& maxHeights) {
        int n=maxHeights.size();
        vector<int>prevsmall(n,-1);
        vector<int>nextsmall(n,n);
        vector<long long>leftsum(n,0);
        vector<long long>rightsum(n,0);
        leftsum[0]=maxHeights[0];
        stack<int>st;
        st.push(0);
        //Calculate prevSmall
        for(int i=1;i<n;i++)
        {
            while(!st.empty() && maxHeights[st.top()]>=maxHeights[i])
                st.pop();
            if(!st.empty())
                prevsmall[i]=st.top();
            int prev=prevsmall[i];
            int count=i-prev;
            leftsum[i]+=(long long)count*maxHeights[i];
            if(prev!=-1)
                leftsum[i]+=leftsum[prev];
            st.push(i);
        }
        while(!st.empty())
            st.pop();
        st.push(n-1);
        //Calculate nextsmall;
        rightsum[n-1]=maxHeights[n-1];
        for(int i=n-2;i>=0;i--)
        {
            while(!st.empty() && maxHeights[st.top()]>=maxHeights[i])
                st.pop();
            if(!st.empty())
                nextsmall[i]=st.top();
            int next=nextsmall[i];
            int count=next-i;
            rightsum[i]+=(long long)count*maxHeights[i];
            if(next!=n)
                rightsum[i]+=rightsum[next];
            st.push(i);
        }
        long long maxcount=0;
        for(int i=0;i<n;i++)
        {   
            cout<<leftsum[i]<<" "<<rightsum[i]<<endl;
            maxcount=max(maxcount,leftsum[i]+rightsum[i]-maxHeights[i]);
        }
        return maxcount;

    }
};
```
```python []
class Solution:
    def maximumSumOfHeights(self, maxHeights):
        n = len(maxHeights)
        prevsmall = [-1] * n
        nextsmall = [n] * n
        leftsum = [0] * n
        rightsum = [0] * n
        leftsum[0] = maxHeights[0]
        st = []
        st.append(0)

        # Calculate prevSmall
        for i in range(1, n):
            while st and maxHeights[st[-1]] >= maxHeights[i]:
                st.pop()
            if st:
                prevsmall[i] = st[-1]
            prev = prevsmall[i]
            count = i - prev
            leftsum[i] += count * maxHeights[i]
            if prev != -1:
                leftsum[i] += leftsum[prev]
            st.append(i)

        while st:
            st.pop()
        st.append(n - 1)

        # Calculate nextsmall;
        rightsum[n - 1] = maxHeights[n - 1]
        for i in range(n - 2, -1, -1):
            while st and maxHeights[st[-1]] >= maxHeights[i]:
                st.pop()
            if st:
                nextsmall[i] = st[-1]
            next_ = nextsmall[i]
            count = next_ - i
            rightsum[i] += count * maxHeights[i]
            if next_ != n:
                rightsum[i] += rightsum[next_]
            st.append(i)

        maxcount = 0
        for i in range(n):
            maxcount = max(maxcount, leftsum[i] + rightsum[i] - maxHeights[i])

        return maxcount

```
```JAVA []
import java.util.Stack;

class Solution {
    public long maximumSumOfHeights(int[] maxHeights) {
        int n = maxHeights.length;
        int[] prevsmall = new int[n];
        int[] nextsmall = new int[n];
        long[] leftsum = new long[n];
        long[] rightsum = new long[n];
        leftsum[0] = maxHeights[0];
        Stack<Integer> st = new Stack<>();
        st.push(0);

        // Calculate prevSmall
        for (int i = 1; i < n; i++) {
            while (!st.isEmpty() && maxHeights[st.peek()] >= maxHeights[i])
                st.pop();
            if (!st.isEmpty())
                prevsmall[i] = st.peek();
            int prev = prevsmall[i];
            int count = i - prev;
            leftsum[i] += (long) count * maxHeights[i];
            if (prev != -1)
                leftsum[i] += leftsum[prev];
            st.push(i);
        }

        while (!st.isEmpty())
            st.pop();
        st.push(n - 1);

        // Calculate nextsmall;
        rightsum[n - 1] = maxHeights[n - 1];
        for (int i = n - 2; i >= 0; i--) {
            while (!st.isEmpty() && maxHeights[st.peek()] >= maxHeights[i])
                st.pop();
            if (!st.isEmpty())
                nextsmall[i] = st.peek();
            int next = nextsmall[i];
            int count = next - i;
            rightsum[i] += (long) count * maxHeights[i];
            if (next != n)
                rightsum[i] += rightsum[next];
            st.push(i);
        }

        long maxcount = 0;
        for (int i = 0; i < n; i++) {
            maxcount = Math.max(maxcount, leftsum[i] + rightsum[i] - maxHeights[i]);
        }
        return maxcount;
    }
}
```

# ***If you like the solution Please Upvote and subscribe to my youtube channel***
***It Motivates me to record more videos
Thank you*** \uD83D\uDE00