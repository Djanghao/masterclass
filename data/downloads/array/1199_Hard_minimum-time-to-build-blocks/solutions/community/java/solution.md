# Min Cost to Split/Merge Tree

**Author:** user8184Aj
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-time-to-build-blocks/solutions/3990368/](https://leetcode.com/problems/minimum-time-to-build-blocks/solutions/3990368/)

---

# Intuition

if you think of this problem as N nodes (workers) doing works, and then you merge the two smallest times with cost split. This generates a worked with the result.

# Approach
- Priority Queue

# Complexity
- Time complexity:
$$O(n*log(n))$$

- Space complexity:
$$O(n)$$

# Code
![image.png](./images/0.png)

```java
class Solution {
    public int minBuildTime(int[] blocks, int split) {
        PriorityQueue<Integer> pq=new PriorityQueue<>();
        for(int n: blocks) pq.add(n);
        while(pq.size()>1) {
            pq.remove();
            pq.add(split+pq.remove());
        }
        return pq.remove();
    }
}
```

# Alternatives

- Time complexity:
$$O(n^2)$$

- Space complexity:
$$O(n^2)$$

![image.png](./images/1.png)

```java
class Solution {
    public int minBuildTime(int[] blocks, int split) {
        Arrays.sort(blocks);
        for(int a=0,b=blocks.length-1;a<b;a++,b--) {
            int tmp=blocks[a];
            blocks[a]=blocks[b];
            blocks[b]=tmp;
        }
        return helper(1,0,blocks,split,new int[blocks.length+1][blocks.length]);
    }
    int helper(int w, int left,int[] blocks, int split, int[][] memo) {
        if(left==blocks.length) return 0;
        if(w==0) return Integer.MAX_VALUE/2;
        int b=blocks[left];
        if(w>=blocks.length-left) return b;
        if(memo[w][left]>0) return memo[w][left]-1;
        int min=Math.min(
            Math.max(b,helper(w-1,left+1,blocks,split,memo)),
            split+helper(2*w,left,blocks,split,memo)
            );
        return (memo[w][left]=min+1)-1;
    }
}
```

