# C# | BinarySearch & PrefixSum & PriorityQueue & HashMap

**Author:** bobdog1986
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-segment-sum-after-removals/solutions/3114212/](https://leetcode.com/problems/maximum-segment-sum-after-removals/solutions/3114212/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
At first there will be only 1 interval [0,n-1] and we can using PrefixSum approach to get sum of range [i,j] in O(1).

Every remove operation equal to get the correct interval , then split it to at most 2 new sub intervals.

How to get max value of all valid intervals in list?
We can using PriorityQueue as max heap.

But there must be some out-of-date max values, we need a hashMap to ignore them.

# Approach
<!-- Describe your approach to solving the problem. -->
- Design a List<int[]> to hold all valid intervals.
- Create a prefixSum long[ ] to cache sum of range [0,i]
- Using binary search to find the interval contain removeQueries[i]
- Using PriorityQueue as maxheap to get max sum of all intervals
- Create a Dictionary<long,int> as {maxValue, frequencies}, to avoid invalid max value.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
public class Solution {
         public long[] MaximumSegmentSum(int[] nums, int[] removeQueries)
        {
            int n = nums.Length;
            long[] res = new long[n];
            //list to store all intervals, sorted
            List<int[]> list =new List<int[]>() { new int[] { 0, n-1 } };
            long[] prefixSum = new long[n];//create prefixSum array
            long sum = 0;
            for(int i = 0; i<n; i++)
            {
                sum+= nums[i];
                prefixSum[i]= sum;
            }
            //max heap
            PriorityQueue<long, long> pq = new PriorityQueue<long, long>(Comparer<long>.Create((x, y) =>
            {
                if (x>y) return -1;
                else if (x<y) return 1;
                else return 0;
            }));

            //{maxValue, frequencies} pairs
            Dictionary<long, int> dict = new Dictionary<long, int>();
            dict.Add(sum,1);//if dict[k]==0, this k is invalid

            pq.Enqueue(sum, sum);

            int index = 0;
            while (index<n)
            {
                int left = 0;
                int right = list.Count-1;
                //using binary search to get correct interval
                while (left<right)
                {
                    int mid = (left+right)/2;
                    int[] curr = list[mid];
                    if (curr[1]<removeQueries[index])
                    {
                        left = mid+1;
                    }
                    else if (list[mid][0]>removeQueries[index])
                    {
                        right = mid;
                    }
                    else
                    {
                        left=mid;
                        break;
                    }
                }

                int[] toDelete = list[left];//split this interval
                list.RemoveAt(left);//remove from list
                long total = prefixSum[toDelete[1]];
                if(toDelete[0]>0)
                    total-=prefixSum[toDelete[0]-1];

                dict[total]--;//subtract freq
                //after split , right sub is valid
                if (toDelete[1] > removeQueries[index])
                {
                    list.Insert(left, new int[] { removeQueries[index]+1, toDelete[1] });
                    long sub = prefixSum[toDelete[1]]- prefixSum[removeQueries[index]];
                    if (!dict.ContainsKey(sub))
                        dict.Add(sub, 0);
                    dict[sub]++;//update dict
                    pq.Enqueue(sub, sub);
                }
                //left sub is valid
                if (toDelete[0] < removeQueries[index])
                {
                    list.Insert(left, new int[] { toDelete[0],removeQueries[index]-1 });
                    long sub = prefixSum[removeQueries[index]-1];
                    if (toDelete[0]>0)
                        sub-= prefixSum[toDelete[0]-1];

                    if (!dict.ContainsKey(sub))
                        dict.Add(sub, 0);
                    dict[sub]++;
                    pq.Enqueue(sub, sub);
                }

                long max = 0;
                while (pq.Count>0)
                {
                    long top = pq.Peek();
                    //if currect max is valid
                    if (dict.ContainsKey(top)&&dict[top]>0)
                    {
                        max=top;
                        break;
                    }
                    else pq.Dequeue();//discard invalid
                }
                res[index++] = max;
            }

            return res;
        }

}
```